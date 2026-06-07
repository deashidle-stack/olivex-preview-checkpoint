# OliveX Production Build Brief - 2026-06-07

This is the working brief for turning the OliveX static preview into a real Shopify store.

## Core Decision

Build production as a data-driven Shopify store, not as a static copy of the preview.

The preview shows the experience. Production must be driven by Shopify products, variants, metafields, payment apps, shipping rules, legally approved copy and a controlled support knowledge base.

## Production Stack

| Layer | Recommendation | Gate |
| --- | --- | --- |
| Shopify theme | Use the local OliveX theme scaffold as the starting point | Run Theme Check and browser QA after upload |
| Products | Store product facts in products, variants and metafields | No hardcoded sizes, prices, batch values or claims |
| Payments | Use Shopify Payments or chosen card provider plus Vipps/MobilePay checkout route | Test card, Vipps/MobilePay, capture, refund and cancellation |
| Shipping | Configure Posten/Bring in Shopify | Test pickup point, labels, tracking, prices and returns |
| SEO/Merchant | Add ProductGroup/Product/Offer/VideoObject only after product/video facts are final | Validate Rich Results, Search Console and Merchant Center |
| Consent | Use a Shopify-compatible CMP or Customer Privacy API implementation | Test accept, reject, preferences and analytics behavior |
| Legal/policy | Build approved legal pages and footer/checkout links | Seller data, terms, privacy, cookies, returns, shipping and product labeling approved |
| Performance | Keep Core Web Vitals as launch gates | Measure after real media, Shopify apps, consent, support and tracking are enabled |
| Training/operations | Train named client owners on real admin workflows | Client can manage products, COA, orders, refunds, shipping, support and reports |
| Support agent | Build server-side with approved KB/retrieval and medical handoff | Log, review and escalate unsafe or unanswered questions |

## Required Data Before Build

- Final product names and final product 2 definition.
- Two variants per product with ml, SKU, price, inventory, weight and GTIN if relevant.
- Product photos, packaging, final logo exports, producer video, poster image, Norwegian captions, transcript and rights confirmation.
- Ingredients, daily dose, servings, storage and warnings.
- COA/analysebevis with batch ID, lab, method, date, values and PDF.
- Approved claims or a legal-review contact.
- Shipping, return, privacy, cookie and purchase terms.
- Legal seller/importer name, organization number, address, return address, support contact and subscription terms if relevant.
- Shopify, payment, Vipps/MobilePay, Posten/Bring, GA4, Search Console and Merchant Center account access.

## Build Phases

1. Data intake: lock products, variants, COA, media, claims, terms and account ownership.
2. Shopify setup: create dev store, upload scaffold, add products, metafields and media.
3. Checkout setup: activate card, Vipps/MobilePay and Posten/Bring; test purchase, capture, refund and shipping.
4. Content lock: replace preview copy with approved live copy and real documents.
5. SEO and support: add schema, Merchant Center data, Search Console and support KB/agent.
6. Launch QA: test desktop, mobile, WCAG, checkout, consent, speed, schema, support and training before removing noindex.

## Go/No-Go Gates

| Area | Go criteria |
| --- | --- |
| Claims | No disease, medicine or biomarker claims without legal approval |
| Purchase | Real variants, real prices and passing test orders |
| Shipping | Passing Posten/Bring rates, pickup, labels, tracking and returns |
| SEO | Visible product facts match schema, feeds, canonical and sitemap |
| Privacy | Consent, privacy policy, cookie list and analytics behavior approved |
| Legal/policy | Purchase terms, return/angrerett, shipping, seller details and product labeling are visible and approved |
| Performance | LCP, INP, CLS, media budget and third-party scripts are measured and acceptable on mobile |
| Training | Client has practiced product update, test order, refund, tracking and support-handoff scenarios |
| Support | FAQ/agent answers only from approved knowledge and escalates medical questions |

## Source-Checked Assumptions

Checked 2026-06-07 against official/current sources:

- Shopify payments: https://help.shopify.com/en/manual/payments
- Shopify subscription payment considerations: https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations
- Vipps/MobilePay Shopify plugin: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Vipps/MobilePay Shopify FAQ: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/shopify-faq/
- Bring developer platform: https://developer.bring.com/
- Google Product variant structured data: https://developers.google.com/search/docs/appearance/structured-data/product-variants
- Google Merchant listing structured data: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- Google video structured data: https://developers.google.com/search/docs/appearance/structured-data/video
- W3C WAI audio/video accessibility: https://www.w3.org/WAI/media/av/
- Shopify product media: https://help.shopify.com/en/manual/products/product-media
- Shopify Customer Privacy API: https://shopify.dev/docs/api/customer-privacy
- Shopify admin: https://help.shopify.com/en/manual/shopify-admin
- Shopify products: https://help.shopify.com/en/manual/products
- Shopify orders: https://help.shopify.com/en/manual/orders
- Shopify refunds/cancellations: https://help.shopify.com/en/manual/orders/refund-cancel-order
- Shopify legal pages: https://help.shopify.com/en/manual/privacy-and-security/privacy/legal-pages
- web.dev Web Vitals: https://web.dev/articles/vitals
- Google page experience: https://developers.google.com/search/docs/appearance/page-experience
- Shopify theme performance: https://shopify.dev/docs/storefronts/themes/best-practices/performance
- Forbrukertilsynet: https://www.forbrukertilsynet.no/
- Forbrukerrådet: https://www.forbrukerradet.no/
- Datatilsynet: https://www.datatilsynet.no/
- Mattilsynet food labeling: https://www.mattilsynet.no/mat-og-drikke/merking-av-mat
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- OpenAI File Search: https://developers.openai.com/api/docs/guides/tools-file-search

## Current Status

Preview is suitable for review and direction. It is not ready as a live store until product data, COA, accounts, legal approvals, payment/shipping setup and production QA are complete.
