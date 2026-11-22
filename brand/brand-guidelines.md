# Valentina Contini | Brand guidelines v1

**Status:** Review draft, 22 November 2026. This is a normalization of patterns observed in the current `valenrg/valentinacontini` GitHub repository, not a claim that the repository already uses one centralized design system.

## Brand proposition

**One identity, several ways of exploring technology.** The main site presents professional work, engineering, foresight, research, and creative technology. CT LAB is an evolving experimental studio. Collision Lab is an interactive technology-foresight instrument, not a second creative-technology studio.

The common character is editorial technofuturism: direct, curious, technically grounded, precise, playful when appropriate, and visually confident without generic futurist theatrics.

**Core voice:** first-person when appropriate; specific verbs; short statements; a little wit; name technologies accurately; distinguish concepts from experiments and deployed artifacts. Avoid consulting platitudes, inflated claims, and AI-generated-sounding project descriptions.

## Evidence legend

- **Verified:** directly present in the source repository as inspected for v1.
- **Normalized proposal:** a consistent reusable name or scale built from verified patterns, but not an existing canonical source token.
- **Contextual:** a real variant in one section/project; not a universal personal-brand requirement.
- **Needs review:** accessible behavior, content, or positioning requiring human judgment or further testing.

## 1 / Brand foundations (verified)

| Foundation | Value | Source usage |
|---|---|---|
| Signature purple | `#6D23C8` | Main stylesheet root, accent on light surfaces |
| Deep purple | `#3C166D` | Core secondary purple |
| Near-black ink | `#17141B` | Major dark sections and headings |
| Off-white paper | `#F7F5F2` | Default light canvas |
| Lavender | `#E7DDF4` | Softer sections and selected/hover surfaces |
| Violet-gray | `#B8AAC9` | Supporting neutral |
| White | `#FFFFFF` | High-contrast text on purple/ink |
| Dark-surface violet text | `#CFAFF4` | Links on inverted dark tiles |

**CT LAB expression (verified):** `#FF38D1` on dark and `#9D006C` on light; these are contextual project tokens, not replacements for signature purple. Hover reverses its dark experiment tiles to paper and light track tiles to ink.

**Collision Lab expression (verified):** inherits the core main stylesheet. Its hero uses violet `#B86CFF` and eyebrow `#CAA9F7` on ink, while selected controls use core purple. Do **not** describe this as a separate third brand palette without an explicit design decision.

### Verified readable combinations

| Foreground | Background | Calculated WCAG contrast |
|---|---|---:|
| Core purple `#6D23C8` | Paper `#F7F5F2` | 7.08:1 |
| Ink `#17141B` | Paper `#F7F5F2` | 16.75:1 |
| Lab magenta `#FF38D1` | Ink `#17141B` | 5.85:1 |
| Lab dark magenta `#9D006C` | Paper `#F7F5F2` | 7.28:1 |
| Violet `#CFAFF4` | Ink `#17141B` | 9.14:1 |
| Collision violet `#B86CFF` | Ink `#17141B` | 5.75:1 |

**Important:** purple `#6D23C8` against ink `#17141B` is only **2.36:1**: do not use this pair for normal-sized text. Design tokens can be verified while a particular application of those tokens is inaccessible.

## 2 / Typography

**Verified:** Display typeface **Glacial Indifference**, requested at several weights; body stack **Inter** and UI-system sans; monospace detail layer in lab/experimental contexts. Display style uses bold weight, very large hierarchy, tight line height (often `.90`-`.95`), and negative tracking (commonly `-.035em` to `-.055em`). Eyebrows are uppercase, bold, small, and tracked out, with line breaks only when needed.

**Normalized proposal:** set a reusable display/heading/eyebrow/body/mono hierarchy from these rules. Don't force identical CSS font sizes across miniwebsites, slides, and print. Prefer proportional hierarchy and readability to rigid point-size replication.

**Licensing/distribution constraint:** The existing site contains embedded font data. This package **does not** copy or redistribute any font files or base64 font CSS. Glacial Indifference is always requested first; preview devices without it show a technical fallback. Embedding in another public site should use separately authorized font files from your own deployment system.

## 3 / Layout and geometry

- **Verified:** max shell `1500px`; horizontal gutter `clamp(20px, 4vw, 64px)`; responsive navigation at roughly `900px`; tighter mobile rules around `560px` and `360px`.
- **Verified:** strong section changes (paper / ink / lavender / purple), split editorial compositions, asymmetrical image-led project layouts, sharp corners, hairline borders and strong alignment.
- **Normalized proposal:** a 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px spacing ramp. This is a convenience for *new* projects, not a statement that old CSS uniformly uses it.
- **Avoid:** uniformly rounded UI cards, soft shadows everywhere, generic dashboard layouts, decorative gradients, and inconsistent padding.

## 4 / Components and behavior

**Navigation:** wordmark left, concise links right. Link underline grows on hover; mobile uses a dark full-screen menu. Clear active/focus states and Escape-to-close are required. Links opening a new tab should state that in their accessible name.

**Text action:** a direct text link with an arrow that shifts about 5px on hover. Use `OPEN`, `EXPLORE`, `DOWNLOAD`, `SEE BUILD`, `SAY HELLO`, as appropriate.

**Editorial tile:** sharp-edged, rule-based. Main-site research tiles invert from paper/ink to ink/paper on hover/focus (about `.22s`). CT LAB preserves this *behavioral principle* but inverts its dark experiment cards in the opposite direction. Always update secondary text/labels to maintain contrast.

**Buttons and filters:** sharp corners, restrained borders, `min-height: 44px`. Selected state needs more than hover alone (`aria-pressed` or an equivalent native state).

**Field file row:** compact ruled list with number/status, project title, short context, clear action. A field file opens deep documentation, while an experiment card opens a project overview. Avoid ambiguous labels suggesting both are the same action.

**Dialogs:** if used, use semantic dialog behavior, keep keyboard focus inside, restore focus on close, support Escape, and make the background unavailable to tab traversal.

**Motion:** fast interactive shifts around 180-280ms; optional reveal-on-scroll around 650ms. Never hide essential content in animation; respect reduced motion.

## 5 / The three expressions

| Expression | Purpose | Main surface | Color emphasis | Distinctive behavior |
|---|---|---|---|---|
| Main site | Professional identity and selected work | Paper + ink | Purple | Editorial grid, subtle image scale, paper-to-ink tile inversion |
| CT LAB | Creative-technology experiments and field files | Ink + paper sections | Magenta | Reversible card inversion, explicit status and field files |
| Collision Lab | Foresight research instrument | Ink hero + paper workbench | Purple with brighter violet hero | Tech chips, selection states, analytical controls |

The three share the same typography, grid, crisp geometry, focus principles, and editorial directness.

## 6 / Content and editorial usage

- Use titles that convey what an artifact does or investigates, not a generic promise.
- Project lifecycle labels must be true: completed, in progress, hardware ordered, planned, optional.
- Separate **experiment overviews** (concept, why, intended behavior) from **field files** (implementation, observed results, failures, decisions, next iteration).
- Don't present simulated visuals as photographs, or planned technical capabilities as observed achievements.
- Be transparent about scientific accuracy; e.g. AURA transforms EEG-derived artistic variables, not thoughts or diagnoses.
- Show imagery when actual evidence exists. When not, use text/diagrams rather than generic stock photographs.

## 7 / Accessibility requirements

- WCAG 2.2 AA is the **target**, not a certification claim.
- Normal text contrast >= 4.5:1; large text >= 3:1; meaningful control boundaries and focus indicators >= 3:1 where applicable.
- Touch targets should be comfortably 44x44 CSS pixels where possible; exceptions need case-by-case review.
- Native HTML first; semantic headings, skip links on long sites, accessible navigation, keyboard-accessible dialogs and no keyboard traps.
- Hover is enhancement, not the sole way to discover an action. Use `:focus-visible`/`:focus-within` for equivalent feedback.
- Prefer short line lengths for body copy. Test mobile at 320px, 390px, 768px and desktop, plus zoom and reduced motion.

## 8 / Usage boundaries

**Do:** use the provided tokens and namespaced CSS as a starting point for new projects; embed the necessary styles in standalone HTML; adapt for slides and editorial reports with deliberate hierarchy.

**Do not:** import the whole existing `assets/styles.css` into unrelated artifacts. It contains page-specific rules and embedded fonts, and is not itself a safe portable component library. The design system package avoids that dependency by design.

## 9 / Decisions for a future v1.1 review

1. Confirm the exact sub-brand naming and whether the magenta CTA belongs on the main site's top navigation in all contexts.
2. Approve or revise the normalized spacing scale and theme aliases after seeing the examples.
3. Check type rendering on your devices with Glacial Indifference installed/licensed.
4. Evaluate fully keyboard-operated cards, focus behavior and screen readers in a real browser.
5. Decide whether to develop presentation, print and social-content adaptations from these tokens.

## Source record

Repository: `https://github.com/valenrg/valentinacontini`, main branch, inspected commit `99228cc96f6aa6135d3476644b95b7592ce6a56f` (22 November 2026).

Primary files: `assets/styles.css`, `assets/site.js`, `index.html`, `research.html`, `about.html`, `speaking.html`, `ct-lab/index.html`, `collision-lab/index.html`.
