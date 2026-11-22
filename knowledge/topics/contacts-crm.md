---
description: Proven fixes, escalation rules and reply phrasing for 'Contacts, imports, tags and smart lists' guest-support chats, distilled from Modal Chats (Airtable).
---
# Contacts, imports, tags and smart lists

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 439 chats fell in this topic; 59 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

Note: many transcripts are middle-trimmed. Batch also contains off-topic chats (snapshots, domains, phone/Twilio, sites, payments) routed here by tags.

## [Sample A] Recurring issues and proven fixes

### "It says the contact already exists but I can't find it"
- Symptoms: Add Contact fails with duplicate warning; search by email returns nothing.
- Root cause: contact already exists matched by PHONE (e.g. auto-created from an inbound call), or exists under a different search term.
- Fix: 1. Contacts > search by phone number as well as email. 2. Clear filters / check Assigned-data-only view. 3. Check deleted contacts (Contacts > three dots > Restore). 4. Update the existing record instead of creating a new one.
- Escalate? No.
- Evidence: recDNWBgX6bmoYYCW, recFcguMZSlV1J8IP

### "Booking an appointment creates a new duplicate contact every time"
- Root cause: duplicate-contact setting allowed duplicates.
- Fix: 1. Settings > Business Profile > Allow Duplicate Contact. 2. Turn it OFF (agent did it with permission). Existing dupes must be merged manually.
- Escalate? No.
- Evidence: recoJ7flDMq36c9yV, recDNWBgX6bmoYYCW (bot mention)

### "How do I restore a deleted contact?"
- Fix: 1. Contacts tab > three-dots menu > Restore contact. 2. Search the restore list (name may be blank if it was cleared before deletion).
- Evidence: recVbBxsT5pic4tQ6

### "My CSV import won't proceed / leads won't import"
- Symptoms: "Map all required fields..." error; can't skip unmapped columns; new users unsure how to import purchased lead lists.
- Root causes: some rows mapped to the Opportunity object instead of Contact (Opportunity mapping requires pipeline fields); custom fields not created beforehand.
- Fix: 1. Contacts > Import (Smart Lists > Import). 2. Upload CSV. 3. In mapping, set every row's object dropdown to Contact unless you intend to create opportunities. 4. Create custom fields first if needed (Settings > Custom Fields). 5. On final step, type a tag in the Tags box to tag the whole batch. 6. Optional "Create a Smart List for imported contacts" — not required. 7. Wait a few minutes; imports can lag.
- Escalate? No; if it still fails, agent asked for the CSV to a test email.
- Evidence: rec13fGUEkQ2vcwZ6, recvYFbw41sNPb7fG, recD6Ye8Sliao2RU7, rectyXSkgLKziYMui, recQWP0ORDuJ87dJz

### "I exported contacts but where is the file?"
- Root cause: export runs as a bulk action; file is not auto-downloaded.
- Fix: 1. Contacts > Bulk Actions. 2. Find the Export job. 3. Click the download icon (under the Statistics column). Export by tag: filter by tag first, then export (loom shown).
- Evidence: recABeeIUPmIEN82y, recbvRRkwIrPhk2e5, reccUbbQfY3yQsNq1

### "Smart List filters keep disappearing / contacts not showing in list"
- Symptoms: saved filters vanish; contacts with tags don't appear; "unsaved changes" banner after editing a contact.
- Root causes: multiple tags put in ONE filter condition (needs each tag as separate filter/OR); leftover Import Batch filter; stale page state; genuine persistence bug in one case.
- Fix: 1. Open the list > filters; add each tag as its own condition. 2. Remove unintended filters (e.g. Import batch). 3. Refresh the page while on the specific list tab (not "All"). 4. Contacts in multiple lists is expected when they match multiple filters — adjust filters/tags.
- Escalate? Yes, if saved filters disappear repeatedly — escalated to backend, updates via email.
- Evidence: recUhjelqLnCgH1vK, recyILEdqeDOws3nO, rec303rc8lUv0wbuQ, recDjd6M1l3FwHTdy

### "How do I edit a contact's email / phone? Can't text, only email shows"
- Root causes: numbers stored in custom phone fields (work/mobile/guardian) instead of the native Phone field; SMS/email channel needs the native field.
- Fix: 1. Contacts > open contact > All fields. 2. Enter number in the default Phone field (not custom fields). 3. Keep custom number fields only if forms/surveys use them.
- Evidence: rectnnVedXr9vMXQY, rechEgCSMTYeKOw5J, recEWyskhOSoiC2Qj

### "Add contact button only creates a Smart List"
- Root cause: UI differs from onboarding video; "+ Add" on Smart Lists creates a list.
- Fix: Contacts > click the person-with-plus icon in the upper-right corner to add a single contact.
- Evidence: recKStRHGy1MJclEx

### "Can I export custom fields / custom values?"
- Answer: no direct text/CSV export; only way to move them is via snapshot. Logged as product feedback.
- Evidence: recWhJXA4I26gZehN

### "Custom Fields missing from Settings / redirect to Business Profile"
- Fix: cache/incognito didn't help; agent fixed on backend ("glitch") and options reappeared.
- Escalate? Yes, if cache/incognito fails — agent/admin backend fix.
- Evidence: rectan6xcC1kLXZVb

### "Split a shared (husband/wife) contact without losing history"
- Fix: 1. Keep original record intact (history stays there); rename to one person. 2. Create new contact via + icon for the second person. 3. Add their email/phone and re-apply tags manually. No native split; don't use Merge.
- Evidence: recuVvHX86zb4NWXC

### "Associations / partner name on opportunity card"
- Fix: Settings > Objects > Create Association (e.g. Partner/Buyer); add from contact's Associations section. Opportunity card shows primary contact only — put partner name in a custom field / opportunity field via workflow Create Opportunity action (user got this working).
- Evidence: recs76KO5RTVrTVcp, recqil1gmqQOBYhIF

### "Contact registered/created but didn't get workflow (draft/no trigger)"
- Fix: 1. Publish the workflow. 2. Open contact > Add to Automation / Trigger Automation > pick workflow. 3. Workflows without a trigger only accept manual enrollment. CRC accounts: import leads in Credit Repair Cloud first so lead type/tags apply before sync.
- Evidence: rec2CAl8Wjl7YzHfI, recOwCWXD8ElAf52n, recqil1gmqQOBYhIF

### "Opportunity 'Updated On' doesn't change"
- Answer: only changes when opportunity fields change, not on contact activity/notes. Use a Smart List with columns Assigned To / Last Activity sorted to audit.
- Evidence: recL9dLgMN4QSJfFJ

### "Snapshot import request"
- Fix: agent imports snapshot share link into the sub-account (confirm account name), ~2-3 minutes; ask user to refresh.
- Evidence: recT7olqJX7TEeAGL, recEbaBu5eF3DiKiW

### "Need a phone number / Twilio not available (non-US country)"
- Root cause: Phone System "requires configuration"; only admin team can enable Twilio. Permission error once resolved on retry.
- Escalate? Yes — ticket to Admin team, updates via email.
- Evidence: recGiD5rRALlA5SwB, rec3dKvkDxhTNZoK8

## [Sample A] Escalation and ticket patterns
- Escalated: Smart List filter persistence (recDjd6M1l3FwHTdy), preference-category limit of 5 (recKdFqzmdnUEzFF7, dev team, email follow-up), app support URL not accepted (recCTdeCyJDAqzp7d), URL redirects restricted at plan level (recHm8yfCfxW6rWXv, ticket id given), Twilio enablement (recGiD5rRALlA5SwB), agency-to-agency data transfer / relationship number (recWtfWUSDsbjrocP, admin team).
- Agents collect the user's email and say updates come by email; sometimes provide a ticket ID.
- Phrasing: "I've escalated this to the right team... I'll close this chat here, but the issue is not being dropped." / "I've marked it as a priority and included all your details, so you won't need to explain it again."
- Hands-on users or repeated failures: offer Google Meet video call or one-time booking link with seniors (reckoGcRaNJrSXWNo, recnCq4eS9gPxPCei, recNXWX1yxiUnnL8Q). Same-day call wait can be 2-3 hours (recEWyskhOSoiC2Qj).
- Billing/plan questions (app creation $79/mo) redirected to billing team by email (recU1qfzNwCLNAtUt).

## [Sample A] What went wrong in low-CSAT chats
- recKStRHGy1MJclEx (CSAT 1): bot gave a path matching the outdated onboarding video; human asked an obvious clarifier ("in your account right?") and offered a loom after the user already solved it.
- recia81pfiGU9rvr2 (CSAT 1): recurring invoice contact change forces resend; agent repeated video instructions user had already followed, didn't address autopay concern, then closed for inactivity.
- recB8VB96ngkNa2Yj (CSAT 1): content flagged as violating terms; agent first said contact not found then "never mind, found it", gave no answer, used empathy lines the user felt spoke for their emotions; escalated to supervisor call too late.
- recABeeIUPmIEN82y (CSAT 1, product complaint): export download hidden; agent said "hard coded and we cannot modify" instead of logging feedback.
- recyILEdqeDOws3nO (CSAT 4): 50 minutes of clarifying questions before suggesting a page refresh.
- rectlYoAqNYCg0qJg (CSAT 4): user bounced between chat and "tech" email; no ownership taken.
- recWhJXA4I26gZehN: 25 min to answer "no export available" (user noted delay despite 5).

## [Sample A] Good reply phrasing worth reusing
- "Keeping the original record intact is the safest way to preserve the conversation history."
- "I've cross-checked the contact number, and there are currently two contacts present in the system."
- "This option isn't tied to your user role; it's restricted at the plan level, so only our admin team can enable it."
- "I know how convenient that would be. Direct export isn't available right now, so I've logged it as product feedback."
- "Would you like to hop on a quick video call so we can get this sorted out faster?"
- "We do not make any changes to your account without your consent."

## [Sample A] Facts/gotchas
- Inbound calls auto-create contacts by phone; duplicate checks match phone too (recDNWBgX6bmoYYCW).
- Allow Duplicate Contact lives in Settings > Business Profile (recoJ7flDMq36c9yV).
- Export file: Contacts > Bulk Actions > download icon under Statistics (recABeeIUPmIEN82y).
- Import mapping rows set to Opportunity trigger required-field errors (rec13fGUEkQ2vcwZ6).
- Smart List: multiple tags in one filter condition breaks results; add separately (recUhjelqLnCgH1vK). Smart-list-based scheduled email picks recipients at send time (rec6lRPidcjgOzPEj).
- Custom fields/values cannot be exported except via snapshot (recWhJXA4I26gZehN).
- Preference management hub limited to 5 categories in one account despite docs — escalated (recKdFqzmdnUEzFF7).
- Opportunity "Updated On" ignores contact activity (recL9dLgMN4QSJfFJ).
- Contact appears in client-portal dropdown only after they get login/access (recnrbxkuFbgf7kAW).
- No import of Keap automations; rebuild manually or with AI builder (rec6vNH28LIeLp0Yl).
- Recurring invoice edits require resend to save (recia81pfiGU9rvr2).
- Parallax "full center" background not supported on iOS (recXKWj15O5GcKxem).
- First name in emails: use the first-name custom value instead of full name in email builder (recwe9XCCZfAUQAtu).
- Form submission notification recipients: Sites > Forms > form settings toggle (recRnRAJlkO24U7Yj).
- A contact email mix-up between two cards was called a "system glitch" (unverified) (recjxVJ8E6iTU1hzX).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 6,640 chats. CSAT average 4.74 from 1,577 ratings (73 rated 1-2). First-contact resolved: 886. Agent mentioned an escalation or ticket in 7%; moved to a video call in 10%.
- What users ask about most: smart lists and filters, custom fields, CSV imports and import errors, bulk actions and tags, exporting contacts.
- Dashboard paths agents gave most often: Contacts > Smart Lists (19); Settings > Custom Fields (19); Automation > Workflows (13); Settings > My Staff (9); Settings > Tags (8); Sites > Forms (7); Settings > Business Profile (6); Contacts > Bulk Actions (4); Automations > Workflows (3); Contacts > Restore (3); Settings > Custom Values (3); Settings > Phone Numbers (3).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- rec4p5wEK9HXYdfj5 (2026-10-20): "how can i delete an internal comment someone else made on a clients contact conversations" Agent: You can stop the notifications under settings > my profile > notifications. | If you have been tagged, you will receive a notification. Please note that once you have been tagged, we are unable to delete the internal notifications from the conversations.
- rec4vIh8PgvaERwgr (2026-10-09): "I built a quiz a couple of weeks ago. I can't remember how I added tags to each result. can you tell me where I can find that?" Agent: Got it! [name] is how to assign the tags based on the quiz results using your draft workflow ( Which Script Quiz Automation ): Step 1: Set up the Workflow Trigger Go to Automations > Workflows and open Which Script Quiz Automation . Click Add New Trigger and select Survey Submitted (or Form Submitted  | Hey [name], do you have the availability to j
- rec3HBVYKzM5z743c (2026-10-06): "I did not ger resolution from my issue with my VA having permission to assign a tag in for a contact. I sent two screen shots of the error message, and the permissions are set as p" Agent: Here's where you can find the settings | Settings > My Staff > Select the User > Roles and Permissions > Search for "Tags"
- recuwA1Z5n2u5kp68 (2026-09-29): "how can I merge 2 contacts, keeping the most recent activity as the main contact" Agent: Got it, >Go to Contacts > Smart Lists (or Contacts). >Select the two duplicate contacts by checking the boxes next to their names. >Click the Merge Contacts icon (two overlapping circles) in the top action toolbar. >In the merge window, compare both contact records side-by-side. >Under Select Primar
- recdPrboXwgX0BN4g (2026-09-29): "i would like to ask if where to find this template ?" Agent: It is the Market&Sales> Email & Social Media > Email in there you can simply type 1. x Business Lead Magnet - Confirmation-copy and you will the template there. | You’re very welcome! 😊 I’m glad I could assist you today.
- recntQqbF2gLyft7z (2026-09-28): "Hi, the system notified of a new contact but there is no message in the conversations window." Agent: You can simply head to the site then form in there you will have the open the form Contact Us | Website Form in there head to the notification and turn on the Email notification to get notify once a user fill a form. | You can see the form submission with the conversion with going to the Sites>forms>submission.
- recnCq4eS9gPxPCei (2026-09-20): "Hi. I am trying to download the CSV file and can't do so" Agent: Got it. For you to do that, you will just need to go to "[name]" > Click on "Upload" from the top right > Hit "[name]" > Select the specific file, then hit "Open". | Here's the loom that I recorded for you: loom.com/share/fab9b72588d24d359b0b9a614f3b5f41 Yup! Let me just generate a one-time link for you to book a call with one of our seniors.
- rechEgCSMTYeKOw5J (2026-09-11): "How do I edit a Contact's email address in the Smart list?" Agent: You can navigate to Your customers > Contacts , open up the specific contact in a smart list, and then change the email address of the contact, Helga | I'll also create a loom for you
- recgurfVOWapFe4I7 (2026-09-09): "On Sept 6, I submitted ticket #[phone]. I need this immediately resolved today. I have not seen any actual attempt to resolve this issue. I need it resolved early today! I am prepa" Agent: You can turn them off in Settings > My Profile > Notifications, as well as in the app. These messages are sent whenever a conversation is initiated within the system | The option to receive all messages initiated within the account is turned on, so you can turn them off as shown in the screenshot
- recVbBxsT5pic4tQ6 (2026-09-09): "Hi, how can I recover a contact "[name]"? I don't see it in my "all" list." Agent: I understand you'd like to recover a contact within the system, You can navigate to contacts tab> click on three dots and restore contact | Ofcourse, That's like on my bucket list to visit someday, hopefully haha
- recO5U491IpivdOx3 (2026-08-19): "help me set up a new smart list in my contacts. i have a form for a waitlist that i want separated in my contacts so that when they fill that specific form out i know they were con" Agent: Perfect! [name] for confirming. To save you time and make this really clear, I am pulling up your account and will look into this! and let you know if i have more questions! | Go to settings>click custom fields>choose any tag whatever you want.
- recgfk5WMHXebDoLy (2026-08-11): "Hi, I have another question. For the "Monetary" field type in Custom Fields, is it possible to change the currency symbol from $ (USD) to Rupiah (Rp/IDR)?" Agent: Allow me a moment to pull up your account in the meantime could you please elaborate on what you are trying to achieve so i can assist you better with it😊 | You can change the currency from here : By going to Settings > Business profile
- rec1d1stbPvKPuecS (2026-08-04): "How do i change my response to a contact submission? How do i set the submission up in the right list?" Agent: You can find it under contacts > smart lists > all. | You can easily download all the submissions from sites > forms > submission.
- recLgKqzSIFU93FNl (2026-08-04): "How can I add a contact on my smart list?" Agent: 1.Find the Contact: Step 1. Go to Contacts > Contacts and search for the contact's name or email address. Click on their name to open their profile. 2.Add the Filter Criteria (Tag/Field): Step 2. Check what filter your Smart List is looking for (e.g., a specific tag like Newsletter or a custom field | Navigate to the settings> tags> click on create
- rec6QvePHwncuw31e (2026-07-24): "i need to create a tag. where in the hub do i do taht?" Agent: Navigate to the settings> scroll down and click on Tags from the left menu> click on create tag on the right top!

#### What went wrong in low-rated chats (user reviews)
- recfesounC60rHMv6: "Support told me to contact Thomas Beighley to resolve my issue and he said he no longer works with Appreciation Financial."
- recb8v5g9auMwIUAG: "it took 50minutes of waiting and still no solution. when you make simple things hard it makes me regret choosing the hub for my business"
- rechGkEyIc1EvXpr4: "yeah you never came on or helped me whatsoever"
- recABeeIUPmIEN82y: "my one star is for elements of the unintuitive poorly annotated system rather than Abdurs helpfulness"
- recwaDbObe2YPElbM: "The agent ultimately identified and escalated one integration bug, which I appreciated. However, I initially reported several issues, and the chat was closed after addressing only one of them without"
