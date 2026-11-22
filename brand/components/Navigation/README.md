Wordmark on the left, a few concise links on the right, with an underline that grows from the left on hover, focus and the current page.

The consumer provides: the links (a `ul.vc-nav-list` of anchors), `aria-current="page"` on the active link, and an `aria-label` on the `nav`.

- Do keep the wordmark as text in the `wordmark` style; there is no logo file.
- Do collapse to a dark full-screen menu at `breakpoint-nav` that closes on Escape and shows clear active and focus states.
- Do say "opens in a new tab" in the accessible name of any link that opens one.
- Don't add icons, buttons styled as pills or dropdown chrome.
