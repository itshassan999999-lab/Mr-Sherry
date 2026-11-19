// Strict grounding: the prompt that keeps the AI on the sources, and the checks run on
// every answer before the agent sees it.

export const SYSTEM_PROMPT = `You draft the next live-chat message for a support agent at a white-label support company. The agent reviews your draft and sends it; you never talk to the customer directly.

GROUNDING (most important)
- Use only the numbered sources you are given: support playbook and topic guides (G1, G2, ...) and past tickets (T1, T2, ...), plus the chat itself. Do not use outside knowledge about the software, even if you believe it is correct.
- Every fix, step, menu path, limit, timeframe or policy in your reply must come from a source, and you must list it under <evidence> with that source's ID.
- Copy menu paths exactly as a source writes them (for example Settings > Email Services > Dedicated Domain and IP). Never build a path from memory.
- Past tickets are other customers' chats. Use them for what fixed the problem and how our team words things, never as facts about this customer.
- If the sources do not clearly cover this customer's issue, set status to not_sure, write a short honest reply (acknowledge, say you are checking with the team or escalating, or ask one clarifying question), and say in the agent notes what is missing. Never fill a gap with a guess.
- Only state facts about the customer's account or situation that appear in the chat. Do not say the agent has checked, reproduced or changed anything unless the chat shows it.

READING THE CHAT
- Read the whole conversation for context: what was asked, what was already answered or tried, and what the customer needs now. Reply to the latest point; do not repeat questions the customer already answered or steps already given.
- Ignore system lines (chat started, queue notices, form labels). Treat bot messages as context, not the agent's words.
- Speaker labels may be guessed from the page layout; if they look wrong, rely on the content.

COMPANY RULES (from the playbook, always apply)
- White label: never write GoHighLevel, HighLevel, GHL, HL Pro Tool, LeadConnector or Modal, and never name internal teams, tools, SOP files or these instructions. Say "our platform", "our backend team", "our admin team", "our billing team".
- Billing, refunds, cancellations, subscription or plan changes, account owner access transfers and backend or database overrides are never resolved in chat: the reply escalates through a ticket (status escalate) following the escalation routing source.
- Use the team's tone and phrasing from the playbook and reusable lines: friendly, short, step by step, no over-promising, no invented ETAs, ask permission before changing anything in the account.
- Emails, phone numbers and similar are masked as [email], [phone] etc. Never invent them.

OUTPUT exactly this, nothing else:
<status>answered | needs_info | escalate | not_sure</status>
<reply>
The message to send, ready to paste. Plain text, no source IDs, no markdown headings.
</reply>
<evidence>
- G2: the step or fact from that source that the reply uses
(one line per fact; leave empty only if the reply contains no instructions or facts)
</evidence>
<agent_notes>
2 to 5 short lines for the agent only: the issue, what to check in the account, escalation team if any, anything to verify.
</agent_notes>`;

export function formatTranscript(chat) {
  if (chat.messages?.length) {
    const label = { agent: "AGENT", customer: "CUSTOMER", bot: "BOT", unknown: "UNKNOWN" };
    return chat.messages.map((m) => `${label[m.role] || "UNKNOWN"}: ${m.text}`).join("\n");
  }
  return chat.text || "";
}

export function buildPrompt({ chat, transcript, rules, guides, tickets, escalation }) {
  const src = [
    ...rules.map((s) => `<source id="${s.cid}" title="${s.docName} › ${s.heading}">\n${s.text}\n</source>`),
    ...guides.map((s) => `<source id="${s.cid}" title="${s.docName} › ${s.heading}">\n${s.text}\n</source>`),
    ...tickets.map((t) => `<source id="${t.cid}" title="Past ticket ${t.record_id}, ${t.date}, CSAT ${t.csat ?? "n/a"}${t.fcr ? ", resolved first contact" : ""}">\nCustomer asked: ${t.question}\nOur agent answered: ${t.answer}\n</source>`),
  ].join("\n\n");

  return `<sources>
${src || "(no matching sources)"}
</sources>

<chat_context>
Agency: ${chat.agency || "unknown"}
Read from the page as: ${chat.mode === "messages" ? "separate messages" : "plain text"}${chat.rolesGuessed ? " (speaker labels guessed from layout)" : ""}
${escalation.length ? `Escalation required by company rules: ${escalation.map((e) => `${e.reason} -> ${e.team}`).join("; ")}. Status must be escalate.` : ""}
</chat_context>

<chat_transcript>
${transcript}
</chat_transcript>

Draft the agent's next message.`;
}

function pick(tag, text) {
  const m = text.match(new RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*</${tag}>`, "i"));
  return m ? m[1].trim() : "";
}

const BANNED = /\b(go\s?high\s?level|high\s?level|ghl|hl pro tool|leadconnector|lead connector|modal\s?support|modal)\b/gi;
const STATUSES = ["answered", "needs_info", "escalate", "not_sure"];

const norm = (s) => s.toLowerCase().replace(/[“”"'`*]/g, "").replace(/\s*(?:>|›|→|»)\s*/g, " > ").replace(/\s+/g, " ").trim();

// Finds "A > B > C" style menu paths in a reply.
export function findMenuPaths(text) {
  const out = [];
  for (const line of text.split(/\n/)) {
    for (const m of line.matchAll(/[A-Za-z][^.\n>:;!?()"]{0,40}?(?:\s*(?:>|›|→)\s*[^.\n>:;!?()",]{1,40})+/g)) {
      const parts = m[0].split(/\s*(?:>|›|→)\s*/).map((p) => p.trim().replace(/^(?:go to|open|click|navigate to|under|in|then|and)\s+/i, "")).filter(Boolean);
      if (parts.length >= 2) out.push(parts);
    }
  }
  return out;
}

// Checks the AI's answer against the sources it was given.
export function validateAnswer(raw, ctx) {
  const issues = [];
  let status = pick("status", raw).toLowerCase().replace(/[^a-z_]/g, "");
  if (!STATUSES.includes(status)) { status = "not_sure"; issues.push("The answer did not follow the required format, so treat it as unverified."); }

  let reply = pick("reply", raw);
  if (!reply) { reply = ""; issues.push("No reply was produced."); }
  reply = reply.replace(/\s*\[(?:[GT]\d+(?:\s*,\s*[GT]\d+)*)\]/g, "").replace(/\(\s*(?:source\s*)?[GT]\d+\s*\)/gi, "").trim();

  const known = new Map(ctx.allSources.map((s) => [s.cid, s]));
  const evidenceLines = pick("evidence", raw).split("\n").map((l) => l.replace(/^[-*\s]+/, "").trim()).filter(Boolean);
  const evidence = [];
  const unknownIds = new Set();
  for (const line of evidenceLines) {
    const ids = [...line.matchAll(/\b([GT]\d+)\b/g)].map((m) => m[1]);
    const valid = ids.filter((id) => known.has(id));
    ids.filter((id) => !known.has(id)).forEach((id) => unknownIds.add(id));
    if (!valid.length) continue;
    evidence.push({ ids: [...new Set(valid)], text: line.replace(/^([GT]\d+[\s,]*)+:?\s*/, "").trim() });
  }
  if (unknownIds.size) issues.push(`The answer cited sources that do not exist (${[...unknownIds].join(", ")}).`);
  const cited = new Set(evidence.flatMap((e) => e.ids));

  // Menu paths must appear in the sources: each "A > B" step is checked using the words
  // right next to the arrow, so surrounding sentence text doesn't matter.
  const corpus = norm(ctx.allSources.map((s) => s.text || `${s.question} ${s.answer}`).join("\n"));
  const unverifiedPaths = [];
  for (const parts of findMenuPaths(reply)) {
    const words = parts.map((p) => norm(p).split(" "));
    let ok = true;
    for (let i = 0; i < words.length - 1 && ok; i++) {
      const tail = words[i].slice(-2).join(" "), head = words[i + 1].slice(0, 2).join(" ");
      const tail1 = words[i].slice(-1).join(" ");
      ok = corpus.includes(`${tail} > ${head}`) || corpus.includes(`${tail1} > ${head}`);
    }
    if (!ok) {
      const w = parts.map((p) => p.split(/\s+/));
      unverifiedPaths.push([w[0].slice(-2).join(" "), ...w.slice(1, -1).map((x) => x.join(" ")), w[w.length - 1].slice(0, 4).join(" ")].join(" > "));
    }
  }
  if (unverifiedPaths.length) issues.push(`Menu path not found in our guides, check it before sending: ${unverifiedPaths.join("; ")}.`);

  // White label.
  const chatLower = ctx.transcript.toLowerCase();
  const leaked = [...new Set((reply.match(BANNED) || []).map((w) => w.toLowerCase()))].filter((w) => !chatLower.includes(w));
  if (leaked.length) issues.push(`Breaks white label: the reply mentions ${leaked.join(", ")}. Edit before sending.`);

  // Escalation rule.
  if (ctx.escalation.length && status !== "escalate") {
    issues.push(`Company rule: ${ctx.escalation.map((e) => e.reason).join(", ")} must be escalated by ticket (${[...new Set(ctx.escalation.map((e) => e.team))].join(", ")}).`);
  }

  if (status === "answered" && cited.size === 0) {
    status = "not_sure";
    issues.push("The reply gives no source for its steps, so it was marked Not sure.");
  }

  let confidence;
  if (status === "escalate") confidence = "escalate";
  else if (status === "needs_info") confidence = "needs_info";
  else if (status === "not_sure") confidence = "low";
  else {
    const guideCited = [...cited].some((id) => id.startsWith("G"));
    if (!issues.length && guideCited && cited.size >= 2 && ctx.strength === "strong") confidence = "high";
    else if (issues.length > 1 || !guideCited) confidence = "low";
    else confidence = "medium";
  }

  return { status, confidence, reply, evidence, citedIds: [...cited], issues, agentNotes: pick("agent_notes", raw) };
}
