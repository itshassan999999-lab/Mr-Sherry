# Support Reply Assistant

A Chrome side panel for our live-chat agents. Open a client chat, click **Suggest reply**, and the panel drafts the next message from our own playbook, topic guides and past tickets, with the sources it used. The agent reviews it, clicks **Insert into reply box** (or Copy) and presses send themselves. **It never sends anything.**

```
Chrome extension (thin)            Server (this repo, server/)                         AI model (free tier)
reads ONLY the open chat  ──────►  masks personal data                         ──────►  writes a reply from
inserts the reply                  finds the few matching guide sections                the given sources only
                                   and past tickets, checks the answer  ◄──────
       ▲                                     │
       └──── panel UI is served by the server, so UI and logic changes need no extension update
```

## What keeps it from making things up

1. **Only our sources.** Each request carries the matching playbook rules, guide sections and well-rated past tickets, numbered G1, G2, T1… The AI is told to use nothing else and to list the source for every step.
2. **Checked before you see it.** The server rejects or flags answers that cite no source, cite a source that doesn't exist, use a menu path (A > B > C) that isn't in our guides, mention the platform's real name, or try to solve a billing/owner-transfer/backend case in chat.
3. **"Not sure" instead of a guess.** If nothing in our guides matches, the server doesn't call the AI at all and suggests a safe holding line plus "check or escalate". A bare "hi" gets a request for details, also without the AI.
4. **Escalation rules are code, not just a prompt.** Billing, refunds, cancellations, plan changes, account owner transfers and backend/database overrides are detected and must go to a ticket.
5. **Confidence badge** on every reply: High, Medium, Not sure, Needs more info, Escalate. "Why this answer" shows each step with its source; click a source to read it.

## Usage and cost

- Reads only the open conversation (the message list above the reply box), never the inbox list, contact panel or the rest of the page. The whole conversation is read for context; only very long chats drop their oldest messages.
- Sends about 3,000 tokens per suggestion (the earlier version sent whole guide files, roughly 6 times more).
- Suggests only when you click. Greetings and off-topic chats are answered without the AI.

## How it runs

It costs nothing to run: Render's free hosting plus Groq's free AI tier. The server is hosted online, so nothing runs on anyone's computer and restarting a PC changes nothing. Every push to `main` on GitHub redeploys it automatically, and every agent's panel picks up the change on the next click. The extension is a thin shell that loads the panel from the hosted server, so it almost never needs updating.

## One-time setup

### 1. Host the server (about 10 minutes, once for the whole team)

1. Get a free Groq API key: sign up at https://console.groq.com (no card needed), open **API Keys**, click **Create API Key** and copy it.
2. Create a free Render account at https://render.com and sign in with GitHub. Give Render access to the **Mr-Sherry** repository when asked.
3. Open https://dashboard.render.com/blueprints, click **New Blueprint Instance**, pick **Mr-Sherry**, and click **Apply**. Render reads `render.yaml` (free plan) and asks for `GROQ_API_KEY`: paste the key. Don't add a card.
4. Wait for the deploy to show **Live** (a few minutes). Note the address (normally `https://mr-sherry-assistant.onrender.com`) and copy the generated **ACCESS_TOKEN** from the service's **Environment** tab.

**What "free" means in practice**
- Render's free plan sleeps after 15 minutes with no use. The first click after a break shows "Waking up the assistant…" for up to a minute; after that it's quick. (Render's Starter plan, about $7 a month, stays awake.)
- Groq's free tier has per-minute and per-day limits. If the team hits them, the panel says to wait a minute. To add a second free fallback, create a Google Gemini key at https://aistudio.google.com/apikey, add it in Render as `GEMINI_API_KEY`, and set `PROVIDER` to `groq,gemini`. Note: Google may use data sent to its free tier to improve its products (chats are masked first, but keep this in mind).
- Free open models are less polished than Claude. The grounding checks still apply: answers without sources, invented menu paths or missed escalations are flagged or marked "Not sure".

**AI options** (`PROVIDER` in Render's Environment tab): `groq` (free, default), `gemini` (free tier), `groq,gemini` (free with fallback), `ollama` (a model on your own computer; only works when the server also runs on that computer), `api` (Claude, paid, best quality), `manual` (no AI; paste a prompt into claude.ai yourself). Change the model with `LLM_MODEL` (e.g. any model listed in your Groq console).

### 2. Install the extension (each agent, once)

1. Download the `extension` folder (or the extension zip) and unzip it somewhere permanent.
2. Go to `chrome://extensions`, switch on **Developer mode**, click **Load unpacked**, and pick the folder.
3. Pin **Support Reply Assistant**, open a client chat and click the icon.
4. The panel asks for the access token once. Paste the ACCESS_TOKEN from step 1. Chrome remembers it.

If your Render address differs from `https://mr-sherry-assistant.onrender.com`, enter it in the extension's **Settings** (gear icon) once.

The first time, check the line "Read N messages from the open conversation" and click **View** to see exactly what was read. If it picked the wrong area, click **Change chat area** and click the message list once; it's remembered. Highlighting messages on the page also works.

## Updating

- **Panel, wording, rules, AI logic, chat-reading selectors (`server/reader-config.json`):** push to `main`. Render redeploys in a few minutes; agents do nothing.
- **Knowledge base (`knowledge/`):** same, push the updated files. `chat-index.csv.gz` is the gzipped ticket index (`gzip -9 -c chat-index.csv > chat-index.csv.gz`).
- **The extension itself** only changes when `extension/` changes, which should be rare. The panel shows a banner when an agent's copy is too old; they replace the folder and click reload in `chrome://extensions`. To make even that automatic, publish the extension privately (unlisted) on the Chrome Web Store (one-time $5 developer account); Chrome then updates it by itself.

## Running it on your own computer (developers only)

```
cd server
npm install
cp .env.example .env      (set PROVIDER, see the file)
npm start
```
Then set the extension's server address to `http://127.0.0.1:8787` in Settings, or open http://127.0.0.1:8787/panel and paste a chat.

## Settings

On Render: the service's **Environment** tab (changes redeploy automatically). Locally: `server/.env` (see `.env.example`). The main ones: `PROVIDER`, `GROQ_API_KEY` / `GEMINI_API_KEY`, `LLM_MODEL`, `CLAUDE_MODEL` (paid `api` only), `KB_DIR`, `ACCESS_TOKEN`, and the grounding thresholds `MIN_GUIDE_SCORE` (below it: "not sure" without the AI) and `MAX_GUIDE_SECTIONS` / `MAX_PAST_TICKETS` (how much reference text goes in each request).

## Privacy

- Emails, phone numbers, card numbers, passwords, codes and API keys are masked, and speaker names are replaced with roles, before anything leaves the server. Masking can't catch every name or street address.
- The server logs timings and token counts only, never chat content.
- The extension can only read the support site listed in `extension/manifest.json`.
- The knowledge base in `knowledge/` contains internal ticket excerpts (already masked). Keep this repository **private**.

## Troubleshooting

| You see | Fix |
|---|---|
| "Can't reach the assistant server" | Check the service is **Live** in Render, and the address in the extension's Settings. |
| "Access token needed" | Paste the ACCESS_TOKEN from Render's Environment tab. |
| "Couldn't find the conversation" | Click **Point to chat** and click the message list, or highlight the messages. |
| "Open a client chat on … first" | Click the panel while the support site tab is active. |
| Speakers look swapped | Set `agentSide` or the selectors in `server/reader-config.json` (see `docs/reader-setup.md`). |
| "The API key is invalid" | Update ANTHROPIC_API_KEY in Render's Environment tab. |
| Lots of "Not sure" | Lower `MIN_GUIDE_SCORE` a little, or add the missing fix to the topic guides. |

## Development

- `npm test` in `server/` runs the checks (masking, retrieval, grounding checks, escalation, and the chat reader on a mock inbox page when Playwright is installed).
- `npm run try -- samples/cancel-subscription.json` runs one sample chat end to end (`--dry-run` skips the AI call).
- Layout: `extension/` (thin Chrome extension), `server/src/` (API, retrieval, grounding), `server/public/` (panel UI), `server/reader-config.json` (how chats are found on the page).
