// The suggestion pipeline: mask -> search the knowledge base -> decide if the AI is needed
// -> ask the AI with only the matching sources -> check the answer.
import { config } from "./config.js";
import { maskChat } from "./mask.js";
import { buildQuery, coreRules, detectEscalation, matchTopics, searchSections, searchTickets, tokenize } from "./knowledge.js";
import { SYSTEM_PROMPT, buildPrompt, formatTranscript, validateAnswer } from "./grounding.js";
import { generate as defaultGenerate } from "./providers.js";

const TEMPLATES = {
  needs_info: "Hi there, thanks for reaching out! Please keep this window open. Could you share a few more details about what you need help with, such as the sub-account and the page or feature you're working in?",
  not_sure: "Thanks for the details! I want to make sure I give you the right answer, so I'm checking this with our team now. Please keep this window open and I'll update you here shortly.",
};

function trimTranscript(chat, maxChars) {
  let trimmed = false;
  if (chat.messages.length) {
    const msgs = [...chat.messages];
    let total = msgs.reduce((n, m) => n + m.text.length + 12, 0);
    while (msgs.length > 2 && total > maxChars) { total -= msgs.shift().text.length + 12; trimmed = true; }
    return { chat: { ...chat, messages: msgs }, trimmed };
  }
  if (chat.text.length > maxChars) return { chat: { ...chat, text: chat.text.slice(-maxChars) }, trimmed: true };
  return { chat, trimmed };
}

// What the customer is asking about now: their latest messages (or the end of plain text).
function focusText(chat) {
  if (chat.messages.length) {
    const fromCustomer = chat.messages.filter((m) => m.role !== "agent" && m.role !== "bot");
    return fromCustomer.slice(-3).map((m) => m.text).join("\n");
  }
  return chat.text.slice(-1500);
}

export function buildContext(kb, rawChat) {
  const masked = maskChat(rawChat);
  const { chat, trimmed } = trimTranscript(masked, config.maxChatChars);
  const transcript = formatTranscript(chat);
  const focus = focusText(chat);

  const weights = buildQuery(focus, transcript);
  const topics = matchTopics(`${focus}\n${focus}\n${transcript}`);
  const escalation = detectEscalation(transcript);

  const rules = coreRules(kb, { escalation: escalation.length > 0 });
  const ruleIds = new Set(rules.map((r) => r.id));
  const guides = searchSections(kb, weights, { topicFiles: topics.map((t) => t.file), limit: config.maxGuideSections })
    .filter((s) => !ruleIds.has(s.id));
  const tickets = searchTickets(kb, weights, { topicCodes: topics.flatMap((t) => t.codes), limit: config.maxPastTickets, minScore: config.minTicketScore });

  let n = 0;
  rules.forEach((s) => (s.cid = `G${++n}`));
  guides.forEach((s) => (s.cid = `G${++n}`));
  tickets.forEach((t, i) => (t.cid = `T${i + 1}`));

  const topGuide = guides[0]?.score || 0;
  const strength = topGuide >= config.minGuideScore * 1.6 ? "strong" : topGuide >= config.minGuideScore ? "ok" : "weak";
  const customerWords = tokenize(focus).length;

  return {
    chat, transcript, trimmed, topics: topics.map((t) => t.name), escalation, rules, guides, tickets, strength, topGuide, customerWords,
    allSources: [...rules, ...guides, ...tickets],
    prompt: buildPrompt({ chat, transcript, rules, guides, tickets, escalation }),
  };
}

function sourceList(ctx, citedIds = []) {
  const cited = new Set(citedIds);
  return [
    ...[...ctx.rules, ...ctx.guides].map((s) => ({ cid: s.cid, type: s.file.startsWith("official-docs/") ? "docs" : "guide", title: `${s.docName} › ${s.heading}`, excerpt: s.text, used: cited.has(s.cid), core: ctx.rules.includes(s) })),
    ...ctx.tickets.map((t) => ({ cid: t.cid, type: "ticket", title: `Past ticket ${t.record_id}`, record_id: t.record_id, date: t.date, csat: t.csat, fcr: t.fcr, excerpt: `Customer asked: ${t.question}\nOur agent answered: ${t.answer}`, used: cited.has(t.cid) })),
  ];
}

function readInfo(ctx, rawChat) {
  return {
    mode: ctx.chat.mode,
    messages: ctx.chat.messages.length,
    chars: ctx.transcript.length,
    trimmed: ctx.trimmed,
    rolesGuessed: !!rawChat.rolesGuessed,
  };
}

export async function suggestReply(kb, rawChat, { generate = defaultGenerate, provider = config.provider } = {}) {
  const started = Date.now();
  const ctx = buildContext(kb, rawChat);
  if (!ctx.transcript.trim()) throw Object.assign(new Error("No conversation text was received."), { status: 400 });

  const base = { topics: ctx.topics, escalation: ctx.escalation, read: readInfo(ctx, rawChat), retrieval: { strength: ctx.strength, topGuideScore: ctx.topGuide } };
  const noAi = (status, notes) => ({
    ...base, status, confidence: status === "needs_info" ? "needs_info" : "low", reply: TEMPLATES[status], evidence: [], issues: [],
    agentNotes: notes, sources: sourceList(ctx), aiCalled: false, model: null, usage: null, ms: Date.now() - started,
  });

  // 1) Too little to work with: ask for details instead of guessing (no AI call).
  if (ctx.customerWords < 3 && !ctx.escalation.length) {
    return noAi("needs_info", "The customer hasn't described an issue yet, so no AI was used. If the panel missed part of the chat, check \"What was read\".");
  }
  // 2) Nothing in our guides matches: say so instead of guessing (no AI call).
  if (ctx.strength === "weak" && !ctx.escalation.length) {
    return noAi("not_sure", "No guide section matched this issue closely, so no AI was used and nothing was guessed. Check the account yourself, offer a video call per the playbook, or escalate by ticket if it's a bug.");
  }
  // 3) Manual mode: hand back the prompt to paste into claude.ai.
  if (provider === "manual") {
    return { ...base, manual: true, prompt: `${SYSTEM_PROMPT}\n\n${ctx.prompt}`, sources: sourceList(ctx), aiCalled: false, ms: Date.now() - started };
  }

  const out = await generate(ctx.prompt);
  const checked = validateAnswer(out.text, ctx);
  return { ...base, ...checked, sources: sourceList(ctx, checked.citedIds), aiCalled: true, model: out.model, usage: out.usage, ms: Date.now() - started };
}

// For the manual-mode panel: check an answer pasted back from claude.ai.
export function checkPastedAnswer(kb, rawChat, text) {
  const ctx = buildContext(kb, rawChat);
  const checked = validateAnswer(text, ctx);
  return { topics: ctx.topics, escalation: ctx.escalation, read: readInfo(ctx, rawChat), ...checked, sources: sourceList(ctx, checked.citedIds), aiCalled: false };
}
