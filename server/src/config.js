// All server settings in one place. Set them in server/.env (see .env.example).
import "./env.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const SERVER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(fs.readFileSync(path.join(SERVER_DIR, "package.json"), "utf8"));

function findKbDir() {
  if (process.env.KB_DIR) return path.resolve(SERVER_DIR, process.env.KB_DIR);
  const candidates = [
    path.resolve(SERVER_DIR, "../knowledge"),
    path.resolve(SERVER_DIR, "../../knowledge/guest-support"),
  ];
  return candidates.find((d) => fs.existsSync(path.join(d, "playbook.md"))) || candidates[0];
}

const env = process.env;
const num = (v, d) => (v === undefined || v === "" || Number.isNaN(Number(v)) ? d : Number(v));

export const config = {
  version: pkg.version,
  // Extensions older than this are asked to update (only needed when the reading code changes).
  minExtensionVersion: pkg.minExtensionVersion || "1.0.0",

  host: env.HOST || "127.0.0.1",
  port: num(env.PORT, 8787),
  accessToken: env.ACCESS_TOKEN || "",
  kbDir: findKbDir(),

  // api = Anthropic API key | claude-code = your logged-in Claude Code | manual = copy a prompt into claude.ai
  provider: env.PROVIDER || (env.ANTHROPIC_API_KEY ? "api" : "claude-code"),
  model: env.CLAUDE_MODEL || "claude-opus-5-5",
  effort: env.CLAUDE_EFFORT || "medium",
  cliModel: env.CLAUDE_CLI_MODEL || "",

  // Retrieval: how much reference material goes into each request (keeps token use low).
  maxGuideSections: num(env.MAX_GUIDE_SECTIONS, 6),
  maxPastTickets: num(env.MAX_PAST_TICKETS, 5),
  // The whole open conversation is read; only very long chats are trimmed (oldest part first).
  maxChatChars: num(env.MAX_CHAT_CHARS, 24000),
  // If no guide section scores at least this, the server does not call the AI and
  // answers "not sure, escalate" instead (saves usage and avoids guessing).
  minGuideScore: num(env.MIN_GUIDE_SCORE, 12),
  // Past tickets below this score are not shown or sent.
  minTicketScore: num(env.MIN_TICKET_SCORE, 25),

  rateLimitPerMinute: num(env.RATE_LIMIT_PER_MINUTE, 20),
};

export function isLoopback(host) {
  return ["127.0.0.1", "localhost", "::1"].includes(host);
}
