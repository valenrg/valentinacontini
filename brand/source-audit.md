# Source audit | Valentina Contini Design System v1

**Repository:** `valenrg/valentinacontini`  
**Revision:** `99228cc96f6aa6135d3476644b95b7592ce6a56f` (main, inspected 22 November 2026)  
**Approach:** read source files directly through connected GitHub; identify observed source selectors/tokens; form normalized reusable aliases as distinct recommendations. No live source files were changed.

## Observed patterns

| Topic | Repository evidence | Assessment |
|---|---|---|
| Core brand primitives | `assets/styles.css :root` has purple/ink/paper/lavender/white and max shell 1500px. | Verified |
| Fonts | `assets/styles.css` defines Glacial Indifference and body Inter/system. CSS contains embedded font data. | Verified; font binaries intentionally excluded |
| Editorial hero | `index.html .hero`; `assets/styles.css .hero-title`, `.hero-grid`, `.eyebrow`. | Verified |
| Main research tile hover | `assets/styles.css .rabbit-card:hover` changes paper to ink; arrow and muted text change. | Verified |
| Main project visual hover | `assets/styles.css .project:hover .project-visual` slightly scales visual. | Verified |
| Mobile menu | `assets/site.js` menu toggle, Escape, resize reset; main CSS `@media (max-width:900px)`. | Verified |
| CT LAB | `ct-lab/index.html` uses magenta tokens and both light and dark card inversion with focus-within. | Verified contextual variant |
| CT LAB deep-dive | `ct-lab/index.html` contains Field Files and project-overview dialogs as distinct surfaces. | Verified |
| Collision Lab | `collision-lab/index.html` imports shared `assets/styles.css`; violet is mostly hero/context accent; research control chips use core purple. | Verified, *not* separate full palette |
| Responsive system | Main CSS breakpoints near 900, 560, 360px; CT LAB adds its own responsive rules. | Verified |
| Normalized spacing ramp | Proposed 4 to 128px scale in v1 package. | Proposed, not source-exact |
| `vc-` component class names | New namespaced abstraction in this package. | Proposed implementation pattern |

## Contrast observations

Calculated using WCAG relative luminance and 4.5:1 normal-text AA threshold:

- `#6D23C8` on `#F7F5F2`: **7.08:1** (passes normal-text AA).
- `#6D23C8` on `#17141B`: **2.36:1** (fails normal-text AA; should not be used for small dark-surface text).
- `#CFAFF4` on `#17141B`: **9.14:1**.
- CT LAB `#FF38D1` on `#17141B`: **5.85:1**.
- CT LAB `#9D006C` on `#F7F5F2`: **7.28:1**.
- Collision Lab `#B86CFF` on `#17141B`: **5.75:1**.

These are *pair checks*, not a complete accessibility certification of all source pages.

## Risks and future harmonization candidates

1. Duplicate core token definitions between `assets/styles.css` and `ct-lab/index.html` may drift after future updates.
2. CSS variables currently use `--purple`, `--ink` etc. Namespaced `--vc-*` aliases in v1 are a safe abstraction, not a production refactor.
3. Hover cards, selected controls and focus styles vary by page. V1 documents the common principles and exceptions; parity should be tested in real browsers.
4. The existing source CSS includes embedded fonts. Reusing that CSS as a portable design system would inappropriately bundle unrelated page rules and the font binaries; v1 separates tokens and components.
5. Collision Lab has numerous situational violet and neutral tones. Promote only those backed by clearly recurring roles.
6. Mobile components and hover/focus interactions need manual assistive-technology QA before any WCAG conformance claim.

## Limits

This audit is source-code-based, not a live-site visual regression study. The HTML reference is an interactive *proposed* implementation that recreates the observed design principles but not every original component or page. Final sign-off on voice, palette governance, and component behavior remains with the site owner.

## Upgraded ZIP reconciliation (2026-11-22)

The user-supplied *Valentina Contini.zip* is the authoritative upgraded package. This repository candidate retains its 13 named components, `tokens.json`, `tokens.css`, component previews, API docs and `voice.md`. The source README's “twelve components” is corrected to thirteen; older `design-tokens.json` / `foundations.css` / `components.css` references are replaced by the upgraded canonical paths. The previous `assets/Package/` directory contained a v1 snapshot and was excluded to avoid duplicate competing sources. User-provided Glacial Indifference font binaries were excluded; CSS only requests the family. Remote Google Fonts links were removed from component preview fragments. These packaging decisions do not change the tokens' color values.
