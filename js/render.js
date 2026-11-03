/**
 * ============================================================================
 * RENDER ENGINE & ICON REGISTRY (render.js)
 * ============================================================================
 * Zero dependencies, 100% offline, hand-crafted inline vector SVGs.
 * Converts configuration into high-performance semantic DOM.
 * ============================================================================
 */

// ── 1. Vector Icon Registry ─────────────────────────────────────────────────
export const ICONS = {
  instagram: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="ig-g1" cx="20%" cy="110%" r="130%">
          <stop offset="0%" stop-color="var(--icon-ig-0)"/>
          <stop offset="20%" stop-color="var(--icon-ig-1)"/>
          <stop offset="45%" stop-color="var(--icon-ig-2)"/>
          <stop offset="70%" stop-color="var(--icon-ig-3)"/>
          <stop offset="100%" stop-color="var(--icon-ig-4)"/>
        </radialGradient>
      </defs>
      <!-- Squircle badge matching official brand kit -->
      <rect x="2" y="2" width="44" height="44" rx="10.8" fill="url(#ig-g1)"/>
      <!-- Camera outline -->
      <rect x="9.5" y="9.5" width="29" height="29" rx="8" fill="none" stroke="var(--icon-white)" stroke-width="3.2"/>
      <circle cx="24" cy="24" r="7.2" fill="none" stroke="var(--icon-white)" stroke-width="3.2"/>
      <circle cx="31.8" cy="16.2" r="2.2" fill="var(--icon-white)"/>
    </svg>`,

  github: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <!-- Universal 44px circular badge -->
      <circle cx="24" cy="24" r="22" fill="var(--icon-gh)"/>
      <g transform="translate(10.5, 10.5) scale(1.125)">
        <path fill="var(--icon-white)" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </g>
    </svg>`,

  whatsapp: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <!-- Universal 44px circular badge -->
      <circle cx="24" cy="24" r="22" fill="var(--icon-wa)"/>
      <path fill="var(--icon-white)" d="M35.6 29.8c-.6-.3-3.5-1.7-4-1.9-.5-.2-1-.3-1.4.3-.4.6-1.7 2.1-2.1 2.5-.4.4-.8.4-1.4.1-.6-.3-2.6-1-5-3.2-1.8-1.6-3.1-3.6-3.4-4.2-.4-.6 0-1 .3-1.3.3-.3.6-.7.9-1.1.3-.4.4-.7.6-1.1.2-.4 0-.8-.1-1.1-.1-.3-1.4-3.5-2-4.7-.5-1.2-1-1-1.4-1.1h-1.2c-.4 0-1.2.2-1.9.9-.6.6-2.4 2.4-2.4 5.8s2.5 6.7 2.8 7.2c.4.4 4.9 7.5 11.8 10.5 5.7 2.4 6.9 2 8.1 1.9 1.2-.1 3.9-1.6 4.4-3.1.6-1.5.6-2.8.4-3.1-.2-.3-.6-.5-1.2-.8z"/>
    </svg>`,

  youtube: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <!-- Universal 44px circular badge -->
      <circle cx="24" cy="24" r="22" fill="var(--icon-yt-bg)"/>
      <rect x="7" y="11.5" width="34" height="25" rx="7.5" fill="var(--icon-yt-red)"/>
      <polygon points="20.5,18 30.5,24 20.5,30" fill="var(--icon-white)"/>
    </svg>`,

  telegram: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="tg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--icon-tg-0)"/>
          <stop offset="100%" stop-color="var(--icon-tg-1)"/>
        </linearGradient>
      </defs>
      <!-- Universal 44px circular badge -->
      <circle cx="24" cy="24" r="22" fill="url(#tg-grad)"/>
      <path fill="var(--icon-white)" d="M12.8 23.6l20.4-8.6c.9-.4 1.7.1 1.4 1.2l-3.5 16.4c-.2 1.1-1 1.4-1.9.9l-5.6-4.1-2.6 2.5c-.3.3-.6.6-1.3.6l.4-5.6 10.1-9.1c.4-.4 0-.7-.6-.3l-12.5 7.9-5.4-1.7c-1.2-.4-1.2-1.2.2-1.7z"/>
    </svg>`,

  facebook: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-fb)"/>
      <path d="M27.6 44v-15.2h5l.8-6h-5.8v-3.8c0-1.8.4-3 3-3h3.2v-5.4c-.6-.1-2.4-.2-4.6-.2-4.6 0-7.8 2.8-7.8 8v4.4h-4.8v6h4.8V44h6.4z" fill="var(--icon-white)"/>
    </svg>`,

  mail: `
    <svg viewBox="0 0 28 28" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mail-env" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="var(--icon-mail-env-0)"/>
          <stop offset="100%" stop-color="var(--icon-mail-env-1)"/>
        </linearGradient>
        <linearGradient id="mail-flap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="var(--icon-mail-flap-0)"/>
          <stop offset="100%" stop-color="var(--icon-mail-flap-1)"/>
        </linearGradient>
      </defs>
      <path d="M4 10.5C4 9.1 5.1 8 6.5 8h15c1.4 0 2.5 1.1 2.5 2.5v11c0 1.4-1.1 2.5-2.5 2.5h-15C5.1 24 4 22.9 4 21.5v-11z" fill="url(#mail-env)"/>
      <rect x="7" y="4.5" width="14" height="11" rx="2" fill="var(--icon-mail-sheet)"/>
      <line x1="9" y1="8" x2="19" y2="8" stroke="var(--icon-mail-line)" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M4 23.5l8.5-7.5M24 23.5l-8.5-7.5" stroke="var(--icon-mail-crease)" stroke-width="1.2" stroke-linecap="round"/>
      <polygon points="4,24 14,15.5 24,24" fill="url(#mail-flap)" opacity="0.95"/>
      <circle cx="14" cy="7.5" r="4.2" fill="var(--icon-mail-badge)"/>
      <text x="14" y="9.2" font-family="-apple-system, sans-serif" font-size="5" font-weight="800" fill="var(--icon-white)" text-anchor="middle">@</text>
    </svg>`,

  x: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-black)"/>
      <path d="M31.6 13h4.2l-9.2 10.6 10.8 14.4h-8.6l-6.6-8.8-7.6 8.8H10.4l9.8-11.4L10 13h8.8l6 8 6.8-8zm-1.4 22.4h2.4L18.4 15.4H15.8l14.4 20z" fill="var(--icon-white)"/>
    </svg>`,

  twitter: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-tw)"/>
      <path d="M36.4 17a10 10 0 0 1-2.8.8 5 5 0 0 0 2.2-2.8c-1 .6-2 1-3.2 1.2a5 5 0 0 0-8.6 4.6 14 14 0 0 1-10.2-5.2 5 5 0 0 0 1.6 6.6 5 5 0 0 1-2.2-.6v.2a5 5 0 0 0 4 4.8 5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.4 10 10 0 0 1-7.4 2 14 14 0 0 0 7.6 2.2c9.2 0 14.2-7.6 14.2-14.2v-.6a10 10 0 0 0 2.4-2.2z" fill="var(--icon-white)"/>
    </svg>`,

  linkedin: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="44" height="44" rx="10" fill="var(--icon-li)"/>
      <path d="M14.2 18.4h5V34h-5V18.4zm2.5-7.6c1.6 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8-2.8-1.2-2.8-2.8 1.2-2.8 2.8-2.8zm7.6 7.6h4.8v2.2h0c.6-1.2 2.4-2.6 4.8-2.6 5 0 6 3.4 6 7.6V34h-5v-7.2c0-1.8 0-4-2.4-4s-2.8 2-2.8 3.8V34h-5V18.4z" fill="var(--icon-white)"/>
    </svg>`,

  dribbble: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-dr)"/>
      <path fill="var(--icon-white)" d="M24 9a15 15 0 0 0-14.6 12c2.4-.4 5.8-.6 9.6-.2a34.4 34.4 0 0 0 3.2-7.6A15 15 0 0 0 24 9zm-11.6 16.2c-1 0-2-.2-3-.2a14.8 14.8 0 0 0 10 13.4 28 28 0 0 1-.4-5.2 27.6 27.6 0 0 1-6.6-8zm13 13.6a14.8 14.8 0 0 0 10.8-7.2 26 26 0 0 0-8.8-2.4 32.6 32.6 0 0 1-2.4 9.6h.4zm9-18.6c1.4 1.8 2.8 4 4.2 6.4.2-.8.4-1.6.4-2.6a14.8 14.8 0 0 0-10.8-14.4c-.2 1.8-.6 3.8-1.4 5.6 2.8 1.6 5.4 3.2 7.6 5z"/>
    </svg>`,

  behance: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-be)"/>
      <path fill="var(--icon-white)" d="M12 20h6.4c2.4 0 3.6 1 3.6 2.6 0 1.2-.6 2-1.6 2.4 1.4.4 2 1.4 2 2.8 0 2-1.6 3.2-4 3.2H12V20zm4 4.2h2c.8 0 1.4-.4 1.4-1.2s-.6-1-1.4-1h-2v2.2zm0 4.4h2.4c1 0 1.6-.4 1.6-1.4s-.6-1.2-1.6-1.2H16v2.6zm13.6-9h5.6v1.6h-5.6v-1.6zm-.6 7.2c0-2.8 2-4.8 5-4.8 2.8 0 4.6 2 4.6 4.8v.8h-6.8c0 1.6 1 2.4 2.6 2.4 1.2 0 2-.4 2.4-1l1.8 1.2c-.8 1.2-2.2 2-4.2 2-3.2 0-5.4-2.2-5.4-5.4zm6.8-1.2c0-1.2-.8-2-2-2s-2 .8-2.2 2h4.2z"/>
    </svg>`,

  spotify: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-sp)"/>
      <path fill="var(--icon-black)" d="M32.8 30.6c-.4.6-1 .8-1.6.4-4.2-2.6-9.6-3.2-15.8-1.8-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 6.8-1.6 12.8-.8 17.6 2 .6.4.8 1 .4 1.6zm2.2-5c-.4.8-1.4 1-2 .6-5-3-12.4-4-18.2-2.2-.8.2-1.6-.2-1.8-1-.2-.8.2-1.6 1-1.8 6.6-2 14.8-1 20.4 2.4.8.4 1 1.4.6 2zm.2-5.2c-5.8-3.6-15.6-3.8-21.2-2-1 .2-2-.2-2.2-1.2-.2-1 .2-2 1.2-2.2 6.6-2 17.4-1.6 24.2 2.4.8.6 1.2 1.6.6 2.4-.4 1-1.6 1.2-2.6.6z"/>
    </svg>`,

  tiktok: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-black)"/>
      <path fill="var(--icon-white)" d="M29.6 14.6c1.6 1.8 3.4 3 5 3.4v4.6c-1.8 0-3.6-.6-5-1.4v9.2a7.4 7.4 0 1 1-7.4-7.4c.6 0 1.2.1 1.8.2v4.6a3 3 0 1 0 2.4 3V11h4.6a8.4 8.4 0 0 1-1.4 3.6z"/>
    </svg>`,

  website: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="web-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--icon-web-0)"/>
          <stop offset="100%" stop-color="var(--icon-web-1)"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#web-g)"/>
      <circle cx="24" cy="24" r="15" fill="none" stroke="var(--icon-white)" stroke-width="2.8"/>
      <line x1="9" y1="24" x2="39" y2="24" stroke="var(--icon-white)" stroke-width="2.8"/>
      <ellipse cx="24" cy="24" rx="7.2" ry="15" fill="none" stroke="var(--icon-white)" stroke-width="2.8"/>
    </svg>`,

  phone: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-web-0)"/>
      <path fill="var(--icon-white)" d="M16.4 19c1.2 2.8 3.6 5.2 6.4 6.4l2.2-2.2c.4-.4 1-.4 1.4-.2 2 .6 4.2.6 6.4.2.6 0 1.2.6 1.2 1.2v4.2c0 .8-.6 1.4-1.4 1.4-12.4 0-22.4-10-22.4-22.4 0-.8.6-1.4 1.4-1.4h4.2c.8 0 1.2.6 1.2 1.2.4 2.2.4 4.4.2 6.4 0 .4-.2 1-.4 1.4L16.4 19z"/>
    </svg>`,

  custom: `
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--icon-custom)"/>
      <path fill="none" stroke="var(--icon-white)" stroke-width="3.6" stroke-linecap="round" d="M19.6 28.4l8.8-8.8m-3.6-3.6l2.8-2.8a6.2 6.2 0 1 1 8.8 8.8l-2.8 2.8m-10.6 3.6l-2.8 2.8a6.2 6.2 0 0 1-8.8-8.8l2.8-2.8"/>
    </svg>`,

  share: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
      <path d="M12 3v11m0-11L8.5 6.5M12 3l3.5 3.5M6 10.5v8a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5v-8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  close: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
};

// Aliases
ICONS.email = ICONS.mail;

// ── 2. Config Validation ────────────────────────────────────────────────────
export function validateConfig(config) {
  const issues = [];
  if (!config || !config.members || !Array.isArray(config.members)) {
    issues.push("SITE.members must be an array");
    return { valid: false, issues };
  }

  const seenIds = new Set();
  const validProtocols = /^((https?:\/\/)|(mailto:)|(tel:)|\/)/i;

  config.members.forEach((m, idx) => {
    if (!m.id || typeof m.id !== "string") {
      issues.push(`Member at index ${idx} is missing a string ID`);
    } else if (seenIds.has(m.id)) {
      issues.push(`Duplicate member ID "${m.id}" found`);
    } else {
      seenIds.add(m.id);
    }

    if (!m.name || typeof m.name !== "string" || !m.name.trim()) {
      issues.push(`Member "${m.id || idx}" has an empty name`);
    }

    if (m.links && Array.isArray(m.links)) {
      m.links.forEach((l, lIdx) => {
        if (!l.href || !validProtocols.test(l.href)) {
          issues.push(`Member "${m.id}" link[${lIdx}] (${l.label || "unlabeled"}) has invalid href: "${l.href}"`);
        }
        const iconKey = (l.type || "").toLowerCase();
        if (!ICONS[iconKey]) {
          issues.push(`Member "${m.id}" link[${lIdx}] references unknown icon type "${l.type}"`);
        }
      });
    }
  });

  return { valid: issues.length === 0, issues };
}

// ── 3. Deterministic 6-Column Tile Packing Algorithm ─────────────────────────
/**
 * Packs 1..12 links into a 6-column CSS grid.
 * Normal tiles: span 2 (aspect 1:1)
 * Wide tiles: span 3 (aspect 306/148)
 *
 * Rules:
 * - Sequential ordering preserved.
 * - If remaining space in row < item span, close row and wrap.
 * - An orphan left alone in an incomplete row is expanded to span 6 (or balanced)
 *   so rows NEVER leave an asymmetric hole.
 * - 4 links with no wide flag: balanced as 2x2 grid (span 3 each).
 * - 1 link: expands to span 6.
 */
export function packTiles(links) {
  if (!links || links.length === 0) return [];
  const cleanLinks = links.filter(l => l && (l.href || l.label || l.type));
  const n = cleanLinks.length;

  // Edge case: single link -> hero span 6
  if (n === 1) {
    return [{ ...cleanLinks[0], span: 6, isSquare: false }];
  }

  // Edge case: 4 links and none marked wide -> 2x2 grid (span 3 each)
  const anyWide = cleanLinks.some(l => l.wide);
  if (n === 4 && !anyWide) {
    return cleanLinks.map(l => ({ ...l, span: 3, isSquare: false }));
  }

  const packed = [];
  let currentRowUsage = 0;
  const rowBuffer = [];

  for (let i = 0; i < n; i++) {
    const link = cleanLinks[i];
    const desiredSpan = link.wide ? 3 : 2;

    if (currentRowUsage + desiredSpan <= 6) {
      rowBuffer.push({ ...link, span: desiredSpan, isSquare: desiredSpan === 2 });
      currentRowUsage += desiredSpan;
    } else {
      // Row must close. If it had leftover space, check if last item can expand
      flushRow(rowBuffer, currentRowUsage, packed);
      rowBuffer.length = 0;
      rowBuffer.push({ ...link, span: desiredSpan, isSquare: desiredSpan === 2 });
      currentRowUsage = desiredSpan;
    }
  }

  if (rowBuffer.length > 0) {
    flushRow(rowBuffer, currentRowUsage, packed);
  }

  return packed;
}

function flushRow(rowBuffer, rowUsage, output) {
  if (rowBuffer.length === 0) return;
  // If row has only 1 tile and usage < 6, expand it to full width
  if (rowBuffer.length === 1 && rowUsage < 6) {
    rowBuffer[0].span = 6;
    rowBuffer[0].isSquare = false;
  } else if (rowUsage === 4 && rowBuffer.length === 2 && rowBuffer.every(t => t.span === 2)) {
    // If a row has 2 squares (usage 4), expand both to span 3 to fill 6 cleanly
    rowBuffer[0].span = 3;
    rowBuffer[0].isSquare = false;
    rowBuffer[1].span = 3;
    rowBuffer[1].isSquare = false;
  }
  for (const t of rowBuffer) {
    output.push(t);
  }
}

// ── 4. Unit Test Suite for Tile Packer (Debug Mode) ──────────────────────────
export function testTilePacker() {
  const cases = [
    { name: "1 link", links: [{ label: "A" }] },
    { name: "2 links", links: [{ label: "A" }, { label: "B" }] },
    { name: "3 links", links: [{ label: "A" }, { label: "B" }, { label: "C" }] },
    { name: "4 links", links: [{ label: "A" }, { label: "B" }, { label: "C" }, { label: "D" }] },
    { name: "5 links (Ref 2)", links: [{ label: "IG" }, { label: "FB" }, { label: "WA" }, { label: "YT", wide: true }, { label: "TG", wide: true }] },
    { name: "7 links", links: [{ label: "1" }, { label: "2" }, { label: "3" }, { label: "4" }, { label: "5" }, { label: "6" }, { label: "7" }] },
  ];

  const results = cases.map(c => {
    const res = packTiles(c.links);
    const spans = res.map(r => r.span).join("+");
    return { Case: c.name, Total: res.length, Spans: spans };
  });

  return results;
}

// ── 5. Member Card Template Generator ────────────────────────────────────────
export function renderCardContent(member, settings, brand) {
  const packedLinks = packTiles(member.links);
  const openNewTab = settings.openLinksInNewTab !== false;
  const relAttr = openNewTab ? 'target="_blank" rel="noopener noreferrer"' : '';

  const tilesHtml = packedLinks.map((link, idx) => {
    const iconType = (link.type || "custom").toLowerCase();
    const iconSvg = ICONS[iconType] || ICONS.custom;
    const tileClass = `tile tile--span-${link.span} ${link.isSquare ? 'tile--square' : 'tile--wide'}`;
    const handleHtml = link.handle ? `<span class="tile__tooltip-handle">${escapeHtml(link.handle)}</span>` : '';

    return `
      <li class="tile-wrap" style="--tile-col-span: ${link.span};">
        <a class="${tileClass}" href="${escapeHtml(link.href)}" ${relAttr} aria-label="${escapeHtml(member.name)} on ${escapeHtml(link.label || link.type)}" data-index="${idx}">
          <div class="tile__icon-box">
            ${iconSvg}
          </div>
          <span class="tile__tooltip" aria-hidden="true">
            <span class="tile__tooltip-title">${escapeHtml(link.label || link.type)}</span>
            ${handleHtml}
          </span>
        </a>
      </li>`;
  }).join("");

  const ctaHtml = member.contact ? `
    <div class="cta-wrap">
      <a class="cta-pill" href="${escapeHtml(member.contact.href)}" aria-label="${escapeHtml(member.contact.label || "Contact me")}">
        <span class="cta-pill__icon" aria-hidden="true">${ICONS[member.contact.icon || "mail"] || ICONS.mail}</span>
        <span class="cta-pill__label">${escapeHtml(member.contact.label || "Contact me")}</span>
        <span class="cta-pill__spacer" aria-hidden="true"></span>
      </a>
    </div>` : '';

  const shareButtonHtml = settings.showQrOnDesktop ? `
    <button class="card__share-btn" id="cardShareBtn" type="button" aria-label="Share ${escapeHtml(member.name)}'s profile" title="Share profile">
      ${ICONS.share}
    </button>` : '';

  return `
    <article class="glass-card" id="heroCard" aria-labelledby="memberName" style="--member-accent: ${member.accent || 'var(--color-accent)'};">
      <div class="card__specular-shine" aria-hidden="true"></div>
      <div class="card__inner-stroke" aria-hidden="true"></div>
      ${shareButtonHtml}

      <header class="card__header">
        <div class="avatar-container" id="avatarContainer">
          <div class="avatar-glow" aria-hidden="true"></div>
          <div class="avatar-frame">
            <img class="avatar-img" id="avatarImg"
                 src="${escapeHtml(member.avatar)}"
                 alt="${escapeHtml(member.avatarAlt || 'Portrait of ' + member.name)}"
                 width="116" height="116"
                 loading="eager" decoding="async" fetchpriority="high">
            <div class="avatar-fallback" id="avatarFallback" aria-hidden="true" style="display: none;">
              ${escapeHtml(member.initials || getInitials(member.name))}
            </div>
          </div>
        </div>

        <div class="identity-block">
          <div class="name-mask">
            <h1 class="member-name" id="memberName">${escapeHtml(member.name)}</h1>
          </div>
          <p class="member-tagline" id="memberTagline">${escapeHtml(member.tagline || '')}</p>
        </div>
      </header>

      <main class="card__links-section">
        <ul class="link-grid" role="list">
          ${tilesHtml}
        </ul>
      </main>

      <footer class="card__footer-cta">
        ${ctaHtml}
      </footer>
    </article>`;
}

// ── 6. Dock Member Switcher Template ─────────────────────────────────────────
export function renderDock(members, activeMemberId, style = "dock") {
  if (!members || members.length <= 1) return "";

  if (style === "segmented") {
    const tabs = members.map(m => {
      const isSelected = m.id === activeMemberId;
      return `
        <button class="segmented-tab ${isSelected ? 'is-active' : ''}"
                type="button" role="tab"
                aria-selected="${isSelected ? 'true' : 'false'}"
                data-member-id="${escapeHtml(m.id)}"
                tabindex="${isSelected ? '0' : '-1'}">
          ${escapeHtml(m.name.split(' ')[0])}
        </button>`;
    }).join("");

    return `
      <nav class="segmented-control" role="tablist" aria-label="Team Members">
        <div class="segmented-thumb" id="segmentedThumb" aria-hidden="true"></div>
        ${tabs}
      </nav>`;
  }

  // Default "dock" style (floating avatar pill)
  const avatars = members.map(m => {
    const isSelected = m.id === activeMemberId;
    return `
      <button class="dock-btn ${isSelected ? 'is-active' : ''}"
              type="button" role="tab"
              aria-selected="${isSelected ? 'true' : 'false'}"
              aria-label="${escapeHtml(m.name)} - ${escapeHtml(m.role)}"
              data-member-id="${escapeHtml(m.id)}"
              tabindex="${isSelected ? '0' : '-1'}">
        <img class="dock-avatar-img"
             src="${escapeHtml(m.avatar)}"
             alt="${escapeHtml(m.name)}"
             width="40" height="40"
             loading="lazy" decoding="async">
        <span class="dock-tooltip" aria-hidden="true">
          <strong>${escapeHtml(m.name.split(' ')[0])}</strong> · ${escapeHtml(m.role)}
        </span>
      </button>`;
  }).join("");

  return `
    <nav class="dock-switcher" role="tablist" aria-label="Team Members" id="dockSwitcher">
      ${avatars}
    </nav>`;
}

// ── 7. Helpers ──────────────────────────────────────────────────────────────
export function getInitials(name) {
  if (!name) return "KD";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
