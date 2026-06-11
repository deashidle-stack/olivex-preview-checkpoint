/* ==========================================================================
   OliveX — Midnight Grove choreography
   GSAP-driven. Degrades safely: without GSAP (or with reduced motion) the
   page renders fully static. Never animates nodes inside the re-rendered
   containers [data-product-grid], [data-cart-items], [data-assistant-answer].
   ========================================================================== */
(() => {
  "use strict";

  const hasGsap = typeof window.gsap !== "undefined";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isHome = Boolean(document.querySelector(".hero"));

  // Choreography pages always start at the top on reload. Without this the
  // browser restores mid-page scroll, silently consumes every once-trigger
  // above the fold, and the sections you scroll back to never animate.
  if ((isHome || document.querySelector(".about-hero")) && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
    if (location.hash.length < 2) window.scrollTo(0, 0);
  }

  /* ------------------------------------------------------------------------
     Vanilla layer — works without GSAP
     ------------------------------------------------------------------------ */

  // Mobile menu
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (menuToggle && mobileMenu) {
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Åpne meny");
    };
    menuToggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("menu-open");
      document.body.classList.toggle("menu-open", open);
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Header hide-on-scroll (down = hide, up = show)
  const header = document.querySelector(".site-header");
  if (header) {
    let lastY = window.scrollY;
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const goingDown = y > lastY + 4;
          const goingUp = y < lastY - 4;
          if (goingDown && y > 600 && !document.body.classList.contains("menu-open")) {
            header.classList.add("is-hidden");
          } else if (goingUp || y <= 600) {
            header.classList.remove("is-hidden");
          }
          lastY = y;
          ticking = false;
        });
      },
      { passive: true },
    );
  }

  // Contact form — frontend confirmation (submission wiring happens in Shopify)
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const confirmNote = contactForm.querySelector("[data-contact-confirm]");
    const errorNote = contactForm.querySelector("[data-contact-error]");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const valid = [...contactForm.querySelectorAll("input, textarea")].every((field) => field.checkValidity());
      if (!valid) {
        if (errorNote) errorNote.hidden = false;
        if (confirmNote) confirmNote.hidden = true;
        return;
      }
      if (errorNote) errorNote.hidden = true;
      if (confirmNote) confirmNote.hidden = false;
      contactForm.reset();
      const liveRegion = document.querySelector("[data-live-region]");
      if (liveRegion) liveRegion.textContent = "Takk for meldingen. Vi svarer deg på e-post så raskt vi kan.";
    });
    contactForm.addEventListener("input", () => {
      if (errorNote) errorNote.hidden = true;
    });
  }

  // References — ghost numeral follows hovered row
  const referenceGhost = document.querySelector("[data-reference-ghost]");
  if (referenceGhost) {
    document.querySelectorAll(".reference-list article").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const index = row.querySelector("span");
        if (index) referenceGhost.textContent = index.textContent;
      });
    });
  }

  // PDP gallery — thumb swap with crossfade
  const galleryMain = document.querySelector("[data-gallery-main]");
  if (galleryMain) {
    const mainImg = galleryMain.querySelector("img");
    const thumbs = [...document.querySelectorAll("[data-gallery-src]")];
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.dataset.gallerySrc;
        if (!src || mainImg.getAttribute("src") === src) return;
        thumbs.forEach((other) => other.setAttribute("aria-selected", other === thumb ? "true" : "false"));
        const apply = () => {
          galleryMain.classList.toggle("is-cutout", thumb.dataset.galleryFit === "contain");
          mainImg.setAttribute("src", src);
        };
        const preload = new Image();
        preload.src = src;
        const swap = () => {
          if (hasGsap && !reduceMotion) {
            gsap
              .timeline()
              .to(mainImg, { autoAlpha: 0, scale: 0.985, duration: 0.22, ease: "power2.in" })
              .add(apply)
              .fromTo(
                mainImg,
                { autoAlpha: 0, scale: 1.035 },
                { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power3.out" },
              );
          } else {
            apply();
          }
        };
        if (preload.complete) swap();
        else preload.onload = swap;
      });
    });

    // Cursor-following zoom origin (hover-capable devices only)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      galleryMain.addEventListener("mousemove", (event) => {
        const rect = galleryMain.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
      });
      galleryMain.addEventListener("mouseleave", () => {
        mainImg.style.transformOrigin = "center";
      });
    }
  }

  // PDP — mobile sticky purchase bar appears once the buybox CTA scrolls away
  const stickyBar = document.querySelector("[data-sticky-purchase]");
  const buyboxButton = document.querySelector(".pdp-buybox .add-button");
  if (stickyBar && buyboxButton) {
    let stickyTick = false;
    const syncStickyVisibility = () => {
      stickyBar.classList.toggle("is-visible", buyboxButton.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener(
      "scroll",
      () => {
        if (stickyTick) return;
        stickyTick = true;
        requestAnimationFrame(() => {
          syncStickyVisibility();
          stickyTick = false;
        });
      },
      { passive: true },
    );
    syncStickyVisibility();
  }

  /* ------------------------------------------------------------------------
     GSAP layer
     ------------------------------------------------------------------------ */
  if (!hasGsap || reduceMotion) return;

  gsap.registerPlugin(ScrollTrigger);
  if (window.ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
  if (window.SplitText) gsap.registerPlugin(SplitText);

  document.documentElement.classList.add("js-anim");
  ScrollTrigger.config({ ignoreMobileResize: true });

  const FORBIDDEN = "[data-product-grid], [data-cart-items], [data-assistant-answer]";
  const outsideForbidden = (el) => !el.closest(FORBIDDEN);

  // Cart count bump — observes text mutations from app.js renders
  const cartCount = document.querySelector("[data-cart-count]");
  if (cartCount) {
    let lastValue = cartCount.textContent;
    new MutationObserver(() => {
      if (cartCount.textContent === lastValue) return;
      lastValue = cartCount.textContent;
      gsap.fromTo(cartCount, { scale: 1.45 }, { scale: 1, duration: 0.55, ease: "back.out(3)" });
    }).observe(cartCount, { childList: true, characterData: true, subtree: true });
  }

  // Smooth expand/collapse for the oleocanthal dossier accordions.
  // Marks the panel so app.js leaves the exclusivity logic to us.
  document.querySelectorAll(".oleo-left-panel").forEach((panel) => {
    panel.setAttribute("data-accordion-animated", "");
    const items = [...panel.querySelectorAll("details[data-accordion-group]")];

    const openItem = (details) => {
      details.open = true;
      const content = details.querySelector("summary + *");
      if (!content) return;
      details._animating = true;
      gsap.fromTo(
        content,
        { height: 0, autoAlpha: 0, overflow: "hidden" },
        {
          height: "auto",
          autoAlpha: 1,
          duration: 0.55,
          ease: "power3.out",
          clearProps: "height,overflow,opacity,visibility",
          onComplete: () => {
            details._animating = false;
          },
        },
      );
    };

    const closeItem = (details) => {
      const content = details.querySelector("summary + *");
      if (!content) {
        details.open = false;
        return;
      }
      details._animating = true;
      gsap.fromTo(
        content,
        { height: content.offsetHeight, overflow: "hidden" },
        {
          height: 0,
          autoAlpha: 0,
          duration: 0.4,
          ease: "power3.inOut",
          onComplete: () => {
            details.open = false;
            gsap.set(content, { clearProps: "all" });
            details._animating = false;
          },
        },
      );
    };

    items.forEach((details) => {
      const summary = details.querySelector("summary");
      if (!summary) return;
      summary.addEventListener("click", (event) => {
        event.preventDefault();
        if (items.some((item) => item._animating)) return;
        if (details.open) {
          closeItem(details);
        } else {
          items.forEach((other) => {
            if (other !== details && other.open) closeItem(other);
          });
          openItem(details);
        }
      });
    });
  });

  // Counters
  const runCounters = () => {
    document.querySelectorAll("[data-count-to]").forEach((el) => {
      if (!outsideForbidden(el)) return;
      const target = parseFloat(el.dataset.countTo);
      if (!Number.isFinite(target)) return;
      const proxy = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 94%",
        once: true,
        onEnter: () =>
          gsap.to(proxy, {
            v: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = String(Math.round(proxy.v));
            },
          }),
      });
    });
  };

  // Generic rise-in reveal
  const reveal = (target, vars = {}) => {
    gsap.utils.toArray(target).forEach((el) => {
      if (!outsideForbidden(el)) return;
      gsap.from(el, {
        y: vars.y ?? 34,
        x: vars.x ?? 0,
        autoAlpha: 0,
        duration: vars.duration ?? 1.05,
        ease: vars.ease || "power3.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: vars.trigger || el,
          start: vars.start || "top 88%",
          once: true,
        },
      });
    });
  };

  // Staggered group reveal (single trigger on the container)
  const revealGroup = (container, children, vars = {}) => {
    document.querySelectorAll(container).forEach((parent) => {
      const items = parent.querySelectorAll(children);
      if (!items.length) return;
      gsap.from(items, {
        y: vars.y ?? 30,
        autoAlpha: 0,
        scale: vars.scale ?? 1,
        duration: vars.duration ?? 0.9,
        ease: vars.ease || "power3.out",
        stagger: vars.stagger ?? 0.09,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: parent,
          start: vars.start || "top 85%",
          once: true,
        },
      });
    });
  };

  // Class toggle for CSS-driven spines/progress bars
  const inviewClass = (selector, start = "top 78%") => {
    document.querySelectorAll(selector).forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => el.classList.add("is-inview"),
      });
    });
  };

  // Molecule stroke-draw
  const drawMolecules = () => {
    document.querySelectorAll(".molecule-figure").forEach((figure) => {
      const bonds = figure.querySelectorAll(".molecule-bonds path");
      const wedges = figure.querySelectorAll(".molecule-wedge");
      const labels = figure.querySelectorAll(".molecule-labels text");
      if (!bonds.length) return;
      bonds.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
      });
      if (wedges.length) gsap.set(wedges, { autoAlpha: 0 });
      if (labels.length) gsap.set(labels, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: figure,
        start: "top 82%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(bonds, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut", stagger: 0.05 });
          if (wedges.length) tl.to(wedges, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, "-=0.5");
          if (labels.length) tl.to(labels, { autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.3");
        },
      });
    });
  };

  // Magnetic pull for the video play disc
  const magnetize = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const hit = document.querySelector(".producer-video-hit");
    const disc = document.querySelector(".play-disc");
    if (!hit || !disc) return;
    const xTo = gsap.quickTo(disc, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(disc, "y", { duration: 0.45, ease: "power3.out" });
    hit.addEventListener("mousemove", (event) => {
      const rect = hit.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      xTo(relX * 70);
      yTo(relY * 50);
    });
    hit.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  };

  /* ---------------- Hero intro (homepage) ---------------- */
  const heroIntro = () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const media = hero.querySelector(".hero-media img");
    const eyebrow = hero.querySelector(".hero-copy .eyebrow");
    const lede = hero.querySelector(".hero-lede");
    const actions = hero.querySelectorAll(".hero-actions > *");
    const ritual = hero.querySelector(".hero-ritual");
    const cue = hero.querySelector(".hero-scroll-cue");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    if (media) tl.fromTo(media, { scale: 1.14 }, { scale: 1, duration: 2.6, ease: "power2.out" }, 0);

    // No line masks — Fraunces descenders (g/y/p) must never be clipped
    tl.from(".hero-title-line", { y: 84, autoAlpha: 0, duration: 1.2, stagger: 0.12 }, 0.18);
    const stamp = hero.querySelector(".eyebrow .ritual-stamp");
    if (stamp)
      tl.fromTo(
        stamp,
        { scale: 0, rotation: 18, autoAlpha: 0 },
        { scale: 1, rotation: -8, autoAlpha: 0.92, duration: 0.55, ease: "back.out(2.2)" },
        1.05,
      );

    if (eyebrow) tl.from(eyebrow, { autoAlpha: 0, x: -18, duration: 0.8 }, 0.5);
    if (lede) tl.from(lede, { autoAlpha: 0, y: 22, duration: 0.9 }, 0.72);
    if (actions.length) tl.from(actions, { autoAlpha: 0, y: 22, duration: 0.8, stagger: 0.09 }, 0.84);
    if (ritual)
      tl.fromTo(
        ritual,
        { clipPath: "inset(0 0 100% 0)", autoAlpha: 0 },
        { clipPath: "inset(0% 0 0% 0)", autoAlpha: 1, duration: 1.1, ease: "power3.inOut" },
        0.95,
      );
    if (cue) tl.from(cue, { autoAlpha: 0, duration: 0.8 }, 1.4);
  };

  /* ---------------- Shared scroll scenes ---------------- */
  const buildScenes = (lite) => {
    // Trust strip / signal rail
    revealGroup(".trust-strip", ":scope > div", { stagger: 0.08 });
    revealGroup(".pdp-signal-rail", ":scope > div", { stagger: 0.08 });

    // Product stage
    reveal(".product-photo", { y: 0, x: -28, duration: 1.15 });
    reveal(".product-grid", { y: 36 });

    // Section headings + copy blocks
    reveal(".section-heading");
    reveal(".commerce-intro");
    reveal(".synergy-copy");
    reveal(".oleo-main");
    reveal(".oleo-aside", { y: 40 });
    reveal(".pdp-proof-copy");

    // Oleocanthal
    revealGroup(".oleo-left-panel", ".oleo-info-point", { stagger: 0.1 });
    drawMolecules();

    // Synergy + commerce spines
    revealGroup(".synergy-flow", ":scope > div", { stagger: 0.14, start: "top 80%" });
    inviewClass(".synergy-flow");
    revealGroup(".commerce-steps", "li", { stagger: 0.12, start: "top 80%" });
    inviewClass(".commerce-steps");
    inviewClass(".phone-progress", "top 85%");
    reveal(".checkout-phone", { y: 48 });

    // References
    revealGroup(".reference-list", "article", { stagger: 0.08 });

    // Producer video
    if (!lite) {
      const frame = document.querySelector(".producer-video-frame");
      if (frame) {
        gsap.fromTo(
          frame,
          { clipPath: "inset(7% 5% round 8px)" },
          {
            clipPath: "inset(0% 0% round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: ".producer-section",
              start: "top 85%",
              end: "top 22%",
              scrub: 1,
            },
          },
        );
      }
    }
    reveal(".producer-video-overlay", { y: 40, start: "top 70%", trigger: ".producer-section" });
    magnetize();

    // Assistant + contact
    reveal(".assistant-card", { y: 48 });
    revealGroup(".assistant-prompts", "button", { stagger: 0.05, y: 14, start: "top 92%" });
    reveal(".contact-card", { y: 44 });

    // Footer
    revealGroup(".footer-grid", ":scope > *", { stagger: 0.1, start: "top 92%" });
    reveal(".footer-wordmark img", { y: 36, trigger: ".footer-meta", start: "top 96%" });

    // PDP scenes
    reveal(".size-table-wrap", { y: 40 });
    revealGroup(".pdp-steps", "article", { stagger: 0.1 });
    revealGroup(".faq-list", ".faq-item", { stagger: 0.08 });

    const passportCard = document.querySelector(".quality-passport-card");
    if (passportCard) {
      const stamp = passportCard.querySelector(".passport-card-header strong");
      const rows = passportCard.querySelectorAll(".metric-row");
      gsap.set(passportCard, { transformPerspective: 1100 });
      ScrollTrigger.create({
        trigger: passportCard,
        start: "top 82%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.from(passportCard, { rotationX: 9, y: 46, autoAlpha: 0, duration: 1.1, ease: "power3.out" });
          if (rows.length) tl.from(rows, { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.5 }, "-=0.45");
          if (stamp)
            tl.fromTo(
              stamp,
              { scale: 1.7, rotation: 9, autoAlpha: 0 },
              { scale: 1, rotation: -4, autoAlpha: 1, duration: 0.6, ease: "back.out(2.2)" },
              "-=0.1",
            );
        },
      });
    }

    // PDP hero load-in
    const gallery = document.querySelector(".pdp-gallery");
    const buybox = document.querySelector(".pdp-buybox");
    if (gallery && buybox) {
      gsap.from(gallery, { x: -34, autoAlpha: 0, duration: 1.1, ease: "power3.out", delay: 0.15 });
      gsap.from(buybox, { x: 34, autoAlpha: 0, duration: 1.1, ease: "power3.out", delay: 0.3 });
    }

    runCounters();
  };

  /* ---------------- Contexts ---------------- */
  const mm = gsap.matchMedia();
  let heroPlayed = false;
  let activeSmoother = null;

  // One global anchor handler. Registered once — matchMedia contexts only set
  // activeSmoother, so resizes/fullscreen toggles can never stack handlers.
  document.addEventListener("click", (event) => {
    if (!activeSmoother) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    if (id === "#top") activeSmoother.scrollTo(0, true);
    else activeSmoother.scrollTo(target, true, "top 84px");
    history.replaceState(null, "", id);
  });
  const playHeroOnce = () => {
    if (heroPlayed) return;
    heroPlayed = true;
    // SplitText needs final glyph metrics — wait for the webfonts.
    document.fonts.ready.then(heroIntro);
  };

  mm.add("(min-width: 1061px)", () => {
    // Smooth scroll (homepage only — the PDP keeps native scroll for its sticky buybox)
    let smoother = null;
    if (isHome && window.ScrollSmoother && document.querySelector("#smooth-wrapper")) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.05,
        effects: false,
        normalizeScroll: false,
      });
      smoother.effects(".hero-media", { speed: 0.88 });
      document.documentElement.classList.add("has-smoother");
      activeSmoother = smoother;

      // Deep links: the smoother swallows the native hash jump on load
      if (location.hash.length > 1) {
        const hashTarget = document.querySelector(location.hash);
        if (hashTarget) {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            smoother.scrollTop(Math.max(0, smoother.offset(hashTarget, "top 84px")));
          });
        }
      }

      // Hero copy drifts out as you leave the fold
      gsap.to(".hero-inner", {
        autoAlpha: 0,
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "28% top", end: "62% top", scrub: true },
      });
    }

    playHeroOnce();
    buildScenes(false);

    return () => {
      if (smoother) smoother.kill();
      activeSmoother = null;
      document.documentElement.classList.remove("has-smoother");
    };
  });

  mm.add("(max-width: 1060px)", () => {
    playHeroOnce();
    buildScenes(true);
  });

  // Re-measure once everything (fonts, images) is in — webfonts can land after load
  window.addEventListener("load", () => ScrollTrigger.refresh());
  document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
