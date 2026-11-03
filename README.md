# Aura Studio — Team Link Tree

> Handcrafted, photoreal frosted-glass profile card floating over a soft-focus blurred mesh-gradient wallpaper with Apple-grade spring physics.

Built with plain **HTML5**, **CSS3**, and **Vanilla ES2020 JavaScript**. Zero frameworks, zero external dependencies, zero CDN requests, and 100% offline capable.

---

## Highlights

- **Aesthetic Fidelity:** Recreated faithfully from reference designs with layered frosted glass (`backdrop-filter: blur(32px) saturate(180%)`), crisp specular top highlights, top-left specular corner glints, ambient breathing avatar glows, and 4-layer animated mesh wallpaper.
- **Physical Spring ODE Engine:** Custom ~180-line critically damped second-order harmonic oscillator ($m \cdot x'' + d \cdot x' + k \cdot x = 0$) driven by `requestAnimationFrame`. No linear/ease curves.
- **Single Source of Truth:** 100% of names, roles, taglines, links, handles, theme colors, and switcher behaviors live in [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js).
- **Deterministic 6-Column Packing:** Intelligently lays out 1–12 links with equal-width squares and wide rectangles without leaving asymmetric orphan gaps.
- **Team Switching:** Fluid choreographed transitions between 4 team members with dynamic accent hue shifts and hash deep-linking (`#kasun`, `#elena`, `#marcus`, `#sarah`).
- **Full Accessibility:** WCAG AA compliant contrast, native keyboard navigation with roving tabindex on the dock (`role="tablist"`), focus-visible indicators, full `prefers-reduced-motion` and `prefers-reduced-transparency` fallbacks.
- **Ultra Lightweight:** Total HTML+CSS+JS combined is under 87 KB uncompressed (< 20 KB gzipped). Zero external font or icon downloads.

---

## File Architecture

```
/
├── index.html            # Semantic markup, meta/OG/JSON-LD, fallback sandbox notice
├── favicon.svg           # High-resolution vector squircle brand icon
├── css/
│   ├── tokens.css        # Centralized design tokens (colors, blurs, radii, shadows)
│   └── styles.css        # Layout, frosted glass recipe, link grid, dock, a11y & print
├── js/
│   ├── config.js         # Single editable configuration file (SITE object)
│   ├── render.js         # DOM generation, 16 vector brand icons, tile packer, validator
│   ├── motion.js         # Second-order spring engine, entrance ladder, pointer physics
│   └── app.js            # App controller, deep-linking, routing, a11y, debug inspector
├── assets/
│   ├── avatars/          # 4 self-contained square portrait photos (< 20 KB each)
│   └── wallpaper/        # CSS mesh fallback + optional custom wallpapers
├── NOTES.md              # 8-step edit guide, 5th member snippet, deployment guide
└── README.md             # This document
```

---

## Running Locally

Because this project uses vanilla ES Modules, simply run a local static server:

```bash
# Python (built into most systems)
python -m http.server 8080

# Or Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.

To inspect internal state, validation logs, and tile-packer test cases, append `?debug=1`:
`http://localhost:8080/?debug=1`
