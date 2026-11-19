// Shared settings (stored in Chrome sync storage, set on the Settings page).
// eslint-disable-next-line no-unused-vars
const SETTINGS_DEFAULTS = { serverUrl: "http://127.0.0.1:8787", accessToken: "" };
// eslint-disable-next-line no-unused-vars
async function getSettings() {
  const s = await chrome.storage.sync.get(SETTINGS_DEFAULTS);
  return { ...s, serverUrl: String(s.serverUrl || SETTINGS_DEFAULTS.serverUrl).replace(/\/+$/, "") };
}
