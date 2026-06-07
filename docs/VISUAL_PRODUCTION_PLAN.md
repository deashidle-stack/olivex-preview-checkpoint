# Visual Production Plan

## Objective

Create visuals that feel premium, scientific and specific to the products.

The key is to avoid generic supplement stock imagery. Every image should support one of these ideas:

- origin
- documentation
- daily use
- quality
- purchase confidence

## Asset Set

### Hero Image

Concept:

- Dark glass olive oil bottle
- Olive branch or grove context
- Natural stone surface
- Soft Nordic light
- Subtle lab precision

Use:

- Homepage hero
- Proposal cover

Prompt direction:

```text
Premium ecommerce hero photograph for a Norwegian evidence-backed supplement brand. Dark glass olive oil bottle on natural stone, olive leaves, soft Nordic morning light, subtle laboratory precision in the background, warm clinical mood, premium editorial composition, center-safe mobile crop, negative space for headline, no text, no seals, no medical claims.
```

### Quality Passport Image

Concept:

- Product beside certificate/lab material
- Clean white/stone surface
- Precise, calm, trustworthy

Prompt direction:

```text
Premium quality documentation scene for a Norwegian supplement ecommerce brand. Product bottle beside clean lab certificate pages, assay card, glass vial and stone surface, soft directional light, minimal Nordic design, no readable fake text, no invented certification marks, no disease imagery, high trust editorial style.
```

### Daily Ritual Image

Concept:

- Morning counter
- Measured serving
- Calm routine
- Product visible, not shouted

Prompt direction:

```text
Premium lifestyle scene showing a calm daily supplement ritual in a modern Nordic kitchen. Dark glass olive oil bottle, measured spoon, water glass, clean counter, warm morning light, adult user implied but not central, sophisticated wellness editorial, no before-after, no hospital imagery, no medical claims, space for overlay text.
```

### Producer Video From Greece

Best path:

- Use real footage from the producer, olive grove and production environment.
- Request original video, poster/still image, Norwegian captions, transcript, usage rights and approved source facts.
- Keep the video focused on origin, environment and producer presence.
- Do not use the producer video as a channel for unreviewed health, disease, medication or biomarker claims.

Use:

- Homepage producer section
- Product page origin/context module if the product relationship is confirmed
- Shopify media/metafield/metaobject source if production benefits from reusable video data

Local preview paths:

- `assets/producer-video.mp4`
- `assets/producer-video-poster.jpg`
- `assets/producer-video-no.vtt`
- `docs/producer-video-transcript-no.md`

Production gate:

- Add VideoObject only after real video, poster, upload date, duration, captions/transcript and metadata exist.

### Ingredient Atlas Image

Concept:

- Olive fruit, leaves, capsules, powder, mineral palette
- Scientific specimen layout

Prompt direction:

```text
Scientific ingredient atlas for a premium Norwegian ecommerce site. Olive fruit, olive leaves, supplement capsules, clean botanical specimen layout, subtle molecular graphic feel, warm white background, mineral green and amber accents, realistic textures, no text, no fake labels, no medical symbols.
```

### Product Packshots

Best path:

- Use real packaging photos or design files.
- If packaging does not exist yet, generate neutral mockups without final claims or certifications.

Rule:

- Do not invent dosage, certifications, seals, lab data or claim text on labels.

## Cropping Requirements

For every final visual:

- desktop crop
- mobile crop
- safe focal point
- no important content at extreme edges
- no text embedded in image
- image can tolerate dark or light overlay

## Accessibility

- Write alt text for meaningful images
- Decorative images should have empty alt
- Do not rely on image-only information
- Maintain readable text contrast over hero imagery

## Production Sequence

1. Lock brand palette and mood
2. Generate 3 hero directions
3. Select 1 direction
4. Generate matching section images
5. Replace prototype placeholders
6. QA mobile crops
7. Save final assets in project or Shopify CDN
