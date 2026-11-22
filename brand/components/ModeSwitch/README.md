A row of mutually exclusive options for switching an instrument's view or mode; the chosen option inverts to the opposite surface, from the v1 manual's expression switch.

The consumer provides: `div.vc-mode-switch` with `role="group"` and an `aria-label`, containing two to four `button`s, each with a two-digit `span` index and a short label. Exactly one carries `aria-pressed="true"`; script keeps it so:

```js
group.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  group.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
});
```

- Do use it for views of the same content (overview, pairs, sources), where every option is always available.
- Do keep labels to one or two words; the numbers are order, not counts.
- Use `Button` with `aria-pressed` for filters that can be combined; this switch is one choice at a time.
- Hover on paper fills with `lavender-hover` as in the manual; on ink, where a fill would drop the accent numbers below 4.5:1, hover shows only the 2px accent underline both surfaces share.
- Don't use it for navigation between pages; that is `Navigation`.
