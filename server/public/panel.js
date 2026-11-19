// Side-panel UI. Runs inside the extension (in an iframe) or on its own in a browser tab
// (paste mode). Everything here is served by the server, so changes ship without an
// extension update.
(() => {
  const $ = (id) => document.getElementById(id);
  const embedded = window.parent !== window;
  const state = { extOrigin: null, ext: null, token: "", reader: null, chat: null, result: null, provider: "", busy: false };

  // ------------------------------------------------------------ bridge to the extension
  const pending = new Map();
  let seq = 0;
  function callExt(type, payload = {}, timeoutMs = 90000) {
    return new Promise((resolve, reject) => {
      if (!state.extOrigin) return reject(new Error("Not connected to the extension."));
      const id = ++seq;
      pending.set(id, { resolve, reject });
      window.parent.postMessage({ source: "sra-panel", id, type, ...payload }, state.extOrigin);
      setTimeout(() => { if (pending.delete(id)) reject(new Error("The extension did not respond. Reload the page and try again.")); }, timeoutMs);
    });
  }
  window.addEventListener("message", (e) => {
    if (!embedded || e.source !== window.parent || !String(e.origin).startsWith("chrome-extension://")) return;
    const msg = e.data || {};
    if (msg.source !== "sra-extension") return;
    if (msg.type === "init") {
      state.extOrigin = e.origin;
      state.ext = msg.extension || {};
      state.token = msg.token || "";
      onExtensionReady();
    } else if (msg.type === "response" && pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id);
      msg.ok ? p.resolve(msg.data) : p.reject(new Error(msg.error || "Extension error"));
    } else if (msg.type === "tabChanged") {
      if (state.result) { $("result").classList.add("stale"); setStatus("The open chat changed. Click Suggest reply for this chat."); }
    }
  });

  // ------------------------------------------------------------ helpers
  function setStatus(text, error = false) { $("status").textContent = text || ""; $("status").className = "status" + (error ? " error" : ""); }
  function show(id, on = true) { $(id).hidden = !on; }
  function setBusy(on, label) {
    state.busy = on;
    $("suggestBtn").disabled = on;
    $("suggestBtn").classList.toggle("busy", on);
    $("suggestBtn").querySelector(".btn-label").textContent = label || "Suggest reply";
  }
  async function api(path, body) {
    const res = await fetch(path, {
      method: body ? "POST" : "GET",
      headers: { "Content-Type": "application/json", ...(state.token && { "X-Access-Token": state.token }) },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `Server error ${res.status}`);
    return data;
  }
  const versionLess = (a, b) => {
    const pa = String(a).split(".").map(Number), pb = String(b).split(".").map(Number);
    for (let i = 0; i < 3; i++) if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) < (pb[i] || 0);
    return false;
  };
  const el = (tag, props = {}, ...kids) => { const n = Object.assign(document.createElement(tag), props); n.append(...kids.filter((k) => k != null)); return n; };

  // ------------------------------------------------------------ startup
  async function loadConfig() {
    try {
      const cfg = await api("/api/config");
      state.reader = cfg.reader;
      state.provider = cfg.provider;
      state.minExt = cfg.minExtensionVersion;
      $("conn").textContent = `Connected · v${cfg.version}`;
      $("conn").className = "pill ok";
    } catch {
      $("conn").textContent = "Server offline";
      $("conn").className = "pill bad";
    }
  }

  function onExtensionReady() {
    show("settingsBtn", true);
    show("pickArea", true);
    show("insertBtn", true);
    if (state.minExt && state.ext.version && versionLess(state.ext.version, state.minExt)) {
      $("banner").textContent = `Please update the extension (you have ${state.ext.version}, ${state.minExt} is needed). See the setup guide.`;
      show("banner", true);
    }
    setStatus("Open a client chat, then click Suggest reply.");
  }

  // ------------------------------------------------------------ reading the chat
  function parsePasted(text) {
    const lines = text.split(/\r?\n/);
    const re = /^\s*(customer|client|user|guest|visitor|agent|support|me|bot|ai)\s*[:\-]\s*(.*)$/i;
    if (!lines.some((l) => re.test(l))) return { mode: "text", text: text.trim(), messages: [] };
    const messages = [];
    for (const line of lines) {
      const m = line.match(re);
      if (m) {
        const who = m[1].toLowerCase();
        messages.push({ role: ["agent", "support", "me"].includes(who) ? "agent" : ["bot", "ai"].includes(who) ? "bot" : "customer", text: m[2] });
      } else if (messages.length && line.trim()) messages[messages.length - 1].text += "\n" + line.trim();
    }
    return { mode: "messages", messages, text: "" };
  }

  function describeRead(chat) {
    const where = chat.source === "selection" ? "highlighted text" : "open conversation";
    if (chat.mode === "messages") return `Read ${chat.messages.length} messages from the ${where}${chat.rolesGuessed ? " (speakers guessed)" : ""}.`;
    return `Read ${chat.text.length.toLocaleString()} characters from the ${where}.`;
  }
  function renderRead(chat) {
    const lines = chat.mode === "messages" ? chat.messages.map((m) => `${m.role.toUpperCase()}: ${m.text}`) : [chat.text];
    if (chat.warnings?.length) lines.unshift(...chat.warnings.map((w) => `! ${w}`), "");
    $("readView").textContent = lines.join("\n");
    $("readText").textContent = describeRead(chat);
    show("readLine", true);
  }

  async function readChat() {
    if (!embedded || !state.extOrigin || !$("pasteBox").hidden) {
      const text = $("pasteText").value.trim();
      if (!text) { show("pasteBox", true); $("pasteText").focus(); throw new Error("Paste the conversation first."); }
      return { ...parsePasted(text), source: "paste" };
    }
    return callExt("readChat", { reader: state.reader });
  }

  // ------------------------------------------------------------ suggest
  async function suggest() {
    if (state.busy) return;
    show("areaHelp", false); show("manual", false); show("result", false); show("readView", false);
    setBusy(true, "Reading chat…"); setStatus("");
    try {
      if (!state.reader) await loadConfig();
      const chat = await readChat();
      if (chat.mode === "not-found") { show("areaHelp", true); setStatus(""); return; }
      if (!chat.messages?.length && !chat.text) throw new Error("No conversation text found. Open a chat or highlight the messages.");
      state.chat = chat;
      renderRead(chat);

      setBusy(true, "Drafting…"); show("skeleton", true);
      const result = await api("/api/suggest", { mode: chat.mode, rolesGuessed: chat.rolesGuessed, agency: chat.agency, messages: chat.messages, text: chat.text });
      show("skeleton", false);
      if (result.manual) return renderManual(result);
      renderResult(result);
    } catch (err) {
      show("skeleton", false);
      setStatus(err.message, true);
    } finally {
      setBusy(false);
    }
  }

  function renderManual(result) {
    state.prompt = result.prompt;
    $("pastedAnswer").value = "";
    show("manual", true);
    setStatus("Manual mode: copy the prompt into claude.ai.");
  }

  const BADGES = {
    high: ["high", "High confidence"],
    medium: ["medium", "Medium confidence · review"],
    low: ["low", "Not sure · verify or escalate"],
    needs_info: ["needs_info", "Needs more info"],
    escalate: ["escalate", "Escalate by ticket"],
  };

  function renderResult(r) {
    state.result = r;
    $("result").classList.remove("stale");
    const [cls, label] = BADGES[r.confidence] || BADGES.low;
    $("badge").className = `badge ${cls}`;
    $("badge").textContent = label;
    $("topics").textContent = r.topics?.length ? r.topics.join(" · ") : "";

    const esc = r.escalation || [];
    show("escalation", esc.length > 0);
    $("escalation").textContent = esc.length
      ? `Company rule: ${esc.map((e) => e.reason).join(", ")} goes to an escalation ticket (${[...new Set(esc.map((e) => e.team))].join(", ")}). Don't resolve it in chat.`
      : "";

    $("issues").replaceChildren(...(r.issues || []).map((i) => el("li", { textContent: i })));
    show("issues", (r.issues || []).length > 0);

    $("reply").value = r.reply || "";
    $("reply").style.height = "auto";
    requestAnimationFrame(() => { $("reply").style.height = Math.min(520, $("reply").scrollHeight + 4) + "px"; });
    $("notes").textContent = r.agentNotes || "—";
    $("actionNote").textContent = "";

    const byId = new Map((r.sources || []).map((s) => [s.cid, s]));
    $("evidence").replaceChildren(...(r.evidence || []).map((ev) => {
      const li = el("li");
      const detail = el("div", { className: "source-detail", hidden: true });
      for (const id of ev.ids) {
        const s = byId.get(id);
        const chip = el("button", { className: `chip${s?.type === "ticket" ? " ticket" : ""}`, textContent: id, title: s?.title || id });
        chip.addEventListener("click", () => {
          const same = !detail.hidden && detail.dataset.id === id;
          detail.hidden = same;
          detail.dataset.id = id;
          detail.textContent = s ? `${s.title}\n\n${s.excerpt}` : "Source not found.";
        });
        li.append(chip);
      }
      li.append(ev.text, detail);
      return li;
    }));
    show("noEvidence", !(r.evidence || []).length);

    $("sourceCount").textContent = (r.sources || []).length;
    $("sources").replaceChildren(...(r.sources || []).map((s) => {
      const d = el("div", { className: "source-detail", hidden: true, textContent: s.excerpt });
      const t = el("button", { className: "link title", textContent: `${s.cid} · ${s.title}${s.type === "ticket" && s.csat ? ` · CSAT ${s.csat}` : ""}${s.used ? " · used" : ""}` });
      t.addEventListener("click", () => (d.hidden = !d.hidden));
      return el("li", { className: s.used ? "used" : "" }, t, d);
    }));

    const bits = [];
    if (r.aiCalled) bits.push(r.model || "AI");
    else bits.push("No AI used");
    if (r.usage) bits.push(`${r.usage.input.toLocaleString()} in / ${r.usage.output.toLocaleString()} out tokens`);
    if (r.ms) bits.push(`${(r.ms / 1000).toFixed(1)}s`);
    if (r.read?.trimmed) bits.push("oldest messages trimmed");
    $("meta").textContent = bits.join(" · ");

    show("result", true);
    setStatus(r.confidence === "high" ? "Review, then insert or copy." : "Review carefully before sending.");
  }

  // ------------------------------------------------------------ actions
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { if (state.extOrigin) { await callExt("copy", { text }); return true; } return false; }
  }

  $("suggestBtn").addEventListener("click", suggest);
  $("pasteToggle").addEventListener("click", () => { show("pasteBox", $("pasteBox").hidden); $("pasteToggle").textContent = $("pasteBox").hidden ? "Paste chat instead" : "Read from page"; if (!embedded) show("pasteBox", true); });
  $("viewRead").addEventListener("click", () => show("readView", $("readView").hidden));
  $("settingsBtn").addEventListener("click", () => callExt("openSettings").catch(() => {}));

  async function pickArea() {
    setStatus("Click the area on the page that shows the messages. Press Esc to cancel.");
    try {
      const picked = await callExt("pickArea", {}, 120000);
      show("areaHelp", false);
      setStatus(picked ? "Chat area saved. Click Suggest reply." : "Cancelled.");
    } catch (e) { setStatus(e.message, true); }
  }
  $("pickArea").addEventListener("click", pickArea);
  $("pickArea2").addEventListener("click", pickArea);

  $("copyBtn").addEventListener("click", async () => {
    $("actionNote").textContent = (await copyText($("reply").value)) ? "Copied" : "Copy failed, select the text and press Ctrl+C";
  });
  $("insertBtn").addEventListener("click", async () => {
    try {
      const replace = state.confirmReplace === true;
      state.confirmReplace = false;
      $("insertBtn").textContent = "Insert into reply box";
      const r = await callExt("insertReply", { text: $("reply").value, reader: state.reader, replace });
      if (r?.reason === "not-empty") {
        state.confirmReplace = true;
        $("insertBtn").textContent = "Replace text in reply box";
        $("actionNote").textContent = "The reply box already has text. Click again to replace it.";
        return;
      }
      $("actionNote").textContent = r?.ok ? "Inserted. Review and press send yourself." : (r?.message || "Couldn't find the reply box. Use Copy instead.");
    } catch (e) { $("actionNote").textContent = e.message; }
  });
  $("copyPrompt").addEventListener("click", async () => { setStatus((await copyText(state.prompt || "")) ? "Prompt copied." : "Copy failed."); });
  $("checkAnswer").addEventListener("click", async () => {
    try {
      const r = await api("/api/check", { chat: state.chat, answer: $("pastedAnswer").value });
      show("manual", false);
      renderResult(r);
    } catch (e) { setStatus(e.message, true); }
  });

  // ------------------------------------------------------------ go
  loadConfig();
  if (embedded) window.parent.postMessage({ source: "sra-panel", type: "hello" }, "*");
  else { show("pasteBox", true); show("pasteToggle", false); setStatus("Paste a conversation to try the assistant. In the extension it reads the open chat for you."); }
})();
