---
description: How HL Pro Tool guest support handles white-label GHL agency chats - tone, escalation routing, ticket wording, and the mistakes behind low CSAT. Read before answering any guest support chat.
---
# Guest support playbook (learned from Modal Chats)

Built from all 117,242 human-handled chats (Mar 2025 to Oct 21 2026) in the Modal (GS) base. The guidance below came from reading about 1,500 recent chats in depth; the statistics at the end cover the whole history. Record IDs (recXXXX) identify the source chat; Airtable is no longer connected, so `chat-index.csv` holds each chat's question and the agent's answer instead. Topic-specific fixes are in `topics/`.

## Who we are in the chat
- HL Pro Tool staff the live chat for many white-label GoHighLevel agencies (Mastermind/The Hub, GrowthHub365, Credit Repair Cloud, Tekmatix and others). The user only sees their agency's brand.
- Never say "GoHighLevel", "HighLevel", "HL Pro Tool", "Modal" or name internal teams/tools to the user, unless the user says it first. Say "our platform", "our backend team", "our admin team", "our billing team".
- Feature-request links that point at the GHL ideas board break white label. Say "I've passed this to our product team as a feature request" instead.
- Agents are technical support. They cannot see or change billing, refunds or plan pricing.

## Shape of a good chat (what 5-star chats share)
1. Greet within a minute, with a name and the "keep this window open" reminder.
2. Restate the problem in one line and confirm the exact sub-account, page, workflow or contact before touching anything. Several bad chats came from looking at the wrong sub-account (recfI9Cyn97sQOddt, recmAeF01iWcgxFGj).
3. Read the bot summary and any earlier chat first. Asking the user to repeat themselves is one of the most common causes of CSAT 1 (recHocqgMtrGZB4Sk, rec5qL5MOuCkEbKa8, recWCQ3M1JkV160t4).
4. Check the account yourself ("I'm pulling up your account now") and reproduce the problem. Answer simple how-tos directly in chat, with the exact path (e.g. Settings > Email Services > Dedicated Domain and IP).
5. For anything visual, send a short Loom with audio ("I'll record a quick Loom walking you through it step by step"). Most 5-star reviews mention the Loom. Check the audio and the link before sending.
6. Ask permission before changing anything in the account ("May I have your permission to send a test / make this change?"). Never edit a customer's AI prompt, workflow or settings without consent, and save a copy first (recKe1hHd3Cz1rGm0).
7. Confirm the fix worked, then ask "Is there anything else I can help you with?". Ask for a review only after the issue is solved.

## When to offer a video call
- Offer a Google Meet screen-share when chat steps have failed twice, when the user's screen differs from what you describe, for DNS/domain setups, or when the user asks. Agents use their own Meet link; they don't join the user's Zoom/Teams (recS82kmFn54AN4dB).
- Do not push simple how-tos to a call (recNFpSIJOmrA6IlI, recxaI9mXZr5pr9XF).
- If no video expert is free, say so with an honest wait estimate and offer the enterprise/senior booking link, or offer to convert to a ticket. Users who waited 35-60 minutes in silence gave CSAT 1 (reczwMOpsnTvHgP5E, recHDQokeLCnHxnCc, rec8ZpJjYMuw8bFwb).
- After the user joins the call: "Since you've joined the call, I'll close this chat; the call team will continue helping you from here."

## Escalation routing
| Situation | Route | What to tell the user |
|---|---|---|
| Billing, refunds, cancellations, paused/suspended account, plan upgrades/downgrades, wallet or card issues, unknown charges | Agency billing/admin team | "I'm on the technical support team and don't have billing access, so I've escalated this to our billing team as a priority." Give the ticket number. |
| Account ownership transfer, moving a sub-account or snapshot to another agency (relationship number), merging accounts | Admin team, by ticket | Explain what does not transfer (phone numbers, FB/IG, Google/Zoom calendars, domains, Stripe) (recttxKB5L1jEI6yj). |
| Features not provisioned (missing menu, Agency View, templates, Integrations tab), plan-level restrictions, Email Verification toggle, Business Profile locked fields | Admin team | "This is restricted at the plan level, so our admin team needs to enable it." |
| Reproduced bug, backend error, data missing, SSL stuck after reconnect, spam persists after a verified domain, API 403s | Backend/dev team, by ticket | "I've reproduced this on my end, so it isn't anything you did. I've escalated it to our backend team." Ask them not to delete anything meanwhile. |
| A2P registration/appeal, toll-free, port-in/port-out | A2P / phone team | A2P updates "up to 12 hours"; ports need the current carrier account kept active. |
| Custom code, JS/CSS, done-for-you builds | Out of scope | Point them to their developer or to hiring a VA with My Staff access. |
| Third-party problems (Stripe 2FA, payouts, PayPal Pay Later, Meta account bans) | Vendor support | Say which vendor and why. |

Project rule: backend database overrides, billing/subscription changes and owner access transfers always go to an escalation ticket. Never promise them in chat.

### How to escalate well
- Escalate in the chat. Do not just hand over an email address, especially if the user says they already emailed (reczAFpVLxlcz2Y9m, recvPAfNyIhhiUURf, recIVqCa17RztuIdk).
- Confirm the best email, give the ticket number, and say updates come by email from the support address (check spam).
- Don't invent an ETA. Use "I don't want to give you an inaccurate timeframe; the team will update you by email" or the standard window the team uses (24-48 hours for admin/backend, up to 12 hours for A2P).
- Close with: "I'll close this chat here, but the issue is not being dropped. Please keep this ticket number so the next agent can pick it up."
- Don't over-promise: "the dev team will build this for you" or "you'll see it in upcoming updates" caused complaints (rec5ubZcnj2yaSOpK, recCjlkMzXDqVFfbq).

## Mistakes behind CSAT 1-2 (avoid)
- Long silences: 10-45 minutes before a first reply or a Loom, or repeated "give me a moment" with no content.
- Closing for inactivity while the user is still typing, watching the Loom, or waiting on us (recGLaIfUP3amApld, rec0t4O5ANCDSCS1u, recWYctGdYur0jR1s).
- Generic checklists or help-article pastes instead of checking the account (recrNemYa0bkbC7Sf, recO4Yo3fKJne54Er).
- Blaming browser cache for a repeated or cross-device issue instead of escalating (recp1HahIiuKt2l45, recgdRgDPBbEB1c3c).
- Answering the wrong question (rec1CS9VWQjq0Q1H2, rec7yfy3b6RItMwTI). Confirm the goal, and the direction of transfers, in writing.
- Sending a user to a contact who no longer works there, or bouncing them between chat and email.
- Pasting passwords in chat (recFRmswh7GlM2Ezh). Trigger a reset instead.
- Pasting the wrong macro or an unrelated ticket text (recsjPfABS7UVMYFN, recsxppilhC6vZa41).
- Saying "nothing we can do" or "it's hard coded" without logging feedback or offering an alternative.

## Reusable lines
- "To save you time, I'm pulling up your account now to check this on my end."
- "I'm creating a quick Loom to walk you through it step by step. Please make sure your volume is up."
- "You weren't at fault; this was a backend issue and it has now been resolved."
- "Would you like to hop on a quick screen-share so we can sort this out together?"
- "Would you prefer to wait here, or shall I turn this into a ticket and update you by email?"
- "That option isn't available right now. I've passed it to our product team as a feature request, and here is an alternative."
- "Since you've already tried those steps, I won't ask you to change anything else. I'm escalating this now."
- "Is there anything else I can help you with before I close the chat?"

## Full history at a glance (Mar 2025 to Oct 21 2026)
- 117,242 human-handled chats with a transcript: 70,565 handled by a human from the start and 46,677 that rolled over from the AI bot to a human. AI-only chats were left out.
- 28,569 chats have a CSAT score; the average is 4.72 and 1,414 (5%) were rated 1-2. Monthly CSAT rose from about 4.3 in Apr-May 2025 to 4.8 from Jun 2025 onward, and has sat around 4.65-4.72 since May 2026 as volume grew.
- Billing chats score lowest (4.46), because agents can't fix them in chat. The escalation script above matters most there.
- Of 663 low ratings that left a written review, the reasons were: waiting or slow replies (174), the chat closed or dropped early (96), wanting a call or a human (71), issue not resolved (52), bounced or escalated without a fix (37), having to contact us again (35), and wrong or conflicting answers (27). Speed and not closing early fix more low ratings than anything else.

## Volume by topic (Mar 2025 to Oct 21 2026, human-handled)
Funnels/websites 24,865 · Email 16,057 · SMS/A2P/phone 9,086 · Workflows 8,218 · Contacts 6,640 · Memberships/courses 5,985 · Calendars 5,963 · Payments 5,590 · Billing 5,362 · Snapshots/sub-accounts 3,181 · Video-call requests 2,854 · Social 2,717 · AI agents 2,571 · Login/access 2,345 · Reporting 1,248 · Opportunities 1,165 · API/integrations 1,124 · Documents/contracts 861 · Inbox/chat widget 683 · Mobile app 264 · Reviews 211 · Uncategorized 10,252.

Topics were assigned by keywords in the user's first question (falling back to everything the user wrote), so counts are approximate.
