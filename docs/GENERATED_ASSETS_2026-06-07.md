# Generated Assets - 2026-06-07

## Purpose

Replace generic remote placeholder imagery with project-local, fact-neutral OliveX visuals.

These images are for preview use only. They do not show final product packaging, final labels, certificates, lab values or approved claims. Final production should use real product photography, final packaging files and the producer video from Greece.

## Files

| Asset | Preview path | Source PNG | Use |
| --- | --- | --- | --- |
| OliveX hero editorial | `assets/visuals/olivex-hero-editorial-2026-06-07.jpg` | `assets/visuals/olivex-hero-editorial-2026-06-07.png` | Homepage hero and OliveX product-card visual |
| Producer poster | `assets/visuals/olivex-producer-poster-2026-06-07.jpg` | `assets/visuals/olivex-producer-poster-2026-06-07.png` | Placeholder background for Greece producer-video section |
| Product placeholder | `assets/visuals/olivex-product-placeholder-2026-06-07.jpg` | `assets/visuals/olivex-product-placeholder-2026-06-07.png` | Product 2 placeholder visual while real product data is missing |
| Body journey: heart | `assets/visuals/body-journey/olivex-body-heart-2026-06-07.jpg` | `ig_06e62322d1cfef97016a25def58e7c8191a7991a37806c96f7.png` | Visual storytelling panel for Hjerte tab |
| Body journey: metabolic | `assets/visuals/body-journey/olivex-body-metabolic-2026-06-07.jpg` | `ig_06e62322d1cfef97016a25df4742b88191b75aa2c92d55062b.png` | Visual storytelling panel for Metabolsk tab |
| Body journey: liver | `assets/visuals/body-journey/olivex-body-liver-2026-06-07.jpg` | `ig_06e62322d1cfef97016a25df8ef640819191a6970406b05d97.png` | Visual storytelling panel for Fettlever tab |
| Body journey: brain | `assets/visuals/body-journey/olivex-body-brain-2026-06-07.jpg` | `ig_06e62322d1cfef97016a25e046846c8191a359b80837c3bb28.png` | Visual storytelling panel for Hjerne tab |

JPEGs are used by the site for web weight. PNGs are kept as generated source files.

## Generation Method

Mode: built-in `image_gen` tool.

Default save directory:

`/Users/andreas/.codex/generated_images/019dc143-bc12-73d3-9b7a-0baad905560b/`

Copied source files:

- `ig_03d91a137ba18cd4016a24a16b05248191b098c1edb85a41a0.png`
- `ig_03d91a137ba18cd4016a24a19435648191b5da963367f162af.png`
- `ig_03d91a137ba18cd4016a24a1fca1948191ba6ad905a0ff8a50.png`
- `ig_06e62322d1cfef97016a25def58e7c8191a7991a37806c96f7.png`
- `ig_06e62322d1cfef97016a25df4742b88191b75aa2c92d55062b.png`
- `ig_06e62322d1cfef97016a25df8ef640819191a6970406b05d97.png`
- `ig_06e62322d1cfef97016a25e046846c8191a359b80837c3bb28.png`

Conversion:

```bash
sips -s format jpeg -s formatOptions 84 <source.png> --out <web.jpg>
```

## Prompts

### OliveX Hero Editorial

```text
Use case: product-mockup
Asset type: ecommerce homepage hero background for a Norwegian premium high-phenolic olive oil brand.
Primary request: Create a cinematic, premium editorial hero image for OliveX without any visible text or logo.
Scene/backdrop: dark green glass olive oil bottle, early-harvest green olives and olive leaves on natural pale stone, subtle Nordic morning light, quiet laboratory precision suggested only through clean glassware far in the background, no medical environment.
Subject: unbranded dark glass olive oil bottle with no readable label, olive branch, measured spoon with golden olive oil, refined premium ecommerce mood.
Composition: wide landscape image, strong negative space on the left for white headline text, product/world detail on the right and lower center, mobile crop safe, high contrast but not gloomy.
Style: photorealistic-natural, premium editorial, realistic texture, soft directional light, restrained color palette of deep olive green, warm gold, off-white stone.
Constraints: no words, no labels, no logos, no seals, no certifications, no lab results, no fake claims, no disease imagery, no pills, no people, no watermark.
```

### Producer Poster

```text
Use case: photorealistic-natural
Asset type: producer video placeholder poster for OliveX ecommerce section.
Primary request: Create a premium still image that can sit behind a 'video coming' placeholder for a Greek olive oil producer presentation.
Scene/backdrop: Mediterranean olive grove in Greece at early morning, silver-green olive trees, stone path, distant low hills, warm sunlight, calm authentic agricultural environment.
Subject: olive grove and production environment only, with a simple wooden crate of green olives in the foreground and a blurred olive press building in the distance.
Composition: wide landscape, center safe for a translucent play placeholder overlay, no text, no people, premium documentary feel, natural depth.
Style: photorealistic-natural, high-end documentary, restrained, authentic, not touristy, not stock-like.
Constraints: no words, no logos, no labels, no fake certifications, no medical symbols, no disease imagery, no watermark, no dramatic fantasy colors.
```

### Product 2 Placeholder

```text
Use case: product-mockup
Asset type: neutral ecommerce product placeholder image for a product card where final product data is not available.
Primary request: Create a premium neutral placeholder visual for 'product data pending' without any text or implied specific product.
Scene/backdrop: natural pale stone surface, folded off-white paper sleeve or blank card, olive leaf detail, soft Nordic light, refined minimal composition.
Subject: no bottle, no jar, no supplement pack, no label; just neutral materials that signal pending product information and premium brand world.
Composition: vertical-product-card friendly crop, strong simple shapes, enough contrast for overlay badge, calm and understated.
Style: photorealistic-natural, premium editorial, tactile stone and paper textures, off-white, muted olive green, warm gold accent.
Constraints: no words, no logos, no labels, no fake certifications, no seals, no medical symbols, no product claims, no people, no watermark.
```

## QA Notes

- No generated image contains readable product claims or certification text.
- Hero image is decorative in the current HTML and has empty `alt`.
- Product-card images use product names as alt text through the card renderer.
- Producer poster is a CSS background on a video placeholder. The real video still needs captions and transcript before production.
- Body journey images are preview illustrations for storytelling. They must not be presented as medical proof, diagnostic imagery or lab documentation.
