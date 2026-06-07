# Performance Readiness - 2026-06-07

This note documents the OliveX performance gate for the Shopify production build.

Browser-native review page:

- `performance-readiness.html`

## Current Static Preview

Local source-file sizes:

| Asset | Approx size |
| --- | ---: |
| `index.html` | 28 KB |
| `product-olivex-superolje.html` | 16 KB |
| `styles.css` | 40 KB |
| `app.js` | 40 KB |
| `assets/olivex-wordmark-cropped.png` | 40 KB |
| `assets/visuals/olivex-hero-editorial-2026-06-07.jpg` | 296 KB |
| `assets/visuals/olivex-product-placeholder-2026-06-07.jpg` | 428 KB |
| `assets/visuals/olivex-producer-poster-2026-06-07.jpg` | 600 KB |

The static preview loads no analytics, ads, chat, remote fonts or external app scripts.

## Core Web Vitals Targets

Use current Google/web.dev thresholds:

- LCP: good at or below 2.5 seconds
- INP: good at or below 200 ms
- CLS: good at or below 0.1

Production should measure these after the real Shopify theme, media, apps, consent tool, support widget and checkout path are configured.

## Production Budget

Recommended launch budget:

- Hero/LCP image: under roughly 350 KB after production optimization where possible.
- Render-blocking CSS: under roughly 100 KB.
- Initial JS: under roughly 150 KB gzip where realistic.
- No third-party script in the critical path without a clear reason.
- All media needs stable dimensions through width/height or aspect-ratio.
- Below-the-fold media should lazy-load.
- Producer video should use poster and `preload="metadata"`; no heavy autoplay.

## Main Production Risks

- Shopify app embeds for CMP, reviews, subscriptions, shipping, chat and analytics.
- Original PNG/photo assets used instead of optimized images.
- Producer video autoloading heavy media.
- Remote fonts or font swaps causing layout shift.
- Support widget loaded before user intent.
- Tracking scripts loaded before consent.

## Required Tests Before Launch

- Lighthouse mobile on homepage, product page, cart state and policy/support pages.
- Real device test on mobile network.
- Resource inventory of all scripts, CSS, images, fonts and third-party domains.
- Consent-state testing: reject, accept and custom preferences.
- Checkout path timing for card, Vipps/MobilePay and Posten/Bring.
- Post-launch monitoring in Search Console/Core Web Vitals or chosen RUM tool.

## Official Source Baseline

- web.dev Web Vitals: `https://web.dev/articles/vitals`
- Google Search page experience: `https://developers.google.com/search/docs/appearance/page-experience`
- Lighthouse performance scoring: `https://developer.chrome.com/docs/lighthouse/performance/performance-scoring`
- Chrome DevTools Performance panel: `https://developer.chrome.com/docs/devtools/performance`
- Shopify theme performance: `https://shopify.dev/docs/storefronts/themes/best-practices/performance`
- Shopify optimized images: `https://shopify.dev/docs/storefronts/themes/best-practices/performance/optimized-images`

## Current Verification

Browser QA for the readiness page should confirm:

- noindex is present
- desktop and 390 px mobile have no horizontal overflow
- current asset-size section is visible
- Core Web Vitals targets are visible
- source links are present
- hub/review/deploy routing works

Full Lighthouse/Core Web Vitals verification remains a production task because the final Shopify theme, apps, live domain, checkout and real media do not exist yet.
