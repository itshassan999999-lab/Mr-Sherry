---
description: Proven fixes, escalation rules and reply phrasing for 'SMS, A2P 10DLC and phone numbers' guest-support chats, distilled from Modal Chats (Airtable).
---
# SMS, A2P 10DLC and phone numbers

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 1023 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->
Note: about a third of the chats in this batch are off-topic (funnels, calendars, video-call requests). The notes below cover the phone, SMS and A2P chats.

## [Sample A] Recurring issues and proven fixes

### "It says my phone system requires configuration" / "I can't buy a number"
- Symptoms: banner "phone system requires configuration"; clicking Phone System Settings sends the user back to the dashboard; or "Error in purchasing number — You don't have the required permissions" even after Persona ID verification passed.
- Root cause: access or permission settings on the account (backend), not a user mistake.
- Fix: 1) Bot first-line check: Settings > Phone Numbers > Phone Numbers > three dots > Edit Configuration; for countries that need it, Settings > Phone Numbers > Regulatory Bundles. 2) If that fails, the agent opens the account, fixes the configuration/access permissions from the backend, and asks the user to refresh. 3) Send a screenshot so the user can check it.
- Escalate? Yes, when the purchase permission is missing: ticket to the admin team, who reply by email. Agent said it is a one-time permission fix.
- Evidence: recKoTH1pmbIrGyqV, recO91boY2EtR3FdL, recV8oMhk4cEJU8oM

### "I want to keep / port my existing business number"
- Symptoms: user wants an existing carrier, Google Voice or Twilio (old CRM) number for SMS, calls or Voice AI.
- Fix: 1) Give two options: Port-in (full SMS, inbound and outbound) or Verified Caller ID (outbound caller ID only; no inbound routing and no SMS). 2) For a port, collect: location, business name, service address (not a PO box), numbers to port, number type (wireless/landline/toll-free), wireless account number and PIN (or last 4 of SSN), current provider, a PDF of a bill from the last 30 days (max 4MB; name, address and number must match), and the signed LOA (agency's LOA form). 3) Google Voice: unlock the number and generate a port PIN in Google Voice settings. 4) Keep the old carrier account active until the port completes. 5) Agent submits the port; updates go by email.
- Bot path (in-app port, unverified whether it exists on every agency): Settings > Phone Numbers > + Add Number > Port-In Numbers.
- Escalate? Yes. Agents submit or escalate the port; the user gets "completed within a day / we'll email you". The port itself takes 2-4 weeks.
- Evidence: recbfQpClTRtltMty, recoS5argRgXr3rMX, recNBdtQlEtSAvKbd, recLzR88YWm8sfwqX, recGLaIfUP3amApld

### "Verizon/carrier needs the account number to port OUT"
- Root cause: the carrier rejects the Account SID because it wants a numeric account number.
- Fix seen (late in the chat): agent gave the agency number (format 0-xxx-xxx) and the account/location ID. Not confirmed that the carrier accepted these.
- Escalate? Possibly, for the carrier CSR details (unverified).
- Evidence: recECbcHhW4J6SK7z (CSAT 1)

### "Calls ring on my computer but not my cell" / "the app doesn't ring"
- Fix A (forward to cell, rec74R2w6Sf378fwA): 1) Settings > Phone Numbers > number > Edit Configuration. 2) Set the forwarding number as 1st priority. 3) In the Advanced Settings tab, turn OFF "Ring Web App / Mobile App". 4) Save, refresh, test.
- Fix B (ring in the LeadConnector app, recOMdTBItW5IHHM9): 1) Settings > My Staff > edit user > Call & Voicemail Settings. 2) Clear the Forward Calls To field; any number there bypasses the app. 3) Confirm a User Phone Number is selected for outbound. 4) Test with the app dialer. With Voice AI, check that the agent has a Call Transfer action to the user.
- "Not authorized" when saving a cell number on the staff profile: moved to a video call (recAACBOWROdfEwrf).
- Escalate? No.
- Evidence: rec74R2w6Sf378fwA, recOMdTBItW5IHHM9, recAACBOWROdfEwrf

### "Outbound calls hang up after a few rings before voicemail"
- Fix: 1) Find the Outgoing Call Timeout setting on the number (it had been raised from 20 to 30 s). 2) Raise it to 40 s. 3) Test again. The call then reached voicemail. The bot suggested checking SIP codes in Reporting > Call Reporting (408/480/487 = timeout/no answer).
- Evidence: recFEEdoOxZqL1WGj

### "Messages aren't sending" (workflow SMS and manual SMS both fail)
- Root causes seen: backend issue (escalated); a WhatsApp connector forcing all messages through WhatsApp after Meta restricted the account; the generic error "Unable to send message, please contact support!" (agent sent this to billing).
- Bot checklist: Settings > Phone Numbers (number in the location, default outbound), Settings > Billing > Wallet & Transactions, contact DND off, number in international format, Settings > Phone Numbers > Trust Center (A2P status), workflow execution logs.
- Escalate? Yes, to the backend team with a ticket number and "within 24 hours, by email".
- Evidence: rec1kvhONPgJ93rkD, recRRAuKcS8cTPMYD, recboMsGzi4JSgS6o

### SMS error codes 30003 / 12300 and image SMS failing
- 30003: recipient unreachable (phone off or out of coverage); usually temporary, retry later.
- 12300: invalid content type (image MMS).
- Image in a drip or bulk SMS gives a "try again" error: an image from the media library goes out as a link. Fix: attach the file directly from the computer in the bulk action. Dev team tested it.
- Evidence: rec7LvUaCdMsZtFQJ, recgweFEdf30OVSTB, recoHujVmCo3e0g4a

### "My A2P campaign was rejected" / "I need help with A2P"
- Codes seen: 30896, 30908, 30882. 30882 means not eligible for resubmission and needs an appeal. Bot said: do not create a new campaign; appeal with the campaign ID and screenshots.
- Sole proprietor locked into the "has a tax ID" path (asks for CP-575): the brand phone must be an active US/CA wireless mobile number. Agent moved this to a screen share (rec8heF49HEaqMv7W).
- On some agencies a dedicated team applies A2P: agent opens an internal ticket (recxBHih8qBPN43VN).
- Fix: 1) Get the error list and screenshots. 2) Raise a ticket to the admin team for the appeal; they contact the user by email. 3) For a new registration, walk through it live. Do not just paste the generic guide.
- Escalate? Yes, for appeals, locked forms and team-applied A2P.
- Evidence: recQHeMlRvxpsy0k3, rec8heF49HEaqMv7W, recxBHih8qBPN43VN, recO4Yo3fKJne54Er

### "SMS sending limit is locked"
- Fix: the agent raised the limit from the account to the requested 300/day and sent a screenshot. Bot path: Settings > Phone System > Messaging, daily limit slider (up to 20,000; needs a card on file).
- Evidence: recKJEbd5Scfduo8V

### "How do I text all my patients/customers?"
- Fix: Contacts > Smart Lists > filter and select > bulk Send SMS > pick the from-number > send now or schedule. Use Drip Mode for large lists. Exclude DND/opted-out contacts.
- For event sign-ups: build a workflow (form-submitted trigger + Send SMS). Add existing contacts via Contacts > filter by tag > Trigger Automation.
- Evidence: rec4QDWXtt6vigHHC, recC2LTedGjqJll5l

### "Put the assigned broker's name and number in the text"
- Fix: in Send SMS, open Custom Values > User > Full Name / Phone (the contact must be assigned). Opportunity Owner values appear only when the workflow uses an Opportunity trigger (system limitation). Snippets with user custom values work for manual sends.
- Evidence: receSNts8YkhON5Hg

### "Dialer calls out with someone else's number"
- Explanation given: the web dialer dropdown keeps the last-used or default number unless changed before dialing. Also check the caller ID set on the workflow, manual-call action or number pool. Root cause was never confirmed; the user left unhappy.
- Evidence: rec4TJWg2Am6ReVuO (CSAT 1)

### "Calls / Power Dialer hang, no error" or "message box missing"
- Resolved as a temporary browser issue: hard refresh (Ctrl/Cmd+Shift+R), clear the site's cache, use an incognito window. If it recurs daily, escalate instead of blaming the cache.
- Evidence: recp1HahIiuKt2l45, recCy19icFm83hbQg

### "Missed call text back sent 10+ minutes late"
- Known platform issue with Missed Call Text Back timing (bot). Check the IVR workflow execution logs and wait step. Check for a duplicate native MCTB under Settings > Phone Numbers > Voice > Voicemail & Missed Call Text Back.
- Evidence: rec1Z0kzzr9nlXDR0

### Voice AI outbound calling, transfers and dispositions
- Outbound Voice AI was confirmed enabled; rate quoted: $0.021/min (recWeIBExZEcbm9NP).
- Real (non-test) calls: Workflow with the Manual Action To Call action and the Voice AI agent > add contacts > Conversations > Manual Actions > Let's Start (bot, reco82ADM4et6Zks7).
- Transfer loops, the user ring order (AI > user > user) and custom dispositions not saving for one user were all moved to video call or Loom (recG9210iUSMdFWGx, reck9NqoklUzu6h7u, receY4J8YP99gcSpg).

### "Transfer my sub-account and number to another agency"
- Fix: ask for the receiving agency's relationship number and the user's email. Escalate to the admin team, who email the user and agree timing before moving anything.
- Evidence: reccOKi1C3rE9vLOr

## [Sample A] Escalation and ticket patterns
- What gets escalated: purchase permission errors, A2P appeals and team-applied A2P, port-ins, SMS failing at the backend, connector routing bugs, and agency transfers.
- What agents say: "I've escalated this to the admin team and they will reach you via email." They give a "ticket number" (#...) and "within 24 hours" (rec1kvhONPgJ93rkD, recV8oMhk4cEJU8oM, recQHeMlRvxpsy0k3), or "completed within a day, we'll update you by email" (recLzR88YWm8sfwqX).
- Complex or unclear phone issues are often moved to a Google Meet with a senior agent. Loom videos are used for how-to answers.
- Billing items are sent to the agency billing email (recboMsGzi4JSgS6o, recp1HahIiuKt2l45).

## [Sample A] What went wrong in low-CSAT chats
- recECbcHhW4J6SK7z (1): the agency owner asked for port-out account details. The bot and agent repeated "find the number in Settings", and the IDs came only after the user had solved it alone. The client had also been given wrong information.
- rec4TJWg2Am6ReVuO (1): the Loom didn't answer the question; the root cause was never found; the agent then waited out the inactivity timer.
- recUoBZayA4gSdXSA (2): passed between 3 agents; the user had to re-explain each time and got a generic Loom.
- recboMsGzi4JSgS6o (2): the SMS failure was sent to billing after 15 minutes with no technical check.
- recp1HahIiuKt2l45 (1): a daily issue for a week was dismissed as "browser cache"; the agent said "bugs like these are common" in reply to a cancellation question.
- recO4Yo3fKJne54Er (1): pasted a generic A2P guide and help article when the user asked for a walk-through.
- recGLaIfUP3amApld (1): the agent closed the chat while the user was typing the port details they had been asked for.
- recXT3kqqKcm6Ysw2 (no CSAT): 20-min inbound SMS delay blamed on the user's browser cache, which the user rightly rejected.
- recRRAuKcS8cTPMYD (1): no messages sent after the connector setup; the backend fix was not done during the chat.

## [Sample A] Good reply phrasing worth reusing
- "A workflow 'Success' status confirms the step ran. It doesn't confirm the SMS was delivered to the phone."
- "You can use your existing number in two ways: port it for full calls and SMS, or add it as a Verified Caller ID for outbound caller ID only."
- "Please keep your current carrier account active until the port completes, or the number can be lost."
- "This is a permission issue on our side. Once the team enables it, you won't need to request this again."
- "This will take some time to investigate, so feel free to close this chat. Here's your ticket number, and you'll hear from us by email within 24 hours."

## [Sample A] Facts/gotchas
- Port documents: bill PDF from the last 30 days, max 4MB; signed LOA; physical address (no PO box); wireless numbers need an account number and PIN. Ports take 2-4 weeks (recbfQpClTRtltMty, recoS5argRgXr3rMX).
- Verified Caller ID gives outbound caller ID only: no inbound and no SMS (recbfQpClTRtltMty).
- A2P brand phone must be an active US/CA wireless mobile number (rec8heF49HEaqMv7W). Code 30882 cannot be resubmitted and needs an appeal (recQHeMlRvxpsy0k3).
- SMS daily limit slider goes up to 20,000; the agent can unlock or raise it (recKJEbd5Scfduo8V).
- "Ring Web App / Mobile App" ON delays or blocks forwarding to a cell (rec74R2w6Sf378fwA). Anything in Forward Calls To on the staff profile bypasses the mobile app (recOMdTBItW5IHHM9).
- Outgoing Call Timeout of 40 s fixed early hang-ups (recFEEdoOxZqL1WGj).
- Opportunity custom values in SMS need an Opportunity trigger (receSNts8YkhON5Hg).
- Media-library images go out as links; attach the file directly for a true MMS (recoHujVmCo3e0g4a).
- Known bug: Missed Call Text Back timing delay (rec1Z0kzzr9nlXDR0).
- Outbound Voice AI rate quoted as $0.021/min on one agency (recWeIBExZEcbm9NP).

<!-- sample B -->

Note: many chats in this batch go straight to a video call ("can we get on a Google call") with little troubleshooting in the text. Several transcripts were already trimmed in the middle.

## [Sample B] Recurring issues and proven fixes

### "Your A2P 10DLC registration is incomplete/failed" banner / can't text
- Symptoms: the red banner says "Please go to the Trust Center tab to start/resubmit your registration". Users often say "support was supposed to take care of it" or "I was told it was fixed".
- Root causes: the registration was rejected, for example the legal name/EIN didn't match. The brand OTP was never confirmed. The number marked "Verified" is toll-free and doesn't cover local 10DLC numbers.
- Fix:
  1. Ask for a screenshot of the error and the sub-account name.
  2. If the banner is about a local number while the toll-free one shows Verified, explain that toll-free and A2P 10DLC are separate registrations. Go to Trust Center > Start Now and complete or resubmit. If the local number isn't used for texting, the banner can be ignored.
  3. If the brand is pending, check whether the user got the SMS OTP for brand verification. They must reply "Yes" within 24h.
  4. If it was rejected, collect the CP575 (IRS EIN letter showing EIN, legal name and address) by email. Chat accepts images only, not PDFs. Then pass it to the A2P team.
  5. Tell the user the number should be verified within about 12 hours and that follow-up comes by email.
- Escalate: yes. Resubmissions go to the A2P team.
- Evidence: recyZuVxrdxQwujiM, recSF8JSjfquKIFdM, recriebLVs02NDI8e, rec2eg3YBBrHZSUci

### A2P form rejects website "must be a valid HTTPS URL"
- Fix: enter the full URL with protocol, e.g. `https://domain.com/` rather than `domain.com`.
- Escalate: no. Evidence: rec38XIRKGzsLjwH0

### A2P opt-in method forces the chat widget, but I want a form
- Fix: in the A2P application's campaign step, switch the flow from "Quick" (the default, widget opt-in) to "Manual" to pick Form as the opt-in method.
- Evidence: rec38XIRKGzsLjwH0

### Can I remove the verification chat widget after A2P approval?
- The agent confirmed in writing that the widget can be removed from an externally built website once the number is verified (unverified against carrier policy).
- Evidence: rec3LVgcld6FtF3m2

### A2P wizard step is blank / won't advance (Registration flow panel empty)
- Symptoms: Step 3 "Campaign details" > "Registration flow" renders with no controls, so Continue does nothing.
- Fix: no fix on the user's side. The agent collected the requirements (use case, saved sample messages, fee approval) and raised a ticket for the A2P team to submit on the user's behalf, then gave the ticket #.
- Escalate: yes (UI bug / A2P team). Evidence: recdijvmS6vlHuwuD

### Need to set up A2P from scratch / where are SMS messages
- Fix: agents sent a Loom walkthrough. Messages are in Conversations. A2P is tied to the account, not a single number. Users can register both local and toll-free numbers, but toll-free is optional if the local number works.
- Evidence: recbxOqsXqfBGidNC, recwLqX40zaDzXYd8, recXUpvj5q5UMbhFb

### "Your phone system requires configuration" when buying a number
- Root cause: LC Phone isn't configured or activated for the location, or it's a permission issue. It can appear suddenly on a number that worked last week.
- Fix: the agent offered to complete the configuration from the backend ("Would you like me to complete the configuration for you?"), then told the user to go to Settings > Phone Numbers and buy. On some agencies the agent instead referred the user to the admin/billing email because it needs account-level access.
- Escalate: sometimes. If the number already existed and disappeared ("you need to purchase a phone number to send bulk messages"), a ticket goes to the dedicated team.
- Evidence: recklezZgGvDqNVPn, recrusDN4Zzdg6rjY, recg2bFn1IYO9BTR1, rectElsRrjrnKXEVw

### Can't buy a number: "unknown error" / "no permission" / "Twilio not connected" / no numbers listed
- Root causes: no billing method on file, or ID verification still propagating.
- Fix:
  1. Check billing first. If no card is on file, have the user add one under Settings > Billing, then retry the purchase.
  2. After ID verification, retry. In one chat the purchase worked minutes later.
  3. If no numbers appear or Twilio errors show, go to a screen-share.
- Bot path: Settings > Phone Numbers > + Add Number > Add Phone Number. Create a bundle first under Settings > Phone Numbers > Regulatory Bundles if required.
- Evidence: rec6APlKop0yWRNK1, recwp3yEwLqpYolg5, recCQ2CORXOQJkKue, recXUpvj5q5UMbhFb

### Bulk campaign only delivered to ~1,500 contacts
- Root cause: the daily messaging limit.
- Fix: the agent raised the messaging limit from the backend after the user confirmed. No separate fee: charges are usage-based. Failed messages are NOT retried, so the user must resend.
- Evidence: recnWfwxqS3Cp2zh6

### How do I send a mass/bulk text? / "No Send SMS option"
- Fix (agent): Marketing > Campaigns > add an SMS step > write the message once > select contacts > schedule/send. Each contact receives it individually. Bot path: Contacts > select contacts > Bulk Actions > Send SMS (drip mode is available).
- If the menu doesn't match (e.g. there's no Marketing tab or no Send SMS), send a Loom, then a screen-share.
- Evidence: recjDnt6TocKkyT8P, reclhR9AH78mp7l2Q, recgUARZPbIXFwWAt

### Long texts fail / error 30007
- Root cause: carrier filtering. In this case it was a long message with a raw/long link.
- Fix: the agent reproduced it by sending a test with the user's permission, recorded a Loom, and advised shortening the link with a branded shortener (the agent suggested bitly). The bot advised removing shortened URLs and spammy wording. These two pieces of advice conflict (unverified which is right).
- Evidence: recZ84aysezERJJkI

### Port out a number to another CRM/carrier (account number, PIN, SID)
- Fix:
  1. Confirm port-out and which number(s).
  2. The agent provided the Account SID. The transfer PIN and LOA/CSR need escalation to dev/carrier, with an email follow-up.
  3. Tell the user to keep the number active and not release it until the port completes.
  4. For a Twilio destination, one agent told the user to open a ticket with Twilio for the LOA (weak answer).
- Escalate: yes (PIN/account number). Evidence: recUpzSiDpRmpjtDv, recvRsoN9L2lkYTlY, recwvADbFlcLeRn8z

### Port a number in
- Bot path: Settings > Phone Numbers > Port-In Numbers.
- Agent flow: send the porting form, have the user email the completed form plus a recent bill (PDF can't go in chat), then start the port and give a ticket #.
- Evidence: recS450dr7k2qEhl9

### Incoming calls go to the wrong place (RingCentral/business number, my phone instead of employee's, not ringing my cell)
- Fix paths (bot/agent): Settings > Phone Numbers > edit number > Inbound Call Forwarding / Assigned User, then select the staff member and save. Also Settings > My Staff > user > Call & Voicemail Settings and set the destination to Web App / Mobile App or a forwarding number. Check Settings > Phone Numbers > Voice > Other Settings > Inbound Calls priority list.
- The staff member logs in to the LeadConnector mobile app with their own credentials.
- Evidence: rec1EjE12ekSz2VXv, recCrT820EK0c9ewq, recxRHpDRxGIJYGsj

### Voice AI number now rings the real business
- Fix (bot): AI Agents > Voice AI > Agent List > agent > Phone and Availability. Confirm the number and turn off "AI agent as backup". Then go to Settings > Phone Numbers > ⋮ > Edit Configuration and remove the "Forward Calls to" number.
- The agent fixed the configuration over a Meet call.
- Evidence: recpsNRMymJg1fVsR

### Business-call identification / ringtone; transferring calls
- No per-call ringtone. The agent set the caller display to show the CRM number, and the user saved that number in their phone contacts under the business name (rechpS8rLsKMpx6tQ).
- Call transfer works only when the call is answered in the GHL web or mobile app (Transfer button, top right). It doesn't work when the call is forwarded to a physical cell (recVoqhnqrL7l42ds).

### Stop automated texts/emails to one contact but keep manual messaging
- Fix: Contacts > open the record > turn on DND for Email / All Channels. To stop texts, remove the contact from Active Workflows (X next to each workflow in the record's left panel). Manual SMS from the record's conversation box still works.
- Evidence: recmKyLoUTwhCUIoX

## [Sample B] Escalation and ticket patterns
- What gets escalated: A2P (re)submissions and rejections (A2P team), port-out PIN/account number (dev team), missing or unrecognized owned numbers and LC Phone setup (backend/dedicated team), phones fully down after a workflow change (admin team, "priority"), and the blank A2P wizard.
- Account, billing, legal (DPA), and onboarding/jumpstart scheduling questions are sent to the agency admin email (recLOAimPACYu2cNL, recbY08ycuV9pAWcv, recEbEtQgP9RucSps, recrusDN4Zzdg6rjY).
- Phrasing: confirm the best email, give "ticket number #...", and say "they will reach out via email". A2P ETA is "up to 12 hours". One agent explained that escalation protects your place in line but can't change carrier processing times (recvRsoN9L2lkYTlY).
- Many chats end with a Google Meet link, and the agent closes the chat once the user joins.

## [Sample B] What went wrong in low-CSAT chats
- There are no CSAT 1-2 chats in this batch. The only CSAT 4 came from a 10-minute first-response delay (recBVU4FLd4tJAl7m).
- Weak spots:
  - Repeat contacts because an earlier "it's fixed" promise wasn't kept, or the OTP/CP575 was never requested (recSF8JSjfquKIFdM, rec2eg3YBBrHZSUci, recriebLVs02NDI8e).
  - An irrelevant Loom sent for a call-reporting visibility question (recaIRgrrn9qs2mDK).
  - The user waited about 6 hours across overlapping channels (recffb9ynyDWUFxZN).
  - A care call no-show (rectdtI1E7K4uenre).
  - A port-out was deflected to Twilio support (recwvADbFlcLeRn8z).
  - Slow "still looking into it" gaps of 5-10 min (recVoqhnqrL7l42ds).
  - The agent posted the Account SID in chat (recUpzSiDpRmpjtDv), which is sensitive.

## [Sample B] Good reply phrasing worth reusing
- "The 'Verified' tag applies only to the toll-free number; the red banner is about A2P 10DLC, a separate registration required for local numbers."
- "Did you receive an SMS OTP for brand verification? Please reply 'Yes' within 24 hours so the team can continue."
- "There isn't a separate charge for increasing the limit; charges are based on actual messaging usage."
- "Please don't cancel or release the number until the port is fully completed, or the number could be lost."
- "Would you like me to complete the configuration for you?"
- "Would you be open to a quick screen-share so we can fix this together in real time?"

## [Sample B] Facts/gotchas
- The A2P 10DLC fee shown was $10.50/mo (covers up to 6,000 msgs/day, multiple numbers) (recwp3yEwLqpYolg5). A user mentioned $22.50 vs $10 depending on the use case (recdijvmS6vlHuwuD).
- A2P is tied to the account, not to a number. Toll-free verification is separate (recXUpvj5q5UMbhFb, recyZuVxrdxQwujiM).
- A2P verification after a fix takes up to about 12h (recriebLVs02NDI8e, rec2eg3YBBrHZSUci).
- Failed campaign messages aren't auto-retried after a limit increase (recnWfwxqS3Cp2zh6).
- Australian numbers need an approved Regulatory Compliance Bundle. SMS is billed per segment in USD, separate from the subscription. Filter by country under Phone Numbers > Add Number (recEL61rAQ7L82NBB).
- Support chat accepts images only. PDFs (CP575, port forms, bills) go by email (recS450dr7k2qEhl9, recriebLVs02NDI8e).
- Media storage has no account-wide upload cap (recLOAimPACYu2cNL).
- The same number can be used across all funnels in a location. Use Number Pools for per-funnel tracking (rec12DObEIPHEbg3J).
- SMS execution logs: Automation > Workflows > workflow > Execution Logs (rectElsRrjrnKXEVw).
- Deleted contacts can be restored for up to 60 days. Data is retained up to 90 days after leaving (recbY08ycuV9pAWcv).
- Closed support-chat transcripts can't be viewed by the user. An agent can export one (recwROw5ty4MA6Sld).
- A dial pad that stops responding fixed itself after a re-login (recR884799Q1pVHDf).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 9,086 chats. CSAT average 4.7 from 1,913 ratings (101 rated 1-2). First-contact resolved: 832. Agent mentioned an escalation or ticket in 14%; moved to a video call in 8%.
- What users ask about most: buying/adding numbers, A2P 10DLC brand and campaign registration ("registration incomplete", rejections), toll-free verification, carrier error codes (30034 not A2P compliant, 30024 sender ID), messaging limits and wallet, porting in/out, call forwarding, voicemail and ring settings.
- Dashboard paths agents gave most often: Settings > Phone Numbers (58); Automation > Workflows (23); Settings > Phone Numbers > Manage Numbers (16); Settings > Phone Numbers > Trust Center (12); Settings > My Staff (9); Settings > Phone Number (8); Settings > Business Profile (7); Settings > Phone Numbers > Advanced Settings > Voicemail (7); Settings > Billing (6); Sites > Forms (5); Settings > Integrations (5); Automation > Workflow Triggers (5).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- reco48pY2mFnNoxPL (2026-10-15): "I need help with A2P Registration" Agent: Please navigate to Sites > Funnels . You should see the A2P Compliance Template there. | Since you're on a Google meet call with us, I have closed this chat. Feel free to reach out if you need further assistance.
- recxyWWHAVQpZfzpc (2026-08-25): "Hello, may I know how can I complete the registration of A2P 10DLC?" Agent: A2P 10DLC registration in **AI for Business** has two main steps: **Brand Registration** and **Campaign Registration**. 1. Go to Trust Center In your AI for Business sub-account, go to **Settings > Phone System > Trust Center**. This is where you manage A2P 10DLC registration. 2. Register Your Brand | You will need to add the code only once
- recmqiOSaqRrwXZuB (2026-07-22): "Hi [name], I'm trying to send an SMS and it failed. Can you let me know what could be the cause or how do i update it?" Agent: Yes, exactly! The phone number you use to send messages is assigned directly through the platform. When your account's phone system was set up, a dedicated sending number was purchased/generated right from the backend (which you can view anytime under Settings > Phone Numbers ). This number is compl | Yes, I have already escalated it to the team an
- rec92jf50NxX7ot2x (2026-07-15): "I went through the steps to buy a phone number. I selected a number and then had to take pictures on camera to verify. It said it was completed, but I don't have a confirmation and" Agent: Yes you will have to go to the trust center follow the prompts to fill out the application. | You can find that under settings > Company billing > Payments.
- recLsqqDGsocV6p2I (2026-07-15): "I need to setup daily SMS at 8:00 (Pacific time) to Ed Sanders (admin)" Agent: Step 2: Build the Daily SMS Workflow Navigate to Automation > Workflows and click Create Workflow (Start from scratch). For the workflow trigger, choose how you want Ed Sanders to enroll. If this is just a standalone broadcast, you can skip the trigger entirely and manually add him to the workflow l | Two quick final checks to make sure it deploys
- receTWlEP2oJtXVs5 (2026-06-25): "I'm checking the status of my phone number move from the Synergy Vitality Works (main) account to the Joseph Redd Consulting sub-account." Agent: Okay [name], it appears that your phone number couldn't be transferred between sub-accounts due to a missing KYC verification. To rectify this, you can easily complete the KYC verification process by navigating to Settings > Phone System > Additional Settings > KYC Verification. By following these s | Oh, It will need to be on the Joseph Redd accou
- recaFsncQnkZkcBY6 (2026-06-07): "how can I port in a phone number I already purchased" Agent: can you navigate to settings>company billing> detailed transaction | Yes definitely, you can setup your custom email domain inside settings> email services
- recb79hijoQtYGXhf (2026-06-06): "I was in the process of purchasing my phone number and the verification went thru and when it was about to move on it said there was an error and i needed to contact support. I wan" Agent: You are charged using your wallet balance in Settings > Company Billing. | Only if auto recharge is enabled
- recwbpc2w2bi7k5Ea (2026-06-01): "how do i turn off automated text messages" Agent: You can also do that Jaleesa on the phone system, click on the tree dots > Edit configuration > Call forwarding. | You can use any recording application to record your voicemail, let me show you where you can upload your voicemail Jaleesa
- rec1HKtJ7JLmYwJUU (2026-05-28): "I do not see the port option to port my own phone number" Agent: Oh, you can just download it and edit it. Kindly follow these steps: Click on File on the top left > Download > PDF | Oh, no worries. I just recorded a loom on how to process this. It's just that I'm having some sort of latency on my end. No worries, here's the loom that I have recorded: loom.com/share/54b1fb7b97e84043ad99ebc9581b82e4
- recRi1CKs3x2UmNGJ (2026-05-26): "Hello I have question about texting options to my clients" Agent: You can purchase a phone number under Settings > Phone Numbers | You're most welcome. If it still didn't work, using another browser or even after you tried restarting your device, kindly reach out back so we can raise it to the backend team. We just need to make sure we have exhausted all the troubleshooting steps before we escalate it.
- recD1G8DC7RG75RWW (2026-05-24): "I need help from support about building something out" Agent: You can set up a subscription first in the Payments > Products. Then create an Automation with a trigger of "[name]" > Add filter and specify the product. Once done, add an action of "Send SMS" or "[name]". You can then prompt on the message field to continue with the subscription, ple | No worries, [name]. You can submit this request to our Admins
- recMJmorEJjTrw4pU (2026-05-21): "What do I need to be able to send SMS messages through the hub?" Agent: A2P registration is basically a required business verification process for sending SMS in the US. It tells carriers who you are, what kind of messages you send, and helps reduce spam. You can complete it under Settings → Phone Numbers → Trust Center. | you will need to purchase a number in mastermind account by naviagtating to Phone number > Add ph
- recH1egwtEBswTneX (2026-04-30): "I am trying to purchase my 1st phone number and the system is telling me that I don't have permission to purchase" Agent: Thank you for providing a screenshot. | Could you please try adding a wallet balance on your account under Settings > Company Billing?
- rec2ccuLLitekxYO0 (2026-04-23): "where can i see the limit of how many sms i can send in 1 day? please show me" Agent: Navigate to the settings> phone numbers> messaging > messaging limit

#### What went wrong in low-rated chats (user reviews)
- rec4kpn6QcPIRyVSy: "Support closed without resolution"
- recOwm77HaKzLrE7V: "THe entire time I have been dealing with you all I have gotten conflicting info and have been unable to resolve something that should be relatively simple. I only need a phone call however only certai"
- recGLaIfUP3amApld: "I was in the middle of gathering and typing info requested from Growth Hub chat to transfer a phone number into Growth Hub.   I asked chat to give me some time as it was a long list of info requested."
- rec9bXurXMyDO0FKl: "3 chats and problem still not solved"
- recG6NGhJOuJ62P3c: "the conversation was lost after ended. I was not attended to properly. I have been trying to transfer in all assets from another sub-account."
