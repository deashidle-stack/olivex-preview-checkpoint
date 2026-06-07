# OliveX Shopify Theme Scaffold

Local Shopify Online Store 2.0-style scaffold aligned with the current OliveX preview and source-copy direction.

## Status

This is not production-ready yet. It has not been uploaded to Shopify, connected to real products or tested with Shopify Theme Check.

Current scaffold defaults use:

- OliveX as the working brand direction
- the supplied hero: "Mer enn en matolje. Ditt daglige, flytende kosttilskudd."
- the bundled white transparent OliveX logo as the default hero logo until final Shopify logo assets are uploaded
- the supplied use case: 15–20 ml each morning, raw or over cold food
- an analysebevis/metafield pattern for batch, origin, lab, method and certificate data
- product size comparison for the two expected sizes
- mobile sticky add-to-cart on product pages
- Shopify selling-plan readiness for future recurring delivery
- optional privacy/consent controls for previewing consent UX

## Structure

- `layout/theme.liquid`: global layout, header, footer
- `templates/index.json`: homepage section order
- `templates/product.json`: product page section order
- `sections/hero-lab.liquid`: OliveX homepage hero
- `sections/product-showcase.liquid`: 2-product showcase
- `sections/main-product-lab.liquid`: product page buy box
- `sections/product-size-comparison.liquid`: variant size comparison table
- `sections/quality-passport.liquid`: metafield-driven analysebevis module
- `sections/evidence-tabs.liquid`: evidence/claim-safety modules
- `sections/delivery-payment.liquid`: Vipps/card/Posten explanation section
- `sections/lab-notes.liquid`: article grid
- `snippets/product-card-lab.liquid`: reusable product card with variant selector
- `assets/theme.css`: storefront styling
- `assets/theme.js`: variant price helper
- `assets/olivex-wordmark-white.png`: bundled default hero logo for the scaffold

## Purchase and Privacy Notes

- Subscription/fast levering uses Shopify selling plans when selling plan groups exist on the product. The scaffold does not hardcode a public subscription promise before the production subscription app, gateway support and terms are approved.
- Privacy controls are optional theme settings. For production, connect the final consent implementation to Shopify's customer privacy/consent setup and the selected analytics stack.

## Required Product Metafields

Use namespace `lab`:

- `batch_id`
- `origin`
- `lab_name`
- `test_method`
- `certificate_url`
- `serving_condition`
- `serving_size`
- `daily_dose`
- `servings`
- `warnings`
- `duration` on variants, optional
- `use_case` on variants, optional

See `../docs/SHOPIFY_METAFIELDS.md` for the full setup plan.

## Next Steps

1. Create Shopify development store or theme target.
2. Add real OliveX products and variants.
3. Add the `lab` metafield definitions.
4. Upload this theme or port sections into the chosen base theme.
5. Configure Shopify Payments, Vipps/MobilePay and Posten Bring Checkout.
6. Run Shopify Theme Check.
7. Test checkout and fulfillment.
8. Replace all placeholder product, price, image and certificate data with approved production data.
