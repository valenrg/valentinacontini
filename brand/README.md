# Valentina Contini / Personal Brand Design System

**Canonical upgraded source:** `tokens.json` + `tokens.css` + `components/bundle.css` + `voice.md`. 13 components across three expressions. The original uploaded ZIP is the source; this repository-ready package omits font binaries and the legacy duplicated v1 package.

[Open the interactive manual](index.html) · [Component API](api/) · [Voice](voice.md) · [Instructions for AI builders](ai-instructions.md) · [Integration guide](INTEGRATION.md)

One personal identity with three expressions: the main site, CT LAB and Collision Lab. Editorial technofuturism: direct, curious, technically grounded, sharp-edged. Pick the expression, then the surface of each section.

## Expressions and surfaces

Two independent settings decide every colour:

- **Expression**, `data-theme` on the page or the element that holds the work: `core`, `ct-lab` or `collision-lab`. It is a colour theme in `tokens.json` and decides the accent.
- **Surface**, `data-surface` on each section, on the `data-theme` element or inside it: `paper` or `ink`. It decides ground, text, muted text, lines and which accent tone reads on that ground.

| Expression | `data-theme` | Use for | Usual surfaces | Accent on paper / on ink |
|---|---|---|---|---|
| Main site | `core` (default) | Professional identity, writing, speaking, foresight, selected work | `paper`, with `ink` sections | `purple` / `violet-on-dark` |
| CT LAB | `ct-lab` | Creative-technology experiments, field files, wearables, robotics | `ink`, with `paper` sections | `lab-magenta-on-light` / `lab-magenta` |
| Collision Lab | `collision-lab` | Research instruments for emerging-technology intersections | `ink` hero, `paper` workbench | `purple` / `collision-violet` |

- When the destination is unclear, use `core` on `paper`.
- Alternate surfaces freely: a CT LAB page can switch to a `paper` section and keeps its magenta in the readable tone. Never pick an accent by hand; the surface picks it.
- Collision Lab inherits the core system: on `paper` it is core purple, and `collision-violet` appears only on `ink`. `collision-eyebrow` is for its `ink` hero eyebrow; a hero headline may use `white`. Never invent a complete third palette.
- CT LAB magenta belongs to CT LAB. Do not carry it into the main site.

## Content fundamentals

- Write in first person where it fits. Short statements, specific verbs, a little wit. Name technologies accurately.
- Say what an artifact does or investigates. Do: "I research the future. Then I build bits of it." Don't: "Unlock transformative innovation with cutting-edge solutions."
- Never write "unlock innovation", "revolutionary solutions", "seamless transformation" or other generic futurist slogans. Name the mechanism, material, question, evidence or limitation instead.
- Display titles, eyebrows, meta lines and button labels are set uppercase by style, not typed in capitals. Actions are verbs: `OPEN`, `EXPLORE`, `DOWNLOAD`, `SEE BUILD`, `SAY HELLO`.
- In CT LAB, `EXPLORE PROJECT` opens an overview (concept, why, intended behavior). `OPEN FIELD FILE` opens the technical record (implementation, observed results, failures, decisions, next iteration). Never label one as the other.
- Lifecycle labels must be true, and they come from one fixed list, shown with the `Status` component: planned, hardware ordered, in progress, completed, optional. No other words ("beta", "coming soon", "launched"). If none of the five is true, leave the status off and say what is true in the text.
- Keep concept, experiment and deployed artifact distinct. Never present a simulated visual as a photograph or a planned capability as an observed result. Do not invent photographs, partners, measurements or prototype status. AURA transforms EEG-derived artistic variables; it does not read thoughts or diagnose.
- Show imagery only when real evidence exists; otherwise use text or a diagram that carries meaning. No stock photography.
- For button labels, empty states, errors, the 404 page and bio lines, take the wording from the "Voice and microcopy" section (`voice.md`).

## Visual foundations

**Colour.** Set `data-theme` and `data-surface` and let the components colour themselves. Paper surfaces: `ink` text, `muted-light` secondary text, `line-paper` rules, `accent-paper` accent with `on-accent-paper` on its fills. Ink surfaces: `paper` text, `muted-dark` secondary text, `line-ink` rules, `accent-ink` accent with `on-accent-ink` on its fills. In `bundle.css` these arrive as `--vc-canvas`, `--vc-fg`, `--vc-fg-muted`, `--vc-accent`, `--vc-on-accent` and `--vc-line`; use the same variables in your own markup.

- `purple` is for text and fills on `paper`, `lavender` and `white`. On `ink` it measures 2.36:1: never use it for normal-size text there. Use `violet-on-dark` (core), `lab-magenta` (CT LAB) or `collision-violet` (Collision Lab).
- Light grounds in CT LAB take `lab-magenta-on-light`, never `lab-magenta`.
- `lavender` is for softer sections and selected or hover surfaces. `violet-gray` is a fill, rule or chip colour; as text it works on `ink` only.
- Sections change sharply between `paper`, `ink`, `lavender` and `purple`. No decorative gradients.

**Type.** Display titles use the `display` family (Glacial Indifference first), bold, uppercase, line height 0.9 to 1, negative tracking. Use `display-hero` for chapter headlines, `display-l` for tile titles, `display-m` for field file rows. Eyebrow, meta, button and wordmark styles are small, bold, tracked out and uppercase. Running text is `body` (Inter or the system sans) at line height 1.55. Mono marks raw data, what a person types or an instrument reports: `mono-input` for field values, `mono-small` for codes, IDs and hex beside a label, `mono` for signal chains and code in text. Never set headings or prose in mono. Measured results use the `readout` display style, not mono. Scale and hierarchy do the work, not decoration. Glacial Indifference is the required display typeface (Regular 400 and Bold 700 in the source system). Font binaries are **not included** in this portable repository package. The host website may provide the licensed font, or it can be installed locally; `tokens.css` requests the family but does not embed fonts. Use Bold for display and label styles. Where the font cannot load the stack falls back to Avenir Next, Century Gothic, Trebuchet MS, then the system sans.

**Layout and spacing.** The shell is `layout-max-width` wide with `layout-gutter` gutters. Compose asymmetric, image-led, split editorial layouts with hairline rules (`line-paper`, `line-ink`) and strong alignment. Take new gaps from `space-1` to `space-10`. Navigation collapses at `breakpoint-nav`, grids go single-column at `breakpoint-compact`. Test at 320, 390, 768 and desktop widths.

**Page composition.** A page opens with one `Hero`: text first, one accented phrase, no image behind it. Each following `.vc-section` (padding `section-padding`) opens with a `SectionLead` and alternates `paper` and `ink` to mark chapters. Choose each section's form from its content: an `EditorialTile` grid for independent pieces, `FieldFileRow`s for a ruled index, a `Readout` for measured values, a table for comparisons, a list for items. Use a timeline only for dated events and a diagram only for real relationships. `PageExample` shows the whole sequence.

**Corners, borders, shadows.** Every corner is `radius-none`. Separate with 1px hairlines (`line-paper`, `line-ink`), not shadows. No uniformly rounded cards, no soft shadows, no generic dashboard layouts, no fake metric tiles.

**Motion.** Interactive shifts take `duration-fast` to `duration-visual` with `easing-default`: tile inversion and the 5px arrow shift at `duration-default`, buttons at `duration-fast`, the project image scale at `duration-visual`. Scroll reveal, if used, is `duration-reveal`. Honor `prefers-reduced-motion`; never hide essential content in animation.

**States.** Hover and `:focus-visible` / `:focus-within` give the same feedback, so hover is never the only way to find an action. Focus ring: 3px solid in the surface's accent, offset 4px. A selected control needs more than hover: use `aria-pressed` or a native state, filled with the accent and `on-accent-paper` or `on-accent-ink` text. Tiles invert to the opposite surface on hover and focus, recolouring every label; a paper tile that inverts to ink takes `accent-ink-inverse` (CT LAB's hover magenta).

**Imagery.** Real project evidence only. Project visuals may scale slightly on hover (`duration-visual`).

## Iconography and logo

There is no logo file and no icon set. The identity is the text wordmark: "Valentina Contini" in the `wordmark` style, uppercase. Do not draw a mark. Text actions are set uppercase by style and carry a plain arrow glyph (→, or ↗ for external) set in the text; no icon font, no emoji.

## Accessibility

WCAG 2.2 AA is the target, not a certification claim. Normal text needs 4.5:1, large text and meaningful boundaries or focus indicators 3:1. Check the real foreground on its real ground, because a verified token can still be misapplied. Controls are at least 44px high. Use native HTML first, a skip link on long pages, `aria-pressed` on toggles, and for links that open a new tab say so in the accessible name. A dialog keeps focus inside, closes on Escape, restores focus and makes the page behind it inert: build it with the `Dialog` component, which does this natively.

## Components

Thirteen components, all CSS classes in `components/bundle.css` with the `vc-` prefix. Each reads its colours from the `data-theme` and `data-surface` around it; previews follow the theme you pick on this page.

- `Navigation`: wordmark left, concise links right, growing underline.
- `TextAction`: arrow link that shifts 5px on hover.
- `Button`: sharp, 44px, with a pressed state and filter use.
- `EditorialTile`: ruled tile that inverts on hover and focus.
- `FieldFileRow`: ruled list row (number and `Status`, title, context, action).
- `Status`: one of the five lifecycle labels with a shape marker.
- `Dialog`: native modal over a `scrim` backdrop, for a project overview; focus stays inside, Escape closes.

Page patterns: `Hero` (split, text-first opener), `SectionLead` (numbered section opener) and `PageExample` (how they compose).

Instrument parts, for Collision Lab and any interactive tool:

- `Field`: labelled mono input with hint and an error line that always says "Error".
- `ModeSwitch`: one-of-several view switch; the chosen option inverts.
- `Readout`: large measured values with units; real numbers only.
- Filters that combine are `Button`s with `aria-pressed`.

Keep this CSS out of unrelated documents wholesale. The consumer supplies the content and the `data-theme` and `data-surface` attributes. Body text uses Inter when already available, otherwise a system sans. Never require Google Fonts or distribute font binaries for offline uses.
