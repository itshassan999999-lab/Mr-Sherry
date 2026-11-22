---
description: Proven fixes, escalation rules and reply phrasing for 'Snapshots, sub-accounts and agency transfers' guest-support chats, distilled from Modal Chats (Airtable).
---
# Snapshots, sub-accounts and agency transfers

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 348 chats fell in this topic; 63 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "Please install/load this snapshot into my account"
- Symptoms: user pastes a GHL share link (affiliates.gohighlevel.com/?...&share=XXXX or app.gohighlevel.com/settings/snapshot/import/XXXX). They only have sub-account access (no Agency View), so they can't import it themselves.
- Root cause: a snapshot import needs agency-level access.
- Fix that worked: 1) Ask for the share link (and the correct one if they sent the wrong one). 2) Agent imports the snapshot at the agency level, then loads it into the target sub-account (Agency View > Sub-Accounts > ... > Manage Client > Actions > Load Snapshot). 3) Before loading, warn the user: "assets selected will overwrite older assets in the sub-account" and get a yes. 4) Tell them to refresh after a few minutes, then check Automations, funnels, email templates and custom values.
- Escalate? No. Agents do this live on chat (Tekmatix is the exception: user fills in a form and the team adds it).
- Evidence: recQinLZFThoN47cC, rec9yCN5MviOliPbj, reclzz19AmbxBKpjW, recxcNICDLjlXzldX, recZgPKs9yNRsWiiT

### "I loaded a snapshot but can't find anything / I don't see the snapshot menu"
- Symptoms: a new user follows GHL-generic instructions ("Agency View > Subaccounts > Load Snapshot"). They don't have that menu, or they can't tell where the snapshot assets went.
- Root cause: white-label sub-account users never see Agency View. The snapshot was already loaded for them.
- Fix that worked: 1) Confirm on the account that the assets are there. 2) Tell them what the snapshot contained (workflows, funnels, email templates, calendars, custom values). 3) Record a Loom showing where each item lives. Calendars are under Settings, everything else is in the left nav.
- Escalate? No.
- Evidence: recISyglvD86WAUrB, rec6izyQuZZKD9Th9, recZgPKs9yNRsWiiT

### "Send me a snapshot of my account so I can move it to my own HighLevel agency"
- Symptoms: the user wants a snapshot link of their sub-account, website or AI Studio projects to take out of the platform.
- Root cause: making an outbound snapshot needs admin access. Chat agents don't do it.
- Fix that worked: 1) Point the user to the admin team by email or ticket, or escalate on their behalf and confirm their email address. 2) If they already emailed and got an auto-reply, explain it's automated and the team is working on it. Ask them to wait another 24h, then come back so chat can escalate.
- Escalate? Yes, always (admin team).
- Evidence: recl1qg3RpBWvXJSr, recLt8VFWDAKtwELn, recnmLHPBv0atHXqL, recewReQtEE5M24UA

### "How do I add a new sub-account / I submitted the request and haven't heard back"
- Symptoms: the user wants another sub-account for a second business or a client, or is chasing a request.
- Root cause: on GrowthHub365, sub-accounts are created manually by the admin team after the user submits a form.
- Fix that worked: 1) Send the sub-account request form (GH365 form at app.growthhub365.com/v2/preview/... or the sites.leadconnectorhq.com preview link). 2) Set expectations: 24-48h processing, and the notification goes to the email on the request, not in-app. 3) If more than 48h have passed, check how many accounts they currently have, then send them to the admin/billing email or escalate. Note that the admin team works weekdays (weekend requests get answered Monday). 4) Re-read any confirmation text the user received. One user's text said "within 24 hours".
- Escalate? Yes if past 48h. On Tekmatix, a separate account or extra sub-account goes through the admin "subscription-updates" link. On AI4B, it goes to the billing email.
- Evidence: reckGnCILD0WOVoVE, recD4s92k5RRaemPT, recYpecBkbG4VJdwQ, reckUZAmKV3ribgwG, recghGSiiRWs78wHG

### "Move workflows / voice agent / phone number from one sub-account to another"
- Symptoms: a transfer is partly done, or the user needs an AI agent or number copied to a newly created client sub-account.
- Fix that worked: 1) Confirm the exact asset name plus the source and destination sub-accounts. A wrong location wastes time. In one case the number wasn't in the account the user named. 2) Agent moves it from the backend (a workflow re-transfer showed "processing"; a voice agent was moved directly). 3) For phone numbers: send a Loom of the steps, the user completes their part, then the agent moves the number. 4) Ask the user to refresh or use a new browser to verify.
- Escalate? No.
- Evidence: recQDoKoAo0xHMnhn, recSIXdtVgzlBvWbJ, recmQvuov2mV4yj9o

### "Transfer my whole sub-account (domains, contacts, funnels, A2P number) into another sub-account / merge two accounts"
- Fix that worked: 1) There's no merge button. Pick the account to keep, then export contacts as CSV and import them in the other account. Rebuild or snapshot the funnels and workflows. 2) Domains: an external domain gets removed under Settings > Domains, its DNS cleaned up, then reconnected in the new sub-account. An internal domain uses Settings > Domains > Transfer. 3) A2P must be re-registered even for the same business. 4) Owner/default-account changes and commission payouts go to the Admin Team. Collect the client's details and email for the ticket.
- Escalate? Yes, for default account, ownership or billing parts.
- Evidence: rec4CiKKwUGYWmLA7, recG6NGhJOuJ62P3c

### "Transfer my existing GHL sub-account INTO / OUT of the platform (relationship number)"
- Fix that worked: on CRC Marketing Hub, transfer-in is supported. The agent supplied the agency relationship code in the format 0-000-000. Tell the user transfer-out to an external platform isn't offered, per company policy.
- Gotcha: when a user asks where to find the relationship ID for an outbound transfer, the agent stalled for 40+ min (see low CSAT). The relationship ID belongs to the receiving agency, so the user must get it from their new agency (unverified as a stated fix).
- Evidence: recrBuqeCB9zmRYB2, recSyaJtH9wnfwB7A

### "Feature X is missing in my sub-account" (Prospecting, Outbound Voice AI, Custom Voices, Private Integrations, AI Studio)
- Fix that worked: 1) Check the right sub-account. One agent checked the wrong location first. 2) Enable the feature if the agent can (Prospecting under Marketing was enabled live). 3) If it's already on, have the user refresh. Outbound Voice AI then needs a workflow: Automation > Workflows > add the Voice AI Outbound Call action > select agent > accept terms > publish and test. 4) If they can't (some agents can't toggle AI Studio or Private Integrations), give the admin email or escalate.
- Escalate? Yes for features the agent lacks permission for, or when ownership verification is needed.
- Evidence: recYdmheYnLqQGtLf, recCf603TzteBvnXv, rec9yCN5MviOliPbj, recVZhAb2TGVKhhcv, recnFswZYnPltNAZz

### "Country / currency is locked (greyed out) on my location"
- Fix that worked: the agent changed the country/currency in the backend and unlocked the fields, then asked the user to log in on another browser to confirm.
- Evidence: recehmmKuDxKpFelv

### "Sub-account suspended / paused / I can't access it"
- Root causes: billing pause or suspension, or the user isn't assigned to that sub-account.
- Fix that worked: for access issues, tell them an account admin must grant access (agents can't add users). For suspension or a paused account, it's a billing matter: escalate, give a ticket number and email follow-up "within the next few hours".
- Escalate? Yes (billing/admin).
- Evidence: recKec38S8lYa0T52, recNQAe8PUuT0o1Jr, rec69tMog2KKudFEy

### "Bill my client from inside their sub-account / switch a client SaaS plan"
- Fix that worked: 1) Client billing inside the sub-account: Payments > Products (set as recurring when creating), then Payments > Payment Links. Followed by Loom and Google Meet. 2) Changing a SaaS plan from annual to monthly: Agency View > Sub-Accounts > find client > cancel the plan and assign the new monthly plan. If the plans are Stripe-synced and the user scheduled the change in Stripe, the change syncs to HL automatically at period end. 3) Changing a sub-account's SaaS plan: Loom walkthrough (recmqsrBQTZE7jnph).
- Evidence: recWeSXe7RzFR6hwg, rechWpxDgAhN9kr3f, recmqsrBQTZE7jnph

### "Website down / 404 after the sub-account was transferred between agencies"
- Fix that worked: the bot checked Settings > Domains & URL Redirects. The domain's Manage option asked to "transfer in again". The agent put in a temporary workaround (homepage live), escalated to the backend and promised an email follow-up.
- Escalate? Yes (backend).
- Evidence: recWJ7gYZjq7gL3Q9

### "Port in a number / A2P after buying a number"
- Fix that worked: port-in (Settings > Phone Numbers > Port-In Numbers needs admin). The agent creates a ticket and emails the user an LOA form. The user replies with the LOA plus a recent billing statement plus account details. For A2P, the dedicated A2P team submits it once the Authorized Representative details are filled in under Settings.
- Evidence: recfEV1WrFuB9SQac, rec4xmJtGKuzEP0W8

### Email / call-transcript issues seen in sub-accounts
- Replies to an internal notification go to other recipients: clear the From Name and From Email in the notification action. Notifications are outbound only; a Loom showed workarounds (recbf22b5kNvuq57q).
- Can't email the dedicated-domain address: a dedicated sending domain is outbound-only. Suggested workaround: a contact form plus an auto-reply (recAJSjlJJwRsxngv).
- AI call transcript is missing: enable Settings > Phone System > Voice > Transcription (recEYnVZw9Yn5p5nB).
- An unknown SMS came from "LeadConnector": it's a manual or system default, here missed-call text-back under Settings > Phone System > Voice (recVOJyeCzysONabK).

## [Sample A] Escalation and ticket patterns
- These go to the admin team: outbound snapshots, new sub-accounts past 48h, default account and ownership changes, feature toggles the agent can't do, ownership verification, and unsuspending accounts.
- These go to the billing team: paused accounts, pricing, and plan upgrades. The agent gives the billing email or help link.
- These go to the backend team: platform glitches (Plug N Play missing a template, collapsed sidebar across accounts, domain 404 after transfer).
- Standard phrasing: "requires admin-level access, so I'll escalate it to the Admin Team on your behalf; they'll follow up via email". Agents confirm the email address and sometimes give a ticket number or "update within the next few hours". Admin works weekdays.
- If the user already emailed and got an auto-reply: tell them to wait 24h, then return to chat for a direct escalation.

## [Sample A] What went wrong in low-CSAT chats
- rec5BAXEMpJuwiCRI (1): gave a billing email and a link, and never really answered "can I add sub-accounts and at what price".
- recG6NGhJOuJ62P3c (1): the bot bounced the user to billing although they had already tried billing. The chat was lost after it ended and the user felt unattended.
- rec2S2pV2RkaAoWp0 (1): a prior agent didn't recognize GHL and refused to help. The user got angry ("scam"). The agent kept insisting it was fixed and asking for incognito before offering a Meet.
- recSyaJtH9wnfwB7A (1): about 40 min of "still checking with my team" filler and no answer to a simple question (where to find the relationship ID).
- recnFswZYnPltNAZz (1): Private Integrations request. The user was told to email the owner instead of getting a ticket ("you can't open a ticket?"). An unknown third party had access to the account.
- rec69tMog2KKudFEy (1): paused account. The agent redirected to billing with no ETA or phone option, then asked "anything else technical?" while the user was still urgent.
- recewReQtEE5M24UA (1): an escalated snapshot request never got a follow-up. The agent couldn't give a status.
- recNQAe8PUuT0o1Jr (1): 9 minutes before the agent engaged, and the agent mixed up which sub-account the user could access.

## [Sample A] Good reply phrasing worth reusing
- "The assets in this snapshot will overwrite older assets with the same name in the sub-account. Do I have your permission to proceed?"
- "The snapshot has been loaded. Please refresh in a few minutes and check Automations, Funnels and Email Templates."
- "There isn't a single button that merges two accounts, but we can consolidate them by moving everything into the account you want to keep."
- "This requires admin-level access, so I'll escalate it to the Admin Team on your behalf. Is this the best email to reach you?"
- "That reply was an automated acknowledgement. The team is already working on it. If you don't hear back in 24 hours, come back and we'll escalate directly."
- "I'm recording a quick Loom to walk you through it step by step."

## [Sample A] Facts/gotchas
- GH365: up to 10 personal and client sub-accounts per subscription. New sub-accounts come via form, take 24-48h, and the notification goes by email. All accounts are equal; the user chooses which is "primary" (recD4s92k5RRaemPT).
- White-label sub-account users have no Agency View, so they can't import snapshots, port numbers, or see Custom Voices / Private Integrations (recxcNICDLjlXzldX, recfEV1WrFuB9SQac, recVZhAb2TGVKhhcv).
- CRC Marketing Hub accepts transfers in but not out (recrBuqeCB9zmRYB2).
- A2P must be redone when moving a number or business to a new sub-account (recG6NGhJOuJ62P3c).
- Mastermind Plug N Play edits an existing site and doesn't create a new funnel. One account showed 8 of 9 MM Marketing Plans, which was escalated as a backend bug (recvhEsp3RP10aqw9).
- A collapsed left sidebar across all accounts was a backend issue, escalated (recljEe7lcDA6SJC3).
- Sub-accounts aren't auto-suspended when a client's Payments subscription fails (bot statement, recWeSXe7RzFR6hwg, unverified).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 3,181 chats. CSAT average 4.7 from 758 ratings (40 rated 1-2). First-contact resolved: 446. Agent mentioned an escalation or ticket in 15%; moved to a video call in 6%.
- What users ask about most: creating, pausing and moving sub-accounts (relationship number), importing/loading snapshots, agency view, location IDs.
- Dashboard paths agents gave most often: Settings > My Staff (8); Settings > Phone Numbers (3); Settings > Business Profile (2); Conversations > Manual Actions (2); Automation > Workflows (2); Agency View > Account Snapshots (2); Settings > Team (2); Settings > Company Billing (2); Settings > Business Info (2); Apps > App Connections (2); Settings > Domains (2); Agency View > Sub-Accounts (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recKMmWeRYCSWWAd4 (2026-10-06): "im looking to add and additional user but i keep getting this error message "a user with this email already exists in the agency. please contact your agency admin to add them to yo" Agent: Thank you so much for confirming for me.Here is the step-by-step process that you can follow 1.Open Staff Settings: Sub-account Level. Ensure you are inside your specific sub-account (not the Agency view). Navigate to Settings > My Staff in the bottom left menu. 2.Add the Existing Email: Exact Match | I would be more than happy to help you.
- recTBdMYP3E7GIdWf (2026-09-22): "I will just ask a favor because im a bit confuse" Agent: You can filter the automations with the published status you have named them differently so it will be easier for you to find them. | The lead magnets for those 4 webinars are under marketing and sales > funnels and pages > webinars.
- recVBvkAw85nwZdLz (2026-08-17): "Hello, I need help adding a new product. It is only providing a drop down list and won't let me save the new cloned product page named FHCO Organizational Clarity Review™ (saved in" Agent: To create a product, you will need to go to payments > Products > Create Product | Once the product is created, you can add into funnel step
- recOXHSksq0afFTBm (2026-08-09): "I don't want to be change for a Sub-Account. I will only be using one. How can I delete the one that I'm not using?" Agent: Gotcha! Please open that account, head over to Settings > Billing and you can cancel the account from there: | Hi [name], I hope you are doing well. As requested during our chat, I am sending you a copy of our conversation regarding your account cancellation. Here is the transcript: Nancy's Chat Transcript To recap the steps we discussed for cancel
- recxYBW8eYAqsnydg (2026-07-31): "When trying to add a user to my subaccount who I have gotten an email that the subaccount is ready." Agent: Yes, it is to add the information of the staff member to your account. Navigate to settings> my staff> add a new user to your account | Done already, [name]. I have added it too. Please refresh your browser and confirm.
- recCe7CCP3sq3M8J2 (2026-05-29): "Do i need a sub account for my business" Agent: Your account that you're logged in right now is called a subaccount. You can change that account name under Settings > Business Info. | You can try using the advanced filter.
- rec018P7OGSdJt2Yy (2026-05-01): "Hi, the sub account that has Nickolas' webste is not there." Agent: Its on that same account Nirquette, you will need to go to Sites > Websites | Yes, i can email you this loom at [email], is this the best email to send you the loom? ❤️
- recCjAZniDDa66Y3N (2026-04-10): "How do I import a snapshot into a specific sub account?" Agent: Could you please share the snapshot link with me which you want to import into your account | Just to confirm, do you want to upload the snapshot in this location > 4 Core
- recDHsusnlCm3ahKA (2026-03-27): "My business profile is greyed out and the system does not allow me to update any fields." Agent: I am checking the issue , please stay connected. | Could you please check Settings > Business Info again and try updating the business profile?
- recFhRdw3EdSsrehP (2025-11-20): "How do I create a custom receipt for firstlovereset.org/audio?" Agent: Perfect sure, no worries Anita always here to assist you. | So there's only the default one If you want to create one for yourself just go the marketing tab > email > templates and when you are done creating one it will be shown here
- rec3WXh1lZhXbNkSV (2025-11-14): "The sub account is getting an error message when setting up their payment method so that they can the A2P messaging," Agent: You're welcome! I believe we removed Saas from this subaccount in our previous chat , that would be the reason why you cannot add the payment method, can you confirm the name of the subaccount again? | You can view that from here in settings>stripe
- recnAWUOnvYLomkZQ (2025-11-12): "Our sub account holder cannot register their A2P messaging number" Agent: It seems rebilling is disabled for that subaccount , you can either enable the phone rebilling or you can check this setting in Settings>phone integrations> account creation | Or Settings>phone integration>search subaccount
- recxDzSki8JP8Eypn (2025-11-12): "I'm setting up an user and I need them to be able to add a domain to the sub account. What access would they need to do that task." Agent: To allow a user to add a domain to a sub-account in Cenjat, they need access to the Settings area, specifically the Domains section. This permission is typically granted to users with an Admin role, as admins can navigate to Settings > Domains and perform actions such as connecting a new domain, add | Yes, it will be saved and you can watch it when
- recrqXehAjOZrh9JC (2025-10-30): "Buenas tardes, necesito hacr un bundle de dos productos que tengo creados para ofrecerlo en BlackFriday. No se como puedo hacerlo. Gracias!" Agent: Puede crear una oferta aquí en la pestaña de membresía>ofertas y agregar ambos productos a la oferta. | Membresía>cursos>ofertas Por favor déjame saber si eso responde la pregunta.
- recfu7MF5DnZPRwqR (2025-09-27): "I am looking into how to resize the logo and to make it a custom value for every thing in this subaccount. the dieal size is 130x130." Agent: To adjust your logo to the ideal 130x130 size, upload it to the Media Storage after resizing it with an image editing software. Then, create a custom value using a placeholder like , and update it through Settings > Custom Values to make sure it's consistently applied across your subaccount.

#### What went wrong in low-rated chats (user reviews)
- recNQAe8PUuT0o1Jr: "was online for 9 minutes before human ever said "let me look into this""
- recmHRwkky6SVQANH: "The support never said anything to me from beginning to end and i had to get off, it was over 11 minutes and silence!!"
- recY3zHwIlsxcYqn8: "Took too long for a HUMAN to join.  Maybe no staff being a weekend?"
- recnFswZYnPltNAZz: "A huge waste of time. Clearly issues with your support team."
- recf87ICkmhOQQQO6: "give me a minute to get back to you.  sheesh"
