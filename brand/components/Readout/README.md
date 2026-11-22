A row of large measured values with units and short labels, for an instrument's results or a page's key facts; from the v1 manual's metric rows.

The consumer provides: `div.vc-readout-grid` (four columns, two below `breakpoint-nav`) of `div.vc-readout`, each with `strong.vc-readout-value` holding the number and a `span.vc-readout-unit`, then `span.vc-readout-label`. If values update live, put `aria-live="polite"` on the grid. The value is `ink` on paper and the expression's ink accent on ink.

- Do show only real, sourced numbers: measurements, settings, counts you can point to. If a number is an estimate, say so in the label.
- Do keep the unit beside the number in the unit span, not in the label.
- Don't build fake dashboards, trend arrows or invented percentages; this is a readout, not a KPI tile.
- Don't use it for a single hero statistic in prose; write the sentence.
