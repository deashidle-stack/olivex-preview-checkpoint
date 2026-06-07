#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const HERO = "Mer enn en matolje. Ditt daglige, flytende kosttilskudd.";
const HERO_LEDE = "En spiseskje om dagen for cellene, hjertet og hjernen. Dokumentert av vitenskapen – verifisert av laboratoriet.";
const LOGO_ASSET = "assets/olivex-wordmark-cropped.png";
const PDP_LOGO_ASSETS = [LOGO_ASSET, "assets/olivex-wordmark-nav.png"];
const HERO_LOGO_ASSET = "assets/olivex-wordmark-white.png";

const sourceHeadings = [
  "Hvorfor vanlig ekstra virgin olivenolje ikke er nok",
  "Hva er Oleocanthal og hvorfor stikker det i halsen?",
  "Hjertehelse og dokumentert sykdomsforebygging",
  "Naturens egen synergieffekt (Biotilgjengelighet)",
  "Ditt daglige rituale",
  "Etterprøvbare referanser",
];

const forbiddenCustomerPhrases = [
  "Dokumentasjon før påstand",
  "sporbar sammensetning",
  "Norsk tillit",
  "Produktutdanning",
  "Tydelig handel",
  "Mindre støy",
  "premium hierarki",
  "Mer premium hierarki",
  "Quality Passport",
  "claim-reviewes",
  "statisk preview",
  "Live-agent",
  "I ferdig løsning",
  "før live",
  "supportassistent",
  "checkout readiness",
  "sales strategy",
  "salgsstrategi",
];

const unsupportedProductData = [
  "OliveX Superolje",
  "core-250",
  "core-500",
  "250 ml",
  "500 ml",
  "NOK 549",
  "NOK 899",
  "549 kr",
  "899 kr",
];

const unsafePreviewStructuredData = [
  "application/ld+json",
  "https://example.no",
  '"@type": "Organization"',
  '"@type":"Organization"',
  '"@type": "ItemList"',
  '"@type":"ItemList"',
  '"@type": "Product"',
  '"@type":"Product"',
  '"@type": "Offer"',
  '"@type":"Offer"',
  '"@type": "FAQPage"',
  '"@type":"FAQPage"',
  '"@type": "VideoObject"',
  '"@type":"VideoObject"',
  '"@type": "AggregateRating"',
  '"@type":"AggregateRating"',
];

const isPackageRoot =
  fs.existsSync(path.join(root, "website.html")) &&
  fs.existsSync(path.join(root, "product-olivex-superolje.html")) &&
  !fs.existsSync(path.join(root, "share-preview"));

const fullProjectChecks = [
  {
    file: "index.html",
    label: "root storefront",
    require: [HERO, HERO_LEDE, LOGO_ASSET, HERO_LOGO_ASSET, ...sourceHeadings],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData, ...unsafePreviewStructuredData],
  },
  {
    file: "product-olivex-superolje.html",
    label: "root product page",
    require: ["OliveX høyphenolitisk olje", HERO, HERO_LEDE, PDP_LOGO_ASSETS, "Størrelse 1", "Størrelse 2", "Pris kommer"],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData, ...unsafePreviewStructuredData],
  },
  {
    file: "app.js",
    label: "root storefront script strings",
    require: ["Neste produkt kommer", "Det neste produktet legges inn når navn, innhold, størrelser og pris er klart.", "Pris kommer"],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData],
  },
  {
    file: "preview.html",
    label: "local preview hub",
    require: [HERO, LOGO_ASSET],
    forbid: ["Quality Passport", "Dokumentasjon før påstand", "salgsstrategi"],
  },
  {
    file: "share-preview/website.html",
    label: "share storefront",
    require: [HERO, HERO_LEDE, LOGO_ASSET, HERO_LOGO_ASSET, ...sourceHeadings],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData, ...unsafePreviewStructuredData],
  },
  {
    file: "share-preview/product-olivex-superolje.html",
    label: "share product page",
    require: [
      "OliveX høyphenolitisk olje",
      HERO,
      HERO_LEDE,
      PDP_LOGO_ASSETS,
      "Størrelse 1",
      "Størrelse 2",
      "Pris kommer",
      "./website.html#top",
      "./website.html#products",
      "./website.html#why",
    ],
    forbid: [
      ...forbiddenCustomerPhrases,
      ...unsupportedProductData,
      ...unsafePreviewStructuredData,
      "./index.html#top",
      "./index.html#products",
      "./index.html#why",
    ],
  },
  {
    file: "share-preview/app.js",
    label: "share storefront script strings",
    require: ["Neste produkt kommer", "Det neste produktet legges inn når navn, innhold, størrelser og pris er klart.", "Pris kommer"],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData],
  },
  {
    file: "share-preview/index.html",
    label: "share preview hub",
    require: [HERO, LOGO_ASSET, "./website.html"],
    forbid: ["Quality Passport", "Dokumentasjon før påstand", "salgsstrategi"],
  },
  {
    file: "deliverables/olivex-preview-hub-netlify-drop/website.html",
    label: "drop storefront",
    require: [HERO, HERO_LEDE, LOGO_ASSET, HERO_LOGO_ASSET, ...sourceHeadings],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData, ...unsafePreviewStructuredData],
  },
  {
    file: "deliverables/olivex-preview-hub-netlify-drop/product-olivex-superolje.html",
    label: "drop product page",
    require: [
      "OliveX høyphenolitisk olje",
      HERO,
      HERO_LEDE,
      PDP_LOGO_ASSETS,
      "Størrelse 1",
      "Størrelse 2",
      "Pris kommer",
      "./website.html#top",
      "./website.html#products",
      "./website.html#why",
    ],
    forbid: [
      ...forbiddenCustomerPhrases,
      ...unsupportedProductData,
      ...unsafePreviewStructuredData,
      "./index.html#top",
      "./index.html#products",
      "./index.html#why",
    ],
  },
  {
    file: "deliverables/olivex-preview-hub-netlify-drop/app.js",
    label: "drop storefront script strings",
    require: ["Neste produkt kommer", "Det neste produktet legges inn når navn, innhold, størrelser og pris er klart.", "Pris kommer"],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData],
  },
  {
    file: "deliverables/olivex-preview-hub-netlify-drop/index.html",
    label: "drop preview hub",
    require: [HERO, LOGO_ASSET, "./website.html"],
    forbid: ["Quality Passport", "Dokumentasjon før påstand", "salgsstrategi"],
  },
];

const packageChecks = [
  {
    file: "website.html",
    label: "package storefront",
    require: [HERO, HERO_LEDE, LOGO_ASSET, HERO_LOGO_ASSET, ...sourceHeadings],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData, ...unsafePreviewStructuredData],
  },
  {
    file: "product-olivex-superolje.html",
    label: "package product page",
    require: [
      "OliveX høyphenolitisk olje",
      HERO,
      HERO_LEDE,
      PDP_LOGO_ASSETS,
      "Størrelse 1",
      "Størrelse 2",
      "Pris kommer",
      "./website.html#top",
      "./website.html#products",
      "./website.html#why",
    ],
    forbid: [
      ...forbiddenCustomerPhrases,
      ...unsupportedProductData,
      ...unsafePreviewStructuredData,
      "./index.html#top",
      "./index.html#products",
      "./index.html#why",
    ],
  },
  {
    file: "app.js",
    label: "package storefront script strings",
    require: ["Neste produkt kommer", "Det neste produktet legges inn når navn, innhold, størrelser og pris er klart.", "Pris kommer"],
    forbid: [...forbiddenCustomerPhrases, ...unsupportedProductData],
  },
  {
    file: "index.html",
    label: "package preview hub",
    require: [HERO, LOGO_ASSET, "./website.html"],
    forbid: ["Quality Passport", "Dokumentasjon før påstand", "salgsstrategi"],
  },
];

const checks = isPackageRoot ? packageChecks : fullProjectChecks;

const problems = [];

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function readProjectFile(relativePath) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    problems.push({ file: relativePath, issue: "missing file" });
    return null;
  }
  return fs.readFileSync(fullPath, "utf8");
}

for (const check of checks) {
  const text = readProjectFile(check.file);
  if (text === null) continue;
  const normalizedText = normalizeWhitespace(text);

  for (const required of check.require || []) {
    const acceptableRequired = Array.isArray(required) ? required : [required];
    const hasRequired = acceptableRequired.some((item) => normalizedText.includes(normalizeWhitespace(item)));
    if (!hasRequired) {
      problems.push({
        file: check.file,
        label: check.label,
        issue: "missing required customer-copy evidence",
        value: Array.isArray(required) ? required.join(" OR ") : required,
      });
    }
  }

  for (const forbidden of check.forbid || []) {
    if (normalizedText.includes(normalizeWhitespace(forbidden))) {
      problems.push({
        file: check.file,
        label: check.label,
        issue: "forbidden customer-facing copy or unsupported data",
        value: forbidden,
      });
    }
  }
}

const summary = {
  checkedAt: new Date().toISOString(),
  mode: isPackageRoot ? "package" : "full-project",
  checkedFiles: checks.map((check) => check.file),
  requiredHero: HERO,
  requiredHeroLede: HERO_LEDE,
  logoAsset: LOGO_ASSET,
  pdpLogoAssets: PDP_LOGO_ASSETS,
  heroLogoAsset: HERO_LOGO_ASSET,
  problems,
};

console.log(JSON.stringify(summary, null, 2));

if (problems.length > 0) process.exit(1);
