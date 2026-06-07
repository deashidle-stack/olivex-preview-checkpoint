# Shopify Scaffold Alignment - 2026-06-07

## What Changed

The Shopify theme scaffold was brought closer to the current static OliveX preview.

- Added `sections/product-size-comparison.liquid` for the two-size product comparison table.
- Added the size comparison section to `templates/product.json`.
- Added mobile sticky add-to-cart markup and styling on Shopify product pages.
- Added Shopify selling-plan fields when a product has selling plan groups.
- Kept recurring-delivery setup notes disabled by default so the theme does not publicly promise subscriptions before production setup is verified.
- Added optional privacy/consent controls in the theme layout with Norwegian labels.
- Updated `snippets/product-card-lab.liquid` so homepage product-card variant price updates still work.
- Re-aligned the Shopify homepage hero side card to the supplied daily-ritual copy instead of lab/batch strategy language.
- Added the white transparent OliveX logo as the default Shopify hero-logo asset, with a theme setting for replacement when final assets are ready.
- Added Shopify CSS overflow guards for hero, product cards and product-detail layout so long product names and mobile grids do not create horizontal scroll.
- Removed `Analysebevis` from the Shopify homepage template order; analysis remains available for product-detail context.
- Rewrote Shopify delivery/payment defaults as customer-facing ecommerce copy instead of setup/launch notes.
- Rebuilt `deliverables/olivex-shopify-theme.zip` after the source-copy correction.
- Rebuilt `deliverables/olivex-shopify-theme.zip`.

## Important Production Notes

- Subscription/fast levering must be verified with the selected Shopify subscription app, payment gateways, Vipps/MobilePay support and legal terms before launch.
- The consent controls are a scaffolded UX preview. Production must connect the final consent implementation to the selected Shopify-compatible CMP, cookie list and analytics stack.
- The size comparison uses the current 15-20 ml daily-use basis and default duration labels. Final prices, variant IDs, serving language and metafields must be confirmed in Shopify.
- Real COA/analysebevis, batch data, origin, lab, method and certificate URLs still need to be populated as product/metafield data.

## Verification

Passed locally:

```bash
node --check shopify-theme/assets/theme.js
```

JSON and section schema parsing passed for:

- `shopify-theme/config/*.json`
- `shopify-theme/templates/*.json`
- `shopify-theme/locales/*.json`
- every `{% schema %}` block in `shopify-theme/sections/*.liquid`

ZIP verification:

```bash
unzip -l deliverables/olivex-shopify-theme.zip | rg "product-size-comparison|theme.js|theme.css|settings_schema|README|templates/product.json"
```

Confirmed the rebuilt ZIP includes:

- `sections/product-size-comparison.liquid`
- updated `assets/theme.css`
- updated `assets/theme.js`
- updated `templates/product.json`
- updated `templates/index.json` with source-copy hero/ritual defaults and no homepage `passport` section
- updated `config/settings_schema.json`
- updated `README.md`
