---
description: Proven fixes, escalation rules and reply phrasing for 'Mobile app, reviews, documents/contracts, opportunities' guest-support chats, distilled from Modal Chats (Airtable).
---
# Mobile app, reviews, documents/contracts, opportunities

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 214 chats fell in this topic; 93 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### Mobile app

### "I can't log into the LeadConnector app" / "user not found"
- Symptoms: the error says "password has not been set up for this email" (the user normally signs in with SSO). Or the app says "locked out due to pending dues" or "Account access restricted" even though the desktop login works.
- Root causes: an SSO user never set a password. Or the client is an end customer: the LeadConnector app is for admins/staff only.
- Fix:
  1. Confirm which email is on the user record. Send a password reset link from the account, and the user sets a password.
  2. Then log into the LeadConnector app with the same credentials as the web app.
  3. If end clients need mobile access to courses or communities, they need the paid Branded Mobile App (Products > Client Portal > Branded Mobile App) or the mobile browser.
- Escalate: yes, when the app shows "pending dues/restricted" but the web login works (dev team, follow up by email).
- Evidence: recWz0i3Gt5hbwIPh, rec0FztRRkTZ1YRWv, reclYpvqDyvHEjgtN

### "Can I build an app / change my app store screenshots?"
- Branded app path: Products > hover Client Portal > Branded Mobile App. It is built manually (no AI builder), works on iOS and Android, and cannot import apps from Base44 or GitHub.
- Store screenshots: whoever has access to the store listings can retake the screenshots and upload them to Google Play and the Apple App Store. Profile names and photos in the screenshots come from the user's Account Settings.
- Evidence: rec22mLsvtJQds64e, rec76rZFnnS0hG9SM, recqgR4cq1LSKl5wb

### Reputation / Reviews

### "Reviews AI buttons are greyed out" / "AI reviews permission off"
- Cause: the Reviews AI / Reputation permissions are disabled on the user or sub-account.
- Fix: the agent enables the permissions on the backend or in user permissions, then the user refreshes. The bot's checklist: Settings > My Staff > role permissions, and Settings > Integrations > Google Business Profile reauth.
- Repeated "all my permissions turned off again": the agent re-enables everything (AI, Ask AI, AI Studio, Reputation AI, Conversation AI, payments, Launchpad, WordPress, QR codes) and saves. The agent said the earlier change "might not have been saved properly" (unverified root cause).
- Evidence: reckYpGfGXmEKk62R, recdD77RzC7JF0t66

### "Google isn't selectable as a review source" / "GBP shows disconnected in Reputation"
- Path where the user saw it: Marketing > New Post > Post Reviews > Select Review Source (Google greyed out).
- Fix:
  1. Go to Settings > Integrations.
  2. Disconnect Google, then reconnect it and allow all permissions.
- Evidence: recY2LYJyAIZbpaqQ, recEDGOYrv8DEvgw8

### "Where's my Google review link / how do I send review requests?"
- Review link: Reputation > Settings > Review Link (copy). The GBP must be connected first.
- In an email or button, use the "Visit Website" action with a static URL type.
- Sending requests: connect Google pages, then send review requests from Reputation. Agents usually answered with a Loom.
- Evidence: recEDGOYrv8DEvgw8, recvVbpM8ykxWs6U3, reczSGNaN6K3PDjkE, recmqjEUNpPd2oPbq

### "The review link in my request email errors / won't send"
- Cause: the email was sent from a domain that was not the active, connected one.
- Fix: the agent corrected the sending domain to the domain the user actually bought, then the user sent a test.
- Evidence: recWNxDQO6xRKicFe

### "The review-request workflow didn't fire when the contact replied"
- Cause: in the "Wait for Contact Reply" step, "Reply To" was set to the first SMS only. The contact replied after the second SMS.
- Fix: in the Wait step, clear the "Reply To" field so the step listens for a reply to any message. As a fallback, move the contact to the next step manually.
- Evidence: recSqhcFwKSjlzQMT

### Other reputation questions
- "Did the platform auto-reply to my Google reviews?": check Reputation > Settings > Reviews AI (auto responses), then open the review in Reputation > Reviews. This one went to a call. (rec64B7nKwkyf8qZt)
- Negative or private feedback: add a second link in the email to an internal form or survey (Sites > Forms/Surveys). Submissions show on the contact, and a workflow can notify the team. (reccNsi0tNTZHpo1Y)

### Documents & Contracts

### "Why can't I sign my own contract?"
- Cause 1: the signing order is sequential, with the client first, so the sender's field stays locked until the client signs.
- Fix 1: open the document builder > Manage Recipients. Turn off Sequential Signing, or drag yourself to the top, then save.
- Cause 2: the client had signed but the sender's signature field was not clickable. This was a glitch in that one document.
- Fix 2: make the signature field larger with no overlapping fields, resend the contract, and have the client re-sign.
- Evidence: recemH0xNK1QOW4c5, recHOWFkx7nwqJL3V

### "How do I void/delete/remove a contract from the client?"
- Fix: on the document, open the three-dot menu, move it to Draft, then delete it from the Draft section. Or void the linked invoice, which also voids the contract. Delete/Void/Revoke are not shown on sent documents until the document is in Draft.
- Evidence: rec8tW8zJWD8bD9L6, recSgoALn28WdDC4W

### "The client keeps getting sign reminders after signing" / "the contract won't fill in client info"
- Reminders: the execution logs showed contacts "skipped" because Allow Re-entry was off. The agent explained this with a Loom. Separately, check that the reminder workflow stops on the document's Signed status.
- Client info not filling: the client fills their details on the document, and those fields then auto-populate. The agent fixed the template and walked the user through it in a Loom.
- Evidence: recGYlgmNnF9QDf0n, recUnfjOEFfFUPUQk

### "How do I get a direct link to a document/lead magnet without the popup form?"
- Fix: create the document from the template under Payments > Documents & Contracts. Preview it, copy the link, and paste that link into the email button.
- Evidence: reclhz613eXf31ZqG, recxDKhRSKx9FWXpO

### "I can't find an old signed contract (60+ days back)"
- Escalated to the backend team, and the user was updated by email.
- Evidence: recKThu77DiVnOHsl

### Opportunities / Pipelines

### "Contacts aren't moving between stages" / "the pipeline keeps sending texts"
- Causes: the workflow was still in Draft. Or a stage-change workflow (e.g. a no-show sequence) enrolled the leads.
- Fix: find the workflow on the contact (left panel > Workflows) and publish it, or set it to Draft to stop sends. Moving a contact to Lost stops the automated messages once the workflow is in Draft.
- Evidence: recpj3Le08imBIA9a, recDYfR61Lq1g4jK6, recDwvpjPAKTISzFO

### "Contacts got added to a second pipeline / the opportunity resets to New Lead"
- Cause: a published "master" workflow had no pipeline filter on its Opportunity Created trigger. Or an integration sync left a field blank (Event ID), which triggered a workflow that resets the stage.
- Fix:
  1. Open the contact > Workflows (left panel) to find the workflow that fired.
  2. Unpublish it, or add a pipeline filter to its trigger.
  3. For the integration bug: fill in the missing field on affected deals as a stopgap, and escalate to engineering with a ticket ID.
- Evidence: reclYiyFx3Hv6uNRw, recwaDbObe2YPElbM

### "I can't rename a pipeline / add stages / the pipeline is greyed out or missing"
- Causes: the user is not an admin, so the three-dot menu is hidden. Or the pipeline permission is off for the sub-account.
- Fix: ask the account owner/admin, or have the agent enable the pipeline permission.
- Editing stages: Opportunities > Pipelines > edit (pencil) > rename, reorder, + Add Stage or delete, then Save. Deleting a stage that has deals prompts for a destination stage.
- Evidence: recVY5dhTuphx0wnc, recDTvehnY6mKeBSW, recFOPPbAGkUhmXGt, recAWkeocYhq2uue0, recD0fH9a3RfZ7gre

### "I deleted my pipeline by accident"
- The agent restored it on the backend within minutes.
- Evidence: recIkPbD5dmbvlII6

### "Turn existing contacts into opportunities without duplicates" / "imported data doesn't fill opportunity fields"
- Fix:
  1. Go to Contacts and select the leads.
  2. Use the bulk Add/Update Opportunity action and choose the pipeline and stage.
  3. Keep Settings > Business Profile > General > "Allow Duplicate Contact" off.
- Evidence: recdzlInQ3uhwh3Dv, recB9cdhatr3xyOuC

### "Last Activity doesn't update" / "pipeline reports"
- Last Activity updates only when the opportunity itself is edited. To update it on messages, build a workflow: Customer Replied / inbound / outbound trigger > Update Opportunity action.
- Reports: filter by date range, pipeline and stage. Saved Board-layout smart lists can't switch to list view, so use Open opportunities > Advanced filters > + List to save a new tab.
- Evidence: reczNc6TVqygDtZMK, recl3Wc8L0RUIPSlB, recN91pf9BuHetvqz

### Other (spillover topics)
- **Email signature:** Settings > My Profile > User Info > Signature, then Save. The agent built an HTML signature for the user. An image signature does not auto-update in existing workflow emails. (recYV8rlvkJ0Q5Xch, recMFfahBUejY20n3, recSvlbpy0WCb1WAw)
- **"Highest messaging limit in the ramp":** the limit resets at midnight in the account's timezone (Settings > Business Profile). An increase beyond the max ramp is escalated. (recyjc5ztDH4IRHO0)
- **Ported numbers and A2P:** link the numbers to the existing campaign, then refresh to see the "A2P Verified" badge. (recVOaA5lzNQY5ugv)

## [Sample A] Escalation and ticket patterns
- What gets escalated:
  - App access lock while the web login works (dev team)
  - Retrieving old signed contracts (backend team)
  - A2P privacy-policy review rejected despite meeting all requirements (A2P team, with a reference number)
  - Port-in LOA documents (sent by email to the A2P team)
  - Integration sync bugs (engineering, with a ticket ID)
  - Safari/iOS embed overlay bug (backend team)
  - Opt-out limit SMS suspension (lifted with the user's consent, then investigated)
- Phrasing agents used:
  - "I'm officially escalating this issue to our backend team"
  - "Please keep this reference number… You'll receive a follow-up email."
  - "Here is your ticket ID… We will send updates via email."
- Agents always confirm the user's email for follow-up. Long or confusing chats are moved to Google Meet ("we only conduct calls on Google Meet"). When there's a queue, agents offer an enterprise booking link.
- Escalation evidence: reclYpvqDyvHEjgtN, recKThu77DiVnOHsl, recn4HynlhLGahJBX, recwaDbObe2YPElbM, reciaGMmLvW4mskHT, reco0F2X6RtuDyYin

## [Sample A] What went wrong in low-CSAT chats
- **rec81ANs267wlqNfG (CSAT 2), contract link opened a blank page:**
  - The agent asked for the link twice and then sent an image/Loom.
  - The agent never checked the contract and closed the chat for inactivity.
  - The user's verdict: "nothing was done."
- **recn9mGeI8rNnOOWh (CSAT 2), ported numbers still ring the old system:**
  - The user asked to escalate to telecom to verify the port.
  - The agent declined, sent a video and said "reach back out" instead of opening a ticket.
- **recwaDbObe2YPElbM (CSAT 2), multiple issues reported:**
  - Only one bug was escalated, and the chat was closed without addressing the others.
  - The agent typed a bare "Wait!" before giving the ticket.
- **recDwvpjPAKTISzFO (CSAT 1), Spanish-speaking user:**
  - The user waited more than 40 minutes with repeated "still checking" messages.
  - No Spanish-speaking agent was available, so the user was finally pushed to an English call.
- **Lower-scoring patterns (CSAT 4):**
  - Pointing the user to a Loom instead of answering ("can you just tell me") (recGYlgmNnF9QDf0n).
  - Contradicting the bot's instructions (rec2FwBCct8PWgnha).
  - Asking a user who had deleted a bundle for the rejection reason (rec4RAjD7seuEz6wb).

## [Sample A] Good reply phrasing worth reusing
- "Since you've already updated it with the requested information and it's still failing, I don't want to ask you to make more changes that may not resolve the issue. I'll escalate this to the team."
- "I want to be upfront with you: this is how the system is currently built. I'm happy to pass this along as feedback to our product team."
- "Leaving the Reply To field blank lets the workflow accept a reply to any message, so no responses get missed."
- "I understand your time is valuable and we've been here a while. Would you like to hop on a quick video call so we can sort this out faster?"
- "If you're in a hurry, we can end here and have the senior team look into it and get back to you by email. Which do you prefer?"

## [Sample A] Facts/gotchas
- The LeadConnector app is for admins/staff only. End clients need the paid Branded Mobile App or a mobile browser. (rec0FztRRkTZ1YRWv)
- The opportunity board shows at most 4 stages without scrolling. (recFOPPbAGkUhmXGt)
- Changing a product's price or a pipeline value applies to new opportunities only. Edit past opportunity cards manually. (recKThu77DiVnOHsl)
- Duplicating a funnel does not duplicate its workflow. Duplicate the workflow and relink it to the new form. (rec5ori6clHSJZYUx)
- There is no native sender/domain blocklist for inbound email in Conversations, and no workflow workaround. (recfPUrsGPCB95Kwx)
- A branded domain must be a subdomain (e.g. app.domain), not the root domain. (recSAIzsPidbquhaB)
- "Verification Required" on a toll-free number only matters for SMS. (recVOaA5lzNQY5ugv)
- The regulatory bundles path appears as Settings > Phone System (not "Phone Numbers") in some white-labels. (rec4RAjD7seuEz6wb)
- The bot often sends billing questions (BAA, voiding contracts) to a billing email. Human agents handled them directly. (rec8tW8zJWD8bD9L6, recGLWphidjbEXREb)

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

### Documents contracts

- Volume: 861 chats. CSAT average 4.66 from 194 ratings (13 rated 1-2). First-contact resolved: 109. Agent mentioned an escalation or ticket in 6%; moved to a video call in 13%.
- What users ask about most: creating, sending and signing documents and contract templates.
- Dashboard paths agents gave most often: Payments > Documents & Contracts (8); Settings > My Profile (2); Automation > Workflows (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recYx18YhF37FTDfC (2026-10-10): "I've reviewed your official LeadConnector cookie consent documentation. It confirms that visitors cannot update their preferences after their initial choice. As The Father Identity" Agent: Let me just pull up your account so I can check this for you. 😊 | You're welcome, [name]! To achieve this on the platform, you can either clear the stored consent browser cookie to force the native banner to reappear or integrate a dedicated UK-compliant Consent Management Platform (CMP) like CookieBot, Termly, or OneTrust via Sites > Settings > Cu
- recne3NloeH3smsQT (2026-08-19): "I want to know if a solution to sign documents is available on the business hub" Agent: You need to go under Marketing & Sales > Payments and you will see documents contracts | Yes, If you click on the New, It will allow you to upload PDF and you can send contracts and they are sign able.
- recVABJVNV7yfqG7G (2026-07-30): "i need help with creating a page for Legal Information & Terms with an index on the top of the page. HOpefully with hyperlinks to the chapter in the document." Agent: No worries! [name], you can also upload the word document and the viewers will be able to download on their end if needed. | To create a Terms & Conditions page, first generate your document text using a legal document generator (Documents and Contracts). Next, navigate to Sites > Funnels/Websites and create a new blank page with the URL path /term
- recnZgQGzsMPh6P3o (2026-07-23): "hi, can you please tell me quickly where to find my signature for my inbox, I would like to make a change there and add something" Agent: Sure thing! Please go to Settings > My Profile. There, you'll see the section where you can edit your email signature. I've attached a screenshot for your reference.
- recs4Ce4ZiVFzCirB (2026-06-01): "Good evening Sales Process Team, I hope you are well. I am reaching out because I have not yet received my affiliate commissions and would appreciate some clarification on what inf" Agent: You need to sign up using the following link: join.salesprocess.com/￼ If you have any concerns regarding affiliates, you should reach out to our Admin Team, and they will assist you further. Email: [email] Apart from this, if you need any further help, feel free to let me know ❤️ | Please try this one > join.salesprocess.com/
- recos0xar5glK986a (2026-05-05): "I have a client Mike Owens, who is getting automated emails that he should not be receiving. He was sent a contract and he signed the contract. However, it looks like the automatio" Agent: After the contract is signed, the emails and workflow are functioning correctly. The contract is also being sent properly via WhatsApp, and the emails are executing as expected. There doesn’t appear to be any issue. However, if you experience any problems, please feel free to reach out to us! we’re  | I am asking for this automtion > UCSC Parent Wo

#### What went wrong in low-rated chats (user reviews)
- recUoBZayA4gSdXSA: "I was passed around to 3 people.  I had to reexplain to each person.  This is too time consuming to not have gotten a resolution."
- recpe9vV69ABmdIy4: "NO resolution I was awaiting a new Zoom expert. why the closed chat? ???"
- recsLGZUQRAVWPNUv: "So that is not what I was looking for at tll.  thanks anyway"

### Opportunities pipeline

- Volume: 1,165 chats. CSAT average 4.81 from 201 ratings (7 rated 1-2). First-contact resolved: 125. Agent mentioned an escalation or ticket in 5%; moved to a video call in 11%.
- What users ask about most: creating pipelines and stages, opportunity value and cards, creating opportunities from workflows.
- Dashboard paths agents gave most often: Opportunities > Pipelines (4); Settings > Business Profile (2); Field One By One > Check (2); Of Them Are Empty > Fill (2); Settings > Url Redirects (2); Trigger > Customer Replied Action > Create/Update Opportunity (2); Settings > Custom Fields (2); Filter For Status > Won (2); Calendars > Settings (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recYymUe2kgBxGjC2 (2026-06-07): "I set up a pipeline to my IG and FB for new leads but nothing is happening" Agent: Yes, thankk you. Though no luck, since it did not show up in the the conversation tab in CRM. Can you try one last thing for me, if you could go to settings> integrations >and disconnect and connect your instagram again please. | I just want to make sure we try all the troubleshooting steps before escalating to devs.
- recn7hcmtclL2cuq3 (2026-03-10): "my new leadas are not showing up in my new lead pipeline" Agent: I'll make you a loom video, so that you can see how you can update your new contacts in the opportunities section, 🙂 | Just click : More > Manage Opportunities
- reckkMGNZqdNp7k5b (2025-11-11): "Pipeline Automation -The pipeline stages we want to set up are as follows: Lead → SNIFF Test → Application Sent → Application In Progress → Submitted to Lender → Conditional Approv" Agent: You can go to Pipeline > Pipelines > Create Pipeline to set this up | Since you've already hopped in the call, I will be closing chat for now. Have a good day ahead!
- recwrhH0Utq6RMgxe (2025-09-25): "Hello! [name] want to ask for a quick help. How can I customized fields inside the list view of Opportunities Section? Like we want to add some fields that we would like to have a" Agent: If you click on Manage fields you can see a list of all the other custom fields you created. Just check the box to add them | Yes and if you want you can create more of these in Settings > Custom fields. Just need to set the "Object" to "Opportunity" when creating the custom field
- recoKfVHG0kKyIgLV (2026-08-06): "Hi! We have an issue with two staff users (sales) — when they open the Opportunities menu, the page loads completely blank (no pipeline dropdown, no board, no "No opportunities" me" Agent: You can generate API key under settings > private integrations: | We don't have documentation available for this but you can search for it within composio.
- rechP5qLzYxcClBJo (2025-08-22): "Hi there, I created a new opportunity but how do I add multiple stages in that pipeline?" Agent: For this you need to navigate to oppurtunities>pipeline>introductory experince>click on pencil icon>add stages>save | Yes! Its easy one to navigate and add more stages😊

#### What went wrong in low-rated chats (user reviews)
- recIYCFNRcLawXXq3: "did not finish helping and closed the chat"
- rectXa5zf38zuXLMo: "it felt like the agent I was speaking with did not understand what was happening with our issue so I just closed the chat."
- recospWdLkwKmS7hj: "were not able to help me despite best efforts to"

### Mobile app

- Volume: 264 chats. CSAT average 4.77 from 48 ratings (1 rated 1-2). First-contact resolved: 25. Agent mentioned an escalation or ticket in 10%; moved to a video call in 8%.
- What users ask about most: the mobile app: notifications, incoming calls, branded app, crashes.

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- rec22mLsvtJQds64e (2026-09-06): "does mastermind have the means of building apps like go high level?" Agent: Got it, [name] to your products> hover on client portal> select the branded mobile app> then you can built your mobile application there: | I’ve checked on this, and unfortunately, we cannot access the code or offer a way to transfer it over to Mastermind.
- recILi8B2ik02UX7W (2026-07-06): "I used to receive push notifications on my iPhone from the LeadConnector mobile app. Since the app updated, I'm no longer receiving them. How do I fix this?" Agent: Okay [name]! You can follow these troubleshooting steps to make sure it is not a device misconfiguration that could be causing this issue. App Permissions: Go to your phone's native Settings > Notifications > LC Mobile app and ensure all notifications, badges, and sound alerts are enabled. Backgroun | You can reach out to [email], and one of the me
- rec4DFsNj8qyeTu1l (2026-03-30): "My iphone app will not open. I have restarted, then deleted and reinstalled the app after my ios update (26.4)" Agent: Toggle "[name]" Off (Temporary) A known issue with iOS 26.4 is that the new AI features consume up to 7GB of active RAM, which is causing business apps like LeadConnector to "starve" and crash immediately. Go to Settings > Apple Intelligence & Siri. Temporarily toggle Apple Intelligence  | You can go to your account, settings, my staff and then you

### Reputation reviews

- Volume: 211 chats. CSAT average 4.92 from 39 ratings (0 rated 1-2). First-contact resolved: 29. Agent mentioned an escalation or ticket in 7%; moved to a video call in 10%.
- What users ask about most: Google review requests, review links/QR codes and review widgets.
- Dashboard paths agents gave most often: Settings > Integrations (3); Sites > Websites (2); Reputation > Settings (2); Settings > Integrations > Google (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recv3HMcq18iruiAV (2026-08-05): "my google reviews are no,longer being replied. help" Agent: I'm sorry to hear that. If your review replies have stopped working, here are a few things to check: Make sure your Google Business Profile or Facebook account is still connected under Reputation > Settings > Integrations . Verify that your review reply automation (if you're using one) is still publ | [moved to a video call]
- rec6tt1I6TfPHTIuY (2026-07-26): "pls help me to put the next step to go to the google review page'" Agent: Allow me a few moments to pull up your account and look into it 🙂 | Go to Survey edit mode > Settings > Redirect to URL and add the google review link there
