---
description: Proven fixes, escalation rules and reply phrasing for 'Payments, Stripe, products and invoices' guest-support chats, distilled from Modal Chats (Airtable).
---
# Payments, Stripe, products and invoices

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 670 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

Note: many transcripts are middle-trimmed, so some fixes are partial.

## [Sample A] Recurring issues and proven fixes

### "How do I set up a product / payment link / checkout for my event, course or digital download?"
- Symptoms: new users want to sell a ticket, workbook, masterclass; ask "do I use a funnel?"
- Root cause: unfamiliar with Products > order form > funnel flow.
- Fix:
  1. Payments > Products > + Create Product, set price, Save.
  2. Add the product to an order form / checkout step in Sites > Funnels (or use Payments > Payment Links).
  3. For downloads: upload file to Media Library, copy URL; on Thank You page add a button "Go to Website URL" with that link.
  4. Workflow trigger "Order Submitted" (filtered to product) to email confirmation/download link; publish workflow.
  5. Agent usually records a Loom of the exact setup.
- Escalate? No.
- Evidence: rec1aODQQ1TRS8qYH, rec699h1X0X1jZLl3, recmFNqmZVJETJepf, recruFT9ZGQvqMIx5, recNnvYbZajJ60VhQ

### "Products / Payments tab doesn't show for me"
- Symptoms: no Products option under Payments.
- Root cause: user role lacks Payments permission; sometimes just needs a page refresh.
- Fix: 1. Refresh the page. 2. Admin checks Settings > My Staff > user permissions > enable Payments. 3. Agent can enable from backend if requested ("It is enabled, could you please check?").
- Escalate? No.
- Evidence: recXX7XcAPC1q0PiV, rec699h1X0X1jZLl3, recHEWdMnPWb3zwue

### "Coupon won't create / is my coupon set up right / limit to one course"
- Symptoms: Create button does nothing with no error; unsure coupon applies to monthly + annual.
- Root cause: discount value field left at default; product restriction not set.
- Fix:
  1. Payments > Coupons > create/edit; make sure discount %/amount is actually entered.
  2. To restrict: "Limit to specific products" > Selected Products > pick the course > Save.
  3. Agent can open the coupon and confirm amount and products applied.
- Escalate? No. Coupons on annual recurring membership offers were awkward; user worked around by selling as a Product (lost membership stats) and moved to a call.
- Evidence: recKIYRvYJYfp1ePY, recKDKk1AWniPHzcj, recL6wxEHli4oezZA, rec6mmLbhIcrm51tR, rec0riXAn5q4OJruf

### "How do I refund / void an invoice?"
- Symptoms: client wants refund within guarantee window; can't void invoice that already has a payment.
- Root cause: system blocks voiding invoices with recorded payments; invoices can't be edited down to the paid amount.
- Fix:
  1. Refund: Payments > Transactions > three dots on the transaction > Refund. Refund then appears in Transactions for bookkeeping.
  2. To close a partly paid invoice: refund the linked payment first, then void; or use Record Payment to close the balance (creates an extra payment record).
- Escalate? No (system limitation). Voiding does not usually notify the client (bot, unverified by agent).
- Evidence: rec2o8zpmXEfoHNtQ, recrzUe6azxmnReqJ

### "Did my recurring invoice go out?"
- Fix: 1. Payments > Invoices > Recurring > three dots > History. 2. Check "next invoice" date; if wrong, set it to today to send now, then it continues monthly on that date. 3. Agent confirmed send from backend.
- Escalate? No.
- Evidence: recdnVA0o1sOvyoSK, recibF5ESx4lukSZo (Loom for creating an invoice)

### "External Stripe/Square link: will the platform grant access automatically?"
- Symptoms: paying via external Stripe/Square links; want auto course access, tags, CRM visibility.
- Root cause: payments made outside the platform checkout don't trigger workflows.
- Fix:
  1. Replace external link with the platform's offer/product payment link (connected processor still receives the money).
  2. Workflow on payment/order trigger with product filter > add tag / grant offer access.
  3. Alternative mentioned: Zapier (unverified detail).
  4. Already-paid past buyers: build workflow (with wait if scheduled) and enroll contacts manually from Contacts.
- Escalate? No.
- Evidence: recEZOpU8HUaz2uIL, recoAGZKiFr7RwTaJ, rec2fboU99Iaoy0TX, rec4CsM1SEOkoOyRf

### "How do I pick Square vs Stripe for a checkout / disable a payment method (e.g., Bancontact)?"
- Fix:
  1. Only one default provider per account: Payments > Integrations > set default (applies to all checkouts, order forms, invoices).
  2. Hide a method: Payments > Integrations > Manage (Stripe) > Manage Payment Providers > select Courses > disable Bancontact.
  3. PayPal can be connected as an additional option.
- Escalate? No.
- Evidence: recoAGZKiFr7RwTaJ, rec15iEQd60f1FtG2

### "Paystack/processor says paid but order shows Pending"
- Root cause: processor confirmation (webhook) timed out in transit.
- Fix: 1. Compare Payments > Transactions vs Payments > Orders. 2. In Paystack: Settings > API Keys & Webhooks, confirm platform webhook URL in Live mode. 3. Status self-updated; new test payments worked.
- Escalate? If it persists (type HUMAN for payment record check).
- Evidence: recA1ih6MRZS6pNwl

### "My customer's card / Apple Pay won't go through but others work"
- Fix: 1. Check Payments > Transactions / Orders > Abandoned Checkouts for decline reason. 2. Confirm Stripe live under Payments > Integrations. 3. Agent places a test order on the exact form and sends Loom proof. 4. Customer: re-enter card manually, incognito, other device/browser, disable extensions, call bank.
- Escalate? No unless platform error found.
- Evidence: recYUiWLJNbgqC7rt

### "Stripe connection / 2FA / where's my money"
- Stripe 2FA to old phone: out of scope, contact Stripe Support. Payout: log into Stripe dashboard to transfer to bank. Use real business cell for Stripe security codes (virtual numbers may not receive them); platform number fine as public business number.
- Wrong Stripe account connected: agent can disconnect integration from backend.
- Evidence: recksFUwMvur9XSDd, recqnQvN9ZhLNfjNF, recWecR0SyiEQmSmm, recXiejfnYfZNBsv8

### "Order bump / product image / product title on order form"
- Fix: create the bump product; in form builder add Products element from left bar and enable Bump product. Red flashing arrow on bump is native, removable only with custom CSS. Product picker/title display issues often needed a Loom then a call.
- Evidence: recizm0oXW3H61QJR, reczUBFFPZLh4JIth, recsTx2ImBofZdu0c

### "Checkout color is gray / remove Tax (0%) line"
- Fix: agent edited the preset One Step Order form styling and published; tax line removed after agent change (exact setting not in transcript, unverified). Changes need Publish to show live.
- Evidence: recgbbCMV66Is7n2k

### "GST-inclusive pricing on invoices / Tax ID"
- Fix: set tax as inclusive in price while still showing on invoice (details trimmed); Tax ID in business/payment settings; in Australia Tax ID = ABN, entered without spaces.
- Evidence: recQCGRToh27O8W7K

### "Where are the purchase receipt / access-granted emails?"
- Fix: Memberships > Client Portal > Settings > Email Settings > Courses (offer access emails). Make sure workflow is published. Default system sends email receipts only for invoices; no default SMS receipt.
- Evidence: recVGCdgu5NuDj6AB, recdb8h3tvLn5ExXo, rec4As7WmMIvC9aha

### "Add members to a product / cancel subscriptions"
- Fix: assign offer manually or via workflow action (grant offer access); adding a paid offer manually enrolls without charging; members may need password reset. Subscriptions found under Payments > Subscriptions. Client portal shows courses only after access granted.
- Evidence: recYtAc9RJlAzHMIi, recx1KtXMVJqIPnDR, recAUDOmCDv7ziypG

### "Subscription plans / proration"
- Advice given: no need to align billing dates; let clients auto-bill from sign-up date; for proration use a one-time invoice/payment link then start subscription on chosen date.
- Evidence: recHelRCqNQIBDVcy

### "Charged twice / my own platform subscription / switch annual to monthly"
- Root cause: agency-level billing; tech support has no billing access.
- Fix: give billing email, escalate as priority; Mastermind users can view plan at account.mastermind.com/account/billing.
- Escalate? Yes, always billing team.
- Evidence: recA1p1GC6O6YbCs5, recZhcypi1A9e0uvk, recDGVVZgokAh7AOE, rec1CS9VWQjq0Q1H2

## [Sample A] Escalation and ticket patterns
- Billing (duplicate charges, plan changes, unknown $10 charges): "I'm part of Technical Support and don't have access to billing/refunds" + billing email + "escalated and marked priority" (recA1p1GC6O6YbCs5, recDGVVZgokAh7AOE).
- Backend bugs: ticket number given, "admin/dev team will update you by email in 24-48 hours", email from standard support address, check spam (rec5qL5MOuCkEbKa8, reczn7NsXNamsdXtp, recmabfUADPjILNUH).
- Feature requests: "forwarded the idea to the dedicated team" (rename Courses label in client portal recT30Vf3K4FBV0Ze; delete single live-session recording rec5ubZcnj2yaSOpK).
- Screen-share needs: Google Meet link posted, chat closed once user joins (rec65PbIM8FJvx50o, rec8VV7BIQPftIdQF, recpEWNJ9eDWQ4CXv). Enterprise booking calendar link offered when experts busy.
- Out-of-scope third parties (Stripe 2FA, external app billing): refer to that vendor's support.

## [Sample A] What went wrong in low-CSAT chats
- recHDQokeLCnHxnCc (CSAT 1): video request queued ~45+ min, repeated "bear with us", no ETA, never offered to start solving in chat in earnest.
- rec5qL5MOuCkEbKa8 (CSAT 1): user told before issue was fixed; agent asked "did you contact billing?" despite history showing it; ended with 24-48h ticket and no live call. Read history first.
- rec4As7WmMIvC9aha (CSAT 1): agent claimed SMS receipt was a one-off manual send; user said it happens with every receipt; slow (>1h) investigation.
- rech0Hjxx78oBoQ9k (CSAT 1): invoice "View Invoice" server error across browsers; agent asked user to "elaborate" despite the clear bot summary, then closed for inactivity after ~10 min. Should have opened the invoice and escalated.
- recmabfUADPjILNUH (CSAT 2): repeated Zoom requests ignored across two agents; ~2h chat.
- rec1CS9VWQjq0Q1H2 (CSAT 2): agent answered wrong question (business profile) when user asked about a $10 charge; user said "you are wrong"; then bounced to billing email.
- recDGVVZgokAh7AOE (CSAT 1): urgent renewal (expires tomorrow), only billing email given, no escalation offered.
- recy0LrlHJjIvdKts (CSAT 1): dropped Google Meet, bot looped on "rejoin" instead of handing to human sooner.
- rec5ubZcnj2yaSOpK: agent over-promised that dev team would "build this feature in your account" — avoid.

## [Sample A] Good reply phrasing worth reusing
- "There's no per-product provider setting; the account has one default payment provider, and every checkout runs through it."
- "If you keep the external payment link, the system won't know the customer paid, so access won't be granted automatically."
- "We placed a test order on that exact form and it went through, so the issue isn't on your end. Here's a recording of the test."
- "I'm on the Technical Support team and don't have billing access, but I've escalated this as a priority and here is the billing contact."
- "Here's your ticket number; you'll get updates by email from our support address, so please check spam too."
- "That's not possible natively today, but I've passed it to the product team as a feature request."

## [Sample A] Facts/gotchas
- One default payment provider per account; changing it affects courses, order forms, invoices (recoAGZKiFr7RwTaJ).
- Invoices with recorded payments cannot be voided or edited; refund first (recrzUe6azxmnReqJ).
- Refunds: Payments > Transactions > three dots > Refund (rec2o8zpmXEfoHNtQ).
- Stripe payment-method visibility per product type: Integrations > Stripe Manage > Manage Payment Providers (rec15iEQd60f1FtG2). Bancontact not supported for courses there.
- Live vs test Stripe both can show enabled; Apple Pay/Link domain registration can appear greyed (recYUiWLJNbgqC7rt).
- Stripe test mode on calendar with test card triggers Payment Received event with a test Transaction ID (agent claim, recxgHA02btKtGD4p).
- Manually assigning a paid offer does not charge the contact (recYtAc9RJlAzHMIi).
- Live Session recordings: only whole session can be deleted (rec5ubZcnj2yaSOpK).
- Client portal "Courses" label can't be renamed; Shared Files upload can't be disabled separately (recT30Vf3K4FBV0Ze).
- Expired platform subscription: sites stay visible but account locked for edits (recDGVVZgokAh7AOE).
- Social Planner auto-posting has no extra charge (recRhac5GXJXPlSx7).
- QR codes: download as PNG/SVG, don't copy (rec8VV7BIQPftIdQF).
- Payment provider/number must be set up in the sub-account where it will be used (recXiejfnYfZNBsv8).
- Chat transcript: three dots top-right > Export chat (recmabfUADPjILNUH).

<!-- sample B -->

## [Sample B] Recurring issues and proven fixes

### "Customers see PayPal/Stripe/Square all at checkout" / "which provider is primary?" / "is PayPal connected?"
- Symptoms: payment landed in PayPal instead of Square/Stripe; user unsure if an integration finished connecting.
- Root cause: several processors connected at once, so all show as checkout options. One agent said only one provider is the default at a time (contradicts the multi-option answer; unverified).
- Fix: 1) Payments > Integrations: check which processors show as connected. 2) Screenshot it for the user. 3) Confirm the default provider and offer to change it.
- Escalate: no. Evidence: rec9lmKNw7dj90VkE, recXipBLu4R5j7wVO, reclmTaJMkyT9fPM6

### "Remove Klarna / Pay Later from checkout"
- Root cause: Klarna is enabled in Stripe payment methods. PayPal Pay Later appears automatically whenever PayPal is on.
- Fix (Klarna): Payments > Integrations > Stripe > Manage > Manage Payment Methods, then toggle Klarna off (shown with screenshots or Loom).
- Fix (PayPal Pay Later): explain that the merchant is still paid in full upfront and PayPal collects from the buyer. To remove it, the user contacts PayPal support and asks them to disable Pay Later / PayPal Credit.
- Escalate: no. Evidence: recp3w4A7RfGbPq7a, rec2xar2rlGuCyUzy, recl36N9JoOSj2Ks3, recRbo6YrKF3FVthu

### "Some payments fail, others succeed"
- Root cause seen: the failures used Klarna and returned a "payment method authentication error" on Stripe's side.
- Fix: check the transactions for the payment method used, offer to disable Klarna, and send the user to Stripe Support to review the specific failed attempts. Do not start with "disconnect/reconnect Stripe".
- Escalate: to Stripe (third party). Evidence: rec2xar2rlGuCyUzy

### "Test card says I'm using a test card in live mode" / "how do I test a purchase?"
- Fix: 1) Payments > Integrations: switch the processor to Test Mode. 2) Make sure the order form/product uses that test connection. 3) Open the checkout in a private window and pay with the Stripe test card (any future expiry date, any CVC). 4) Check Payments > Transactions. 5) Switch back to Live.
- Gotcha: a live funnel can't be test-moded without affecting it. Use a 100% coupon or a temporary test toggle (see low-CSAT section).
- Evidence: recwGGeLcPsayz929, recBRzN4hJtLOozPb, reclmTaJMkyT9fPM6

### "Deposit now, balance later" / split invoice payments
- Fix: 1) Payments > Invoices & Estimates: create the invoice. 2) Add Payment Schedule: first row = deposit, then the installments; the total must match. 3) Send with auto-payments enabled so later installments are charged via Stripe.
- Evidence: recJ11Rbv0GgFHgkF, recP64H4Cltjru53d

### "Can't add tax to invoice: Automatic Taxes require contact's country, state, postal code"
- Fix: 1) Fill in the address on the contact record and save. 2) In the invoice, enable the Automatic Tax option (it's on the invoice, not the product). Agents sent a Loom.
- Evidence: recx4OGDHBzMFO3As, recP64H4Cltjru53d

### "Only want to charge tax in my state, but adding US Nexus adds every state"
- Fix: delete the general United States nexus entry, click Add Nexus again, choose United States, then pick only the specific state from the dropdown and save.
- Evidence: recXuO2Rswvq5oyDb

### "Client paid online but the invoice still shows unpaid / they got invoiced again"
- Root cause: the payment came through the order form/checkout, not through the invoice, so it isn't linked to the invoice. A workflow was also sending an invoice.
- Fix: 1) Find the payment in Payments > Transactions. 2) Payments > Invoices, open the invoice, ... > Record Payment > Record Manually, add a note like "Paid online via order form", then save. 3) Remove the invoice step from the workflow.
- Evidence: recX2SAQSYeDT2Oqo

### "Can't find Void / three-dot menu on invoice"
- Fix: Payments > Invoices & Estimates > All Invoices > three-dot menu > Void (paid invoices can't be voided). If the menu is missing even after clearing cache and trying Incognito, zoom the browser out. That fixed it.
- Evidence: recLEVGWCboQ82o8h

### "When will my Stripe payout hit my bank / where is the money?" / "change payout bank"
- Fix: the transaction shows as succeeded in Payments > Transactions. Payout timing and the bank account are in the Stripe dashboard (Payouts). For Express accounts, log in at connect.stripe.com/express/login. First payout usually takes 7–14 days, then about 2 business days (US).
- Evidence: recR4UY4gvT1P05bu, reci4yaYGb8d34FaP, reclmTaJMkyT9fPM6

### "No email when I make a sale" / "send me a copy of the purchase confirmation"
- Fix: Payments > Settings > Notifications > Team Notifications: turn on the sale notification. The agent turned it on for the user and showed the path. A recipient copy may need a call (unverified where to set it).
- Evidence: reci4yaYGb8d34FaP, recwGGeLcPsayz929

### "Coupon not showing on form/checkout" / "100% code still asks for card"
- Fix: 1) Enable Coupon Code on the order form element (funnel checkout: click the Order Form > settings > Enable Coupon Code > Save). 2) The coupon field often doesn't render in the form builder canvas, so check the live preview. 3) Payments > Coupons: make sure the coupon is active and applies to the attached product.
- The sales-page checkout always requires a card, even at $0. Workaround: an offer link with the discount code, or enroll the contact manually (both shown by Loom).
- Escalate: if it's a Forms-built checkout and the setting is missing, move to a video call. Evidence: reccUhpkUgI5ujjJ2, recfObwjlD0GwgjNK, recgI9FFnLwcy0ZkX, reclmTaJMkyT9fPM6

### "Order bump is ticked by default"
- Fix: in the funnel checkout's order bump settings, deselect "Enable by default". Note: checkout won't stop a repeat purchase of the same digital item.
- Evidence: recQiEEHpjwZP5fCF

### "Product not in store dropdown" / "only certain products in a pop-up checkout"
- Fix: the product was on the store's excluded list. Include it in the online store, then attach it. A free product needs an active $0 price. For separate pop-ups, edit each order form's Products section on its own. A store can use Payments > Products > Collections.
- Evidence: rechYFFMJuRgW63bB, recWYctGdYur0jR1s

### "How do I create a product and connect it to a funnel?"
- Fix: 1) Payments > Products > + Add Product (choose type: physical/digital, add price). No setup is needed inside Stripe. 2) Sites > Funnels > checkout step: add a 1-Step or 2-Step Order Form and attach the product under the Products tab. 3) Send a delivery email with a workflow triggered by Order Submitted. Agents usually sent a Loom.
- Evidence: receZfX0V3uYiaCau, recxTLDOSQcCBJIBR, recXv94L7S4oVvrIL, recBRzN4hJtLOozPb, recmE8Bp0Todqah6v

### "Order form vs standard form: no promo code / order total / T&C box"
- Fix: order forms (funnel checkout element) handle coupons, totals and T&C custom inputs. Standard forms (Sites > Forms) collect fields. Their "Collect Payment" element has its own settings panel on the right.
- Evidence: reczFvNZKSB1eY2iW, recfObwjlD0GwgjNK

### "Take payment over the phone during a sales call"
- Fix: Virtual Terminal / POS in the mobile app, charge the card on file from the contact record, a Text-to-Pay link, or a one-time invoice.
- Evidence: recFfS7DZK9YPmCgj

### "Charge before a calendar booking / paid workshop"
- Fix: turn on payment in the calendar, then Calendar settings > Forms and Confirmation > reorder the widget so the form and payment come before slot selection. For more complex flows, use a video call.
- Evidence: recsmrQIuIqpFOCGW, rec8kXMN685gkI9rR

### "Affiliate campaign shows clicks but 0 sales" / "campaign for a free event"
- Free event: Marketing > Affiliate Manager > Campaigns > + Add. Source = Form, Survey or Calendar, enable Pay-Per-Lead (it can be $0), assign affiliates, then Publish.
- 0 conversions: the affiliate parameter was lost when the checkout ran on a different page/URL. The agent couldn't fix it and escalated to the dev team (email collected).
- Evidence: reca0OUhD3mWj7BNO, recFxPWceSWnbvlAm

### "Billing / subscription / my own invoice / account paused / unknown charge"
- Fix: the tech team has no billing access. Refer to the billing team email. The user can check charges under Billing > Transactions. A paused account usually means missed payments.
- Evidence: recCssgY5BumaS7dG, recdTPTkbECPdbooi, rec9eZJanMvKaJJHu, recec2CD253NdwHDc, recdYZEblYtRzNnLl

## [Sample B] Escalation and ticket patterns
- Billing/subscription/invoices from the platform, plan limits, upgrades: send to the billing/admin team email. Phrasing: "As we're part of the Technical Support Team, we don't have access to billing... If you don't hear back, reach out to me and I'll escalate to the Admin Team." Some agents confirmed the user's email so admin could reach out (recdYZEblYtRzNnLl).
- Card declined at signup (even after 3DS): re-add the card, try another card, then go to billing for other payment options (rec5F26Ma7cPItRCP). "Contact data not found" when adding a card in the billing dashboard was logged to the team with an hlticket tag (recbUJAzvL8tTNTeQ).
- Sub-admin can't open Products (redirects to dashboard): agent called it an access issue and sent the user to the dedicated team email. The user must email directly so a ticket gets created (recIL1NPqG42yG4ff).
- Dev escalation: affiliate attribution bug, after the agent tested it. Agent collects the email and says "our developers will coordinate with you directly" (recFxPWceSWnbvlAm).
- Third parties: Stripe Support for failed payments and payouts, PayPal for Pay Later.
- About 15 chats moved to a Google Meet with a "video expert" when chat steps failed or the user asked.
- SOP: agents won't build things for the user. Suggest hiring a VA and giving them access via Settings > My Staff, then revoking it afterwards (recr3H1Kb3DWQuR7N).

## [Sample B] What went wrong in low-CSAT chats
No CSAT 1-2 in this batch. The two CSAT-4 chats:
- rec2xar2rlGuCyUzy: the first answer was a generic "disconnect and reconnect Stripe" before checking the transactions. The actual cause (Klarna authentication failures) came later. The user felt "sent in circles" and the agent had to apologize for unclear communication. Lesson: check the failed transactions first.
- recnRX0tB7NimGC0K: the user tested a live funnel with a coupon, and the agent kept pushing test mode and asked for the test contact twice. The user said "I've been trying to fix this for hours", and it ended on a call. Lesson: accept coupon-based live tests and check the workflow execution logs for those contacts.
- Other friction: an agent closed the chat for "inactivity" while the user was waiting on the agent (recWYctGdYur0jR1s). Pushing for 5-star reviews in almost every closing.

## [Sample B] Good reply phrasing worth reusing
- "Got it, allow me a moment to pull up your account and look into it."
- "I'm creating a quick Loom video to walk you through this step by step. Stay tuned!"
- "Would you be open to a quick Google Meet? Sharing your screen will let us pinpoint the issue together."
- "You still receive the full payment upfront at checkout; Pay Later is financed by PayPal."
- "I can see the payment was processed successfully; payout timing and the destination bank are shown in your Stripe Payouts section."
- "Since we're the technical team, billing has the access needed for this — if you don't hear back, come back to me and I'll escalate it."

## [Sample B] Facts/gotchas
- The Complete Order and Apply Coupon buttons stay grey until required fields are filled, so this is not a styling bug (recUWIvzDrUzoBfVs).
- The coupon field may not render in the form builder canvas. Check the live preview (recfObwjlD0GwgjNK).
- A missing UI menu (invoice three-dots) can be a zoom-level issue (recLEVGWCboQ82o8h).
- Payment method list: only 3 cards per sub-account. See the others via the edit icon. Confirm the right location ID, since the chat-start ID may be wrong (recRVgpRnCRfWnkjP).
- A trial subscription doesn't charge upfront. An unexpected charge came from a different form (rec6Z8EowaXUixswq).
- Notifications for sales are off by default for some accounts: Payments > Settings > Notifications > Team Notifications (reci4yaYGb8d34FaP).
- Dashboard revenue widgets can be added so CRM sales show on the dashboard (recr3H1Kb3DWQuR7N).
- Zapier "Sold" trigger + Lulu/Printify for print-on-demand fulfilment was confirmed as possible on the current plan (rec4nS0JQjYazK532, unverified detail).
- Radio/single-select product choice isn't available on that form. Workaround details were trimmed (rec6gLkAamy5svskT).
- Support is 24/7 (recwy9ZZzJbCEUd8a).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 5,590 chats. CSAT average 4.73 from 1,483 ratings (71 rated 1-2). First-contact resolved: 790. Agent mentioned an escalation or ticket in 6%; moved to a video call in 10%.
- What users ask about most: payment methods and payment links, checkout and order forms, Stripe connection and test mode, coupons, payment plans, invoices and estimates.
- Dashboard paths agents gave most often: Payments > Products (34); Payments > Integrations (33); Payments > Payment Links (13); Sites > Funnels (12); Payments > Invoices & Estimates (11); Settings > Integrations (9); Payments > Invoices (8); Payments > Transactions (8); Settings > Billing (6); Payments > Coupons (6); Settings > Integrations > Stripe (6); Settings > Payment Methods (5).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- reccSfykSmrKxeBxg (2026-10-20): "we are having trouble getting the payment link to work on a form." Agent: Make sure an integrated payment processor, like Stripe, is connected under Payments > Integrations. If it's already connected, disconnect and reconnect it. Next, remove the payment element inside the Form Builder add it back set the payment element to live mode with a valid product attached. | I understand how much this means to your business. I wi
- recys7T9F1qUIhcnf (2026-10-19): "I have done the steps you asked me and it worked! can you tell me how to test the link? I don't know how to set this link to test mode (and back to live). Also, how do I direct it" Agent: Hi [name], Great job getting the payment link connected to your funnel page! Here's how to test it and send customers to your Thank You page. To test the link (and switch back to live): 1. Go to Payments > Payment Links and open your link. 2. Find the Payment Mode toggle and switch it from Live to T | If you go into the settings of your store/websi
- recbmYl3Q3gEzGY4s (2026-10-17): "I need to make an invoice. Where can I do that?" Agent: You can make an invoice under payments tab | Receipts for your customers To manage the receipts your customers receive when they buy from your funnels or invoices: To send automatic receipts: Navigate to Payments > Settings > Receipts. Switch on the "Enable automatic sales receipts for payments" toggle. This will automatically email a PDF rece
- reczFvNZKSB1eY2iW (2026-10-07): "Hi I am trying to set up the payment form for my course but I have questions" Agent: Great question! In our system, Order Forms (2-Step or 1-Step Checkout elements) in the page builder handle product selection, promo codes, credit cards, and order summaries, whereas Standard Forms (under Sites > Forms) are meant for collecting contact details, custom fields, and checkboxes. | If using the Checkout Element in the Funnel Page: Promo
- recd8E97zXEcyHT4l (2026-10-04): "sorry a loop request on this please" Agent: I'm currently looking into this and will keep you updated as soon as I have more information. | You need to create the product for these courses from payments> products and then add them into the store.
- rec15iEQd60f1FtG2 (2026-09-27): "Hi, the message is gone. I wanted to connect stripe to my course, and you were explaining it but it's gone" Agent: You can go to Payments > Integrations and click on "Manage" next to Stripe and then click on "[name]" | Then, select Courses and you can disable Bancontact:
- recfObwjlD0GwgjNK (2026-09-23): "How do I change the components of the "[name]" option on a form?" Agent: Thank you so much for your patience.To offer ACH bank transfers, log into your external Stripe account dashboard, navigate to Settings > Payment methods , and toggle on ACH Direct Debit . Once enabled, perform a hard refresh in your CRM's form builder so the payment element can automatically sync an | After making all the settings I mentioned, you’
- recVGLTaQMJ1wCrha (2026-09-21): "i created a checkout page form and published it. on the live page it says the payment is in test mode. i can't figure out how to remove this" Agent: Could you help me with the screenshot of where it is showing in test mode? So I'll guide you on this. | To turn off Test Mode and set your form to Live Mode: Navigate to Funnels > Forms and open the form containing your product. Click on the product field, then click the gear icon to open its settings. In the right-hand panel, find the Live Mode op
- recLCjMj0E3OzOBVD (2026-09-19): "Hi, where can we update this invoicing PDF for products purchased via funnel's order form?" Agent: Gotcha! It shows Turas Consulting and Coaching Limited in the PDF because that is the Business Name set for your account in Settings > Business Info. If you change that, it will also update it in the PDF | You can absolutely change the business details in your settings in Business Info
- recZCUIVrvA6hc7bN (2026-09-18): "Where do I find the transaction details for a form so I can change the statement descriptor?" Agent: To view all your transactions, navigate to Payments > Transactions . From there, click the three-dot menu next to the transaction you’d like to view to access its details. | So you can update your Shortened Descriptor / Prefix (under Settings → Public Details) in Stripe to something neutral that covers both brands.
- recyHC3DHbHSKKC22 (2026-09-12): "Can I give multiple offer options in one checkout page?" Agent: Got it. Yes, you can offer multiple options on a single order form/checkout page in the hub using Products attached to your funnel or website page. Attach Your Products to the Page: Go to Sites > Funnels (or Websites), select your funnel step, and navigate to the Products tab at the top. Add each pr | I'm checking on it. Please give me a few minute
- recTZ0CkEWUpNwOfT (2026-09-11): ""I created an Event coupon code without a usage limit, and I don't see any way to edit or deactivate it after creation. Can you help me restrict or disable it on the backend?" Sinc" Agent: You will need to go to Payments > Coupon's and edit the coupon to make changes | Barbara, the coupon code will take some to show up, but upon testing on the checkout page, it is working fine, see the image
- rec2ficDMYxzK8fnM (2026-09-04): "Good morning! We are trying to test a payment but we are getting an error though we have input the correct information, is this something you can help me with? Or I need to be tran" Agent: Harriet The error is happening because of the double quotes in your product name ("[name]"). Payment processors do not allow special characters like quotation marks in bank statement descriptions. To fix this, go to Payments > Products , edit this product, and remove the quotation marks  | Yes, I am sure that this issue is related to the name becau
- rec2o8zpmXEfoHNtQ (2026-09-03): "Hi I eed to reinburse the full value of this invoice to my clientÇ INV-268096" Agent: You can go under transactions > click on the three dots > and you can refund. | I will now end the chat session as you have successfully joined the call. Thank you!
- recy8vBxG9L6yzL8T (2026-08-22): "I need help with a payment- or product-related issue." Agent: The first option is an Order Form within a Funnel . If you have a funnel, you can add an order form directly to it, allowing customers to purchase the product by entering their personal and payment information. This option is designed specifically for purchases made through the funnel. The second op | Go to Payments > Integrations and reconnect Pay

#### What went wrong in low-rated chats (user reviews)
- recLDSO3lHV3kBC7N: "I have been trying to get my checkout page working since tuesday and still do not have it solved. I have a meeting on friday at 4pm but my event is in 2 weeks and I have had at least10 people tell me"
- recQ55PoRIwPQCZKM: "ai sorta helpful but need to be able to connect to human somewhow, will try again in a new chat"
- recKUj4G0zvhL5fZV: "Didn't get the help I needed"
- rec9vtUChGnx9Kg3r: "zero support!  got more support from chatGPT"
- recgPwtmv9Mve6eLe: "Agent did not have the ability to resolve tax issues and is escalating to a higher level. I've been experiencing the same problems for months with no resolution. This is unacceptable."
