const $ = (id) => document.getElementById(id);
getSettings().then((s) => { $("serverUrl").value = s.serverUrl; $("accessToken").value = s.accessToken; });
$("save").addEventListener("click", async () => {
  let url;
  try { url = new URL($("serverUrl").value.trim()); } catch { $("msg").textContent = "That isn't a valid address."; return; }
  const local = ["127.0.0.1", "localhost"].includes(url.hostname);
  if (url.protocol !== "https:" && !local) { $("msg").textContent = "Use https:// for a server that isn't on this computer."; return; }
  const serverUrl = url.origin;
  if (!local) {
    const granted = await chrome.permissions.request({ origins: [`${serverUrl}/*`] }).catch(() => false);
    if (!granted) { $("msg").textContent = "Permission to reach that server was not given."; return; }
  }
  await chrome.storage.sync.set({ serverUrl, accessToken: $("accessToken").value.trim() });
  $("msg").textContent = "Saved. Testing…";
  try {
    const res = await fetch(`${serverUrl}/api/health`);
    const h = await res.json();
    $("msg").textContent = `Connected to v${h.version} (${h.knowledge.sections} guide sections, ${h.knowledge.tickets.toLocaleString()} past tickets).`;
  } catch { $("msg").textContent = "Saved, but the server didn't answer. Is it running?"; }
});
