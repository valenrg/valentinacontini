# Integrating the brand system

The design system is **additive**: do not replace `assets/styles.css`, `collision-lab/index.html` or `ct-lab/index.html` in the first integration. The current live pages already have working styling. This package defines the canonical foundation for **new** or deliberately migrated work.

## Repository layout

- `brand/index.html` — standalone interactive reference; no runtime network calls.
- `brand/tokens.json` — source-of-truth design tokens and expression/surface model.
- `brand/tokens.css` — CSS output of the token model; update together with JSON.
- `brand/components/bundle.css` — 13 prefixed `.vc-*` component definitions.
- `brand/components/<Component>/README.md` — components' usage and notes.
- `brand/components/<Component>/preview.html` — embeddable offline-safe examples; CSS provided by the host.
- `brand/api/` — component and token reference; `brand/voice.md` — writing conventions.

## Basic inclusion on repository-hosted pages

```html
<link rel="stylesheet" href="/brand/tokens.css">
<link rel="stylesheet" href="/brand/components/bundle.css">
<section data-theme="ct-lab" data-surface="ink">
  <!-- Use components from their README and preview fragments. -->
</section>
```

If served from a subdirectory, change paths accordingly. For offline single-file artifacts, inline both stylesheets; never depend on Google Fonts or on a remote asset. The display stack requests **Glacial Indifference**; appearance will differ if the viewing environment lacks a licensed, installed/hosted copy. This repository package does not contain font files.

## Safe adoption sequence

1. Merge this documentation-only `/brand/` addition after review. It has **no effect** on the existing public site navigation, CT LAB or Collision Lab.
2. Compare rendered components with the existing implementations to identify intentional differences.
3. Refactor individual pages only when a separate change is reviewed and tested for contrast, keyboard behavior and responsive layout.
4. Update `tokens.json` and `tokens.css` together, and record any new brand expression in the source audit.

The scope of `bundle.css` is `[data-surface]` / `.vc-*`. Avoid globally applying it to the legacy website without a migration review.
