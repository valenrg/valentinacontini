# Responsive QA — v14

Browser-rendered QA completed against the current HTML/CSS/JS build.

## Verified viewport classes

- 320 x 568 — narrow phone
- 390 x 844 — current phone
- 768 x 1024 — tablet portrait
- 844 x 390 — short landscape/mobile viewport
- 1024 x 768 — tablet landscape
- 1440 x 900 — desktop
- 1920 x 1080 — wide desktop homepage sanity check

All HTML pages were checked for horizontal overflow at 320, 390, 768, 1024, and 1440 px widths. No remaining overflowing elements were detected after the v14 fixes.

## v14 fixes

- Fixed 320 px clipping on the foresight essay hero pages.
- Fixed the homepage contact email overflowing on very narrow phones.
- Changed the career map to one column on phones.
- Reworked the four-step method into a vertical rail on phones.
- Added a tablet-landscape two-column treatment for the Selected Work grid.
- Improved full-screen mobile navigation, touch target size, safe-area spacing and short-height landscape behaviour.
- Fixed mobile-menu layering so the name and CLOSE control remain visible.
- Added Escape-to-close and rotation/resize reset so opening the mobile menu cannot leave desktop scrolling locked.
- Reduced hero scale in short landscape viewports.
- Added defensive `min-width: 0` rules to responsive CSS-grid children to prevent intrinsic text widths from forcing page overflow.
