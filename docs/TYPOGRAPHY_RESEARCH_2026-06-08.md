# OliveX Typography Research

Date: 2026-06-08

## Question

Find a heading font that feels close to the OliveX logo, works for a premium wellness/ecommerce site in June 2026, and improves the homepage hero hierarchy.

## Logo Evidence

`pdffonts assets/Logo_OliveX_020620261452.pdf` reports embedded fonts:

- `Times-Roman`
- `TimesNewRomanPS-ItalicMT`
- `CenturyGothic`
- `Prompt-Thin`
- `Galvji-Bold`

The visible OliveX wordmark reads closest to a classic Times/Garamond-style serif, not a modern sans. Directly using Times or Times New Roman on the website would technically resemble the source, but it would make the site feel too default/document-like for a premium ecommerce experience.

## Current Market Direction

Research notes:

- 2026 typography trend coverage points to a return of elegant serif/display serif typography for brands that need warmth, humanity and differentiation.
- Luxury ecommerce research still emphasizes restrained typography systems, whitespace and performance. The font should carry personality without adding several heavy families.
- Typewolf usage data still shows Garamond as a known web/design reference, and Cormorant has current usage examples.

Sources:

- Creative Bloq, `Breaking rules and bringing joy: top typography trends for 2026`
- Creative Bloq, `Why AI brands are obsessed with serif fonts`
- Imaginaire, `Website design trends for luxury ecommerce websites`
- Typewolf, `Font Usage Data From 2013 to 2026`
- Typewolf, `Canela Font Combinations & Free Alternatives`

## Candidates

### Cormorant Garamond

Best fit for this preview.

Why:

- Open-source and available through Google Fonts.
- Designed as a display family, not just a book-text serif.
- Inspired by Garamond heritage, which keeps it close to the logo's classic serif mood.
- Softer and more premium than Georgia at large sizes.
- Lighter footprint and lower licensing friction than paid luxury display fonts.

Tradeoff:

- It is not as bespoke as a paid foundry face.
- Should be self-hosted in final production for performance/privacy control.

Sources:

- `https://github.com/CatharsisFonts/Cormorant`
- `https://fonts.google.com/specimen/Cormorant+Garamond`

### Canela

Best paid/premium alternative.

Why:

- Strong luxury/editorial reputation.
- Typewolf documents broad use in premium websites and points to Canela as a display face with an inscriptional quality.
- Would probably feel slightly more “award-winning brand system” than Cormorant.

Tradeoff:

- Requires commercial webfont licensing.
- Needs approval and procurement before production.

Sources:

- `https://commercialtype.com/catalog/canela`
- `https://www.typewolf.com/canela`

### Instrument Serif

Good modern editorial alternative, but less close to the current logo.

Why:

- Free Google font.
- Contemporary, condensed and fashionable.

Tradeoff:

- More trend-led and less connected to the OliveX wordmark.
- Fewer weights for a complete heading system.

Source:

- `https://fonts.google.com/specimen/Instrument+Serif`

### EB Garamond

Good classic alternative, but too literary for this site.

Why:

- Strong Garamond heritage.
- Excellent for editorial reading.

Tradeoff:

- Less distinctive in large commercial hero headings.
- More bookish than wellness/ecommerce.

## Recommendation

Use `Cormorant Garamond` for all major headings in the preview:

- `h1`, `h2`, `h3`
- homepage hero
- product-page title
- section headings

Keep Inter/system sans for body copy, navigation, buttons, forms and commerce UI. This gives the site a calm premium contrast: expressive serif for brand/story, utilitarian sans for buying and support.

If OliveX later wants a higher-end paid typographic system, evaluate Canela as the first paid candidate.

## Implemented In Preview

- Added `Cormorant Garamond` from Google Fonts to homepage and PDP.
- Added `--display-font` CSS token.
- Overrode heading typography to use the display font.
- Rebuilt homepage hero heading into three controlled lines:
  - `Mer enn en matolje.`
  - `Ditt daglige,`
  - `flytende kosttilskudd.`
- Reduced hero heading size so desktop render is three lines instead of five.
- Lifted the CTA/button area and adjusted the ritual card position to improve hero breathing room.

Local verification evidence:

`artifacts/visual-review-2026-06-08/hero-type-pass-r2/`
