# AI Visual Direction

Use generated imagery for campaign visuals, section backgrounds, ingredient scenes and scientific editorial art. Use real product references or photography for final packshots.

Current generated preview assets are documented in `docs/GENERATED_ASSETS_2026-06-07.md`.

## Visual System

1. Provenance Meets Precision
   - Olive groves, dark glass bottle, macro oil droplet, clean lab cues
   - Best for hero and origin sections

2. Daily Longevity Ritual
   - Morning counter, measured serving, water glass, calm Nordic light
   - Best for usage and subscription sections

3. Evidence Library
   - Ingredient card, assay texture, molecular pattern, batch report fragments
   - Best for documentation and science pages

4. Ingredient Atlas
   - Olive fruit, leaves, botanical specimens, origin maps, capsules
   - Best for product comparison and education

5. Quality Transparency
   - Bottle plus certificate, lot number and lab surface
   - Best for Quality Passport and trust modules

## Prompt Skeleton

```text
Premium ecommerce product photograph for a Norwegian evidence-backed supplement brand.
Subject: [exact product / ingredient].
Scene: warm Nordic lab-meets-natural-material setting, stone surface, soft directional light.
Style: precise, premium, editorial, realistic, not generic wellness stock.
Constraints: no invented certifications, no medical claims, no disease imagery, no fake study text, no unreadable label claims.
Composition: center-safe crop for mobile, clear negative space for headline, accessible contrast area.
```

## Production Rules

- Keep lighting and materials consistent across assets
- Do not generate labels with claims, dosage, lab seals or certifications unless they are supplied
- Avoid text embedded in generated imagery
- Validate mobile crops before publishing
- Write alt text for every meaningful image
- Store final selected assets in the Shopify theme or CDN, not in temporary generation folders
