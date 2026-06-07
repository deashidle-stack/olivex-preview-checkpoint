# OliveX Mobile Sticky Purchase Preview - 2026-06-07

## Current Status

The product page has a mobile-only sticky purchase bar. It remains useful as an ecommerce UX pattern, but it no longer uses unsupplied size or price values.

Earlier mock values were removed on 2026-06-07.

## Preview Behavior

Current behavior:

- shows the selected OliveX product
- lets the reviewer switch between `Størrelse 1` and `Størrelse 2`
- shows `Pris kommer`
- keeps the add button disabled until real price and size data are supplied
- reflects the selected purchase plan text
- stays hidden on desktop

## Accessibility Notes

- The size control is a native `<select>`.
- The add button is a real disabled `<button>` while data is missing.
- The select has an accessible label.
- The sticky bar uses large touch targets.
- The bar is not shown on desktop, avoiding duplicate purchase controls where the buy box is already visible.

## Production Notes

Before production:

1. Confirm final product sizes, prices and inventory.
2. Connect the sticky add-to-cart action to Shopify variant IDs.
3. Confirm how subscription/fast-delivery plans are represented in Shopify.
4. Confirm the sticky bar does not cover cookie banners, chat widgets or checkout notices.
5. Re-test on iPhone Safari, Android Chrome and 200% browser zoom.

## QA Evidence

Updated QA verifies:

- desktop sticky display is hidden
- mobile sticky bar is visible at 390 px width
- switching to `Størrelse 2` works
- sticky price remains `Pris kommer`
- sticky add button remains disabled until real prices exist
- no horizontal overflow at desktop or 390 px mobile
