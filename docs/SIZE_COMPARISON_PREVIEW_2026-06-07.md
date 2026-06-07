# OliveX Size Comparison Preview - 2026-06-07

## Current Status

The product page includes a `Sammenlign størrelser` section because the original ecommerce requirement says each product should have two sizes.

The exact ml values and prices have not been supplied. Earlier preview values were removed on 2026-06-07 because they were not source-backed.

## Preview Behavior

The comparison now shows:

- `Størrelse 1`
- `Størrelse 2`
- `Pris kommer`
- `Varighet: Kommer`
- disabled action buttons

This keeps the ecommerce structure visible without inventing product data.

## Production Requirements

Before production:

1. Confirm final size names/ml for both variants.
2. Confirm actual prices, VAT and currency.
3. Confirm SKU, inventory, weight, dimensions and shipping profile.
4. Confirm daily serving guidance and allowed wording.
5. Connect table controls to final Shopify variant IDs.
6. Only then add Product/Offer structured data with prices.

## QA Evidence

Updated QA verifies:

- `Sammenlign størrelser` is present.
- the table contains two planned size rows.
- removed mock values are not present in the customer-facing HTML/JS.
- size table buttons are disabled until real prices exist.
- desktop and mobile have no horizontal overflow.
