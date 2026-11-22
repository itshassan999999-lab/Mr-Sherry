---
description: Proven fixes, escalation rules and reply phrasing for 'Login, access, staff and permissions' guest-support chats, distilled from Modal Chats (Airtable).
---
# Login, access, staff and permissions

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 466 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "Add my team member / give them access to another sub-account"
- Symptoms: owner wants a staff user added to one or more locations, or a user exists in one sub-account but not another.
- Root cause: user only attached to one location; owner unsure where to do it.
- Fix: 1) Confirm staff name/email and exact sub-account name(s). 2) Agent adds the user to each location (agency-side) or guides: Settings > My Staff > Add User. 3) For full access, make them Admin and grant all permissions. 4) Ask the owner to confirm they now see the user.
- Escalate? No, agents did it in chat.
- Evidence: recrnIbMdji3UJiw3, recMsbZ3gfM0yhnhL, recri3DrAnJLJuGlU, rec2GF3MGrX37TgR4

### "Invite email never arrived / need to resend invite / invite expired"
- Symptoms: invited from Launchpad or My Staff, no email; webmaster's access "expired"; "they say I need to accept the invitation".
- Root cause: invite not delivered or pending user stuck.
- Fix: 1) Settings > My Staff, check user shows Pending. 2) Use Resend Invitation if present. 3) If not, edit and re-save the user, or delete the pending user and re-add via Add User. 4) Best result: agent adds the user directly with name/email (and asks whether to restrict any access); user then gets the login email.
- Escalate? Yes, when the invitee still cannot log in. Admin team sends the login email or reviews it.
- Evidence: reclQiZbVnBbfyW6V, recCwGNf8eNcfQJot, recY3zHwIlsxcYqn8, recMxRJTtWKz4dyOB, rec2GF3MGrX37TgR4

### "Staff member can't see a feature even though I enabled it" (Funnels, Tags, Custom Fields, Media Storage, Domain settings)
- Symptoms: menu item missing, "no access, contact agency admin", or a feature is empty.
- Root cause: the specific Roles & Permissions toggle is off for that user. Sometimes the assets themselves are missing (Funnels empty).
- Fix: 1) Settings > My Staff > select user > Roles and Permissions > search the feature (e.g. "Tags", "Custom Fields", Sites > Funnels, Business settings/domain). 2) Enable it and save. 3) User refreshes the browser; no logout needed (rec3HBVYKzM5z743c). 4) If the section loads but is empty, the agent copied the missing funnels/assets into the account.
- Escalate? Only if the toggle is on and it still doesn't show (Media Storage case went to the Development Team).
- Evidence: rec3HBVYKzM5z743c, recXGXEb5ru49FVho, recDTEoC8pOAUsASC, recfI9Cyn97sQOddt, recX7zf44ZCer8nlF

### "I can't import contacts, there's no Import button"
- Root cause: the user role is "User", and account users don't get Import Contacts even with all permissions on.
- Fix: the account admin imports the contacts, or changes the user's role to Admin.
- Escalate? No.
- Evidence: recr0ufMQuWUOUKu7

### "My Staff is missing from Settings" / "I can't find my staff"
- Root cause: the user is not admin/owner, or they are looking in the wrong place.
- Fix: 1) Agent checks the user's role. 2) Settings > My Staff (bottom-left gear). 3) If the role lacks user-management permissions, the owner/admin updates it. 4) For a new user missing from the list, the agent added them directly.
- Escalate? No. If the agent's permissions are also restricted, send to the admin team (unverified that this route works; see low-CSAT section).
- Evidence: recChspzNGabEqwPR, recY3zHwIlsxcYqn8, recfesounC60rHMv6

### "My permissions / AI Studio got switched off"
- Symptoms: features disappeared overnight; user thinks a password change caused it.
- Fix: agent re-enabled each permission one by one (automations, quizzes, export data, reputation/reviews AI, conversation AI dashboard) and confirmed with screenshots. If AI Studio is missing from the sidebar, a backend ticket was raised (24-48h, high priority).
- Escalate? Yes, for a missing sidebar module (backend). Permission toggles were fixed in chat.
- Evidence: recw6pfYgNcblObol, recvLzYTGaGO3PhFl

### "Missing features / Labs items / AI agents / Events not available"
- Fix: some agencies (growthhub365) use a missing-features request form, ETA 24-48h. Otherwise the agent enabled the feature directly: Labs (Email AI, Ask AI), Memberships > Events. Some Labs items (Workflow AI, Funnel AI) were "not yet available".
- Escalate? The form or the admin team handles plan-level features and template libraries (contract templates).
- Evidence: recFETnkVgh4apwIk, rec0JegBcHkyc02un, recWTFMJy3fdniIeF, recpP4Sc8nSzKqEYA

### "Adding a user freezes / page not responding"
- Root cause: a confirmed glitch when changing the role to User in the Add User flow (the agent reproduced it).
- Fix: 1) Bot steps (incognito, required fields only, another browser) did not help. 2) The agent tried to add the user, reproduced the error, and escalated it to the backend.
- Escalate? Yes, once the agent reproduces it.
- Evidence: recNJXKMrNNikxDlh

### "Log out all devices / change password errors / someone else has my login"
- Fix: the agent updated the password from their side and logged the user out of all sessions, then sent a Loom. Changing the password normally logs everyone else out.
- Escalate? No.
- Evidence: rechsTb8NAmTHWHk9

### "Can't log in / nothing loads / app frozen"
- Fix: 1) Agent opens the account to confirm it works on their side. 2) Advise another browser, clear cache/cookies, restart, try a different network. 3) Often it starts working after a reload, or after the agent opens the account ("refreshed backend configurations").
- Escalate? Only if it persists after these steps.
- Evidence: reclUnzrlTtMntVDA, rec4PDKIOYaZ0fz9J, recJXpz5DuaeBlmWz, recrAZQnboK2E7CMF

### "My customer can't access the course / portal: blank, not enrolled, site can't be reached, access expired"
- Root causes: no course access granted; wrong or static login link; client portal domain not set; old expiry/drip settings.
- Fix: 1) Check Memberships > Courses > Analytics (Members) for the contact. 2) Contact record > Client Portal section > grant course/offer access. 3) Workflows: use the Course Grant Offer action; it sends the access email automatically, so no separate link is needed. 4) Site can't be reached: set the client portal subdomain (Sites > Client Portal > Settings > Domain Setup), copy the new link, send it to the member, and update the login button in the purchase email. 5) For a free course, set the course offer to $0 and share the offer link (it still collects name/email). 6) Expired access/drip: a live call was used.
- Escalate? Video call for complex cases. A deleted website was escalated to the backend for recovery.
- Evidence: reczFOm4r1ddazpZq, recSYgNi0VSkxefAs, recBcSrZfWNrf2KTn, rec2coCpsyBuc5Sqv, recoIg4sGx1SF5kaC

### "How do I log in as my customer / see my portal?"
- Fix: the agent shares the client portal link (from portal settings) and a Loom on previewing as a member. Check branding changes in incognito.
- Evidence: recggyfPecW1xtpvK, recsq6168v2SVW7NC, rec5kb7u1CbIgzHxZ

### "New staff doesn't show in Contacts" / "Leads not showing for staff"
- Facts: adding a staff user does NOT create a contact; add them manually. Staff missing opportunities: the agent confirmed the Opportunities permission and asked to check board filters, which fixed it.
- Evidence: recoSxtVWVOyNk5h7, recE7ipMVCe3Vd9Lt

### "Sub-accounts included in my plan aren't provisioned / no Agency View"
- Fix: escalated to the admin team as priority, with a ticket number given; updates by email. Plan sub-account requests go through a request form (24-48h).
- Escalate? Yes, always (provisioning, plan, old-account cleanup).
- Evidence: recqxwqIsN2ktwxzP, rec2ZKVzeDflde5tl

### "Team member can't send test email"
- Fix: the agent logged into the teammate's view, cloned the email campaign (the clone keeps all settings), and deleted the original. Tests then sent.
- Evidence: recwoOdFG5PIzGqBv

## [Sample A] Escalation and ticket patterns
- Goes to the admin/backend/dev team: features not provisioned (templates library, sub-accounts, Agency View), reproduced bugs (Add User freeze), modules missing from the sidebar, user-limit "can't add anyone", integration permission mapping (eSpeakers), website recovery, access revoked after a payment failure.
- Typical wording: "I'll escalate this to our admin/back-end team; they'll review and follow up via email." Agents confirm the email address on file. ETA given as 24-48 hours, sometimes "marked high priority". The ticket is created after the chat closes, and sometimes a ticket number is given for reference on return (rec2GF3MGrX37TgR4, recqxwqIsN2ktwxzP).
- Users asking for a call to the admin team are told there is no direct call option; a Google Meet with a "video call expert" is offered for walkthroughs instead.
- Evidence: rec2ZKVzeDflde5tl, recpP4Sc8nSzKqEYA, recNJXKMrNNikxDlh, recuD7y8cTmicGZyB, recvDrVoj1Bo4nd1P, recmBRbjM2xykd22h

## [Sample A] What went wrong in low-CSAT chats
- Closed for inactivity 15 min after sending a Loom, before the user had acted on it; issue unresolved (recBcSrZfWNrf2KTn).
- Agent went silent after confirming the location ID; the user asked "any updates?" with no answer and no fix for overnight availability hours (recYijKjYWQu8axmN).
- Slow human pickup (~17 min on a weekend). Agent said "you already have My Staff" without proving it, then closed (recY3zHwIlsxcYqn8).
- Escalation with no call option; the user distrusted email follow-ups. Agent first had the wrong email on file (recMxRJTtWKz4dyOB).
- Agent asked for a rating mid-issue and closed while the user still had questions (recw6pfYgNcblObol).
- Bot looped and the chat ended with no agent reply after HUMAN (rec5SeVRk2NMzgY1F).
- Generic resend-invite text, then closed after 5 minutes of silence (recCwGNf8eNcfQJot).
- Sent the user to an admin contact who no longer worked there (recfesounC60rHMv6).
- Near-miss: agent opened the wrong account and showed another client's staff names (recfI9Cyn97sQOddt); verify the account first.

## [Sample A] Good reply phrasing worth reusing
- "Just to confirm, which sub-account should this staff member be added to, so I pick the correct one?"
- "I've enabled it for you; they just need to refresh their browser, no need to log out."
- "Is there any access you'd like to restrict for this user?"
- "I've reproduced the same error on my end, so this is a glitch. I've escalated it to our backend team and we'll email you once it's fixed."
- "Please keep this ticket number. When you come back, share it with the agent so they can pick up where we left off."
- "Would you be open to a quick Google Meet so we can share screens and pinpoint this together?"
- "Can you confirm this is the best email for our team to reach you?"

## [Sample A] Facts/gotchas
- Staff permissions path: Settings > My Staff > [user] > Roles and Permissions. Changes apply after a browser refresh (rec3HBVYKzM5z743c).
- The tags permission is all-or-nothing: enabling it allows add, remove and delete of tags (rec3HBVYKzM5z743c).
- Users with the "User" role cannot import contacts even with all toggles on; Admin is required (recr0ufMQuWUOUKu7).
- Adding a staff user doesn't create a contact record (recoSxtVWVOyNk5h7).
- Custom fields are not private per staff member (recfvBr10ph6OXWn4).
- Media Storage is now under the Tools & Reporting tab, no longer in Settings (recFdczzlxCArKScY).
- The Course Grant Offer workflow action sends its own access email (recoIg4sGx1SF5kaC). A 100%-off coupon still requires card details on a payment form; use a free offer or a second form/trigger. Workflows can have multiple triggers (OR) (recdQanQt9QJDxQci).
- The default client portal domain is shown as a subdomain of app.clientclub.net (reczFOm4r1ddazpZq).
- The community invitation email when access is granted via workflow is greyed out; the agent gave a Loom workaround (details unverified) (recCeU1dRDKoGwRdH).
- Agents can't log in as individual users to view their screens (recE7ipMVCe3Vd9Lt).
- The chat auto-closes after about 15 min of inactivity. Users can't move the chat window, which blocks the page (reci3KGawRHYtCAUZ, recvDrVoj1Bo4nd1P).
- Third-party connects (Manus) need the third-party's API key, not the CRM key (recwf59Pwf5DK18EQ).
- Duplicate record in batch: rec2coCpsyBuc5Sqv = rec3cdkzyNYM04UUP.

<!-- sample B -->

## [Sample B] Recurring issues and proven fixes

### "My new staff member never got the invite email / can't log in"
- Symptoms: user added under My Staff but no invite in inbox or spam; "incorrect email or password"; no verification email.
- Root causes: email deliverability; user not registered in the admin/white-label database; email already tied to another account (see next issue).
- Fix that worked:
  1. Ask the user to check spam/junk.
  2. Settings > My Staff > pencil (edit) on the user > resend the verification/invite email (recefryTUpFQhWTkv).
  3. Or set a password yourself: Settings > My Staff > edit user > Advanced Settings > set password, then send the person the agency login URL (e.g. thehub.mastermind.com) along with the email and password (recHwBXDQmT7Q5pSL, recKye7a8vkPxrjGs).
  4. The agent can also trigger a password reset email for the staff member (rechm5jMgwhceY4yw).
- Escalate? Yes, if the login still fails after a password is set. The agent said the user "might not be registered in the admin database" and gave a ticket number (rec2C8GmHNsixfteO).
- Evidence: rec2C8GmHNsixfteO, recHwBXDQmT7Q5pSL, recKye7a8vkPxrjGs, recefryTUpFQhWTkv, rechm5jMgwhceY4yw

### "Error: user already has a profile" / staff member can't log in because they have their own account
- Root cause: the email is already linked to another account on the same platform.
- Fix: the agent added the alternate email as staff and removed the old one from the backend. The new user sets a password from the invite, then uses the account switcher (top left) to move between accounts (recTOPsQkSRdSxpOQ).
- Escalate? No, the agent can do it with account access.
- Evidence: recTOPsQkSRdSxpOQ, recmAeF01iWcgxFGj

### "I can't add staff, there's no option / please add my VA"
- Fix: the agent pulled up the account and added or removed users directly (admin role on request). Bot path: Settings > My Staff > Add User > name/email > role > Roles & Permissions > Next > Save. If Next stays disabled: check the email isn't already linked, remove extra spaces, pick a role, try Incognito (bot advice, unverified).
- Delete greyed out: the user may be the account owner or you lack staff permission. Transfer ownership first (bot, unverified). In recmAeF01iWcgxFGj the user later deleted the user themselves.
- Evidence: recvXzEdManDdhITJ, recVeW1fuxeVftqLN, recmAeF01iWcgxFGj, recTOPsQkSRdSxpOQ

### "Staff can't see Pipelines"
- Root cause: the Account User role does not get the Pipeline feature.
- Fix: 1) Settings > My Staff > edit the user; 2) set the role to Account Admin; 3) turn off the features they shouldn't have under permissions.
- Evidence: rec9IhvuWkPjbugee

### "What permission lets someone see Snippets?"
- Fix: the user needs Marketing permission. The sub-permission "View and Manage Marketing" is enough for Snippets.
- Evidence: rec7uw0RfawEfDoCH

### "Changing a role's permissions on one sub-account changed it everywhere"
- Root cause: one user profile per email = one global permission set across every sub-account it's assigned to.
- Fix: none. Agent logged a feature request for more roles. Workaround (unverified): use a separate email per sub-account.
- Evidence: recDZd5AY0CXMy2p9

### "I'm in my client's account but it shows my info / how do I give the client their own login?"
- Fix: don't change your own profile or password. Add the client as their own user (Settings > My Staff > Add User) so they get their own invite. Complex cases went to a Google Meet call.
- Evidence: reciVWvz3k5GtVC3j, recefryTUpFQhWTkv

### "Sub-account users don't get the 2FA code"
- Fix: check spam; try Incognito, another browser, no VPN. GHL backend said nothing was reported and to retry later.
- Facts: 2FA is on by default for SaaS agencies and sub-accounts and cannot be disabled. A sub-account admin can't bypass it. An agency admin can manually verify the sub-account (no code) from the sub-account's Manage Client page after at least 1 failed attempt.
- Evidence: recJIomSRjgF5igN9

### "Client/member isn't getting login, welcome or reset emails (course portal)"
- Agent checked the contact's emails ("delivery in progress"), resent, then deleted and re-added the contact. That didn't work, so it went to a backend ticket.
- Escalate? Yes: backend ticket with ID, "update within few hours".
- Evidence: recFIdBiuRQmx8BhC

### "How do I give someone (or myself) access to a course/community?"
- Fix: Loom walkthroughs. Grant access from the contact record (Client Portal / Memberships section) or from Memberships > Offers > the offer > add contact (bot steps). Adding them via the portal option only sends the access/login email, not the workflow emails (recrHvwwy2zaDNkHa).
- Grant Group Access (workflow action) adds the contact to the community group. It does not create the account or guarantee an email, so add a Send Email step with the portal link (bot, rec3iZQqdbo2FkKCU).
- Evidence: recZWbffDUOXc0816, rec4VDfxRqf02icqK, recrHvwwy2zaDNkHa, recN0yReD6YJsmg3a

### "Feature/menu missing: Communities, Memberships, Products, Funnel AI, Surveys, Conversations"
- Causes and fixes:
  - Feature not switched on for the location: agent enabled it from the backend (Memberships, communities, courses, credentials, products: rec0o6bcUMCg5nOe6; Funnel AI: recQWCRZnPqBSE3L3).
  - It already exists: Memberships > Communities (recjZ6SI16OVWeEt6).
  - Plan limit: Surveys aren't on the Standard plan. Upgrade, or buy as an add-on (recfAJY6DKtHc3yCf).
  - Renamed menu: "Inbox" = Conversations because of menu customization. Click "All" to see every conversation (recgOWxV6EvCbG7DK).
  - Beta not rolled out: Project Management is not in Labs yet. Check Agency > Settings > Labs (recSnrp9H7uUGvK0j).
- Evidence: rec0o6bcUMCg5nOe6, recQWCRZnPqBSE3L3, recfAJY6DKtHc3yCf, recgOWxV6EvCbG7DK, recSnrp9H7uUGvK0j

### "Login page keeps reloading / stuck on an old link"
- Fix: the user had a stale bookmarked or search link. The agent sent the direct /v2/location/<id>/dashboard URL on the agency domain, and it worked.
- Evidence: recadC5buM4JSYPy0

### "Account suspended" / payment declined / workflows stopped
- Root cause: failed billing payment.
- Fix: send to the billing or admin team email. Agents can't retry charges.
- Escalate? Always (billing team).
- Evidence: recbzQA0sDMctW0IF, rec9aJSp4BlfGrzLM

### "Courses, recordings, members' area or referral links from the agency/program owner"
- Fix: agents can't see admin-managed courses or trainings. Flag the chat and point the user to the admin email. Response expected within 24h, so keep following up.
- Evidence: recX6uOqWRp2O478Z, recpHVYXdLZlOW7J2, recldZSIHxjle2cap, recN0yReD6YJsmg3a

### "Changed white-label domain, support widget/branding missing on new domain"
- Fix: submit the admin form so the team updates assets for the new white-label domain (Agency Settings > Company > White label > Domains already showed the new domain).
- Evidence: recJuYdXuWnm1PuG5

## [Sample B] Escalation and ticket patterns
- Escalated: unregistered staff login (rec2C8GmHNsixfteO), member emails not delivered (recFIdBiuRQmx8BhC), WordPress admin role lost on a hosted site (recsxppilhC6vZa41), AI Studio page corrupt (recmDEtrJhdlg9z2N), affiliate app missing in client portal (rec996bvzgwnxBRnU), phone system settings access (rectMzvyw5rLrbFCV).
- Sent to admin or billing email instead of a ticket: billing, suspension, course content, plan info, referral links, permission to a third-party community.
- Phrasing: "Here is your ticket number for reference: ..."; "We will reach out to you via email as soon as we have an update"; "updating you within few hours"; support email replies take "2 to 3 business days" (recCAAD54br9JaMHh); there's no phone support, but a Google Meet video call can be offered.
- Closing line: "I've escalated this to the right team... I'll close this chat here, but the issue is not being dropped."

## [Sample B] What went wrong in low-CSAT chats
- No chats scored CSAT 1-2. The two 4s:
  - recsxppilhC6vZa41: the agent pasted an unrelated ticket message by mistake, then apologized. Long wait before the escalation. Review: "surprised the issue is so hard to fix".
  - recmDEtrJhdlg9z2N: urgent AI Studio edit failed on one page. The cloned page worked. Escalated, then a call.
- Weak spots in otherwise 5-star chats:
  - Agent replied "I cannot see Renee" while looking at the wrong sub-account (recmAeF01iWcgxFGj).
  - Chat closed for inactivity before the agent gave any answer (recEkJlBvRjaBKc1m).
  - Bot said Conversations wasn't a feature, which contradicted the agent (recgOWxV6EvCbG7DK).
  - A user asked for a password reset and got pointed to a course instead (recldZSIHxjle2cap).

## [Sample B] Good reply phrasing worth reusing
- "Could you ask them to check their spam/junk folder first? If they still haven't received it, you can set a password for them in Settings > My Staff and share the login directly."
- "I've just triggered a password reset email for them so they can set a new password and log in."
- "To get this fixed as quickly as possible, would you be open to a quick Google Meet so we can pinpoint the issue together?"
- "A user profile tied to one email shares one set of permissions across all sub-accounts it's assigned to."
- "I'll close this chat here, but the issue is not being dropped."
- "You can't view an existing password; you'll need to create a new one."

## [Sample B] Facts/gotchas
- 2FA can't be disabled. The agency admin can manually verify the sub-account from Manage Client after 1 failed attempt (recJIomSRjgF5igN9).
- The Account User role has no Pipelines. Use Admin with restricted permissions (rec9IhvuWkPjbugee).
- Snippets require Marketing > "View and Manage Marketing" (rec7uw0RfawEfDoCH).
- Membership auto-login/credentials email on purchase is all-or-nothing, not per product (recFI1SzdPi4eBoFg).
- Business address for receipts: Settings > Business Info (recFI1SzdPi4eBoFg).
- Wallet auto-recharge: Settings > Billing > Wallet & Transactions. It sometimes doesn't fire, so top up manually (recQnag4rMElRZmmu).
- A dedicated sending domain has no separate credentials to update when the user's mailbox password changes (rec86j2DU7MBXIctk).
- The microphone permission prompt for the phone system is just a browser permission. Click Enable (recBt8m8OY73ml9G2).
- Scam "notice" screenshots: tell the user to ignore them (recgcnSba1HOVSCoC).
- No in-app redirect to a payment link after a document is signed (rec3iZQqdbo2FkKCU).
- HL Pro Tools has no mobile app. The members area is members.hlprotools.com (recT7hugf5YmsJa3y).
- Tekmatix Standard plan add-on prices: Surveys $20/mo, Communities $30, Affiliate Manager $30, Certificates $20, Proposals $30, Advanced Reporting $10 (recfAJY6DKtHc3yCf).
- External AI agents (e.g. Claude) can't log in and operate the UI. Use API keys via Private Integrations, or Zapier/Make (recpEtYFuGrksGeq4, partly unverified).
- The Google review-reply connection asks for broad Google permissions, which must be allowed (recAbeDwq8y9v4Mrr).
- Funnel links stopped working: DNS has to be re-verified at the registrar, and agents can't access GoDaddy (recGIJa9rtW4kj4Ic).
- Large Google Drive folder uploads time out. Upload individual files (recQQoqjOWvoyBa1Z).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 2,345 chats. CSAT average 4.66 from 477 ratings (26 rated 1-2). First-contact resolved: 266. Agent mentioned an escalation or ticket in 11%; moved to a video call in 7%.
- What users ask about most: cannot log in or access the account, adding staff/team members, password resets and lockouts, logging in to the mobile app.
- Dashboard paths agents gave most often: Settings > My Staff (20); Settings > My Profile (7); Settings > Integrations (3); Settings > Business Profile (2); Settings > Users (2); Delete > Select Cached Images (2); Files > Click Clear Data (2); New User Under Settings > My Staff (2); Login Under Your Products > Client Portal > Settings > Branding (2); Settings > Domains (2); Settings > Phone Numbers > Regulatory Bundle (2); Memberships > Offers (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recFI1SzdPi4eBoFg (2026-10-11): "Hi, my receipts show my address as being in the united states but I live in Canada. I am unable to change it in my settings" Agent: Marjolaine, you can now change the address. Please go to Settings > Business Info and you will be able to change the address | Marjolaine, it won't be possible to disable the automated email only for this product. We can either have it enabled for all products, or disabled for all products
- recKXzZZ1YZUtu4Dm (2026-10-05): "hi, can you help me to upload a new revised lead magnet here?" Agent: Upload the new pdf in th media storage> click on the gallery icon and it will takes you to the media storage > select the new pdf from there> it will replace the old with the new one: | Yes, That is correct once they are on the confirmation page then they will be able to download it. "sorry i meant different page. I the opt-in page the button don't
- recJXpz5DuaeBlmWz (2026-09-25): "my team member Juli Navigante said she can't login" Agent: Vanessa, please head over to Settings > My Staff and you can view her details there:
- recDce3fnetkPyR29 (2026-08-19): "I have not found add existing staff option" Agent: I have checked it on my end and currently you have access to that tab and you can act as a user/admin in your account, [name]. | Please navigate to Settings > My Staff
- recGizGS9UptuoXQ0 (2026-07-23): "I'm having challending connecting FB and GrowthHub. I forgot my password and FB is automatically connected my other account. It's asking me to connect to instagram. I have two acco" Agent: To update your Facebook password, go to your Settings & Privacy > Settings > Accounts Center > Password and Security. Select Change password, choose your Facebook account, enter your current and new passwords, and tap Change password | [moved to a video call]
- rec4hsmBhXhU2TwNo (2026-07-02): "Are there no more live support calls?" Agent: Of course, you can add a user to your account and grant them the appropriate permissions. Once you have navigated to Settings > My Staff, you can add a team member with feature permissions
- reclohfOyXdNjjUMu (2026-05-09): "forgot one thing, where do you change the landing page image for the course sign in page," Agent: You will be able to change the background image for your client portal login under Your Products > Client Portal > Settings > Branding. | You will be able to change the background image for your client portal login under Your Products > Client Portal > Settings > Branding.
- recojnWew4f9V0OE4 (2026-04-19): "hello, i am having issues with my password. I cannot log into lead connector on my phone when i plug in the password it says it's wrong. i tried to change the password on the MM we" Agent: Could you tell me whether you tried forgot passward option in the Settings > My staff?
- reckoyNxbLf4mYK0D (2026-03-23): "I have not received my 360 Academy log in." Agent: You can click this link and put your details🙂 | Sure ! Go to your settings > my profile and you can change the name, make sure you know your password to save changes🙂
- recYzyoKIYv0Kw2Ob (2026-03-22): "How can I get one of my team member to add contacts for me instead of myself? is there a way they can login and do this work?" Agent: Where we can see the emails, SMS, send out and received from our Contacts. You can keep it enabled for the user if you want them to be able to see the conversation. The user will still be able to see the conversation in the Contacts tab, so if you turn it on or off, it does not matter much. | You can adjust notifications by going to Settings > My p
- rec9DGlLz5Zf6Pddl (2026-02-28): "Stuggling to connect facebook. Received this message:Social Account token has expired, been revoked, or is otherwise invalid. Please re-connect your account and ensure the necessar" Agent: Navigate to the specific Account in Sales Process. Go to Settings > Integrations . Click the Disconnect button under the Facebook icon. Click Connect again and follow the prompts to re-authorize, ensuring you select all required Facebook pages. Crucial: Use the exact same personal Facebook user acco | You can just select the accounts you want to co
- rec2LErtnrV1zWHPY (2026-02-19): "some of my staff have admin rights but should be user how do I correct that? EMMA and JIMMIE https://crm.aiforbusiness.com/v2/location/yri0raKjDYUkZO5ox0h2/settings/staff/team" Agent: That won't be necessary, I'll walk you through the process of switching over an admin to user You can navigate to settings> My staff> Click on the pencil icon of the user to edit permissions> Roles and permissions> and switch the roles, I'll share a screenshot for reference as well | You can add the quiz link within the email so contacts can fill o
- rechinWM7vvFgCO6O (2026-02-09): "Good morning, I have a few questions regarding the help that you provided me before. To make it a little easier I am pasting your past responses here...with a follow up question be" Agent: To do this, go to Memberships > Communities > Groups, click on your group RD PRO NETWORK, then click the Settings button under the group banner. Inside that menu, scroll to the bottom to find the Posting Permissions option and set it to Admins/Moderators. Once that’s done, only admins will be able t | This is the action you can use to grant specifi
- recMJM991i8i4GjAl (2025-09-22): "i cannot answer the inbound call it only shows miscall." Agent: Upon checking i have noticed the number was not assigned to you for inbound call, Now I have added you under the receiver end and you will be able to get the calls. | Henry, I understand you're having trouble with different accounts using the same number, which is mixing up your clients. To fix this, go to Settings > Phone Numbers , then select Man
- reczYoiUmhNfR7TOg (2025-09-17): "After I add a staff member, how do they log in to the platform?" Agent: You can head over to settings> my staff and can make a new user, once you make a new user, they will receive login to the account automatically | Yes, they will receive a link via email that will allow them so set a new password and then they can log in.

#### What went wrong in low-rated chats (user reviews)
- rechCNRHomiLflSyX: "not much help whatsoever."
- recOKyDgL759ZI4Zt: "This is now the fourth time I've asked about the same issue. My login email is important as without it I can't access my account. I need it changed. I need that to happen without FOUR attempts to get"
- recg7BawDtxkMBGgz: "Waited for over 30 minutes and no one came."
- recgdRgDPBbEB1c3c: "not fixing this problem for over 2 weeks now very dissappointed"
- recmTSzfllIDHZZdj: "Took way to long between texts and did not resolve the issue. This cost me money having my employee sitting here waiting..."
