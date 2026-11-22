---
description: Index of the guest support knowledge base built from every human-handled chat in the Modal (GS) Airtable base. Start here for any guest support chat task.
---
# Guest support knowledge base

Distilled from the Airtable base **Modal (GS)**, table **Modal Chats** (read-only; nothing in Airtable was changed). The knowledge base is self-contained: it does not need Airtable to work, and Airtable is being disconnected.

## How to use this for a new chat
1. Read `playbook.md` (tone, white-label rules, escalation routing, mistakes to avoid, full-history stats).
2. Find the topic in the table below and read that file. The top part of each file is the in-depth guide; the "Full history" section at the end has volumes, the dashboard paths agents used most, and past answers that worked.
3. To find similar past chats, search `chat-index.csv` (e.g. `rg -i "a2p" chat-index.csv`). Each row has the user's first question and an excerpt of the agent's key answer, so you no longer need to open Airtable.
4. Check anything version-sensitive (menu paths, limits) against current documentation, because the UI changes.
5. Draft a reply that follows the playbook and keeps the agency's white-label identity.

## What was covered (pulled Oct 21 2026)
- All human-handled chats in Modal Chats: Chat Type HumanChat (70,565) and Rollover Chats (46,677, AI bot first, then a human). AI-only chats (AIChat) were skipped.
- 117,242 chats with a transcript, created Mar 2025 to Oct 21 2026. About 4,000 more human-type records had an empty transcript or no human reply and were left out.
- 28,569 have a CSAT score (average 4.72; 1,414 rated 1-2) and 14,894 are marked first-contact resolved.
- In-depth reading (the top part of each topic file and most of the playbook) was done earlier on about 1,500 chats from Aug to Oct 2026. The full history was processed automatically: topic classification, statistics, dashboard paths and answer excerpts.
- Chats from before about Jun 2025 were exported without speaker labels, so their answer excerpts are marked "[speakers not labeled]" and are less reliable.

## Privacy
- Emails, phone numbers, card-like numbers, passwords and API keys were masked as [email], [phone], [card], [hidden], [secret] before anything was saved. Greeting names and agent self-introductions were replaced with [name] / [agent].
- Business names, sub-account names and some customer names written inside a message can still appear. Treat the files as internal.
- No full transcripts are stored. `chat-index.csv` keeps a short question (up to 220 characters) and answer excerpt (up to 350 characters) per chat.

## Files
| File | What it holds |
|---|---|
| `playbook.md` | Tone, chat structure, escalation routing, low-CSAT patterns, reusable lines, full-history stats |
| `chat-index.csv` | 117,242 rows: record_id, date, agency_domain, topic, chat_type, csat, fcr, first_question, agent_answer |
| `topics/funnels-websites.md` | Funnels, websites, domains, forms (24,865 chats) |
| `topics/email-deliverability.md` | Email sending, dedicated domains, spam, headers (16,057) |
| `topics/sms-a2p-phone.md` | SMS, A2P 10DLC, numbers, porting, calls (9,086) |
| `topics/workflow-automation.md` | Workflows, triggers, actions (8,218) |
| `topics/contacts-crm.md` | Contacts, imports, tags, smart lists (6,640) |
| `topics/memberships-courses.md` | Memberships, courses, communities, client portal (5,985) |
| `topics/calendar-booking.md` | Calendars, availability, appointments (5,963) |
| `topics/payments-invoices.md` | Stripe, products, checkout, invoices (5,590) |
| `topics/billing-account.md` | Plan/billing questions and how they are escalated (5,362) |
| `topics/snapshots-subaccounts.md` | Snapshots, sub-accounts, transfers (3,181) |
| `topics/video-request.md` | How video/screen-share requests are handled (2,854) |
| `topics/social-integrations.md` | Facebook/Instagram, Google, Social Planner, WhatsApp (2,717) |
| `topics/ai-agents.md` | Conversation AI, Voice AI, AI Studio, knowledge bases (2,571) |
| `topics/login-access-users.md` | Login, staff users, permissions (2,345) |
| `topics/reporting-dashboard.md` | Dashboards, reporting, ads, attribution (1,248) |
| `topics/inbox-integrations.md` | Chat widget, inbox, API, webhooks, Zapier (1,807) |
| `topics/small-misc.md` | Opportunities, documents/contracts, mobile app, reviews (2,501) |
| `topics/other.md` | Chats with no clear keyword (10,252) |

## Keeping it current without Airtable
The daily "Daily GHL Knowledge & Airtable Sync" routine reads Airtable, so it stops working once Airtable is disconnected (it will only be able to do the documentation/changelog part). To add newer chats later, export them from Modal or Airtable as CSV, mask emails and phones, and append rows to `chat-index.csv` in the same columns; or reconnect Airtable for a one-off pull.
