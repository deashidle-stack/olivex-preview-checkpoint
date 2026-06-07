# OliveX Visual Refresh Checkpoint

Date: 2026-06-07
Public preview: https://deashidle-stack.github.io/olivex-preview-checkpoint/website.html
Published commit: `b03aa8c`

## Trigger

The previous storefront preview was rejected as visually too generic, too box/card heavy and too long. The requested direction was a premium Shopify-quality storefront with more visual ambition, stronger storytelling, better product focus, carousels, immersive sections and a real chatbot-style support surface.

## Changes Made

- Reworked the homepage visual layer in `styles.css` with a more premium editorial composition.
- Kept the supplied hero copy verbatim: "Mer enn en matolje. Ditt daglige, flytende kosttilskudd."
- Replaced the hero/header logo usage with cropped OliveX assets:
  - `assets/olivex-wordmark-nav.png`
  - `assets/olivex-wordmark-white-nav.png`
- Rebuilt the hero ritual panel so it no longer looks like a pale card.
- Reworked the product area into a one-product-at-a-time carousel.
- Added richer product imagery:
  - `assets/visuals/olivex-product-ritual-2026-06-07.jpg`
  - `assets/visuals/olivex-body-journey-2026-06-07.jpg`
- Rebuilt the "Hvorfor" section around a visual polyphenol comparison stage instead of three generic cards.
- Rebuilt the Oleocanthal section as a dark composition with transparent molecule line-art:
  - `assets/visuals/oleocanthal-molecule-line-2026-06-07.png`
- Reworked the body/effect section as an immersive visual learning journey.
- Converted references into a horizontal carousel-style rail.
- Compressed payment/delivery into a cleaner split section.
- Reworked support into a real chat-shell style surface with user/assistant bubbles and FAQ-grounded prompt answers.
- Limited initial FAQ rendering to five closed questions so the homepage does not behave like a long FAQ document.
- Removed m-dash/en-dash style from generated FAQ/support copy where it looked like AI copy, while keeping the supplied hero lede unchanged.
- Fixed mobile layout where the body-journey side card was inheriting desktop columns.
- Updated `scripts/build-netlify-drop-package.cjs` so the new transparent PNG is included in public deploys.
- Updated `scripts/validate-customer-copy.cjs` to require the customer-approved Oleocanthal heading without dash punctuation.

## Verification

Local checks:

```bash
node --check app.js
node --check share-preview/app.js
node --check deliverables/olivex-preview-hub-netlify-drop/app.js
node --check scripts/build-netlify-drop-package.cjs
node --check scripts/validate-customer-copy.cjs
node scripts/validate-customer-copy.cjs
node scripts/audit-preview-links.cjs . share-preview deliverables/olivex-preview-hub-netlify-drop
```

Results:

- Customer-copy validator: `problems: []`
- Link audit: `165 HTML files`, `0 problems`
- Package validator against share/drop copies: `problems: []`
- Public `website.html`: HTTP 200
- Public oleocanthal PNG asset: HTTP 200
- Public browser audit:
  - H1 correct
  - product carousel present
  - body journey present
  - chatbot shell present
  - oleocanthal transparent PNG present
  - no console errors
  - no horizontal overflow at 1351 px
- Mobile browser audit at 390 x 844:
  - no horizontal page overflow
  - body-journey mobile grid fixed
  - no console errors
- Interaction test:
  - product carousel next button switches to product 2 placeholder
  - Vipps chat prompt returns a FAQ-grounded payment answer

## Still Not Production-Ready

- Product prices, volumes, SKU/GTIN and final second product data are still missing.
- Real product photography and final producer video are still missing.
- Lab certificate PDFs and final analysis values are still missing.
- Claims still require legal/regulatory review.
- Final SVG/transparent logo exports may replace the current raster crops later.
- Native support agent backend is not implemented; current chat is a static constrained preview.
- Vipps/MobilePay, Shopify checkout, subscriptions and Posten/Bring still need real account/app setup and live testing.
- Public preview is still `noindex,nofollow`.

## Next Review Focus

Owner feedback should focus on:

- whether the new visual direction is now premium enough to continue,
- whether the homepage is still too long,
- whether the product carousel should be pushed even more toward Shopify PDP behavior,
- whether the body journey and Oleocanthal sections feel credible rather than overdesigned,
- what final imagery/video assets the owners can provide,
- what copy must be softened before legal review.
