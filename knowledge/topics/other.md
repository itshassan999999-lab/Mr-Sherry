---
description: Proven fixes, escalation rules and reply phrasing for 'Uncategorized chats (mixed topics)' guest-support chats, distilled from Modal Chats (Airtable).
---
# Uncategorized chats (mixed topics)

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 1496 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

Mix seen: ~20 chats are pure "give me a Google Meet / connect me to <named agent>" requests; the rest are short "where do I find X" questions, funnel/website builder how-tos, feature-availability questions (AI builder, Orders, AI Studio, Events), account/snapshot transfers, and a few unresolved bug reports.

## [Sample A] Recurring issues and proven fixes

### "Can I get a Google Meet / speak to <named agent>?"
- Symptoms: visitor types "human", "Google meets request please", "May I speak with <agent>", "same problem, another meeting link please". Often returning users, sometimes with a note asking that they get priority.
- Root cause: user prefers screen-share; previous call dropped or the chat ended before the link arrived.
- Fix: 1) Greet and ask for the issue in one line. 2) If the named agent is off, say so and offer whoever is free as a video expert (give the name if asked). 3) Post the meet link. 4) Close the chat once they have joined ("call team will continue helping you").
- Escalate? No. If there's a queue, update every 5-10 min ("bumped your request on priority").
- Evidence: recr3DuCyNEVk3Iu9, recXDe4NZZFzOR87r, recmcsktf7P1hSvn2, recBIySpAeP9HC3ay, recCrU5a49kcidnb4

### "Where are Orders / forms / social planner / staff?" (navigation)
- Fixes that worked:
  - Orders: Marketing & Sales > Orders. If it's missing, the agent turned the feature on from the backend and asked the user to refresh (recBa9Iqr0rCzH3Cf).
  - Add a login user: Settings > My Staff (recMPfQhckc1KHBp1).
  - Social posts: Marketing & Sales > Emails and Social Media > Social Planner. Schedule several posts there. Images come from Canva or elsewhere; the planner doesn't generate them (recCHiRS2FR6dOEFr).
  - Brand Boards: colors and fonts that get reused in email templates, funnels and websites (recCHiRS2FR6dOEFr).
  - Forms and service package descriptions: the agent replied with a Loom walkthrough (rec6tQGRSiRLXgaXy, rec0hghz6yx1o4EE9).
- Escalate? No.

### "Feature X is in GHL docs but not in my account" (AI builder, AI Studio, Events, AI actions)
- Root cause: the feature is toggled off for the sub-account, or the user missed where it is.
- Fix: check whether it's already visible (the AI website builder was there: recsjPfABS7UVMYFN, recaAOy8TBc1f0Lqf). Turn on AI features for workflow AI actions from the backend (reccdwwPZx2ru3tJe). If the agency hasn't enabled it, refer to the agency admin email (AI Studio under Labs: recsjPfABS7UVMYFN).
- Escalate? Yes, to the admin team, for features not offered on the white-label (Events calendar: recJ2PnVlJOTT2S86). The bot's fallback was a Personal Booking or Class Calendar.

### Email sequence: "Can't set a subject per email" / "How do I test it?"
- Root cause: in the new Hub email-campaign sequence, later emails reuse the first email's subject (the agent checked with the team).
- Fix: for a different subject per email, build a workflow (Automation) using email templates. Loom given for testing.
- Evidence: recazYuLEpHWtGe1i

### Internal notification shows the wrong sender name
- Root cause: From Name not set under Email Services, so the name comes from the Business Profile.
- Fix: 1) Settings > Email Services. 2) Three dots on the dedicated domain > Set headers. 3) Enter From Name and From Email; the email must be on the dedicated sending domain or it errors.
- Evidence: recTYdKAHkgEJHzJV

### Page/funnel display: logo too small, mobile shows extra images, can't center, transparent countdown
- Fixes: Loom walkthroughs for the logo in the nav (recxJZ5pONX2xNhgo). Elements that show only on mobile are separate elements: hide them with visibility settings (recNjhR7I0zMmzQBP). The countdown timer has no transparent background ("coming soon"), so there is no workaround (rec5issBER6CJvSFa). To add content you must add a Row, then Column, then Element (recs8g4WmUwxqhloJ).
- Escalate? No.

### "Page won't scroll / keeps loading / lead magnet spinner"
- Fix: the agent tested on their side (Loom proof it works), then the user cleared cache or used Incognito. Fixed in recm5bNfBUMZvGeOP and recCNMLE7JWuIqXOc.
- Escalate? No.

### "Domain root gives 404 but /home works" / URL slug won't update
- Fix: Loom showing the default (home) page set for the domain (recZju8OYClghpNRs). Bot path: Settings > Domains & URL Redirects > Manage > three dots on funnel/site > Edit > set default page > publish (reckNYwJZMdkB2oGR). For a stale step-1 slug, the agent fixed it on their side and the user refreshed (rec8EN1gyIJQ3CbKu).

### "How do I make short/trackable links for my podcast?"
- Fix: Settings > Domains & URL Redirects > + Add Redirect > choose domain > Redirect Path (e.g. /podcast/s2/ep2/...) > Target URL. Repeat for each episode.
- Evidence: recoAWswmBDjmtiRu

### Schema markup / SEO
- Fix: open Website > SEO Meta > Schema Markup, then scroll down in the panel. Schema is set per page, not site-wide.
- Evidence: recOnZcTeRBkPJazT

### Selling an ebook / digital product
- Fix: 1) Payments > Products > + Create Product (toggle Include in Online Store if needed). 2) Price/variant type Digital. 3) Attach the PDF/EPUB to the digital variant. 4) Payments > Settings > Notifications > Enable Order Confirmation Email. 5) If selling through a funnel, add the product on the checkout page's Products tab.
- Evidence: reciT71hWmDjKHOpy

### Contact import: "grayed-out columns have nothing to map"
- Fix: unused columns don't need mapping. Tick the checkbox at the bottom to continue without the unmapped data.
- Evidence: recBxLjzYc969LpUu

### Custom Object name field "not clickable"
- Root cause: on the "Start from scratch" screen the field is only an illustration.
- Fix: click Continue; the name is entered on the next step.
- Evidence: rec2W61DyWrxb64w3

### Media Storage: Google Drive "connected" but unselectable / video not in social post
- Fix: reconnect via Integrations (didn't work; moved to a video call: recfjSvHaAkW4QWbZ). The video not showing in Social Planner turned out to be user error (reciqQ2ENGgWBkZ33). Preset folders in Media Storage hold stock backgrounds and textures for pages, emails and social posts (recyCpm7JbG48qB31).

### Inbound webhook cost
- Fact: $0.0014 per inbound-webhook execution in workflows (agent checked the account). Evidence: recagyawvfHQau1Ei

### Account / snapshot transfer between agencies
- Agent explained what transfers (CRM data, phone numbers, sites, reviews, reporting, custom fields/values, calendars) and what doesn't. Domains must be disconnected and reconnected in the new account. Wallet credits, Stripe, Google, Meta and other API integrations (QuickBooks, TikTok, Shopify, Xero, etc.) disconnect.
- Escalate: yes, always. Backend admin task; follow-up by email.
- Evidence: recsjkg9Cui4cS5sq, rec7yfy3b6RItMwTI

## [Sample A] Escalation and ticket patterns
- Escalated to "admin team" by email: missing Reporting/Attribution menu (ticket number given: recIVqCa17RztuIdk), Events feature unavailable (recJ2PnVlJOTT2S86), full sub-account transfer (recsjkg9Cui4cS5sq), snapshot to another agency (rec7yfy3b6RItMwTI), wanting to talk to their own agency (recOw8ZTO9AQSgkca).
- Phrasing: "We'll reach out to the admin team… keep you updated via email"; "This #<n> is your ticket number"; "I've escalated this to the right team… the issue is not being dropped."
- ETA given: "usually up to 24-48 business hours" (rec7yfy3b6RItMwTI).
- Better pattern: escalate in-chat instead of redirecting to an email. In recIVqCa17RztuIdk the user called the redirect "super frustrating"; giving a ticket number recovered it (CSAT 4).
- Pricing, bots and feature-enablement questions go to the agency's email (recijf13N2DX393pY, recsjPfABS7UVMYFN).

## [Sample A] What went wrong in low-CSAT chats
- recHocqgMtrGZB4Sk (1): the user said "read the previous chat, it's a system error, not training". The agent re-asked which funnel and said there were two with the same name, then handed off to a call. Fix: read the history and reproduce before asking.
- recgdRgDPBbEB1c3c (2): favicon missing for 2+ weeks. The agent said "it shows on my end", blamed the user's computer and asked for a restart again. No ticket raised. A recurring cross-device issue should be escalated to dev.
- rec7yfy3b6RItMwTI (1): the snapshot was repeatedly handled in the wrong direction (into vs out of the platform). The user complained about "the opposite of what I requested". Confirm direction and goal in writing before escalating.
- recOw8ZTO9AQSgkca (1): the user asked for their agency and got a generic "team will reach out" plus an email, with no specifics.
- reckNYwJZMdkB2oGR (1): the bot repeated the same redirect steps twice. The agent then misread the issue as a 404.
- recxaI9mXZr5pr9XF (1): campaign sent twice (12 PM and 2 PM). The agent pushed straight to a call with no investigation or explanation.
- recNFpSIJOmrA6IlI (1): a simple "change scheduled post date" question was pushed to a video call, which disconnected. Answer simple how-tos in chat.
- recUeU1yZI6NLBOBz (1): affiliate campaign question. The agent replied only with "how can I help?" after a delay, then closed for inactivity.
- recsjPfABS7UVMYFN (4): the agent pasted the wrong macro ("Since you have joined the call…") mid-chat.

## [Sample A] Good reply phrasing worth reusing
- "I'm creating a quick Loom video for you, please stay with me." (most 5-star reviews cite the Loom)
- "I have tested your site and it's working on my end. Here's a Loom. Could you try an Incognito window or clear your cache?"
- "<Name> is not available right now. Would you like a call with another senior expert who is available?"
- "I'm still actively looking for a video expert. I've bumped your request on priority and haven't forgotten you."
- "I've escalated this to the right team. They'll follow up by email, and the issue is not being dropped."
- "If we get disconnected, ask the next agent to transfer the chat to me so you won't have to explain again."
- "Unfortunately that option isn't available yet, but here is how it looks / an alternative."

## [Sample A] Facts/gotchas
- In a Hub email-campaign sequence, all emails share the first email's subject. Use a workflow for different subjects (recazYuLEpHWtGe1i).
- Sender name falls back to the Business Profile when From Name is unset under Email Services; the From email must be on the dedicated domain (recTYdKAHkgEJHzJV).
- Inbound webhook: $0.0014 per execution (recagyawvfHQau1Ei).
- Schema markup is per page: Website > SEO Meta (recOnZcTeRBkPJazT).
- The countdown timer has no transparent background yet (rec5issBER6CJvSFa).
- The Orders menu can be hidden until support enables it (recBa9Iqr0rCzH3Cf).
- Reporting/Attribution may be missing from Settings on some white-labels. The agent's path "Settings > Reporting > Attribution" was wrong for that account (recIVqCa17RztuIdk).
- The HTML/custom code element has no practical length limit and can embed MP4 (agent claim, unverified) (recNYP070j3Dpwbvv).
- The chat accepts pasted text but rich formatting can block a paste: paste as plain text (recNYP070j3Dpwbvv).
- The support chat widget freezing or greying out was reported repeatedly; no fix found (reciqQ2ENGgWBkZ33).
- Bulk actions on a few records can take a long time but do complete (recxV4Ah54R0IMAf0).
- Apple Developer "account cannot be created" is on Apple's side: sign out or use Incognito, then contact Apple Developer Support online (recA5tobPMh0QRJWu).
- There are no direct lines to individual agents; users must come back through chat (reciqQ2ENGgWBkZ33).

<!-- sample B -->

Main themes: requests for a live video call; website builder how-tos (mobile view, global sections, page linking, sitemap, 404, cookies); features missing because of permissions or toggles; snapshot installs; phone, A2P and messaging restrictions; billing and affiliate redirects; ticket follow-ups; product and app questions. Several chats are "never mind, fixed it" closes.

## [Sample B] Recurring issues and proven fixes

### "Can I get a live call / connect me with [specific agent]"
- Symptoms: the user asks for a Google Meet right away, often naming an earlier agent. Some are short on time ("no time to read the article") or use voice input.
- Root cause: complex setups (automations not firing, mobile layout, store or fulfillment setup, email setup) where step-by-step chat is not enough.
- Fix:
  1. Confirm the request, then post a Google Meet link (usually within 2–10 minutes).
  2. Close the chat once the visitor says they have joined.
  3. If no expert is free, say the request is in the queue and offer a scheduling link.
- Escalate? Yes, to a senior or live call team. Watch for an empty meeting: in recO3NRXag8xPTD5N (CSAT 4) the user sat alone in a Meet and needed a second link after about 15 minutes.
- Evidence: recBIg2NF68Hbv7FC, recFHBb3pgS74r5YK, recMS6YpJd0hEjgZz, recsXNWHifwT063BV, rectx2aHCW5X7gXD8

### "A feature is missing for me but my colleague can see it" (AI Studio, Ask AI, Reviews AI Agents greyed out)
- Symptoms: the feature does not appear in the menu. Buttons are greyed out, or the three-dot menu shows only "Preview".
- Root cause: the staff role is missing the permission, or the feature is not enabled for the location.
- Fix:
  1. The bot suggests Settings > My Staff > Roles & Permissions, turning on the feature (for example AI Studio or "Manage Reviews AI Agents"), then logging out and back in or using an Incognito window.
  2. If the user cannot see Roles & Permissions, the agent enables it from the agency side and asks the user to refresh. Fixed in recDEuKsW88Bsd44a and reckvoN8WYYodEI3R.
- Escalate? Yes, if the agent's access is limited. In recYVxhVGyILw1rmt (AI Studio on the DPC white-label) the agent could not enable it and sent the user to the agency's support email.
- Evidence: recYVxhVGyILw1rmt, recDEuKsW88Bsd44a, reckvoN8WYYodEI3R

### "A sub-account is missing from my switcher"
- Fix:
  1. The bot asks the user to refresh, sign out and back in, clear the switcher filters, and confirm the user is assigned to the sub-account.
  2. The agent then adds the user's access to that sub-account from the agency side and asks them to check again.
- Escalate? No.
- Evidence: recXJnMsI0Wl1CMYN

### "Phone system needs configuration / I can't buy a number"
- Fix:
  1. The bot suggests Settings > Phone Numbers > + Add Number, checking that the wallet has funds, and completing any Regulatory Bundle.
  2. The agent then enables the phone system or number purchasing from the agency side for each sub-account the user names.
- Escalate? No. The agent fixed it in the chat.
- Evidence: recx4x3TxYBxS3gmi, recDFMs2d4d7en6lY

### "Temporarily restricted from sending bulk and workflow messages"
- Root cause: automated safeguards trip on daily send limits, high failure rates or high opt-out rates.
- Fix:
  1. Check the exact timestamp under Settings > Phone System (or Conversations / Email) > Advanced Settings > Restriction History. (Agent-stated path; unverified.)
  2. The restriction lifts automatically 24 hours after that time. The timestamp is in UTC, so convert it to the user's time zone.
- Escalate? No.
- Evidence: recG2M1nRNEVJS8g7

### "Install this snapshot (share link) into my sub-account"
- Fix:
  1. Confirm the target sub-account name.
  2. Ask whether to install all assets or only some.
  3. If there are conflicts (email templates, knowledge base, workflows), list them and get explicit OK before overriding.
  4. Confirm the assets are in place.
- Escalate? No.
- Gotcha: a first install looked missing to the user but the assets were already there. That caused the conflicts on the reinstall.
- Evidence: reczDn6syDglIpoeg, recRXY3ZeCcXDTfpJ

### "A section shows on desktop/tablet but not on mobile" / mobile-friendly layout
- Root cause: per-device visibility on duplicated sections. The agent cannot see unsaved builder changes.
- Fix: moved to a video call (screen share). No written fix was recorded.
- Evidence: rec5uPofD4xXQI3eT, recsXNWHifwT063BV

### "Copy content to another page / where do saved sections go / updated header link doesn't show"
- Fix:
  1. To copy a whole page: add a new page and choose Use Existing.
  2. To reuse a section: save it as a template. Saved sections appear under Add Section > My Templates or Saved Assets.
  3. Updated header or footer link still pointing at the old page: the agent re-pointed the header and footer links (and the page name or path) to the cloned page. (Exact steps were trimmed.)
- A Global Section missing on another page of the same site went to a video call (recFGqnBE80jEjhVT).
- Evidence: rec4dDdUt6A0YCmw4, recFGqnBE80jEjhVT

### "Website SEO basics: 404 page, robots.txt, llms.txt, sitemap"
- Fix:
  1. Set the default 404/error page to the site's Home page.
  2. The sitemap is at the domain plus /sitemap.xml, or under Sites > Domains (domain details).
  3. For robots.txt and llms.txt, the agent pointed to a free generator. The platform does not write them.
- Evidence: recK1iF1lnLjuo159, recqeQZmGDaH1nsS4

### "UK GDPR: visitors can't withdraw cookie consent"
- Fix (agent-stated, unverified):
  1. Clear the stored consent cookie so the native banner shows again, or
  2. Add a third-party consent platform (CookieBot, Termly or OneTrust) via Sites > Settings > Custom Code.
  3. When visitors decline, optional tags (GA, Meta Pixel) are suppressed.
- Custom JavaScript is the user's developer's job.
- Evidence: recYx18YhF37FTDfC

### "Note/task says saved but doesn't show"
- Internal notes: they save on the server right away; the panel lags by about 5 minutes. Fix: toggle to another icon in the right sidebar and back to Internal Notes, or press Ctrl/Cmd+R. Evidence: recYiDORfzpVBuxxo
- Tasks say "success" but do not appear: a known backend incident that day. The agent said it was escalated and would be fixed within hours. Evidence: recWJMl1nT870Ihjz

### "Email/DNS: get back to the verify-records page; SPF error"
- Fix:
  1. Settings > Email Services > Dedicated Domain and IP > three dots next to the domain > Verify Records.
  2. DMARC can take up to 24 hours to verify.
  3. "Only one SPF record is allowed per name": delete the duplicate or misspelled v=spf1 TXT record.
- Evidence: recAFiK2Ehf7g3NyQ, recakcUbjrAtgYQEm

### "Online store shipping (Canada Post) / print fulfillment (Printful)"
- Fix:
  1. Connect a Shippo account and link the carrier in Shippo under Settings > Carriers.
  2. Go to App Marketplace > Integrations > Shippo, paste the API key, and check Enable Live Shipping Rates.
  3. Set default package dimensions and the origin address under Payments > Settings > Shipping & Delivery.
  4. Alternative: set flat-rate or weight-based fees manually in the same place.
- Users often still wanted a live call. Printful went straight to a call.
- Evidence: rectx2aHCW5X7gXD8, recyi4K8x1A6nal6x, recmwPVloUtnMFRIq

### Quick how-tos answered with a Loom/Zight video
- Covered: navigation menu, sitemap, adding a client to a course, student progress, blocking a one-time calendar slot, adding multiple contacts to a company, product in test mode, IG new-follower welcome workflow.
- Fix: the agent opens the account, records a 3–8 minute video and checks back. This consistently got CSAT 5.
- Evidence: recC4O4lWvDT04DtP, reclSzjIFecwXNhgl, recPCHEBaTggUDNrZ, recn8h1WHvl7RkiSY, recHeIvG87ouGNdI1

### Misc navigation answers
- Edit client emails: Automation > Workflows > open the workflow > Send Email action (rec8oEvgaOV8JNEPx).
- Contacts showing only "my" contacts: Filter > Clear Filter > Apply (recCmwyrOs0NX4rBe).
- Where to put course videos and workbooks: Memberships > Courses; videos as lessons, PDFs as lesson attachments (recDOcO3guJDeQ5dv).
- Branded mobile app: Client Portal dropdown > Branded Mobile App (recLYUNo9YpYcec6n).
- Connect Canva: inside Social Planner settings (recgJvaXXQrFZyfhV).
- Before deleting a custom field: it removes the field's data everywhere and can break forms and workflows (recYJ0TGdZDpnpoxS).

### "Connect Claude to the CRM"
- Fix:
  1. Settings > Private Integrations > Create New Integration, scoped to the minimum permissions, then copy the token.
  2. In Claude: Settings > Connectors > Add Custom Connector, using the LeadConnector MCP server URL, then authorize.
- Evidence: recnxgRNF6lCL13PJ

### "Ask AI forgets my instructions / schedule"
- Agent advice: Ask AI's memory is session-based. Use a dedicated AI Agent with fixed system instructions instead.
- Media such as thumbnail uploads still has to be done manually in Social Planner (an API limitation).
- Evidence: recNP4DsfyNnoOQAv

## [Sample B] Escalation and ticket patterns
- Billing, pricing upgrades, past charges and the affiliate program go to the agency's support or billing email. Weekend: "billing team unavailable, email them" (recg1dtV3kRgWf6Bu, recW23Tmu5VjE8B0x, recPwkSCd4x0mbSvl).
- Platform-capability questions (custom fields in the Add Contact drawer, typing a date of birth instead of using the picker): the agent raised a ticket, gave a ticket number and promised a personal email follow-up (recs7Rln0mypV9j45).
- Ticket follow-up: "updates will be sent to your email; you can also give the ticket number in chat" (recmUwyW4eVYlREGy).
- Previous A2P tickets: the agent offered to have the team verify A2P "by our own method", with updates by email or SMS (recdPpYuDVRYc0cuW).
- Backend incidents: "ongoing backend issue, escalated, should be fixed within the next few hours" (recWJMl1nT870Ihjz).
- The bot hands off to a human for account access, billing, ticket lookups and permission changes.

## [Sample B] What went wrong in low-CSAT chats
- There were no CSAT 1–2 chats in this batch. The only one below 5 is recO3NRXag8xPTD5N (CSAT 4): the user had already waited in an empty Meet, then waited about 15 more minutes for a second link.
- Weak spots that did not hurt the score:
  - recYVxhVGyILw1rmt sent the user back to the support person they had already spoken to.
  - recg1dtV3kRgWf6Bu had a 24-minute wait for an agent after the bot handoff, and no pricing was given.
  - The agent asked for a 5-star review before solving anything (recyi4K8x1A6nal6x).

## [Sample B] Good reply phrasing worth reusing
- "Rest assured, your notes are saved on our servers the moment you click save; what you're seeing is a brief display lag."
- "This is an ongoing backend issue; it's already escalated and our team is actively working on it."
- "Would you like to hop on a quick video call so we can see your screen and sort this out faster?"
- "I've added your call request to the queue; if you're short on time I can share a scheduling link instead."
- "There's conflicting data in the sub-account. Should I proceed with the override, which replaces it with the snapshot's version?"
- "I'm recording a quick video to walk you through it step by step."

## [Sample B] Facts/gotchas
- Bulk/workflow send restrictions lift 24 hours after the UTC timestamp in Restriction History (recG2M1nRNEVJS8g7).
- Only one v=spf1 TXT record is allowed per name (recakcUbjrAtgYQEm). DMARC verification can take up to 24 hours (recAFiK2Ehf7g3NyQ).
- Internal notes panel lag is about 5 minutes; a sidebar toggle or refresh fixes it (recYiDORfzpVBuxxo).
- LeadFlow onboarding: the chat widget now pulls account data automatically, so there is no form to fill (recswXu6wU1LJLywP).
- Agents cannot see unsaved website-builder changes; the user must save, or share their screen (rec5uPofD4xXQI3eT).
- Users often run ChatGPT advice past support. One lead-magnet "old title" concern was a false alarm from ChatGPT (recXAvp6ILdMSqkZG).
- Messages delayed to phone arrived on their own a few minutes later (recCXpy9298lZbYyN).
- White-label agencies seen: thehub.mastermind.com (help.mastermind.com; training videos under the Support tab, recVeaS1CFNwr31lU), app.growthhub365.com, hub.creditrepaircloud.com, app.thegsdsoftware.com.

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 10,252 chats. CSAT average 4.51 from 1,280 ratings (131 rated 1-2). First-contact resolved: 894. Agent mentioned an escalation or ticket in 5%; moved to a video call in 1%.
- What users ask about most: generic "technical issue" openers with no detail, chats that disconnected, follow-ups on a previous chat, onboarding calls, Spanish-language chats, media storage questions.
- Dashboard paths agents gave most often: Settings > Phone Numbers (16); Settings > My Staff (7); Settings > Integrations (6); Settings > Custom Values (5); Payments > Products (5); Settings > My Profile > Notifications (3); Settings > Domains (3); Automation > Workflows (3); Settings > My Profile (3); Settings > Business Profile (3); Settings > Phone Numbers > Manage Numbers (3); Sites > Funnels (3).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recibz1iaHpZFNspn (2026-09-25): "If I put where does it come from?" Agent: That tag pulls information directly from the Custom Values area in your account. To see or edit what it displays, just navigate to Settings > Custom Values from your left-hand menu. You should see one named 'terms' listed there! | Not necessarily! While you or your team can definitely create your own custom values, some of them are actually built i
- rec1Ue38ztOsa2h59 (2026-09-24): "I need help with my social media. how I can schedule a post" Agent: Open TikTok and tap Profile at the bottom right. Tap the Menu (☰) icon in the top-right corner. Go to Settings and privacy > Account. Look at the option listed under Account Control: If it says "Switch to Business Account", the account is currently a Personal Account. If it says "Switch to Personal  | Got it, [name] need to make it bussiness and th
- recY2LYJyAIZbpaqQ (2026-08-24): "I want to automate posting our reviews however when I go to select a review source Google isn't an option that I can select even though its our main source of reviews and our GBP i" Agent: To connect your Google Locations, go to Settings > Integration and manage your locations accordingly. Can you please go to Settings > Integrations and disconnect and re-connect google? Please allow all permissions
- rec70acwYduzRvJnR (2026-08-23): "i need to change my bank account details" Agent: Hey, [name], you can add any other card by going to Settings > Billing.
- recywtWjXbFb5S3Cc (2026-07-30): "I need help with a product-related issue. I can't figure out where this text on my sales page is located so I can update it. see attached" Agent: Naivgate to the payments> products> click on the third product> once you get into the product > edit the description: | Got it, [name] to re-add the product again in the funnel and it will be updated there!
- recSlgZJjGwDTdWEl (2026-07-26): "Hi, [name] could you help me stop the automatic 'Daily Task Reminder' coming to my account?" Agent: Currently, they are configured for all channels like email, in-app and SMS, you can turn these off/customize them from here. | Settings > My Profile > Notifications.
- rec0AfqoLGFBrGSHe (2026-05-30): "can you bring back my last chat" Agent: No worries. So in order to change the permissions you will need to go back to the agency view > settings > team. And then search for the user name to edit the roles and permissions. | It is better if the agency owner changes that because when the owner creates the user they will grant access based on the requirements only
- recgYVPvmwPsJ4bBd (2026-05-17): "Hello, I have a question: my homepage is in German language. Is there an easey way to get an English version of it?" Agent: <div class="gtranslate\_wrapper"></div> <script>window.gtranslateSettings = {"default_language":"de","languages":["de","en"],"wrapper_selector":".gtranslate\_wrapper"}</script> <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script> | I am not a professional like you.But for editing your first podcast, keep things simple an
- recLzeGF5h5jI1Jao (2026-05-14): "Where do I go to set up a registration page" Agent: Understood! We can set up a webinar landing page within the system with a sign up form, when navigating to Funnels and pages> webinars. I'll create a quick loom for you to guide you through the process Tony! | Looking forward to your response Tony!
- rechRQV0iyE8HuVnU (2026-05-12): "how to create a product in marketing hub to sale" Agent: Got it, [name] me a moment to pullup your account and will be with you shortly. | I have talked with my team and they have got enabled it for you. Please duplicate the tab and then refresh it and it will be there. Payments> products
- rec8EuHP0fOVnvD26 (2026-05-12): "Hi how do you turn off Reviews Ai?" Agent: Okay [name]! You can disable the AI Reviews responses by going into the Resportings Tab > Settings > Reviews AI > Click on "Off", this should disable all the automatic responses ❤️
- recHNN6uwMDVvbrQd (2026-04-09): "It looks like I have to accounts under my name. So I want to make sure this doesn't cause any issues in the future." Agent: Your second account is just paused now, It will be automatically removed from the backend, But for the other hand side i am providing you the admin team email as well. You can drop the email regarding to this and they will also look into this and remove the paused one for you. [email] | Aisha, You need to go in the Settings > Phone System. There yo
- recHcUz3cYoMcF0ua (2026-03-05): "I have asked people to provide reviews and they have but they never show up under my reviews." Agent: Marketing & Sales > Payments > Products > Reviews
- recFbbENAe1zHHA79 (2026-02-25): "call transfer still not wortking" Agent: Could you please confirm the location where call isn't transfering? This will help me identify the issue and assist you more accurately. | Go into settings > phone > click on the three dots > edit confrigation
- recPZx6uIkKJXVyIs (2025-10-07): "Hey there! I am starting to use the "tasks" function in Profit Pulse and was wondering if there was a way to get notified when a new task is uploaded and assigned to me." Agent: Kindly navigate to settings>my profile>click on notifications>scroll down>category for TASK NOTIFICATION | There you can enable the notification in an app/email/sms

#### What went wrong in low-rated chats (user reviews)
- reclLBqKscCz0tK3G: "No response yesterday, and took way too long today that I missed the response, I logged off"
- recIC19FqRnbgZ8TV: "nice but couldnt help. Again, I fixed the issue with AI!!!"
- rec5PcBAmErALVsz4: "Urvah Malik shouldt be working in the Elite 360 team. She didt even watch my loom video correctly. Two SIMPLE questions where not answered and from her 50 second loom video, 30 seconds was waisted wit"
- recoHdbimO37fUfR8: "i been waiting for 2weeks to find an answer ,that is holding my whole project up and also this wait time for support is just ridiculous,  they should send a text or email when there free so your not c"
- recJ7eO6C7O8TqZX8: "the amount of time it takes a human to come on here is ridiculous"
