---
description: Proven fixes, escalation rules and reply phrasing for 'Memberships, courses and client portal' guest-support chats, distilled from Modal Chats (Airtable).
---
# Memberships, courses and client portal

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 595 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "My course is published but not visible / the link says Page Not Found"
- Symptoms: course not showing in the portal or library; offer or checkout link goes to "Page Not Found"; link opens the wrong (free intro) offer.
- Root causes: the offer is in Draft or no offer is linked to the course; the user drafted an offer that the agent had published earlier.
- Fix:
  1. Memberships > Courses > Offers: confirm an offer exists for the course and the course is under Add Products.
  2. Set the offer to Published. A published offer is only seen by people who get the link.
  3. Refresh the portal and retest.
- Escalate: no.
- Evidence: recMV90RiWaqtGmfc, recpasp1RC6AvYdBW, recTvbt0VJzfGZkWk

### "How do I hide a course I'm not ready to launch?"
- Fix: set the course or offer to Draft (agents showed this in a Loom). Note that lesson customization needs the lesson published (see below). One workaround: keep the course published but attach no offer yet.
- Escalate: no. A feature request is an option.
- Evidence: rec8o1CdEdYelGB3w, reck96ErobCKsaeRv, recN2v7VUxE5kYOfd

### "Customize Lesson gives a 500 server error / I can't edit the lesson"
- Root cause: the lesson or its module is in Draft, so the customization builder can't load its preview.
- Fix:
  1. Memberships > Courses > Products > course: publish the lesson and its parent module.
  2. Retry Customize > Lesson.
  3. To keep the course hidden, leave it published with no offer attached.
- Escalate: submit a feature request if they need to edit drafts.
- Evidence: recN2v7VUxE5kYOfd

### "Neo Classic template is Active but members still see the old/default course page"
- Root causes: the Lesson page inside the Neo Classic theme was never customized; browser cache. 2 of 6 courses still showed the default page after Save (outcome unclear).
- Fix:
  1. Memberships > Courses > product > Customize: activate Neo Classic.
  2. Customize the Lesson page of the theme too, not only the course page.
  3. Test in Incognito and clear the cache.
- Escalate: if specific courses still ignore the active template after this (unverified whether it was escalated).
- Evidence: recTZ6lW6CAPrwDoA, recAuwWLlpyFOQuMy

### "How do I add more lessons / reorder lessons?"
- Fix:
  1. Open the course > + Add Content (bottom-left of the sidebar, or the + next to Course Contents) > Add Lesson.
  2. To reorder, hover a lesson, then click and drag it to the new position.
- Escalate: no.
- Evidence: recexHR98blRODA1X, recBvI8ZflrGjD28S, recfnbTdr4TBCkdff

### "Give course access / Grant course access in workflow shows no courses"
- Root cause: the user picked a newly introduced workflow action that was still under testing.
- Fix:
  1. In the workflow, use the action "Course grant offer" instead.
  2. Select the course or offer from the dropdown.
  3. Turn on the automatic offer access emails if members need login emails.
- Manual access: Contacts > open contact > Actions (left panel) > Client Portal dropdown > select course. The member gets a set-password email.
- Escalate: no.
- Evidence: recKKOgWQmezBp4tr, recb19KpPzHm81rga, recFAwXne0RKjmYgM

### "Admin can't click Mark as Complete / I want to see what members see"
- Root cause: admins can't complete lessons in preview.
- Fix: grant yourself course access through the contact's Actions (as above), set a password from the email, and log in to the portal as a member.
- Evidence: recb19KpPzHm81rga, reccv86HHWB3Qi841

### "Course + community bundling / private channel course"
- Symptoms: course added to a community became free for all members; the user wants buyers of the course to also get the community; a course sits in a private channel.
- Fix: agents walked through it by Loom (offer includes the course, and community access is tied to the purchase). Exact steps are not in the text (unverified).
- Evidence: recqC150xQQpW4Ux1, recbPskPDHfBIPOSQ, recX79wexi2aNlANQ

### "Course lesson content is blank on desktop but shows on mobile"
- Fix:
  1. Test in Incognito and in another browser.
  2. The agent assigned the course to a test contact and confirmed the content loads (Continue learning).
  3. The user was told to restart or clear local caches.
- Escalate: only if it reproduces on the agent's test contact.
- Evidence: recFAwXne0RKjmYgM

### "Lessons are unlocked after migration; anyone can open any module"
- Fix: the agent sent a Loom on the lock/drip settings without written steps. The chat was rated CSAT 1 because it was closed without waiting for a reply (unverified fix).
- Evidence: rec63gRKjk2pnB6RA

### "Certificates: auto-generate with name, date, CE hours; share to Instagram is broken"
- Fix: Memberships > Certificates > Create Certificate. Use dynamic fields (student name, completion date, custom field such as license number) and add static text and images (logo, signature). No code is needed.
- Bug: the certificate "Share to Instagram" button goes to an Instagram "sharer" page (bad URL template). WhatsApp worked.
- Escalate: yes, the share bug went to the backend team with an email follow-up.
- Evidence: recRkAdyDTXitaCAG, recXbCbuxvEg9rJe7

### "Course videos blurry / can't download my videos / wrong subtitle language"
- Blurry: the user said the media pipeline re-encodes uploads, and an unlisted YouTube import worked as a workaround. Agents asked for the original file in Media Storage for review. The bot said the course limit is 5GB per video and MP4 is preferred (unverified).
- Download: members can't download course videos. Owners get the originals from Media Storage. If the video was embedded from Vimeo or Drive, download it from that source.
- Subtitles in Welsh: the fix was given by Loom only (unverified).
- Evidence: rec1qyXEDYBpwMp7M, recOTQKV32jrDc5Ie, rec6g4pei2UhUtsnF

### "Course checkout: change receipt text, offer description, shipping address, seat limit"
- Receipt email text: Payments > Settings > receipt/invoice template, edit "Add notes/terms". There's no preview there.
- Offer page wording: edit the offer description (shown by Loom).
- Shipping address on a digital course: set in the order form settings (Loom). The user said this didn't help, CSAT 4 (unverified).
- Seat limit or countdown: no native countdown. It was logged as a feature request.
- Evidence: recg0fKXOgFvfezzS, recPvUNWxbDDVV7mc, recaMxNb46jY2ng8H, reckCDmjr0fDKYk1U

### "Too many offers on my course; how do I remove courses from an offer?"
- Fix:
  1. Courses > Offers > open the offer.
  2. Scroll to Add Products, click the X on the unwanted course tag, then Save.
  3. To delete whole offers, click the three dots on the Offers list > Delete or Deactivate.
- The user's screenshot showed no three-dot menu, so the bot's steps did not match the UI (CSAT 1).
- Evidence: recUcih8JdN3eDMsV

### "Community: rename, pin post, @everyone email, About-page autoplay, settings"
- Rename: log into the community > Settings > change the name.
- Pin a post: click the three dots on the post > Pin/Featured.
- @everyone didn't email: tick the email notification option ("New post from followed user") and re-post.
- About-page video autoplay: there's no toggle. Use an image thumbnail with a link instead.
- Event payments and group settings: the agent enrolled as a test member and asked for admin access. Group domain: add the subdomain in the Client Portal domain settings, then add the generated DNS record at the DNS host (e.g. Cloudflare). It applies to everything in the Client Portal.
- Evidence: recPB9UuD5sveVYU0, recAdVwavrkXUgmfX, recesgxEZnMag5Kbc, recfM1PcEE9eswwdy

### "New Client Portal: do I need to update custom code? Courses missing in preview"
- If no custom CSS/JS was added to the old portal, ignore the warning and enable the new design.
- Portal structure is fixed. CSS changes the look only. You can't manually reorder course cards, only use the available sort options.
- Logo in the wrong spot: Sites > Client Portal > Settings > Branding (remove, save, re-upload, test in Incognito).
- Evidence: recVgweQmcqrlKOpX, recAuwWLlpyFOQuMy, rechPINCPoqiZhdWK, recb19KpPzHm81rga

### "Survey/workbook inside a course that emails the learner their answers"
- Fix: surveys aren't a course module (they live under Marketing > Funnels & Pages). Embed or link the survey in a lesson. Quiz and Assignment only report back to the owner.
- Evidence: recsUnGsiIMLyKM7B

### "Free preview lesson, then buy the rest" / "Deliver a free ebook on signup"
- Preview: shown by Loom (rec8Q7nDr5GxuLGDD; steps not in the text).
- Ebook: workflow with Trigger = Form Submitted > Action = Send Email that links the PDF uploaded to Media Storage.
- Evidence: rec8Q7nDr5GxuLGDD, reck96ErobCKsaeRv

## [Sample A] Escalation and ticket patterns
- Backend: a course disappeared after Stripe setup and empty template products appeared (the agent told the user not to delete anything and to wait for an email update) (recQ79vmyKItwn6dx). Certificate share bug (recXbCbuxvEg9rJe7). Wi-Fi/firewall portal access was "actively being addressed by dev" with no ETA (recXqHU0vWkeztSX0).
- Admin team: "You are not authorized to access this scope" on a Launchpad/program login (rec8ZpJjYMuw8bFwb). Account merge or snapshot transfer (recxRMMs3miC83gF5).
- Billing email: "No active subscription" or renewals, account pause or hold, referrals and affiliate credit (recweNnUGJPQmsMaJ, recZ5o1Omy6QlgcKB, recUdmfkVPRk6MEtj, recIHgvp00ioWssoG).
- Video call (Google Meet) for complex setup: the agent posts a link and closes the chat once the user joins. If no video agent is free, they share a booking link.
- Phrasing: "I'll escalate this to our backend team and keep you updated via email." Users complain that past escalations "disappeared" (recXbCbuxvEg9rJe7, recweNnUGJPQmsMaJ), so give a concrete follow-up commitment.

## [Sample A] What went wrong in low-CSAT chats
- rec63gRKjk2pnB6RA (1): sent a Loom and closed within 2 minutes without confirming the fix worked.
- recTvbt0VJzfGZkWk (1): a repeat issue (third attempt) got a generic greeting and a link request, then the chat was closed for inactivity. The agent didn't check the account's offers proactively.
- recUcih8JdN3eDMsV (1): bot and agent gave UI steps (three-dot menu) that didn't exist on the user's screen. The agent kept repeating them instead of screen-sharing.
- recM33XCCpw0ms1BV (1): wrong welcome emails and workflow enrollment, slow log review, then pushed to a call. The user said the agent "doesn't know what he's talking about".
- rechCNRHomiLflSyX (2): "No courses found" in the Vault. The agent said "my access is limited" and redirected to an email address without diagnosing anything.
- rec8ZpJjYMuw8bFwb (2): waited about an hour for a video agent, then got a booking link for almost a week out.
- recIHgvp00ioWssoG (2): long clarification loop about an affiliate question that should have gone to admin right away.
- recaMxNb46jY2ng8H (4): Loom pointed to settings that were already correct, and nobody verified.

## [Sample A] Good reply phrasing worth reusing
- "To save you time and make this clear, I'm pulling up your account now."
- "I'm creating a quick Loom to walk you through it step by step."
- "They won't see it unless you share the link with them."
- "I can see the same thing on my end, so I'm escalating this to our backend team. Please don't delete anything until I email you an update."
- "Would you be open to a quick screen-share call so we can work through it together?"
- "Could you test in an Incognito window? Cached pages often show the old version."

## [Sample A] Facts/gotchas
- Lesson customization requires the lesson and module to be published (recN2v7VUxE5kYOfd).
- Neo Classic needs both the course page and the Lesson page customized. Cache can mask the change (recTZ6lW6CAPrwDoA).
- Use the "Course grant offer" workflow action. The newer grant-access action showed an empty dropdown while it was in testing (recKKOgWQmezBp4tr).
- Admins can't Mark as Complete. Test as a member contact (recb19KpPzHm81rga).
- Comment visibility on lessons: Public means all students. User Only/Instructor means only the student and the instructor (recjzmtlholrXE4OZ).
- QR codes: Marketing > Funnels and Pages > QR Codes, usable for course and community URLs (rec6g4pei2UhUtsnF).
- Memberships sits in the left menu under Websites & Funnels. Scroll down to find it (recoKiSmurIDgCdV6).
- Refunds: Payments > Transactions > three dots > Refund. Gateway fees are a question for the gateway (recXqHU0vWkeztSX0).
- The branded app has an in-app Delete Account option. Admins can also delete the contact or revoke portal access (recAfoMKvfCIjrIVR, agent claim, unverified).
- Account merge: no one-click merge. A snapshot moves structure (courses, funnels, workflows, forms), not contacts, conversations, integrations, domains or users (recxRMMs3miC83gF5).

<!-- sample B -->

Note: most chats are from thehub.mastermind.com ("Mastermind"/"Business Hub"), plus growthhub365, digitalproductscreatorsplatform, fgfunnels, rainflow.ai, tekmatix, firestarterfunnels, thegsdsoftware, creditrepaircloud. Several transcripts are trimmed in the middle ("...[middle trimmed]...").

## [Sample B] Recurring issues and proven fixes

### "Memberships / Courses doesn't show in my sidebar, can you enable it?"
- Symptoms: the user can't find Memberships > Courses. The Client Portal dropdown shows, but Courses doesn't.
- Root cause: the feature isn't turned on for the sub-account.
- Fix:
  1. The agent enabled Memberships/Courses for the sub-account from the agency side and recorded a Loom.
  2. Ask the user to refresh the page. The menu appeared after the refresh.
- Escalate? No. The agent enables it in chat.
- Evidence: rech1cKJmg39sh1RW, recVUsLuoj3OunWHd, rec0tVKiLl7EZzhEU (AI Studio enabled the same way)

### "Edit checkout says page not found / error" on an offer
- Symptoms: clicking Edit Checkout on an offer gives "page not found" or an error. It still fails in incognito.
- Root cause: the offer is still in Draft, not published.
- Fix:
  1. Go to Memberships > Offers and publish each offer.
  2. Reopen Edit Checkout. The page then loads.
- Escalate? No.
- Evidence: recqORHiFLjHJYIdz, recuRoWeAea6MHkcR

### "How do I set up payment plans or let people pay for the course?"
- Symptoms: the user wants to charge for a course, for example in full, as 2 payments or as 3 payments.
- Root cause: no payment provider is connected, or the user is unsure about the offer setup.
- Fix:
  1. Connect Stripe or PayPal under Payments > Integrations.
  2. Create one offer per price option under Memberships > Offers, each granting the same course. Recurring offers have a fixed number of payments.
  3. Publish each offer and check it under Edit Checkout.
  4. Make a test purchase with a test contact.
- Escalate? No.
- Evidence: recJsWNDXWs4KeDJf, recuRoWeAea6MHkcR, recJyucmzfip7jnqn

### "How do I give someone free access without a coupon?"
- Fix A (manual):
  1. Open the contact.
  2. Use Actions to grant access to the course or community. The agent sent a Zight clip.
- Fix B: send a free offer link. A Loom showed how to send the offer link (recwTWRf37QuTneJo).
- Fix C: make a 100% coupon under Payments > Coupons, then turn on the coupon toggle on the sales page or order form.
- Evidence: recTecgD1zxM4DQ4O, recwTWRf37QuTneJo, recKamCj6KGCQBPQv

### "How do I make a free course available online?"
- Fix, in 3 core steps:
  1. Package the course in a Free Offer.
  2. Create an access page or opt-in form.
  3. Build a workflow that grants course access when the form is submitted.
- Escalate? No.
- Evidence: recKrsub0CuTGguyT, recEjhuMMSeCM5fqn (Plug N Play "lead magnet for existing business" option)

### "Lock lessons until the previous one is finished / release content monthly"
- Fix:
  1. Use the course's sequential lock setting (the agent sent a Zight walkthrough), or use Drip mode with a timer, such as one month per section.
  2. For instalment plans, build a workflow that revokes course access when a payment is cancelled. One agent built it and saved it in the user's account.
- Evidence: reckNNyi4XGCccEJH, recNd3Cm0EzekSWdh, rec1ryEgeQ5oT2dzR

### "Where do I see who is in my course, and their progress?"
- Fix: a Loom showed the course members list and each member's lesson progress. Form answers are under Sites/Funnels > Forms > Submissions, where the user can expand a submission.
- Evidence: rec8JZxnnokBHVYCZ, rec2j1i23fUepiJA7, recTecgD1zxM4DQ4O

### "My customer got in but sees no content" / course not delivered after purchase
- Symptoms: the buyer's login works, but the course looks empty. Or the course isn't sent after an order.
- Fix:
  1. Ask for the course name and the buyer's contact.
  2. Test from the backend and fix the access settings on the offer or contact. In one chat the agent reset the client's login (exact setting not stated).
  3. When the cause isn't clear, move to a Google Meet screen share.
- Escalate? Move to a live call when the user has tested for days without success.
- Evidence: recFRmswh7GlM2Ezh, recAuUhegLwtfYlT9

### "My community / Plug N Play funnel doesn't appear"
- Symptoms: a community the user created can't be found under Communities.
- Fix:
  1. Check Memberships > Communities > Groups. Funnels are under Sites > Funnels.
  2. Open the account in an incognito or private window (on Mac Safari: Cmd+Shift+N). If it appears there, clear the browser cache.
  3. If the Plug N Play didn't build its assets because snapshots are missing, it's a backend issue. Tell the user to email the admin team (24-48h, no firm ETA).
- Evidence: recWNlHkeks0uV2hy, recCN4rTzhUxBcNHp

### "Can members cancel and keep access until the end of the paid period?"
- Answer: not natively. Access ends when the subscription is cancelled or the period ends, and there's no setting to delay cut-off. Agents logged it as a feature request and built workflows as a workaround (the details are trimmed).
- Evidence: recbaz2T77XaFNCt6

### Switching a member from PayPal to Stripe without losing access
- Fix:
  1. Check the contact's payments. If there's only a one-time payment, a new link won't affect community access.
  2. Send a new Stripe payment link (Payments > Payment Links).
  3. The user cancels the old subscription in PayPal.
- Evidence: recVfCj0qGmYhiFPO

### "Several offers or options on one checkout page"
- Fix:
  1. Go to Sites > Funnels, open the funnel step, and add each product on its Products tab.
  2. Or use an order bump or upsell for the extra option.
  3. A course can also be sold through a payment link (Payments section). Make a QR code for it under Sites > QR Codes.
- Evidence: recyHC3DHbHSKKC22, recvIMI45XygdOEns, rec7qTyStLcHWP6hf

### Digital PDF as an order bump with a custom email
- Fix:
  1. Attach the PDF to the product. It's then sent automatically.
  2. For a custom email instead, don't attach the PDF to the product. Build a workflow with the "Order Submitted" trigger, filtered by that product, and a Send Email action that carries the PDF.
- Evidence: recMG9Kca01g5h49U

### Course content edits: banner, thumbnail, folders, credentials, captions
- Banner and thumbnail: Loom walkthrough. A thumbnail is the preview image on the course catalog page (recQSXUMEX2YW6U4y, recf7DblyAguXLQgi).
- A lesson "disappeared" after being moved to a folder: the agent found it hadn't moved. Retry the move (rec2680dFq3NYKwdJ).
- Completion credential: add it with Add Content inside the course, and drag it to reorder (recTKCxzLwW555A1y).
- Auto captions showing: open the lesson video's CC option and delete the captions. Or host the video on YouTube and paste its iframe code via Embed Media in the lesson (rec25Ak5JQdYCKNOT).
- Low video volume: this can't be boosted in-app. Use an external tool such as Kapwing (free) or Clipchamp (recyrEiR1s7luDezR).

### New Client Portal preview / custom CSS warning
- Fix: open Preview. The warning only matters if custom CSS or JS is set in Client Portal branding, and an agent can confirm whether any is set. Click "I've previewed and I'm ready to enable".
- Evidence: rec0q9fdnHMYZ2OkI, rec5tWvK2RG76yArp

## [Sample B] Escalation and ticket patterns
- Billing and business requests (pausing a membership, an offer worksheet) go to the billing team's email. Phrasing: "we handle tech support here" (rec56VkCmRdDvlMNU, rec0tVKiLl7EZzhEU).
- Policy and legal questions (BAA/HIPAA) get a plain "not offered, no timeline" (recnwJEoAx2R7Upqx).
- Backend problems, such as Plug N Play snapshots missing: the user emails the admin team. Phrasing: "I don't want to give you an inaccurate timeframe... 24 to 48 hours" (recCN4rTzhUxBcNHp).
- Complex or slow-typing users get a Google Meet link, and the chat closes once they join. Users who are busy get a booking link for a senior or enterprise slot (recBeFkmcnxpTfgdo, recSgWroADrYJJhgY, recsCzBIFYIt07WqZ).
- Feature gaps (exporting a course, a cookie settings link, keeping access after cancelling) get "passed to the dev team as feedback" (recCjlkMzXDqVFfbq, recoea8lSC2LqyuxT, recbaz2T77XaFNCt6).

## [Sample B] What went wrong in low-CSAT chats
No chat in this batch scored CSAT 1-2. The lowest score was 4 (recwTWRf37QuTneJo, where two agent greetings were posted and the user went silent). Risky practices seen:
- recFRmswh7GlM2Ezh: the agent pasted a client's login password in plain chat. Use a reset email instead.
- rec2ocbkiO7GMYvgl: the agent misread the request ("awesome you already have two courses set up") when the user had none in the platform.
- recrG2XzoOG1EIFf7: the GoKollab vs Hub explanation was vague and repeated. The user said "I still don't get the benefit".
- recCjlkMzXDqVFfbq: the agent claimed "passed to back-end, you will see it in upcoming updates", which overpromises.
- rec7ZvSxb7EKN6qpS: the agent asked for a 5-star rating before the issue was resolved.

## [Sample B] Good reply phrasing worth reusing
- "All the offers are currently in draft mode. Please publish them so they can be live and work."
- "Could you please try opening your account in an incognito window? I'll check on my end in the meantime."
- "I don't want to give you an inaccurate timeframe, but the team should have an update after reviewing it."
- "We handle tech support here; the billing team can process that request for you."
- "I'll record a quick Loom walking you through it step by step."
- "I recommend testing one lesson first before updating the rest of the course."

## [Sample B] Facts/gotchas
- Offers must be published, or Edit Checkout errors out (recqORHiFLjHJYIdz, recuRoWeAea6MHkcR).
- URL paths are case-sensitive: /ELEVATE redirected home, /elevate worked. Time-based redirects aren't native, so swap the button link manually on the date (recoG1ZM6sxCqatfa).
- A course preview link (Memberships > Courses > Products > course > Preview/Share) can't be used to register. Registration needs an offer link, payment link or funnel form (recfpGIM1mBH61fPu).
- One membership login gives access to every course granted to that member (recBn7XqRPKX4J770).
- An unmarked graded assignment keeps the course below 100%, so the certificate isn't issued until an assessor marks it. Certificates go out automatically on completion and can't be turned off (recUwtm5YI9ROCNHT).
- Content-release emails can only be tested with a test payment, not by granting access manually. A cloned course kept the old course's name in its automatic release emails (recKamCj6KGCQBPQv).
- Stripe BNPL options (Klarna, Afterpay, Affirm) only show when the checkout is eligible (country, currency, one-time vs recurring). Enable them under Payments > Integrations > Stripe > Manage Payment Methods (recvIMI45XygdOEns).
- Store: a course product can be assigned to a category under Payments > Products. Collections only show on the store Home page. Amazon products can't be categorised (recWrMr6LkNtO0JdC).
- Cookie Consent has no permanent "cookie settings" link for withdrawing consent (recoea8lSC2LqyuxT).
- No bulk export of courses. Media Storage links open videos but aren't guaranteed as embeddable MP4s (recCjlkMzXDqVFfbq).
- Gated content that a copied URL can't bypass needs Client Portal or Communities login. Plain funnel pages can't enforce it (recGvxTZVhloVIdOk).
- To rename a product, edit the product under Products. Synced Stripe products appear in the catalog, so there's no need to paste a Stripe URL into an offer (recJyucmzfip7jnqn).
- Mastermind's course navigation path is quoted as "Your Products > Courses > Products" (rec1ryEgeQ5oT2dzR, rec2680dFq3NYKwdJ).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 5,985 chats. CSAT average 4.75 from 1,940 ratings (84 rated 1-2). First-contact resolved: 1,047. Agent mentioned an escalation or ticket in 6%; moved to a video call in 12%.
- What users ask about most: client portal setup and access (the largest sub-topic), giving or removing course access, communities/groups, offers and pricing, cancelling memberships.
- Dashboard paths agents gave most often: Memberships > Offers (16); Memberships > Courses (16); Payments > Products (10); Automation > Workflows (8); Memberships > Communities (8); Memberships > Courses > Products (7); Memberships > Products (5); Sites > Funnels (5); Memberships > Courses > Offers (5); Memberships > Communities > Groups (5); Courses > Products (4); Settings > Domains (4).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- rec6g4pei2UhUtsnF (2026-10-19): "Hi there, the videos that have been uploaded to my course are showing subtitles in Welsh!! Please can this be turned off of changed to English as a default?" Agent: Marketing and Sales> Funnels and Pages> QR Codes and you can create one for your course | The system shall mark the chat as resolved, please respond to the message below
- recZZd2lCT7yjbV0p (2026-10-15): "I want to offer a free offer and connect it with an opt-in form and automation so that subscribers automatically join my mailing list and receive the access email. How do I start i" Agent: Create the free offer: Go to Memberships > Offers , create the offer, set the price to Free , and attach your content (course or download). Build the opt-in form: Go to Sites > Forms (or add a form to a landing page), and collect name and email. Create a workflow: Go to Automation > Workflows . Trig | I'm going to record a quick Loom video to walk
- recIazx3QHuJnlsSQ (2026-10-13): "Hi there! Our members are having trouble navigating the client portal. Is there a way to customize the client portal (put headers directing people, add pop-ups, or something of the" Agent: Ah, my apologies for the misunderstanding! Currently, the member dashboard within the Client Portal has a fixed layout, so adding custom headers, banners, pop-ups, or custom redirection prompts directly inside the dashboard isn't supported at this time. | What you can customize is the Login Page branding (under Sites > Client Portal > Settings > Br
- receVPsdSjONf6jlh (2026-10-06): "where is the setting to upload the course banner?" Agent: I apologize, Abdur got disconnected, but don't worry, I'll be happy to help! | Go to "[name]" > Courses > Products > Edit your Product > Click "Customize" Then select "[name]"
- reck96ErobCKsaeRv (2026-10-06): "I have a question about the Free Mini Course: Why it looks published if I haven't done anything inside. I have an ebook, it is free. Has it to be as part of this Free Mini Course," Agent: Let's say if you want to give E-Book to the user who submits the form. You can create an automation for that. Triggeer = Form Submitted Action = Send Email > And then upload your PDF in Media storage, Grab the link from Storage and paste it in the email action. | My Pleasure! You can re-add the videos and if needs any help. I’m here to help!
- recKamCj6KGCQBPQv (2026-09-25): "I am launching a new course/program which name is: Reto "el Extraodinario Viaje del Autoconocimiento"." Agent: I am creating a ticket to escalate it to the admin team, this is your ticket id: [phone]. | You can create a coupon under payments > coupons.
- recUlS12BWsUkKpR5 (2026-09-13): "I need help updating my community name from Vison to Vibrance to Breakthrough Mastery Circle" Agent: When you open up your community, you will need to click Settings > Details > Update the name and Hit Save | No, you will need to login to community and you will find settings there
- recgONFicY4UeYq9d (2026-09-13): "my MM community group has incorrect hame as "Magdalene" Lopez. It needs to be corrected." Agent: Yes, go to Your Products > Communites > Login to go to your client portal | I have updated the name on my end and it is now showing the correct name.
- rec1ryEgeQ5oT2dzR (2026-09-05): "I need help with the Client Portal." Agent: Absolutely. Since this is a live 6-week group coaching course, you’ll want to set it up differently from an on-demand course. You can start with this structure: Create the course Go to the Courses/Membership area and create a new course. Give it a name such as 6-Week Group Coaching Program. Create t | You will need to navigate to Your Products > Co
- recfjZO7ia6LSDLQ1 (2026-09-04): "New question: I want to use the content of each chapter of my workbook for the course content. I assume the Lesson Description is just for the description. Where do I put the actua" Agent: If you just want to provide the raw workbook as a downloadable asset: How it works: You upload your PDF to the CRM's Media Library (under Settings > Media or Sites > Media). Delivery: You can attach the direct PDF link to a Thank You page after someone opts in/purchases, or send it automatically via | You can also track the progess of your customer
- recmE8Bp0Todqah6v (2026-09-02): "I have a product which is book explaining my system. It is pdf form. When I look at the template it says course. Is there a product for books" Agent: The products are created in the form of courses if you just want to add your book as a product you can create that under payments > products. | Sure allow me a moment please.
- reczdOQfrQMOzFZDk (2026-08-31): "I need help with the my Courses" Agent: No, it's a different interface. That's an interface only for you. For customer's POV, it is best to add a test contact with your other Gmail or email address > Open the contact > Go to "Actions" > Client Portal > Add the offer. In this sense, you will experience firsthand as well on what they are se | Got it. You can just create an automation for t
- reckaUfACBedsxvQ6 (2026-08-30): "How do I make this 5 module tem;ate into 8 modules" Agent: Perfect, Go to Sites (or Membership) in the left-hand navigation menu. Click on Memberships > Products (or Courses). Select the specific course/product you want to edit. Click the Create Module button (or the + / Add Category button depending on your layout). Enter the Module Title, optional descrip | The standard and most effective practice in you
- reckz5jrqKmBImBQg (2026-08-24): "Hi there I need to ask some questions about my Group - Your Research Community" Agent: Yes. All members see all courses listed in the Learning tab. Free courses become instantly accessible to every group member. Paid ones show a "[name]" price and unlock instantly once purchased. | You can connect your zoom account in Settings > My profile :)
- rec7M73Z1pH8vgDFa (2026-08-21): "I need help with Membership Communities." Agent: Thank you for the kind words, [name]! Here’s a quick video for you—please take your time to watch it. No rush, I’m right here if you need anything while you’re watching! 😊🎥 share.zight.com/01a025b2-f366-7615-b08e-3822cf2c73ca | You can make it paid by going to the Community's settings > Subscriptions

#### What went wrong in low-rated chats (user reviews)
- recT5nD1Qdgec6JXy: "Mastermind really needs to invest in training its customer support team. The support has been consistently unhelpful, and it’s incredibly frustrating and time-consuming. You can spend HOURS going back"
- recM33XCCpw0ms1BV: "retrain that guy he doest know what hes talking about"
- recUcih8JdN3eDMsV: "I was led to do actions that were not available. It seems your working guide for your support to read is not up to date. I want to clean up the background of what I am offering and it seems impossible"
- recBj5z4YCnI6loCO: "I'm pretty chill. He was not attentive. Sent me a loom that didn't address my issue. I figured it out myself. I'm used to way better service here."
- receV1i3uAAHDnP18: "IM STILL WAITING FOR 30 MINS FOR ME TO CONNECT TO A HUMAN SUPPORT"
