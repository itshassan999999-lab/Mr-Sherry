// Sends the prompt to Claude. Three ways, chosen with PROVIDER in server/.env.
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

export async function generate(userPrompt) {
  if (config.provider === "api") return viaApi(userPrompt);
  if (config.provider === "claude-code") return viaClaudeCode(userPrompt);
  throw httpError(`Unknown PROVIDER "${config.provider}". Use api, claude-code or manual.`, 500);
}

export function describeError(err) {
  if (err instanceof Anthropic.AuthenticationError) return { status: 500, message: "The API key is invalid. Check ANTHROPIC_API_KEY in the server settings (hosting dashboard or server/.env)." };
  if (err instanceof Anthropic.RateLimitError) return { status: 429, message: "Rate limit reached. Try again in a minute." };
  if (err instanceof Anthropic.APIConnectionError) return { status: 502, message: "Could not reach the AI service. Check the internet connection." };
  if (err instanceof Anthropic.APIError) return { status: 502, message: `AI service error: ${err.message}` };
  return { status: err.status || 500, message: err.message || "Unexpected error" };
}
