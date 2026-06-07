# OliveX Shopify Data Contract - 2026-06-07

This contract defines which data source owns each production fact when converting the OliveX preview into Shopify.

## Rule

No product fact should be more true in the theme than it is in Shopify data.

The theme can render the experience, but products, variants, metafields, media, policy pages and approved support knowledge must be the authoritative sources before launch.

## Ownership Map

| Data source | Owns | Do not hardcode |
| --- | --- | --- |
| Shopify Product | title, handle, product category, product type, vendor, description, media, SEO title/description, collections, status | final claims or batch facts |
| Shopify Variant | size/ml, price, SKU, barcode/GTIN, inventory, weight, tax/shipping settings, variant image | price/size fallbacks |
| Product metafields `lab.*` | batch, origin, lab, method, test date, certificate URL, dose, servings, warnings, approved claim context | placeholder analysis values |
| Variant metafields `lab.*` | duration and use-case copy per size | duration before final ml/dose exists |
| Metaobjects | COA records, producer video, approved FAQ/support source documents, claim records, shipping/return content | draft medical claims |
| Apps/config | payments, Vipps/MobilePay, Posten/Bring, subscriptions, consent, analytics, Merchant Center | live checkout promises |

## Current Scaffold Namespace

The current local Shopify scaffold reads product metafields in namespace `lab`.

If production renames the namespace, update:

- `shopify-theme/sections/quality-passport.liquid`
- `shopify-theme/sections/main-product-lab.liquid`
- `shopify-theme/sections/product-size-comparison.liquid`
- `docs/SHOPIFY_METAFIELDS.md`

## Required Product Fields

- Product title
- Handle
- Product category and product type
- Vendor/brand
- Product description
- SEO title and meta description
- Media
- Product status
- Collections

## Required Variant Fields

- Variant title with actual size/ml
- Price
- SKU
- Barcode/GTIN if available
- Inventory quantity and inventory policy
- Weight and shipping data
- Tax/shipping settings
- Variant image when relevant

## Required Metafields

| Namespace | Key | Owner | Required before |
| --- | --- | --- | --- |
| `lab` | `batch_id` | Product | Analysebevis/support |
| `lab` | `origin` | Product | Origin/traceability copy |
| `lab` | `lab_name` | Product | COA display |
| `lab` | `test_method` | Product | COA display |
| `lab` | `test_date` | Product | COA freshness/support |
| `lab` | `certificate_url` | Product | Certificate CTA |
| `lab` | `serving_condition` | Product | EU claim context |
| `lab` | `serving_size` | Product | PDP buybox |
| `lab` | `daily_dose` | Product | PDP/support |
| `lab` | `servings` | Product | PDP/support |
| `lab` | `warnings` | Product | PDP/support |
| `lab` | `polyphenols_mg_kg` | Product | Claims/schema/support |
| `lab` | `hydroxytyrosol_derivatives_per_20g` | Product | EU claim condition |
| `lab` | `duration` | Variant | Size comparison |
| `lab` | `use_case` | Variant | Size comparison |

## Schema Gates

Do not publish final structured data until matching visible data exists:

- ProductGroup: final products and size variants.
- Product: product name, image, description and brand.
- Offer: price, currency, availability and checkout facts.
- Shipping: final Posten/Bring rates and delivery rules.
- Return policy: approved visible return policy.
- VideoObject: producer video, poster, transcript and metadata.

## Support-Agent Gates

The live support agent must not use draft storefront copy as its only knowledge base.

Required approved sources:

- Product data.
- COA/analysebevis.
- FAQ after claim review.
- Shipping and returns.
- Payment setup.
- Privacy and chat logging text.
- Approved claims.

## Data No-Go Rules

- Missing price: disable purchase and do not publish Offer schema.
- Missing ml/size: do not calculate price per ml or duration.
- Missing COA: do not display measured batch values as facts.
- Missing claim review: do not use disease, medicine, biomarker or effect claims in live copy/support.
- Missing checkout test: do not promise Vipps/MobilePay, card or Posten/Bring as verified production flow.
- Missing support KB: do not activate a live agent.

## Companion Files

- Browser page: `shopify-data-contract.html`
- Field list: `docs/SHOPIFY_DATA_CONTRACT_FIELDS_2026-06-07.csv`
- Intake template: `docs/PRODUCT_INTAKE_TEMPLATE.csv`
- Existing metafield plan: `docs/SHOPIFY_METAFIELDS.md`
- Production build brief: `docs/PRODUCTION_BUILD_BRIEF_2026-06-07.md`

## Sources

Checked on 2026-06-07:

- Shopify custom data/metafields: https://shopify.dev/docs/apps/build/custom-data
- Shopify metaobjects: https://shopify.dev/docs/apps/build/custom-data/metaobjects
- Shopify payments: https://help.shopify.com/en/manual/payments
- Google Product variant structured data: https://developers.google.com/search/docs/appearance/structured-data/product-variants
- Google merchant listing structured data: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
