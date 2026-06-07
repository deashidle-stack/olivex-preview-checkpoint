# Presentation Package

## Open Files

Client presentation:

`deck/index.html`

Visual concept board:

`concept-board/index.html`

## Intended Use

Use the deck as the first client-facing walkthrough:

1. Reframe the brief
2. Explain why the opportunity is bigger than copying Agelab
3. Introduce the Quality Passport concept
4. Show the recommended Shopify stack
5. Show the visual direction
6. Land on the recommended next step

Use the concept board as the visual production brief:

- palette
- image direction
- prompt skeletons
- rules for generated imagery
- guardrails against invented product facts

## Export To PDF

Open `deck/index.html` in a browser and print to PDF.

Recommended browser print settings:

- Layout: landscape if available
- Margins: none or minimum
- Background graphics: enabled
- Scale: fit to page

The deck includes print CSS that treats each slide as a separate page.

## Current Limitations

- This is an HTML presentation, not a PowerPoint file.
- Images are remote placeholder references, not final product assets.
- Browser screenshot QA is still pending because the local Playwright browser binary is missing.
- Product data, prices, claims and lab values remain placeholders.

## Next Upgrade

After the client direction is approved:

- replace placeholder imagery with generated or real assets
- create a PDF export
- optionally rebuild as PPTX if the client needs editable PowerPoint
- convert accepted sections into Shopify theme sections
