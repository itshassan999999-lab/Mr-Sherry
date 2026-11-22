---
description: Proven fixes, escalation rules and reply phrasing for 'Calendars and appointments' guest-support chats, distilled from Modal Chats (Airtable).
---
# Calendars and appointments

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 412 chats fell in this topic; 63 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "My calendar shows no availability on certain days / slots missing"
- Symptoms: specific days blocked, "UNAVAILABLE — USER/BLOCKED" in troubleshooter, one calendar shows fewer slots than another for same user.
- Root causes: busy/block-off events on the connected Google Calendar (incl. a linked "public holidays" conflict calendar); stale Google connection; for Round Robin, one member's calendar not synced.
- Fix:
  1. Open the calendar's Troubleshoot view (`/v2/location/<id>/calendars/<calId>/troubleshoot`) and read the reason per slot.
  2. Check the user's Google Calendar for busy entries on that date; remove or mark free.
  3. Check Calendar Settings > Connections > conflict calendars (holiday calendar may be linked by default).
  4. If nothing visible: delete the Google connection and reconnect it, then retest the booking widget.
- Escalate? No.
- Evidence: recGokRYeJ2UudzxS, recuk56iNQzDY3euJ, recLz6BikXSsYNOGw, recxrwmiJGR8XY9Jk, reckWrIyDGwNv8mE5

### "Calendar only shows availability X weeks out / starts too late / can't book past two weeks"
- Root cause: Date range ("book up to N days/weeks out") and minimum scheduling notice in calendar availability.
- Fix: Calendars > Calendar Settings > edit calendar > Availability > adjust date range / minimum scheduling notice; save; retest in incognito.
- Escalate? No. Evidence: recjnpwkovBEuv5Hu, recHApPqCAhx34APZ, recF7TujzJyi6BNmi, recANqceV3RDgUiSB

### "Make calendar bookable only for specific dates (e.g. one month / one event day)"
- Fix: use date-specific hours in Availability AND mark all other days unavailable (otherwise regular weekly hours still show); set date range if needed. Agents sent Loom walkthroughs.
- Gotcha: visitor reported Save button greyed out in the date-specific editor; agent saved it for them (recdtiuf4inNTJMDG) (root cause unverified).
- Escalate? No. Evidence: recFoLKbxr1V3QYxj, recdtiuf4inNTJMDG, rec1ZsXv8XCUA4NzL, recANqceV3RDgUiSB

### "Appointments are booked outside my availability"
- Root causes: user Work Hours schedule only "Active on" some calendars, so others use default/open hours; no availability set for other dates; wrong timezone.
- Fix:
  1. Settings > Calendars > Availability: check days, hours, timezone.
  2. Open the Work Hours schedule's "Active on" calendars dropdown; tick the calendar taking bookings.
  3. Edit the calendar > Availability: confirm it uses the user availability schedule, not a custom one.
- Escalate? No. Evidence: recLpjRCCuez8S01J, recANqceV3RDgUiSB

### "Google/iCloud calendar won't connect or bookings don't sync to my phone"
- Symptoms: stuck on "Connecting" then "No connections found"; iCal just buffers and resets; booking not on phone calendar.
- Fix (bot + agent):
  1. Retry in an incognito window.
  2. Settings > My Profile > Calendar Settings (or Calendars > Calendar Settings > Connections): disconnect and reconnect.
  3. iCloud: Apple ID with 2FA + new app-specific password.
  4. Check linked calendar / sync settings in Calendar Configuration; confirm the right calendar is visible on the phone app.
- Escalate? Move to video call if still stuck (recemVCwGLtfAy7DD, recs54821Ww0Im2Kk). Evidence: recUxolzM3553FOsg, recemVCwGLtfAy7DD, recs54821Ww0Im2Kk, recp9ISZWo1h7BJNY

### "Contacts aren't getting reminder/confirmation emails"
- Root causes: appointment was made in Google Calendar (1-way sync) so no internal appointment existed and workflows never fired; email landed in spam/junk; notification not configured.
- Fix:
  1. Check the appointment exists in Calendars > Appointment List View; check workflow execution log.
  2. Book appointments inside the system (or use 2-way sync) so reminder workflows fire.
  3. For "not received": check the contact's conversation for the sent email, then spam folder; advise domain warm-up / dedicated sending domain.
  4. If calendar notification won't send, agent built a workflow (appointment trigger + Send Email / Internal Notification) as a workaround.
- Escalate? Yes if native notifications fail with correct config (ticket open, recLtHOV7WMXOkc04). Evidence: recL3YKI3kaJWMeIT, recMmuXL8P8sTHRpK, recLtHOV7WMXOkc04

### "My edits to confirmation/reminder emails don't save / wrong address shows"
- Root cause: workflows need two saves; reminders pulled from workflow, not just business profile/calendar.
- Fix: Automation > Workflows > open workflow > edit Email/SMS step > Save Action, then the blue Save button top-right. Update address in Business Profile, calendar meeting location AND workflow emails.
- Escalate? No. Evidence: recxZu1LRkvCDGqFD

### "Meeting/reschedule/cancel links in notification email aren't hyperlinks / placeholders not filling"
- Fix: in the calendar notification/email template, replace plain text placeholders like [Date] with actual custom values / appointment merge fields, then delete the placeholder text; hyperlink link text via the editor's link option. Agent fixed and sent Loom.
- Evidence: recLNNeFdluP8OJdk, recSKoTu5Yhufu0e2

### "Where do I add the Zoom/meeting link or a physical location?"
- Fix: Calendars > Calendar Settings > edit calendar > Meeting Details / Meeting Location; multiple locations allowed (address + Zoom). Selecting Google Meet as location auto-generates the link. Zoom connect: Settings > My Profile > Zoom.
- Evidence: rec9okeqBYbeROlZa, recRfWU4DHqy73i5D, recMwOJs402TXAR7j, recb2ttEzKLU1quhe

### "Where is my calendar link / how do I shorten or hyperlink it?"
- Fix: copy link from Calendars > Calendar Settings (share/copy link); for clean text, hyperlink it in the email builder; to shorten, add branded domain (Settings > Business Profile per bot) or embed calendar on a funnel page with short path. Copy failing = browser blocking clipboard/pop-ups; click "Allow".
- Evidence: recEv4sLIMqd7dkSV, reckWpFIdYil0Uz39, rec0Agw96Zh4MMhyh, rec1ZkPVxETF7OmIc, recuvOGZLXLApqKTH

### "Let clients pick between call types" / embed calendar on website
- Fix: keep separate calendars, then Calendars > Groups > create group, add both, share/embed the group link. Website: use Calendar element in site builder. Test in an incognito window with a test name/email.
- Evidence: recUfoqngfl1qAPak, recVn7lXhARLfW3eW

### "Can't add more attendees to class/group booking" / class times not on overview
- Facts: class booking calendar has no "add attendees" button (agent filed feature request); main calendar view shows only booked appointments, not empty class slots. Workaround suggested: round robin with self as only host (unverified).
- Escalate? Feature request to dev. Evidence: recqH8tkAB6L822tk, rec2oZNHX3tAlW7cx, recTnYihL8dhkMpHY

### "Team gets too many notifications" (form/appointment)
- Fix: calendar: Calendars > Calendar Settings > calendar > Notifications; form: form builder bell icon / workflow Internal Notification; choose "specific users" to select multiple recipients.
- Evidence: rec0Gb0tnT57Ewkob

### "Booking widget prompts are in English, need French"
- Fix: Calendar Settings > Preferences (language, Neo widget) and Settings > Business Profile > Platform Language.
- Evidence: recwlKbKrXycRNZmG

### "Pre-buffer missing"
- Bot first wrongly said Buffer Before exists, then said only Post Buffer present for that calendar type; resolved on video call. (unverified)
- Evidence: rechz3izdBrDSwhEF

### "Can't find hub expert / onboarding call scheduler"
- Hub Experts discontinued; agents share senior/enterprise booking link or open an admin ticket for onboarding call.
- Evidence: recVJxqrGZVeA75R9, recwhKkechNK3VHaX, receugr4SRz7elODC

## [Sample A] Escalation and ticket patterns
- Technical team escalation for broken integrations (LeadConnector not connecting, 404 on portal): "I'm going to escalate your concern directly to the technical team... We're going to get back to you via email." ETA: "As soon as we get an update." (recp9ISZWo1h7BJNY)
- Ticket for onboarding call: agent creates ticket, gives ticket number, admin follows up by email (receugr4SRz7elODC).
- Branded Onboarding questions routed to Branded Onboarding Team, chat converted to open ticket, business hours (rec8X7S5TrhjnfE1W).
- Notification bug follow-up: existing ticket plus workflow workaround (recLtHOV7WMXOkc04).
- Feature gaps: "I'll forward your request to our development team" (recqH8tkAB6L822tk).
- Video call: agent shares Meet link, closes chat "the call team will continue helping you"; if no slot, share enterprise booking calendar link.

## [Sample A] What went wrong in low-CSAT chats
- rec1ZsXv8XCUA4NzL (CSAT 1): 8-min first response, sent a generic reused Loom with no explanation, auto-closed after 8 min of silence.
- rec0oYUfJY9kH1cc1 (CSAT 2): user asked to confirm a cancellation source; agent claimed it was checked before actually checking (user: "I thought you did already"), then changed workflow settings without confirming, closed chat immediately ("left assuming no more help required").
- rectbr1HVU4xXQawL (CSAT 2): prior agent told user to book a call 6 days out and closed chat; this agent couldn't requeue, told user to come back later.
- recs54821Ww0Im2Kk (CSAT 1): iCal connection; Loom used the wrong link; user threatened to cancel subscription.
- recFj7XZ7NzDn9NRu (CSAT 1): 11-min wait for agent, then asked basic calendar name question late; user left.
- recFiayFQ5qlwWhOQ (CSAT 2): Loom fix "didn't work", no follow-up recorded.
- rec2oZNHX3tAlW7cx (CSAT 1): 3 hours across chats on class bookings; agent misunderstood which view user wanted; answer was "system can't do that".

## [Sample A] Good reply phrasing worth reusing
- "Can you confirm the calendar name and the date where the slot is missing? I'll run it through the troubleshooter."
- "The troubleshooter shows a busy block coming from your connected Google Calendar on that date; removing or marking it free will reopen the slots."
- "Workflows need two saves: Save Action on the step, then the blue Save button top-right."
- "Appointments created only in Google Calendar don't trigger reminder workflows; book them inside the calendar or enable 2-way sync."
- "Would you like to hop on a quick video call so we can screen-share and fix this faster?"
- "Keep them as separate calendars and put both in a Calendar Group so clients choose the call type first."

## [Sample A] Facts/gotchas
- Calendars nav in some white-labels: Your customers > Calendars; appointments in Appointment List View (recMngTGYDVIJyIbm, recdHDdy1ZIooLVWr).
- Connecting Google Calendar does not create booking calendars; must create one (recMwOJs402TXAR7j).
- Calendar types: Personal (one user), Round Robin (distributed), Class, Collective, Service, Event (recQjTo2rXZrxPH6e, recAW7NF1ualCBpHk).
- Date-specific hours don't hide regular weekly hours; set other days unavailable (recANqceV3RDgUiSB).
- No min scheduling notice = same-day booking allowed (recANqceV3RDgUiSB).
- Dedicated sending domain makes notification sender look "almost" like user's address (rec1FIvRfjbxmgL3E).
- Duplicate contact error when appointment contact existed but hidden; fixed backend (recPUoNDdFnUcZ9p4).
- Booking reminders all sending at once despite waits: explained via Loom of workflow history (rec8BfTnqkcNtYAXI, cause not stated).
- Hub Experts no longer offered on thehub.mastermind.com; onboarding scheduler removed from UI (receugr4SRz7elODC).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 5,963 chats. CSAT average 4.74 from 1,382 ratings (66 rated 1-2). First-contact resolved: 857. Agent mentioned an escalation or ticket in 4%; moved to a video call in 16%.
- What users ask about most: Google Calendar sync and conflicts, Zoom/Meet links on bookings, availability and time slots, time zones, round robin, calendar links and embeds.
- Dashboard paths agents gave most often: Settings > Calendars (33); Calendars > Settings (30); Settings > My Profile (19); Calendars > Calendar Settings (12); Settings > My Staff (9); Calendars > Appointments (8); Settings > Calendar (6); Settings > Integrations > Google & Business Profile (6); Settings > Conversation Ai (5); Sites > Funnels (4); Settings > Integrations (4); Settings > My Profile > Calendar Settings (4).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recb2cKJhTkEjLK1d (2026-09-07): "how do i add a custom location to a service calendar" Agent: Please navigate to Services > Location > Click on 3 dots and click edit and add your physical address. | You will need to click on New location to add a new physcial location
- recjiGULYqAl5K80o (2026-08-25): "Client want a notification every someone book an appointment" Agent: Hi [name], hope you are doing great! Yes, there is a way to do this without using any automations! You can set up the notification directly within the calendar settings. Here is how to set it up: Go to Settings > Calendars . Click Edit on the relevant calendar and select Advanced Settings . Navigate | Yes but Just a quick note, you will also want t
- reckOp794RlIMMyOl (2026-08-12): "One of my clinicians, Cheri Brownm gets an error message whrn signing in." Agent: You can navigate to Settings> My Staff | If you have her password and emails, you can login to her profile. Other than that, you can connect her calendar for her in Settings > Calendars > Connections > select Cheri and connect her calendar
- recTrS2a3ChOvApVP (2026-08-05): "Can I use a single link to send out 2 separate calenders?" Agent: To create a Group Calendar: Go to Settings > Calendars in your CRM. Click + Create Calendar and choose Group Calendar. Give your Group Calendar a name (for example, Appointment Booking ). Add your existing In-Person Appointment and Phone Appointment calendars to the group. Configure any additional s | You can find and edit Custom Values by going to
- receGc31FjzFdpN6j (2026-07-31): "why is this not showing the dates until October?https://link.pennynilsen.com/widget/bookings/think-bigger-friday-group-coac" Agent: Please take your time to watch it. No rush, I’m right here if you need anything while you’re watching! | Navigate to Settings > Calendars and then you can edit the text details in your calendar, [name].
- recY6NCJtQYMNL7z7 (2026-07-09): "i have gone through the onboarding but there were some steps that i dont think i completed in regards to setting up calendars. the instructions are gone and i need help going throu" Agent: I completely understand your concern, but unfortunately we do not have any trainings for calendar availability, if you are facing any problems regarding calendars please let me know so i can help you with it😊 | You can update the availability from here : Settings > Calendars
- recxqaQKUcQmtfDyT (2026-07-01): "I want to adjust my calendar connections, where do I do that?" Agent: You can navigate to Settings> Calendars> and Connections and review your google or outlook connection Carolina | Similarly, you will be able to view the interaction within my profile!
- rec9U2qhbF4R7apuk (2026-06-15): "I have set up calendars and they are meant to be linked to my Google calendar, but they are showing me as available when I have appointments booked in on my Google calendar." Agent: I don't see any booking showing up on the calendar from your google please try disconnecting your google integration and connecting it back. | You need to go to settings > calendars > connections.
- recwnoDrxVeRKrl7j (2026-06-12): "I am logged into Lead connector on my phone. Why is my calendar not showing up/" Agent: Let me share you the instruction for android Go to your phone's main Settings > Apps > LeadConnector. 2. Tap Storage and click both Clear Cache and Clear Data. 3. Log out or reinstall the app | Because your email address is the exact same, the LeadConnector app is recognizing your old login credentials first and automatically routing you to your hi
- recDFLKcuBbTxYREe (2026-06-08): "Sasha, I am having trouble connecting my calendar. There is a message that says, "Reconnect your integration." but when I click to reconnect there is a warning that says "It seems" Agent: Google Chrome (Desktop) Click the three vertical dots in the top-right corner. Hover over Clear browsing data (or go to Settings > Privacy and security > Clear browsing data). Choose a time range (e.g., "Last hour" or "All time"). Check the box next to "Cached images and files." (You can uncheck coo | [moved to a video call]
- recbUDCjEqFkmpgLG (2026-05-17): "i'm testing my calendar booking system and get this unknown sender email - Invitation from an unknown sender: AND The Agency Discovery Call with Anna @ Mon May 25, 2026 12pm - 12:3" Agent: This looks like a separate invitation from the 3rd party calendar, You may disable it In the calendar settings> Advanced Settings >Notifications & policies >Third party calendar settings | No worries you can come back later
- rec8ARqXe6F09OtHD (2026-05-11): "Hey, hope you're well! I have a funnel for the Heros Journey and can't remember if I added a form to ask about challenges they might be facing etc during the booking through the ca" Agent: Okay, [name]! You haven't added a form to the funnel yet. Instead, it leads to a pop-up for booking on the calendar. You can verify this by going to Marketing And Sales > Funnels and Pages > Funnels > The Hero's Journey to check the settings there. | It would be on the funnel, [name]! You will need to create a form in the form builder first. Then,
- reccQ5qVK1TDxCilf (2026-04-28): "I was testing my calendar appointment setting and successfully booked a test appointment. However, this message to confirm the appointment is wrong "Thank you for your appointment" Agent: To change this message, you will have to edit the message from here. Calendars > Calendar settings > Forms and Confirmation | I have changed the message here and its now fixed.
- recNTXJTgn4DbKbe6 (2026-04-27): "I need help to set up a Zoom group class offer in calendar and they can book and pay through the calendar." Agent: Gio to Settings > Calendar > New > Class booking | Amanda, on personel calendar you can only have 1 to 1 meetings, but in class booking you can have multiple users book for same slot.
- recKjOQGysVEgIgCx (2026-04-08): "How do I set up a simple registration page for an event? I don't need a complicated funnel, and the templates are way more involved than I need. I resorted to creating a class book" Agent: You can set this up in a simple way without using a calendar. Here’s what I’d recommend: 1. Create a Simple Event Form Instead of using a calendar, you can create a standard form: • Go to Sites > Forms > Builder and create a new form • Add fields like Name, Email, and Phone • In the Form Settings, s | 2. Add It to a One-Page Website • Go to Sites >

#### What went wrong in low-rated chats (user reviews)
- recii6T7KHbGRs1VB: "Qayyoum was polite and tried to help, but this chat took nearly an hour and my issue was not resolved. There was too much back and forth, long periods of silence, links did not work properly, and the"
- recEgJB4OqXguQZk1: "The problem was not solved by Loom, transcript, or any means"
- recFj7XZ7NzDn9NRu: "too long to answer - not expert's fault - system."
- rec2oZNHX3tAlW7cx: "Wasn't helpful. Took a very long time to tell me no the system can't do what it used to do and that hte settings have changed to make it very difficult for us to use. Wasted a lot of my time to end up"
- recduoQk59IvMQcuP: "It took a long time and after asking several ways for what i needed help with, they just weren't able to do it. Thought it was a pretty simple question. Frustrating to spend so much time and still not"
