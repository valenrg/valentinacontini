A labelled text input for an instrument or form: tracked uppercase label, value in mono on a `white` (paper) or `ink` field, a hint and an error line.

The consumer provides: `div.vc-field` holding a `label` tied to its `input` by `for`/`id`, an optional `p.vc-field-hint`, and a `p.vc-field-error` with `aria-live="polite"`. Point the input's `aria-describedby` at both. On a failed check set `aria-invalid="true"` and write the message into the error line; the component prefixes it with "Error:" and draws a 2px `error` border (on ink, a `paper` one). Clear both when the value is fixed.

- Do say what to type and give a real example in the message ("Use six hex digits, for example #F7F5F2"), not "Invalid input".
- Do validate on input or blur, never by colour alone.
- Do keep inputs at least 44px high and full width of their column.
- The border is the muted text colour (6:1 on `white`), not the manual's hairline: a hairline input edge measures 1.4:1 and fails the 3:1 control-boundary rule.
- Don't put a placeholder in place of the label.
