// Sends the prompt to the AI, chosen with PROVIDER (server/.env or the hosting dashboard).
import { spawn } from "node:child_process";
import Anthropic from "@anthropic-ai/sdk";
import { config } from "./config.js";
import { SYSTEM_PROMPT } from "./grounding.js";

const httpError = (message, status) => Object.assign(new Error(message), { status });

// PROVIDER=api: Anthropic API key, pay per use.
async function viaApi(userPrompt) {
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY
  const response = await client.beta.messages.create({
    model: config.model,
    max_tokens: 4000,
    thinking: { type: "adaptive" },
    output_config: { effort: config.effort },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });
  if (response.stop_reason === "refusal") throw httpError("The AI declined to draft this one. Please write it manually.", 422);
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
  return { text, model: response.model, usage: { input: response.usage.input_tokens, output: response.usage.output_tokens } };
}

// PROVIDER=claude-code: your own logged-in Claude Code, no tools, text only.
function viaClaudeCode(userPrompt) {
  return new Promise((resolve, reject) => {
    const args = ["-p", "--system-prompt", SYSTEM_PROMPT, "--tools", "", "--no-session-persistence", "--output-format", "text"];
    if (config.cliModel) args.push("--model", config.cliModel);
    const child = spawn("claude", args, { stdio: ["pipe", "pipe", "pipe"], shell: process.platform === "win32" });
    let out = "", err = "";
    const timer = setTimeout(() => { child.kill(); reject(httpError("The AI took too long (3 minutes). Try again.", 504)); }, 180000);
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", () => { clearTimeout(timer); reject(httpError("Could not run the `claude` command. Install Claude Code and log in, or set PROVIDER=manual.", 500)); });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code !== 0 || !out.trim()) return reject(httpError(`Claude Code failed${err ? ": " + err.trim().slice(0, 300) : ""}. Run \`claude\` once to log in.`, 502));
      resolve({ text: out, model: config.cliModel || "claude-code", usage: null });
    });
    child.stdin.end(userPrompt);
  });
}

// Free / open-model providers that speak the common "chat completions" format.
export const OPEN_PROVIDERS = {
  groq: { baseUrl: "https://api.groq.com/openai/v1", model: "llama-3.3-70b-versatile", keyVar: "GROQ_API_KEY", name: "Groq" },
  gemini: { baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai", model: "gemini-2.5-flash", keyVar: "GEMINI_API_KEY", name: "Google Gemini" },
  ollama: { baseUrl: "http://127.0.0.1:11434/v1", model: "llama3.1:8b", keyVar: "", name: "Ollama" },
  "openai-compatible": { baseUrl: "", model: "", keyVar: "LLM_API_KEY", name: "AI service" },
};

async function viaOpenProvider(name, userPrompt, fetchImpl = fetch) {
  const p = OPEN_PROVIDERS[name];
  const single = !config.provider.includes(",");
  const baseUrl = ((single && config.llmBaseUrl) || p.baseUrl || config.llmBaseUrl).replace(/\/+$/, "");
  // Per-provider model (GEMINI_MODEL, GROQ_MODEL...) so a fallback chain keeps each model right.
  const model = process.env[`${name.toUpperCase().replace(/-/g, "_")}_MODEL`] || (single ? config.llmModel : "") || p.model;
  const key = p.keyVar ? process.env[p.keyVar] || process.env.LLM_API_KEY || "" : "";
  if (!baseUrl || !model) throw httpError("Set LLM_BASE_URL and LLM_MODEL for PROVIDER=openai-compatible.", 500);
  let res;
  try {
    res = await fetchImpl(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(key && { Authorization: `Bearer ${key}` }) },
      body: JSON.stringify({
        model,
        temperature: 0.2, // steady, factual drafts
        max_tokens: 1500,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: userPrompt }],
      }),
      signal: AbortSignal.timeout(120000),
    });
  } catch (e) {
    throw httpError(name === "ollama"
      ? "Can't reach Ollama. Is it running on this computer (ollama serve)?"
      : `Could not reach ${p.name}${e.name === "TimeoutError" ? " (timed out)" : ""}. Try again.`, 502);
  }
  let data = await res.json().catch(() => ({}));
  if (Array.isArray(data)) data = data[0] || {}; // Gemini wraps errors in a list
  const errMsg = data.error?.message || "";
  if (res.status === 401 || res.status === 403 || /api key/i.test(errMsg)) throw httpError(`${p.name} rejected the API key. Check ${p.keyVar || "LLM_API_KEY"} in the server settings.`, 500);
  if (res.status === 429) throw httpError(`${p.name}'s free limit is used up for the moment. Wait a minute and try again.`, 429);
  if (!res.ok) throw httpError(`${p.name} error ${res.status}: ${errMsg || "unknown"}`.slice(0, 300), res.status >= 500 ? 502 : 500);
  const text = data.choices?.[0]?.message?.content || "";
  if (!text.trim()) throw httpError(`${p.name} returned an empty answer. Try again.`, 502);
  const u = data.usage || {};
  return { text, model: data.model || model, usage: u.prompt_tokens != null ? { input: u.prompt_tokens, output: u.completion_tokens || 0 } : null };
}

function viaOne(name, userPrompt, fetchImpl) {
  if (OPEN_PROVIDERS[name]) return viaOpenProvider(name, userPrompt, fetchImpl);
  if (name === "api") return viaApi(userPrompt);
  if (name === "claude-code") return viaClaudeCode(userPrompt);
  throw httpError(`Unknown PROVIDER "${name}". Use groq, gemini, ollama, api, claude-code or manual.`, 500);
}

// PROVIDER can list several, e.g. "groq,gemini": if one is busy (free limit reached) or
// down, the next one is tried. Bad keys and bad requests are not retried.
const KEY_VARS = { api: "ANTHROPIC_API_KEY", groq: "GROQ_API_KEY", gemini: "GEMINI_API_KEY" };
// Providers in the list whose key is set (a fallback without a key is simply skipped).
export function usableProviders() {
  return config.provider.split(",").map((s) => s.trim()).filter(Boolean)
    .filter((n) => !KEY_VARS[n] || process.env[KEY_VARS[n]] || process.env.LLM_API_KEY);
}

export async function generate(userPrompt, { fetchImpl } = {}) {
  const names = usableProviders();
  if (!names.length) throw httpError(`No AI key is set for PROVIDER=${config.provider}.`, 500);
  let lastErr;
  for (const name of names) {
    try { return await viaOne(name, userPrompt, fetchImpl); }
    catch (e) {
      lastErr = e;
      if (!(e.status === 429 || e.status === 502 || e.status === 504)) throw e;
    }
  }
  throw lastErr;
}

export function describeError(err) {
  if (err instanceof Anthropic.AuthenticationError) return { status: 500, message: "The API key is invalid. Check ANTHROPIC_API_KEY in the server settings (hosting dashboard or server/.env)." };
  if (err instanceof Anthropic.RateLimitError) return { status: 429, message: "Rate limit reached. Try again in a minute." };
  if (err instanceof Anthropic.APIConnectionError) return { status: 502, message: "Could not reach the AI service. Check the internet connection." };
  if (err instanceof Anthropic.APIError) return { status: 502, message: `AI service error: ${err.message}` };
  return { status: err.status || 500, message: err.message || "Unexpected error" };
}
