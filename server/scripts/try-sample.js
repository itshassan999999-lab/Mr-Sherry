// Runs the whole pipeline on a sample chat without the extension.
//   npm run try                                  -> samples/spam-dedicated-domain.json
//   npm run try -- samples/cancel-subscription.json
//   npm run try -- samples/off-topic.json --dry-run   (no AI call, shows what would be sent)
import fs from "node:fs";
import path from "node:path";
import { config, SERVER_DIR } from "../src/config.js";
import { loadKnowledge } from "../src/knowledge.js";
import { buildContext, suggestReply } from "../src/suggest.js";

const file = process.argv.slice(2).find((a) => !a.startsWith("--")) || path.join(SERVER_DIR, "samples/spam-dedicated-domain.json");
const dryRun = process.argv.includes("--dry-run");
const kb = loadKnowledge(config.kbDir);
const chat = JSON.parse(fs.readFileSync(file, "utf8"));
const ctx = buildContext(kb, chat);

console.log("== Conversation after masking ==\n" + ctx.transcript);
console.log(`\n== Retrieval: ${ctx.strength} (top guide score ${ctx.topGuide}) | topics: ${ctx.topics.join(", ") || "none"} | escalation: ${ctx.escalation.map((e) => e.team).join(", ") || "none"}`);
for (const s of [...ctx.rules, ...ctx.guides]) console.log(`  ${s.cid}  ${s.docName} › ${s.heading}`);
for (const t of ctx.tickets) console.log(`  ${t.cid}  ${t.record_id}  CSAT ${t.csat ?? "-"}  "${t.question.slice(0, 80)}"`);
console.log(`== Prompt size: ~${Math.round(ctx.prompt.length / 4).toLocaleString()} tokens`);
if (dryRun) process.exit(0);

const r = await suggestReply(kb, chat);
if (r.manual) { console.log("\n(manual mode: prompt ready to paste)"); process.exit(0); }
console.log(`\n== ${r.status.toUpperCase()} · confidence ${r.confidence} · AI used: ${r.aiCalled} ==\n${r.reply}`);
if (r.issues?.length) console.log("\n== Warnings ==\n- " + r.issues.join("\n- "));
console.log("\n== Evidence ==\n" + (r.evidence.map((e) => `- ${e.ids.join(",")}: ${e.text}`).join("\n") || "(none)"));
console.log("\n== Notes for the agent ==\n" + r.agentNotes);
