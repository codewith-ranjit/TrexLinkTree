/**
 * ============================================================================
 * APPLICATION ENTRY POINT (app.js)
 * ============================================================================
 * Orchestrates rendering, motion choreography, routing, a11y, and user events.
 * Zero external libraries. 100% offline capable.
 * ============================================================================
 */

import { SITE } from "./config.js";
import { validateConfig, renderCardContent, renderDock, testTilePacker } from "./render.js";
import { MotionSystem } from "./motion.js";

class App {
  constructor() {
    this.config = SITE;
    this.activeMemberId = null;
    this.isSwitching = false;
    this.queuedMemberId = null;
    this.cleanupPointerPhysics = null;

    // DOM Elements
    this.stageEl = document.getElementById("stage");
    this.cardContainer = document.getElementById("cardContainer");
    this.dockContainer = document.getElementById("dockContainer");
    this.wallpaperEl = document.getElementById("wallpaper");
    this.footerEl = document.getElementById("siteFooter");
    this.toastEl = document.getElementById("toast");
  }

  init() {
    MotionSystem.init();

    // 1. Validate Config
    const validation = validateConfig(this.config);
    if (!validation.valid) {
      validation.issues.forEach((issue) => console.warn(`[Config Warning] ${issue}`));
    }

    // 2. Resolve Active Member from Hash or Default
    this.activeMemberId = this.resolveMemberIdFromUrl() || this.config.settings.defaultMemberId;
    if (!this.getMember(this.activeMemberId)) {
      this.activeMemberId = this.config.members[0].id;
    }

    // 3. Render Initial View
    this.renderCurrentMember(true);

    // 4. Bind Global Listeners
    this.bindRouting();
    this.bindTabVisibility();
    this.bindHaptics();

    // 5. Debug Inspector (?debug=1)
    if (new URLSearchParams(window.location.search).get("debug") === "1") {
      this.renderDebugPanel(validation);
    }
  }

  getMember(id) {
    return this.config.members.find((m) => m.id === id);
  }

  resolveMemberIdFromUrl() {
    if (!this.config.settings.deepLinks) return null;
    const hash = window.location.hash.replace("#", "").trim();
    if (hash && this.getMember(hash)) return hash;

    const query = new URLSearchParams(window.location.search).get("m");
    if (query && this.getMember(query)) return query;

    return null;
  }

  updateMetadata(member) {
    // Dynamic document title
    const template = this.config.brand.titleTemplate || "{name} — {role}";
    document.title = template.replace("{name}", member.name).replace("{role}", member.role);

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = member.tagline || `${member.name} - ${member.role}`;

    // Per-member canonical URL if SITE.brand.url is configured
    if (this.config.brand.url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `${this.config.brand.url.replace(/\/$/, "")}/#${member.id}`;
    }
  }

  renderCurrentMember(isInitialBoot = false) {
    const member = this.getMember(this.activeMemberId);
    if (!member) return;

    this.updateMetadata(member);

    // Render Hero Card
    this.cardContainer.innerHTML = renderCardContent(member, this.config.settings, this.config.brand);

    // Render Dock (if enabled)
    if (this.config.settings.memberSwitcher && this.config.members.length > 1) {
      this.dockContainer.innerHTML = renderDock(
        this.config.members,
        this.activeMemberId,
        this.config.settings.switcherStyle
      );
      this.bindDockEvents();
    } else {
      this.dockContainer.innerHTML = "";
    }

    // Render Footer
    if (this.config.brand.showFooter && this.footerEl) {
      this.footerEl.textContent = this.config.brand.footerText;
    }

    // Setup Avatar Fallback & Skeleton
    this.setupAvatarHandling();

    // Bind Share Button
    this.bindShareButton(member);

    // Bind Motion & Pointer Physics
    const cardEl = this.cardContainer.querySelector("#heroCard");
    const tileEls = Array.from(this.cardContainer.querySelectorAll(".tile"));

    if (this.cleanupPointerPhysics) {
      this.cleanupPointerPhysics();
    }

    this.cleanupPointerPhysics = MotionSystem.bindPointerPhysics({
      cardEl,
      wallpaperEl: this.wallpaperEl,
      tileEls,
      settings: this.config.settings,
    });

    // Play Initial Entrance Choreography
    if (isInitialBoot) {
      const avatarEl = cardEl.querySelector("#avatarContainer");
      const nameEl = cardEl.querySelector("#memberName");
      const taglineEl = cardEl.querySelector("#memberTagline");
      const ctaEl = cardEl.querySelector(".cta-wrap");
      const dockEl = this.dockContainer.querySelector("#dockSwitcher, .segmented-control");

      MotionSystem.playEntranceLadder({
        cardEl,
        avatarEl,
        nameEl,
        taglineEl,
        tileEls,
        ctaEl,
        dockEl,
      });
    }
  }

  setupAvatarHandling() {
    const avatarImg = this.cardContainer.querySelector("#avatarImg");
    const avatarFallback = this.cardContainer.querySelector("#avatarFallback");

    if (avatarImg && avatarFallback) {
      avatarImg.onerror = () => {
        avatarImg.style.display = "none";
        avatarFallback.style.display = "grid";
      };
    }
  }

  bindShareButton(member) {
    const shareBtn = this.cardContainer.querySelector("#cardShareBtn");
    if (!shareBtn) return;

    shareBtn.addEventListener("click", async () => {
      const shareUrl = window.location.href;
      const shareData = {
        title: `${member.name} — ${member.role}`,
        text: member.tagline,
        url: shareUrl,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (e) {
          if (e.name === "AbortError") return;
        }
      }

      // Clipboard Fallback
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(shareUrl);
          this.showToast("Link copied to clipboard");
        } catch (err) {
          this.showToast("Unable to copy link");
        }
      }
    });
  }

  showToast(message) {
    if (!this.toastEl) return;
    this.toastEl.textContent = message;
    this.toastEl.classList.add("is-visible");
    setTimeout(() => {
      this.toastEl.classList.remove("is-visible");
    }, 1600);
  }

  bindDockEvents() {
    const buttons = Array.from(this.dockContainer.querySelectorAll(".dock-btn, .segmented-tab"));
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-member-id");
        this.switchMember(targetId);
      });

      // Accessible Keyboard Navigation (Arrow Keys, Home, End, roving tabindex)
      btn.addEventListener("keydown", (e) => {
        let newIndex = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          newIndex = (index + 1) % buttons.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          newIndex = (index - 1 + buttons.length) % buttons.length;
        } else if (e.key === "Home") {
          newIndex = 0;
        } else if (e.key === "End") {
          newIndex = buttons.length - 1;
        }

        if (newIndex !== null) {
          e.preventDefault();
          buttons[newIndex].focus();
          const targetId = buttons[newIndex].getAttribute("data-member-id");
          this.switchMember(targetId);
        }
      });
    });
  }

  switchMember(memberId) {
    if (!memberId || !this.getMember(memberId)) return;

    // If already active, trigger single subtle tactile pulse
    if (memberId === this.activeMemberId) {
      const cardEl = this.cardContainer.querySelector("#heroCard");
      if (cardEl) {
        MotionSystem.spring({
          key: "card-pulse",
          from: 0.98,
          to: 1.0,
          stiffness: 500,
          damping: 30,
          onUpdate: (v) => {
            cardEl.style.transform = `scale(${v.toFixed(4)})`;
          },
          onComplete: () => {
            cardEl.style.transform = "none";
          },
        });
      }
      return;
    }

    // Queue if another switch is in-flight
    if (this.isSwitching) {
      this.queuedMemberId = memberId;
      return;
    }

    this.isSwitching = true;
    this.activeMemberId = memberId;

    // Update URL hash
    if (this.config.settings.deepLinks) {
      history.replaceState(null, "", `#${memberId}`);
    }

    const cardEl = this.cardContainer.querySelector("#heroCard");
    const targetMember = this.getMember(memberId);

    MotionSystem.transitionMemberSwitch({
      cardEl,
      wallpaperEl: this.wallpaperEl,
      accentColor: targetMember.accent,
      onSwapContent: () => {
        this.renderCurrentMember(false);
      },
      onDone: () => {
        this.isSwitching = false;
        if (this.queuedMemberId) {
          const next = this.queuedMemberId;
          this.queuedMemberId = null;
          this.switchMember(next);
        }
      },
    });
  }

  bindRouting() {
    window.addEventListener("hashchange", () => {
      const hashId = this.resolveMemberIdFromUrl();
      if (hashId && hashId !== this.activeMemberId) {
        this.switchMember(hashId);
      }
    });

    window.addEventListener("popstate", () => {
      const hashId = this.resolveMemberIdFromUrl();
      if (hashId && hashId !== this.activeMemberId) {
        this.switchMember(hashId);
      }
    });
  }

  bindTabVisibility() {
    document.addEventListener("visibilitychange", () => {
      const isHidden = document.visibilityState === "hidden";
      const blobs = document.querySelectorAll(".wallpaper__blob");
      blobs.forEach((blob) => {
        blob.style.animationPlayState = isHidden ? "paused" : "running";
      });
    });
  }

  bindHaptics() {
    if (!this.config.settings.hapticPulse) return;
    document.addEventListener("pointerdown", (e) => {
      const interactive = e.target.closest("a, button, .tile");
      if (interactive) {
        interactive.style.transform = "scale(0.96)";
      }
    });
    document.addEventListener("pointerup", (e) => {
      const interactive = e.target.closest("a, button, .tile");
      if (interactive) {
        interactive.style.transform = "";
      }
    });
  }

  renderDebugPanel(validation) {
    const testResults = testTilePacker();
    const panel = document.createElement("div");
    panel.className = "debug-panel";
    panel.innerHTML = `
      <h4>Inspector (?debug=1)</h4>
      <div><strong>Status:</strong> ${validation.valid ? "Valid" : "Issues Found"}</div>
      ${validation.issues.length ? `<ul style="color:var(--color-accent);">${validation.issues.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
      <div style="margin-top:6px;"><strong>Tile Packing Test Cases:</strong></div>
      <ul>
        ${testResults.map((t) => `<li>${t.Case}: [${t.Spans}]</li>`).join("")}
      </ul>
      <button style="margin-top:8px;padding:2px 8px;font-size:10px;background:var(--tooltip-bg);color:var(--text-primary);border:1px solid var(--tooltip-border);border-radius:4px;cursor:pointer;" onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(panel);
  }
}

// Bootstrap
window.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
