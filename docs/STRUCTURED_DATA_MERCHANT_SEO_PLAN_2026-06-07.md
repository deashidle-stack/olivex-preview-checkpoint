# OliveX Structured Data And Merchant SEO Plan - 2026-06-07

This is the production plan for SEO, AEO/GEO and merchant structured data. It is not final live markup. Final markup must wait for production domain, legal-approved copy, real product data, actual prices, shipping terms, return terms, product images and the producer video.

Browser-native review artifact: `seo-merchant-readiness.html`.

## Current Decision

Keep preview pages `noindex,nofollow`.

Do not use final merchant schema on the public preview. Google requires structured data to represent visible page content, and the current preview still contains placeholders for product 2, prices, COA values, video and production policies.

Use schema to clarify real product data when it exists. Do not use schema to make claims that the page copy, lab documents or legal review do not support.

## Production SEO Position

Google's current AI-features guidance says ordinary SEO fundamentals still apply for AI Overviews and AI Mode. There is no special AI-only schema or separate machine-readable file required. For OliveX this means:

- make important content visible as normal Norwegian text
- keep the product journey internally linked
- use high-quality real product, producer and certificate media
- make structured data match the visible page exactly
- connect Google Merchant Center when the product, shipping and return data is final
- validate in Search Console and Rich Results Test after deployment

## URL And Indexing Plan

Recommended production URL structure:

| Page | URL pattern | Indexing |
| --- | --- | --- |
| Home | `/` | Index after launch approval |
| OliveX product | `/produkter/[final-product-handle]` | Index after final product data and claim review |
| Product 2 | `/produkter/[final-product-handle]` | Index only after client supplies final product data |
| Analysebevis / batch page | `/analysebevis` or product-section anchor | Index if content is useful and legally approved |
| FAQ / support | `/hjelp` or `/faq` | Index visible FAQ content, but do not rely on FAQ rich results |
| Retur og vilkar | `/retur-og-vilkar` | Index when legal terms are final |
| Frakt | `/frakt` | Index when Posten/Bring terms are final |
| Kontakt | `/kontakt` | Index |

Production gates:

- remove `noindex,nofollow` only after final copy/legal/product data
- add self-referencing canonical URLs on production pages
- generate Shopify sitemap and submit in Search Console
- verify the production domain in Search Console
- ensure Shopify SSL is active before opening indexing

## Structured Data Inventory

| Schema type | Where | Status | Gate before live |
| --- | --- | --- | --- |
| `Organization` | Site-wide or home page | Planned | Final domain, final logo URL, business name, support URL |
| `WebSite` | Home page | Planned | Final domain and site search decision |
| `BreadcrumbList` | Product pages, help pages | Planned | Final URL hierarchy |
| `ProductGroup` | Product pages with size variants | Planned | Final product name, variant names, SKUs/GTINs, prices and images |
| `Product` | Each size variant | Planned | Real variant data, image and visible product facts |
| `Offer` | Each sellable variant | Planned | Actual price, currency, availability, condition, URL |
| `OfferShippingDetails` | Product offers or shared shipping policy | Planned | Real Posten/Bring rates, delivery windows and regions |
| `MerchantReturnPolicy` | Organization level by default | Planned | Approved return policy and country applicability |
| `VideoObject` | Producer video section | Planned | Final video, poster, upload date, duration, transcript/captions |
| `FAQPage` | FAQ/support | Avoid for Google SEO dependency | FAQ rich results are being deprecated/removed in Google Search in 2026 |
| `Review` / `AggregateRating` | Product pages | Do not add yet | Only if real, visible, policy-compliant customer reviews exist |

## Product Variant Markup

OliveX has 2 products with 2 sizes per product. For Shopify product pages where size variants live on one product URL, use `ProductGroup` with nested `Product` variants.

Required production data per variant:

- final variant title
- SKU
- GTIN/EAN if available
- size
- price in NOK
- availability
- condition as new
- product image URL
- canonical purchase URL, ideally with selected Shopify variant parameter if used

Do not mark up product 2 until the client supplies actual product identity, ingredients, sizes, pricing and approved copy.

## Merchant Listing Fields

For each live product/variant, the merchant data should include:

- `name`
- `description`
- `brand`
- `image`
- `sku`
- `gtin` when available
- `offers.price`
- `offers.priceCurrency` as `NOK`
- `offers.availability`
- `offers.itemCondition`
- `offers.url`
- `offers.shippingDetails` only after final Posten/Bring data
- return policy through organization-level `hasMerchantReturnPolicy` unless a product-specific exception exists

Google Merchant Center product feed should be the source of truth for product commerce data. Schema should match the feed and the visible Shopify page.

## Shipping And Returns

Use Posten/Bring terms in visible copy and schema only after setup is complete.

Implementation preference:

1. Configure shipping and return settings in Shopify and Google Merchant Center.
2. Add organization-level `MerchantReturnPolicy` if the return policy is standard across products.
3. Add offer-level `OfferShippingDetails` if the rates and delivery windows are stable enough to keep accurate.
4. Prefer product/feed-level settings for product-specific exceptions.

Do not publish placeholder shipping rates or return windows as schema.

## Producer Video Markup

The current video module is only a placeholder. After the producer video from Greece is delivered:

- upload optimized video or embed from the chosen hosting provider
- create a real poster image
- add Norwegian subtitles or transcript
- show a short visible summary on the page
- add `VideoObject` with real `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl` or `embedUrl`
- test in Rich Results Test and URL Inspection

Do not add `VideoObject` for a placeholder.

## FAQ And Support Agent

Keep FAQ/support content visible because it helps customers and answer engines understand the product. Do not make FAQPage schema the SEO strategy.

Production support-agent requirements:

- approved knowledge base
- medical-question handoff
- source/status labels for answers
- no unsupported health claims
- ability to update answers when lab data, shipping or policy changes

## Launch Validation

Before opening indexing:

1. Run Rich Results Test on home, each product page, FAQ/help and policy pages.
2. Inspect URLs in Search Console after deployment.
3. Confirm Merchant Center product feed has no critical product, shipping or return errors.
4. Confirm visible product data matches schema and feed.
5. Confirm no placeholder product 2 schema exists.
6. Confirm no fake ratings/reviews schema exists.
7. Confirm all schema images are crawlable production URLs.
8. Confirm no `noindex` remains on production pages meant to rank.

## Source References

- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, general structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google Search Central, merchant listing structured data: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- Google Search Central, product variant structured data: https://developers.google.com/search/docs/appearance/structured-data/product-variants
- Google Search Central, FAQ structured data deprecation notice: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google Search Central, video structured data: https://developers.google.com/search/docs/appearance/structured-data/video
- Google Merchant Center Help, structured data setup: https://support.google.com/merchants/answer/7331077
