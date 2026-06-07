# Structured Data Preview Safety - 2026-06-07

Status: verified 2026-06-07.

## Decision

The static OliveX preview should not publish placeholder JSON-LD for Organization, ItemList, Product, Offer, FAQPage, VideoObject or AggregateRating.

This is intentional.

The production SEO plan still includes structured data, but only after real Shopify data exists:

- final production domain and canonical URLs
- final seller/importer details and logo URL
- product 1 and product 2
- two real sizes per product
- price, SKU/GTIN, availability, weight and shipping data
- final product images
- COA/analysebevis and batch data
- Posten/Bring shipping setup
- return policy and legal/policy text
- producer video, poster, captions, transcript and metadata
- real customer reviews if reviews are ever used

## What Changed

Removed preview JSON-LD from:

- `index.html`
- `product-olivex-superolje.html`
- `share-preview/website.html`
- `share-preview/product-olivex-superolje.html`
- `deliverables/olivex-preview-hub-netlify-drop/website.html`
- `deliverables/olivex-preview-hub-netlify-drop/product-olivex-superolje.html`

The previous placeholder `https://example.no` Organization URL/logo and preview Product schema are gone.

## Validator Gate

`scripts/validate-customer-copy.cjs` now fails if current preview storefront/PDP files contain:

- `application/ld+json`
- `https://example.no`
- Organization schema
- ItemList schema
- Product schema
- Offer schema
- FAQPage schema
- VideoObject schema
- AggregateRating schema

## Verification

Browser QA covered root/share/drop storefront and PDP:

- no JSON-LD scripts
- no `example.no`
- `noindex,nofollow` still present
- OliveX logo still visible
- expected H1s still present
- no console errors
- no horizontal overflow

Report: `qa/structured-data-safety-report-2026-06-07.json`.

## Production Rule

When production data exists, structured data should be generated from Shopify data and validated against visible page content, Google Rich Results tooling, Search Console and Merchant Center. Do not reintroduce placeholder schema to make the preview look more complete.
