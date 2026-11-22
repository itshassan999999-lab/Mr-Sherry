---
description: Proven fixes, escalation rules and reply phrasing for 'Reporting, dashboards and attribution' guest-support chats, distilled from Modal Chats (Airtable).
---
# Reporting, dashboards and attribution

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 246 chats fell in this topic; 59 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->
Note: the batch is mostly thehub.mastermind.com chats that open with the default "I need help with dashboard" prompt. The real topics vary: navigation, websites, courses, permissions and reports. Dashboard and reporting questions make up only part of it.

## [Sample A] Recurring issues and proven fixes

### "Where do I find my funnels / website / forms? The menu is missing"
- Symptoms: Sites dropdown or Forms is missing, or only WordPress shows; funnels or websites won't load.
- Root causes: user-role permissions not granted, or granted but not yet showing; a downgraded plan that no longer includes Funnels/Sites; browser cache.
- Fix:
  1. Pull up the account and compare the user's view with the role.
  2. If permissions are missing, grant them (Settings > My Staff > edit user > Roles & Permissions) and ask the user to refresh. In one chat access had already been granted but did not show until rechecked.
  3. If it is cache, clear the cache or use an incognito window or another browser.
  4. If the plan was downgraded, send the user to the admin team by email to restore Funnels/Sites access.
- Escalate: yes, for plan or permission changes the agent cannot make (admin team by email).
- Evidence: recxQ3xyD99OuVk1v, recLIG3zyeQmINDzn, recLICl5IcFtZeSLE, recePWf5ASMhz444m, recj9JLnIwD1EbHJb

### "Everything is locked / I only see a few features / can't update billing"
- Root cause: restricted user permissions. In one chat the user only had Ads Manager and Affiliate.
- Fix:
  1. Settings > Staff > pencil icon next to the user > Roles and Permissions > search "Billing" (or the missing feature) and enable it.
  2. For billing, the direct account billing page also worked (account.mastermind.com/account/billing).
  3. If the plan does not allow it (e.g. Starter), send the user to the admin team email and list the exact permissions to request (Funnels, Websites, Stores, Brand Boards).
- Escalate: yes, plan or permission upgrades go to the admin team.
- Evidence: recPVNt0vlGZYaDDB, recePWf5ASMhz444m, recgt7LsDiwh4F623

### "Where do I see where my contacts/leads come from?" (source attribution)
- Symptoms: the dashboard shows source "-", or the lead count does not match a "Contact Source is Empty" filter.
- Root causes: no attribution or UTM data; contacts created by inbound call, the phone API, the mobile app or manual add, which carry no source.
- Fix: check the Source, UTM and attribution fields on the contact. Make sure forms, ads and links pass UTMs. Manually added contacts cannot be given a retroactive source.
- Escalate: no. A user who wanted channel-level attribution (YouTube vs website vs collab) was not satisfied with a workaround video (CSAT 2).
- Evidence: recE2AQ3z4xrbMBPU, rec1oQf0aSzIlVhAL

### "How do I pull a report of X?" (sales, automated emails, DND, workflow analytics)
- What worked: the agent recorded a short Loom or Zight video showing the report or filter. The exact paths are not written out in the chats (unverified).
  - Payments received / sales report: Loom (rec9ZF4u2wyjZY9In)
  - Automated emails sent: Loom (reckecpkHG8MOIlA9)
  - Contacts with DND on all channels: Loom showing the filter (rec1ryAtmta5AYWa0)
  - Workflow analytics: only the email data of a workflow can be exported; there is no full workflow analytics export (recS0BKgiZY2oL8Wn)
- Escalate: no.

### "Course progress / member activity report"
- Fix: Products > Courses > Course Analytics (per-member stats). Progress can be exported as CSV. There is no API or dashboard pull for course progress; this was logged as feedback for dev.
- Evidence: recdXsxy0waM78pTk, recDONXOtaDJ50Q2y

### "Agent Report definitions (Dialer / Manual Action / Automation calls)"
- Dialer = outbound calls an agent starts from the dialpad, a contact or Conversations. Manual Action = calls from the Manual Actions queue that a workflow assigns. Automation = calls a workflow or campaign triggers, which ring the agent and then connect the contact.
- Tip: if a sub-feature has no article of its own, search the help center for the parent tab.
- Evidence: recXg56q6lNptShGM

### "Where is my course / how do I unpublish or edit it?"
- Fix: Products > Courses > (select product). To unpublish: click "Publish" > choose "Draft". A Loom on editing helped; one chat had a 14-minute first response and got CSAT 1.
- Evidence: rec1WTsxRydcy9e4C, recqUoWyzn4tb2g4x, recll5Sxf1O9Z3z0I

### "Sell a course separately / paid community access / welcome email not received"
- Create an Offer for the payment and connect it to the product or community. Only buyers get access.
- No welcome email on a test purchase: the email was already registered in the Client Portal, so no new welcome email was sent. This is expected.
- Clone or standalone course questions went to a video call.
- Evidence: recb88M0d63wmu6aC, recCiHJqlA7nOEwua, rechWbnsO4Rvjd9pE

### "Website shows 404 / which domain / where do I edit my site"
- Fix: the agent fixed the domain/home page mapping in the account (steps not shown). Domains are under Settings (bottom left) > Domains. Delete old practice sites to avoid confusion.
- An external site (built elsewhere) cannot be imported. Instead, link its buttons to Hub page or checkout URLs, or embed a link to the funnel.
- Evidence: recFs7DEwKxtvR0Kr, recx7lQJfWT0m2xHd, recolfB9ykui2WNv5, recKQq1YKgPq1cBW0, recK1qknItir1MMxn

### "Terms & Conditions checkbox on booking / share calendar link"
- T&C fix:
  1. Sites > Forms > Builder: create a form and add the Terms & Conditions field with Required turned on.
  2. Calendars > Calendar Settings > (...) > Edit > Form & Confirmation tab: select the form and save.
  3. Remove the long text from the calendar description.
- Calendar link: Settings > share calendar option > copy the link.
- Evidence: recONIMWMvJBpbKzG, recIKvjYF06hi1yrU

### "Phone system requires configuration" / Voice AI number not selectable
- Settings > Phone Numbers shows "Your phone system requires configuration…" and Phone System Settings bounces back to the dashboard. The agent raised a ticket to the admin team, and the update comes by email.
- Voice AI agent not selectable for a new number: the agent assigned it on the backend after confirming which AI agent to use.
- Evidence: rec1fZcBu3Zjlm9ew, recuKr37bmnfFAMYM

### "Sudden flood of other users' messages / contacts jumped 1k to 133k"
- Root cause: the user's permissions were broadened by mistake. The backend reset them to default (only assigned contacts are visible).
- Escalate: yes, backend permission reset. It was fixed within minutes.
- Evidence: receodCranGqpgT1M

### "AI Studio / MacAI / Design AI / onboarding progress bar missing"
- Check Settings > My Staff > Roles & Permissions for AI Studio, then try incognito. The onboarding progress bar only shows on newly activated accounts. If AI features are still missing, open a ticket with the admin/accounts team (ticket number and email update).
- Evidence: rec1XyGfiUnVbzfK9, rec8tw4sF3ttYBnYG

### "API key / Claude MCP connection"
- Private Integration key: Settings > Private Integrations > Create Private Integration. The key is shown once created.
- MCP endpoint shared: services.leadconnectorhq.com/mcp/anthropic/v2 (the agent closed the chat too early, CSAT 1).
- Evidence: reci0dpDV4x7QwEdl, rec0t4O5ANCDSCS1u

### Misc quick answers
- Invoice: Payments > Invoices > Create Invoice (recUJSAeCvmYVbe46).
- Social Planner: Email & Social Media tab > Social Planner. Co-Pilot access and pricing go to the admin team (recTQIb8ndHYInWyQ).
- Companies: Contacts > Companies > + Add Company, then link a contact via its Company field. Use Company Smart Lists with custom-field filters for live counts (recBb4K00WdF2vum7).
- New sub-account: request form, processed in 24-48h. The account switcher only opens existing sub-accounts (recskrlrlhNqP0qiR).
- Brand colors: Marketing > Brand Boards (recePWf5ASMhz444m).

## [Sample A] Escalation and ticket patterns
- Admin team (by email): plan or downgrade access, permissions beyond the plan, Co-Pilot, phone system configuration, missing AI features. Phrasing: "I will create a ticket and they will update you via your email." A ticket number is given. On weekends: "Since it's the weekend, they will give you an update at [email]".
- Backend team: permission resets, lost unpublished work, cookie and compliance questions. A compliance case got a ticket with a list of the items submitted for review and no ETA (rec0kzZIFOM4V2QFG).
- Product or API bugs (e.g. an LC GPT connector routing Opportunity searches to Contacts) and feature requests: "I will make sure to share this with the team" (recnGHmqQZCYtIw4x, recDONXOtaDJ50Q2y).
- Complex setup (website from scratch, webinar plus calendar/Zoom, client portal rollout): offer a Google Meet with a video expert, then close the chat once the user joins. When coverage was short, the agent told the user so (recKMHDdVu6AD2uRb).
- Users who want a scheduled 1:1 get an enterprise booking calendar link (recvRoKfikirSnG03, recK1qknItir1MMxn).

## [Sample A] What went wrong in low-CSAT chats
- recll5Sxf1O9Z3z0I (CSAT 1): first response took 14 minutes, the Loom took another 20, and the user had already asked "are you going to answer me?". The agent did not address the follow-up products-page issue and closed for inactivity.
- recLCgBIPAFrd5BFn (CSAT 1): the agent asked for clarification three times, the Meet link took 5 minutes, the call lagged and dropped, and nobody followed up. Nothing was resolved.
- rec0t4O5ANCDSCS1u (CSAT 1): it took 25 minutes to deliver a Loom, then the agent closed the chat 30 seconds after asking "are we still connected?" while the user was still watching.
- rec1oQf0aSzIlVhAL (CSAT 2): two workaround videos over 30 minutes, neither answering the actual question about channel attribution. The agent should have clarified the goal first.
- recj9JLnIwD1EbHJb (CSAT 4): asked the user to "be more clear" twice, which frustrated them.
- rec8tw4sF3ttYBnYG (CSAT 4): sent a screenshot too small to read and escalated without explaining the cause.

## [Sample A] Good reply phrasing worth reusing
- "Allow me a few moments to pull up your account and look into it."
- "Would you like to hop on a quick call so we can share screens and work through this together?"
- "Since you've joined the call, I'll close this chat — the call team will continue helping you from here."
- "It appears you have restricted permissions, which is why some features aren't showing. You'll need permissions for [feature list]."
- "I'm actively checking on this. Please allow me a few more minutes." (use during long checks)
- "Here's the ticket number for your reference; you'll receive an email once we have an update."

## [Sample A] Facts/gotchas
- "I need help with dashboard" is an auto-selected starter. Users often mean something else (recolfB9ykui2WNv5).
- Downgraded plans keep existing sites and funnels, and they come back after upgrading. The MM success plan noted 2000 contacts and unlimited email (recLICl5IcFtZeSLE).
- msgsndr_id cookie: a functional session cookie used by the chat widget, forms and funnels. It is set even when only "essential" cookies are allowed, without the Secure attribute; this went to compliance (rec0kzZIFOM4V2QFG).
- Dashboard lead counts can differ from contact filters. Contacts from inbound calls or manual add show source "-" (recE2AQ3z4xrbMBPU).
- The onboarding progress bar only appears on newly activated accounts (rec1XyGfiUnVbzfK9).
- Workflow analytics: only email stats can be exported (recS0BKgiZY2oL8Wn).
- Pasting text into the chat widget failed for one Windows user. Workaround: Win+Shift+S for a clipboard screenshot (recI0gWMdkhFBNnvq).
- GrowthHub365: up to 10 sub-accounts via the request form, processed in 24-48h (recskrlrlhNqP0qiR, recBb4K00WdF2vum7).
- Cancellation confirmation: the agent confirmed that the cancellation was processed and that no further billing would follow (rec5iU5sK9LMJboV7).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 1,248 chats. CSAT average 4.64 from 283 ratings (19 rated 1-2). First-contact resolved: 146. Agent mentioned an escalation or ticket in 8%; moved to a video call in 10%.
- What users ask about most: Google Ads / Ad Manager, Google Analytics, lead source and attribution, dashboard widgets, call and AI impact reports.
- Dashboard paths agents gave most often: Settings > Integrations (3); Settings > Domains (2); Automation > Workflows (2); Products > Products (2); Payments > Orders (2); Crm > Contacts (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- reciIE8Hi9Bw80GLA (2025-09-06): "Can I integrate Google Tasks? I'd like to add a widget of my Google Tasks to my dashboard. I tried to find info in the help center but couldn't find it. I already have my Google ac" Agent: Thank you, [name]! As of now, it is not possible to integrate Google Tasks as Simple Business Suite™ doesn’t support direct Google Tasks integration like that. You can still use your Google Calendar integration to track linked calendar events. | You can create a document by going to CRM > Documents and Contracts:
- reclM71jt7LeRWqqT (2026-04-27): "I have a client who completed assignments (I got the notification) but I don't see them in the Analytics > Assessments tab." Agent: Can you navigate to the settings > My profile and tell me the email input in that tab? | Go to integration > Facebook > Manage > Settings and turn of the toogle for sync dm's
- reciFl4YNftpKDReO (2026-04-03): "I keep getting Search Atlas reports but I don't see were the app has been deployed to this account? It used to be and I set up this recurring reports but now it's gone. I'd like to" Agent: In the settings > billing > detailed transcations | In the agency view settings > billing
- recraiMbQ7dR7iujm (2025-11-19): "I have a program (self study) set up in GHL (30-Day Client Enrollment Lead Sprint) and I want to be able to track who is active (vs past) and what stage they are at so that we can" Agent: Hi [name], you can actually track Member progress by going to Memberships > Courses > Analytics | There's Course Progress and Member Progress, both you can try to explore

#### What went wrong in low-rated chats (user reviews)
- rec0t4O5ANCDSCS1u: "He rushed out and hopped off while I was watching the loom video. The issue is still not resolved."
- recLCgBIPAFrd5BFn: "I clicked the link. I'm being signed in. There is too much lag. then it all shut down. No response. Unsure what happened. Unsure why this box came up. We did not even start handling the issue."
- recMC5AYcGKue1C8v: "i was disconnected and cannot connect again"
- recLjBWkx6KqrPCbn: "I prefer to zoom to get my questions asked because it is easier for me to understand that way.  This has been one of my favorite FF features.  Today, I am not able to get on a call because of volume a"
- recerw9eJHZfkAmRH: "Dead end. Hopefully this screenshot will be a continuation of the last Convo...."
