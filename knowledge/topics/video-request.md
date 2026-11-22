---
description: Proven fixes, escalation rules and reply phrasing for 'Video call / screen-share requests' guest-support chats, distilled from Modal Chats (Airtable).
---
# Video call / screen-share requests

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 664 chats fell in this topic; 122 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

(63 blocks in the file; rec0mXW71dSEhEaUV appears twice. Several transcripts are trimmed in the middle.)

## [Sample A] Recurring issues and proven fixes

### "I want quick help on Zoom" / "human zoom?" (live video request)
- Symptoms: the opening message is the canned "I want quick help on Zoom" (Mastermind), or the user types "human" and then "zoom call plz". Often no issue is described at all.
- Root cause: the user prefers screen share, or the issue is "too much to type".
- Fix that worked:
  1. Greet the user and say "allow me a moment to arrange a video meeting".
  2. Post the request to the video-call team or queue internally. Calls are done on **Google Meet**, not Zoom.
  3. Paste the meet.google.com link and say "Please join the meeting link with our expert".
  4. Once the user has joined, close the chat ("Since we've moved this to a live call, I'll close this chat now. The call team will continue helping you from here.") and ask for a rating.
  - The best outcomes had the link sent within 2-7 minutes.
- Escalate? No. The live-call team is the hand-off.
- Evidence: recMDBQoLFDRyMM7s, reckGnFpcQNxeUdfw, recUSdfOGOu7DVupe, recZtREixGELVRrtu, rec3UScz3dHcMphkY

### "Can I talk to [specific expert] again?"
- Symptoms: a repeat user asks for the same named video expert, sometimes because changes from the last call "aren't showing".
- Fix that worked:
  1. Check whether that expert is available.
  2. If they are busy, give an honest ETA ("on another call", "back in ~1 hour", "available tomorrow").
  3. Offer another senior video expert now, or let the user come back later.
  4. If the user is following up on a past call, ask the expert for a screenshot and relay it in chat (recYrQT5F6eY8Vqm0, solved in chat).
- Escalate? No.
- Evidence: rec9tc8Ds7UMMjY91, recDMlmqnYM0Rgf9k, rectnZB0IInaTgPog, reckejEnvnh1MuJ33, recFFfIIbP5zsO5dG

### "No one available for video" (queue surge / low coverage)
- Symptoms: the wait for a link runs 15-60+ minutes, especially on weekends and at night.
- Fix that worked:
  1. Tell the user early and honestly, with an ETA (e.g. "15 to 20 minutes", "about an hour").
  2. Offer chat help in the meantime. Several agents solved the issue in chat while the user waited in the queue (recsKuKSk3aMe4C0n, recOx5lkJVGbnnaDM).
  3. Offer the booking link for a 45-minute Senior Technical Expert appointment (enterprise-booking-calendar widget) as a fallback.
  4. Ping the user every ~5 minutes so the chat doesn't time out.
- Escalate? No.
- Evidence: recAD6uaNYYqI7kHL, recGMLy0aVn49Z08W, recrhzJPoPQd2XenI, recWHOzyx5B614TU0, rec60peTsthKbhAzc

### "Send me a Loom instead" / user sends their own Loom or Zight
- Symptoms: the user can't do a live call (two screens, busy), or sends a screen recording of the problem.
- Fix that worked:
  1. Watch the user's video fully.
  2. Access the account, fix the issue or test it, then record a Loom or Zight walkthrough.
  3. Share the link and ask the user to test.
- Gotcha: some users explicitly say "Please do not send me a loom video". In that case give written steps (recS9JJII0fOqcXMo). One user said a prior call or Loom "did not directly answer my question" (recI5JXkU7AoiQnWg).
- Evidence: recUo0EuBLpTPrjkn, recUQOFXt7A94u0eo, recpVs0ddA1yshZ6D, recfsDvi64lGFp1Eq, recZEMwK8n7rTEuA2

### "Can I book a call for a specific time?"
- Facts: there is no guaranteed slot through chat. Agents told users to come back to chat at that time and ask (recA1K22TiJro4NbE). For enterprise users, agents share the enterprise booking calendar link for a scheduled call (recuQnuLGccEHGtXO, recWHOzyx5B614TU0).
- Video support is "24/7 in general", but waits depend on surges (rec60peTsthKbhAzc).

### Mobile nav menu unreadable / image not fitting on mobile
- Root cause: the mobile background colour was set to transparent under the **General** settings, not Styles.
- Fix that worked:
  1. Open the page or site builder.
  2. Go to Navigation Menu > General > Mobile Background Color and set a solid colour.
  3. Preview the page in mobile view.
- Escalate? No.
- Evidence: recsKuKSk3aMe4C0n (photo resizing for mobile went to video: rece2ViTCp1pUoVWU)

### Event ticket "out of stock"
- Root cause: an event ticket is a **Product**, and its available quantity was 0.
- Fix that worked:
  1. Go to Products > open the product > Price section and set the available quantity.
  2. Test the purchase.
  3. "Order status is not pending" appeared after a duplicate checkout with a 100% coupon. The order was already completed.
- Evidence: rectGM0V8s19DS79g

### Quiz results by highest-scoring category
- Fix that worked: configure the category scoring in the quiz, then build a section per category on the Results page. The scores shown can be hidden. Agents said a tie goes to the category listed first in the quiz settings (unverified).
- Evidence: recCxgVh1aMEVXMZ1, recUQOFXt7A94u0eo

### Freelancer needs products and offers in workflows without payment access
- Fix that worked:
  1. Go to Settings > My Staff > Edit user > User Permissions.
  2. Turn ON Automation, Products, Memberships/Courses and Sites.
  3. Keep Payments OFF.
  4. The user then logs out and back in. The Global Product filter (Order Submitted trigger) and the Course Grant Offer list then populate.
- Evidence: recS9JJII0fOqcXMo

### Zoom option missing in Integrations (calendar meeting location)
- Fix that worked:
  1. Go to Settings > My Profile > Integrations (Add new / Connect Zoom). Zoom is per user, not under location Integrations.
  2. Go to Settings > Calendars > edit the calendar > Meeting Location = Zoom.
  3. Use the meeting-link custom value in confirmation emails and SMS.
  4. Workaround: paste a Zoom personal meeting link into Custom Location.
- Evidence: recJukBXnkhpE1Ct0

### SMS error rate / opt-out limit reached
- Root causes the agent listed: no explicit opt-in, high STOP/complaint rates, public URL shorteners or links not matching the A2P-registered domain, spammy content, messaging DND contacts.
- Fix: send only to opted-in contacts, include opt-out text, use the A2P-approved branded domain, and remove DND contacts. The "opt-out limit for the day" error went straight to video.
- Evidence: rec5jKNAjLGQQ6yUn, recu3rHTi5jiZibgr

### Port my own number to a sub-account
- Fix: send the porting checklist:
  - Location ID
  - Name and service address exactly as on the bill (no PO box)
  - Numbers and their type (wireless or landline/toll-free)
  - Wireless account number and PIN/last-4 SSN
  - Current carrier
  - Recent bill as a PDF under 4MB
  - Letter of Authorization
- Advise the user to confirm the porting PIN with their carrier.
- Evidence: recD4TCKm11ltOxHP

### External API / MCP access for an outside assistant
- Answer given: possible via API, webhooks or middleware, but there is no native MCP endpoint. Create a Private Integration token with minimum scopes. The token is shown only once, so store it as a secret.
- Limits given:
  - Click-tagging must be done in a workflow.
  - Active workflows can't be edited through the API.
  - Social accounts must be connected in the dashboard.
  - Handle 429 rate limits with backoff.
- Evidence: recI5JXkU7AoiQnWg

### Other one-offs
- **Trigger link with no destination:**
  - A trigger link must point to a URL.
  - Create a simple "you've confirmed" page as the destination (recLNEbybe8HgV82J).
- **Blog default page / domain:**
  - Set the default page to Home.
  - Test in incognito.
  - Check the email domain under Settings > Domains and its DNS (recUo0EuBLpTPrjkn).
- **Order form:**
  - A landing page has one order form, and multiple products are added inside it.
  - Edit a product name via the product's three-dot menu (recYrQT5F6eY8Vqm0).
- **Survey embedded in a course lesson:**
  - The "Helpdesk" name came from the last editor.
  - The embed code was edited to remove the pop-up (recpVs0ddA1yshZ6D).
- **Calendar link in a lead magnet email:**
  - Calendars are under the client/customer menu (recOx5lkJVGbnnaDM).
- **Built-in Live Room instead of Zoom:**
  - Recording depends on the plan (unverified) (rec2SXcKUoVswy9Wb).
- **QR codes:**
  - The bot said Sites > QR Codes.
  - The agent found QR codes weren't in the user's plan and referred them to billing (recwlatyGC8qXjfBY).

## [Sample A] Escalation and ticket patterns
- Video requests go to an internal "video call team" or queue. The chat agent relays the link and does not join. Phrasing used:
  - "I have posted the call, getting the agent for you will take 5-10 min."
  - "I've sent a video call support request to our team."
- Feature limits are logged as feedback for the dev team, for example course labels that can't be relabelled ("built into the system", workaround: custom CSS/JS) (recP0XvjCSXOYjxAz).
- "Checking with backend team" was used mid-chat (rec5PcBAmErALVsz4). One user's CSAT comment reads "Hoping to hear back from the back end team", so follow-ups were left open (recZtREixGELVRrtu).
- Plan or feature upgrades are sent to the billing team (recwlatyGC8qXjfBY).
- No formal ticket IDs or ETAs appear in this batch.

## [Sample A] What went wrong in low-CSAT chats
- **recWHOzyx5B614TU0 (1):**
  - No video coverage; "come back in an hour" plus a booking link.
  - The chat closed for inactivity. Review: "no one available to help".
- **recEPMCC51cW1JIWA (1):**
  - The user had corrupted automations (one overwrote another). They were told "no availability, come back in an hour".
  - The agent replied "glad I could assist" and closed without attempting a fix or a booking link.
- **rec60peTsthKbhAzc (2):**
  - The user had a 15-minute wait before the first human reply, then "come back in an hour" with vague answers about the queue.
  - A link came only later. Review: "lost connection while waiting".
- **rec5PcBAmErALVsz4 (1):**
  - The agent didn't watch the user's Loom properly and answered only one of two questions.
  - The agent went silent, then sent a wrong Loom. The user solved it with AI.
- **recXuTVqSIhz88BH8 (1):**
  - The agent sent a generic Loom on finding Facebook/Instagram leads instead of reproducing the specific ad-date report from the user's screenshot.
- **rec9n2iWw5ST7ERye (1), recGIk7J27Rylnfsn (1):**
  - Distressed or all-caps users got only a link with no empathy or check-in, or waited 15 minutes for one.
- **rec0mXW71dSEhEaUV (1):** a 13-minute wait with generic "thank you for your patience" messages.
- **Other mistakes:**
  - A Facebook verification answer was pasted to the wrong user and then retracted (rec9aZtYFbltZxMaa).
  - The agent asked for a recording password in chat, and the user posted it publicly (recuQnuLGccEHGtXO).

## [Sample A] Good reply phrasing worth reusing
- "Allow me a quick moment to arrange a video meeting for you right away."
- "Due to a surge in calls, the estimated wait is around 15 to 20 minutes. In the meantime I can assist you on chat, or set up a call after the wait. How would you like to proceed?"
- "I've added your video call request to the queue and will notify you as soon as I receive the link; meanwhile let me check this for you."
- "Since we've moved this to a live call, I'll close this chat now. The call team will continue helping you from here."
- "You shouldn't need a passcode for this Google Meet — just click the link directly."
- "Would you like to hop on a quick video call with our senior? It will help us see your screen and help you efficiently."

## [Sample A] Facts/gotchas
- Calls are on Google Meet even when users say "Zoom". The Meet link needs no passcode (reciNqpndRqwMkeTP, recA1K22TiJro4NbE).
- Mastermind (thehub.mastermind.com) has a "Mastermind - Zoom Request" chat button that sends the canned opener "I want quick help on Zoom".
- The AI bot hands off when the user types "HUMAN". A typo like "HUMN" is re-prompted (rec60peTsthKbhAzc).
- Video support is 24/7, but coverage drops on weekends and overnight (recAD6uaNYYqI7kHL, recGMLy0aVn49Z08W).
- Enterprise users can book a 45-minute Senior Technical Expert slot through the enterprise-booking-calendar widget link.
- Agents ask for the CSAT rating just before sending the user to the call, because the chat closes once they join.
- Event tickets are Products, and the quantity is set in the price section (rectGM0V8s19DS79g).
- Mobile menu colour lives under the nav's General settings, not Styles (recsKuKSk3aMe4C0n).
- Built-in course UI labels (e.g. "Mark as Completed" area) can't be relabelled; the workaround is custom CSS/JS (recP0XvjCSXOYjxAz).
- Never ask the user to paste passwords in chat (recuQnuLGccEHGtXO).

<!-- sample B -->

Mostly thehub.mastermind.com "I want quick help on Zoom" button chats, plus growthhub365, thegsdsoftware, salesquivercrm, creditrepaircloud, revspring, tekmatix, elite360, equipt360, crm.aiforbusiness. Almost all CSAT 5; one CSAT 4; none CSAT 1-2. Many transcripts are already middle-trimmed in the source.

## [Sample B] Recurring issues and proven fixes

### "I want quick help on Zoom" / "can we do a video call / screen share?"
- Symptoms: the preset button text "I want quick help on Zoom", sometimes with no detail. Also "I need to screen share", "I don't want a chat, I want a video call".
- How it is handled: calls run on **Google Meet**, not Zoom. The chat agent "posts a call request" to the call team, finds a free video expert and pastes a meet.google.com link. Once the user joins, the agent closes the chat ("The call team will continue helping you from here").
- Steps that worked:
  1. Greet the user and remind them to keep the chat window open.
  2. Say "allow me a moment to check video meeting availability" and post the request to the call team.
  3. Send status updates every 3-5 minutes while waiting. Typical wait is 2-15 min; up to ~40 min during a surge.
  4. Paste the Meet link and ask the user to confirm they have joined.
  5. Close the chat and ask for a rating.
- Escalate? No, it is a routing step. If no expert is free, see the "no availability" issue below.
- Evidence: recL5E8PgV06A34ff, rec2hfosUNsBY6IKi, recK2f2cSqvttcLzX, recKLB7nuhaFSYTyl, recUBZJ4Re8ZdJ2qy

### "Is Wealth / Adeel / Mr Johnson available?" (user asks for a named expert)
- Symptoms: regular users ask for a favourite call expert by name, and sometimes want to know who it is before getting the link.
- Handling: the agent checks the expert's shift. Examples given: "clocks in around 12pm PST", "clocks in at 1 PM PST", "has not started his shift", "out of office", "moved to the day shift". The agent then offers another available senior expert by name and shares the link once the user agrees.
- Escalate? Only when the user insists on "back office" or a senior agent. The agent "checked with the team" and found a senior expert after about 30 min (recSdBJ0ynoGmf3UM).
- Evidence: recQAan597ZX5FTDE, recKt9f74j8oy4v2Y, recEcx6GxRUUdmghX, recSdBJ0ynoGmf3UM, rec8eqNMaalPvW5N0

### "No one is available for a call?" (queue full / no coverage)
- Symptoms: all video experts are busy, or it is outside coverage hours.
- Options agents offered:
  1. Keep helping in chat while the call request stays in the queue.
  2. Send a (one-time) **booking link** to schedule a call with a senior agent.
  3. Ask the user to come back later; one agent said "reach out in ~2 hours".
- Outcome: often a slot freed up during the chat and the agent then sent the link (recRQ6FfzTE4ppqAl, recEd8IQtZui0tofQ, recKF3ApIiRuJQPhM). In recNQo2rNXIFxeiGl the user chose chat instead and the issue was solved with a Loom.
- Evidence: reclHBIj66JnDoOak, recSutiT0Onq03Lvf, recwKXzMfeiB7Je2R, recEd8IQtZui0tofQ, recNQo2rNXIFxeiGl

### "Can you send me a Loom instead?" (user can't do a live call)
- Symptoms: the user asks for a Loom, or has a meeting soon and can't join a call.
- Fix: the agent pulls up the sub-account, records a Loom (sometimes Zight) and pastes the link. If the user is leaving, the agent offers to email the Loom (recPWYBhHqad7u0mP).
- Gotcha: users often come back because "the Loom was too quick" and ask for a live call (recQ8fYA59QBUmSDs, recKF3ApIiRuJQPhM, recEUT6ru1MQDrWNi).
- Evidence: recgRPAATcK6jxYpf, recGJXZb4tifT1KXe, reciDJkHMWHLHNpSi, rec4OFs0k3EDgJigV

### "I'm looking for the Loom support sent me yesterday"
- Fix: the agent finds the earlier chat and re-sends the Loom links. The AI bot cannot see previous conversations and tells the user to type HUMAN.
- Evidence: reczhDjDlizYsD3FW, recOnhv6k6PYRbyCt

### "Chat closed / link expired before I got the Meet link"
- Symptoms: the previous chat closed before the user got the link, or the old link no longer works.
- Fix: post a new call request right away and send a new link. Apologise for the early close.
- Evidence: recbzKyvJeFE0kIog, rec63oWEnOKmeIaFu

### "My Zoom link in my calendar has expired, how do I reconnect it?"
- Fix (from a Loom):
  1. Go to Settings > Profile (calendar/video conferencing integrations), find Zoom and click reconnect.
  2. On the Zoom page "You are about to add LeadConnector", click Allow.
  3. The status shows "Reconnection in progress" and then connects within minutes. The browser may prefill the Zoom login.
- Notes: the connection has no fixed expiry and usually lasts months. GHL sends a notification when it expires. Once connected, people who book through the calendar link get a Zoom link automatically.
- Evidence: recKTnF7Kf6TkoB2B

### "How do I see who clicked a link in my email?" / "Clicked link but not moved in pipeline"
- Symptoms: a contact clicked an email link and got the tag, but the opportunity did not move to the next pipeline stage. The user also wants to know who clicked a "Track Clicks" email.
- Handling: the agent asked whether it was a campaign or a workflow email and which automation changes the stage. Both chats moved to a call or an emailed Loom, so the fix is not shown in the chat (unverified).
- Evidence: recvCz6WQbNaf9I4C, recPWYBhHqad7u0mP, rec09yZ0EAuaxTt96

### "Contacts re-registering don't get the email again"
- Fix: in the workflow, open the workflow Settings and turn on **Allow re-entry** so the same contact can enter again. You can also re-run (replay) the step for a contact.
- Evidence: rec6AxMk6sabSCVEi

### "Remove one contact from a smart list without deleting the contact"
- Fix: given in a Loom (steps not written out). The agent first asked which filter built the smart list. In this case the list was created from a CSV import.
- Evidence: reciDJkHMWHLHNpSi

### "Can't create a community group"
- Root cause: an inactive group already used the same group URL/slug, and inactive groups were not visible to the user at first.
- Fix: change the group URL to a unique value, or reactivate the old group. Groups cannot be deleted, only made inactive. Try incognito mode or clear the cache first.
- Evidence: recjzGel0yad78l48

### Domains: "blog shows a 404" / "funnel, email and website domains don't match"
- Fix seen: the main domain had a redirect, so the agent added a subdomain (e.g. blogs.<domain>) just for blogs. The user then adds the DNS records at their domain provider (shown in a Zight video).
- The agent also said multi-level subdomains are "neither recommended nor do they work properly".
- The mismatched-domain case was finished on a call.
- Evidence: rec4OFs0k3EDgJigV, recRQ6FfzTE4ppqAl, recEd8IQtZui0tofQ

### "The invoice shows the client name twice"
- Root cause: the contact has both a Business Name and a person name filled in.
- Fix: remove the duplicate from the contact. The preview link shows the updated invoice; the invoice builder may still show old data.
- Address: change it under Settings > Business Info. The invoice must use the business address; a separate mailing address is not supported.
- Evidence: recN34AaiNcPCOpN3

### "Take payment without a credit card (PayPal / invoice)"
- Fix: send an invoice, or create a link under Payments > Payment Links and send that. PayPal works if it is connected.
- Evidence: recOnhv6k6PYRbyCt

### "Customise the automatic 'thank you for your purchase' email (e.g. for donations)"
- Fix:
  1. Create an email template.
  2. Build a workflow: trigger Form Submitted, then Send Email using that template.
- The default purchase email can be turned off, but that turns it off for every purchase in the account.
- Evidence: recTQEwFWa40Cf3k2

### "Personalise a newsletter with the contact's name"
- Fix: insert a contact first-name custom value in the email (shown in a Loom). The user confirmed it worked.
- Evidence: recNQo2rNXIFxeiGl

### QR code should collect name/email, not just open a PDF
- Fix: point the QR code at a form or quiz/survey. A workflow then adds the contact and emails the PDF. Get the PDF link from Media Storage, which only the account owner can access.
- Evidence: rece3pTZYFyTiUv8I, recRd7qvJFEMbVG5m

### Other one-offs solved in chat
- **Invite a staff member:** open the staff member and click "Verification Email" to resend; ask them to check spam (recTytDSb4AodEWBi).
- **Live session replay:** use "View recordings" or download the file (rec4raQ59AT7DaPTy).
- **Preview asks for a login:** browser cache; try incognito or clear the cache (recPluGJblCdhFh8I).
- **Media Storage:** it is under the Tools/Reporting area; folder uploads fail on large files (reclhrioi2BvgLZsm, recwKXzMfeiB7Je2R).
- **AI voice agent books with the old email/phone:** add an Update Contact action and a knowledge base instead of relying only on the prompt (recEUT6ru1MQDrWNi).

## [Sample B] Escalation and ticket patterns
- Video calls are the main escalation in this batch. The chat agent hands off to the "call team" or "video expert" on Google Meet and closes the chat. No tickets were raised here.
- When the queue is full, agents offer to keep helping in chat, send a booking link, or ask the user to come back later. Phrasing: "Your request has already been posted, but all of our agents are currently on calls. I'll connect you with the next available agent."
- When a user asks for "back office" or senior help on a long-running issue, the agent "checks with the team" and names the senior expert before sending the link.
- SMS restriction ("temporarily restricted from sending Bulk and WF messages"): the bot said the account reached its sending limit and that it usually unlocks after 24h at a higher limit. The case went to a call (rec2hfosUNsBY6IKi).
- Email stopped after setting up LeadConnector, plus a foreign phone number on the account: the domain showed "Action required - Connect". This went to a call and was not resolved in chat (recSutiT0Onq03Lvf).

## [Sample B] What went wrong in low-CSAT chats
No chat scored CSAT 1-2. Friction points:
- **reclhrioi2BvgLZsm (CSAT 4):** the call took about 45 min to arrange, and the in-chat hint about Media Storage first showed a screenshot the user couldn't find. Review asked for written instructions as well as the call.
- **recK2f2cSqvttcLzX:** the user was in the Meet and "no expert there yet", but the agent closed the chat anyway.
- **rec63oWEnOKmeIaFu:** the previous agent closed the chat before sending the link, so the user had to queue again.
- **reclHBIj66JnDoOak:** no coverage; the user was told to come back in 2 hours.
- **recPWYBhHqad7u0mP:** a 9-min queue, then 25 min of investigation with an outage. The user left with only an emailed Loom promised.
- **recSdBJ0ynoGmf3UM:** an urgent deadline and about 30 min to find a senior expert.
- **Loom-only answers:** several users came back because the Loom was "too quick" or didn't work. Ask before ending whether a call is needed (recQ8fYA59QBUmSDs, recKF3ApIiRuJQPhM).

## [Sample B] Good reply phrasing worth reusing
- "Please allow me a moment to check video meeting availability and arrange a call for you."
- "There is currently a high queue for video calls. Would you like me to help here in chat meanwhile, or share a booking link so you can pick a time?"
- "[Expert] clocks in at 1 PM PST. I can connect you with another senior expert right now. Shall I send the link?"
- "Here is the meeting link. Please let me know once you've joined so I can close this chat."
- "Since we've moved this to a live call, I'll close this chat now. The call team will continue helping you from here."
- "Let me record a quick Loom for you so you can follow it step by step."

## [Sample B] Facts/gotchas
- "Zoom" requests are fulfilled on Google Meet links (all chats).
- Mastermind has a "Mastermind - Zoom Request" button that sends "I want quick help on Zoom".
- Coverage gaps happen overnight; named experts work set shifts in PST (reclHBIj66JnDoOak, recSdBJ0ynoGmf3UM).
- The AI bot cannot see past chats or Looms; it says to type HUMAN (reczhDjDlizYsD3FW).
- Zoom integration tokens expire after months; reconnecting needs the user to click "Allow LeadConnector" (recKTnF7Kf6TkoB2B).
- Community groups cannot be deleted, only made inactive, and an inactive group still blocks its URL (recjzGel0yad78l48).
- Turning off the automatic purchase email affects every purchase in the account (recTQEwFWa40Cf3k2).
- Invoice address comes from Settings > Business Info; a separate mailing address is not supported (recN34AaiNcPCOpN3).
- Workflow re-entry is off by default; turn on "Allow re-entry" in workflow settings (rec6AxMk6sabSCVEi).
- New SMS accounts have ramping bulk/workflow limits that unlock after about 24h, per the bot (unverified) (rec2hfosUNsBY6IKi).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 2,854 chats. CSAT average 4.75 from 782 ratings (39 rated 1-2). First-contact resolved: 320. Agent mentioned an escalation or ticket in 1%; moved to a video call in 76%.
- What users ask about most: requests for a Zoom/Meet screen-share, often naming a specific video expert from an earlier chat.
- Dashboard paths agents gave most often: Number Listed In Settings > Company Tab > Company Phone Field (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- rec3U1sl1Cdonxb8u (2026-05-01): "Could you tell me how much are the calls per phone call or give me an overall cost of phones cost per minute?" Agent: Got it! [name] me just pull up your account so I can check this for you. 😊 | Unfortunately Ernessa you can find this in your account however when you make a call or send an SMS detailed transection will be in your account. Under settings> company billing> wallet transections.
- recOdRRXVA2oYFtMC (2026-09-08): "how do i get phone calls to route to my main business line" Agent: We can have call forwarding settings within the phone number you've purchased in the system. You can navigate to Settings > Phone System > click on the three dots next to the phone number > edit configuration and call forwarding > add your external phone number | [sent a Loom walkthrough]
- recYUQg86pVeCb6zC (2026-03-31): "how to make sure I receive all notifications and sounds my phone doesn not show me someone called me and I miss that" Agent: To ensure you never miss a call or notification, please check that the LeadConnector app has "Unrestricted" battery access and that all system-level notifications are set to "Persistent" in your phone's settings. Inside the app, navigate to Settings > Notifications to confirm that the "Ring on this  | Could you please confirm me the name of contact
- recJ3yb8XbMdJKsGP (2026-03-04): "Where I can't find where I can connect my Zoom account to my profile" Agent: You can find that by clicking into your Profile settings and looking for the Integrations tab. Once there, you'll see a dedicated Zoom button that allows you to authorize the connection for your meetings. | No worries at all! It can be easy to miss. To connect your Zoom account to your profile, go into your Settings, then select Calendars > Connect

#### What went wrong in low-rated chats (user reviews)
- recNFpSIJOmrA6IlI: "I disconnected her so did not solve my problem"
- recTN2Zeb1PDj8jhT: "Long wait, and no final videoconference, Need to reconnect in 2 hours to see if there is or not a posibility for a videocall. My funnel and sales page is not working as it should. Thanks"
- rec60peTsthKbhAzc: "lost connection while waiting"
- recdWwL24NT0bV61h: "I sat and waited for the last ten minutes and no one ever got on the call"
- recqMd3MhG14IF6kJ: "No support for the newly imported phone number.  The transition was a disaster.  Phone number rings to my personal phone and not in the Lead Connector.  Horrible system and no one to help fix the proc"
