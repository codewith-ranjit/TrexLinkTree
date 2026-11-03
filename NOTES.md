# Aura Studio LinkTree — Maintenance & Customization Guide

This project is a single-page, fully static, zero-dependency team link tree crafted with photoreal frosted-glass aesthetics, iOS-grade spring physics, and an Apple Human Interface Design feel.

Everything you need to customize is located in one single file: [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js).

---

## 1. 8-Step Guide: How to Change a Name, Photo, or Link

1. **Open [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js)** in your text editor.
2. Locate the `members` array and find the team member object you want to modify (e.g. `id: "kasun"`).
3. **Change Name & Role:** Modify the `name` (e.g., `"Kasun Dilanka"`) and `role` (e.g., `"Principal Product Designer"`).
4. **Change Tagline:** Update `tagline`. Do **not** type quotation marks—typographic quotes (`“”`) are automatically added by CSS.
5. **Change Avatar Photo:**
   - Drop your square portrait photo (JPG or WebP, recommended 300×300px, < 100 KB) into [`assets/avatars/`](file:///c:/Users/Laptop/Desktop/LinkTree/assets/avatars/).
   - Update `avatar: "assets/avatars/your-photo.jpg"` in [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js).
   - If the file is missing or fails to load, a monogram avatar fallback with your `initials` automatically renders.
6. **Change or Reorder Links:**
   - In the `links` array, update `type` (`instagram`, `whatsapp`, `youtube`, `telegram`, etc.), `label`, and `href`.
   - Set `wide: true` on any link you want to span a wider rectangular card.
   - Set `handle: "@username"` to display an elegant hover tooltip handle.
7. **Change the Contact CTA:**
   - In `contact`, update `label` (e.g. `"Contact me"` or `"Book a Call"`) and `href` (e.g. `mailto:you@domain.com?subject=Inquiry`).
8. **Save & Refresh:** Refresh your browser. No build, bundling, or terminal commands required!

---

## 2. How to Add a 5th Team Member

Copy and paste this snippet directly into the `members` array in [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js):

```javascript
{
  id: "alex",
  name: "Alex Mercer",
  role: "Creative Director",
  tagline: "Shaping bold brand stories and visual universes",
  avatar: "assets/avatars/member-5.jpg",
  avatarAlt: "Alex Mercer",
  initials: "AM",
  accent: "#FF375F", // iOS system rose / pink glow
  links: [
    { type: "instagram", label: "Instagram", href: "https://instagram.com/alexmercer", handle: "@alexmercer" },
    { type: "dribbble",  label: "Dribbble",  href: "https://dribbble.com/alexmercer",   handle: "@alexmercer" },
    { type: "linkedin",  label: "LinkedIn",  href: "https://linkedin.com/in/alexmercer" },
    { type: "website",   label: "Portfolio", href: "https://alexmercer.design",         handle: "alexmercer.design", wide: true },
    { type: "telegram",  label: "Telegram",  href: "https://t.me/alexmercer",          handle: "@alexmercer",      wide: true },
  ],
  contact: {
    label: "Contact me",
    href: "mailto:alex@aurastudio.com?subject=Creative%20Direction%20Project",
    icon: "mail",
  },
},
```

---

## 3. How to Change the Theme & Appearance

All global styling controls are centralized under `theme` and `settings` in [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js):

- **Accent Color:** Change `theme.accent` (e.g., `"#0A84FF"` for Apple blue, `"#30D158"` for mint green, `"#FF9F0A"` for amber).
- **Switcher Style:** Toggle between `"dock"` (floating glass avatar bar) or `"segmented"` (iOS sliding segmented tab pill) via `settings.switcherStyle`.
- **Card Corner Radius:** Adjust `theme.cardRadius` (default: `44` px).
- **Glass Transparency & Blur:** Adjust `theme.glass.opacity` (default `0.14`) and `theme.glass.blur` (default `32` px).
- **Mobile Full Bleed vs. Rounded:** Set `settings.edgeToEdgeOnMobile: true` for edge-to-edge mobile display.

---

## 4. Deployment Guide

### GitHub Pages (Drag & Drop or Git Push)
1. Push this repository to GitHub or upload the files.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`. Click **Save**.
4. Your site will be live instantly at `https://<username>.github.io/<repo-name>/`.

### Netlify (Drag & Drop)
1. Log in to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `LinkTree` root folder into the browser window.
3. Your site deploys in under 5 seconds with zero configuration.

### Vercel (CLI or Dashboard)
1. Run `npx vercel` in the project root, or import the GitHub repository in the Vercel dashboard.
2. Framework preset: **Other** (Static). Build command: *leave empty*. Output directory: `./`.
3. Click **Deploy**.

---

## 5. Known Placeholders to Replace Before Production

When configuring for your real team, replace these sample URLs in [`js/config.js`](file:///c:/Users/Laptop/Desktop/LinkTree/js/config.js):

| Member | Field | Sample Value | Replace With |
|---|---|---|---|
| Kasun | WhatsApp | `https://wa.me/94770000000` | Real international phone digits (`https://wa.me/<countrycode><number>`) |
| Kasun | Contact Email | `mailto:hello@aurastudio.com` | Your verified business email address |
| Elena | GitHub / LinkedIn | `https://github.com/elenavance` | Elena's official profiles |
| Marcus | Behance / Studio | `https://marcuschen.studio` | Marcus's live portfolio URL |
| Sarah | Dribbble / Motion | `https://github.com/sarahlin` | Sarah's motion portfolio repository |
