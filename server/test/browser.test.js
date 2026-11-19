// Checks the in-page chat reader on a mock inbox page in a real browser.
// Runs only where Playwright is installed (skipped otherwise).
import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
let chromium;
try { ({ chromium } = createRequire(import.meta.url)("playwright")); } catch { /* not installed */ }

test("reads only the open conversation and inserts without sending", { skip: !chromium && "playwright not installed" }, async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1400, height: 800 } });
    await page.goto("file://" + path.join(here, "fixtures/mock-inbox.html"));
    await page.addScriptTag({ path: path.join(here, "../../extension/page-tools.js") });

    const chat = await page.evaluate(() => window.__supportReply.read({ agentSide: "right" }));
    assert.equal(chat.mode, "messages");
    assert.deepEqual(chat.messages.map((m) => m.role), ["customer", "agent", "customer"]);
    const all = JSON.stringify(chat);
    assert.ok(!all.includes("INBOX-LIST") && !all.includes("CONTACT-PANEL") && !all.includes("Menu"), "must not read other parts of the page");

    // Highlighted text wins over everything.
    await page.evaluate(() => { const r = document.createRange(); r.selectNodeContents(document.querySelectorAll(".bubble")[2]); getSelection().addRange(r); });
    const sel = await page.evaluate(() => window.__supportReply.read({}));
    assert.equal(sel.source, "selection");
    await page.evaluate(() => getSelection().removeAllRanges());

    // Saved selector (from "Point to chat").
    const saved = await page.evaluate(() => window.__supportReply.read({}, window.__supportReply.selectorFor(document.getElementById("msgs"))));
    assert.equal(saved.messages.length, 3);

    const ins = await page.evaluate(() => window.__supportReply.insert({}, "Hello from the assistant", false));
    assert.equal(ins.ok, true);
    assert.equal(await page.textContent("[contenteditable]"), "Hello from the assistant");
    const again = await page.evaluate(() => window.__supportReply.insert({}, "Second", false));
    assert.equal(again.reason, "not-empty");
  } finally { await browser.close(); }
});
