import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { maskText, maskChat } from "../src/mask.js";
import { loadKnowledge, detectEscalation, splitSections } from "../src/knowledge.js";
import { validateAnswer, findMenuPaths } from "../src/grounding.js";
import { buildContext, suggestReply } from "../src/suggest.js";
import { config } from "../src/config.js";

// The tiny test knowledge base gives lower scores than the real one.
config.minTicketScore = 1;
config.minGuideScore = 3;

const kb = loadKnowledge(path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures/kb"));
const spamChat = {
  mode: "messages",
  messages: [
    { role: "customer", text: "Hi, my campaign emails are all landing in spam since yesterday. I set up a dedicated domain last week. Email me at sarah@bright.com or call +1 (415) 555-0132" },
    { role: "agent", text: "Thanks for reaching out! Please keep this window open." },
    { role: "customer", text: "Ok, what should I check for the spam problem?" },
  ],
};
const fakeAnswer = (ctx, { status = "answered", reply, evidence } = {}) => {
  const g = ctx.guides.find((s) => /spam/i.test(s.heading));
  return `<status>${status}</status>
<reply>${reply ?? "Please go to Settings > Email Services > Dedicated Domain and IP and confirm every record shows Verified."}</reply>
<evidence>
${evidence ?? `- ${g.cid}: check every record is Verified`}
</evidence>
<agent_notes>- Spam after new domain</agent_notes>`;
};

test("masks personal data and drops speaker names", () => {
  assert.equal(maskText("mail me a@b.co or +1 (415) 555-0132, password: hunter2"), "mail me [email] or [phone], password: [hidden]");
  const m = maskChat({ messages: [{ role: "customer", author: "Sarah Smith", text: "hi" }] });
  assert.deepEqual(m.messages[0], { role: "customer", text: "hi" });
});

test("splits guides into sections at headings", () => {
  const s = splitSections(kb.sections.length ? "## A\n" + "x".repeat(100) + "\n### B\n" + "y".repeat(100) : "", "f.md", "Doc");
  assert.deepEqual(s.map((x) => x.heading), ["A", "A › B"]);
});

test("escalation rules: billing and owner transfer yes, refunding a customer no", () => {
  assert.equal(detectEscalation("I want to cancel my subscription")[0].team, "Billing team");
  assert.equal(detectEscalation("please transfer ownership of the agency")[0].team, "Admin team");
  assert.equal(detectEscalation("how do I refund my customer in payments").length, 0);
});

test("retrieval finds the spam guide, skips low-CSAT tickets, masks before searching", () => {
  const ctx = buildContext(kb, spamChat);
  assert.match(ctx.guides[0].heading, /spam/i);
  assert.ok(ctx.tickets.some((t) => t.record_id === "recSPAM001"));
  assert.ok(!ctx.tickets.some((t) => t.record_id === "recSPAM002"), "CSAT 1 answer must not be used");
  assert.ok(!ctx.prompt.includes("sarah@bright.com") && !ctx.prompt.includes("555-0132"));
  assert.ok(ctx.rules.some((r) => /Who we are/.test(r.heading)), "white-label rules always included");
});

test("a grounded answer with a real menu path is high/medium confidence", () => {
  const ctx = buildContext(kb, spamChat);
  const r = validateAnswer(fakeAnswer(ctx), ctx);
  assert.equal(r.status, "answered");
  assert.deepEqual(r.issues, []);
  assert.ok(["high", "medium"].includes(r.confidence));
});

test("an invented menu path is flagged", () => {
  const ctx = buildContext(kb, spamChat);
  const r = validateAnswer(fakeAnswer(ctx, { reply: "Go to Marketing > Deliverability Booster and turn it on." }), ctx);
  assert.ok(r.issues.some((i) => i.includes("Marketing > Deliverability Booster")));
  assert.notEqual(r.confidence, "high");
});

test("an answer with no sources is downgraded to not sure", () => {
  const ctx = buildContext(kb, spamChat);
  const r = validateAnswer(fakeAnswer(ctx, { evidence: "" }), ctx);
  assert.equal(r.status, "not_sure");
  assert.equal(r.confidence, "low");
});

test("made-up source IDs and white-label leaks are flagged", () => {
  const ctx = buildContext(kb, spamChat);
  const r = validateAnswer(fakeAnswer(ctx, { reply: "In GoHighLevel, check your domain.", evidence: "- G99: something" }), ctx);
  assert.ok(r.issues.some((i) => i.includes("G99")));
  assert.ok(r.issues.some((i) => /white label/i.test(i)));
});

test("menu path finder", () => {
  assert.deepEqual(findMenuPaths("Go to Settings > Email Services > Dedicated Domain and IP."), [["Settings", "Email Services", "Dedicated Domain and IP"]]);
});

test("pipeline: off-topic chat returns not sure without calling the AI", async () => {
  let called = false;
  const r = await suggestReply(kb, { messages: [{ role: "customer", text: "Can you recommend a good chocolate cake recipe for my birthday party?" }] }, { generate: async () => { called = true; return { text: "" }; }, provider: "api" });
  assert.equal(called, false);
  assert.equal(r.status, "not_sure");
  assert.equal(r.aiCalled, false);
});

test("pipeline: a bare greeting asks for details without calling the AI", async () => {
  const r = await suggestReply(kb, { messages: [{ role: "customer", text: "hello there" }] }, { generate: async () => { throw new Error("should not run"); }, provider: "api" });
  assert.equal(r.status, "needs_info");
});

test("pipeline: billing request is escalated even if the AI forgets", async () => {
  const chat = { messages: [{ role: "customer", text: "I was charged twice, I want a refund and to cancel my subscription" }] };
  const r = await suggestReply(kb, chat, { provider: "api", generate: async () => ({ text: "<status>answered</status><reply>Sure, I refunded you.</reply><evidence></evidence><agent_notes></agent_notes>", model: "fake" }) });
  assert.ok(r.escalation.length > 0);
  assert.ok(r.issues.some((i) => /escalated by ticket/.test(i)));
  assert.notEqual(r.confidence, "high");
});

test("pipeline: normal chat calls the AI once with a small prompt", async () => {
  let prompt = "";
  const r = await suggestReply(kb, spamChat, { provider: "api", generate: async (p) => { prompt = p; return { text: fakeAnswer(buildContext(kb, spamChat)), model: "fake", usage: { input: 1, output: 1 } }; } });
  assert.equal(r.aiCalled, true);
  assert.ok(prompt.length < 20000);
  assert.ok(r.sources.some((s) => s.used));
});
