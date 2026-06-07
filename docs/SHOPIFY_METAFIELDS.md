# Shopify Metafields

This theme is built around product metafields in namespace `lab`.

Create these metafield definitions in Shopify Admin before final content entry.

## Required Product Metafields

| Namespace | Key | Suggested type | Purpose |
| --- | --- | --- | --- |
| `lab` | `batch_id` | Single line text | Batch/lot shown in Quality Passport |
| `lab` | `origin` | Single line text | Country, region, estate or producer |
| `lab` | `lab_name` | Single line text | Lab that performed analysis |
| `lab` | `test_method` | Single line text | Example: HPLC |
| `lab` | `certificate_url` | URL or file reference | COA/certificate link |
| `lab` | `serving_condition` | Single line text | Claim condition, for example 20 g daily context |
| `lab` | `serving_size` | Single line text | Serving size shown near buy box |
| `lab` | `daily_dose` | Single line text | Recommended daily dose |
| `lab` | `servings` | Single line text | Number of servings per size/product |
| `lab` | `warnings` | Multi-line text | Required warnings and use restrictions |

## Optional Product Metafields

| Namespace | Key | Suggested type | Purpose |
| --- | --- | --- | --- |
| `lab` | `polyphenols_mg_kg` | Number decimal or text | Measured total phenol profile |
| `lab` | `hydroxytyrosol_derivatives_per_20g` | Single line text | Qualifying analytes for EU olive oil claim |
| `lab` | `harvest_date` | Single line text | Olive oil harvest year/date |
| `lab` | `cultivar` | Single line text | Olive cultivar |
| `lab` | `ingredients` | Multi-line text | Ingredients if not handled in description |
| `lab` | `nutrition_facts` | Multi-line text | Nutrition declaration |
| `lab` | `approved_claims` | Multi-line text | Legal-reviewed copy only |

## Optional Variant Metafields

These are used by the Shopify size comparison section when final variant-specific wording is available.

| Namespace | Key | Suggested type | Purpose |
| --- | --- | --- | --- |
| `lab` | `duration` | Single line text | Duration estimate per size, filled only after final ml and dose are confirmed |
| `lab` | `use_case` | Single line text | Short use case per size, filled only after final variants are confirmed |

## Current Theme Usage

`sections/quality-passport.liquid` reads:

- `product.metafields.lab.batch_id`
- `product.metafields.lab.origin`
- `product.metafields.lab.lab_name`
- `product.metafields.lab.test_method`
- `product.metafields.lab.certificate_url`
- `product.metafields.lab.serving_condition`

`sections/main-product-lab.liquid` reads:

- `product.metafields.lab.serving_size`
- `product.metafields.lab.daily_dose`
- `product.metafields.lab.servings`
- `product.metafields.lab.warnings`

`sections/product-size-comparison.liquid` reads:

- `variant.metafields.lab.duration`
- `variant.metafields.lab.use_case`

## Claim Safety

Do not enter placeholder claims into production metafields.

For olive oil polyphenol language, verify that the batch meets the EU condition and that the 20 g daily intake context is shown near the claim.
