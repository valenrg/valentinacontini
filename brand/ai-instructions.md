# Valentina Contini | Instructions for AI builders

Use this file alongside `tokens.json`, `tokens.css`, `components/bundle.css` and `brand-guidelines.md` when building **new** personal-brand pages, websites, interactive explanations, portfolio materials, presentation visuals and related artifacts.

## Contract

You are designing for **Valentina Contini**. Use the repository-derived editorial technofuturist language rather than NTT DATA, Tangity, or a generic SaaS style. Preserve the fact that there is **one personal brand** with three expressions. Never claim generated mockups or plans are completed physical artifacts.

### 1. Choose the expression first

- `core` (default): professional portfolio, writing, speaking, foresight and selected work. Paper/ink foundation with `#6D23C8` on light surfaces.
- `ct-lab`: creative technology experiments, field files, kinetic wearables and robotics. Near-black and paper sections with magenta `#FF38D1` on dark / `#9D006C` on light.
- `collision-lab`: research instruments for emerging-technology intersections. Inherit the core purple brand; existing hero accents include `#B86CFF` and `#CAA9F7`. Never invent a new complete third palette.

When the destination is unclear, use the core expression. If a prompt supplies an explicit art direction, preserve it, but identify any departure from the core system.

### 2. Build with the right visual grammar

Choose the representation from content: lists for items, tables for comparison, editorial grids for independent pieces, process rails for sequence, timelines only for chronological data, diagrams only for meaningful relationships. Never turn everything into rounded cards. Avoid decorative diagrams and fake metric dashboards.

### 3. Use verified core foundations

- Colors: ink `#17141B`, paper `#F7F5F2`, purple `#6D23C8`, lavender `#E7DDF4`, deep purple `#3C166D`.
- Display: `"Glacial Indifference"` first, then fallbacks. Body: Inter/system sans. Never embed/share the original font binaries or copy existing source `@font-face` base64 blocks.
- Layout: max-width `1500px`, gutter `clamp(20px, 4vw, 64px)`; mobile breakpoint near `900px`, compact near `560px`.
- Geometry: sharp edges, hairline rules, spacious editorial composition.
- Motion: subtle tile inverse and arrow shift ~220ms; honor reduced motion.

**Accessibility exception:** core purple on ink is insufficient for small text (2.36:1); use lighter violet such as `#CFAFF4` on dark. Lab magenta on ink and darker magenta on paper have AA-level normal-text contrast. See guidelines for exact pairs.

### 4. Preferred components

- Text-first oversized hero with one short accented phrase.
- Thin ruled, numbered editorial lists for notes and index pages.
- Hover/focus card inversions (paper -> ink, or for CT LAB dark -> paper), with updated metadata contrast.
- Text action with arrow shift, not oversized rounded CTA buttons by default.
- Clearly labeled project stages and explicit deep-dive/field-file actions.
- Crisp, responsive navigation; accessible `target="_blank"` links when opening a new tab.

Use the `vc-` namespaced examples in `components/bundle.css`. They are **proposed reusable versions** of observed patterns, not literal copies of every page's markup.

### 5. Writing and evidence

- Voice: direct, precise, curious, slightly provocative, first-person when appropriate.
- Avoid phrases like "unlock innovation", "revolutionary solutions", "seamless transformation", and generic futurist slogans.
- Mention specifics: mechanism, material, question, evidence, experiment or limitation.
- Separate concepts, in-progress work and verified outcomes.
- Do not invent photographs, prototype status, partner names, measurements or case-study results.
- In CT LAB: `EXPLORE PROJECT` means overview; `OPEN FIELD FILE` means substantive technical record.

### 6. Technical requirements

For standalone offline HTML, **inline** CSS and JS, no external library, image, font or network dependencies; check semantics, keyboard focus, responsive overflow and contrast. The stand-alone brand manual demonstrates this. For a site already built on the repository, you may reuse the repository's approved infrastructure but do not copy embedded font data into new deliverables.

### 7. QA before delivery

- Confirm expression and source path.
- Test desktop, 390px mobile, 320px mobile, keyboard/focus and reduced motion.
- Contrast check foreground on actual background, not only palette values.
- Ensure navigation, links and modals work with mouse, keyboard and touch.
- Verify copied components do not conflict with existing class names (prefer `vc-` prefix).
- Label decisions as verified, normalized/proposed, or unknown.
- Do not modify or deploy the repository without explicit permission.

## Prompt skeleton for another coding agent

> Build [artifact type] for Valentina Contini using the design system package. Use the [core / ct-lab / collision-lab] expression. Keep the content truthful and the structure editorial. Start from `design-tokens.json`, `foundations.css` and `components/bundle.css`, adapted to the medium. Use Glacial Indifference for display typography when legitimately available, and Inter/system for body copy. Preserve purple on paper, use accessible violet on ink, and use CT LAB magenta only in that expression. No generic SaaS cards or unearned gradients. Honor keyboard focus, reduced motion and mobile layout. Deliver a checked artifact and list any proposed departures.


**Installation:** For repository-hosted pages, use `brand/tokens.css` and `brand/components/bundle.css`, or copy only necessary, namespaced declarations into a standalone offline HTML. See `brand/INTEGRATION.md`. Font files are not part of this package.
