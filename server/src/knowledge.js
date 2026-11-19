// Loads the knowledge base (playbook, topic guides, past-ticket index) and searches it.
// Guides are split into small sections so each request only carries the few sections
// that match the chat, not whole files. Search is BM25 keyword ranking: free, fast and
// runs on this machine.
import fs from "node:fs";
import path from "node:path";

// Topic guides, the topic codes used in chat-index.csv, and words that point to them.
export const TOPICS = [
  { file: "funnels-websites.md", name: "Funnels and websites", codes: ["funnels_websites"], keywords: ["funnel", "website", "domain", "landing page", "form", "survey", "ssl", "dns", "cname", "page builder", "blog", "404", "publish"] },
  { file: "email-deliverability.md", name: "Email deliverability", codes: ["email_deliverability"], keywords: ["email", "spam", "dedicated domain", "mailgun", "dmarc", "dkim", "spf", "dnd", "bounce", "unsubscribe", "smtp", "deliverability"] },
  { file: "sms-a2p-phone.md", name: "SMS, A2P and phone", codes: ["sms_a2p_phone"], keywords: ["sms", "a2p", "10dlc", "text message", "phone number", "toll free", "toll-free", "porting", "voicemail", "lc phone", "twilio", "carrier"] },
  { file: "payments-invoices.md", name: "Payments and invoices", codes: ["payments_invoices"], keywords: ["stripe", "payment", "invoice", "checkout", "order form", "product", "coupon", "paypal", "transaction"] },
  { file: "video-request.md", name: "Video call requests", codes: ["video_request"], keywords: ["video call", "screen share", "screenshare", "zoom", "google meet", "hop on a call", "loom"] },
  { file: "memberships-courses.md", name: "Memberships and courses", codes: ["memberships_courses"], keywords: ["membership", "course", "community", "client portal", "lesson", "student", "communities"] },
  { file: "workflow-automation.md", name: "Workflows and automation", codes: ["workflow_automation"], keywords: ["workflow", "automation", "trigger", "wait step", "if/else", "if else", "enroll"] },
  { file: "login-access-users.md", name: "Login, access and users", codes: ["login_access_users"], keywords: ["login", "log in", "password", "2fa", "two factor", "locked out", "staff", "permission", "invite user", "access"] },
  { file: "contacts-crm.md", name: "Contacts and CRM", codes: ["contacts_crm"], keywords: ["contact", "import", "csv", "tag", "smart list", "custom field", "duplicate", "bulk action", "export"] },
  { file: "billing-account.md", name: "Billing and account", codes: ["billing_account"], keywords: ["billing", "cancel", "cancellation", "charged", "refund", "upgrade", "downgrade", "subscription", "wallet", "card on file", "pause", "suspended"] },
  { file: "calendar-booking.md", name: "Calendars and booking", codes: ["calendar_booking"], keywords: ["calendar", "appointment", "booking", "availability", "time slot", "google calendar", "outlook", "round robin", "reschedule"] },
  { file: "snapshots-subaccounts.md", name: "Snapshots and sub-accounts", codes: ["snapshots_subaccounts"], keywords: ["snapshot", "sub-account", "subaccount", "sub account", "agency view", "clone"] },
  { file: "social-integrations.md", name: "Social integrations", codes: ["social_integrations"], keywords: ["facebook", "instagram", "google business", "gmb", "social planner", "whatsapp", "tiktok", "linkedin", "meta", "lead form"] },
  { file: "reporting-dashboard.md", name: "Reporting and dashboards", codes: ["reporting_dashboard"], keywords: ["report", "dashboard", "attribution", "analytics", "widget"] },
  { file: "inbox-integrations.md", name: "Inbox and integrations", codes: ["conversations_inbox", "integrations_api"], keywords: ["conversations", "inbox", "api", "webhook", "zapier", "integration", "api key", "chat widget", "live chat"] },
  { file: "ai-agents.md", name: "AI agents", codes: ["ai_agents"], keywords: ["conversation ai", "voice ai", "ai agent", "bot", "knowledge base", "ai employee", "chatbot", "content ai"] },
  { file: "small-misc.md", name: "Mobile app, reviews, documents, pipelines", codes: ["mobile_app", "reputation_reviews", "documents_contracts", "opportunities_pipeline"], keywords: ["mobile app", "app store", "review", "reputation", "document", "contract", "proposal", "signature", "opportunity", "pipeline"] },
  { file: "other.md", name: "Other", codes: ["other"], keywords: [] },
];

// ---------------------------------------------------------------- text helpers
const STOPWORDS = new Set(("a an and are as at be been but by can could do does did doing for from get got has have having hello hi hey how i i'm im i've in into is it it's its just me my no not of on or our please so that the their them then there these they this those to too up us was we were what when where which while who why will with would you your yes ok okay thanks thank help need want also still now like any some all one two same very really here able going able let know see want sure "
  + "dear team support agent chat message regards anyone someone something").split(/\s+/));

function stem(w) {
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

export function tokenize(text) {
  return (String(text).toLowerCase().match(/[a-z0-9][a-z0-9'\-]*[a-z0-9]|[a-z0-9]{2,}/g) || [])
    .map((w) => w.replace(/'s$/, ""))
    .filter((w) => w.length > 1 && !STOPWORDS.has(w) && !/^\d+$/.test(w))
    .map(stem);
}

// Minimal CSV parser: handles quoted fields with commas, quotes and newlines.
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// ---------------------------------------------------------------- BM25 index
export class Bm25 {
  constructor(docTokens, { k1 = 1.2, b = 0.75 } = {}) {
    this.k1 = k1; this.b = b;
    this.n = docTokens.length;
    this.len = new Float64Array(this.n);
    this.postings = new Map(); // term -> [docIndex, termFrequency, ...]
    let total = 0;
    docTokens.forEach((tokens, d) => {
      this.len[d] = tokens.length; total += tokens.length;
      const tf = new Map();
      for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
      for (const [t, f] of tf) {
        let p = this.postings.get(t);
        if (!p) this.postings.set(t, (p = []));
        p.push(d, f);
      }
    });
    this.avgLen = total / Math.max(1, this.n);
  }
  idf(term) {
    const df = (this.postings.get(term)?.length || 0) / 2;
    return Math.log(1 + (this.n - df + 0.5) / (df + 0.5));
  }
  // weights: Map term -> query weight. Returns Map docIndex -> score.
  search(weights) {
    const scores = new Map();
    for (const [term, w] of weights) {
      const p = this.postings.get(term);
      if (!p) continue;
      const idf = this.idf(term);
      for (let i = 0; i < p.length; i += 2) {
        const d = p[i], f = p[i + 1];
        const s = idf * (f * (this.k1 + 1)) / (f + this.k1 * (1 - this.b + this.b * this.len[d] / this.avgLen));
        scores.set(d, (scores.get(d) || 0) + s * w);
      }
    }
    return scores;
  }
}

// ---------------------------------------------------------------- guide sections
const MAX_SECTION_CHARS = 1800;

function splitLong(body) {
  if (body.length <= MAX_SECTION_CHARS) return [body];
  const parts = [];
  let cur = "";
  for (const para of body.split(/\n(?=\s*\n)|\n(?=- |\d+\. |\|)/)) {
    if (cur && (cur + "\n" + para).length > MAX_SECTION_CHARS) { parts.push(cur.trim()); cur = ""; }
    cur += (cur ? "\n" : "") + para;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts.flatMap((p) => (p.length > MAX_SECTION_CHARS * 1.5 ? p.match(new RegExp(`[\\s\\S]{1,${MAX_SECTION_CHARS}}`, "g")) : [p]));
}

// Splits a markdown file into sections at ## and ### headings.
export function splitSections(markdown, file, docName) {
  const text = markdown.replace(/^---\n[\s\S]*?\n---\n/, "").replace(/<!--[\s\S]*?-->/g, "");
  const sections = [];
  let h2 = "", h3 = "", buf = [];
  const flush = () => {
    const body = buf.join("\n").trim();
    buf = [];
    if (body.length < 60) return;
    const heading = [h2, h3].filter(Boolean).join(" › ").replace(/\[Sample [AB]\]\s*/g, "") || docName;
    splitLong(body).forEach((part, i, all) => sections.push({
      file, docName, heading: all.length > 1 ? `${heading} (part ${i + 1})` : heading, text: part,
    }));
  };
  for (const line of text.split("\n")) {
    const m = line.match(/^(#{1,3})\s+(.*)$/);
    if (m) {
      flush();
      if (m[1] === "##") { h2 = m[2].trim(); h3 = ""; }
      else if (m[1] === "###") h3 = m[2].trim().replace(/^"|"$/g, "");
      continue;
    }
    buf.push(line);
  }
  flush();
  return sections;
}

// ---------------------------------------------------------------- loading
export function loadKnowledge(kbDir) {
  const read = (p) => fs.readFileSync(path.join(kbDir, p), "utf8");
  if (!fs.existsSync(path.join(kbDir, "playbook.md"))) {
    throw new Error(`Knowledge base not found in ${kbDir}. Set KB_DIR in server/.env (see README).`);
  }

  const sections = splitSections(read("playbook.md"), "playbook.md", "Support playbook");
  for (const t of TOPICS) {
    const p = path.join("topics", t.file);
    if (fs.existsSync(path.join(kbDir, p))) sections.push(...splitSections(read(p), t.file, `${t.name} guide`));
  }
  // Optional: official product documentation saved as .md files (e.g. copied help-center
  // articles). They are searched like the guides and cited as "Official docs".
  const docsDir = path.join(kbDir, "official-docs");
  if (fs.existsSync(docsDir)) {
    for (const f of fs.readdirSync(docsDir).filter((f) => f.endsWith(".md")).sort()) {
      const md = fs.readFileSync(path.join(docsDir, f), "utf8");
      const title = (md.match(/^#\s+(.+)$/m) || [, f.replace(/\.md$/, "")])[1].trim();
      sections.push(...splitSections(md, `official-docs/${f}`, `Official docs: ${title}`));
    }
  }
  sections.forEach((s, i) => { s.id = `${s.file.replace(/\.md$/, "")}#${i}`; });
  const sectionIndex = new Bm25(sections.map((s) => [...tokenize(s.heading), ...tokenize(s.heading), ...tokenize(s.text)]));

  let tickets = [];
  if (fs.existsSync(path.join(kbDir, "chat-index.csv"))) {
    const [header, ...rows] = parseCsv(read("chat-index.csv")).filter((r) => r.length > 1);
    const col = Object.fromEntries(header.map((h, i) => [h, i]));
    // Answers that are the same canned line in many chats ("Allow me some time...") carry no fix.
    const seen = new Map();
    const key = (a) => a.toLowerCase().replace(/[^a-z]+/g, " ").trim().slice(0, 80);
    for (const r of rows) { const a = r[col.agent_answer] || ""; if (a) seen.set(key(a), (seen.get(key(a)) || 0) + 1); }
    tickets = rows.map((r) => {
      const answer = (r[col.agent_answer] || "").trim();
      return {
        record_id: r[col.record_id],
        date: r[col.date],
        topic: r[col.topic],
        csat: r[col.csat] ? Number(r[col.csat]) : null,
        fcr: r[col.fcr] === "True",
        question: (r[col.first_question] || "").trim(),
        answer,
        unlabeled: answer.startsWith("[speakers not labeled]"),
        boilerplate: !answer || seen.get(key(answer)) > 25,
      };
    }).filter((t) => t.record_id && t.question && t.answer && !t.boilerplate && !(t.csat !== null && t.csat <= 2));
  }
  const ticketIndex = new Bm25(tickets.map((t) => [...tokenize(t.question), ...tokenize(t.question), ...tokenize(t.answer)]));

  const stamp = kbStamp(kbDir);
  return { kbDir, stamp, sections, sectionIndex, tickets, ticketIndex };
}

// Changes when any knowledge file changes, so the server can reload without a restart.
export function kbStamp(kbDir) {
  const docsDir = path.join(kbDir, "official-docs");
  const docs = fs.existsSync(docsDir) ? fs.readdirSync(docsDir).map((f) => path.join("official-docs", f)) : [];
  const files = ["playbook.md", "chat-index.csv", ...TOPICS.map((t) => path.join("topics", t.file)), ...docs];
  return files.map((f) => { try { return fs.statSync(path.join(kbDir, f)).mtimeMs; } catch { return 0; } }).join(":");
}

// ---------------------------------------------------------------- search
function countHits(text, keyword) {
  const re = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")}`, "g");
  return (text.match(re) || []).length;
}

export function matchTopics(text, max = 2) {
  const lower = text.toLowerCase();
  const scored = TOPICS.map((t) => ({ ...t, score: t.keywords.reduce((s, k) => s + countHits(lower, k) * (k.includes(" ") ? 2 : 1), 0) }))
    .filter((t) => t.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.filter((t, i) => i === 0 || t.score >= scored[0].score * 0.5).slice(0, max);
}

// Query terms: the latest customer messages count double, older text counts once.
export function buildQuery(focusText, contextText = "") {
  const weights = new Map();
  for (const t of tokenize(contextText)) weights.set(t, Math.min(2, (weights.get(t) || 0) + 0.5));
  for (const t of tokenize(focusText)) weights.set(t, Math.min(3, (weights.get(t) || 0) + 1.5));
  return weights;
}

// Escalation rules (project rule): these are never fixed in chat.
const ESCALATION_RULES = [
  { team: "Billing team", reason: "billing, refund, cancellation or plan change",
    re: /\b(billing|billed|refund(?!\s+(?:my|a|the|our)\s+(?:customer|client|contact|lead|buyer))|cancel(?:l?ing)?\s+(?:my|our|the)\s+(?:account|subscription|plan|membership)|cancellation|charged|overcharged|double charged|(?:upgrade|downgrade)\s+(?:my|our|the)\s+(?:plan|account|subscription)|my subscription|pause (?:my|our) account|account (?:is )?(?:paused|suspended)|unpause)\b/i },
  { team: "Admin team", reason: "account owner access transfer",
    re: /\b(transfer (?:the )?ownership|ownership transfer|change (?:the )?(?:account )?owner|new (?:account )?owner|make me (?:the )?owner|owner access|account owner)\b/i },
  { team: "Backend team", reason: "backend or database override",
    re: /\b(database|backend override|override (?:it |this )?(?:from|in|on) the backend|manually override|force (?:it )?from (?:the )?backend|change it in the backend)\b/i },
];

export function detectEscalation(text) {
  return ESCALATION_RULES.filter((r) => r.re.test(text)).map(({ team, reason }) => ({ team, reason }));
}

export function searchSections(kb, weights, { topicFiles = [], limit = 6, extraFiles = [] } = {}) {
  const scores = kb.sectionIndex.search(weights);
  const ranked = [...scores].map(([i, score]) => {
    const s = kb.sections[i];
    let boost = 1;
    if (topicFiles.includes(s.file)) boost *= 1.4;
    if (/Full history|at a glance|Volume by topic/i.test(s.heading)) boost *= 0.6; // statistics, not fixes
    if (/low-CSAT|went wrong|Mistakes/i.test(s.heading)) boost *= 0.8;
    return { ...s, score: score * boost };
  }).sort((a, b) => b.score - a.score);
  if (!ranked.length) return [];
  const top = ranked[0].score;
  return ranked.filter((s) => s.score >= top * 0.35 || extraFiles.includes(s.file)).slice(0, limit)
    .map((s) => ({ ...s, score: Number(s.score.toFixed(2)) }));
}

export function searchTickets(kb, weights, { topicCodes = [], limit = 5, minScore = 0 } = {}) {
  const scores = kb.ticketIndex.search(weights);
  const ranked = [];
  for (const [i, score] of scores) {
    const t = kb.tickets[i];
    let s = score;
    if (topicCodes.includes(t.topic)) s *= 1.2;
    if (t.csat >= 4 || t.fcr) s *= 1.15;
    if (t.unlabeled) s *= 0.7;
    ranked.push([i, s]);
  }
  ranked.sort((a, b) => b[1] - a[1]);
  const out = [];
  const seenAnswers = new Set();
  for (const [i, s] of ranked) {
    if (s < minScore || (out.length && s < out[0].score * 0.6)) break;
    const t = kb.tickets[i];
    const k = t.answer.slice(0, 60);
    if (seenAnswers.has(k)) continue;
    seenAnswers.add(k);
    out.push({ ...t, score: Number(s.toFixed(2)) });
    if (out.length >= limit) break;
  }
  return out;
}

// The playbook sections every reply must follow (identity and tone) plus escalation rules when needed.
export function coreRules(kb, { escalation = false } = {}) {
  const want = [/^Who we are in the chat$/, /^Shape of a good chat/, /^Reusable lines$/];
  if (escalation) want.push(/^Escalation routing/, /How to escalate well/);
  return kb.sections.filter((s) => s.file === "playbook.md" && want.some((re) => re.test(s.heading)));
}
