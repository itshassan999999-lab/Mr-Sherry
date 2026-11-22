---
description: Proven fixes, escalation rules and reply phrasing for 'Workflows and automations' guest-support chats, distilled from Modal Chats (Airtable).
---
# Workflows and automations

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 546 chats fell in this topic; 122 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "My workflow isn't triggering / nobody is getting enrolled"
- Symptoms: tags added but contacts stay in old stage; test shows nothing; "No action" in history.
- Root causes: no trigger configured at all; workflow left in Draft; wrong funnel selected in trigger filter; test contact never got the tag.
- Fix:
  1. Automation > Workflows > open workflow > check trigger exists (e.g. Contact Tag > select tag) and filters match the real funnel/form/product.
  2. Save, then toggle Draft -> Publish before testing.
  3. Test with a contact who actually meets the trigger (manually add the tag).
- Escalate? No.
- Evidence: rec10FoJFpfTI4q0M, recEEMvXQ8KKZJO0s, rectctFaRh3kSLaGx, recVDO8alYujnlHPR, recdR68CAPGlB7ewH

### "Tag trigger doesn't pick up people who already have the tag"
- Root cause: Tag Added fires only when the tag is added after publishing.
- Fix: Contacts > filter/Smart List by tag > select > Bulk Actions > Add to Workflow (choose "all at once" or drip).
- Escalate? No. Evidence: recVDO8alYujnlHPR, recsQijhpTuWxjV39, recxzn9d5v4oMVnyf

### "Purchase/payment didn't trigger the delivery workflow"
- Symptoms: Stripe payment complete, receipt sent, but no course access / delivery email.
- Root causes: Payment Received trigger not firing; trigger filter on wrong funnel or missing product filter; form ID used instead of order form.
- Fix:
  1. Add/switch to Order Form Submission trigger, filter to the correct funnel and product.
  2. Add Grant Offer (course access) + Send Email actions.
  3. Manually add affected buyers to the workflow so they get delivery now.
- Escalate? Video call if trigger "just stopped" after working (recmd5LAWmqB7vsTz).
- Evidence: recPM9gnpofg2316i, recWJAwUC4sGNRxMO, rectctFaRh3kSLaGx, recDsaGJ1UKnzs8qs, recmdSkffnGEb3LMy

### "Testing with the form doesn't work / contacts merged or skipped"
- Root causes: form "sticky contact" enabled -> repeat tests overwrite same contact, so workflow skips; two people sharing a phone number get merged; re-entry off.
- Fix:
  1. Form builder > form settings > turn off Sticky Contact; retest with new name/email.
  2. Workflow Settings > Allow Re-entry (and "allow multiple opportunities" if relevant).
  3. Business Settings: allow duplicate contacts only if intentional (creates a new contact per submission).
- Escalate? No. Evidence: recvXTJXHmvjiim7A, recfzqfojdSo6w0xh, recLkGpwJfix9mZGJ

### "Emails in the workflow aren't arriving"
- Root causes: contact has DND on email; testing with a contact previously used; workflow not published.
- Fix: open contact > check DND toggles; test with a fresh contact; confirm published. Check contact activity/execution logs.
- Escalate? No. Evidence: recagCbDy6bzpEjT8, recqeggrQeHTOH2Vj, recevI1YGm9zgC0N3

### "Custom values / name not showing in emails"
- Root causes: typed placeholders instead of picker values; appointment values used in a workflow not triggered by a booking (no appointment data).
- Fix: remove and reinsert via the custom value picker; for appointment fields (date/time/Zoom link) the trigger must be Appointment/Customer Booked; contact first name for greetings. Custom values themselves edited under Settings > Custom Values (unverified path; user found it).
- Evidence: recDWtuz5Lce3xfzE, recT41ohWiGnPu5iz, recYB9A1ps3jAhNz8, recu7n5YwPoSlqXhk

### "Messages fired all at once / wait step skipped / sent early"
- Root causes: two workflows with identical triggers running for the same contact; wait step not tied to appointment start time; wait set to a time of day (contacts hold until e.g. 9:00 AM).
- Fix: draft the duplicate workflow; use Appointment Booked trigger and wait relative to appointment start; explain wait-until-time behaviour.
- Escalate? No, but these chats went badly (see below). Evidence: recaxcR3EYjMb1I44, reclUrxDjSb0ga6yd, recSFX1T2mLwewPiG, rec8WlyrmDJdvvLlR

### "Workflow won't publish - 'something is wrong with the data'"
- Root cause: corrupted/invalid Wait step.
- Fix: agent identified the wait step with team, rebuilt it, then Publish & Save.
- Escalate? Internal team check. Evidence: rec5utYYOrpm37jZC

### "Stop buyers from getting the non-buyer sequence"
- Fix: If/Else on tag at the decision point; buyers go to a branch that ends/removes from workflow. Smart List "Tag does not include" only filters at enrollment, not afterwards. Verify buyers actually have the tag.
- Evidence: recEQ1FwGqVmBZSeg, recm30o5oxJEFhHMO

### "Send in batches / raise daily drip volume"
- Fix: Bulk Actions > Add to Workflow > "add in drip" (batch size + interval), or Drip action in workflow. Contacts added all at once still hold at a "Wait until" step. Before raising volume check warm-up limit (example: limit 2500/day allowed going 300->500).
- Evidence: recIQqgxVvJXgfMlB, rec5fYaX7Bae663Cq

### "Replace Drip with Wait without re-sending"
- Fix: add new Wait directly below each Drip; click the contact count badge on the step (or Contacts > Bulk Actions) > Change Workflow Step > select the new Wait; then delete Drip and Publish & Save. Wait timer restarts from zero on move. Do not re-add contacts (duplicates).
- Evidence: recAS77I0A0G1Zdwk

### "Do edits affect people already in the workflow?"
- Answer: yes, edited actions not yet executed run with new content when contacts reach them. Removed/changed steps can knock contacts out; re-add and use Change Workflow Step to resume mid-sequence.
- Evidence: recSZZwrGZaCVPeVP, recdakotKa35UgCuF

### "Trigger link isn't clickable / where are trigger links"
- Fix: Media Storage > upload > Get Link; Marketing (Email & Social) > Trigger Links > Add Link with https URL; insert into email/SMS via link icon. Trigger links do not work on funnel buttons (use the media URL there).
- Evidence: recBRULouPUjBPrrB, recqEMcAcXzN3CIGt

### "Workflow editor says viewer mode"
- Fix: agent adjusted user permissions in account; user retested. Evidence: recv2XvjkvpbIojmB

### "Can't pick my sending domain in Send Email"
- Facts: dropdown lists only verified domains (Settings > Email Services > Dedicated Domain and IP). Per agent, dedicated domain applies location-wide to all workflows and campaigns, not per workflow.
- Evidence: rec6eCxvHP4q1w1Eo

### Other how-tos solved in chat
- Opportunity from workflow: Create/Update Opportunity action needs an existing pipeline (recM4hFJRgZoxgyYs, reclp9Z9fTIky7cUf).
- Send Documents & Contracts action; add one action per template (recyVENY80xrR8a8o).
- Reschedule: no reschedule trigger; rescheduled appt status becomes Confirmed; or use trigger link (recoQZWMtTbZpIGmz).
- Per-contact open stats: Stats View on workflow shows totals; loom for per-contact (recSiUSoL3VKpd3B0).
- Task reminder push notifications: Settings > My Profile > Notifications, uncheck (recorwBibqoU5iCdu).
- Custom date-field trigger enrolls automatically on that date once published (recEEMvXQ8KKZJO0s).
- Quick Reply "bug" was the action name, not the reply text (recJhsMKFP8orytXt).

## [Sample A] Escalation and ticket patterns
- Almost no formal tickets; escalation = Google Meet screen share ("Would you like to hop on a Google Meet? Sharing your screen will let us pinpoint the issue"). Chat closed once user joins.
- Call queue: "all agents busy... ~30 minutes, or I can share a scheduling link" (recjR1Wv2XIAIHVju).
- Angry user demanding someone senior got a "senior agent" call link (recp74R2pjUEVRoLE).
- Internal team consulted for publish error (rec5utYYOrpm37jZC). Possible bug acknowledged but not ticketed (recLkGpwJfix9mZGJ).
- Account access restriction prevented review -> offered Meet (rec8WlyrmDJdvvLlR).
- Sender-domain routing and FB comment non-triggers are candidate dev/backend tickets (unverified).

## [Sample A] What went wrong in low-CSAT chats
- recLOopVmrVaGcgrV (1): 5+ min silence, asked to confirm workflow user had already located, multi-chat delay excuse; then misdescribed dates-based waits.
- reclUrxDjSb0ga6yd (1): only a loom, no explanation, closed for inactivity after 10 min.
- recaxcR3EYjMb1I44 (1): ~90 min, agent closed chat while user still had open items; vague fix ("either adjust the wait step or update the trigger").
- recSFX1T2mLwewPiG (1): user said "I don't want a video, I want you to fix it" - agent sent loom anyway; never sent the test email.
- recLkGpwJfix9mZGJ (1): long FB comment trigger chat, ignored direct re-entry question until user shouted; said "could be a bug" with no ticket or next step.
- rec0Loi4RY9knGqvL (2): couldn't find workflow (wrong folder), asked for URL, generic spam-folder advice, then pushed video call.
- recpUw1pA0rNifIGk (2): sight-impaired novice; screen-share mouse demo unfollowable - needed verbal step-by-step.
- recp74R2pjUEVRoLE (5 but furious): repeated failed advice across agents on Go To step.
- rec10FoJFpfTI4q0M: previous agent fix didn't hold (missing trigger) - user had to come back.

## [Sample A] Good reply phrasing worth reusing
- "'Tag added' only fires when the tag is added after the workflow is published - existing tagged contacts need to be bulk-added."
- "Since you're changing an action that hasn't run yet, the updated version will be used when contacts reach that step."
- "I've tested this with a test contact on my end - here's what I saw: ..."
- "Would you like me to add this customer to the workflow now so they get access right away?"
- "Just to confirm, are you referring to X or Y? I want to guide you correctly."
- "Before I close, is everything you came in with resolved?"

## [Sample A] Facts/gotchas
- Test Workflow button runs the workflow only; it doesn't test the form trigger (recvXTJXHmvjiim7A).
- Sticky contact on forms causes overwrites and skipped enrollments in testing (recvXTJXHmvjiim7A, recfzqfojdSo6w0xh).
- Payment Received trigger observed failing where Order Form Submission worked (recPM9gnpofg2316i).
- Two workflows with same trigger on same contact -> conflicting execution / skipped waits (recaxcR3EYjMb1I44).
- Appointment custom values empty unless the contact actually booked (recDWtuz5Lce3xfzE).
- Change Workflow Step restarts wait timer (recAS77I0A0G1Zdwk).
- Smart List exclusion filters apply only at enrollment (recm30o5oxJEFhHMO).
- Dedicated sending domain is location-wide, not per workflow/campaign (rec6eCxvHP4q1w1Eo).
- "Set default 404/Error Page" under a new subdomain is just a pending action, not a DNS error (rec7u7QSBcEuYUKKQ).
- Course drip settings: per-lesson/folder "Drip: N days" (recD6xxXuqRnIPbc5).
- Funnel subdomain path cannot be removed; change via new subdomain (rec5utYYOrpm37jZC).
- WhatsApp "Unknown user" = recipient hasn't saved the number; retest with a new contact (recqeggrQeHTOH2Vj).
- Bulk tag actions may sit at 0% processing briefly before starting (recxzn9d5v4oMVnyf).

<!-- sample B -->

## [Sample B] Recurring issues and proven fixes

### "My IG/FB comment-to-DM automation isn't sending DMs"
- Symptoms: keyword comment (e.g. "guide") on IG/FB post gets no DM; workflow is published and looks correct.
- Root cause: in the social integration settings, the toggle that allows workflows/automations to run on that account was off.
- Fix: 1) Confirm the comment workflow is Published. 2) Go to Settings > Integrations (Instagram/Facebook) and switch on the toggle that lets automations run on that account. 3) Comment the keyword from a second account to test.
- Escalate? No.
- Evidence: recaza9W7s2gcF8Ay, recnHdOmnDYYjbB5F

### "Facebook page doesn't show up in my comment workflow"
- Root cause: Facebook Business account not connected/synced.
- Fix: 1) Settings > Integrations > Connect Facebook and sign in. 2) Select the pages, click Update and continue. 3) Go back to the workflow trigger. If the user gets stuck on the permission screens, offer a screen-share call.
- Escalate? No.
- Evidence: recp2NM0sDjWZsckY

### "Confirmation/follow-up email never went out after form/purchase"
- Symptoms: test sign-up or purchase, but no email arrives. The email arrives when sent with the action's "test" button.
- Root causes: wrong or leftover trigger/filter (e.g. an old trigger still attached); the email lives in a separate tag-based workflow, and the tag gets added too late; the offer/program isn't selected in the trigger; the user's own test contact was already enrolled.
- Fix: 1) Ask for the workflow name and the test contact. 2) Open the workflow > Execution logs / Enrollment history and check whether the contact entered and which steps were skipped. 3) Check the trigger filters (form, product, program) and remove stale triggers. 4) Put the post-purchase emails in the workflow that fires on the purchase itself rather than relying on a tag from another workflow. 5) Run a test submission yourself and screenshot the email in Conversations.
- Escalate? Only if the logs show it ran but nothing was sent and you can reproduce it (see backend escalation).
- Evidence: recSo9xMrEEd0nObl, recpZd6wSm5k4icE7, recodkcCsaYTUG4qH, recHE8sh6k1COgt8h, recyeV4q0f6FjzwxF

### "How do I add contacts to a workflow manually / re-run people already tagged?"
- Fix (single/few): Contacts > select the contacts > "Trigger workflow" (Add to workflow) and pick the workflow. Fix (many, already tagged): build a Smart List filtered by the tag, select all, then add them to the workflow. Removing and re-adding the tag works too but is impractical at scale.
- To check whether someone is already in: open the workflow in edit mode > Execution logs (or Enrollment history).
- Escalate? No.
- Evidence: recFdXOQrlQuD113B, recDxGJsOJmC3q8gM, reclnqAHqdoFWNw68, recWBMGLQOEJR0cn5

### "Can a new lead start mid-sequence / on today's email instead of email 1?"
- Answer: No. Contacts always enter at the start. Options: add leads manually, or send the current emails as an email campaign/bulk send. For webinar reminders, use "Wait until specific date/time" with "Go to specific step" for late registrants, or the "skip all outbound communication" option so they still get tags/pipeline updates without old reminders.
- Evidence: recwjGVa94y601rXE, rec7en4MJMAuSK9J2

### "Stop the follow-up emails once they book / buy / reply"
- Fixes seen: 1) Add a goal or exit step (or a separate "appointment booked" workflow with a Remove from Workflow action) so booked contacts leave the nurture. 2) Build separate confirmation and cancellation workflows for purchases, subscriptions and bookings. A subscription change can re-fire a confirmation email. 3) Turn on "Stop on response" in the workflow Settings to remove contacts when they reply.
- Gotcha: a "Stop on response" test failed because the reply came from the base address while the email was sent to a "+test" alias. Re-test with a fresh address that isn't already enrolled.
- Evidence: recuGaqeLLY3KIFW7, recSCjYmESE4Iefp1, recP9AgXFO1S1vy22

### "Branch / trigger can't find my pipeline stage, form option or calendar"
- Root causes: the calendar is inactive; the form question/option name doesn't match after duplicating a workflow; the wrong pipeline is selected.
- Fix: Calendar: Settings > Calendars > three dots next to the calendar > Activate, then reopen the trigger. Form option: rename or update the form question/option so the new date shows up in the If/Else branch. Stage: choose the correct pipeline in the If/Else or trigger, then select the stage.
- Evidence: recRW5j0st9oo593s, rec5hIvoCRvjDebVV, recs92rxHMarRklzl

### "Workflow still uses old values / I can't update the field"
- Root cause: the custom fields still held the old options, so the trigger/condition couldn't match the new values.
- Fix: 1) Settings > Custom Fields, update the field's options (remove old, add new). 2) Refresh the workflow, reselect the values, then save and publish. 3) Tell the user to hard refresh, or close and reopen the tab. Stale tabs were a recurring reason "I still see the old value".
- Evidence: recvNJTgl3CdltqJd, recElq5z6xD8Vfxdt

### "It says the workflow is outdated and won't save/publish"
- Root cause: another tab or user saved a newer version.
- Fix: copy any unsaved changes, refresh, reopen from Automation > Workflows, reapply the changes and save. Use Version history (right side panel) to see which version is current.
- Evidence: reca0l5DzsJdNcMJo

### "Workflow stuck in View-Only / can't open the workflow"
- Case A: agency-built workflows are locked to the agency admin. The agent pointed the user to the agency admin team's email. Case B: the user had correct permissions (Admin role, Automation on, View & manage Workflows checked) but was stuck in View-Only. Fix: the team unchecked and re-checked the user's existing permissions to force a sync.
- Escalate? Yes for case B, to the admin team. The user had waited several days.
- Evidence: recwagguTQ8wTRgE0, recXUwycpfhKqRjyu

### "Workflow went missing after autosave"
- Fix: Automation > Workflows, search All Workflows, folders, Needs Review and Deleted (restorable within 30 days). Confirm it's the right sub-account. In this chat the agent found it and sent the direct link.
- Evidence: recfglY6vZZHrr2w0

### "Total Enrolled vs Active Enrolled doesn't add up"
- Total = everyone who has ever entered. Active = still in progress. Duplicating a workflow carries over the old stats and logs. For clean numbers, build a new workflow and check the dates in Execution logs.
- Evidence: rec70HuPQui7rhcYU

### "Mass reactivation without hitting messaging limits"
- Fix: in the workflow, click + and add the Drip action (set the batch size and interval) before the SMS action, or use Drip mode in Bulk Actions. The agent checked the account limit (5,000/day in that case). Send timing depends on when the workflow is published.
- Evidence: recewUiFTmEXtuIc8

### "Emails stopped / opt-ins get nothing" (Mailgun)
- Agent checked the SPF/DKIM/MX status in Mailgun and the sub-account. The domain was Active, so the problem was on Mailgun's side and the user was referred to Mailgun Support. We only support the CRM side.
- Evidence: reccvkpgx7oc5FDYQ

### "Internal notification only went to one of two users"
- Check that both users are active (Settings > My Staff), have email addresses, and are still selected in the action, then review the execution log. Each selected user gets a separate email. In this chat the user had miscounted.
- Evidence: recpPWm8Xrt2i8OYg

## [Sample B] Escalation and ticket patterns
- Backend/dev: an intermittent failure the agent can't reproduce (FB Lead Form tag not applied, a WhatsApp message not sent). The agent confirms the user's email and says "may take up to 48 hours… may be within 24 hours". (rec3vtk0JDkDfzgvi)
- A ticket number is emailed to the user after a GHL escalation (recDxGJsOJmC3q8gM). Stale View-Only permissions went to the admin team; the user chased an existing ticket for 5 days with no update before it was fixed (recXUwycpfhKqRjyu).
- Feature requests ("I'll pass this to the development team"): CSV export of execution logs, a general contact-activity trigger, a Last Activity Date field, and a larger font size in form submissions (recCGvuYZ8WEKP5rO, recxdfDkTL8cEZjrz, recr7dPhPSvp9m84n).
- Third-party vendor problem (Mailgun): refer the user to the vendor's support (reccvkpgx7oc5FDYQ).
- Complex builds or debugging go to a Google Meet call with the "call team", and the chat is closed (about 15 chats, e.g. recvLCUitYBZeN1rr, recyLM7fei6rbMeys, recTFNUSoJCGnpKry). A call was also offered when the agent didn't understand the issue (recHE8sh6k1COgt8h).

## [Sample B] What went wrong in low-CSAT chats
None of the 60 chats has a CSAT of 1-2. All are rated 5 or unrated. Weak moments that still hurt the experience:
- recHE8sh6k1COgt8h: the agent misread the problem and suggested duplicating the workflow and setting the original to draft. The user said "you are not understanding me". Only the video call clarified it.
- rec5hIvoCRvjDebVV, recCGvuYZ8WEKP5rO: keyboard garbage and a wrong-thread paste (Claude connector setup) were sent to the customer.
- recSsEnHlSiM8q28U: the first reply was a generic paragraph that didn't answer "which link gives course access". The user had to ask again.
- rectfdbwJcWyXCgmX: the agent said a workflow output placeholder "does not exist" while the user insisted it came from the Generate Marketing Audit Report action. Moved to a call (unverified which side was right).
- recXUwycpfhKqRjyu: an existing ticket went 5 days without an update. The user asked for "no changes without approval", and the reply about what had been changed was confusing.
- reclnqAHqdoFWNw68: the user waited about 6 minutes with no update after the greeting.

## [Sample B] Good reply phrasing worth reusing
- "Can you share the workflow name and the contact you tested with, so I can check the execution logs?"
- "Can I run a test on my end? It won't affect your live contacts."
- "The issue wasn't in the workflow itself, which was set up correctly. It was a setting on the integration, which I've turned on."
- "Here's a quick video. Take your time watching it, and I'm right here if you have questions."
- "I won't close the chat without your permission."
- "It can take up to 48 hours for the development team to respond, depending on the investigation. They may get back to you within 24 hours."
- "Each Wait step starts counting when the previous step finishes, not from when the workflow started."

## [Sample B] Facts/gotchas
- Wait steps are sequential, each counted from the previous step. A Wait at the top can hold the sequence until a specific date. The "Add new trigger" box can't be removed and doesn't affect anything (rectI9N8yTxlQozV1, recQwlsMT0XPJvOYG).
- The meeting location custom value resolves to the actual Zoom link. Appointment custom values pull from the appointment that triggered the workflow (rec0ceQPGYXoMeqQZ).
- Duplicated workflows inherit the original's enrollment stats and logs (rec70HuPQui7rhcYU).
- Execution logs have no CSV export (recCGvuYZ8WEKP5rO). There is no general "contact activity" trigger (recxdfDkTL8cEZjrz).
- Put the whole funnel in test mode to test payment workflows without real charges (recxdfDkTL8cEZjrz). Course access emails come from the default template under Client Portal > Settings > Email Settings, which is generic for all courses (recSsEnHlSiM8q28U).
- Email opens: Reporting > Emails > Email Statistics, or the workflow's execution history (recMIJ7p5OUxmMjgD).
- Signed and viewed documents appear in the Payments documents section and on the contact record. Put an SMS reminder right after Send Documents & Contracts (recqXW8B5pw9Zl8av).
- Form submissions are filtered by date range, so widen it to see all of them. Google Sheets is a premium workflow action (recr7dPhPSvp9m84n).
- Meta lead "call me" setup: Facebook Lead Form Submitted trigger > Internal Notification > Call action with a whisper message and "Connect Call After Keypress" on (recWvDDaCvKCeFwKR).
- Pipeline Stage Changed trigger: choose the pipeline and the target stage (recBm8va7qhkhLRX7).
- Opportunity owner and contact assigned user can be different people. Notifications to Contact Followers need the user added as a follower earlier in the workflow (recc466Jbzc7Lw5de).
- The AI bot claimed a "known outage" for a specific workflow, but the real cause was an integration toggle. Treat bot outage claims with caution (recnHdOmnDYYjbB5F).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 8,218 chats. CSAT average 4.74 from 2,009 ratings (95 rated 1-2). First-contact resolved: 1,111. Agent mentioned an escalation or ticket in 4%; moved to a video call in 17%.
- What users ask about most: workflows not firing or a contact not enrolled, trigger links, drip/email campaigns inside workflows, Instagram/Facebook comment-to-DM automations, wait steps and if/else logic.
- Dashboard paths agents gave most often: Automation > Workflows (44); Settings > Integrations (12); Automations > Workflows (9); Settings > Custom Fields (5); Settings > Integrations > Facebook (4); Sites > Forms (4); Sites > Funnels (4); Contacts > Smart Lists (4); Settings > Integrations > Facebook & Instagram (3); Payments > Products (3); Settings > Calendars (3); Automation > Workflows Open (3).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recvsMN56eGTdSSX6 (2026-09-29): "Hi there i have been disconnected to Zubaair" Agent: You will find that under tools and reportings > automations. | Can you click on this little button on the top and it will show you the recent one's that were worked on.
- recSqAPpw1Q404os9 (2026-09-24): "I am trying to set up Comment-trigger automations on both our FB/IG pages, but it won't allow me to do so. It says there are no social accounts, but I have added both. The pop-up m" Agent: Navigate to the settings> integrations. Connect your FB and IG business account and then it will works in workflow: | Oh, I see! That connection is currently set up for social media posting rather than workflows. To use those accounts within your workflows, you will need to connect both of them directly under Settings > Integrations .
- recvEO3ezrjxuQRnU (2026-09-23): "I am trying to set up automation." Agent: Please stay connected while I work on your request. In the meantime, could you create a form under Sites > Forms? Once it’s ready, please share the form link and prompt AI Studio to connect the form to your website. I’ll review a few automation settings and update you as I go. | Thank you! [name] can use any of these elements to let your clients se
- recp2NM0sDjWZsckY (2026-09-23): "Hello on my automation tab can you please help me delete 2 favebook comment automation and 1 facebook comment +AI, if I do it will it be ok?" Agent: First, you'll need to connect and sync your Facebook Business account. Just navigate to Settings > Integrations, click Connect Facebook, and sign in. Once it's connected, your pages will show up right there for you! | Would you like to hop on the google meet? It will allows you to share your screen and the issue will get resolved quickly!
- recRW5j0st9oo593s (2026-08-30): "I have a workflow called "Consultation Call reminders" and the module dosent see the calender." Agent: Gotcha! Daniel, please first make the calendar active and then it will show up in the calendar options within the workflow trigger | Go to Settings > Calendars, and on the right side of the calendar name, click on the three dots and activate the calendar
- recheSqbMYZw8bpWk (2026-08-25): "I was setting up The Next Move Journal as a digital product. The product is a PDF that customers will download after purchase. I followed the Loom instructions, but the media secti" Agent: Yes, it can work either way. After the payment, you can redirect the customer to a Thank You page with a button that allows them to download the product. Alternatively, you can use an automation to send them a thank-you email after their purchase, including the download link or any other relevant in | You can navigate to Media Storage> Click on thr
- rec94crKfqZoH8re3 (2026-08-21): "If a new person books a call with me or makes an offer purchase from a funnel page or completes a web form does a contact get created automatically (or updated), or do I need to se" Agent: If someone purchase anything from you or book a call, Their contact will automatically created in your account. | If someone books appointment their contact will be automatically created in your account and their appointments will be created under Calendar > Appointment list view.
- rec2X4c0rx8XIjnW5 (2026-08-16): "I've tried to connect my Shopify account to Rainflow to set up some automations but haven't been successful." Agent: Could you please try to disconnect it and connect it again and then run the order test | Navigate to the settings> integrations> click on the three dots> disconnect it then connect it again!
- recp53N7XCgksAEOV (2026-08-10): "do we have any newsletter tool here in mastermind?" Agent: We don’t have a separate newsletter tool, but you can set this up using Forms and Workflows. You can create a newsletter signup form by navigating to Sites > Forms . Then, create a workflow with the trigger Form Submitted and add a filter for the specific newsletter form. For the emails, you can use
- rec6CIoU4ESk8oZcx (2026-08-06): "what just happened to the workflow i created? It was saved, I tested it, now I'm unable to find it in my dashboard?" Agent: You can find it under Tools and Reporting> Automations> and click on the clock Recent icon to view the recent automation | We can view them all in the workflow. To find the most recently updated or created one, we suggest using the recent icon.
- recJATIfuXliuykjv (2026-07-30): "Where do I find my lead magnet workflow?" Agent: You can go under tools and reporting > automations and workflows.
- recLl5ImOchBMRcei (2026-07-02): "I need help to confirm my automation works with the funnel" Agent: It is on Sites > Forms > Click on the 3 dots besides the form you would like to edit. | Yeah! I put it on test mode a couple minutes ago, you can switch it back to live mode when you are ready to launch.
- recROQ5Eo9vSEkN0K (2026-05-30): "I need step-by-step instructions on how to deploy and monitor a workflow." Agent: Deploying the workflow: 1. Go to Automations > Workflows and open your workflow. Click the Publish / Draft toggle in the top-right corner to change it to Publish. Click the blue Save button in the very top-right corner. (It is now live and running). Monitoring the workflow: Look at the top menu bar  | Hi, I would like to transfer you to another spe
- rec4yAkEmCLOZzcKN (2026-05-29): "hi, im having trouble connecting my funnel and workflow" Agent: Could you please check under Settings > My Profile what is the email address that is in there? | I just tried filling out the form on your funnel and I have received the email successfully.
- rec6w5TKWeTkCtViS (2026-05-27): "Hi, I have set up a funnel, forms and automation and the automation isnt firing and im wondering what ive done wrong" Agent: You can put something like: You can access here: | Yeah, that is right, but you can disable the welcome email if you go to Memberships > client portal > Settings > Email settings > Courses

#### What went wrong in low-rated chats (user reviews)
- recaxcR3EYjMb1I44: "I'm not done getting help and he closed the chat. I can't ge tthe above information he just sent to me so I can fix that one step. We had other things to still be fixed. He wasted a lot of my time."
- rec0fgQrEgjLqzliF: "this doesnt really help. I just want to submit a ticket for support. How do i do that?"
- recpUw1pA0rNifIGk: "feel that Wealth really understands what he is doing. Unfortunately, I am a novice and I am sight impaired so that when he was moving the mouse to different locations I was unable to folliow him."
- recAqqFwh1uvNyD5P: "dropped call and no way to get back"
- recoIYkD16ekUKgR5: "Did not answer my question, said one moment and then never returned."
