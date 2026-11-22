---
description: Proven fixes, escalation rules and reply phrasing for 'Funnels, websites, domains and forms' guest-support chats, distilled from Modal Chats (Airtable).
---
# Funnels, websites, domains and forms

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 2009 chats fell in this topic; 123 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "My domain shows a 404 / is connected to the wrong site"
- Symptoms: root or www URL returns 404, or loads the wrong funnel/website.
- Root cause: domain connected without a default page, or mapped to the wrong website/funnel.
- Fix:
  1. Settings > Domains & URL Redirects > Manage (beside the domain).
  2. Connect it to the correct Website/Funnel and set the homepage as default page.
  3. Publish the site; confirm the URL with the user before closing (agent first mapped the wrong site in reclf9uK9WmM76Svx).
- Escalate? No.
- Evidence: reclf9uK9WmM76Svx, rec12J4UWvl0azkK1

### "How do I connect my new website to my GoDaddy/Cloudflare domain?"
- Fix that worked: Settings > Domains > Manage > Connect, pick the website, add the displayed DNS records at the registrar. Agents often connect it for the user, then say "allow ~1 hour for DNS to populate".
- For a subdomain: CNAME `<sub>` -> `sites.ludicrous.cloud`; remove conflicting A/AAAA/CNAME for that host first. Root: A record @ + CNAME www -> sites.ludicrous.cloud.
- A path like domain.com/page = connect root domain only, then set the page path/slug in the funnel.
- Escalate? No; offer a Google Meet if the user is stuck on registrar side.
- Evidence: rec12J4UWvl0azkK1, reckjVUvwmeolSush, recK9jBRxgrD7zcO1, rechGsgTfOnOe5Vhg

### "Connect gives an AAAA conflict but I have no AAAA record" (Cloudflare)
- Root cause: existing A records at the root + Cloudflare proxy (orange cloud) exposes hidden AAAA.
- Fix:
  1. Confirm the domain is not live elsewhere, then delete the existing A records shown.
  2. Connect manually and add the system-provided records.
  3. In Cloudflare set Proxy status to "DNS only" (not Proxied).
  4. If a new error appears after adding, click Retry (worked).
- Evidence: recZJxh8UTXSCgncH

### "Domain has an 'Action required' icon"
- Root cause seen: subdomain verified but not attached to any funnel/site. Not an error; icon clears once attached to a product.
- Evidence: recK9jBRxgrD7zcO1, reckjVUvwmeolSush

### "Site can't provide a secure connection / ERR_SSL_VERSION_OR_CIPHER_MISMATCH"
- Symptoms: DNS resolves correctly to sites.ludicrous.cloud but browser shows SSL protocol/cipher error.
- Fix tried: verify records, delete the domain in Settings > Domains and reconnect; incognito/cache clear.
- Escalate? Yes, if delete+reconnect already failed multiple times: needs backend SSL reprovision. Agent converted chat to a ticket for the GHL team (recVEAOPF71vzvzU1); others moved to Google Meet.
- Evidence: recVEAOPF71vzvzU1, reco7bpnoiTyrZVU8, rechGsgTfOnOe5Vhg

### "Make the image/slideshow/section full width"
- Root causes: section/row set to Boxed; duplicate background element; padding/margins.
- Fix:
  1. Select the section > Styles > Width = Full (or Full Width/100%).
  2. Set left/right padding & margins to 0px.
  3. Check for a duplicated background/image layer and remove it (actual fix in recrjVbgZT8OrraAf).
- Escalate? No; go to screen share early if Loom #1 does not work.
- Evidence: recrjVbgZT8OrraAf, recXe2WJhYe0Ghoo1, recUraZjxW8BX49BB

### "Too much space on mobile / change mobile without breaking desktop"
- Fix: switch the builder to the mobile device view and adjust margins/font/visibility there; build layout in one view first, then fine-tune per device. Save before previewing (preview does not auto-save).
- Evidence: recNUZIUxufPzJKOv

### "Page/tab title shows the template name (e.g. 'GHL Program Purchase', '[Name Of Your] Masterclass')"
- Fix: open the funnel step > page Settings (gear) / SEO Meta > Title; replace template text. This title drives browser tab, Google results and social previews.
- Evidence: recZLMU1qqaUbLzzw, recxgKIDn0gY1MZuB

### "Copy pages between funnels / move a website page into a new funnel"
- Fix: agent recorded Loom using save-as-template / clone step into target funnel. Separate brand = new website (Sites > Websites > + New Website) and connect its own domain. Multiple domains per account are allowed.
- Evidence: recmxc5ORQpBNSjmy, recBbxQPMxXN2x9FH, rec1ctJX09VkLMtYM

### "Form won't save (Invalid Parent ID) / webinar form won't save"
- Root causes: copied form with same custom field relabeled -> Invalid Parent ID; webinar template form is only a placeholder.
- Fix:
  1. Invalid Parent ID: open a new tab, log in, duplicate the form and edit the copy (refresh loses unsaved changes - warn user).
  2. Webinar: create the form under Sites > Forms first, then select it in the webinar funnel page.
  3. Adding custom fields: edit the form in Form Builder, not from inside the page editor (+ button did nothing there).
- Evidence: recKoPxAIaiiIrdEM, rec6zaly6bQtc5MCo, recbhA6NLiMUBNwrL

### "Funnel button goes to wrong payment / course not granted on standalone purchase"
- Fix: update the button action with the new payment link and remove the old one. For standalone product access: workflow trigger Order Submitted (that product) > action grant course/offer access; login email then sends automatically.
- Evidence: recRrtiEVnsRMzybG, recwizhMV4b9xH1pT

### "Wrong tag added / where do form answers go / which email fires"
- Root cause: a workflow with Form Submitted trigger adds the tag/sends email; forms reused across funnels trigger the same workflow.
- Fix: Automation > Workflows, filter by form trigger; show user in Loom. For different follow-ups per funnel, duplicate the form and build separate workflows.
- Evidence: recqBWU375VmpU8on, recNHhrZ1Gqnim9Bf, rectyhL5ThcP6M9Nm

### "Form notification emails send twice (pending + success)"
- Root cause: payment form built-in notification fires on pending and success; no setting to change.
- Fix: turn off form notification, send internal notification via workflow instead; feature request at ideas.gohighlevel.com.
- Evidence: recclMi9bGoIvwkeQ

### "Klarna showing on my payment form"
- Not removable on the native form (system limitation); suggested using an order form on a funnel/website instead; logged as feature request.
- Evidence: recwQU7pr6RhblLdJ

### "Pixel not tracking"
- Fix: if funnel Settings > Events tab has Pixel ID, Access Token and Purchase event, remove the manual script in Settings > Head Tracking Code to avoid duplicate events.
- Evidence: recYDnueKMT60UKVn

### "Video embed (Vimeo) invalid / video too big"
- Fix: correct the Vimeo URL in the video element, save AND publish, then refresh; size via video element > Styles height/width.
- Evidence: recrprVSH1ZjTxOUg, reco7vQs10GIAxAkf

### "Store products / Shopify"
- Store element is native; Shopify not required. Disconnect via Settings > Integrations (Shopify products then disappear from the page). New products: create in Payments > Products with "Include in online store" toggle on (user was in the wrong products section).
- Evidence: recHwzrsajpmvBNXa, rec4VAZcPQ3WSY4I5, recnwqmFLGZFYBIIr

### "AI Studio: publish, swap domain, failed to create, Build with AI missing"
- Swap site on a domain: remove domain from the old site first, then connect to the AI Studio project. AI Studio projects can't be moved into Sites > Funnels/Websites. "Failed to create project" and branding/publish issues went to Google Meet. Build with AI missing: needs Account Admin role (Settings > Team/Roles) - (unverified, user unresolved). Agency confirmed no AI Studio charges on that account after checking with team.
- Evidence: recoy8gsGkOxNJzmz, recSgV5n8Heo7K6Ti, recZNcSN3AC2Fwjl9, recNZkmpYKBBN44jp, recD3YkQXLXAu9WD0

### "Blog: add a blog / edit keywords"
- Create a blog site in Sites > Blogs and publish it before it appears in "choose blog site" on the page element. Categories/Tags: Sites > Blogs > gear icon > Categories or Tags > + Add New / three-dot menu; apply in Post Settings.
- Evidence: recYtklonYKZEIDTI, rec3nfqDKfM7q5jc9

## [Sample A] Escalation and ticket patterns
- Live Google Meet is the main escalation (videorequest tag): "Would you be open to jumping on a quick call so we can walk through this together?" then close chat once user joins. When no video expert is free, agents offer a senior-agent booking link (reczwMOpsnTvHgP5E, recrprVSH1ZjTxOUg).
- Backend ticket: SSL that persists after delete/reconnect -> "I'll need to reach out to the GHL team... convert this into a ticket and share an update via email" (recVEAOPF71vzvzU1). Domain purchase error escalated to backend (recii6T7KHbGRs1VB).
- Product limitations -> feature request: ideas.gohighlevel.com (recclMi9bGoIvwkeQ) or "pass to Development Team" (recwQU7pr6RhblLdJ).
- Custom JS/CSS is out of scope: "consult your developer" (rectsiBWKa6Qnsubr). No done-for-you builds (recSgV5n8Heo7K6Ti).

## [Sample A] What went wrong in low-CSAT chats
- rec6zaly6bQtc5MCo (CSAT 3): told to refresh (would lose work) before diagnosing; closed with scripted wrap-up without asking "anything else?" - user said they had to start over.
- reczwMOpsnTvHgP5E (CSAT 1): user wanted to screen share; ~35 min waiting with no ETA, then pushed a next-week booking link.
- recNZkmpYKBBN44jp (CSAT 1): vague "check permissions" answer; took 45+ min to give a specific path, issue unresolved.
- rec0p5y7wgLa81T2s (CSAT 1): agent took ~5 min to greet, then idle-closed; never answered the simple question asked in the first message.
- recXe2WJhYe0Ghoo1 / recUraZjxW8BX49BB (CSAT 1): repeated bot-style generic steps or Loom only, then inactivity close without confirming the fix.
- recWCQ3M1JkV160t4 (CSAT 1): previous agent's changes "didn't reflect"; agent hadn't read prior chat, user had to repeat.
- recii6T7KHbGRs1VB (CSAT 2): long silences, booking link not clickable, account link sent as raw URL; ~1 hr unresolved.
- recrNemYa0bkbC7Sf (CSAT 1): generic checklist for a workflow test failure instead of checking the account.
- recSgV5n8Heo7K6Ti: agent misread account name as a colleague ("Bright is out of office").

## [Sample A] Good reply phrasing worth reusing
- "To save you time and make things clear, I'm pulling up your account now to check some necessary details on my end."
- "I'll create a quick Loom walking you through it step by step - stay tuned!"
- "Before you delete them, please double-check this domain isn't connected to another live website; removing these records will disconnect it from there."
- "Your URLs and slugs stay exactly the same, so your printed QR codes will keep working - only the display text changes."
- "Would you prefer to wait here, or shall I convert this into a ticket and email you as soon as we hear back?"
- "Is there anything else I can help you with before I close the chat?"

## [Sample A] Facts/gotchas
- Funnel/website CNAME target: sites.ludicrous.cloud (reckjVUvwmeolSush, rechGsgTfOnOe5Vhg).
- Cloudflare records must be "DNS only" (recZJxh8UTXSCgncH).
- Dedicated email sending domain needs a subdomain; header email must use that full subdomain (e.g. name@mail.domain.com) - fixed Hotmail/From issues (receVHmusVX4Hvzgy, recu8ECQwRp9il5zQ). Keep Google Workspace MX unchanged.
- Remove sending domain: Settings > Email Services > delete domain / clear configuration (recb9cy2vCP0Pr8Wo).
- Native cookie consent stored in localStorage key lc_cookie_consent (or leadconnector_consent); no official JS to reopen banner (rectsiBWKa6Qnsubr).
- Inbound contacts from external site: Automation > Workflows > Inbound Webhook trigger > Create/Update Contact > Add Tag (recfBSNhFeSR4P9xS).
- Click tracking: trigger links; stats at Marketing > Emails > Campaigns > Links tab, contact Activity, workflow stats (rec1H2GaqBZkzVS4A).
- Global nav bar / sections: agent showed via Loom (save as global section) (rec9JkW4ORxXFfzR9) (unverified detail).
- FAQ element supports one-at-a-time dropdown toggle; can hide elements but no native "reveal after audio" (recZhEIVpApSE5Q0V).
- T&C/Privacy pages: add funnel pages on existing domain (recmK95rOO0C8Ofaj).
- Community: event photos only via feed posts (recI8Bwpv5AoAsWgA).
- Workflow "Grant Group Access" sends a separate system email, not the custom invitation template (recFNeyIC8z4ReN6M; resolved on call).

<!-- sample B -->

## [Sample B] Recurring issues and proven fixes

### "Domain already in use / connected to another product" (orphaned domain from old account)
- Symptoms: connecting a domain (often to AI Studio) fails with "Domain already in use... Ask your Admin to remove the existing connection"; domain was used in an old/paused account.
- Root cause: stale connection left in another (old) sub-account/agency.
- Fix: 1) Agent verifies ownership and removes the old connection on the backend side. 2) User then adds the DNS records AI Studio provides at the registrar (e.g. GoDaddy) and removes the previous DNS records. 3) Connect in AI Studio.
- If user asks to remove a domain from a paused account, first check Settings > Domains & URL Redirects; it may not be attached at all.
- Escalate? Yes if the connection sits in an account the agent can't see; otherwise agent removes it in-chat.
- Evidence: rechdnov7rcmXpq1s, recTp5C268HUMSjZw

### "Root domain shows 404 but /home works" / homepage is the wrong page
- Symptoms: domain.com gives 404, domain.com/home works; or user wants a different page as homepage.
- Root cause: default/home page not set for the connected site.
- Fix: 1) Settings > Domains & URL Redirects > Manage beside the domain. 2) Select the connected website/funnel and set the correct Home/default page. 3) Save, then test in incognito. Agents sent a Loom.
- Escalate? No.
- Evidence: recufEzYnYqW5FTPJ, rec8mdeLjiicp5S34

### "Blog post URLs return 404 but blog listing works"
- Root cause: blog domain mapping pointed to a wrong value (e.g. "www.1") instead of the real domain.
- Fix: 1) Sites > Blogs > blog settings. 2) Set the blog domain mapping to the correct connected domain (e.g. www.domain). 3) Re-test post links; check Settings > Domains & URL Redirects for conflicting `/post` redirects.
- Escalate? No; agent fixed it directly.
- Evidence: recoU2EgvwzaBvHhf

### "Calendar/booking link redirects to my website home page"
- Root cause: branded (white-label) links domain not set up/verified, so widget URL on the site domain redirects.
- Fix: 1) Add a CNAME at the registrar (e.g. host `links` pointing to the agency's brand CNAME value), leave existing www CNAME unchanged. 2) Agent verifies branded domain in the account. 3) Use calendar Share link again; link becomes links.<domain>/widget/bookings/...
- Escalate? No (screen-share call helped).
- Evidence: recSQXgInFOZ4yJ3k

### "301 redirect not working, old URL still 404"
- Setup: Settings > URL Redirects (Domains & URL Redirects): source domain, path, Redirect To Custom URL.
- Root cause: browser cache / propagation; config was correct.
- Fix: 1) Verify redirect config. 2) Test incognito, other browser, mobile. 3) Wait a bit; it started working everywhere.
- Escalate? No.
- Evidence: recYUOxxrisFwztqV

### "How do I connect my domain / what is TTL / nameservers"
- Fix: 1) Nameservers are changed at the registrar: GoDaddy > DNS / Nameserver settings > Custom Nameservers. 2) Propagation minutes to 24-48h. 3) In-platform domain connect: follow the records shown (Type/Name/Content/TTL); TTL "Auto" is fine. 4) Loom or Google Meet for walkthrough.
- Gmail/Google Workspace works on the root domain; no subdomain needed; platform email sending stays separate from the Gmail inbox. MX record misconfig was the user's issue.
- Escalate? No.
- Evidence: recCNX91la0j0PJN6, recNKekzJmnbw2jMO, recyjwmUjuexH3uVx, recam3tECJy0NrW2a

### "www vs non-www — address bar shows without www"
- Both versions connected and resolving to same site; nothing to configure. Agent explained www is optional prefix.
- Evidence: recqAFm0omZEeMVX5

### "Quiz/survey/form not capturing contact info (names blank)"
- Root cause: no fields mapped to standard contact fields (Name/Email/Phone) in the quiz; for calendar popup intake forms, form/field order in calendar.
- Fix: 1) Add standard Name/Email/Phone fields to the quiz/survey (contact created/updated only when Email or Phone mapped). 2) For calendar forms: Settings > Calendars > pencil icon on calendar > Advanced Settings > Forms and Confirmation; set the intake form/order. 3) Republish and test.
- Data from leads who never filled the form can't be recovered.
- Evidence: recguuvWmg54Bfuib, recz0Jk9CaVpAoXzT, recVwSkfl4KtyVZJ7, recoaDLf9HBwY1Q9r

### "Form won't save — field already exists" / "ParentID is invalid" on survey
- Fix (exists): change the field's unique key (e.g. append `_1`) then save. (recjnhcxacUkCJpt7)
- Copied quiz page created duplicate custom field: agent restored an older version from version history, user rebuilt the page as a new page, then deleted the extra "copy" custom field. Advice: don't copy pages tied to workflows; create new. (rec64Fo0V8bY2BXDd)
- ParentID invalid: bot suggested creating a new survey outside folders / incognito; resolved via Google Meet (unverified exact fix). (recrKJyE8r7GkMXnW)

### "Where do AI Studio form submissions go?"
- AI Studio forms post as external tracking events, not regular Forms entries.
- Fix: Sites > Forms > Submissions > External Forms dropdown > pick the form (listed by ID with name at end). Can export and re-import contacts to bulk-tag.
- Evidence: rectmfGycM9VI7fdH

### "Lead magnet: where does the PDF go / how do I check delivery"
- Fix: 1) Automation > Workflows > Form Submitted trigger on the exact form. 2) Send Email action: attach PDF (from Media Storage) or link; publish workflow. 3) Test with a test email; check spam; check contact conversation history. 4) If PDF too large to attach, compress (agent suggested ilovepdf compress) and re-upload. 5) To swap PDF, replace in the email action/thank-you page.
- Evidence: recxjUrFKuPVRjIHK, recLxG5XEaqnbEh83, recMTz8DrMaBOFdF9, recTn2Pnzr4UOBKDN

### "Test form submission email not arriving for my address"
- Fix: agent tested OK; user resubmitted in incognito and it worked. Also check address typo — a "high risk domain / invalid" email verification was caused by a misspelled address.
- Evidence: recyjtq6hWQcnJFp2, recFZfMAeki2puRiu

### "Checkout: payment block missing / how to test payments"
- Root cause: no product connected to the order form/payment element.
- Fix: 1) Connect a product to the checkout/order step. 2) Use test mode to test (agent Loom). 3) Upsell/downsell: Sites > Funnels > Add New Step > Upsell/Downsell, connect product, one-click. Afterpay/Affirm via Payments > Integrations > Stripe payment methods (may not support one-click upsells - bot answer).
- Product currency can only be chosen when creating a new product; can't change on existing product.
- Evidence: reckI8a7RyjIMDHWS, recVZZWIpHSrBJDCb, recHC007mb4KTgCzU, recXrw9ISuSqlu6be

### "Mobile view differs from builder / elements move on tablet/mobile"
- Fix usually by Loom or Google Meet (section/row/column margins & padding per device). One case with layout mismatch on certain devices was escalated to backend via email.
- Evidence: recMD6fqYgeo5rSwo, rec9Pj4bmiuIU21eq, reccon4y6FboWnstx

### "Website not publishing / images broken after publish"
- Handled via immediate Google Meet with video expert; bot checklist (Save > Publish, Versions, domain in settings, cache/incognito) angered an already-frustrated user.
- Evidence: recZ0jgFfzt6bZeVv, recEw8xF5Op22nhqC

### Builder how-tos (quick wins)
- Button rounding: button > Styles > Border Radius (rec30FHBxdvaos1IT).
- Banner edge colour: check section/row/column Background Color; pop-ups: delete/disable popup or its trigger (recFZ499LmEJKdc2X).
- Multiple videos autoplaying: turn autoplay off in each video element's settings (recVFazRVQ6Zc22Un).
- Custom code: Code element shows only in Preview, not in editor; header/logo must be edited inside the code (recn8O0wmDfSN5SBK).
- Meta pixel: add in funnel Settings (tracking code) or via a Code element on the confirmation page — either works (recVRNs9VrslqWFtZ).
- Opt-in checkbox: add Checkbox field; workflow Form Submitted > tag > If/Else on field Is Not Empty > Add Tag; save + Publish (rectTH19DpDwF8iKJ).
- Reply to form submission: Conversations or Contacts > contact > SMS/Email tab (rec2OsmyOaXjHCu6I).
- Form link: Sites > Forms > share link (`.../widget/form/<id>`) (recMTz8DrMaBOFdF9).

## [Sample B] Escalation and ticket patterns
- Feature gaps escalated as "feature suggestion to dev team": AI Studio project URL subdomain can't be renamed (recfyQSsDrydUcdgz); recurring on-demand/evergreen summit webinar not possible (recJ6tyfJ1dNjy3cC).
- Backend escalation with email follow-up: mobile layout mismatch across devices (recMD6fqYgeo5rSwo): "I'll escalate this to our backend team... they'll reach out to you directly via email."
- Plan/feature-entitlement questions (e.g. is AI Studio included) redirected to the agency admin team email (recAOvZZmoUhZd3aL).
- Follow-ups on prior escalations: bot can't see past tickets; agents moved to Google Meet (recssLpuZGqrF9QRU, CSAT 4).
- Heavy use of Google Meet "video expert" handoff; chat closed once user joins. Weekend staffing caused ~40 min wait (recRbSw0Z3gEd0ZRH).

## [Sample B] What went wrong in low-CSAT chats
- recguuvWmg54Bfuib (CSAT 1): slow responses (2-3 min gaps), asked for funnel link then gave generic "add a field" answer; user solved it themselves. Lesson: answer fast with the exact step (add Name/Email fields to quiz).
- recssLpuZGqrF9QRU (CSAT 4): user returning about a prior escalation got no status; no ticket lookup, just a call.
- recFZfMAeki2puRiu (CSAT 4): ~10 min before agent joined, then more waiting; user found own typo. Should check the address spelling first.
- Other risk patterns: Loom with no audio (recVwSkfl4KtyVZJ7, recLxG5XEaqnbEh83); wrong Meet link sent and 15+ min delay for a new one (recVwSkfl4KtyVZJ7); bot repeating generic checklist to angry user (recZ0jgFfzt6bZeVv); visitor told "no one is in" the Meet (reckQMdWBmdCQTsaL).

## [Sample B] Good reply phrasing worth reusing
- "Let me record a quick Loom walking you through it step by step — please make sure your volume is up."
- "Would you like to hop on a quick Google Meet so you can share your screen and we sort this out together?"
- "Both versions are connected and point to the same website, so there's nothing more you need to configure."
- "Since you stepped away, we went ahead and fixed it for you — the Loom shows what we changed."
- "That option isn't available right now; I've passed it to our development team as a feature request."
- "Could you try it in an incognito window? Your browser may be showing a cached version."

## [Sample B] Facts/gotchas
- "Internal Domain" label = domain purchased within the platform (reclAuWP7Ek3Wsuwf).
- No "temporary/maintenance page" feature; edits go live on publish (recMEhfdXsun4li3f).
- Funnel publish needs a domain; new account may need default free subdomain assigned (recvXNVXZZzJMyCK4, unresolved).
- AI Studio: project URL subdomain not editable; prompting AI to rename it doesn't work (recfyQSsDrydUcdgz).
- AI Studio form submissions land under Forms > Submissions > External Forms (rectmfGycM9VI7fdH).
- Product currency fixed after creation (recXrw9ISuSqlu6be).
- Documents & Contracts can be sent via workflow after form submit; e-signature/date fields still work (recvVLh1DPWpjmwfF).
- Copying a quiz page duplicates its custom field; version history can restore (rec64Fo0V8bY2BXDd).
- Facebook lead form changes need re-linking in the Facebook form integration/workflow; leads route to pipeline via workflow Create/Update Opportunity (reccASDYHGflIP1zj, details in Loom - unverified).
- Delete test submissions without deleting contacts: handled on call (recmVXMOJMHiKnRlx, steps unverified).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 24,865 chats. CSAT average 4.76 from 7,300 ratings (280 rated 1-2). First-contact resolved: 3,733. Agent mentioned an escalation or ticket in 5%; moved to a video call in 15%.
- What users ask about most: connecting a domain and its DNS records (the most common single task), 404 errors after publishing, landing/home/sales pages, lead magnets, forms and surveys, blogs.
- Dashboard paths agents gave most often: Settings > Domains (125); Sites > Funnels (75); Sites > Forms (32); Sites > Websites (29); Automation > Workflows (21); Payments > Products (21); Settings > Business Profile (15); Settings > Email Services (15); Settings > Domain (15); Settings > My Staff (13); Sites > Blogs (12); Settings > Custom Fields (11).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- rechm5jMgwhceY4yw (2026-10-13): "Hi I have a staff member who needs to review my SEO of the website I've built. How can I get her the website access details within the hub so she can start improving my site?" Agent: She can do this directly from her own account, as she already has access. | When you saved her profile under Settings > My Staff, the platform automatically sent an invitation email to her inbox. I’ve just triggered a password reset email for her so she can set a new password and log into her account
- recB4bInpGoTuzTnw (2026-10-10): "Hi [name], how come Norton antivirus keeps saying my website isn't safe?" Agent: To get this sorted, the best next step is to completely delete the current domain connection and start fresh. Head over to Settings > Domains & URL Redirects (or just Settings > Domains ), locate your connected domain, click the three-dot menu next to it, and select Delete . Once that is fully clear | Can you please name me your domain fast so i ca
- recHUSZG5aNGISdfy (2026-10-09): "is there a way to find which products were used in a funnel? the thing is they are all named the same title and right now we're having a hard time figuring out which product were u" Agent: To check which specific products are attached to a funnel when they share the exact same title, you can inspect the funnel steps directly: Go to Sites > Funnels and open the specific funnel. Click on the specific funnel step (such as an Order Form page) where the products are being offered. Click on | Here is the exact breakdown mapped to those spe
- recqn4jzoxpnPHufv (2026-10-09): "Is my last chat still visible here?" Agent: You will need to go to page edit mode > Click on form and you will find settings on the left-hand side, Select Go to Next Step in button actions! | Perfect approach, or even if you misplace the instructions, you can always come back to us for assistance. We are always happy to help.
- recwGil5CUe2jMBU5 (2026-10-09): "Hi, I'm trying to link my CTA to the Welcome page. I took screenshots to show you what happens. I haave the CTA connected to 'popup', it works. Once I fill out the form and submit," Agent: Gotcha, i have fixed that on my end, please test: viki.coach/mbymi-opt-in-page | You will need to go to page edit mode > Click on form and you will find settings on the left-hand side, Select Go to Next Step in button actions!
- rectM6Nyb2bUVaCn3 (2026-10-07): "I need help setting up my domain." Agent: Gotcha, let me guide you on this. | You can navigate to the support button> click on the courses> you can get the training course videos from there!
- rec7xrEqILt5VvcSW (2026-10-07): "ICould you please help me with font on this Lead magnet page?" Agent: You can find the builder URL by going to Sites > Funnels (or Websites) in your left menu, clicking into your funnel, and opening the Lead Magnet page in the editor. Just copy the full web address from your browser's top address bar while you are inside that editor page and paste it here! Once you sh | Would you like to hop on a quick video call wit
- rec1lm2whd2K3VOIw (2026-10-05): "Hi there, I changed my idea and create a new name, brand and domein. What do to with my old journeyofagilegrowth domein?" Agent: You can connect the new domain to the mastermind that you want to use. | You can check under settings > domains > the domain is now removed.
- rec4Hzxe3y0MaTmp2 (2026-10-03): "i test the clanedar off my website and it sent me a message confirmation my appointment and the title comes out as (Main Romie Madrigal) not my business name" Agent: Romie, you will be able to change the business name "[name]" from Business Info. For meeting location, please go to Settings > Calendars and edit your calendar | Gotcha! In order to have the other two deleted, please reach out to our admin team at [email] or send a ticket at: https://support.lyttlesisterssupport.com/support/tickets/new and they wil
- recdxVLe0YTfKxanv (2026-10-03): "I need help with a funnel/website-related issue." Agent: You can find it in Marketing and Sales > Email and Social Media > Trigger Links. Just click on the three dots and you can change the lead magnet link there
- recKbTJiqtfF9UQt6 (2026-10-02): "Is it possible for me to connect my domain rebeccaklepic.com to a WordPress site that I am about to bring up?" Agent: Yes Rebecca, you can connect that domain to your WordPress site, but you will have to disconnect it first from where it is already connected | You just have to delete the connected domain from Settings > Domains and then you will be able to connect it to your Wordpress site
- recglaCRVesA7VqXR (2026-09-30): "I've created a form but I don't know how to connect it to an email with my downloadable file and then add it to my website - and I want to then have an additional four sequence ema" Agent: Great question, [name]! We can set this up seamlessly using Workflows and the Website Builder. Here is the step-by-step breakdown: 1. Upload Your Downloadable File Go to Settings > Media (or Sites > Media) and upload your file (PDF, guide, etc.). Once uploaded, click the three dots on the file and se | Connect the Form to an Automated Email Sequenc
- recODDjavOByx81pF (2026-09-29): "I want to connect my Replit website to Mastermind so I can capture my clients emails?" Agent: Here is how you can set that up step-by-step: In your Mastermind account, navigate to Sites on the left-hand menu, then select Forms > Builder at the top. Click Create New Form and build your form to capture the email (and any other information you might need). Once your form is ready and saved, cli | Ah, got it! That makes total sense. Since you d
- recDA8wvAMIJifTvG (2026-09-28): "Help to connect funnel to transferred domain" Agent: For your concern about updating email, you need to navigate to contacts>search your contact>open contact card and update the email | Once you connected the domain here you need to verify the DNS records from here too.
- rec594HXLkt3PX3JS (2026-09-24): "Hi, I have my external domain elleoliver.com connected then I have two sub domains. It says one sub domain is connected to Email. Can I use the other sub domain as a funnel? Should" Agent: Chanelle, there is no funnel, website created for you. You will need to create funnel first and then you will need to connect the sub domain with it. | You will need to navigate to the Sites > Funnel > Create Funnel

#### What went wrong in low-rated chats (user reviews)
- reczAp1A9INmG1hdA: "this service is the worse, I can't get help with a problem your company stated would not happen"
- reczd9bcgwaHa7s2h: "took forever top get almost nothing accomplushed"
- recxht4KjiMmSElUY: "the opposite of what i needed"
- recLBeGDpvA0x8YhH: "I cannot provide feedback at this point as the problem I have has not been at all solved. Waiting for correspondence regarding where my lengthy list of request that Clara was submitting went."
- recXID4DjmR3tXpyF: "Did not understand the issue at all. Looked at the surface without investigating the underlying problem."
