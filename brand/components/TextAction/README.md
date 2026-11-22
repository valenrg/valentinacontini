A direct text link with an arrow that moves 5px on hover and focus; the default call to action instead of an oversized button.

The consumer provides: an `a.vc-link-arrow` with a verb label (`OPEN`, `EXPLORE`, `DOWNLOAD`, `SEE BUILD`, `SAY HELLO`). It takes the accent of its theme and surface and is at least 44px high. A link with `target="_blank"` shows the arrow ↗ and needs an accessible name that says it opens in a new tab.

- Do use it for navigation to a page or document.
- In CT LAB, `EXPLORE PROJECT` goes to an overview and `OPEN FIELD FILE` to the technical record; keep them distinct.
- Do set `data-surface` on its section; never colour the link by hand, so core purple never lands on ink.
- Don't make it a rounded filled button.
