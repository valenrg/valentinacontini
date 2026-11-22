A lifecycle label for a project, experiment or field file: one of five fixed words, with a square marker that repeats the meaning by shape.

The consumer provides: `<span class="vc-status" data-status="…">` with the matching word as its text. The values, in lifecycle order:

| `data-status` | Text | Marker |
|---|---|---|
| `planned` | Planned | empty square |
| `hardware-ordered` | Hardware ordered | square with a dot |
| `in-progress` | In progress | half-filled square |
| `completed` | Completed | filled square |
| `optional` | Optional | dashed square |

Text and marker colours follow the `data-theme` and `data-surface` around it (marker in the accent, word in the text colour), and update when a tile inverts.

- Do use exactly these five; any other value shows the word with no marker, which marks it as off-list. Add a status only by adding it here first.
- Do keep it true: "completed" means the thing was built and observed, not drafted. When none of the five is honest, leave the status off and say what is true in the text.
- Do place it in a tile meta area, a `FieldFileRow` meta column or a `Dialog` body.
- Don't rely on the marker alone or recolour it by status; the word is the meaning.
- Don't turn it into a pill, badge or coloured chip.
