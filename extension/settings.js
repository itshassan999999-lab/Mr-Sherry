// Shared settings (stored in Chrome sync storage, set on the Settings page).
// eslint-disable-next-line no-unused-vars
// The hosted server. Change it in Settings if your Render address is different.
const DEFAULT_SERVER_URL = "https://mr-sherry-assistant.onrender.com";
// eslint-disable-next-line no-unused-vars
const SETTINGS_DEFAULTS = { serverUrl: DEFAULT_SERVER_URL, accessToken: "" };
// eslint-disable-next-line no-unused-vars
async function getSettings() {
  const s = await chrome.storage.sync.get(SETTINGS_DEFAULTS);
  return { ...s, serverUrl: String(s.serverUrl || SETTINGS_DEFAULTS.serverUrl).replace(/\/+$/, "") };
}
