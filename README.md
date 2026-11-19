# Support Reply Assistant

A Chrome side panel for our live-chat agents. Open a client chat, click **Suggest reply**, and the panel drafts the next message from our own playbook, topic guides and past tickets, with the sources it used. The agent reviews it, clicks **Insert into reply box** (or Copy) and presses send themselves. **It never sends anything.**

```
Chrome extension (thin)            Server (this repo, server/)                         Claude
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

## Setup (once per computer)

You need [Node.js](https://nodejs.org) 18+ and Google Chrome.

### 1. Get the code and the knowledge base

```
git clone https://github.com/itshassan999999-lab/Mr-Sherry.git
```

The knowledge base (playbook, topic guides, `chat-index.csv`) holds internal ticket data, so it is **not** in this repo. Copy the `knowledge` folder (the one with `playbook.md`, `topics/`, `chat-index.csv`) next to the repo files, so you have `Mr-Sherry/knowledge/playbook.md`. Or set `KB_DIR` in `server/.env` to wherever it is.

Optional: save official help-center articles as `.md` files in `knowledge/official-docs/`. They are searched and cited like the guides ("Official docs").

### 2. Start the server

```
cd Mr-Sherry/server
npm install
cp .env.example .env      (Windows: copy .env.example .env)
npm start
```

Pick how replies are generated in `.env` (`PROVIDER`):
- `claude-code` (default): uses your logged-in [Claude Code](https://code.claude.com), so your Claude plan, no API key. Run `claude` once to log in.
- `api`: an Anthropic API key, pay per use. Best for a shared server for the whole team.
- `manual`: no AI call; the panel gives you a prompt to paste into claude.ai, and checks the answer you paste back.

Leave the window open. You should see `Reply assistant v1.0.0 running at http://127.0.0.1:8787`. Try it without the extension at http://127.0.0.1:8787/panel (paste a chat), or run `npm run try`.

### 3. Install the extension

1. Go to `chrome://extensions`, switch on **Developer mode**.
2. **Load unpacked** and pick the `extension` folder.
3. Pin **Support Reply Assistant** (puzzle icon, then the pin).
4. Open a client chat, click the icon. The side panel opens; click **Suggest reply**.

The first time, check the line "Read N messages from the open conversation" and click **View** to see exactly what was read. If it picked the wrong area, click **Change chat area** and click the message list once; it's remembered. Highlighting messages on the page also works: highlighted text is used instead.

## Updating

- **Panel, wording, rules, knowledge, AI logic:** pull the latest code (`git pull`) and restart the server, or, on a hosted server, it redeploys. Agents just click Suggest again; no extension reinstall.
- **Knowledge files:** the server notices changed files within a minute and reloads them, no restart needed.
- **Chat reading for a changed site layout:** edit `server/reader-config.json` (selectors). That's served to the extension too, so no reinstall.
- **The extension itself** only needs an update when `extension/` changes (rare). The panel shows a banner when an agent's extension is too old. Then: `git pull` and click the reload icon on the extension card in `chrome://extensions`.

To get zero-touch updates for the extension too, publish it as an unlisted or private item on the Chrome Web Store; Chrome then updates it automatically.

## Hosting for the whole team (optional)

Running the server on one shared host means agents don't run anything locally:
1. Deploy `server/` to any Node host that deploys from GitHub (for example Render, Railway or Fly.io), with the knowledge folder available to it and `KB_DIR` pointing at it.
2. Set `PROVIDER=api`, `ANTHROPIC_API_KEY`, `HOST=0.0.0.0` and a long random `ACCESS_TOKEN`. Use HTTPS.
3. Each agent opens the extension's **Settings** and enters the server address and access token.

Every push to GitHub then updates every agent's panel.

## Settings

All in `server/.env` (see `.env.example`). The main ones: `PROVIDER`, `CLAUDE_MODEL`, `CLAUDE_EFFORT`, `KB_DIR`, `ACCESS_TOKEN`, and the grounding thresholds `MIN_GUIDE_SCORE` (below it: "not sure" without the AI) and `MAX_GUIDE_SECTIONS` / `MAX_PAST_TICKETS` (how much reference text goes in each request).

## Privacy

- Emails, phone numbers, card numbers, passwords, codes and API keys are masked, and speaker names are replaced with roles, before anything leaves the server. Masking can't catch every name or street address.
- The server logs timings and token counts only, never chat content.
- The extension can only read the support site listed in `extension/manifest.json`.

## Troubleshooting

| You see | Fix |
|---|---|
| "Can't reach the assistant server" | Start it (`npm start` in `server/`), or check the address in Settings. |
| "Couldn't find the conversation" | Click **Point to chat** and click the message list, or highlight the messages. |
| "Open a client chat on … first" | Click the panel while the support site tab is active. |
| Speakers look swapped | Set `agentSide` or the selectors in `server/reader-config.json` (see `docs/reader-setup.md`). |
| "Could not run the `claude` command" | Install Claude Code and run `claude` once to log in, or use `PROVIDER=manual`. |
| Lots of "Not sure" | Lower `MIN_GUIDE_SCORE` a little, or add the missing fix to the topic guides. |

## Development

- `npm test` in `server/` runs the checks (masking, retrieval, grounding checks, escalation, and the chat reader on a mock inbox page when Playwright is installed).
- `npm run try -- samples/cancel-subscription.json` runs one sample chat end to end (`--dry-run` skips the AI call).
- Layout: `extension/` (thin Chrome extension), `server/src/` (API, retrieval, grounding), `server/public/` (panel UI), `server/reader-config.json` (how chats are found on the page).
