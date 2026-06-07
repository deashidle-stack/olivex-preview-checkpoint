# Shopify Theme Handoff - 2026-06-07

This handoff explains how to use `deliverables/olivex-shopify-theme.zip` after a Shopify development store exists.

## Decision

Use the ZIP as a draft Shopify theme. Do not publish it as the live store until product data, COA, claims, payment, shipping, policies, performance and training are verified.

## What The ZIP Contains

- OliveX hero section with the supplied hero direction and bundled white transparent logo fallback.
- Product showcase section for two-product ecommerce structure.
- Product page with variant selector, dynamic price, mobile sticky add-to-cart and selling-plan readiness.
- `lab` metafield pattern for batch, origin, lab, method, certificate, dose, servings and warnings.
- Quality passport/analysebevis module that should be driven by Shopify data.
- Optional privacy controls as preview UX, not final CMP implementation.

## Recommended Admin Upload Flow

1. Create a Shopify development store.
2. In Shopify admin, upload `deliverables/olivex-shopify-theme.zip` as an unpublished theme.
3. Open theme preview and check hero, menus, product pages, cart, mobile sticky buybox and policy/footer links.
4. Add real products, variants, media and `lab` metafields.
5. Configure Vipps/MobilePay, card payments, Posten/Bring, CMP, analytics and any subscription app in test mode.
6. Publish only after full QA and business signoff.

## Recommended CLI Flow

```bash
cd /Users/andreas/Documents/Prosjekter/2026-Ideas/nordic-longevity-lab/shopify-theme
shopify theme check
shopify theme dev --store <shopify-store.myshopify.com>
shopify theme push --unpublished --store <shopify-store.myshopify.com>
shopify theme open --store <shopify-store.myshopify.com>
```

## Configuration Required Before Realistic Review

- Final brand name, final logo exports and favicon.
- Main menu, footer menu, contact details and legal seller/importer data.
- Purchase terms, privacy, cookies, shipping, returns and right-of-withdrawal text.
- Two products, each with two variants.
- Final prices, SKU, inventory, weight, shipping dimensions and GTIN where relevant.
- Product images, packshots, producer video, poster, captions and transcript.
- COA PDF, batch, method, lab, date and approved claim language.

## Minimum Acceptance Test Before Publishing

- ZIP uploads without layout, schema or missing-asset errors.
- `shopify theme check` has run and findings are handled.
- No `Pris kommer`, placeholder product, empty COA or unresolved size data is visible.
- Test orders cover card, Vipps/MobilePay, capture, refund and cancellation.
- Posten/Bring rates, pickup point, label, tracking and return flow are tested.
- Mobile has no horizontal overflow, clipped headings, broken images or too-small touch targets.
- Product/ProductGroup/Offer, shipping, return policy and VideoObject schema match visible content.
- LCP, INP, CLS and third-party scripts are tested after apps, video, CMP and support widget are active.

## Official Sources

- Shopify adding themes: https://help.shopify.com/en/manual/online-store/themes/adding-themes
- Shopify CLI: https://shopify.dev/docs/storefronts/themes/tools/cli
- Shopify Theme Check: https://shopify.dev/docs/storefronts/themes/tools/theme-check
- Shopify theme performance: https://shopify.dev/docs/storefronts/themes/best-practices/performance
- Shopify optimized images: https://shopify.dev/docs/storefronts/themes/best-practices/performance/optimized-images
