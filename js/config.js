/**
 * ============================================================================
 * SITE CONFIGURATION (config.js)
 * ============================================================================
 * The ONLY file you need to edit to customize this entire site.
 * No HTML, CSS, or JS changes are necessary for any content or theme updates.
 *
 * AVAILABLE ICON TYPES IN THE REGISTRY:
 *   instagram, facebook, whatsapp, youtube, telegram,
 *   x (or twitter), linkedin, github, dribbble, behance,
 *   spotify, tiktok, email (or mail), phone, website, custom
 *
 * HOW TO ADD WIDE TILES:
 *   Add `wide: true` to any link item. The layout engine automatically
 *   packs rows with 6-column math without leaving empty asymmetric gaps.
 * ============================================================================
 */

export const SITE = {
  // ── Brand Identity ────────────────────────────────────────
  brand: {
    name: "Aura Studio",
    titleTemplate: "{name} — {role}",
    footerText: "© 2026 Aura Studio · Crafted with Precision",
    showFooter: true,
    url: "", // Set to your live URL (e.g. "https://aurastudio.com") to enable canonical meta tags
    lang: "en",
  },

  // ── Interactive & Physics Settings ────────────────────────
  settings: {
    defaultMemberId: "Arsh", // ID of the member displayed on initial load
    memberSwitcher: true,     // Toggle team switcher (dock / segmented / none)
    switcherStyle: "dock",    // "dock" (floating avatar pill) | "segmented" | "none"
    deepLinks: true,          // Enable shareable URLs via #kasun or ?m=kasun
    openLinksInNewTab: true,  // Automatically add target="_blank" rel="noopener noreferrer"
    hapticPulse: true,        // Subtle tactile bounce scale pulse on tap/click
    tilt: true,               // Physical 3D pointer tilt on desktop
    parallax: true,           // Background mesh blobs counter-parallax on cursor move
    grain: true,              // Subtle film-grain texture overlay
    autoKerning: true,        // Optical letter spacing on headings
    showQrOnDesktop: true,    // Quick-share affordance button on the card header
    reduceMotionRespect: true,// Respects system prefers-reduced-motion unconditionally
    edgeToEdgeOnMobile: false,// If true, mobile card goes full bleed; if false, keeps 28px radius
  },

  // ── Theme Overrides ───────────────────────────────────────
  theme: {
    wallpaper: "cobalt",      // "cobalt" | "aurora" | "sunset" | "mono" | "custom"
    accent: "#0A84FF",        // Global accent for focus rings & glow
    cardRadius: 44,           // Desktop card border radius in pixels
    glass: {
      tint: "#FFFFFF",        // Primary specular glass highlight
      opacity: 0.14,          // Base glass transparency
      blur: 32,               // Backdrop blur intensity in px
      saturation: 1.8,        // Backdrop saturation multiplier
      border: 0.35,           // Border highlight alpha
      topLight: 0.55,         // Inner top highlight strength
    },
    tiles: {
      fill: "#8E8E93",        // Squircle tile base fill
      opacity: 0.42,          // Tile fill alpha
      radius: 26,             // Tile border radius in px
      iconScale: 0.52,        // Icon size as fraction of tile dimension
    },
    cta: {
      style: "solid-white",   // "solid-white" | "glass" | "accent"
      radius: 999,
      label: "Contact me",
    },
  },

  // ── Team Members ──────────────────────────────────────────
  members: [
    {
      id: "Arsh",
      name: "Arsh Mahla (Lead)",
      role: "Team Leader",
      tagline: "Designer who creates delightful experiences",
      avatar: "assets/avatars/member-1.jpg",
      avatarAlt: "Arsh Mahla",
      initials: "AM",
      accent: "#4FA3FF",
      links: [
        {
          type: "instagram",
          label: "Instagram",
          href: "https://instagram.com/immature_arsh",
          handle: "@immature_arsh",
        },
        {
          type: "github",
          label: "GitHub",
          href: "https://github.com/codewith-ranjit",
          handle: "@codewith-ranjit",
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          href: "https://wa.me/7527041316",
          handle: "+94 7527041316",
        },
        {
          type: "youtube",
          label: "YouTube",
          href: "https://www.youtube.com/@codewith_ranjit",
          handle: "@codewith_ranjit",
          wide: true,
        },
        {
          type: "telegram",
          label: "Telegram",
          href: "https://t.me/immature_arsh",
          handle: "@immature_arsh",
          wide: true,
        },
      ],
      contact: {
        label: "Contact me",
        href: "mailto:?subject=Hello%20from%20your%20link%20tree",
        icon: "mail",
      },
    },

    {
      id: "Anhad",
      name: "Anhad Singh",
      role: "Quality Analyst & Vibe Coder",
      tagline: "Code and Improvise",
      avatar: "assets/avatars/member-2.jpg",
      avatarAlt: "Anhad Singh",
      initials: "AS",
      accent: "#30D158",
      links: [
        {
          type: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/_unhad_/",
          handle: "@unhad",
        },
        {
          type: "github",
          label: "GitHub",
          href: "https://github.com/singhanhad706-ship-it",
          handle: "@singhanhad706",
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          href: "https://wa.me/7986203488",
          handle: "+91 79862 03488",
        },
      ],
      contact: {
        label: "Contact me",
        href: "mailto:Singhanhad706@gmail.com?subject=Inquiry",
        icon: "mail",
      },
    },

    {
      id: "prithvi",
      name: "Prithvi Sharma",
      role: "Vibe Coder",
      tagline: "Building in Public",
      avatar: "assets/avatars/member-3.jpg",
      avatarAlt: "Prithvi Sharma",
      initials: "PS",
      accent: "#FF9F0A",
      links: [
        {
          type: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/prithvisharmayt/",
          handle: "@prithvisharmayt",
        },
        {
          type: "github",
          label: "GitHub",
          href: "https://github.com/prithvisharmayt",
          handle: "@prithvisharmayt",
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          href: "https://wa.me/919878761849",
          handle: "+91 9878761849",
        },
      ],
      contact: {
        label: "Contact me",
        href: "mailto:alexwart13@gmail.com?subject=Collaboration%20Inquiry",
        icon: "mail",
      }
    },

    {
      id: "Parv",
      name: "Parv Sharma",
      role: "UI Designer & Supporter",
      tagline: "Code for Betterment",
      avatar: "assets/avatars/member-4.jpg",
      avatarAlt: "Parv Sharma",
      initials: "PS",
      accent: "#BF5AF2",
      links: [
        {
          type: "instagram",
          label: "Instagram",
          href: "https://instagram.com/itsparv611",
          handle: "@itsarv611",
        },
        {
          type: "github",
          label: "GitHub",
          href: "https://github.com/PARV200",
          handle: "@PARV200",
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          href: "https://wa.me/7888922820",
          handle: "+91 7888922820",
        },
        {
          type: "email",
          label: "Email",
          href: "mailto:parvsaksham2011@gmail.com",
          handle: "parvsaksham2011@gmail.com",
        },
      ],
      contact: {
        label: "Contact me",
        href: "mailto:parvsaksham2011@gmail.com?subject=Hello%20Parv!",
        icon: "mail",
      },
    },
  ],
};
