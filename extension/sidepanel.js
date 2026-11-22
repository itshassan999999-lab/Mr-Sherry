// Thin shell: loads the panel UI from the server in an iframe and does only what needs
// the browser: reading the open chat, pointing at the chat area, inserting a reply.
// UI, wording, rules and knowledge all live on the server, so they update without
// reinstalling the extension.
const $ = (id) => document.getElementById(id);
const VERSION = chrome.runtime.getManifest().version;
const ALLOWED_HOSTS = chrome.runtime.getManifest().host_permissions.map((p) => new URL(p.replace("*", "x")).hostname);
let settings, serverOrigin;

async function start() {
  settings = await getSettings();
  serverOrigin = new URL(settings.serverUrl).origin;
  $("offline").hidden = true;
  try {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 20000); // a hosted server may need a moment to wake up
    const res = await fetch(`${settings.serverUrl}/api/health`, { signal: ctrl.signal, cache: "no-store" });
    if (!res.ok) throw new Error(`Server answered ${res.status}`);
  } catch (e) {
    $("offlineDetail").textContent = `Tried ${settings.serverUrl} (${e.name === "AbortError" ? "no answer" : e.message}).`;
    $("offline").hidden = false;
    $("app").hidden = true;
    return;
  }
  $("app").src = `${settings.serverUrl}/panel?ext=${VERSION}`;
  $("app").hidden = false;
}

function post(msg) { $("app").contentWindow?.postMessage({ source: "sra-extension", ...msg }, serverOrigin); }

async function activeSupportTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let host = "";
  try { host = new URL(tab?.url || "").hostname; } catch {}
  if (!tab || !ALLOWED_HOSTS.includes(host)) throw new Error(`Open a client chat on ${ALLOWED_HOSTS.join(" or ")} first. The assistant only reads that site.`);
  return { tab, host };
}

async function runInPage(tabId, func, args) {
  await chrome.scripting.executeScript({ target: { tabId }, files: ["page-tools.js"] });
  const [res] = await chrome.scripting.executeScript({ target: { tabId }, func, args });
  return res?.result;
}

const learnedKey = (host) => `chatArea:${host}`;

const handlers = {
  async readChat({ reader }) {
    const { tab, host } = await activeSupportTab();
    const learned = (await chrome.storage.local.get(learnedKey(host)))[learnedKey(host)] || "";
    return runInPage(tab.id, (cfg, saved) => window.__supportReply.read(cfg, saved), [reader || {}, learned]);
  },
  async pickArea() {
    const { tab, host } = await activeSupportTab();
    const selector = await runInPage(tab.id, () => window.__supportReply.pick(), []);
    if (selector) await chrome.storage.local.set({ [learnedKey(host)]: selector });
    return selector;
  },
  async insertReply({ text, reader, replace }) {
    const { tab } = await activeSupportTab();
    return runInPage(tab.id, (cfg, t, r) => window.__supportReply.insert(cfg, t, r), [reader || {}, String(text || ""), !!replace]);
  },
  async copy({ text }) { await navigator.clipboard.writeText(String(text || "")); return true; },
  async openSettings() { chrome.runtime.openOptionsPage(); return true; },
  async saveToken({ token }) {
    await chrome.storage.sync.set({ accessToken: String(token || "").trim() }); // reloads the panel
    return true;
  },
};

window.addEventListener("message", async (e) => {
  if (e.origin !== serverOrigin || e.source !== $("app").contentWindow) return;
  const msg = e.data || {};
  if (msg.source !== "sra-panel") return;
  if (msg.type === "hello") return post({ type: "init", extension: { version: VERSION }, token: settings.accessToken });
  const handler = handlers[msg.type];
  if (!handler) return post({ type: "response", id: msg.id, ok: false, error: `Unknown request ${msg.type}` });
  try { post({ type: "response", id: msg.id, ok: true, data: await handler(msg) }); }
  catch (err) { post({ type: "response", id: msg.id, ok: false, error: err.message }); }
});

// Tell the panel when the agent switches chat, so an old suggestion isn't sent to the wrong client.
chrome.tabs.onActivated.addListener(() => post({ type: "tabChanged" }));
chrome.tabs.onUpdated.addListener((_id, info, tab) => { if (info.url && tab.active) post({ type: "tabChanged" }); });

$("retry").addEventListener("click", start);
$("openSettings").addEventListener("click", () => chrome.runtime.openOptionsPage());
chrome.storage.onChanged.addListener((_c, area) => { if (area === "sync") start(); });
start();
