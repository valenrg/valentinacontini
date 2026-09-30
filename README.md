# Valentina Contini — website prototype v2

A dependency-free static prototype for the redesigned valentinacontini.eu.

## What is included

- Responsive homepage
- Selected work section and four case-study pages
- Research index organised around five core research territories, with individual papers, prototypes and series nested underneath them
- About page
- Speaking page
- Privacy and Imprint pages (still require final legal/hosting wording before launch)
- No analytics, trackers, external fonts, or cookies
- Project-specific artwork and prototype screenshots

## Preview locally

Run any static web server from this folder, for example:

```bash
npx http-server . -p 4173
```

Then open `http://localhost:4173`.

## Brand palette

- Signature purple: `#6D23C8`
- Deep purple: `#3C166D`
- Near-black: `#17141B`
- Off-white: `#F7F5F2`
- Soft lavender: `#E7DDF4`
- Muted violet-gray: `#B8AAC9`
- White: `#FFFFFF`

## Typography

Glacial Indifference is embedded directly in `assets/styles.css` in Regular, Medium, SemiBold and Bold weights, so the display typography is self-contained and makes no request to an external font provider. Body text continues to use the existing local/system sans-serif stack.

## Before production

1. Complete the final legal/hosting wording for Imprint and Privacy.
2. Decide whether to add a portrait later; the homepage currently uses a text-first About block.
3. Add final public links for Future You, Beyond Prediction, etc.
4. Review the public AI-native foresight case study for company/IP boundaries before production launch.
5. Complete the German Impressum and privacy wording for the selected host.
6. Add OpenGraph/social preview images.
7. Decide whether to keep the site framework-free or convert this approved design into Astro for easier content authoring.

## Deployment

This version can already be hosted as-is on GitHub Pages or Cloudflare Pages because it is plain static HTML/CSS/JS.


## Downloadable research

The complete designed PDF of **Playing the Future** is included at `downloads/playing-the-future-valentina-contini.pdf` and linked from the project page. The cover preview is stored locally in `assets/playing-the-future-cover.png`.


## External research links
- Longevity research mini-site: https://valenrg.github.io/shifted/


## Added research essays

The site now includes two downloadable foresight essays under the **Unthinkable Futures** research territory:

- `articles/unthinkable-futures.html` + `downloads/the-age-of-unthinkable-futures-valentina-contini.pdf`
- `articles/beyond-prediction.html` + `downloads/beyond-prediction-valentina-contini.pdf`

Both are linked from the **Unthinkable Futures** research territory rather than repeated in a separate publication gallery.


## Future You live prototype

The site links to the public Future You prototype at https://valenrg.github.io/future-you/ from both the homepage and the Future You case study.

- Beyond the Report now uses a dedicated hero visual on both the homepage and case-study page.

- Physical AI project now includes the designed 9-page PDF edition of *The Robot Is Not the System: Rethinking Physical AI*.

## v20 — Bionics Physical AI research thread
- Added `research/bionics-physical-ai.html` as a dedicated five-part research-series hub.
- Connected the series from the Physical AI rabbit hole and The Robot Is Not the System project page.
- The five Bionics Physical AI designed PDFs are integrated as a complete research series, with individual landing pages and downloads.


## v22 content architecture
- Homepage research section is now a curated two-item “Down the rabbit hole now” view: Bionics Physical AI + Unthinkable Futures.
- Removed the duplicate Bionics link from the Physical AI selected-work card.
- Updated hero “Currently poking at” topics to current research directions.
- Removed the standalone Unthinkable Futures essay showcase from the Research page; the essays remain attached to the Unthinkable Futures research card.


## v23 structure pass
- Reduced the Research page to four actual research territories: Physical AI Beyond the Robot, Unthinkable Futures, AI-Native Foresight, and Health / Evidence / the Female Body.
- Removed **Building as a Way of Knowing** from the Research taxonomy; it remains a method expressed on the homepage rather than a research domain.
- Removed direct PDF-download clutter from the Research index; downloads live on the relevant artifact pages.
- Removed **Playing the Future** from the Unthinkable Futures territory rather than forcing it into a research thread it only partially overlaps with.
- Renamed the public AI-native foresight case-study URL from the old internal label to `projects/beyond-the-report.html`.
- Replaced the visible homepage portrait placeholder with a text-first editorial About block.
- Added a compact footer with legal navigation to every secondary page.


## v24 — Playable Futures
- Added **Playable Futures** as its own research territory instead of forcing *Playing the Future* under Unthinkable Futures.
- Linked the territory directly to the existing *Playing the Future* paper/case-study page.
- Kept the homepage curated: *Playing the Future* remains Selected Work, while the broader research territory lives on the Research page.
- Used a full-width final research card so the five-territory layout reads intentionally rather than as an orphaned fifth tile.


## Speaker kit

The updated speaker kit is included at `downloads/valentina-contini-speaker-kit-2026.pdf` and linked from `speaking.html`.


## v31 update
- Integrated the complete five-part Bionics Physical AI designed series.
- Added five individual article landing pages with cover, summary, open/download actions, and previous/next navigation.
- Updated the Bionics hub to use the real designed covers.
- Updated the speaker kit and aligned the Speaking page with the featured talks in the kit.
