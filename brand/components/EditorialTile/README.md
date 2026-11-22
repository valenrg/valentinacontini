A bordered, sharp-edged tile with a meta line, an uppercase title, a short description and an action; it inverts to the opposite surface on hover and keyboard focus.

The consumer provides: `article.vc-tile` containing `.vc-meta`, an `h3`, a `p` and an `a.vc-tile-action`, placed in a `.vc-rule-grid` (two columns, one under `breakpoint-compact`). Its surface is the section's; give a tile its own `data-surface` to set it apart (a paper track tile on an ink CT LAB section), and it inverts the other way. A meta line may carry a `Status`.

- Do let the whole tile respond to `:hover` and `:focus-within`; the inverted state updates every label colour.
- Do keep titles concrete: what the work does or investigates.
- Don't round the tile, add a shadow or put a coloured left border on it.
- Don't nest interactive controls beyond the single action.
