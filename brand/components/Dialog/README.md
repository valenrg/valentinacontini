A modal dialog for a project overview or a short decision, built on the native `dialog` element: a hairline-bordered `canvas` panel over a `scrim` backdrop, with a meta line, an uppercase title, a short body and one action.

The consumer provides: a `dialog.vc-dialog` with `aria-labelledby` pointing at its `h2` and `aria-describedby` at its first paragraph, a `data-surface` on the dialog itself (it inherits `data-theme` from the page), `.vc-dialog-head` (a `.vc-meta` line and a close `button`), `.vc-dialog-body`, optional `.vc-dialog-foot` actions, and the opener: a `button` with `data-vc-open="<dialog id>"`. Open it with `dialog.showModal()`; this gives a focus trap, Escape to close, an inert page behind it and focus returned to the opener. Close with `<form method="dialog">` around the close button, and close on a click on the backdrop:

```js
document.addEventListener('click', e => {
  const o = e.target.closest('[data-vc-open]');
  if (o) return document.getElementById(o.dataset.vcOpen).showModal();
  if (e.target.matches('dialog.vc-dialog')) e.target.close();
});
```

- Do open an overview from `EXPLORE PROJECT` and keep the technical record behind `OPEN FIELD FILE`; one action in the foot, as a `TextAction`.
- Do keep the title and body concrete and true to the project's lifecycle label.
- Do keep a visible `Close` button (a `Button`, 44px); Escape and a backdrop click are extras.
- Do let the surface colour it; the backdrop is `scrim` and the border is the surface's muted text colour, so the panel edge holds 3:1 against the backdrop in every theme.
- Don't round the corners, add a shadow or fade the content in; the dialog appears at once and so honors reduced motion.
- Don't put a long form or a scrolling page inside; the body scrolls when it must, the head and foot stay.
- Don't use a div with `role="dialog"` where the native element works.
