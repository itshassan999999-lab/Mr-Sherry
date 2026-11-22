---
description: Proven fixes, escalation rules and reply phrasing for 'Email sending, deliverability and DND' guest-support chats, distilled from Modal Chats (Airtable).
---
# Email sending, deliverability and DND

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 1108 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

Note: about a third of this batch is off-topic (logins, social planner, workflows, AI Studio, funnels, billing). Only the email content is summarized below.

## [Sample A] Recurring issues and proven fixes

### "My emails are going to spam"
- Symptoms: campaign or bulk mail lands in spam. One user moving from Mailchimp saw about 80% in spam.
- Root causes: the dedicated domain was not fully verified (DNS/DMARC missing), the domain was new and not warmed up, large one-time blasts, or a backend glitch.
- Fix:
  1. Check Settings > Email Services > Dedicated Domain and IP and confirm every record shows Verified. Add DMARC if it is missing.
  2. If the records are verified, explain warm-up and send in batches that grow over time (e.g. 200, then 250, then 500 per hour).
  3. Build a smart list of engaged contacts (Contacts filter > Email Opened/Clicked in the last 30-60 days) and send the next campaigns only to that list.
  4. If the domain is fine and mail still goes to spam, the agent sends a test to themselves and escalates to the backend.
- Escalate: yes, when the domain is verified, warm-up was explained and spam continues (developer ticket).
- Evidence: recpFgn6nqVaRzb9i, recUn5rGsgScR3sUb, recXSvRFIGILdubsY, recDmiw8ChynjguZw, rec8rd6HD2XB4Hb7O

### "Recipient sees 'via ...' or a strange sender / it's not professional"
- Root cause: the From email domain does not match the dedicated sending subdomain, so the mailbox provider rewrites the header. In one case the sender appeared to be a personal Hotmail address.
- Fix:
  1. Set the From email to the same root domain as the sending subdomain (e.g. sending domain mail.example.com means From is name@example.com).
  2. Book a test appointment or send a test email and check the headers and folder.
- Escalate: no. The Hotmail case could not be reproduced and was treated as an auto-resolved bug.
- Evidence: rec71UevbwgrNJNGC, recJZUILaPDMs72Wo, rectNV8DlLeNgNBOe

### "Emails stopped sending / test email fails / 'Permanent lock ... policy violation'"
- Root causes: the account was on the shared or old SMTP and needed the LC email system plus a dedicated subdomain; the From email was not set; sending was suspended after a mass blast; a policy-violation lock.
- Fix:
  1. Enable LC Email, then create a subdomain from the user's own domain (Settings > Domains, e.g. mail.yourdomain.com) and use it for sending.
  2. Set the header: Settings > Email Services > Dedicated Domain and IP > three-dot menu > Edit (Set Header) > Sender Name and Sender Email on the root domain. Then send the test again.
  3. For a policy lock, the bot points to Settings > Business Profile > Email Verification. A lock that stays on every send needs backend review.
  4. After a mass-send suspension, check whether it has been lifted and send a test (it had been lifted already in recaPogCzoS30Fg9H).
- Escalate: yes, for a permanent policy lock (it went to a video call). Otherwise no.
- Evidence: recYQzqwHjcv8HF6H, recHSk0yNZLxEz9eb, rechS1qt4C4uWlWi8, recaPogCzoS30Fg9H, rec8rd6HD2XB4Hb7O

### "Contact says they didn't unsubscribe but shows DND / 'Cannot send message as DND is active for Email'"
- Root cause: the contact clicked unsubscribe (often by accident) or was marked DND. The CRM shows "DnD enabled by customer for Email".
- Fix:
  1. Explain that the system respects the contact's choice.
  2. Ask the contact to email the word "START" from the same address to opt back in.
  3. Reach the client through SMS, a phone call or personal email, using a short permission script (see phrasing below).
- Escalate: no. Hard cases went to a video call.
- Evidence: recvLLBBptLMBMGkL, recbKDdQqSDOZXdBh, recXb6WyBmV8vPYEP

### "Which From address do I use in bulk email / campaigns, and how do I make it default?"
- Fix:
  1. Copy the header email from Settings > Email Services > Dedicated Domain and IP and paste it into From.
  2. To make it the default: Settings > Email Services > Dedicated Domain and IP > Domain Configuration > choose Campaigns (and One-on-one conversations) > select the domain. New campaigns and Conversations then use it automatically.
  3. Action Name is an internal label. Subject is what recipients see.
- Escalate: no.
- Evidence: rec7FBCX4rXWUKJvw, rectju0nWerkso8wq, recohffJhgPSUr8ve

### "Setting up DNS for the dedicated domain (which host do I pick? TXT/CNAME/MX)"
- Fix:
  1. Copy each record from the dedicated domain setup screen into the DNS host (Bluehost, GoDaddy).
  2. In Bluehost, choose "Other Host" and enter only the prefix (e.g. reply or the DKIM selector._domainkey.reply), because the host appends the root domain.
  3. MX priority is 10. Watch for typos in the CNAME.
  4. Go back and click Verify.
  5. If the user cannot reach their DNS, record a Loom or move to a call.
- Escalate: no.
- Evidence: recdob8wnqT83nC0i, rec8rd6HD2XB4Hb7O, recDmiw8ChynjguZw, recpqDGRIkmlouLTV

### "Invalid email when adding a user/contact on the subdomain"
- Root cause: the user typed an address on the sending subdomain itself (e.g. name@mail.domain.com).
- Fix: use an address on the root domain (any prefix) or the person's real mailbox.
- Escalate: no.
- Evidence: recpqDGRIkmlouLTV, rec64Z8iFLNAsXHPx (the agent reproduced the error and sent an edit-contact Loom)

### "Can I buy/create a business inbox? What is 'Warmup in progress'?"
- Facts: the platform does not sell mailboxes. Users need Google Workspace, Microsoft 365, Zoho or similar, and connect them under Settings > Email Services. Warm-up limits volume at first to build sender reputation. Multiple subdomains or emails per domain are possible (agents sent the user to a call or booking link).
- Evidence: recwaX66WFjcmqbM3, recFItjmd7SGpQs0Q, recglL3Oh23TYaAsM

### "Mail I send to my generated business address doesn't show up / replies from Gmail don't appear"
- Fix:
  1. Explain that subdomain addresses are for sending and routing, not a full inbox.
  2. For Gmail two-way sync, BCC the system alias when replying from Gmail, then check Conversations > the contact.
  3. The bot also suggested clearing the Reply Address under Settings > Email Services > Reply & Forward Settings (unverified).
- Evidence: rec5GnlajbEQDIzjI, recglL3Oh23TYaAsM, recpqDGRIkmlouLTV

### "Test campaign says sent but not received"
- Fix: check the delivery status in Contacts > Bulk Actions or in the contact's Conversations. Ask the user to check the spam and promotions folders. Then recommend a dedicated domain over the generic shared SMTP.
- Evidence: recdS4KEJPV8mbprp, rechPzNt71CGYECfA

### "Only some contacts got the workflow email / contacts skipped"
- Fix: open Automation > Workflows > email action > Statistics or execution log. Look for contacts held at a wait step or outside the send window, DND contacts, or contacts that cannot re-enter because they are already in the workflow (remove them, then add them again).
- Evidence: rec2UDdysupfEQLTe, reckQUfj5TpatQaqu, recHSk0yNZLxEz9eb

### "Enable Email Verification ('Unable to enable... reach out to Agency Admin')"
- Fix: support enables or disables it per sub-account (Settings > Business Profile > General checkbox). The user cannot toggle it themselves.
- Escalate: support-level action, done in chat.
- Evidence: recJTp5Y9tZtbI0ne

### "Can I unsend a campaign that went out early?"
- Fix: it cannot be unsent. Show recipients in the campaign statistics (Loom), then send a "please disregard" note and reschedule.
- Evidence: recRkEB25OKZWCJEB

## [Sample A] Escalation and ticket patterns
- Escalated: persistent spam after the domain was verified (developers), a permanent policy-violation lock, staff invite emails not arriving, and new-account and admin requests.
- Agents say: "escalating to our admin team... you will receive an email with the update" and give a ticket number with "within 24 hours" (recqc50gV7PoKQlMJ).
- Many deliverability and DNS chats move to a Google Meet with a "senior expert". The chat is then closed once the user joins (recWCj73dYp6o94d6, recYnYHS8eniBySiH, recAseKTgbet2SRiW).
- Developer-side spam bugs had no ETA, and the user waited more than 10 days (recXSvRFIGILdubsY).

## [Sample A] What went wrong in low-CSAT chats
- recXSvRFIGILdubsY (CSAT 1): a spam issue was escalated to developers and stayed open more than 10 days. The agent repeated "nothing we can do" and refused a hand-off ("we all have the same scope").
- recUn5rGsgScR3sUb (CSAT 1): the user had been promised a 24h fix. The agent offered "send in batches" as the fix, the user rejected it, and the chat was closed for inactivity.
- recb8v5g9auMwIUAG (CSAT 1): the agent misread the request (which auto-notification to turn off), sent two Looms that missed the point, and offered a call only after 50 minutes.
- rec6tEztsHtN4lxoa (CSAT 1): the user had sent emails for 3 days with no reply. The agent opened another escalation, and the user had to push hard before getting a meet link.
- recUM7Ugl1gwQAaXo (CSAT 1): the agent closed the chat before confirming the work was done. An earlier "notify within an hour" promise was not kept.
- rec70EdAgEkJJELW8 (CSAT 1): the user asked which email address to send leads to. The bot and agent gave generic options and the chat closed for inactivity after 8 minutes.
- Also: an earlier chat told the user the spam issue was "fixed" when it was not, which led to a repeat contact (rec71UevbwgrNJNGC, CSAT 5 after a second fix).

## [Sample A] Good reply phrasing worth reusing
- "Your domain is verified; now it needs warm-up. Start with smaller batches and increase volume over the next sends."
- "Your From email needs to match your sending domain, e.g. if you send via mail.yourdomain.com use name@yourdomain.com."
- "This contact has Email DND enabled, so the system is respecting their preference. Ask them to reply START from the same address to opt back in."
- "Hi! Our system shows emails are paused for your profile (usually from an accidental unsubscribe). May I turn your email notifications back on?"
- "That alias is just a bridge. BCC it from Gmail and the email is logged in the contact's conversation."
- "It has already gone out. A short 'please disregard, the real one arrives on [date]' is the usual fix."
- "Would you like to hop on a quick call so our expert can see your screen?"

## [Sample A] Facts/gotchas
- Settings paths: Settings > Email Services > Dedicated Domain and IP (Edit, Set Header, Domain Configuration for Campaigns and One-on-one). Settings > Business Profile > General holds Email Verification. Settings > Domains is where subdomains are created.
- Email Verification can only be toggled by support/agency admin, not by the sub-account (recJTp5Y9tZtbI0ne).
- A dedicated domain must be verified. Without it, blasts can cause suspension or a policy-violation lock (rec8rd6HD2XB4Hb7O, rechS1qt4C4uWlWi8).
- A mass accidental send can trigger a temporary suspension, which is later lifted (recaPogCzoS30Fg9H).
- No native email inbox product, so third-party mailboxes are required (recwaX66WFjcmqbM3).
- Social token expiry: Meta and LinkedIn tokens last about 60 days (rectSVFeecXafX9Xs, off-topic).
- The "Boost Your Email Deliverability" pop-up in Email Services prompts dedicated domain setup (recH1Zr6eihYikvxj).
- Generic shared SMTP mail often lands in spam or promotions (recdS4KEJPV8mbprp).

<!-- sample B -->

Note: this batch is mixed. About a third is true deliverability/domain work; the rest is general email building, workflows and inbox questions. CSAT: no 1-2 scores; 4s = rec3qZ8pQfWddzbMI, rechlNyJLcikbSkKt, reclANpy0WRp08fW1, rectPu01lDPkL7d2x, recAJQyoLGgXQ8Df8.

## [Sample B] Recurring issues and proven fixes

### "My emails keep going to spam / junk"
- Symptoms: campaign or workflow emails land in junk; the user has no idea which domain they send from.
- Root cause: dedicated sending domain was created but never fully verified (DNS records missing at GoDaddy etc.). Content triggers also play a part.
- Fix:
  1. Check the account's sending domain: Settings > Email Services > Dedicated Domain and IP.
  2. If it is unverified, open the domain, copy the DNS records (SPF, DKIM, CNAME, MX, DMARC) and add them at the DNS host. The user needs DNS login; if they don't have it, send a Loom/Zight walkthrough to pass to whoever does.
  3. Click Verify after propagation.
  4. Content advice: avoid ALL CAPS, "!!!", phrases like "100% Free / Act Now / Guarantee", too many links or images, and link shorteners.
- Escalate? No.
- Evidence: recLIxrfZh2ap3Arm, recrAMRrWYTgiYYPp

### "DNS is perfect but Gmail still marks it spam, we want a dedicated IP"
- Symptoms: SPF/DKIM/DMARC all pass, Gmail says "similar to messages identified as spam"; headers show a shared Mailgun low-volume pool.
- Root cause: shared IP pool reputation, or the domain reputation has been damaged.
- Fix (advice given): warm up gradually; use drip mode (bulk actions or workflows) to avoid spikes; send consistently; stop emailing people who never engage; keep content short, include unsubscribe, no bit.ly; enable email validation; From address on the same organizational domain as the sending domain; keep DMARC. If the domain is warmed up but not eligible for a dedicated IP, set up a **new sending subdomain** instead of trying to repair the damaged one.
- Escalate? Dedicated-IP pricing/eligibility was not confirmed in chat (unverified).
- Evidence: recIagtWeLs4bA8pA

### "DKIM (smtp._domainkey) won't verify; the rest are verified"
- Symptoms: SPF, CNAME, MX, DMARC verified; the DKIM TXT record stays Not Verified for days.
- Root cause: host/value mismatch. Watch for the provider appending the domain twice, the wrong record type, or a value that doesn't match exactly.
- Fix: check the TXT host resolves exactly as smtp._domainkey.<domain> with the exact value; the agent corrected the setup and recorded a Loom; re-verified -> fixed.
- Escalate? No.
- Evidence: recHawLu3oJKplCRO

### "It said verified, now it says not verified" / "still no DMARC record found"
- Symptoms: domain status flips, or the campaign sender check still says no DMARC after the agent verified it.
- Root cause: propagation/cache delay on the user's side.
- Fix:
  1. Agent confirms status on their end (screenshot).
  2. User refreshes or clicks "Verify domain"; it can take ~60 sec to a few minutes.
  3. For campaigns: refresh and re-open/re-schedule the campaign so the new status loads. DMARC p=none does not cause rejections.
  4. User can cross-check at the DNS host (e.g. Cloudflare).
- Escalate? No.
- Evidence: recA5dKlFtcAjocL9, recuIm71xTRx1Ku7D

### "How do I change the sender name / from email?"
- Fix:
  1. Settings > Email Services > Dedicated Domain and IP.
  2. Open the domain (three dots / View Configuration) > Set Headers / Domain Configuration > edit From Name and From Email.
  3. There's no need to re-add the domain.
- Gotcha: one sender name per domain header, so you can't set a different sender per product; edit it each time or use another domain (agent's statement).
- "Sender mismatch" when setting a dedicated header with a normal business email -> handled on a screen-share call (fix not shown).
- Evidence: recBClWmSi0iBf10A, rec26nWTP7n5DzaHN, recgCSa8iARApsGxK, recA5dKlFtcAjocL9

### "Clients email my business address but I don't see it / where do replies go"
- Symptoms: inbound emails don't appear in Conversations; only known contacts come through.
- Root causes: a Reply Address set elsewhere; DNS (MX) recently changed and still propagating; the email subdomain differs from the address being used.
- Fix:
  1. Settings > Email Services > Reply & Forward Settings: clear the Reply Address if replies should land in Conversations, or set a Forwarding Address to send copies to a company inbox.
  2. Send a test from external Gmail/Outlook and check Conversations.
  3. If the domain is new, wait for propagation, then check MX records and inbound routing.
  4. If still stuck, offer a screen-share call.
- Escalate? No (handled by call).
- Evidence: recfDdZQu82pXLAdY, rectPu01lDPkL7d2x, recAJQyoLGgXQ8Df8, reclANpy0WRp08fW1

### "Test email won't send from my computer (works for my colleague)"
- Fix tried: agent checked the domain and asked for a retest; then a different browser or Incognito; then escalated to a screen-share call.
- Evidence: rec71eaZMJqL6oOY7

### "Contact unsubscribed and now can't be emailed after re-adding"
- Symptoms: error "this contact has unsubscribed".
- Root cause: the unsubscribe automation set DND (or the contact's DND carried over).
- Fix: open the contact and disable DND for Email (agent did it); send a test.
- Evidence: recTFKQj6Asn7xCXg

### "Spam emails creating contacts / spammers using my address"
- Fix: mark the spam contact as DND. Reassure the user that DND on one contact doesn't affect campaigns or the From address. Where the spam came via the platform's SMTP, the agent also flagged it to the backend.
- Evidence: recjGmZJabPwunjU7, recRpnLKSpbRh0N6p

### "Insufficient balance to perform email verification"
- Symptoms: the error persists after adding wallet funds.
- Fix: check the balance at Settings > Billing > Wallet and Transactions; retry in Incognito. If it still fails, it's a backend issue: escalate and follow up by email.
- Related: the "Verify Email Address when first email is sent to a new contact" toggle (Business Info > General) wouldn't stay on, so the agent enabled it from the backend.
- Escalate? Yes, when the balance shows but the error remains.
- Evidence: rechlNyJLcikbSkKt, rec8G6hky6hB6WnIb

### "Missing Add Service button in Email Services"
- Fix: the agent enabled the Services option in the account; the user refreshed and it appeared. Bot pre-steps: refresh, Incognito, zoom 80-90%, check user role permissions.
- Evidence: recgwRUzbadEbjzKb

### "Workflow email not sent / contact skipped"
- Causes: contact stuck at a wait step; contact already enrolled; re-entry off; filter not met; "Name" vs "name" in custom values (case matters, so the field came out blank).
- Fix: Automation > workflow > Enrollment/execution logs; select the contact and use the skip-wait icon next to trash; enable Allow Re-entry; fix the custom value case.
- Evidence: rec9MjBppYJbuzx1Q, recPBnA1PzO2lDL5h, recVVDvgoo014ju3S

### "Internal notification email not received"
- Fix: make sure the recipient is a staff user and use the Internal Notification action with type Email (Zight guide).
- Evidence: recDduBrXhmqw6jLI, recIKSkcb7KOdfeoW

### "Business email (Google Workspace) stopped working"
- Root cause: Google Workspace trial ended; this is outside the CRM (not LC Email).
- Fix: point the user to Google Admin Console billing / Google Support; once active, they can connect it via 2-way sync (My Profile under business profile).
- Evidence: recai1NxhTkpHXZ1L, recfWRi3iAgj0h8bE

### "Can I track opens / who clicked a download?"
- Fix: campaign Statistics; for a single email, use the three dots > Details on the message. For clicks, create a Trigger Link in the email and use Trigger Links > Analyze, or a workflow on link click.
- Evidence: recsB2ZdENYhrPovN, recOVzAxaIhih9oUa, recAaTZ5OvEjsLZ9R

## [Sample B] Escalation and ticket patterns
- Backend escalations: email-verification wallet error (rechlNyJLcikbSkKt), workflow stuck in view-only (recrcS07Lk8Y6UP7h), Nextech patient create error (recFQ67C8S5sau7z4), platform SMTP spam (recRpnLKSpbRh0N6p), business profile edit permissions (recAy3DR7Wreiu4Uu).
- Phrasing used: "not a result of any problem with your account... stemming from the back end... I will escalate"; "We will contact you via email once resolved"; agents collect the user's best email and give "#<ticket number>".
- Complex DNS, header or inbox problems are often moved to a Google Meet screen-share ("video expert"), and the chat is closed once the user joins.
- Agents can't edit Business Profile fields; this goes to the admin team by ticket (recAy3DR7Wreiu4Uu). In another case the agent unlocked the email field directly (recADyF65cHKtvE86).

## [Sample B] What went wrong in low-CSAT chats (CSAT 4, none lower)
- recAJQyoLGgXQ8Df8: the user said "The loom did not help"; the jargon ("subdomain differs... may not show") confused them; the agent changed something without saying what.
- rectPu01lDPkL7d2x: the user had been working for 8 hrs and asked for the Loom by email; the agent declined and closed for inactivity. The inbound test never confirmed.
- reclANpy0WRp08fW1: gave a propagation explanation without verifying MX, then closed for inactivity in about 10 minutes.
- rec3qZ8pQfWddzbMI: the Loom audio was low and tinny.
- rechlNyJLcikbSkKt: the bot ran the user through Incognito/wallet steps first, the wait for a human was long, and it ended in an escalation with no ETA.

## [Sample B] Good reply phrasing worth reusing
- "Your emails are routing to spam because your dedicated sending domain hasn't been fully verified yet; let's finish that now."
- "It's already showing as verified on my end. It should update on yours within a minute or a few minutes once DNS finishes propagating."
- "Marking that one contact as DND only affects that record; your campaigns and From address stay untouched."
- "This isn't caused by anything in your account. It's coming from the back end, so I'm escalating it and the team will update you by email."
- "Would you be open to a quick screen-share so we can set this up together in real time?"
- "Write your emails naturally, as if you were talking to a client face-to-face. Avoid all caps, lots of exclamation marks and pushy sales phrases."

## [Sample B] Facts/gotchas
- Sending domain, headers and From name: Settings > Email Services > Dedicated Domain and IP (three dots > View Configuration / Set Headers) (recBClWmSi0iBf10A, rec26nWTP7n5DzaHN).
- Inbound routing: Settings > Email Services > Reply & Forward Settings (rectPu01lDPkL7d2x, recfDdZQu82pXLAdY).
- Records shown for LC Email: SPF, DKIM TXT at smtp._domainkey, CNAME "email", MX mxa/mxb.mailgun.org, DMARC (recHawLu3oJKplCRO).
- Shared sending runs on Mailgun low-volume IP pools. A damaged domain is better replaced with a new subdomain (recIagtWeLs4bA8pA).
- DMARC p=none does not cause rejections (recA5dKlFtcAjocL9).
- Email verification costs wallet credit: Settings > Billing > Wallet and Transactions (rechlNyJLcikbSkKt).
- Custom values are case-sensitive: use "name", not "Name" (recVVDvgoo014ju3S).
- Smart Lists are evaluated at send time, not at scheduling time (recJMhj5LT7INluIL).
- To change a workflow email template, delete the Send Email action and re-add it; for multiple templates, use multiple actions (recCuF06zFC0XUa4r).
- Clone template: Marketing > Emails > Templates > three dots > Clone (recqTXFaDK6M6WwrZ).
- Edits to a template don't update an already-scheduled RSS campaign; they apply to the next campaign (recAaTZ5OvEjsLZ9R).
- Large files such as MP3s: upload to Media and link to them instead of attaching, to avoid spam filters (rec7QJI3Yjk7GB4iJ).
- Receipts: Payments > Settings > Receipts is global; to send per-product receipts, disable it and send from a workflow (recKQlT75CJvcbvFH).
- Inbox: Mark as read is under contacts > Actions (recPMyYhwJ0rH34oY). Emails "not received" were sometimes just sitting in the Promotions tab (receUrk4a1IvzVaMd).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 16,057 chats. CSAT average 4.74 from 4,265 ratings (182 rated 1-2). First-contact resolved: 2,148. Agent mentioned an escalation or ticket in 9%; moved to a video call in 12%.
- What users ask about most: changing the sender name/address (Set Headers on the dedicated domain), dedicated domain verification and DMARC errors, emails landing in spam/junk, campaigns and templates, sending test emails, reply/forward settings.
- Dashboard paths agents gave most often: Settings > Email Services (62); Settings > Email Services > Dedicated Domain (29); Settings > My Profile (27); Automation > Workflows (26); Settings > My Staff (19); Marketing > Emails > Templates (16); Settings > Business Profile (13); Settings > Custom Values (11); Automations > Workflows (10); Sites > Forms (9); Settings > Domains (8); Settings > Integrations (8).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recUiCHPtycXsaxmd (2026-10-20): "Hi [name], is it possible to change the email address used for this account for logins?" Agent: Yes, absolutely! You can change the email address you use to log in to your account by navigating to Settings > My Profile and updating your email address. | Please let me know if you've any questions!
- recEg6prlSX7QZldJ (2026-10-09): "Hi there, my email workflows have been restored and I tried to manually send these emails to this person who did not receive the emails from the workflow associated to the products" Agent: To enroll this contact into those two workflows so they receive the emails, here are the exact steps: Go to Automation > Workflows and open each workflow: Safe Use of AI in research - Access Research Crash Course - Post Purchase Automation In the workflow settings (top toolbar under Settings), ensur
- recYAUz8NXz5f5zls (2026-10-07): "I am trying to upload and send insurance info and the link show kathryn's corner how do i change that?" Agent: Here are the step-by-step guides you can follow to complete this. Update your global sender name by navigating to Settings > Business Profile and editing the Company Name field. Check your personal user settings under Settings > My Profile if the incorrect name only appears on manual emails. For aut | Since you've been inactive, I'll be closing the
- recyvDYLISBXwesj6 (2026-10-05): "How do I open up previous chats? I need to continue on with one." Agent: Hi [name]! Here are the answers to your questions regarding your email campaign setup: Set Headers Behavior: Yes, if you set global email headers under Settings > Email Services , it will override the "[name]" and "[name]" for outgoing emails unless a specific name/email is explicitly specifi | It is my pleasure, [name]! As I check, email verificat
- recXi48UJzY1siF63 (2026-10-02): "I have changed my business website to gentlehealingrevolution.com how do I create an email for this without losing my current email address for heartcore" Agent: You need to navigate to settings>email settings>dedicated domain and IP https://www.loom.com/i/10a8808f69a8496a99b7d49a5e6698d9 | Sure! take your time. Once you will click on add and verify>add records manually loom.com/i/752e52f52e4540e6b6cbbd[phone]
- rec2WfNFgVQTtb01i (2026-09-30): "where do i go to change the default email that is used to send aa contract" Agent: Thank you so much for your patience and understanding. Here is the complete step-by-step process to help you resolve this issue. Navigate to Marketing > Emails > Templates and click + New to create a fresh template. Design the email with your own custom subject line and message. Add a button or hype | Here is exactly where to find and customize the
- recG1CARGEmb2bIir (2026-09-26): "how do I set up an automation that sends emails at specific times" Agent: You can set that up by heading to Automations > Workflows, creating your workflow, and adding a Wait step set to "A specific date and time" or configuring an "[name]" to specify exact delivery hours before your Send Email action. | In the "wait" action, you can use "until a specific date and time" where you can set Sunday, 27th at 8 am before your
- recWxgZrNDzkAeozh (2026-09-24): "How do I connect and create submission form to follow up emails?" Agent: I'd be happy to help you with this. First, don't worry it is absolutely not too late! Even if your speaker form is already created, you can easily connect it to follow-up emails. We do this using Workflows . You'll just need to go to Automations > Workflows, set your trigger to 'Form Submitted' (sel | Please take your time to watch it. No rush, I’m
- recZka42X42nH35W6 (2026-09-22): "where can i see if an email has been read?" Agent: Go to Conversations > Select Contact > On the email thread, click the three dots > Select "Details" > From there you'll see the status of the email | Go to Settings > Email Services > Email Analytics
- recqTXFaDK6M6WwrZ (2026-09-16): "I need to create a copy of an email template I just made for automation I am working on and can't see how to do that" Agent: You can navigate to Marketing & Pages > Email and Social Media > Email > Templates, and click on the three dots for a specific template to clone it, [name]. i'll share a screenshot as well | Since you've gone inactive, I'll be closing the chat, A possible solution to your concern has been provided above. Feel free to reach out if you need further a
- recrAMRrWYTgiYYPp (2026-09-16): "I need help with my email the keep sending to junk mail" Agent: Your emails are currently routing to the spam folder because your dedicated email sending domain has not yet been fully verified. To resolve this, please navigate to Settings > Email Services > Dedicated Domain and IP . Click the three dots next to your domain and select Verify Domain . This will ge | Please go to Settings -> Email services and set
- rec4My4r4F8vxPouG (2026-09-15): "I'm creating an "application" form for my BA Business boss and I want to create the auto responder why does it matter if "form submission as a PDF"? And how /where do I get their r" Agent: I can definitely clear all of this up for you! To keep it simple: The 'PDF' option just attaches a printable document of their answers to the email. You can find all their responses later under Forms > Submissions . | Form submission as a PDF: This is totally optional! It simply attaches a neat PDF document containing all of the applicant's answers
- recs0pElJyafx9RcL (2026-09-15): "Hi, I want to know how can I plan an email in which I exclude from the list all my contacts with a certain label. How can I do this?" Agent: Could you please elaborate a bit more on what’s happening? If possible, sharing screenshots or a Loom recording would really help me understand this accurately. | You can now either select all the filtered contacts and click the Send Email bulk action icon at the top, or head over to Marketing > Emails > Campaigns and select your newly created Smar
- recQZwQQZXufsrYQz (2026-09-14): "Thank you [name], If I haven't created an email for this how would I then create an email for the Conquer workflow please?" Agent: Once the email is created under Settings > Email Services, the workflow will use that domain as the default domain and you don't need to set domains anywhere. All you have to do is create one sub-domain, and that will be your dedicated and professional email domain. Please let me know if that helps  | Understood, Allow me a moment to record a step
- recB003dpjM9mRo6C (2026-09-11): "hello! how do a send a user another email to login for the first time?" Agent: Do i have the permission to login to your account and guide you on this? | Please navigate to Settings > My Staff, then click the pencil icon next to the staff member. Under User Information, click Verification Email. Once you click it, a verification email will be sent to the user.

#### What went wrong in low-rated chats (user reviews)
- rech75KVydzdIEDp1: "PROBLEM NOT RESOLVED!!!!!!"
- rec81ANs267wlqNfG: "I gave the name of the contact and waited, but nothing was done and my question still not answered."
- recMxRJTtWKz4dyOB: "The issue is not resolved, and there is no way to contact somebody who can help.  directly. We don't have access to our account, or any help or instructions oh what to do with our membership."
- recoCnSYUiTWC9Xjv: "I waited 30 minutes and received no person to speak to. My issue still is a problem but I do not have all day to wait"
- rec5tOEbi5lm4PXVh: "The agent was MIA after a while so I had to leave."
