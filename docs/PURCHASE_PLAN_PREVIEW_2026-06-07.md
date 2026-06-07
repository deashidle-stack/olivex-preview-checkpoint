# OliveX Purchase Plan Preview - 2026-06-07

## Current Status

The storefront and product page include a purchase-plan selector:

- `Engangskjøp`
- `Fast levering`

This is now treated as UX direction only. Because final variant prices and sizes are not supplied, add-to-cart is disabled and the cart should not open for the main OliveX product.

## Preview Behavior

Current preview behavior:

- product cards show `Kjøpsvalg` for the OliveX product
- product detail page shows the same purchase-plan selector
- `Fast levering` can be selected as a UI state
- no subscription discount, frequency, cancellation terms or price are invented
- product 2 remains disabled until actual product data is supplied
- purchase buttons stay disabled while price is `Pris kommer`

## Production Rule

Do not promise live subscription support until the actual Shopify architecture is verified.

Before production:

1. Choose Shopify subscription app/implementation.
2. Confirm supported payment gateways for subscription products.
3. Confirm whether the desired Vipps/MobilePay subscription experience is possible through Shopify or requires a separate Vipps Recurring API architecture.
4. Define frequency, renewal date, price, pause/change/cancel flow and refund terms.
5. Add approved subscription terms to checkout, product pages and email flows.
6. Test recurring order creation, failed payment, cancellation and refund.

## Why This Matters

OliveX is positioned as a daily ritual product. Recurring delivery may be commercially useful, but it has payment, legal and customer-service consequences. The preview should show the UX direction without implying that subscription billing is already production-ready.

## Implementation Notes

Files changed:

- `app.js`
- `index.html`
- `product-olivex-superolje.html`
- `styles.css`

Frontend behavior:

- `state.selectedPlans` stores current purchase plan per product.
- cart keys combine variant and purchase plan: `variantId::planId`.
- variant and purchase-plan controls use `role="radio"` and arrow/Home/End keyboard navigation.
- `canPurchaseVariant()` blocks add-to-cart while final price is missing.

## QA Evidence

Updated QA verifies:

- homepage plan selector renders with `Engangskjøp` selected by default
- selecting `Fast levering` updates UI state
- missing prices do not create a zero-value cart line
- PDP and sticky purchase controls remain disabled until final product data exists
- no horizontal overflow at 1440 px desktop or 390 px mobile

## Source References

- Vipps/MobilePay Shopify plugin: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Vipps/MobilePay Recurring API: https://developer.vippsmobilepay.com/docs/APIs/recurring-api/
- Shopify subscription considerations: https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations
