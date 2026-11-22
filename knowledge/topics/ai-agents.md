---
description: Proven fixes, escalation rules and reply phrasing for 'AI agents, Conversation AI, Voice AI and knowledge bases' guest-support chats, distilled from Modal Chats (Airtable).
---
# AI agents, Conversation AI, Voice AI and knowledge bases

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 142 chats fell in this topic; 60 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "Turn off the AI bot, it's replying to everyone / to my inbox"
- Symptoms: bot message appears on every conversation; "on autopilot"; can't find control on mobile app; AI answering emails.
- Root cause: Conversation AI bot active/Primary on all channels (incl. Email); mobile app lacks full bot controls.
- Fix: 1) AI Agents > Conversation AI > Agents List > bot > Edit > Bot Settings > status Inactive. 2) Three dots > remove "Set as Primary". 3) To stop only email replies: in the agent's channel settings toggle the Email channel off. 4) Per contact: Conversations > contact > bot status icon > Inactive. 5) Bulk: workflow action "Update Conversation AI Bot and Status" = Inactive. 6) On mobile, agent can disable from account directly. Loom recommended.
- Escalate? No.
- Evidence: recUNzxY2b3pKWls2, recrdgxVB8N6Mi4OZ, recXOMuqLD09fdR6y

### "Bot should only talk to leads, not customers"
- Fix (agent built it): 1) Workflow trigger on contact type changed to Customer > add tag "customer" > remove from all workflows. 2) Bot instructions/conditions: do not respond to contacts with Customer tag (or workflow "Update Conversation AI Bot and Status" = Inactive). Agent noted DFY is not standard but did it.
- Escalate? No. Evidence: recY4OXg6WPXdki2a

### "Failed to create knowledge base" / KB not loading
- Symptoms: AI Agents > Knowledge Base > + Create fails even after incognito/cache clear; KB page won't load though feature access exists.
- Root cause: backend issue on the location (not user error).
- Fix: agent verified permissions, then fixed "from the backend"; user retried and it worked. Tell user "You weren't at fault; it was a backend issue."
- Escalate? Internal backend fix by agent; no ticket needed.
- Evidence: recwqs2EUuXot5Tr3, recOhhg8pXYgoOOsK

### "Can't find my knowledge base files" (rich text) / how to edit KB
- Bot: AI Agents > Knowledge Base > select KB > Files; rich text may not be supported, convert to PDF/DOCX/TXT and re-upload (unverified). Agent moved to video call.
- Evidence: recEtqXCf3rJdMUh8, recpsne6tjRc3x74z (low CSAT, see below)

### "Bot works in Test but not live" / "bot not responding to new chats"
- Root causes seen: "Test your bot" is a sandbox (no contacts created, fields not written); live channel/Primary/settings issues; wait-time too short; booking link domain blocked.
- Fix: 1) Explain Test Your Bot is simulated; go live and verify field under Contacts. 2) Checklist: Agents List > Set as Primary; Bot Settings: active, correct channel, "Send bot to sleep when I send a message manually" off, contact bot status not Inactive; Bot Training has KB; AI Agents > Agent Logs filtered by bot/date; contact not DND. 3) Check wait time before responding. 4) If bot not sending booking link, agent updated link in bot config and asked user to retest on site. 5) Often moved to Google Meet.
- Escalate? Only if logs show errors; otherwise call.
- Evidence: rechKkUy3aGcAgi1Q, rec2J787SmEfi8toA, recoHqXrPdzBCGSM4, recEDPhYk2HVQ21Yx, rece4OSLOiMeeutSo

### "Bot keeps handing off / asking for DOB instead of answering"
- Fix: AI Agents > Conversation AI > Agents List > bot > Bot Goals / Additional Instructions: remove handoff or DOB wording; add FAQs/KB in Bot Training; check transfer settings; also check workflows/forms for the field. Escalated to call/Loom when not resolved.
- Evidence: recBKuaDX0GAwSrPx, recdHC3FvOt6V6U7y

### "Voice AI says no available times" / appointment booking stopped
- Fix (bot checklist): Voice AI > Agent List > agent > Build > Actions > Appointment Booking: correct calendar; Calendars > Calendar Settings: published, staff assigned, weekly hours, date overrides, booking window, timezone, external calendar conflicts; test via agent > Phone Call; check Voice AI > Dashboard & Logs. Calendly wanted -> video call. Agent test-booked successfully, asked user to reconfigure; resolved after user tweaks.
- Evidence: recwknAi9bncizO0M, rec1IsnJe3TOt0z5r

### "Can't assign phone number to Voice AI agent" (grayed out / "Attached to IVR")
- Fix: Edit Voice AI agent > Deploy > Numbers & number pool > select number (number routing switches automatically). For "use as backup": set hours to all, call routing "Use as backup" (rings 2-3 then AI picks up) or "Answer directly".
- Stale "Attached to IVR" with no IVR = known bug; agent reproduced and escalated to backend team via email.
- Escalate? Yes for stale IVR association. Evidence: recDdjdVisMSsaTyA, recK08ThsJBJHtzbP

### "Can't buy a phone number" ("does not have twilio account" / "Error in purchasing number / Unknown error")
- Root cause: phone system not provisioned for sub-account; or stuck purchase needing backend cleanup tool.
- Fix: agent enabled phone feature from backend / backend team ran cleanup; then user purchases and completes A2P registration.
- Escalate? Backend (internal, resolved in-chat). Evidence: recDkqjtiCdTWfi5s, recfiQZS0cgoIezIe

### "Error while creating trial outbound call" / Voice AI test call
- Bot: AI Agents > Voice AI > Enable Outbound Calls; agent Outbound Settings: caller ID, +1 number, verified caller ID under Settings > Phone Numbers. Then video call. Voice too rushed: agent settings > additional options > speaking speed. Post-call text not sent: workflow attached to agent was incomplete; fix the named automation in Automation search.
- Evidence: rec1qjVnKSi5BZ1JA, recppFioQYLlmte84

### "Website chat widget only lets me pick Voice AI" / Voice vs Conversation AI
- Fix: AI Agents > Conversation AI > bot > Deploy tab > enable Chat Widget > Assign Channel > select widget. Voice AI widget: Sites > Chat Widget > New > Voice AI > Get Code (WebRTC, no phone charges; click required, no wake word). Conversation AI needs SMS-capable number for SMS; same number can serve Voice AI (calls) and Conversation AI (SMS). Widget "Chat via SMS" needs a number (Settings > Phone Numbers) or relabel to email only.
- Evidence: recc6XE6jjbXEb9UR, recgcZ6hmmxOuh0E9, rec0TGVtunjpikbKE, recCFaKq2QBiRA7bi

### "Connect ChatGPT / Claude / external AI (Base44) to the CRM"
- Root cause: no native integration; "reach out to agency admin" on LC GPT Connector install = permission issue.
- Fix: Settings > Private Integrations > create integration with scopes (contacts, opportunities, social planner, webhooks) > paste token in external tool (never share token in chat). If install disabled, agent escalated access to backend team by email.
- Escalate? Yes if marketplace install is blocked by access. Evidence: recuSLtVw3gglj4Qy, rec2bynvLRWDXSctv, rect19bRCAmUv21w2, recXQejXdllgUv9dX, recCLQiBg67iX2AJk

### "Invoke AI Agent workflow dropdown doesn't show my agent"
- Agent answer: Agent Studio > open agent > trigger set to Workflows > promote to Production. User confused (screen was in Conversation AI); unresolved, CSAT 1.
- Evidence: recyKOELCUDZ4DSIo

### "Move AI Studio site/funnel into Sites > Funnels"
- Fact: AI Studio and Sites/Funnels are separate; cannot move. Workaround: prompt AI Studio for full page code, paste into a Custom Code element in a funnel; then add subdomain (agent did it, Loom). AI Studio 404 resolved by re-prompting (glitch).
- Evidence: recOVpIHP6xpxLlJc, recfM5pQWULWM1XYN, reckinonzZj2cUuzT

### "Add Contact Info action / did the bot save the field?"
- Add Contact Info is the right action for standard/custom fields; prompt tells bot when to ask; use Book Appointment action for booking. Verify in Contacts (live only).
- Evidence: recGJgxvsnD6Lh555, rechKkUy3aGcAgi1Q

### Custom ElevenLabs voice / AI agent media tool returns 0 files
- Both escalated to dev with ticket ID by email after long troubleshooting.
- Evidence: recWPiTUlvEEcDknw, recXabnP8zUv0mQtP

## [Sample A] Escalation and ticket patterns
- Backend-fixable in chat: KB create failure, phone provisioning, number purchase cleanup (recOhhg8pXYgoOOsK, recDkqjtiCdTWfi5s, recfiQZS0cgoIezIe).
- Dev ticket: API/runtime bugs, custom voices, stale IVR (recXabnP8zUv0mQtP, recWPiTUlvEEcDknw, recK08ThsJBJHtzbP). Phrasing: "this requires a deeper investigation beyond my current support level, escalating to next level... reference number... dev team will coordinate via email." When asked "when?": "I don't have a confirmed response time yet, the team will follow up through the ticket."
- Admin team: account transfer to other agency (relationship number; up to ~1 week; phone numbers, FB/IG, Google/Zoom calendars, domains, Stripe don't transfer) (recttxKB5L1jEI6yj); community/bot access (recElGONdeG11Yo3j); billing/pricing/sub-account limits -> billing email (recss0GRo9z7s1J9b, rect19bRCAmUv21w2).
- A2P team for 800/toll-free number issues (recbxY938invIdDql).
- HIPAA/BAA questions: user wanted written answers; agent promised email (recYENjOuLyIIFQOe).
- Many complex setups moved to Google Meet call and chat closed.

## [Sample A] What went wrong in low-CSAT chats
- recyKOELCUDZ4DSIo (1): 14+ min wait; agent gave instructions mismatched to user's screen (Agent Studio vs Conversation AI) and never resolved; no Loom/call offered. Review: "almost always no one is around."
- recoHdbimO37fUfR8 (1): ~45 min wait after HUMAN; 2-week-old ticket; agent closed for no response after 15 min. Review asked for text/email when agent is free.
- recpsne6tjRc3x74z (1): simple "how to edit KB" question; repeated "give me a moment" for 15 min, no answer; user left.
- recK08ThsJBJHtzbP (1): told "known issue", escalated, closed immediately without ETA, ticket number, or workaround.
- recWPiTUlvEEcDknw (2): ~1 hr troubleshooting then escalation with no ETA; issue unresolved.
- recKe1hHd3Cz1rGm0 (5 but complaint): a previous agent edited the customer's Voice AI prompt without permission (cut ~90%). Never change a customer's prompt without consent; save a copy first.
- recppFioQYLlmte84 (4): user dropped; agent closed and emailed follow-up.

## [Sample A] Good reply phrasing worth reusing
- "You weren't at fault; this was a backend issue that has now been resolved."
- "I'm able to replicate the issue on my end. Let me check this further."
- "Please don't share the token in chat; paste it directly in the integration setup."
- "I'll close this chat here, but the issue is not being dropped."
- "Since you've already tried the basic troubleshooting, I'm escalating this to our dev team; here is your reference number and they will follow up by email."
- "Would you like a quick Loom showing exactly where this is?"

## [Sample A] Facts/gotchas
- Test Your Bot is a sandbox; no contact created, fields not saved (rechKkUy3aGcAgi1Q).
- Bot cannot read screenshots; users get frustrated (recIy2z69VHozBUit, recuSLtVw3gglj4Qy).
- AI Agents menu missing = role permission: Settings > My Staff > Roles & Permissions (recUwTlh9kAGSbmhG).
- Voice AI multilingual: Voice AI > agent > Build > Transcription & Speech > add languages; prompt to detect and switch (bot answer, unverified) (rec0TGVtunjpikbKE).
- Call DND: status inactive with message/code present was described by agent as a restriction (recLmteGnZisJSFiH, unverified).
- AI Studio has no daily time limit; token-based (reckinonzZj2cUuzT). Wallet balance charge is not a fee for creating an agent; check Settings > Billing for auto-recharge (rece4OSLOiMeeutSo).
- WhatsApp template category can't be changed; Meta rejects link/token reminders as Marketing, resubmit as Utility (recs6txy9JIRKzvJs).
- Affiliate links: Marketing > Affiliate Manager > create campaign (rec2nKB89HHXxgGJm). Bot Protection tile goes in survey body above submit.
- Social Planner has built-in AI content and scheduling; Ads stats via Settings > Integrations (rec2hGaquTKBgMgHH).
- Quiz/form input text color: Styles; input font size not changeable (recIy2z69VHozBUit).
- Funnel builder mobile editing: select only mobile device icon, deselect others (rec6APiAR0ytHxPwQ).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 2,571 chats. CSAT average 4.7 from 735 ratings (38 rated 1-2). First-contact resolved: 302. Agent mentioned an escalation or ticket in 10%; moved to a video call in 14%.
- What users ask about most: Voice AI agents, AI Studio and Agent Studio (new in 2026), turning the Conversation AI bot on/off, knowledge bases, AI employee access.
- Dashboard paths agents gave most often: Settings > Conversation Ai (6); Sites > Chat Widget (4); Automation > Workflows (3); Settings > Ai Agents (3); Settings > Voice Ai Agents (3); Settings > Phone Numbers (3); Settings > Knowledge Base (3); Ai Agents > Conversation Ai (2); Ai Agents > Voice Ai (2); Contact > Custom Fields (2); Settings > Labs > Ai Studio (2); Modal > Settings > And Change (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recY2TgUZGIYh4YFv (2026-07-31): "Hello [name], I cannot connect the my other form from AI studio to my automations workflows. I just did one but the other is not showing" Agent: Currently you will see them under forms > submissions > external forms. | Yes it is showing up in the submission i did a test run as well.
- rec8Te1tYF88fTBEl (2026-05-28): "Can the voice AI pull information for a faceook page? Also, the voice AI is scrabbling words when it is talking. What can you do to fix that?" Agent: Okay [name]! I have added those pages to the knoledge base of the bot, when asking for them, we need to specify the name for the bot to give out all the details | AI Agents > Knowledge Base > Sybil Hale > Here you can use Web crawler to add a website you want the bot to have context of!
- recxCKzwX74ARcqqr (2026-05-18): "Hello, need help with my Conersation AI bot" Agent: I did some updates to the settings | Thank you for waiting. As of the moment, there are is not a built in means to set working hours for explicitly conversation ai bots as an inbound system message would be considered consent. You can however use workflows to accomplish this with a reply trigger > if/else with branching logic based on
- rechRDX2cI8DrYIS0 (2026-05-13): "can I make the transcript from conversation AI sent to admin user emails?" Agent: Got it, we might have to delete the embed code and add it back under Sites > Chat Widget, make sure to get the new code, and go back into the website to delete the old embed code and replace it with this one to resync it entirely | Yes thats correct, that should fix the issue, you can always reach out if you have any problems😊
- recX0qsrKv3I0i09k (2026-05-09): "now that I have connected a subdomain to my ai studio page, can I connect the subdomain to our affiliate program? For example, I was told that I can't connect the ai studio pages t" Agent: For that, you need to go to Payments > Integrations. | Click the manage button at the right side of Stripe and click Manage Payment Methods.
- recynW04b2dZaqJ4d (2026-05-02): "Is it possible to use conversation ai to book appointments in my funnel if I used ai studio to create the funnel?" Agent: To set up Conversation AI to book appointments for a funnel you created in AI Studio within GrowthHub365 , follow this process: 1. Enable Appointment Booking Mode First, you need to tell the AI that its primary "mission" is to secure a spot on your schedule. Go to Settings > Conversation AI . Select | Yes, you can absolutely trigger the workflow by
- rec5YJPQrbkj1XEfF (2026-04-30): "My number is being rejected. Why?" Agent: Click on the link and see the video i have created for you | Click on AI Agent's > Voice AI > Agent list > Click on your agent
- rectOCPTyFwR5VVpr (2026-04-01): "Ask AI Tab missing for admin user. Could you check" Agent: they can click in Reputiation > Settings > Upgrade to unlimited AI Employee | it should be on both the agency will get charged for this add on feature and if you are rebilling for it it should also charge the subaccount
- recZOX0AmLkmDy5pp (2026-02-18): "How do I enable microphone access to make web call with voice AI" Agent: Fixed the calendar, You have slots now in your calendar. | It was just simple. When you go in the Calendars > Edit > Member was not assigned. So i just assigned you as a member and now your slots are showing up.
- recHUm5JMPF02EkZp (2026-02-14): "I have replied with my Account SID and Auth Token to the below email but have not received any response. Can you help? #[phone]: CallbackCRM Submitted 10 February In progress Resol" Agent: Hi CheeChong, I just had a look and seems like it's been 3 days since you got the reply. I am re-escalation it on my end so it can be done for you over the weekend. Thank you so much for your understanding and patience. | If you already have your number purchased in the twillio you will see it in settings > phone system once it is connected. There
- recpCz4J6dIxUFCvY (2026-01-30): "I need assistance with account setup. Please" Agent: It is currently activated, as you can see under Settings > Integrations. | Sure thing! I’m creating a quick Loom video for you to walk you through the process step by step. I’ll make sure everything is clear and easy to follow. Stay tuned!
- rec90WxlfSXQjrfHt (2025-10-14): "Is there a way to turn off the AI auto response during certain hours and have them turn on at the end of the day?" Agent: Yes, that's correct. You can also apply the same steps in conversational AI as well | ou just need to go to Voice AI > Agent, toggle 'Set Working Hours,' and it will only function during the scheduled times.
- recRzOIKPIjVSPyIR (2025-10-01): "I am trying to set up Voice AI, and I am unable to stop the Phone Number from forwarding to my business number. I have checked everything I can see, but it will not allow the funne" Agent: Go to Voice Ai>Agent list > edit bot> | From what you shared, it seems like the phone may still be connecting through a default setup. You might want to check for any workflows or settings that might still have your office number linked in the system, even accidentally.
- reciCEf2qkPO2CX4o (2025-09-08): "we previously created questions/answers for our chatbot for Skytonacademy.com and its not giving the responses. These questions were created before migration and it was working, no" Agent: You can access FAQs via AI agents > Knowledge base > FAQs. You can click on the title of the FAQs to edit it. | Or click on this link to access it.

#### What went wrong in low-rated chats (user reviews)
- recx1V3zPsxQ5gNva: "I spent 20 mins with mostly silence in a chat room only to find out they can't help me and they're sending it to the admin team."
- recWPiTUlvEEcDknw: "Hamna was fine but the issue is still not resolved.  Very frustrating"
- recyKOELCUDZ4DSIo: "Almost always no one is around"
- recK08ThsJBJHtzbP: "Agent who was helping me ended with only telling me it was a known issue bit no real clear direction on how to proceed."
- rec8ZpJjYMuw8bFwb: "I didn't get any help and was sent to make an appointment for the next available which is almost a week from now unless I want to get up at 2am my time"
