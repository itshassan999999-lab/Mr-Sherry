---
description: Proven fixes, escalation rules and reply phrasing for 'Social, Facebook/Instagram/Google integrations' guest-support chats, distilled from Modal Chats (Airtable).
---
# Social, Facebook/Instagram/Google integrations

Source: Modal (GS) base > Modal Chats table, human-handled chats Aug 23 to Oct 20 2026. 254 chats fell in this topic; 59 were read in depth (best rated plus a few CSAT 1-2). Record IDs (recXXXX) are citations you can open in Airtable. Fixes marked (unverified) were seen once or not confirmed; check current GHL docs before relying on them.

<!-- sample A -->

## [Sample A] Recurring issues and proven fixes

### "My Facebook page doesn't show up when I connect" / "only my other page appears"
- Symptoms: the FB connect popup lists only one page, shows a blank list or a page that can't be selected, or the user's own profile is missing.
- Root causes: Meta permissions granted to LeadConnector didn't include that page. The user doesn't have admin access to the page. The user is trying to connect a personal profile.
- Fix:
  1. Log into the personal FB profile that is admin of the page. Go to Settings & Privacy > Settings > Business Integrations, find LeadConnector and click Remove. This doesn't delete data.
  2. In the CRM go to Settings > Integrations (or Marketing > Social Planner > Socials > Connect) and reconnect.
  3. In the Meta popup click "Edit Settings" and select All Pages, or tick the missing page.
- Escalate? No. If LeadConnector isn't listed in Business Integrations, move to a video call (rec8kd7sXD0X29udm).
- Evidence: recpTuPk6cbxm9EQ9, reclwG8hzRlJMyo0C, recCnJYojMMzHlyFZ, rec8kd7sXD0X29udm

### "Can I connect my personal Facebook profile?"
- Social Planner connects FB Pages, not personal profiles, even when the profile is in Professional Mode. The fix is to create a Business Page, become its admin and connect that page.
- More than one FB account or page and more than one IG account can be connected via Social Planner > Socials > Connect.
- Evidence: rectCTz6fdAg5zxGP, reclwG8hzRlJMyo0C, recikBBD1UKT9Q2oj

### "Post failed: token expired/revoked, but the account shows connected"
- Symptoms: the error "Social Account token has expired, been revoked, or is otherwise invalid" persists after several reconnects, while status still shows Connected.
- Root causes: a stale token, or permissions that didn't refresh. The same FB profile may also be linked to another org/GHL account.
- Fix:
  1. Disconnect the account in Marketing > Social Planner > Socials (or Settings > Integrations > Facebook & Instagram) before reconnecting. Don't just reconnect over it.
  2. On FB, remove the app under Settings & Privacy > Settings > Business Integrations (or Apps and Websites).
  3. Reconnect with the profile that has full page admin rights and allow all permissions. Confirm IG is a Business account linked to the page.
  4. Publish a small test post.
- Gotcha: removing the app on FB can break the connection in the other org too, so reconnect both.
- Escalate? Video call if it's still stuck. The bot says to type HUMAN for a backend check.
- Evidence: recxpaYwxEN77oty2, rec8kd7sXD0X29udm

### "Facebook form field mapping is missing" / "my FB lead form won't show in mapping"
- Root causes:
  - The UI moved: mapping now sits under the 3-dots menu on the Facebook integration (Settings > Integrations).
  - The form doesn't appear until the lead ad is published and active.
- Fix:
  1. Go to Settings > Integrations > Facebook & Instagram and open the 3-dots menu, then Facebook form field Mapping.
  2. If the form is missing, check the ad is published. "Published & Approved" is enough even while the ad is still "Preparing".
  3. Disconnect and reconnect FB.
  4. Select the page and form, map the fields and save.
- Agents can disconnect FB from their side, but only the user can reintegrate it.
- Evidence: recvlN8L5ZIM9goCV, reczusdJdnzB55fZy

### "Automate follow-up for Facebook lead form leads" (note, tag, email)
- Fix (bot and agent):
  1. Go to Automation > Workflows > + Create Workflow > Start from scratch.
  2. Add the trigger "Facebook Lead Form Submitted" and filter it by the specific form.
  3. Add actions: Add Tag, Add Note (with field values), Send Email.
- Evidence: rec2RykmanQISvL7y

### "Instagram auto-replies keep sending, turn them off"
- Root cause: a published workflow with an IG comment or DM trigger. Another possibility is a Conversation AI bot with IG enabled.
- Fix:
  1. In Automation > Workflows, find workflows with IG comment, IG DM or "Customer Replied" (Instagram) triggers and set them from Published to Draft.
  2. If a bot is replying, go to AI Agents > Conversation AI > Agent List > bot > Bot Settings and disable the IG channel.
- Evidence: recJyxatCVMPgvHAz

### "WhatsApp connected/paid but not working"
- Root causes:
  - The number isn't verified by Meta yet, or is still under review. Review takes about 5 min to 2 hours, sometimes longer.
  - Meta's code request returned "servers temporarily unavailable, wait 1 hour".
- Fix:
  1. Check the number's status in Settings > WhatsApp.
  2. Complete the Meta number verification.
  3. If Meta's servers are unavailable, retry after 1 hour.
- Gotchas:
  - The number can't be active in the WhatsApp or WhatsApp Business phone app at the same time.
  - The free WA Business app is not the platform, so the user must subscribe to WhatsApp in the CRM.
- Evidence: recPDm7BYMKs3xdU8, recBcLC1UuxIAi8KI, recPL5UcqPCMVAzxB, rec2itpZKneeSpT30

### "How do I connect / subscribe / unsubscribe WhatsApp?"
- To connect: Settings > WhatsApp (Subscribe to WhatsApp), or Settings > Integrations > WhatsApp > Connect. Then pick or create a WABA, verify the number, and set the business profile.
- Templates: Settings > WhatsApp > Templates. Each new template needs Meta approval, which takes minutes to about 2 days.
- Workflows: a WhatsApp flow can use a Wait-for-reply action with an inactivity timeout to move non-responders on.
- Cancel: the agent disconnected WhatsApp from Integrations to stop the about $29/mo charge (recrDmOURygflHCHM).
- Escalate? Yes if subscribing fails with "sub-account is paused or inactive". That's a billing/admin issue; send the user to the agency admin email (recU3f3wEk2OHFqMG).
- Evidence: rec0TCPh3wqfa3Aj2, rec2itpZKneeSpT30, recBcLC1UuxIAi8KI, recrDmOURygflHCHM

### "Is my Meta Pixel installed / working?"
- Fix:
  1. In Meta Events Manager go to Connect Data > Web > create the pixel and choose "Add pixel code manually". Copy the full base code.
  2. Paste it into the funnel or website at Sites > [funnel/website] > Settings > Head Tracking Code. One agent said body tracking, so treat head as standard.
  3. Save and publish.
  4. Verify with the Meta Pixel Helper Chrome extension or Events Manager > Test Events.
- There's no native in-app checker. One agent suggested a third-party extension.
- Quiz/form submit events: a Meta Pixel ID can be added to the quiz (MasterMind). The "On Form Submission" event was discussed, and the chat moved to a video call.
- Evidence: rec2PQLrFElt7SEkA, recZWhARwu4WhUJke, reccDKxsE3rvFWy6t, recUB37jxgSD3sRGX, recK5qa8yfM7r3FfB

### "TikTok connect window opens blank and closes"
- Fix: open tiktok.com in the same browser, log out of TikTok, then reconnect from Integrations or Social Planner. It worked once the user was logged out.
- Evidence: recJXDxrFzvDtfH6X

### "LinkedIn accounts disconnected and won't reconnect"
- The agent attributed it to user permissions and sent the user to the agency admin. Unverified root cause.
- Also: LinkedIn posts can include a link but no CTA button. Paid LinkedIn ads are built in LinkedIn.
- Evidence: recNsZqiZAkLQ57MF, recY95EZnalj6wrgt

### Social Planner how-tos (reels, clone, cross-post, watermark, failure alerts)
- Clone a post: you can change the target channels in the composer by deselecting and reselecting accounts. A channel only shows if it's connected under Marketing > Social Planner > Socials.
- IG supports image, video, carousel, Reel and Story. TikTok supports video.
- One post can go to several channels at once (IG, FB, TT, YT, LinkedIn, X), from desktop or mobile.
- Watermark: a per-post toggle under Advanced options, with a global setting in Social Planner settings. It overlays the logo, so already-branded images end up with a double logo.
- Failed-post email alerts: Marketing > Social Planner > Settings, not My Profile > Notification Settings.
- Evidence: reca3dtndU5y2qZmC, recdrjYMR2cYgn4Qd, rec9ZqPJ4ZarNIojO, recTUqWbJKveqCPlV, recOaFw7GHfOT2gwg

### "Ads, lead ads and posts: where do I connect each?"
- Ads and lead forms: Settings > Integrations > Facebook & Instagram. Organic posts: Marketing > Social Planner > Settings/Socials.
- Ad Manager error "too many calls for this account" went to a video call (unverified cause).
- AI Studio creative: download the asset and upload it in Marketing > Ad Manager.
- Evidence: recJVCm89tZHVLh8F, reckPzoxh70rSH1PD, recSkHKtpH4R6y9fi

## [Sample A] Escalation and ticket patterns
- Video call (Google Meet) is the most common escalation for social and permission problems.
  - Agents say "arrange/check video call availability".
  - Queue wait can be 45-60 min. The alternative is booking a scheduled call with a senior, which is not immediate.
  - Agents close the chat once the user joins the Meet (rec8kd7sXD0X29udm, recGBD66iScfhdwDD, reckPzoxh70rSH1PD).
- Ticket: the user asked for a callback, so a ticket ID was given with "admin team reaches out, expected response within 24 hours" (recccprByUSbdN5cS). For a build/quality complaint, the agent took the email, said it would be prioritized, and said the team would reach out by email (recX8kbRDh0kGKtF9).
- Backend/product bugs (blog meta descriptions not rendering, H1 and SEO title merging) were escalated to GHL Support with screenshots. Follow-up was by email (recrEInz9S5WMQgFT).
- Billing, account pause and permission issues go to the agency's admin email (recU3f3wEk2OHFqMG, recNsZqiZAkLQ57MF).
- A2P/toll-free verification rejected (error 30527 "business registration number invalid") goes to the agency's phone-verification booking link (recYMp5tj0H2tKiXd).

## [Sample A] What went wrong in low-CSAT chats
- recZwK05fBDtemMyR (CSAT 1):
  - The agent contradicted the user ("some are scheduled") instead of investigating why the third-party posts stayed draft.
  - The agent told the user to click "post now" manually.
  - The agent said there are no how-to videos.
  - The user left saying "I will work on this myself."
- recSkHKtpH4R6y9fi (CSAT 1): the chat kept dropping on the user's app. The agent's instructions didn't match the user's UI (no download in Media Library). It took about 45 min before a video call.
- rec9Dya7ayOWlChGl (CSAT 1): a billing/tier upgrade question. The agent gave generic portal steps that didn't match what the user saw (Stripe portal), couldn't explain the plan difference, and the chat cut off at "let me check with the team".
- recrEInz9S5WMQgFT (CSAT 1): a 13-min wait for a human, then about 1.5h of "taking longer than expected" holds. The escalation summary only arrived by email after the chat closed.

- Weak spots: blanket "yes" to 10 ManyChat-parity questions unverified (rec3xAhI44ye8QFpb); re-asking for info already given (recREWK8JrR1rjLqS).

## [Sample A] Good reply phrasing worth reusing
- "This usually happens when the permissions on Facebook's end just need a quick refresh to include that specific page."
- "Don't worry, removing it won't delete any of your data, it just resets the connection."
- "When Facebook asks which pages to link, click 'Edit Settings' and select All Pages."
- "A connected status can remain visible even when the posting token is expired, so let's fully disconnect before reconnecting."
- "Would you like to hop on a quick video call so you can share your screen and we get this sorted faster?"
- "To save you time, I'm pulling up your account now and recording a quick Loom for you."
- "Since this needs a backend check, I've escalated it with your screenshots and we'll follow up by email as soon as we hear back."

## [Sample A] Facts/gotchas
- Support can disconnect FB, but the user must reconnect it themselves (reczusdJdnzB55fZy).
- Removing LeadConnector on FB Business Integrations affects every org using that FB profile (recxpaYwxEN77oty2).
- WhatsApp:
  - Costs about $29-29.90/mo (recrDmOURygflHCHM, recU3f3wEk2OHFqMG).
  - Needs a platform number that isn't on the phone app at the same time (recPL5UcqPCMVAzxB).
  - Templates need Meta approval (rec2itpZKneeSpT30).
  - Opted-out (DND) contacts must re-opt-in before you can message them again (rec2itpZKneeSpT30).
  - A paused sub-account blocks the subscription (recU3f3wEk2OHFqMG).
- A Claude MCP is available via private integration: services.leadconnectorhq.com/mcp/anthropic/v2 (recX8kbRDh0kGKtF9).
- Phone numbers bought in the platform: the agent said they can be ported out later (recCdV5H9C4ZzdMTX, unverified).
- Repeated old text in SMS came from a custom value variable, not hard-coded text. The fix was editing or removing the custom value in the message (recZ2k6AKTa19qjXh).
- Two businesses: separate sub-accounts, each with own domain, IG and WhatsApp (recNSQx56fR4apXRa). Funnel UTMs auto-captured in contact Attribution; FB/LinkedIn UTMs via custom fields + form mapping (recqXS4aCAKYVFsPS).

<!-- full-history -->
## Full history, Mar 2025 to Oct 2026 (all human-handled chats)

Added Oct 21 2026 from every human-handled chat in Modal Chats (117,242 chats). The sections above came from reading chats in depth; this part is computed across the whole history, and the examples are automatic excerpts of the agent's key message, so check a path in the app before quoting it. Where an excerpt conflicts with the playbook (for example handing out an email address instead of escalating billing in chat), follow the playbook.

- Volume: 2,717 chats. CSAT average 4.7 from 614 ratings (31 rated 1-2). First-contact resolved: 300. Agent mentioned an escalation or ticket in 6%; moved to a video call in 11%.
- What users ask about most: Social Planner, Google Business Profile, connecting Facebook/Instagram pages, Meta pixel and ads, WhatsApp Business (a noticeable share of these chats are in Spanish).
- Dashboard paths agents gave most often: Settings > Integrations (38); Settings > Integrations > Facebook & Instagram (11); Marketing > Social Planner (7); Settings & Privacy > Settings (5); Settings > Integration (4); Settings > Whatsapp (3); N > Whatsapp (3); Settings > Whatsapp > Templates (3); Settings > Integrations > Facebook (3); Settings > Custom Fields (3); Marketing > Ad Manager (2); Marketing > Social Planner > Settings (2).

#### Past answers that worked (CSAT 5 or first-contact resolved; newest first)
- recpTuPk6cbxm9EQ9 (2026-09-28): "Cannot connect my Facebook page it only shows my other business page" Agent: To fix this, we just need to reset the connection. Here is how you can do that: Log into your Facebook account in a new tab. Go to your Facebook Settings & Privacy > Settings > Business Integrations (you can also just search for "[name]" in the Facebook settings search bar). Find Lead | Alex! You will actually want to do this from the personal Face
- recTUqWbJKveqCPlV (2026-09-02): "In order to get notifications when a social media post fails, what should I have turned on in Settings > My Profile > Notification Settings?" Agent: AI Overview To configure email alerts when a social post fails in CRM, you actually do not manage this toggle under Settings > My Profile > Notification Settings . Instead, failure notifications are controlled directly inside the Social Planner settings
- rec2itpZKneeSpT30 (2026-08-26): "Can we connect whatsapp to conversations on automator?" Agent: You can navigate to settings>whatsapp and add number there. | For WhatsApp templates, go to Settings ,WhatsApp ,Templates, you can add new ones there. Just a heads up, each new tem
- recmLlQh8Nwr8hmXs (2026-07-23): "Hi, I was wondering if I can set up a meta description in my funnel page, and how?" Agent: Yes, you absolutely can! Setting up a meta description is a great way to improve your page's SEO. Here are the step-by-step instructions on how to set it up: Open your funnel and click Edit Page to enter the funnel builder. In the top menu of the builder, click on Settings and select SEO Metadata fr | You can change it in the seetings>custom values
- recoHaJsatUoYXTLt (2026-07-15): "How do I link LinkedIn to the CMM?" Agent: Navigate to settings > integrations and then connect your linked.
- recfOaKGZ4ENSHyOd (2026-07-12): "Subaccount ADU Advantage Registered email: [email] Name Sharon Barnes. I need help connecting my YouTube account. Here is what I see when lead connector is trying to connect. I cho" Agent: Got it, [name] can connect it through the private integration. Navigate to the settings> Private integrations "Can I connect to Alignable through GH365?" | Got it, If you want to change the path of the funnel you can do this. It matter in the case if the funnel is not working correctly.
- recRKNfXV9PYe3N6a (2026-07-02): "is it possible to look at the stats of personal linkedin post if I arrange it under the social planner?" Agent: For you to connect your LinkedIn, just click on the "+Socials" at the top right > Then hit "Connect LinkedIn". Have you tried to reconfigure the filter and the date range to see if the posts would be visible there? | Could you test it out again, please? I've tried to create a post and selected a video, but it still allows me to put a caption. Pleas
- recmZRElFcVMncZyS (2026-06-29): "hi, I can't seem to find Instagram to install under App Marketplace... Is it available?" Agent: Head over to Settings > Integrations and you will see the "Facebook" integration. While connecting the Facebook account, you can also connect your Instagram account | Gotcha! For that, just head over to Marketing > Social Planner. Your instagram account is already connected:
- reccjCyDwhAEwBXLM (2026-06-20): "hello I want to set up my reveiw page. I want to connect my reviews which I have on Google business. I already connected this account but I don't see my reviews from Google here on" Agent: If you've already connected your Google Business account but don't see your Google reviews in MasterMind, please make sure that the correct Google Business Profile location has been selected and mapped. You can verify this by going to Settings > Integrations, selecting Google Business Profile, and e | The "Your payment method is missing" notificati
- recQHaNUo8IfEjZ52 (2026-06-18): "my first facebook forms ad did not automatically go into snipey lead, everything is linked properly from what I can tell" Agent: In any case Zac, you can also trubleshoot this if you go to the integration > Click on the 3 dots > Troubleshoot > Leads are not syncing automatically. | If it still does not sync leads automatically, please let us know and we will be escalating this to our development team Zac.
- recwub3Fa1mCJQ5cj (2026-06-12): "Following up on previous conversation, where do I add the Meta Dataset ID in my MBH account so that I can select it from the dropdown in the Meta CAPI action step in a workflow?" Agent: Tyler, I have just confirmed and you will need to connect the Facebook Meta Ads account in order for the Dataset ID to populate. How to set up and select your Dataset ID: 1. Connect your Meta Account to MM Go to your MM sub-account and navigate to Settings > Integrations . Click Connect under Facebo | To avoid the connection issue, yes Tyler, you w
- recqmXjQGLJGAVDe5 (2026-05-12): "help me connect my facebook page in social planner" Agent: You will have to go in social planner> Social planner setting and click on connect social. | Okay no worries. Could you please try refreshing your browser or might even change the browser if its possible then if the issue still persists we'll look for another workaround. Its working on my end
- reciCJEJhBS3xdFgx (2026-05-12): "Can I get help with mapping facebook instant form fields into Compass?" Agent: If I'm understanding correctly, you want to know where you can find the facebook mapping fields, am I right? | Under settings > Integrations, click on the 3 dots next to it in which it will show you the mapping fields😊
- recE7LnaiMXN5Yz9t (2026-03-09): "how to delete this FB page that's not needed to be here" Agent: To delete a Facebook page, log in, click your profile picture (top right), and switch to the page. Go to Settings & privacy > Settings , then select Privacy > Facebook Page Information (or Access and Control ) to choose "[name]" | Gotcha! For that, you will need to reach out to Facebook Meta support as they will be able to guide you better on this.
- recFim4I5EG2AVDvb (2025-12-29): "The Social Planner Statistics does not update. I have 3543 followers on Instagram and the Stats show that I have 23. The Facebook stats are also wrong. Also, the Comments section o" Agent: To connect your Facebook Group to the Social Planner in The Rainmaker Family, follow these key steps: • Make sure you have an Admin role for the Facebook Group. • Add “Lead Connector” as an authorized app for the group in Facebook’s Group Settings. • Go to The Rainmaker Family > Marketing > Social P | For this concern, we'll need to escalate this i

#### What went wrong in low-rated chats (user reviews)
- rec9Dya7ayOWlChGl: "Whoops, we were talking and it just cut off"
- recRRAuKcS8cTPMYD: "revisen su sistema, no es posible que no puedan resolver un problema de ustedes como lo es mandar SMS con el número que es y no enviar todo con WA1 Connector"
- recZwK05fBDtemMyR: "I feel the rep was not understanding my inquiry.  I was inquiring as to why none of my GBG social media posts have posted at all this month.  The rep was stating some had.  The only ones that posted w"
- recldTCueCYUt7vV3: "did not understand what I needed"
- recS12CKXlCuXuxiF: "I waited for so long. When an agent finally got assigned to me, I wasn't able to see it immediately and got disconnected."
