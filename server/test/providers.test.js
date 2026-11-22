import { test } from "node:test";
import assert from "node:assert/strict";
import { config } from "../src/config.js";
import { generate } from "../src/providers.js";

const ok = (text, model = "m") => ({ status: 200, ok: true, json: async () => ({ model, choices: [{ message: { content: text } }], usage: { prompt_tokens: 10, completion_tokens: 5 } }) });

test("groq: sends a chat-completions request with the key and returns text + usage", async () => {
  config.provider = "groq"; process.env.GROQ_API_KEY = "gsk_test";
  let seen;
  const r = await generate("hello", { fetchImpl: async (url, init) => { seen = { url, init }; return ok("<status>answered</status>", "llama"); } });
  assert.equal(seen.url, "https://api.groq.com/openai/v1/chat/completions");
  assert.equal(seen.init.headers.Authorization, "Bearer gsk_test");
  const body = JSON.parse(seen.init.body);
  assert.equal(body.messages[0].role, "system");
  assert.equal(body.messages[1].content, "hello");
  assert.equal(r.text, "<status>answered</status>");
  assert.deepEqual(r.usage, { input: 10, output: 5 });
});

test("groq,gemini: falls back to Gemini when Groq's free limit is reached", async () => {
  config.provider = "groq,gemini"; process.env.GEMINI_API_KEY = "g_test";
  const urls = [];
  const r = await generate("hi", { fetchImpl: async (url) => {
    urls.push(url);
    return url.includes("groq") ? { status: 429, ok: false, json: async () => ({ error: { message: "rate limit" } }) } : ok("from gemini");
  } });
  assert.equal(r.text, "from gemini");
  assert.equal(urls.length, 2);
});

test("a rejected key is reported, not retried", async () => {
  config.provider = "groq,gemini";
  let calls = 0;
  await assert.rejects(generate("hi", { fetchImpl: async () => { calls++; return { status: 401, ok: false, json: async () => ({}) }; } }), /rejected the API key/);
  assert.equal(calls, 1);
});

test("ollama: no key, local address", async () => {
  config.provider = "ollama";
  let seen;
  await generate("x", { fetchImpl: async (url, init) => { seen = { url, init }; return ok("y"); } });
  assert.equal(seen.url, "http://127.0.0.1:11434/v1/chat/completions");
  assert.equal(seen.init.headers.Authorization, undefined);
});

test("gemini,groq: each provider keeps its own model, and a provider without a key is skipped", async () => {
  config.provider = "gemini,groq"; config.llmModel = "should-not-apply";
  process.env.GEMINI_API_KEY = "g_test"; delete process.env.GROQ_API_KEY; delete process.env.LLM_API_KEY;
  const models = [];
  await assert.rejects(generate("hi", { fetchImpl: async (url, init) => {
    models.push([url.includes("groq") ? "groq" : "gemini", JSON.parse(init.body).model]);
    return { status: 429, ok: false, json: async () => ({}) };
  } }), /free limit/);
  assert.deepEqual(models, [["gemini", "gemini-2.5-flash"]]);
  process.env.GROQ_API_KEY = "gsk_test"; process.env.GROQ_MODEL = "custom-groq";
  models.length = 0;
  const r = await generate("hi", { fetchImpl: async (url, init) => {
    models.push([url.includes("groq") ? "groq" : "gemini", JSON.parse(init.body).model]);
    return url.includes("groq") ? ok("from groq") : { status: 429, ok: false, json: async () => ({}) };
  } });
  assert.equal(r.text, "from groq");
  assert.deepEqual(models, [["gemini", "gemini-2.5-flash"], ["groq", "custom-groq"]]);
  delete process.env.GROQ_MODEL; config.llmModel = "";
});
