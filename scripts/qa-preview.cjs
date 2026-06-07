const fs = require("fs");
const path = require("path");
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (error) {
  console.error(
    [
      "Playwright is not installed in this project.",
      "Install it with `npm install -D playwright` or run browser QA through the Codex app runtime.",
      `Original error: ${error.message}`,
    ].join("\n"),
  );
  process.exit(1);
}

const outDir = path.join(__dirname, "..", "qa");
const url = "http://127.0.0.1:4173";
const staleTerms = [
  "Dokumentasjon før påstand",
  "sporbar sammensetning",
  "Norsk tillit",
  "Produktutdanning",
  "Tydelig handel",
  "Mindre støy",
  "Mer premium hierarki",
  "Quality Passport",
  "Produksjonsoppsett",
  "previewpriser",
  "Avventer COA",
  "Fast levering · preview",
  "før produksjonslansering",
  "Shopify kobles",
  "Ryddig checkout",
  "Batchdata tett",
  "Velg ditt daglige rituale",
  "Klar for norsk checkout",
  "Prototype.",
];
const riskyTerms = [
  "hjerteinfarkt",
  "diabetes",
  "Alzheimer",
  "HbA1c",
  "ibuprofen",
  "uten bivirkninger",
  "betennelsesdemp",
  "forebygger",
  "reduserer risiko",
  "senker blodtrykk",
];
const chromeCandidates = [
  process.env.PLAYWRIGHT_CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean);

function getLaunchOptions() {
  const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  return executablePath ? { headless: true, executablePath } : { headless: true };
}

async function run() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch(getLaunchOptions());
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  async function pageCheck(route, label, options = {}) {
    await page.goto(`${url}${route}`, { waitUntil: "networkidle", timeout: 30000 });
    return page.evaluate(
      ({ label, route, staleTerms, riskyTerms, checkStale, checkRisky }) => {
        const text = document.body.innerText;
        return {
          label,
          path: route,
          title: document.title,
          h1: document.querySelector("h1")?.textContent?.trim() || null,
          noindex: document.querySelector('meta[name="robots"]')?.getAttribute("content") || null,
          logo: !!document.querySelector('img[src*="olivex-wordmark-cropped"], img[src*="olivex-wordmark-transparent"]'),
          sourceHero:
            document.querySelector("h1")?.textContent?.trim() ===
            "Mer enn en matolje. Ditt daglige, flytende kosttilskudd.",
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          staleTerms: checkStale ? staleTerms.filter((term) => text.includes(term)) : [],
          riskyTerms: checkRisky ? riskyTerms.filter((term) => text.toLowerCase().includes(term.toLowerCase())) : [],
          links: {
            safeCopy: [...document.querySelectorAll("a")].some((item) => item.textContent.includes("Trygg copy-variant")),
            claimReview: [...document.querySelectorAll("a")].some((item) => item.textContent.includes("Claim review")),
            matrix: [...document.querySelectorAll("a")].some((item) => item.textContent.includes("Produksjonsmatrise")),
          },
        };
      },
      { label, route, staleTerms, riskyTerms, checkStale: !!options.checkStale, checkRisky: !!options.checkRisky },
    );
  }

  const desktop = [];
  desktop.push(await pageCheck("/preview.html", "Preview hub"));
  desktop.push(await pageCheck("/content-source-map.html", "Content source map"));
  desktop.push(await pageCheck("/index.html", "Source-copy storefront", { checkStale: true }));
  await page.screenshot({ path: path.join(outDir, "desktop.png"), fullPage: false });
  desktop.push(await pageCheck("/product-olivex-superolje.html", "Product detail page", { checkStale: true }));
  desktop.push(await pageCheck("/production-safe-copy.html", "Production-safe copy preview", { checkRisky: true }));
  await page.screenshot({ path: path.join(outDir, "production-safe-copy.png"), fullPage: false });
  desktop.push(await pageCheck("/share-preview/", "Share preview hub"));
  desktop.push(await pageCheck("/share-preview/website.html", "Share source-copy storefront", { checkStale: true }));

  await page.goto(`${url}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  const consentInitial = await page.evaluate(() => ({
    bannerVisible: !document.querySelector("[data-consent-banner]")?.hidden,
    analytics: document.documentElement.dataset.analyticsConsent,
    marketing: document.documentElement.dataset.marketingConsent,
    reopenHidden: document.querySelector("[data-consent-reopen]")?.hidden,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));
  await page.locator("[data-consent-settings]").click();
  await page.locator('[data-consent-toggle="analytics"]').check();
  const consentSettings = await page.evaluate(() => ({
    preferencesHidden: document.querySelector("[data-consent-preferences]")?.hidden,
    saveHidden: document.querySelector("[data-consent-save]")?.hidden,
    expanded: document.querySelector("[data-consent-settings]")?.getAttribute("aria-expanded"),
  }));
  await page.locator("[data-consent-save]").click();
  const consentCustom = await page.evaluate(() => ({
    bannerHidden: document.querySelector("[data-consent-banner]")?.hidden,
    analytics: document.documentElement.dataset.analyticsConsent,
    marketing: document.documentElement.dataset.marketingConsent,
    reopenHidden: document.querySelector("[data-consent-reopen]")?.hidden,
  }));
  await page.locator("[data-consent-reopen]").click();
  await page.locator("[data-consent-reject]").click();
  const consentRejected = await page.evaluate(() => ({
    bannerHidden: document.querySelector("[data-consent-banner]")?.hidden,
    analytics: document.documentElement.dataset.analyticsConsent,
    marketing: document.documentElement.dataset.marketingConsent,
    stored: localStorage.getItem("olivex-consent-preview"),
  }));

  await page.goto(`${url}/product-olivex-superolje.html`, { waitUntil: "networkidle", timeout: 30000 });
  const sizeComparison = await page.evaluate(() => ({
    title: document.querySelector("#size-compare-title")?.textContent?.trim(),
    rowCount: document.querySelectorAll(".size-compare-table tbody tr").length,
    text: document.querySelector(".size-compare-section")?.textContent?.replace(/\s+/g, " ").trim(),
    disabledButtons: [...document.querySelectorAll(".size-compare-table button")].every((button) => button.disabled),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));

  await page.goto(`${url}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  const cartReadiness = await page.evaluate(() => ({
    disabledProductButtons: [...document.querySelectorAll(".product-card .add-button")].filter((button) =>
      button.textContent.includes("Pris kommer"),
    ).length,
    missingMockPrices: !/549|899|250 ml|500 ml/.test(document.body.innerText),
    count: document.querySelector("[data-cart-count]")?.textContent?.trim(),
    total: document.querySelector("[data-cart-total]")?.textContent?.trim(),
  }));

  await page.goto(`${url}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.locator('[data-select-plan="recurring-preview"][data-product-id="core"]').click();
  const recurringReadiness = await page.evaluate(() => ({
    open: document.querySelector("[data-cart-drawer]")?.getAttribute("aria-hidden") === "false",
    count: document.querySelector("[data-cart-count]")?.textContent?.trim(),
    total: document.querySelector("[data-cart-total]")?.textContent?.trim(),
    text: document.querySelector("[data-cart-items]")?.textContent?.replace(/\s+/g, " ").trim(),
    selected: document
      .querySelector('[data-select-plan="recurring-preview"][data-product-id="core"]')
      ?.getAttribute("aria-checked"),
  }));

  await page.goto(`${url}/product-olivex-superolje.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.locator('[data-select-plan="recurring-preview"][data-product-id="core"]').click();
  const pdpPurchaseReadiness = await page.evaluate(() => ({
    open: document.querySelector("[data-cart-drawer]")?.getAttribute("aria-hidden") === "false",
    total: document.querySelector("[data-cart-total]")?.textContent?.trim(),
    text: document.querySelector("[data-cart-items]")?.textContent?.replace(/\s+/g, " ").trim(),
    disabledButtons: [...document.querySelectorAll(".pdp-variant-grid .add-button, .size-compare-table .add-button")].every(
      (button) => button.disabled,
    ),
    selected: document
      .querySelector('[data-select-plan="recurring-preview"][data-product-id="core"]')
      ?.getAttribute("aria-checked"),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));

  await page.goto(`${url}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.locator("[data-assistant-input]").fill("Kan jeg bruke oljen til steking?");
  await page.locator('.assistant-form button[type="submit"]').click();
  const steking = await page.locator("[data-assistant-answer]").innerText();
  await page.locator("[data-assistant-input]").fill("Kan jeg bruke dette med blodtrykksmedisin?");
  await page.locator('.assistant-form button[type="submit"]').click();
  const medicalHandoff = await page.locator("[data-assistant-answer]").innerText();

  await page.setViewportSize({ width: 390, height: 900 });
  const mobile = [];
  mobile.push(await pageCheck("/preview.html", "Preview hub mobile"));
  mobile.push(await pageCheck("/content-source-map.html", "Content source map mobile"));
  mobile.push(await pageCheck("/index.html", "Storefront mobile", { checkStale: true }));
  await page.screenshot({ path: path.join(outDir, "mobile.png"), fullPage: false });
  mobile.push(await pageCheck("/product-olivex-superolje.html", "PDP mobile", { checkStale: true }));
  mobile.push(await pageCheck("/production-safe-copy.html", "Safe copy mobile", { checkRisky: true }));

  await page.goto(`${url}/product-olivex-superolje.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.locator("[data-sticky-variant]").selectOption("core-size-2");
  const mobileStickyReadiness = await page.evaluate(() => ({
    stickyVisible: window.getComputedStyle(document.querySelector("[data-sticky-purchase]")).display !== "none",
    open: document.querySelector("[data-cart-drawer]")?.getAttribute("aria-hidden") === "false",
    total: document.querySelector("[data-cart-total]")?.textContent?.trim(),
    text: document.querySelector("[data-cart-items]")?.textContent?.replace(/\s+/g, " ").trim(),
    selectedSize: document.querySelector("[data-sticky-variant]")?.value,
    buttonDisabled: document.querySelector("[data-sticky-add]")?.disabled,
    buttonText: document.querySelector("[data-sticky-add]")?.textContent?.trim(),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));

  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: url,
    method: "Playwright shell QA",
    desktop,
    mobile,
    cartReadiness,
    recurringReadiness,
    pdpPurchaseReadiness,
    mobileStickyReadiness,
    sizeComparison,
    consent: {
      initial: consentInitial,
      settings: consentSettings,
      custom: consentCustom,
      rejected: consentRejected,
    },
    support: {
      stekingAnswered: /kaldt|Høye temperaturer|polyfenolene/i.test(steking),
      medicalHandoff: /lege|farmasøyt|medisinske råd/i.test(medicalHandoff),
      samples: { steking, medicalHandoff },
    },
    screenshots: {
      desktop: "qa/desktop.png",
      mobile: "qa/mobile.png",
      safeCopy: "qa/production-safe-copy.png",
    },
    errors,
  };

  const failures = [];
  for (const check of [...desktop, ...mobile]) {
    if (check.overflow) failures.push(`${check.label}: horizontal overflow`);
    if (check.staleTerms?.length) failures.push(`${check.label}: stale terms ${check.staleTerms.join(", ")}`);
    if (check.riskyTerms?.length) failures.push(`${check.label}: risky terms ${check.riskyTerms.join(", ")}`);
    if ((check.path === "/index.html" || check.path === "/share-preview/website.html") && !check.sourceHero) {
      failures.push(`${check.label}: missing supplied OliveX hero`);
    }
    if ((check.path === "/index.html" || check.path === "/share-preview/website.html") && !check.logo) {
      failures.push(`${check.label}: missing OliveX logo`);
    }
  }
  if (errors.length) failures.push(`console errors: ${errors.join(" | ")}`);
  if (sizeComparison.rowCount !== 2) failures.push("size comparison no longer shows two planned size rows");
  if (!sizeComparison.disabledButtons) failures.push("size comparison buttons should be disabled until real prices exist");
  if (!cartReadiness.missingMockPrices) failures.push("storefront still contains removed mock prices/sizes");
  if (recurringReadiness.open) failures.push("recurring selection should not open cart while prices are missing");
  if (pdpPurchaseReadiness.open) failures.push("PDP purchase controls should not open cart while prices are missing");
  if (!pdpPurchaseReadiness.disabledButtons) failures.push("PDP purchase buttons should be disabled until real prices exist");
  if (!mobileStickyReadiness.buttonDisabled) failures.push("mobile sticky add button should be disabled until real prices exist");

  fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) {
    throw new Error(`QA failed:\n- ${failures.join("\n- ")}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
