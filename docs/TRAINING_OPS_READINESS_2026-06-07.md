# Training And Operations Readiness - 2026-06-07

This note documents the OliveX client training and operations handoff gate.

Browser-native review page:

- `training-ops-readiness.html`

## Training Principle

Training is complete when the client can handle the first real order, refund, shipping issue, content update and support question without breaking claims, product data or checkout.

## Suggested Training Sessions

1. Admin and roles
   - Shopify login, staff, permissions, 2FA, notifications, store settings, language and domain.
2. Products
   - Products, variants, prices, inventory, images, SEO fields, status and publishing.
3. Metafields and COA
   - Batch, lab, method, certificate, dose, warnings, origin and fields that require review.
4. Orders and payments
   - Order status, capture, refund, cancellation, failed payment, Vipps/card and customer communication.
5. Shipping and returns
   - Posten/Bring, labels, tracking, pickup point, damaged item, unclaimed parcel, return and complaint.
6. Content and support
   - Pages, policies, FAQ/support KB, claim rules, analytics, reports and first-week monitoring.

## Required Roles

- Owner / daily responsible
- Order responsible
- Product responsible
- Content responsible
- Support responsible
- Technical contact

## Practical Exercises

The client should practice:

- finding and editing a product
- changing a variant price in test
- updating inventory and weight
- uploading or replacing a product image
- opening metafields
- updating a test batch ID
- adding a COA/PDF link
- checking that the product page reflects metafield data
- finding a test order
- reading payment status
- performing a test refund
- adding tracking and marking fulfilled
- editing a policy page
- editing SEO title/meta in test
- adding an approved FAQ answer
- identifying a medical handoff question
- reading Shopify reports and analytics
- checking Search Console/Merchant Center status if configured

## Guardrails

The client should not change these without review:

- new health, disease, biomarker or medication claims
- COA/batch/lab/method values
- shipping promises, free-shipping threshold or delivery time
- subscription/fast-delivery copy
- new app embeds, pixels, chat widgets or tracking
- support-agent KB content tied to medical/product claims

## Handoff Package

Deliver:

- recorded walkthrough
- contact/escalation list
- short operational runbook
- first-week monitoring routine
- change log template
- access/permission review

## Official Source Baseline

- Shopify admin: `https://help.shopify.com/en/manual/shopify-admin`
- Products: `https://help.shopify.com/en/manual/products`
- Metafields: `https://help.shopify.com/en/manual/custom-data/metafields`
- Orders: `https://help.shopify.com/en/manual/orders`
- Refunds/cancellations: `https://help.shopify.com/en/manual/orders/refund-cancel-order`
- Reports and analytics: `https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports`

## Current Production Status

Training cannot be fully completed until the Shopify dev store, products, apps, payment, Posten/Bring and support KB exist. This readiness page is the agenda and acceptance criteria for that training.
