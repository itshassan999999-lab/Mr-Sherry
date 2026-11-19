// Injected into the support site only when the agent clicks something in the panel.
// Reads ONLY the open conversation (never the inbox list, contact panel or the rest of
// the page), lets the agent point at the chat area once, and inserts a reply into the
// reply box. It never sends anything.
(() => {
  if (window.__supportReply) return;

  const clean = (t) => (t || "").replace(/ /g, " ").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  const q = (sel, root = document) => { try { return sel ? root.querySelector(sel) : null; } catch { return null; } };
  const qa = (sel, root = document) => { try { return sel ? [...root.querySelectorAll(sel)] : []; } catch { return []; } };
  const visible = (el) => {
    if (!el || !el.getBoundingClientRect) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none" && Number(cs.opacity) > 0;
  };
  const scrollable = (el) => {
    const cs = getComputedStyle(el);
    return /(auto|scroll|overlay)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 4;
  };

  // ---------------------------------------------------------------- reply box
  function editableCandidates() {
    return qa('textarea, [contenteditable="true"], [contenteditable=""], [role="textbox"]')
      .filter((el) => visible(el) && !el.readOnly && !el.disabled && el.getBoundingClientRect().width >= 160)
      .filter((el) => !el.closest('[role="search"], form[action*="search"]') && !/search/i.test(el.getAttribute("placeholder") || el.getAttribute("aria-label") || ""));
  }
  function findComposer(sel) {
    const configured = q(sel.composer);
    if (configured && visible(configured)) return configured;
    const cands = editableCandidates();
    if (!cands.length) return null;
    const active = document.activeElement;
    const focused = cands.find((c) => c === active || c.contains(active));
    if (focused) return focused;
    // The reply box is usually the lowest, widest text box on screen.
    return cands.sort((a, b) => {
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      return (rb.bottom + rb.width * 0.2) - (ra.bottom + ra.width * 0.2);
    })[0];
  }

  // ---------------------------------------------------------------- conversation area
  function overlapX(a, b) { return Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)); }

  function autoDetectConversation(sel) {
    const composer = findComposer(sel);
    if (!composer) return null;
    const c = composer.getBoundingClientRect();
    const fits = (el) => {
      if (el.contains(composer) || !visible(el)) return false;
      const r = el.getBoundingClientRect();
      return r.height >= 80 && r.bottom <= c.top + 24 && overlapX(r, c) >= Math.min(r.width, c.width) * 0.6 && (el.innerText || "").trim().length > 0;
    };
    let node = composer.parentElement;
    for (let depth = 0; node && node !== document.body && depth < 14; depth++, node = node.parentElement) {
      // 1) A scrolling message list above the reply box (the usual chat layout).
      const scrollers = qa("*", node).filter((el) => scrollable(el) && fits(el));
      if (scrollers.length) return scrollers.sort((a, b) => b.clientHeight * b.clientWidth - a.clientHeight * a.clientWidth)[0];
      // 2) A short chat that doesn't scroll yet: the block right above the reply box.
      const above = [...node.children].filter(fits);
      if (above.length) return above.sort((a, b) => b.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom)[0];
    }
    return null;
  }

  // One entry per message: uses configured selectors, else the list element with the most
  // text-bearing children, with speaker guessed from left/right alignment.
  function bubbleOf(el) {
    let b = el;
    while (b.children.length === 1 && (b.firstElementChild.innerText || "").trim() === (b.innerText || "").trim()) b = b.firstElementChild;
    return b;
  }
  function guessMessages(container, cfg) {
    let best = null, bestCount = 0;
    const consider = [container, ...qa("*", container)].slice(0, 4000);
    for (const el of consider) {
      if (el.children.length < 2) continue;
      const n = [...el.children].filter((ch) => visible(ch) && (ch.innerText || "").trim()).length;
      if (n > bestCount || (n === bestCount && best && best.contains(el))) { best = el; bestCount = n; }
    }
    if (!best || bestCount < 2) return null;
    const box = best.getBoundingClientRect();
    const out = [];
    for (const ch of best.children) {
      if (!visible(ch)) continue;
      const text = clean(ch.innerText);
      if (!text) continue;
      const r = bubbleOf(ch).getBoundingClientRect();
      const leftGap = r.left - box.left, rightGap = box.right - r.right;
      let side = "unknown";
      if (r.width < box.width * 0.85) side = leftGap > rightGap + 30 ? "right" : rightGap > leftGap + 30 ? "left" : "unknown";
      const role = side === "unknown" ? "unknown" : side === (cfg.agentSide || "right") ? "agent" : "customer";
      out.push({ role, text });
    }
    return out.length >= 2 ? out : null;
  }

  function read(cfg = {}, learned = "") {
    const sel = cfg.selectors || {};
    const maxChars = cfg.maxChars || 24000;
    const result = { mode: "", source: "", agency: "", messages: [], text: "", rolesGuessed: false, warnings: [] };
    const agencyEl = q(sel.agency);
    if (agencyEl) result.agency = clean(agencyEl.innerText).slice(0, 120);

    // Highlighted text wins: the agent chose exactly what to send.
    const selection = String(window.getSelection?.() || "").trim();
    if (cfg.useSelection !== false && selection.length >= 30) {
      return { ...result, mode: "text", source: "selection", text: clean(selection).slice(-maxChars) };
    }

    let container = null;
    if (sel.conversation) { container = q(sel.conversation); if (!container) result.warnings.push("The configured conversation selector matched nothing; used auto-detection."); }
    if (!container && learned) { container = q(learned); result.source = "saved"; if (!container) result.warnings.push("The saved chat area wasn't found on this page."); }
    if (!container) { container = autoDetectConversation(sel); result.source = "auto"; }
    if (!container) return { ...result, mode: "not-found" };
    if (sel.conversation && container === q(sel.conversation)) result.source = "configured";

    const composer = findComposer(sel);
    const draft = composer && container.contains(composer) ? clean(composer.innerText || composer.value) : "";

    // 1) Configured message selectors.
    const items = qa(sel.message, container).filter(visible);
    if (items.length) {
      const agentNames = (cfg.agentNames || []).map((n) => n.toLowerCase());
      for (const el of items) {
        const text = clean((q(sel.messageText, el) || el).innerText);
        if (!text) continue;
        let role = "customer";
        if (sel.botMessage && (el.matches(sel.botMessage) || q(sel.botMessage, el))) role = "bot";
        else if (sel.agentMessage && (el.matches(sel.agentMessage) || q(sel.agentMessage, el))) role = "agent";
        else if (!sel.agentMessage) role = "unknown";
        const author = clean(q(sel.messageAuthor, el)?.innerText || "").toLowerCase();
        if (author && agentNames.includes(author)) role = "agent";
        result.messages.push({ role, text });
      }
      result.mode = "messages";
    } else {
      // 2) Guess the message list from the layout.
      const guessed = guessMessages(container, cfg);
      if (guessed) { result.messages = guessed; result.mode = "messages"; result.rolesGuessed = true; }
    }

    if (result.mode === "messages") {
      if (draft) result.messages = result.messages.filter((m) => m.text !== draft);
      // Keep the whole conversation unless it's huge; then drop the oldest messages.
      let total = result.messages.reduce((n, m) => n + m.text.length, 0);
      while (result.messages.length > 2 && total > maxChars) total -= result.messages.shift().text.length;
      return result;
    }
    // 3) Plain text of the conversation area only.
    let text = clean(container.innerText);
    if (draft && text.endsWith(draft)) text = text.slice(0, -draft.length).trim();
    return { ...result, mode: "text", text: text.slice(-maxChars) };
  }

  // ---------------------------------------------------------------- point at the chat area
  function selectorFor(el) {
    const stableId = (id) => id && !/\d{3,}|[a-f0-9]{8,}/i.test(id);
    const stableClasses = (n) => [...n.classList].filter((c) => !/\d{2,}|^css-|^sc-|^_|[A-Z].*[a-z].*[A-Z]{2}/.test(c) && c.length < 40).slice(0, 3);
    const unique = (s) => { try { return document.querySelectorAll(s).length === 1; } catch { return false; } };
    if (stableId(el.id) && unique(`#${CSS.escape(el.id)}`)) return `#${CSS.escape(el.id)}`;
    const parts = [];
    for (let n = el; n && n !== document.documentElement && parts.length < 8; n = n.parentElement) {
      if (stableId(n.id)) { parts.unshift(`#${CSS.escape(n.id)}`); break; }
      let part = n.tagName.toLowerCase() + stableClasses(n).map((c) => `.${CSS.escape(c)}`).join("");
      const siblings = n.parentElement ? [...n.parentElement.children].filter((s) => s.tagName === n.tagName) : [];
      if (siblings.length > 1 && !stableClasses(n).length) part += `:nth-of-type(${siblings.indexOf(n) + 1})`;
      parts.unshift(part);
      if (unique(parts.join(" > "))) break;
    }
    return parts.join(" > ");
  }

  function pick() {
    return new Promise((resolve) => {
      const box = document.createElement("div");
      const tip = document.createElement("div");
      Object.assign(box.style, { position: "fixed", pointerEvents: "none", zIndex: 2147483646, border: "2px solid #4f46e5", background: "rgba(79,70,229,.08)", borderRadius: "6px", transition: "all .05s" });
      Object.assign(tip.style, { position: "fixed", top: "12px", left: "50%", transform: "translateX(-50%)", zIndex: 2147483647, background: "#17171c", color: "#fff", font: "13px system-ui, sans-serif", padding: "8px 14px", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0,0,0,.25)" });
      tip.textContent = "Click the conversation messages area. Press Esc to cancel.";
      document.documentElement.append(box, tip);
      let target = null;
      const area = (el) => {
        for (let n = el, i = 0; n && n !== document.body && i < 8; n = n.parentElement, i++) if (scrollable(n)) return n;
        return el;
      };
      const move = (e) => {
        target = area(e.target);
        const r = target.getBoundingClientRect();
        Object.assign(box.style, { top: `${r.top}px`, left: `${r.left}px`, width: `${r.width}px`, height: `${r.height}px` });
      };
      const done = (value) => {
        removeEventListener("mousemove", move, true); removeEventListener("click", click, true); removeEventListener("keydown", key, true);
        box.remove(); tip.remove(); resolve(value);
      };
      const click = (e) => { e.preventDefault(); e.stopPropagation(); done(target ? selectorFor(target) : null); };
      const key = (e) => { if (e.key === "Escape") { e.preventDefault(); done(null); } };
      addEventListener("mousemove", move, true); addEventListener("click", click, true); addEventListener("keydown", key, true);
    });
  }

  // ---------------------------------------------------------------- insert (never sends)
  function insert(cfg = {}, text = "", replace = false) {
    const composer = findComposer(cfg.selectors || {});
    if (!composer) return { ok: false, message: "Couldn't find the reply box. Click into it once, then try again, or use Copy." };
    const isField = composer.tagName === "TEXTAREA" || composer.tagName === "INPUT";
    const current = clean(isField ? composer.value : composer.innerText);
    if (current && !replace) return { ok: false, reason: "not-empty" };
    composer.focus();
    if (isField) {
      const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(composer), "value").set;
      setter.call(composer, text);
      composer.dispatchEvent(new Event("input", { bubbles: true }));
      composer.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      const range = document.createRange();
      range.selectNodeContents(composer);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(range);
      if (!document.execCommand("insertText", false, text)) {
        composer.textContent = text;
        composer.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
      }
    }
    return { ok: true };
  }

  window.__supportReply = { read, pick, insert, selectorFor, autoDetectConversation };
})();
