# OliveX Visual Direction - 2026-06-07

## Purpose

This document defines how OliveX should use generated images, real product assets and producer video without weakening trust.

The rule is simple:

- Use generated images for art direction, atmosphere, safe backgrounds and crop exploration.
- Use real product data, real certificates and real Shopify data for proof.

## Browser Review

Review the browser-native version here:

`visual-direction.html`

It should be used before commissioning new GPT Image 2 assets, product packshots, producer-video crops or Shopify production media.

## Current Assets

The current static preview uses three project-local generated assets:

| Asset | Path | Status |
| --- | --- | --- |
| Hero editorial | `assets/visuals/olivex-hero-editorial-2026-06-07.jpg` | Preview only |
| Producer poster | `assets/visuals/olivex-producer-poster-2026-06-07.jpg` | Replace with real video still |
| Product 2 placeholder | `assets/visuals/olivex-product-placeholder-2026-06-07.jpg` | Replace when product 2 is defined |

Source prompts and conversion notes are documented in `docs/GENERATED_ASSETS_2026-06-07.md`.

## Approved Uses For GPT Image 2 / Image Generation

Use generated imagery for:

- hero art direction
- moodboards
- lighting tests
- mobile and desktop crop exploration
- neutral background plates
- safe non-factual environment images
- editing/cropping real product photography after the real packshot exists

Do not use generated imagery for:

- fake COA or lab reports
- readable label copy
- QR codes
- certifications or seals
- dosage or nutrition facts
- polyphenol, oleocanthal or batch values
- synthetic producer, doctor, pharmacist, lab technician or customer endorsement
- disease, medication or biomarker imagery

## Production Visual Roles

### Product World

Purpose:

- establish OliveX as premium, calm and product-specific
- support the supplied public copy without turning internal documentation strategy into the pitch

Needed for production:

- final packaging
- approved logo exports
- desktop/mobile hero crops

### Daily Ritual

Purpose:

- show how the product fits a simple daily routine
- make "en spiseskje om dagen" concrete

Constraints:

- no before/after visuals
- no body transformation
- no hospital or disease context
- no implied medical treatment

### Documentation Environment

Purpose:

- communicate that analysis certificates and batch data exist in the shopping experience
- avoid turning fake documents into proof

Constraints:

- generated scenes may contain unreadable paper texture only
- actual COA PDF or image must come from the client or lab
- visible values must match real batch data

### Origin And Producer Video

Purpose:

- show olive grove, producer, environment and production setting in Greece
- create specificity and trust through real source media

Production requirements:

- video file
- poster image
- captions
- transcript
- rights confirmation
- approved source facts
- VideoObject metadata only after the real video is live

### Product 2

Purpose:

- keep the product grid structure ready without inventing product details

Constraint:

- no generated bottle, jar, packaging, label or claim until product 2 is defined.

## Prompt Library

### Hero V2

```text
Premium photorealistic ecommerce image for OliveX, a Norwegian high-phenolic olive oil brand. Dark green glass olive oil bottle without readable label, early-harvest olives, measured spoon, pale natural stone, Nordic morning light, strong negative space for headline, mobile crop safe, no words, no logo, no seals, no certificates, no lab values, no medical imagery.
```

### Daily Ritual

```text
Calm daily olive oil ritual in a modern Nordic kitchen. Measured spoon with golden olive oil, water glass, pale stone counter, morning light, refined wellness editorial composition, no people as central subject, no before-after, no medical context, no text, no labels, no claims.
```

### Documentation Environment

```text
Premium product documentation environment for an ecommerce olive oil brand. Unreadable certificate paper texture, glassware, pale stone, soft directional light, precise and trustworthy mood, no readable text, no values, no stamps, no QR code, no fake certifications, no disease imagery.
```

### Producer Video Poster

```text
Greek olive grove at early morning, silver-green trees, stone path, olive harvest atmosphere, restrained documentary feel, center-safe composition for video play overlay, no text, no logo, no people unless rights are confirmed, no dramatic fantasy colors, no medical symbols.
```

### Product 2 Placeholder

```text
Neutral premium ecommerce placeholder scene for future product data. Pale stone, folded off-white paper sleeve, olive leaf detail, warm Nordic light, no bottle, no jar, no supplement pack, no label, no text, no claims, no certification marks.
```

## QA Gates

Before any visual is shipped:

- Desktop crop approved.
- Mobile crop approved.
- No important subject is hidden by sticky UI, cookie banner or text overlay.
- Meaningful images have alt text.
- Decorative images have empty alt.
- Image weight is aligned with performance budget.
- No generated visual contains fake product facts.
- Any visible product proof matches Shopify data, COA, schema and Merchant Center feed.

## Official Source Baseline

Checked on 2026-06-07:

- OpenAI image generation guide: `https://platform.openai.com/docs/guides/image-generation`
- OpenAI Responses image generation tool: `https://platform.openai.com/docs/guides/tools-image-generation/`
- GPT Image 2 model page: `https://developers.openai.com/api/docs/models/gpt-image-2`

## Current Decision

Keep generated visuals in preview and art-direction roles. Do not present generated visuals as factual product proof. Production should replace preview imagery with real packshots, producer video, final logo exports and real certificate assets before noindex is removed.
