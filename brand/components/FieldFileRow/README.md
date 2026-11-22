A compact ruled list row for a field file: number and status, project title, short context and a clear action.

The consumer provides: `div.vc-file-row` containing a `.vc-file-meta` (the `.vc-file-number` and a `Status`), an `h3`, a `p` and a `button.vc-button`. The status is one of the five `Status` values and must be true. Rows collapse to two columns at `breakpoint-nav` and one at `breakpoint-compact`.

- Do use it for index and notes lists, where a field file opens the deep documentation.
- Do keep the action label different from an experiment card's: field file = implementation, results and decisions; experiment card = overview.
- Don't invent records: a row represents a publication that exists.
- Don't add thumbnails or rounded chips.
