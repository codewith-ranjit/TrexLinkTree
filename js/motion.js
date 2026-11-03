/**
 * ============================================================================
 * MOTION SYSTEM & SPRING ODE ENGINE (motion.js)
 * ============================================================================
 * Second-order damped harmonic oscillator solved analytically per rAF frame.
 * Zero external libraries. 60fps on mobile. Full prefers-reduced-motion support.
 * ============================================================================
 */

export const MotionSystem = {
  prefersReduced: false,
  activeSprings: new Map(), // Element/Key -> cancel function

  init() {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.prefersReduced = mq.matches;
    mq.addEventListener("change", (e) => {
      this.prefersReduced = e.matches;
    });
  },

  /**
   * Analytical Second-Order Spring Solver
   * Solves: m * x'' + d * x' + k * (x - to) = 0
   */
  spring({
    key = null,
    from = 0,
    to = 1,
    velocity = 0,
    stiffness = 420,
    damping = 34,
    mass = 1,
    precision = 0.001,
    onUpdate,
    onComplete,
  }) {
    if (key && this.activeSprings.has(key)) {
      this.activeSprings.get(key)(); // Cancel in-flight spring
      this.activeSprings.delete(key);
    }

    if (this.prefersReduced) {
      if (onUpdate) onUpdate(to);
      if (onComplete) onComplete();
      return () => {};
    }

    let current = from;
    let v = velocity;
    let lastTime = performance.now();
    let isCancelled = false;

    const cancel = () => {
      isCancelled = true;
    };

    if (key) {
      this.activeSprings.set(key, cancel);
    }

    const step = (now) => {
      if (isCancelled) return;

      const dt = Math.min((now - lastTime) / 1000, 0.032); // Clamp frame delta to 32ms
      lastTime = now;

      // Spring physics calculation
      const displacement = current - to;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * v;
      const acceleration = (springForce + dampingForce) / mass;

      v += acceleration * dt;
      current += v * dt;

      if (onUpdate) {
        onUpdate(current, v);
      }

      // Settle check
      if (Math.abs(current - to) < precision && Math.abs(v) < precision * 5) {
        if (onUpdate) onUpdate(to, 0);
        if (key) this.activeSprings.delete(key);
        if (onComplete) onComplete();
        return;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    return cancel;
  },

  // ── Entrance Choreography Ladder ──────────────────────────────────────────
  playEntranceLadder({ cardEl, avatarEl, nameEl, taglineEl, tileEls, ctaEl, dockEl, onComplete }) {
    if (this.prefersReduced) {
      // Instant reveal for reduced-motion users
      if (cardEl) {
        cardEl.style.opacity = "1";
        cardEl.style.transform = "none";
        cardEl.style.filter = "none";
      }
      if (onComplete) onComplete();
      return;
    }

    // 1. Initial State: card hidden & slightly lowered
    if (cardEl) {
      cardEl.style.opacity = "0";
      cardEl.style.transform = "translateY(26px) scale(0.965)";
      cardEl.style.filter = "blur(10px)";
      cardEl.style.willChange = "transform, opacity, filter";
    }

    // 2. Card Spring Entrance (at 120ms)
    setTimeout(() => {
      if (!cardEl) return;
      this.spring({
        key: "card-entrance",
        from: 0,
        to: 1,
        stiffness: 210,
        damping: 26,
        mass: 1,
        onUpdate: (val) => {
          const y = (1 - val) * 26;
          const s = 0.965 + val * (1 - 0.965);
          const b = Math.max(0, (1 - val) * 10);
          cardEl.style.opacity = `${Math.min(1, val * 1.6)}`;
          cardEl.style.transform = `translateY(${y.toFixed(2)}px) scale(${s.toFixed(4)})`;
          cardEl.style.filter = b > 0.1 ? `blur(${b.toFixed(1)}px)` : "none";
        },
        onComplete: () => {
          cardEl.style.willChange = "auto";
        },
      });
    }, 120);

    // 3. Avatar Bloom (at 340ms)
    setTimeout(() => {
      if (!avatarEl) return;
      avatarEl.style.willChange = "transform";
      this.spring({
        key: "avatar-entrance",
        from: 0.82,
        to: 1.0,
        stiffness: 240,
        damping: 24,
        onUpdate: (val) => {
          avatarEl.style.transform = `scale(${val.toFixed(4)})`;
        },
        onComplete: () => {
          avatarEl.style.willChange = "auto";
        },
      });
    }, 340);

    // 4. Name Mask Reveal (at 400ms)
    setTimeout(() => {
      if (!nameEl) return;
      this.spring({
        key: "name-entrance",
        from: 14,
        to: 0,
        stiffness: 300,
        damping: 28,
        onUpdate: (val) => {
          const progress = 1 - (val / 14);
          nameEl.style.opacity = `${Math.min(1, progress * 1.5)}`;
          nameEl.style.transform = `translateY(${val.toFixed(2)}px)`;
        },
      });
    }, 400);

    // 5. Tagline Reveal (at 470ms)
    setTimeout(() => {
      if (!taglineEl) return;
      this.spring({
        key: "tagline-entrance",
        from: 8,
        to: 0,
        stiffness: 280,
        damping: 28,
        onUpdate: (val) => {
          const progress = 1 - (val / 8);
          const blurVal = Math.max(0, val * 0.75);
          taglineEl.style.opacity = `${progress.toFixed(2)}`;
          taglineEl.style.transform = `translateY(${val.toFixed(2)}px)`;
          taglineEl.style.filter = blurVal > 0.2 ? `blur(${blurVal.toFixed(1)}px)` : "none";
        },
      });
    }, 470);

    // 6. Staggered Tiles (at 560ms, 55ms interval)
    const baseTime = 560;
    if (tileEls && tileEls.length > 0) {
      tileEls.forEach((tile, idx) => {
        tile.style.opacity = "0";
        tile.style.transform = "translateY(18px) scale(0.92)";
        tile.style.filter = "blur(8px)";
        tile.style.willChange = "transform, opacity, filter";

        setTimeout(() => {
          this.spring({
            key: `tile-entrance-${idx}`,
            from: 0,
            to: 1,
            stiffness: 340,
            damping: 28,
            onUpdate: (val) => {
              const y = (1 - val) * 18;
              const s = 0.92 + val * (1 - 0.92);
              const b = Math.max(0, (1 - val) * 8);
              tile.style.opacity = `${Math.min(1, val * 1.8)}`;
              tile.style.transform = `translateY(${y.toFixed(2)}px) scale(${s.toFixed(4)})`;
              tile.style.filter = b > 0.2 ? `blur(${b.toFixed(1)}px)` : "none";
            },
            onComplete: () => {
              tile.style.willChange = "auto";
            },
          });
        }, baseTime + idx * 55);
      });
    }

    // 7. Contact CTA Settle Pulse
    const ctaTime = baseTime + (tileEls ? tileEls.length * 55 : 0) + 90;
    setTimeout(() => {
      if (!ctaEl) return;
      ctaEl.style.opacity = "0";
      ctaEl.style.transform = "translateY(12px) scale(1.05)";
      ctaEl.style.willChange = "transform, opacity";

      this.spring({
        key: "cta-entrance",
        from: 0,
        to: 1,
        stiffness: 380,
        damping: 30,
        onUpdate: (val) => {
          const y = (1 - val) * 12;
          const s = 1.05 - val * (1.05 - 1.0);
          ctaEl.style.opacity = `${Math.min(1, val * 2)}`;
          ctaEl.style.transform = `translateY(${y.toFixed(2)}px) scale(${s.toFixed(4)})`;
        },
        onComplete: () => {
          ctaEl.style.willChange = "auto";
        },
      });
    }, ctaTime);

    // 8. Dock Switcher Reveal (at 1000ms)
    if (dockEl) {
      setTimeout(() => {
        dockEl.style.opacity = "0";
        dockEl.style.transform = "translateY(10px)";
        this.spring({
          key: "dock-entrance",
          from: 0,
          to: 1,
          stiffness: 300,
          damping: 28,
          onUpdate: (val) => {
            dockEl.style.opacity = `${val.toFixed(2)}`;
            dockEl.style.transform = `translateY(${((1 - val) * 10).toFixed(2)}px)`;
          },
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      }, 1000);
    } else {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, ctaTime + 150);
    }
  },

  // ── 3D Card Tilt & Specular Light Physics ──────────────────────────────────
  bindPointerPhysics({ cardEl, wallpaperEl, tileEls, settings }) {
    if (this.prefersReduced || !settings.tilt) return () => {};

    // Only enable on pointer-fine (desktop mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return () => {};

    let currentTiltX = 0;
    let currentTiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let isTracking = false;

    const onPointerMove = (e) => {
      if (!cardEl) return;
      const rect = cardEl.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Card tilt physics (max ±5 degrees)
      const mouseX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const mouseY = (e.clientY - cardCenterY) / (window.innerHeight / 2);
      targetTiltY = Math.max(-5, Math.min(5, mouseX * 5));
      targetTiltX = Math.max(-5, Math.min(5, -mouseY * 5));

      // Specular highlight CSS variables inside the card
      const specularX = ((e.clientX - rect.left) / rect.width) * 100;
      const specularY = ((e.clientY - rect.top) / rect.height) * 100;
      cardEl.style.setProperty("--mx", `${specularX.toFixed(1)}%`);
      cardEl.style.setProperty("--my", `${specularY.toFixed(1)}%`);

      // Parallax blobs shift
      if (wallpaperEl && settings.parallax) {
        const px = -targetTiltY * 1.6;
        const py = targetTiltX * 1.6;
        wallpaperEl.style.setProperty("--parallax-x", `${px.toFixed(2)}px`);
        wallpaperEl.style.setProperty("--parallax-y", `${py.toFixed(2)}px`);
      }

      // Magnetic tiles pull (within 90px of center)
      if (tileEls && window.innerWidth >= 1024) {
        tileEls.forEach((tile) => {
          const tRect = tile.getBoundingClientRect();
          const tCenterX = tRect.left + tRect.width / 2;
          const tCenterY = tRect.top + tRect.height / 2;
          const dist = Math.hypot(e.clientX - tCenterX, e.clientY - tCenterY);

          if (dist < 90) {
            const pull = (1 - dist / 90) * 4;
            const angle = Math.atan2(e.clientY - tCenterY, e.clientX - tCenterX);
            const dx = Math.cos(angle) * pull;
            const dy = Math.sin(angle) * pull;
            tile.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
          } else if (tile.style.transform && tile.style.transform.startsWith("translate(")) {
            tile.style.transform = "none";
          }
        });
      }

      if (!isTracking) {
        isTracking = true;
        updateTilt();
      }
    };

    const updateTilt = () => {
      if (!isTracking) return;
      // Spring smoothing toward target
      currentTiltX += (targetTiltX - currentTiltX) * 0.12;
      currentTiltY += (targetTiltY - currentTiltY) * 0.12;

      cardEl.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

      if (Math.abs(targetTiltX - currentTiltX) > 0.01 || Math.abs(targetTiltY - currentTiltY) > 0.01) {
        requestAnimationFrame(updateTilt);
      } else {
        isTracking = false;
      }
    };

    const onPointerLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
      this.spring({
        key: "card-tilt-reset",
        from: currentTiltX,
        to: 0,
        stiffness: 160,
        damping: 22,
        onUpdate: (vx) => {
          currentTiltX = vx;
          currentTiltY += (0 - currentTiltY) * 0.15;
          cardEl.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
        },
        onComplete: () => {
          cardEl.style.transform = "none";
        },
      });

      if (wallpaperEl) {
        wallpaperEl.style.setProperty("--parallax-x", "0px");
        wallpaperEl.style.setProperty("--parallax-y", "0px");
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  },

  // ── Member Crossfade Choreography ─────────────────────────────────────────
  transitionMemberSwitch({ cardEl, wallpaperEl, accentColor, onSwapContent, onDone }) {
    if (this.prefersReduced) {
      if (onSwapContent) onSwapContent();
      if (onDone) onDone();
      return;
    }

    // Step 1: Outgoing collapse (180ms ease-in)
    this.spring({
      key: "switch-collapse",
      from: 1,
      to: 0,
      stiffness: 380,
      damping: 32,
      onUpdate: (val) => {
        const s = 0.97 + val * (1 - 0.97);
        const y = (1 - val) * -8;
        const b = (1 - val) * 6;
        cardEl.style.opacity = `${val.toFixed(2)}`;
        cardEl.style.transform = `translateY(${y.toFixed(2)}px) scale(${s.toFixed(4)})`;
        cardEl.style.filter = b > 0.2 ? `blur(${b.toFixed(1)}px)` : "none";
      },
      onComplete: () => {
        // Step 2: Swap Content in DOM while collapsed
        if (onSwapContent) onSwapContent();

        // Step 3: Shift wallpaper hue-rotate subtly
        if (wallpaperEl && accentColor) {
          wallpaperEl.style.setProperty("--active-member-accent", accentColor);
        }

        // Step 4: Replay ladder
        const avatarEl = cardEl.querySelector("#avatarContainer");
        const nameEl = cardEl.querySelector("#memberName");
        const taglineEl = cardEl.querySelector("#memberTagline");
        const tileEls = Array.from(cardEl.querySelectorAll(".tile"));
        const ctaEl = cardEl.querySelector(".cta-wrap");

        this.playEntranceLadder({
          cardEl,
          avatarEl,
          nameEl,
          taglineEl,
          tileEls,
          ctaEl,
          dockEl: null,
          onComplete: () => {
            if (onDone) onDone();
          },
        });
      },
    });
  },
};
