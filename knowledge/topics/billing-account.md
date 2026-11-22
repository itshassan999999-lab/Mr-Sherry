---
description: Proven fixes, escalation rules and reply phrasing for 'Account billing, plans and cancellations (escalation topic)' guest-support chats, distilled from Modal Chats (Airtable).
---
# Account billing, plans and cancellations (escalation topic)

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 431 chats fell in this topic; 60 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "I want to cancel my subscription / stop being charged"
- Symptoms: "cancel my account", "cancel before trial ends", "I was charged after I cancelled", "I can only see Upgrade".
- Root causes: agency-level (white-label) subscription, so the support team has no billing access. Each agency has its own cancellation path. A cancellation agreed verbally (e.g. with a coach) does not count.
- Fix that worked:
  1. Check whether the agency has a self-serve path: Settings > Company Billing > cancel option (growthhub365), or Settings > Billing.
  2. If there is none, give the agency's cancellation form or page (e.g. a /cancel or /subscription-updates page) and confirm the user submitted it.
  3. If there is no option at all, send them to the agency billing email, or escalate as a ticket.
- Escalate? Yes, whenever the user cannot self-cancel or is locked out (paused account).
- Evidence: rec0yh0IEl88bF6LP, recOinYjtbgmNbIEf, recDYDoGwvMIh285Y, recJHKvcjSz3hHbmR, recFWuVu2MdJWHXxC

### "My account is paused, how do I unpause / reactivate it?"
- Symptoms: "This sub-account has been paused. All your account activity has been temporarily suspended". The user cannot open Settings. The email says "log in and reactivate", but that option does not exist.
- Root cause: billing hard-lock after a failed payment or after cancelling extra accounts. A user who cancelled duplicate trial accounts can end up with the main account paused too.
- Fix: support tools cannot bypass it. Collect the invoice numbers and the billing email, then escalate or open a ticket with billing (or give the agency's ticket URL).
- Escalate? Yes, always (billing).
- Evidence: recuGsNFNaLytLH2S, recKGlsiwc0WNXk3t, recKizOAMknPUKjtz, recFWuVu2MdJWHXxC

### "How do I update the credit card on file?" / "banner says payment method missing"
- Fix (GHL sub-account): Settings > Invoice (Billing) > Payment Methods section, then add the card and set it as primary.
- Fix (Mastermind): Help Center > Manage Account > Click Here To Manage Billing > Manage. Direct link: account.mastermind.com/account/billing. The "go to billing" pink banner link did not work; the agent called it a glitch and gave the direct link.
- Fix (growthhub365): Settings > Company Billing.
- Escalate? No.
- Evidence: rec9MmQMw80v8UHpE, recLtK9PK3YtbdAGH, reckEIm7HPvKoI8dB, rec9pc1idC8ijDfGv, recJHKvcjSz3hHbmR

### "I updated my card but it still charges the old card"
- Root cause: old cards were still saved on the account alongside the primary card.
- Fix:
  1. Confirm the primary card is set correctly under Payment Methods.
  2. Delete the other saved cards so only the primary card remains.
- Escalate? No.
- Evidence: recqulMHgYmhSVDWe

### "Refund / downgrade / switch to monthly / plan change on MY subscription"
- Root cause: billing-level access only.
- Fix: escalate to the Billing Team by email or ticket, confirm the user's email, and give a ticket number. For HL Pro Tools' own plan, give the self-serve plan-management link (go.hlprotools.com/qrj91oluf21a). If the option the user wants (e.g. Basic Affiliate) is not shown there, convert the chat to a billing ticket.
- Escalate? Yes.
- Evidence: rec6g0zp4NE95hgyz, recfDedWv7UFg9c9h, recK2qw34eFqYBGla, recAKxSLT64FlsNnw, rec17Df9I5a0GVJG0

### "Unexplained or duplicate charges / I want my invoices"
- Symptoms: "charged 4 times in Sept", "$12 monthly recurring", "email verification ref charges", "need 2025 invoices for tax".
- Fix:
  1. Check Settings > Billing > Wallet & Transactions.
  2. Explain usage charges. Recurring wallet charges are for usage (SMS, email, AI agents) and A2P registration. Email charge types are explained under Facts.
  3. For disputes, or invoices from the agency itself, send the user to billing email or the ticket form and suggest an explicit subject line.
- Escalate? Yes, for disputes, removing a card, or stopping recurring wallet recharges ("you can't stop the charge yourself").
- Evidence: recG1xxOryIlJUYv1, recZsdEIoOjwFJnku, recqCjCWCZ9afZwm9, recw43fer9lrbM88M, recS2yox3C5To4Bhe

### "How do I refund my customer?" / "can't void a paid invoice"
- Fix: Payments > Transactions > three dots next to the payment > Refund. A paid invoice must be refunded before it can be voided; then recreate the invoice.
- Escalate? No.
- Evidence: recw5AryylvEAxd7L, recRv7W1cCltFBbuq

### "How do I charge a client's saved card again?"
- Fix: the agent said a saved card cannot be charged directly, so create a new invoice and send it (unverified as a platform limit).
- Escalate? No.
- Evidence: recnZBB6OXJ5x4vjz

### "Customer paid but I don't see the money / payment missing"
- Fix:
  1. Check Payments > Transactions and Orders.
  2. Confirm that Settings > Integrations > Stripe is the correct account and in live mode. Funds go to the connected Stripe account, not the CRM.
  3. If the payment is not in the CRM, the backend confirms it was not received, so the customer should check with their bank and Stripe.
- Escalate? Only to backend, to confirm whether the payment was received.
- Evidence: recGmuotPyuD5tD5V, recg54DFcmAjsVjbu

### "Subscription charged the wrong amount" ($25 instead of $150)
- Fix: escalated to the backend team; the update comes by email.
- Escalate? Yes.
- Evidence: recQY97tLe092FhBm

### "Customer cancelled and lost access immediately" / end-of-term cancellation
- Facts: cancelling from the client portal or member side revokes access immediately. When the agency does not cancel right away, a fixed-term subscription ends on its scheduled end date.
- Fix: re-grant access via Contact details > Actions > Client Portal dropdown and select the community. Remove the community (x icon) there to revoke access later.
- Evidence: recwhhfNUPD8u6koY, reczzvACoUG1mxPNh

### "Cancel recurring invoice / give customers a self-cancel link"
- Fix: open the recurring invoice and scroll right for the end/cancel option. For self-cancel, send customers to the client portal's Billing Settings, where they can cancel themselves.
- Evidence: recQsinUbABpIe3uM, recIw2atYSIIWFXB5

### "Setup fee + monthly membership"
- Fix: Payments > Products > create the product, set Pricing Type to Recurring, then add a Setup Fee. The first charge is the setup fee plus month 1.
- Evidence: recZyITxcfJsjMqDl

### "Test card for checkout"
- Fix: Memberships/Courses > Offers > open the offer > turn on the Test Mode toggle (top right) > Get Link > open it in incognito > pay with a Stripe test card, any future expiry and any CVC.
- Evidence: recWXz3QbAwLfdiMZ

### "Phone number / domain purchase not working"
- Phone shows "Your phone system requires configuration" and the settings button redirects: the agent completed the LC Phone configuration on the backend, then the purchase worked (recyFrHYJRUz37jpJ).
- Repeated £0.76 charges are phone number 3DS verification charges; the agent sent a Loom on purchasing (recPrfXdp1sxlzLMC).
- Number stuck at "confirmation required": three dots > delete (recq7D7atFGAcRNbx).
- Domain "Buy" does nothing even with wallet funds: the agent reproduced it, then escalated to backend with a ticket (recMfqHhJzXBARJzI).
- A registered domain cannot be renamed; the user must buy a new one (recBUQT7Rr3fozsjv).

### "AI tokens used up due to an error, can I get them reset?"
- Fix: billing handles token allocations. Escalate with error context, and flag it when the user's emails go unanswered.
- Evidence: recBf82iepyxfJOim

## [Sample A] Escalation and ticket patterns
- Escalate: refunds, cancellations without self-serve, paused accounts, downgrades, switching to monthly, plan add-ons, card removal or recurring wallet stops, billing disputes, wrong charge amounts, domain purchase bugs, The Hub upgrade not available (rec7XhxguPH0Xl6Ov).
- Phrasing used: "This is related to billing and is handled by our Billing Team, who have billing-level access". Agents then confirm the best email, give "This #<n> is your ticket number", and say "I have to close this chat to convert this into a ticket".
- ETAs given ranged from "an email update within 30 minutes" and "within 12 hours" to "within a few hours". Avoid over-promising.
- When a user says billing email went unanswered: ask when they sent it, request a screenshot of the sent email, attach it to the escalation, and say "I will flag it directly" (recBf82iepyxfJOim, reczAFpVLxlcz2Y9m).
- An agent may offer a Google Meet call for complex billing or checkout setup (rec9pc1idC8ijDfGv, recRR2gjvAEfGyR2A, recdRFw8ZuLG5Qm5V).
- Escalated tickets may produce an auto-email confirming the ticket (recK6jajYyL2QIF7l).

## [Sample A] What went wrong in low-CSAT chats
- recKizOAMknPUKjtz (1): the user only needed a card re-run on a paused account. It took 10 minutes to learn "email billing". The agency email wrongly said self-reactivation was possible, and the phone number on the site was bogus. No escalation was offered.
- reczAFpVLxlcz2Y9m (1): an unauthorized-subscription claim. The agent first said "email billing", the user had already emailed with no reply, and the agent did not produce a ticket. The user accused support of scamming. Escalate immediately when the user says email failed.
- recFWuVu2MdJWHXxC (1): the user was on a paused screen, and the agent repeated the Settings > Company Billing steps the user could not reach, then deflected to billing they had already emailed.
- recjILBgypp9ZOv1Y (1): an urgent case already 4-5 weeks old. The agent gave the email and the chat closed while the user was typing ("Closed me down in the middle of typing").
- recJchjVroysEDPqk (1): the agent pushed Stripe for a credit-repair business despite the user saying Stripe rejects that industry. The chat then closed for inactivity.
- reclOZNNKdgpP0cBA (3, "soooo slow"): a 15-minute wait for a simple offboarding answer.
- Other mistakes:
  - The agent pasted an unrelated link (recwhhfNUPD8u6koY).
  - The agent wrote "In Kerala..." in a payment answer (recnZBB6OXJ5x4vjz).
  - The user waited 50 minutes for an agent (recq7D7atFGAcRNbx).

## [Sample A] Good reply phrasing worth reusing
- "Because paused accounts are locked on the billing side, I can't bypass it from support, but I'll escalate this to billing now with your invoice numbers attached."
- "Can you tell me when you sent that email? I'll flag it directly with the team so it gets prioritized."
- "I'll convert this chat into a ticket for the Billing Team; here is your ticket number for reference."
- "I've checked your account and there is no card on file, so you won't be charged automatically when the trial ends."
- "Let me record a quick Loom so you can follow along step by step."
- "Is this the best email for the team to reach you on?"

## [Sample A] Facts/gotchas
- The AI bot routes any billing or account question to "type HUMAN". Users find the extra step annoying.
- Email charges (recqCjCWCZ9afZwm9):
  - Email Verification: verifying an address before a send.
  - Email ref: each email sent.
  - Email Notifications: internal team emails, including those from workflows.
- SMS and email are pay-as-you-go wallet usage with no subscription bundle (recdRFw8ZuLG5Qm5V). Ask AI cost was quoted as 3.165 per 1M tokens, with no in-app cost alerts; check Settings > Billing > Wallet & Transactions (rec0PKD5LAARTAPQA).
- Campaign "Skipped" contacts can be caused by insufficient wallet balance. Isolate the skipped contacts into a tag or list and resend only to them (rec1YxqgoAsgyamKp).
- If an agency moves off the $497 SaaS Pro plan, it loses the SaaS Configurator and client rebilling, and usage bills to the agency wallet. This is per the agent and unverified (recy9eN5wl61kU6Vs).
- HL Pro Tools offboarding: access is removed when the subscription ends. The agency can also remove the support user from Agency View (reclOZNNKdgpP0cBA).
- Mastermind billing is separate from the CRM: account.mastermind.com/account/billing (recLtK9PK3YtbdAGH, rec9pc1idC8ijDfGv).
- A trial with no card on file will not auto-charge (recJHKvcjSz3hHbmR).
- The storefront always shows the lowest price variant. Workaround: a single price plus a coupon code (recIw2atYSIIWFXB5).
- Calendar booking rules (rectOOLoEpHN6Cn8M):
  - Set Minimum scheduling notice under Booking rules.
  - Cancellation errors can come from the Notifications & policies limits or a broken External sync.
- Checkout payment options can differ between desktop and mobile views (recRR2gjvAEfGyR2A).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 5,362 chats. CSAT average 4.46 from 901 ratings (93 rated 1-2). First-contact resolved: 319. Agent mentioned an escalation or ticket in 19%; moved to a video call in 3%.
- What users ask about most: cancelling a subscription/account or free trial, changing the card on file, unexpected or trial charges, wallet balance, suspended accounts. These always go to the billing team by ticket.
- Dashboard paths agents gave most often: Settings > Billing (9); Settings > Company Billing (8); Payments > Products (6); Payments > Subscriptions (4); Settings > My Staff (3); Payments > Transactions (2); Settings > Whatsapp (2); Settings > Email Services (2); Ip > Over (2); Payments > Integration (2); Payments > Integrations (2); Settings > Business Tools > Whatsapp Business Platform (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recDYDoGwvMIh285Y (2026-10-03): "Cancel my account and stop subscription" Agent: I checked under Settings > Billing, but there is no option available to cancel the account from there. You can reach out to our Billing Team at [email], as they handle account cancellations and have the necessary access to assist you with your request. | I sincerely apologize. We provide technical support, and the access required for this request i
- recw5AryylvEAxd7L (2026-09-13): "The second question is where do I go to do a refund of a customer who was charged for a subscription?" Agent: Allow me a moment please to make a quick loom video for you :) | Head to Payments > Transactions> Click on the three dots next to the payment you want to refund> then click on Refund.
- recYd8bOB5qoxMOde (2026-09-11): "i have been charged and I do not know what this is" Agent: You can go to settings > phone number > voice > Call recordings > Just toggle on Automatically Delete Older Recordings?. | If you navigate to the "Conversations" section, you'll find the specific conversation that contains the saved voicemail recording.
- recHelRCqNQIBDVcy (2026-09-05): "Thank you. Is Nics available, please?" Agent: Oh, got it. As of the moment, we are yet to have an option to specify the start date of a subscription if we're going to set it up under Payment > Products. As soon as they purchased the product, the subscription would start. However, you can set up a subscription manually in Payments > Subscription | Regardless of the payment options or prices you
- rec9ZNA1CD2VBcm2U (2026-08-31): "Hi I have another question pls." Agent: Ann, you can find the attribution report in Reporting tab. Tools & reporting > Attribution report, these are the custom reports available for creation as of now :) | Yes, Ann, it has been escalated right away, you can expect a response from our within an hour :)
- recFq54LoGnk3wKq0 (2026-08-04): "If I cancel my MM subscription can I keep my lead magnets and landing pages that are on core2health.net?" Agent: Just head over to Settings > Domains and "Manage" your domain. Click on the three dots and delete the domain: | It won't be automatically deleted right away, but can be deleted in the future. It is better to disconnect it from here before you cancel
- recKocOerhRb91zoD (2026-07-13): "Hi [name] do I change a customers stored credit card details who is on a subscription plan?" Agent: To update a contact's credit card information, please navigate to Customers > Contacts and open the contact whose payment details you would like to update. From the left-hand menu, select the Payments tab. Within the Payments section, click on the Actions dropdown. From there, you can either select
- recybMOZnb7OdeYrz (2026-06-25): "Hello. Where do I find my billing information?" Agent: Let me just pull up your account so I can check this for you. 😊 | As I check here, [name]. The only billing information available i.e. subscription management is by going to MBS > Help Center > Manage My Account. If you have any other billing inquiries with the system, you may coordinate directly with our billing team at [email].
- rec9gOmv4On5jUqNO (2026-06-21): "Where do I find my subscription information for my Business System?" Agent: Inside the business hub you can locate to settings>company billing and over there you can find your subscription information | If you're looking for any specific information, just let me know and I'll be happy to help
- receQOfLEuIP46QsG (2026-06-17): "How can I tell if my billing is up to date?" Agent: No,mostly the Settings > Billing area inside a account only shows what you are being charged by the agency. It never reflects the amounts you bill your own clients.
- reckusicwkriJXOlq (2026-06-10): "I signed up with this thru Molly in her AI training but I had to cancel that membership. Do I need to cancel this also or is it all together?" Agent: Let me make sure I understand. You signed up for this platform through Molly's AI training program, but you canceled that training membership. You want to know if canceling the training also automatically cancels your platform account, or if you need to cancel them separately. Is that correct? | Christie, you can navigate to the settings>billing
- recQdj6TYUfI8NL09 (2026-06-08): "hi can you someone please help me regarding applying for the app branding upgrade" Agent: You will need to go to Your Products > Client portal dropdown > Branded mobile app > Get started to started on the process Kate. | That is correct, usually, the longer process is the one for Google play or Apple store to accept your application Kate.
- recvGQTQNs30DzU47 (2026-04-23): "I want to make a refund for the tickets I sold since my event was cancelled" Agent: Go to Marketing & sales > Payment's >Transcations >Click 3 dots > Refund This way you can refund the amount back to your customer's | yes, they will receive the full amount
- rec3aCpS4d0Zux0VR (2026-04-08): "I want to test that my sales page is working. First, I want to reduce the amount of my course to 5 euros, to test the payment with my own credit card. And second, I want to make su" Agent: To test your sales journey, first go to Payments > Products and edit your course price to 5€, then ensure your funnel is switched to Live Mode in the settings so you can use your real credit card. Next, create a new Workflow with the trigger Order Submitted (filtered for your course product) and add | Still working on this for you! I’ll share the f
- recobuKfkUu2qhr1j (2026-03-18): "Can't locate where to cancel client subscription" Agent: You want to cancel the clients subscription , allow me a moment , i am sharing a short loom video. | In Settings > My Staff , the permission for your email for editing the subscription was not enabled. I have just enabled it for you

#### What went wrong in low-rated chats (user reviews)
- reczAFpVLxlcz2Y9m: "My  problem is not yet resolved."
- recjILBgypp9ZOv1Y: "Closed me down in the middle of typing????"
- recc5lqrLliLtQf2O: "I need help ASAP on this problem that's disrupting my business. I need this solved live, not via email later."
- rec0oYUfJY9kH1cc1: "Shahroz just left a chat assuming no more help is required."
- recb9qEL9pqhTHmtA: "No Human in sight after 30 mins"
