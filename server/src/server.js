// Web server: serves the side-panel UI (so UI changes need no extension update) and the API.
//   GET  /panel            side-panel UI, loaded inside the extension
//   GET  /api/health       status
//   GET  /api/config       reader settings for the extension (selectors etc.)
//   POST /api/suggest      { messages|text, agency, mode, rolesGuessed } -> checked suggestion
//   POST /api/check        { chat, answer } -> checks an answer pasted back in manual mode
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { config, isLoopback, SERVER_DIR } from "./config.js";
import { kbStamp, loadKnowledge } from "./knowledge.js";
import { checkPastedAnswer, suggestReply } from "./suggest.js";
import { describeError } from "./providers.js";

const PUBLIC_DIR = path.join(SERVER_DIR, "public");
const READER_CONFIG = path.join(SERVER_DIR, "reader-config.json");
const MAX_BODY = 1_000_000;
const STATIC = {
  "/panel": ["panel.html", "text/html; charset=utf-8"],
  "/panel.css": ["panel.css", "text/css; charset=utf-8"],
  "/panel.js": ["panel.js", "text/javascript; charset=utf-8"],
  "/logo.svg": ["logo.svg", "image/svg+xml"],
};

export function createServer({ kb: initialKb, generate } = {}) {
  let kb = initialKb || loadKnowledge(config.kbDir);
  let lastStampCheck = Date.now();

  // Reload the knowledge base when its files change (checked at most once a minute).
  function currentKb() {
    if (initialKb || Date.now() - lastStampCheck < 60_000) return kb;
    lastStampCheck = Date.now();
    if (kbStamp(config.kbDir) !== kb.stamp) {
      try { kb = loadKnowledge(config.kbDir); console.log(`Knowledge base reloaded: ${kb.sections.length} sections, ${kb.tickets.length} tickets.`); }
      catch (e) { console.error("Knowledge reload failed, keeping the old copy:", e.message); }
    }
    return kb;
  }

  const hits = new Map();
  function rateLimited(ip) {
    const now = Date.now();
    const list = (hits.get(ip) || []).filter((t) => now - t < 60_000);
    list.push(now);
    hits.set(ip, list);
    return list.length > config.rateLimitPerMinute;
  }

  return http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://x");
    const origin = req.headers.origin || "";
    const selfOrigin = `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`;
    const fromExtension = origin.startsWith("chrome-extension://");
    const allowedOrigin = !origin || origin === selfOrigin || fromExtension;

    const send = (status, body, headers = {}) => {
      res.writeHead(status, {
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Cache-Control": "no-store",
        ...(fromExtension && { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "Content-Type, X-Access-Token", "Access-Control-Allow-Methods": "GET, POST, OPTIONS" }),
        ...headers,
      });
      res.end(typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body));
    };
    const json = (status, body) => send(status, body, { "Content-Type": "application/json" });

    if (!allowedOrigin) return json(403, { error: "Forbidden origin" });
    if (req.method === "OPTIONS") return send(204, "");

    if (req.method === "GET" && STATIC[url.pathname]) {
      const [file, type] = STATIC[url.pathname];
      return send(200, fs.readFileSync(path.join(PUBLIC_DIR, file)), {
        "Content-Type": type,
        "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'self' chrome-extension:",
      });
    }
    if (req.method === "GET" && url.pathname === "/api/health") {
      const k = currentKb();
      return json(200, { ok: true, version: config.version, provider: config.provider, knowledge: { sections: k.sections.length, tickets: k.tickets.length }, tokenRequired: !!config.accessToken });
    }
    if (req.method === "GET" && url.pathname === "/api/config") {
      const reader = JSON.parse(fs.readFileSync(READER_CONFIG, "utf8"));
      delete reader._help;
      return json(200, { version: config.version, minExtensionVersion: config.minExtensionVersion, provider: config.provider, reader });
    }
    if (req.method !== "POST" || !["/api/suggest", "/api/check"].includes(url.pathname)) return json(404, { error: "Not found" });

    if (config.accessToken && req.headers["x-access-token"] !== config.accessToken) return json(401, { error: "Access token missing or wrong. Set it in the extension's settings." });
    if (rateLimited(req.socket.remoteAddress)) return json(429, { error: "Too many requests. Wait a minute and try again." });

    let body = "";
    for await (const chunk of req) {
      body += chunk;
      if (body.length > MAX_BODY) return json(413, { error: "Conversation is too large." });
    }
    let input;
    try { input = JSON.parse(body || "{}"); } catch { return json(400, { error: "Body is not valid JSON" }); }

    try {
      const started = Date.now();
      if (url.pathname === "/api/check") return json(200, checkPastedAnswer(currentKb(), input.chat || {}, String(input.answer || "")));
      const result = await suggestReply(currentKb(), input, generate ? { generate } : undefined);
      // Logs counts only, never chat content.
      console.log(`${new Date().toISOString()} suggest ${((Date.now() - started) / 1000).toFixed(1)}s status=${result.status || "manual"} ai=${result.aiCalled} tokens=${result.usage ? `${result.usage.input}/${result.usage.output}` : "-"}`);
      return json(200, result);
    } catch (err) {
      const { status, message } = describeError(err);
      if (status >= 500) console.error(err);
      return json(status, { error: message });
    }
  });
}

// Started directly (npm start)
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(SERVER_DIR, "src/server.js")) {
  if (!isLoopback(config.host) && !config.accessToken) {
    console.error(`HOST=${config.host} makes the server reachable from other machines. Set ACCESS_TOKEN in .env first.`);
    process.exit(1);
  }
  for (const name of config.provider.split(",").map((s) => s.trim())) {
    const needsKey = { api: "ANTHROPIC_API_KEY", groq: "GROQ_API_KEY", gemini: "GEMINI_API_KEY" }[name];
    if (needsKey && !process.env[needsKey] && !process.env.LLM_API_KEY) {
      console.error(`PROVIDER ${name} needs ${needsKey}. Add it in the hosting dashboard or server/.env.`);
      process.exit(1);
    }
  }
  console.log(`Loading knowledge base from ${config.kbDir} ...`);
  const server = createServer();
  server.listen(config.port, config.host, () => console.log(`Reply assistant v${config.version} running at http://${config.host}:${config.port} (provider: ${config.provider})`));
}
