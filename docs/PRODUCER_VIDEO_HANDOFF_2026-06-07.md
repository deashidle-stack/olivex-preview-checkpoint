# Producer Video Handoff - 2026-06-07

This note documents how the future producer video from Greece should be collected, reviewed and added to the OliveX preview/production build.

## Current Preview Status

- The storefront has a dedicated producer-video section at `index.html#producer`.
- The section is intentionally inactive until the real video exists.
- The preview poster `assets/visuals/olivex-producer-poster-2026-06-07.jpg` is a generated direction asset only.
- No VideoObject structured data should be added for the placeholder.

## Files To Request

Ask the client/producer for:

- original video file or a downloadable high-quality link
- poster/still image from the actual producer or production environment
- Norwegian captions as `.vtt`, or source transcript/manuscript for translation
- Norwegian transcript
- producer/person name and role
- producer/estate, region and filming date or period
- rights confirmation for people, location, music, drone footage, graphics and commercial web use
- list of any product or health claims spoken in the video

## Local Preview File Paths

Use these paths when the real files arrive:

| Asset | Path |
| --- | --- |
| Web video | `assets/producer-video.mp4` |
| Poster image | `assets/producer-video-poster.jpg` |
| Norwegian captions | `assets/producer-video-no.vtt` |
| Transcript | `docs/producer-video-transcript-no.md` |

Then update `index.html`:

```html
data-video-ready="true"
```

The current `app.js` video hydrator supports:

- `data-video-src`
- `data-video-type`
- `data-video-poster`
- `data-video-captions`
- `data-video-transcript`

## Production Rules

- Treat the video as source content, not decoration.
- Do not publish unreviewed health, disease, medication or biomarker claims spoken in the video.
- Make important content available as HTML text or transcript, not only video/audio.
- Captions are required for spoken content before launch.
- Optimize video size and test mobile playback before launch.
- In Shopify production, decide whether the video belongs in Shopify media, product metafields/metaobjects, or a hosted video provider.

## SEO / Schema Gate

Add VideoObject only after the real video is live and the page has:

- visible video content
- real video name and description
- real thumbnail/poster URL
- upload date
- duration
- content URL or embed URL
- captions/transcript status reviewed

Do not add VideoObject for a placeholder.

## Review Page

Browser-native handoff page:

- `producer-video-handoff.html`

Use it in client/workshop follow-up together with:

- `production-intake.html`
- `production-build-brief.html`
- `seo-merchant-readiness.html`
- `accessibility-readiness.html`
