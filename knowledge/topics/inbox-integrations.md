---
description: Proven fixes, escalation rules and reply phrasing for 'Conversations inbox, API, webhooks and Zapier' guest-support chats, distilled from Modal Chats (Airtable).
---
# Conversations inbox, API, webhooks and Zapier

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 197 chats fell in this topic; 75 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

Note: the source file already trims the middle of many chats, so some fixes are only partly visible.

## [Sample A] Recurring issues and proven fixes

### "Can I get my previous chat back?" / "I lost connection with the last agent"
- Symptoms: the visitor closed the support widget or switched tabs, the chat dropped or reset to the bot, and they need a Loom link or answer from it.
- Root cause: the widget session ends when the window closes. The bot cannot see past chats.
- Fix: 1) The bot says to type HUMAN. 2) The agent finds the past chat (asks for the agent's name or the date) and re-posts the Loom links or the answer. 3) If possible, transfer back to the same agent. 4) Remind the visitor that they can export a chat from the widget's three-dot menu (top right) > Export Conversation.
- Escalate? No.
- Evidence: recK9Jf5oAX7Mf8bn, recHJpRfJIpGMJRTp, recSJbB2Qyn8fKrHn, recvSrHPA81CgVXVI, recUQc0od1WV6Rk2Y

### "Conversation AI isn't replying" (widget, SMS or demo agent)
- Symptoms: test "Hi" gets no reply on the widget; the agent shows Off; nothing in Agent Logs; no reply after the user sent the first SMS by hand.
- Root causes: 1) The bot was not on Auto-pilot (it was in Suggestive or Off mode). 2) "Send bot to sleep when I send a: Manual Message" was ON, which puts the bot to sleep for 2 hours after any manual message. 3) The bot was not Primary or not linked to the widget/channel.
- Fix:
  1. AI Agents > Conversation AI > Agents List > select the bot > set its mode to Auto-pilot.
  2. In the bot's Timing & Pacing settings, turn OFF "Send bot to sleep when I send a Manual Message" if a person sends the first message.
  3. Check the bot is Primary and connected to the right Chat Widget (Sites > Chat Widget) or channel.
  4. Check AI Agents > Agent Logs for the contact.
- Escalate? Only if it still fails; agents moved to a Meet call (recijAcXRZly8VQC8).
- Evidence: reckhEnbc1ULZ21G4, recycrTeIb271r34B, recijAcXRZly8VQC8

### "Can't mark this conversation as read" / it is stuck in Unread
- Symptoms: an IG conversation stays unread for the whole team; clearing cache does not help.
- Root cause: the conversation is empty, so there is no message to mark as read.
- Fix: delete the conversation. This does NOT delete the contact.
- Escalate? No.
- Evidence: recGMZMUTtkAle1tA

### "Emails I send from Gmail don't show in Conversations" (2-way sync)
- Symptoms: the sync looks connected, but some email threads are missing in the CRM.
- Root cause: emails sent directly from synced Gmail only show if the auto CC/BCC address is added. Replies to system emails (for example form auto-emails) do show.
- Fix: 1) Check the user's 2-way sync status. 2) Tell the user to add the auto CC/BCC address shown under the synced email settings.
- Escalate? No.
- Evidence: recy4mHR44NCfGs30

### "My Google Workspace emails are going to the CRM, not Gmail"
- Bot steps: 1) Settings > Email Services > Reply & Forward Settings > remove the Reply Address. 2) Settings > My Profile > reconnect Google 2-Way Sync. 3) Check that MX records still point to Google. 4) Check Gmail forwarding rules, filters, Spam and All Mail.
- Outcome: still failing after the agent's Looms and a test email.
- Escalate? Yes. It was escalated and the agent said the team would follow up by email.
- Evidence: rec9cFpIU7DNGeusJ

### "How do I stop certain emails cluttering my Unread / block a sender?"
- Facts: Email DND only stops outgoing email. It does not notify the contact or bounce incoming email. There is no native block button.
- Fix: 1) Mark the threads as read. 2) Add a filter in the email provider. 3) The agent built a workflow that automatically deletes incoming emails from that sender (shared on Zight).
- Escalate? No.
- Evidence: rec2PwlxAIyFwFs3S

### "Where is the inbound webhook?" / "It says Premium"
- Fix: Automation > Workflows > create or open a workflow > trigger "Inbound Webhook" > save to get the URL > paste it into the sending app. For outbound data, use the Webhook action.
- Gotcha: Inbound Webhook is a premium workflow trigger. Even on the Pro plan, each run is billed. If it shows "service disabled", the agent had the user try another browser and then took it to a call.
- Escalate? Only if it stays disabled (it went to a call).
- Evidence: recT2r9krhzvQ0Aac, recaNHuDN5RHrkRrP, reclUD6G6papKERtF

### "Mapping Reference is empty / I can't save the inbound webhook trigger"
- Symptoms: ReqBin or another tool gets 200 "Success: test request received", but Fetch sample requests is empty, or the reference still shows an older payload. The error says "A Mapping Reference is required".
- Root causes: 1) The 200 only acknowledges receipt; no usable JSON was captured. 2) The URL came from another or newer trigger. 3) The test was not sent from the real third-party app. 4) A newer sample existed but was not selected.
- Fix:
  1. Open the trigger and copy the URL again.
  2. Send a POST with `Content-Type: application/json` and a JSON body with named fields.
  3. Click Fetch sample requests. Use the reference filter or dropdown in the trigger to pick the newest request. There may be no refresh icon (recgobYjBQ7gxSYJQ).
  4. Send the test from the actual third-party app or Zapier.
- Escalate? Two of these chats went to a Meet call. No ticket is visible.
- Evidence: recgobYjBQ7gxSYJQ, reclp1qd9b5MfnefH, recGcSF3mw9Xuhfiz

### "Where do I get my API key / token, and which scopes do I need?"
- Fix: Settings > Private Integrations > Create New Integration > select scopes > copy the token. The Location ID is under Business Info (Settings > Business Profile).
- For conversations APIs, `conversations/message.write` and `conversations/message.readonly` are the minimum. The bot advised against enabling all scopes, although one agent told a user to "select all" (recTYfxPr7aPRZkbi).
- Printify: the token goes in the Printify integration form, and Printify's own Personal Access Token is generated in the Printify account (recr0FaOaFNnZqw9N).
- Escalate? No.
- Evidence: recTYfxPr7aPRZkbi, recr0FaOaFNnZqw9N, recS82kmFn54AN4dB, recJKzNMlJ3tIvfeR

### "Private Integration token returns 403" / "API returns messageId but GET says not found"
- Symptoms: 403 on the token's own sub-account; 403 on the internal `/conversation-ai/generations` endpoint; POST /conversations/messages returns a messageId but GET returns 400.
- Bot checks: the token belongs to this sub-account; the needed scopes are present; same location, host and API version for POST and GET; `Authorization: Bearer`; save the 403 body and request ID; never paste the token.
- Escalate? Yes. These were escalated to the dev team, converted to an email ticket, or taken to a Meet call.
- Evidence: reckHWMT3zTtK4Ust, recLngwZctkVTZDkA, recjhXOJzdvKignaQ

### "Connect Claude / ChatGPT / MCP to my CRM"
- Fixes seen:
  1. Generate a Private Integration token and get the Location ID (Business Info).
  2. In Claude, go to Settings > Connectors and add the connection; it may ask for authorization.
  3. If the connector shows the wrong sub-accounts, reconnect using the MCP URL with https. Sign in, then select only the needed sub-account.
- The bot said there is no native Claude connector (recJKzNMlJ3tIvfeR); the agent pointed the user to Private Integrations. The exact MCP URL is trimmed in the source (unverified).
- Escalate? No.
- Evidence: reclZccOxnpCE5PaV, recjHbD5bKOltPDhy, recJKzNMlJ3tIvfeR, reccnZTGUaTLP6TV7

### "Zapier is pointing at the wrong / old account" or "Zapier webhook billing error"
- Wrong account: 1) In Zapier > My Apps, reconnect LeadConnector while logged into the correct white-label account (use incognito). 2) Reselect the connection in every Zap step. If the fields still come from a different business, raise a ticket and have the user also open a Zapier support ticket.
- "Billing of this Premium Action: Product config not found": this is on Zapier's side. Re-save Zapier billing or toggle the plan, and recreate the Webhooks step. Confirm to the user that the CRM supports inbound webhooks.
- Evidence: recjHuKQijmr5vBXi, reckkPgAbSYMuRIve, reck4xRYvucQtCkH0

### "Integration / app missing" (Integrations tab gone, Jobber app, X/Twitter)
- Integrations tab missing in all sub-accounts (only Private Integrations visible): the agent sent the user to the agency admin email. CSAT 1 (recvPAfNyIhhiUURf).
- Jobber app only available at agency level: escalated to the admin team, with a reply by email (recrNsN6BpPPhCW23).
- The X (Twitter) Social Planner integration was disabled on Dec 4, 2024 because of X's API costs. FB, IG, LinkedIn, GBP and TikTok still work (recS9okzhZPkUTrQb).
- Escalate? Yes, to the agency/admin team when it is a feature-access or provisioning issue.

### "Facebook won't accept my subdomain" / FB lead form connection
- Verify the root domain (not the subdomain) in Meta Business Suite; this covers subdomains (recK9Jf5oAX7Mf8bn).
- FB Lead Ads: Settings > Integrations > Facebook > map the form fields > Save. Agents will not submit test leads for the user (SOP) (recyWPBee6KXEEohI).

### "Custom values / merge fields not populating"
- Fixes seen:
  1. Re-insert the token with the Custom Value picker.
  2. Community/course fields only populate if the contact is actually a member or enrolled.
  3. To fix a snippet in a snapshot: update it in the source account, then Agency > Snapshots > Load updates to sub-accounts / Refresh.
  4. In SMS, the Google Meet link value is not offered in the picker; this was solved by testing the appointment workflow.
- Evidence: rec8N0AeSI5mu5lhu, recLrk3qdYKIEkYfI, recPzvbtXHmuBD7Xc, reci9WYMXMWNJAiPX

## [Sample A] Escalation and ticket patterns
- Escalated: API auth problems that only the backend can inspect (403 token/location binding, credential validation blocked by Cloudflare), email routing still failing after troubleshooting, missing apps or Integrations tab (admin team), and Zapier pulling the wrong account.
- Phrasing used: "We've escalated the concern to development team and will reach out to you via email as they require time to investigate, would that be okay?"; "I'll convert this chat into a ticket and share the updates with you via email"; "Here is your ticket number for reference: #…". The bot then emails an automatic ticket confirmation (recpPGhEVxKhNuGWM).
- Agents always confirm the email address before closing. No ETA is ever given.
- Very common alternative: offer a Google Meet "with our senior/expert" and close the chat once the user joins. Long video queue: give a wait estimate plus a booking link (recF5KnHVx6lI7trN).
- SOP: agents cannot join a user's Teams/Zoom link; they send their own Meet link instead (recS82kmFn54AN4dB).

## [Sample A] What went wrong in low-CSAT chats
- recEgJB4OqXguQZk1 (CSAT 1): The issue was a booking widget and Calendly confusion with no future appointments visible. The agent sent a Loom and a confusing explanation about the status ("shown" vs "confirmed"). The user said it "makes absolutely no sense". The agent never confirmed the real problem and closed the chat for inactivity.
- recHmlJycwGawOCl5 (CSAT 1): The issue was CRC API errors. The agent could not find an error in the screenshots and escalated with no diagnosis. The user expected "NO real fix". Better: identify the endpoint and error code first. A related chat (recvq1yxyM1Ok8BQE) found an old vs new endpoint migration and a 4405 error.
- recK07MeUCX1uuQwO (CSAT 1): The question was whether payments were set up. The agent asked for an extra PayPal setup, then said it was not needed; the user said "we're missing each other". Better: check Payments > Integrations and Live/Test mode once, clearly, and offer a call early.
- recvPAfNyIhhiUURf (CSAT 1): The Integrations tab was missing from all accounts. The agent redirected to the admin email after the user had already gone there ("I went there first"). The agent did not escalate on the user's behalf.
- CSAT 4 themes: the user wanted email follow-up instead of waiting in chat (recLngwZctkVTZDkA); a Meet link was promised but not posted for minutes (recjhXOJzdvKignaQ); a screenshot was "unreadable" twice before a call (reclp1qd9b5MfnefH); the fix was unverified at close (reci9WYMXMWNJAiPX).

## [Sample A] Good reply phrasing worth reusing
- "Deleting this conversation won't delete the contact profile."
- "Would you like me to turn this into a ticket and update you by email, so you don't have to wait here?"
- "May I have your permission to send a test appointment/email on your account to replicate this?"
- "A 200 'test request received' only confirms the URL was hit. Mapping needs a JSON body with named fields sent from your actual app."
- "Since this needs backend review, I've escalated it to our development team. Is this the best email to reach you?"

## [Sample A] Facts/gotchas
- Workflows must be published before testing; draft workflows don't send (rec7w52YZddSs1h3g).
- Manually adding contacts to a date-triggered workflow fires the first email immediately. Disable that action, add the contacts, then re-enable it (rec6tPYHEOW70fity).
- Chat widget notification emails go to the user/location email; no workflow is needed (recxjhF7HxFe76QtZ).
- Chat widget messages are not billed by SMS segments (recjlebfRJnjwIucd). WhatsApp $19.99/mo has no extra GHL per-message charge, per the agent (recAag7zdSvSmeEgS).
- No bulk export of conversation transcripts; copy them manually (recjrvcWea4YYFI1u).
- AI replies to FB/IG comments are not available; this is on the ideas board (reciJt9W67hETlEjG).
- Voice AI: Call.status "inactive" blocks the dial; Call.code and Call.message are diagnostic only (recf4TU0V2q8AjtYi).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

### Conversations inbox

- Volume: 683 chats. CSAT average 4.77 from 161 ratings (6 rated 1-2). First-contact resolved: 79. Agent mentioned an escalation or ticket in 10%; moved to a video call in 10%.
- What users ask about most: the chat widget (by far the most common), live chat, unread/team inbox, previous conversations.
- Dashboard paths agents gave most often: Sites > Chat Widget (5).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recPMyYhwJ0rH34oY (2026-09-26): "I'm looking at my emails and have read the ones in my inbox, but they are still showing as 'unread'. I read them ages ago and they are still in the 'unread' folder. How do I proper" Agent: You will need to select the contacts > Actions > Mark as read | To check the recent messages, you will need to check on the recent tab : And from the activity tab on the right side, you can see their recent activity and this tells us that "Steve" joined the newsletter this September. :
- recu7AfvOqydv0K2V (2025-08-14): "How do I respond to people through my chat widget from my site? It shows on my notifications but only gives an option to respond by SMS and Whatsapp??" Agent: As I have checked the settings on my end, you need to create a new chat widget or edit the exsisting one with live chat settings. | Navigate to Sites > Chat Widget Click New where you can choose one of the following: All-in-one chat, SMS / Email chat, Live chat, WhatsApp Select Live Chat Customize your widget to fit your brand Click Save
- rec54Bk3tgH0F4jJD (2026-01-16): "I set up a chat bot for the Atlas Dermatology subaccount but it had to be taken down because it was answering incorrectly and had voice calling and social media. I just want the ch" Agent: Awesome! [name] adding it to the website, make sure you've set up the Chat Widget correctly by going to Sites > Chat Widget. Double-check that it's enabled in your website or funnel settings so it works smoothly. | Sure! [name] can attach the same knowledge base to multiple bots, including those used for social media and your website. Each bot will
- rec1CcC7kWXBVlBP4 (2025-08-29): "How do I add a chat widget to a website?" Agent: Hi [name], I have enabled the Chat Widget for your account. You can start setting it up on Sites > Chat Widget | Can you try to reload the page

#### What went wrong in low-rated chats (user reviews)
- recUeoXWnxmsNYGWV: "Talha B was very polite and positive. However, she was extremely limited in her understanding of the Mastermind Business System. She also needs a way to escalate the issue/request. Her solution was to"

### Integrations api

- Volume: 1,124 chats. CSAT average 4.58 from 227 ratings (18 rated 1-2). First-contact resolved: 130. Agent mentioned an escalation or ticket in 8%; moved to a video call in 12%.
- What users ask about most: finding or generating API keys and private integrations, inbound/custom webhooks, Zapier and Make connections.
- Dashboard paths agents gave most often: Settings > Private Integrations (10); Settings > Integrations (8); Settings > Private Integration (8); Automation > Workflows (7); Payments > Products (3); Settings > My Staff (3); Sign In > Pick Location > Approve (2); Settings > Business Profile (2); Sites > Funnels (2); Payments > Coupons (2); Settings & Privacy > Settings (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recB9nQzbpYSyKRA8 (2026-07-27): "Hi team, I need the API Token and Webhook/API Documentation for the Lead module. We are planning to integrate the Lead module with an external service. Kindly share the required AP" Agent: Hey [name], so I just wanted to update you that the system no longer supports the API tokens, you can create private integration instead. Head over to Settings > Private integrations and create one. 😊 | [sent a Loom walkthrough]
- recD1WfJSAfoxfP6v (2026-06-05): "I would like to confirm that Can SalesProcess™ send lead data directly to Respond.io via API not using webhook?" Agent: Zhi, you can create an API inside the salesporcess. Go to Settings> Private integration and create an API. let me show you. | Yes, it depends on your set up with the 3rd party software (Respond.io), here you can only create API key via private integration.
- recYds8AO8u1gROyO (2026-04-24): "Adding zoom to book calls. GG says it is under integrations but I am not seeing it." Agent: For you to be able to use Zoom meetings for your calendars, you will need to connect your own Zoom account under Settigs > My Profile. Scroll down and you will see Video Conferencing tab. Right where you're connecting your calendar. | You can definitely reach out to our support team for the tech questions and just use GG if your questions are seeki
- recrzPuDz4KSEpkTy (2026-02-03): "I want to know how to obtain my API key" Agent: What you can do is you have to add a staff in your account and you can grant access to your staff. | To add a staff member and grant them access in GrowthHub365, head to Settings > My Staff . Click on "+ Add Employee," fill in their details, and set permissions based on their role. This will help you manage what they can and cannot access.
- recFg4uXKPHTsge0C (2026-01-26): "Hi, Is it possible to enable IAM (Identity and Access Management) on our NurturePro account? We need controlled access and permission management for integrations. Please advise." Agent: You need to go to Settings > Private Integration. From there, you can create the platform using API keys. This is currently the only way to connect the platform via API keys. | You need to go to Settings > Private Integration. From there, you can connect the platform using API keys. This is currently the only way to connect the platform via API key
- recrFHGfuduNk3WOL (2026-04-27): "Where do I find my GHL api key?" Agent: Hello [name], hope you're well | Janet, you will need to navigate to settings > Private Integaration to generate the API key.

#### What went wrong in low-rated chats (user reviews)
- recNapUsc5DbdYtvF: "Your help was great. I'd rather have a comprehensive ref manual for using the web builder though.. I just learn more and faster that way :)"
- recXTwgsLdC1qYLfc: "Tarun's tone and communication were fine, but my question wasn't able to be answered."
- rec3TIHaPlcchzET4: "problem not solved. takes too long during communications with reps while not allowing me some time as well."
