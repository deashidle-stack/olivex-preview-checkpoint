const CONSENT_KEY = "olivex-shopify-consent-preview";

function selectedOption(select) {
  return select.options[select.selectedIndex];
}

function syncVariantSelect(select) {
  const option = selectedOption(select);
  const form = select.closest("[data-product-form], [data-sticky-product-form]");
  const hiddenInput = form?.querySelector('input[name="id"][type="hidden"]');
  const shell = form?.closest("[data-product-shell]");
  const price = option?.dataset.price;

  if (hiddenInput) hiddenInput.value = select.value;
  if (!price) return;

  shell?.querySelectorAll("[data-current-price]").forEach((target) => {
    target.textContent = price;
  });

  form?.querySelectorAll("[data-sticky-price]").forEach((target) => {
    target.textContent = price;
  });
}

function readConsent() {
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function applyConsent(consent) {
  const saved = Boolean(consent);
  const banner = document.querySelector("[data-consent-banner]");

  document.documentElement.dataset.analyticsConsent = consent?.analytics ? "granted" : "denied";
  document.documentElement.dataset.marketingConsent = consent?.marketing ? "granted" : "denied";
  document.body.classList.toggle("consent-open", !saved);

  if (banner) banner.hidden = saved;
  document.querySelectorAll("[data-consent-reopen]").forEach((button) => {
    button.hidden = !saved;
  });
}

function writeConsent(consent) {
  const payload = {
    necessary: true,
    analytics: Boolean(consent.analytics),
    marketing: Boolean(consent.marketing),
    savedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  } catch {
    // Storage can be unavailable in strict browser modes; the visible state still updates.
  }

  applyConsent(payload);
}

function syncConsentInputs(consent = {}) {
  document.querySelectorAll("[data-consent-toggle]").forEach((input) => {
    input.checked = Boolean(consent[input.dataset.consentToggle]);
  });
}

function hideConsentPreferences() {
  const preferences = document.querySelector("[data-consent-preferences]");
  const settings = document.querySelector("[data-consent-settings]");
  const save = document.querySelector("[data-consent-save]");

  if (!preferences || !settings || !save) return;
  preferences.hidden = true;
  settings.setAttribute("aria-expanded", "false");
  save.hidden = true;
}

function showConsentBanner(shouldFocus = false) {
  const banner = document.querySelector("[data-consent-banner]");
  if (!banner) return;

  syncConsentInputs(readConsent() || {});
  applyConsent(null);
  if (shouldFocus) document.querySelector("[data-consent-settings]")?.focus();
}

function toggleConsentPreferences() {
  const preferences = document.querySelector("[data-consent-preferences]");
  const settings = document.querySelector("[data-consent-settings]");
  const save = document.querySelector("[data-consent-save]");

  if (!preferences || !settings || !save) return;
  const nextOpen = preferences.hidden;
  preferences.hidden = !nextOpen;
  settings.setAttribute("aria-expanded", nextOpen ? "true" : "false");
  save.hidden = !nextOpen;
}

function saveCustomConsent() {
  const consent = {};
  document.querySelectorAll("[data-consent-toggle]").forEach((input) => {
    consent[input.dataset.consentToggle] = input.checked;
  });
  writeConsent(consent);
  hideConsentPreferences();
}

document.addEventListener("change", (event) => {
  const select = event.target.closest("[data-variant-select]");
  if (select) syncVariantSelect(select);
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-consent-settings]")) {
    toggleConsentPreferences();
  }

  if (event.target.closest("[data-consent-reject]")) {
    writeConsent({ analytics: false, marketing: false });
    hideConsentPreferences();
  }

  if (event.target.closest("[data-consent-accept]")) {
    writeConsent({ analytics: true, marketing: true });
    hideConsentPreferences();
  }

  if (event.target.closest("[data-consent-save]")) {
    saveCustomConsent();
  }

  if (event.target.closest("[data-consent-reopen]")) {
    showConsentBanner(true);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  applyConsent(readConsent());
});
