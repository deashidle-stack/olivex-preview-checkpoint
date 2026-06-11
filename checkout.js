/* ==========================================================================
   OliveX — kasse (forhåndsvisning)
   Tre steg: levering → betaling (Vipps/kort) → bekreftelse.
   Frontend-flyt etter Shopify-mønster; ingen betaling gjennomføres i preview.
   ========================================================================== */
(() => {
  "use strict";

  const overlay = document.querySelector("[data-checkout]");
  if (!overlay) return;

  const panel = overlay.querySelector(".checkout-panel");
  const progress = overlay.querySelectorAll("[data-checkout-progress] li");
  const steps = overlay.querySelectorAll("[data-checkout-step]");
  const summaryItems = overlay.querySelector("[data-checkout-items]");
  const summaryTotal = overlay.querySelector("[data-checkout-total]");
  const summaryShipping = overlay.querySelector("[data-checkout-shipping]");
  const orderNumberNode = overlay.querySelector("[data-checkout-ordernumber]");
  const emailNode = overlay.querySelector("[data-checkout-email]");
  const liveRegion = document.querySelector("[data-live-region]");
  const hasGsap = typeof window.gsap !== "undefined";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let previousFocus = null;
  let currentStep = 1;

  const setLive = (message) => {
    if (liveRegion) liveRegion.textContent = message;
  };

  /* ---------------- Summary ---------------- */
  const syncSummary = () => {
    const items = document.querySelectorAll("[data-cart-items] .cart-item");
    if (!items.length) {
      summaryItems.innerHTML = `
        <div class="checkout-summary-item is-empty">
          <div><strong>Kurven er tom</strong><span>Legg til 500 ml-flasken før du går til kassen.</span></div>
        </div>`;
      return false;
    }
    summaryItems.innerHTML = [...items]
      .map((item) => {
        const name = item.querySelector("strong")?.textContent || "";
        const spec = item.querySelector("div > span")?.textContent || "";
        const plan = item.querySelector(".cart-plan")?.textContent || "";
        const qty = item.querySelector(".quantity-control span")?.textContent || "1";
        return `
          <div class="checkout-summary-item">
            <div>
              <strong>${name}</strong>
              <span>${spec}</span>
              <span class="cart-plan">${plan}</span>
            </div>
            <strong class="checkout-qty">×${qty}</strong>
          </div>`;
      })
      .join("");
    const cartTotal = document.querySelector("[data-cart-total]");
    if (summaryTotal && cartTotal) summaryTotal.textContent = cartTotal.textContent;
    return true;
  };

  /* ---------------- Steps ---------------- */
  const showStep = (step) => {
    currentStep = step;
    steps.forEach((node) => {
      const active = Number(node.dataset.checkoutStep) === step;
      node.classList.toggle("is-active", active);
      if (active && hasGsap && !reduceMotion) {
        gsap.fromTo(node, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", clearProps: "all" });
      }
    });
    progress.forEach((node, index) => {
      node.classList.toggle("is-active", index + 1 === step);
      node.classList.toggle("is-done", index + 1 < step);
    });
    panel.scrollTop = 0;
  };

  /* ---------------- Open / close ---------------- */
  const openCheckout = (method) => {
    syncSummary();
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    overlay.inert = false;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("checkout-open");
    selectPayMethod(method || "vipps");
    showStep(1);
    requestAnimationFrame(() => panel.focus());
    setLive("Kassen er åpnet.");
  };

  const closeCheckout = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    overlay.inert = true;
    document.body.classList.remove("checkout-open");
    if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
  };

  /* ---------------- Payment method ---------------- */
  const selectPayMethod = (method) => {
    overlay.querySelectorAll("[data-pay-option]").forEach((button) => {
      const selected = button.dataset.payOption === method;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", selected ? "true" : "false");
    });
    overlay.querySelectorAll("[data-pay-panel]").forEach((panelNode) => {
      panelNode.hidden = panelNode.dataset.payPanel !== method;
    });
  };

  /* ---------------- Input formatting ---------------- */
  const cardInput = overlay.querySelector("#co-card");
  const expInput = overlay.querySelector("#co-exp");
  const cvcInput = overlay.querySelector("#co-cvc");

  cardInput?.addEventListener("input", () => {
    const digits = cardInput.value.replace(/\D/g, "").slice(0, 16);
    cardInput.value = digits.replace(/(.{4})/g, "$1 ").trim();
  });

  expInput?.addEventListener("input", () => {
    let digits = expInput.value.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) digits = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    expInput.value = digits;
  });

  cvcInput?.addEventListener("input", () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, "").slice(0, 4);
  });

  /* ---------------- Validation ---------------- */
  const stepOneForm = overlay.querySelector('[data-checkout-step="1"]');
  const stepTwoForm = overlay.querySelector('[data-checkout-step="2"]');
  const errorOne = overlay.querySelector("[data-checkout-error-1]");
  const errorTwo = overlay.querySelector("[data-checkout-error-2]");

  stepOneForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = [...stepOneForm.querySelectorAll("input")].every((field) => field.checkValidity());
    if (!valid) {
      if (errorOne) errorOne.hidden = false;
      return;
    }
    if (errorOne) errorOne.hidden = true;
    showStep(2);
    setLive("Levering bekreftet. Velg betalingsmåte.");
  });

  stepOneForm?.addEventListener("input", () => {
    if (errorOne) errorOne.hidden = true;
  });

  const completeOrder = () => {
    const orderNumber = `OLX-${String(Math.floor(10000 + Math.random() * 90000))}`;
    if (orderNumberNode) orderNumberNode.textContent = orderNumber;
    const email = overlay.querySelector("#co-email")?.value?.trim();
    if (emailNode && email) emailNode.textContent = email;
    showStep(3);
    setLive(`Bestilling registrert med ordrenummer ${orderNumber}.`);
  };

  stepTwoForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const method = overlay.querySelector("[data-pay-option].is-selected")?.dataset.payOption || "vipps";
    if (method === "card") {
      const cardOk = (cardInput?.value.replace(/\D/g, "").length || 0) >= 12;
      const expOk = /^\d{2}\/\d{2}$/.test(expInput?.value || "");
      const cvcOk = /^\d{3,4}$/.test(cvcInput?.value || "");
      if (!cardOk || !expOk || !cvcOk) {
        if (errorTwo) errorTwo.hidden = false;
        return;
      }
    }
    if (errorTwo) errorTwo.hidden = true;
    const submitButton = event.submitter || stepTwoForm.querySelector("[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = "Behandler …";
    }
    window.setTimeout(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || submitButton.textContent;
      }
      completeOrder();
    }, 900);
  });

  stepTwoForm?.addEventListener("input", () => {
    if (errorTwo) errorTwo.hidden = true;
  });

  /* ---------------- Delegated clicks ---------------- */
  document.addEventListener("click", (event) => {
    // Cart drawer payment buttons open the checkout
    const cartPayButton = event.target.closest(".payment-options .payment-button");
    if (cartPayButton) {
      openCheckout(cartPayButton.classList.contains("vipps") ? "vipps" : "card");
      return;
    }

    if (event.target.closest("[data-checkout-close]")) closeCheckout();
    if (event.target.closest("[data-checkout-back]")) showStep(1);
    if (event.target.closest("[data-checkout-finish]")) {
      closeCheckout();
      document.querySelector("[data-close-cart]")?.click();
    }

    const shipOption = event.target.closest("[data-ship-option]");
    if (shipOption) {
      overlay.querySelectorAll("[data-ship-option]").forEach((button) => {
        const selected = button === shipOption;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-checked", selected ? "true" : "false");
      });
      if (summaryShipping) {
        summaryShipping.textContent =
          shipOption.dataset.shipOption === "home" ? "Posten/Bring · Hjemlevering" : "Posten/Bring · Hentested";
      }
    }

    const payOption = event.target.closest("[data-pay-option]");
    if (payOption) selectPayMethod(payOption.dataset.payOption);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closeCheckout();
  });
})();
