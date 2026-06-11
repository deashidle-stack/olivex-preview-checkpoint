/* ==========================================================================
   OliveX — Om oss
   Three.js gullstøv-partikler i hero + GSAP horisontalt galleri.
   Degraderer trygt: uten WebGL/GSAP vises statisk side med vertikalt galleri.
   ========================================================================== */
(() => {
  "use strict";

  const hasGsap = typeof window.gsap !== "undefined";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = window.matchMedia("(min-width: 901px)").matches;

  /* ---------------- Three.js gold-dust hero ---------------- */
  const canvas = document.querySelector("[data-about-canvas]");
  if (canvas && !reduceMotion && window.WebGLRenderingContext) {
    import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js")
      .then((THREE) => {
        const hero = canvas.closest(".about-hero");
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 60);
        camera.position.z = 14;

        const count = isDesktop ? 650 : 260;
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);
        for (let i = 0; i < count; i += 1) {
          positions[i * 3] = (Math.random() - 0.5) * 34;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
          speeds[i] = 0.12 + Math.random() * 0.5;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const texture = new THREE.CanvasTexture(
          (() => {
            const c = document.createElement("canvas");
            c.width = 64;
            c.height = 64;
            const ctx = c.getContext("2d");
            const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            g.addColorStop(0, "rgba(227, 194, 133, 1)");
            g.addColorStop(0.4, "rgba(201, 164, 92, 0.55)");
            g.addColorStop(1, "rgba(201, 164, 92, 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, 64, 64);
            return c;
          })(),
        );

        const material = new THREE.PointsMaterial({
          size: 0.34,
          map: texture,
          transparent: true,
          opacity: 0.75,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let mouseX = 0;
        let mouseY = 0;
        if (isDesktop) {
          window.addEventListener(
            "mousemove",
            (event) => {
              mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
              mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
            },
            { passive: true },
          );
        }

        const resize = () => {
          const width = hero.clientWidth;
          const height = hero.clientHeight;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        let visible = true;
        let pageVisible = !document.hidden;
        new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        }).observe(hero);
        document.addEventListener("visibilitychange", () => {
          pageVisible = !document.hidden;
        });

        const clock = new THREE.Clock();
        const tick = () => {
          requestAnimationFrame(tick);
          if (!visible || !pageVisible) return;
          const elapsed = clock.getElapsedTime();
          const positionAttr = geometry.attributes.position;
          for (let i = 0; i < count; i += 1) {
            let y = positionAttr.getY(i) + speeds[i] * 0.008;
            if (y > 10) y = -10;
            positionAttr.setY(i, y);
          }
          positionAttr.needsUpdate = true;
          points.rotation.y = elapsed * 0.02 + mouseX * 0.08;
          points.rotation.x = mouseY * 0.05;
          renderer.render(scene, camera);
        };
        tick();
      })
      .catch(() => {
        /* uten WebGL/CDN vises den statiske gradienten i CSS */
      });
  }

  /* ---------------- GSAP scenes ---------------- */
  if (!hasGsap || reduceMotion) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero intro
  document.fonts.ready.then(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".about-title-line", { y: 80, autoAlpha: 0, duration: 1.2, stagger: 0.16 }, 0.1)
      .from(".about-hero .eyebrow", { autoAlpha: 0, x: -18, duration: 0.8 }, 0.4)
      .from(".about-lede", { autoAlpha: 0, y: 22, duration: 0.9 }, 0.7)
      .from(".about-hero .hero-scroll-cue", { autoAlpha: 0, duration: 0.8 }, 1.2);
  });

  // Quote + values reveals
  gsap.from(".about-quote", {
    autoAlpha: 0,
    y: 40,
    duration: 1.1,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: { trigger: ".about-statement", start: "top 80%", once: true },
  });
  gsap.from(".about-values-grid article", {
    autoAlpha: 0,
    y: 36,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: { trigger: ".about-values-grid", start: "top 85%", once: true },
  });
  gsap.from(".about-cta > *", {
    autoAlpha: 0,
    y: 30,
    duration: 0.9,
    stagger: 0.1,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: { trigger: ".about-cta", start: "top 85%", once: true },
  });

  // Horizontal gallery — pinned scrub on desktop, native swipe on mobile
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px)", () => {
    const track = document.querySelector("[data-about-track]");
    const gallery = document.querySelector(".about-gallery");
    if (!track || !gallery) return;
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: gallery,
        start: "top top",
        end: () => `+=${distance()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    const panels = track.querySelectorAll(".about-panel img");
    panels.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".about-panel"),
            containerAnimation: tween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        },
      );
    });
  });
})();
