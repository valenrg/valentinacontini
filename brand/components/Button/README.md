A sharp-cornered, 44px-high outlined button for actions, toggles and filters; it fills with `foreground` on hover and with `accent` when selected.

The consumer provides: a native `button` with the label text and, for a toggle or filter, `aria-pressed="true|false"` that script keeps in step. Variant: `data-vc-variant="accent"` (accent outline, fills on hover). Text and fill colours follow the `data-theme` and `data-surface` around it: on a CT LAB paper section the accent is the deep magenta, on Collision Lab paper it is core purple.

- Do show selection with `aria-pressed`; hover alone is never the selected state.
- Do keep `radius-none`, one hairline border and uppercase `button-label` type.
- Don't round the corners, add shadows or use gradients.
- Disabled buttons drop to 45% opacity and lose the hover lift.
