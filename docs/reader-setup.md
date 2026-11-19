# Making the chat reader exact

Out of the box the extension finds the conversation by itself: it locates the reply box, then takes the message list right above it. It never reads the inbox list, the contact panel or anything else on the page. Speakers are guessed from bubble alignment (agent messages on the right by default).

If that's not precise enough on our support site, set selectors once in `server/reader-config.json`. The file is served to every agent's extension, so a change reaches everyone on their next click with no reinstall.

1. In the support site, right-click a customer message > **Inspect**.
2. Find classes or attributes that are stable (not random-looking strings), and fill in:
   - `conversation`: the element holding the open conversation's messages.
   - `message`: one element per message, inside `conversation`.
   - `messageText`: optional, the text part inside a message.
   - `agentMessage`: something only our agents' messages match (e.g. `.message--outgoing`).
   - `botMessage`: optional, something only bot messages match.
   - `composer`: the reply box, if Insert picks the wrong box.
   - `agency`: optional, where the agency name or domain is shown.
3. Test a selector in the browser Console: `document.querySelectorAll(".your-selector").length`.
4. Restart the server, click **Suggest reply**, then **View** to check what was read.

Other options: `agentSide` (`"right"` or `"left"`), `agentNames` (lowercase names that always mean an agent), `maxChars` (default 24,000), `useSelection` (highlighted text wins, default on).

An agent can also click **Change chat area** in the panel and click the message list once; that choice is saved in their browser for that site.
