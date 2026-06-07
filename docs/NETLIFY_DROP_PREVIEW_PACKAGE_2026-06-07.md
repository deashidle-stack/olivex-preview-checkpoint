# Netlify Drop Preview Package

Last updated: 2026-06-07.

## Purpose

The OliveX preview needs a shareable public URL where the first page is the preview hub, not the storefront.

Use the generated lean Drop package for that:

- Folder: `deliverables/olivex-preview-hub-netlify-drop/`
- ZIP archive: `deliverables/olivex-preview-hub-netlify-drop.zip`
- Build command: `node scripts/build-netlify-drop-package.cjs`

## Source Checked

Official source checked 2026-06-07:

- Netlify Docs, Create deploys: `https://docs.netlify.com/deploy/create-deploys/`

Relevant current guidance:

- Manual deploys do not run a build command.
- Netlify Drop accepts a project folder containing site files such as `.html` files.
- Updates to a drag-and-drop site are done by rebuilding locally and dragging the updated output folder to the deploy dropzone.

## Package Rule

The root `index.html` in the Drop package must be the preview hub.

The storefront must remain `website.html`.

This prevents the public Netlify URL from opening only the storefront and losing the review guide, caveats, production data requirements and Shopify data contract.

## Why Not Deploy The Full `share-preview/` Folder?

`share-preview/` is useful as the complete local/share working package, but it includes the QA screenshot archive and source assets that are not rendered by the public preview. Those files are not needed for client review and make uploads slower.

The build script copies `share-preview/` into `deliverables/olivex-preview-hub-netlify-drop/` while excluding:

- `qa/`
- `.DS_Store`
- macOS `._*` / `__MACOSX` metadata
- the supplied logo PDF
- intermediate logo render exports
- raw generated PNG visual sources

The lean package still keeps:

- preview hub
- storefront
- product page
- review guide
- client handoff
- deploy instructions
- source map
- claim review
- checkout readiness
- SEO/AEO readiness
- accessibility readiness
- support KB review
- production build brief
- Shopify data contract
- launch checklist
- docs
- Shopify scaffold
- rendered JPG visual assets
- web-ready OliveX logo assets
- noindex controls

## Search Protection

The preview is not production content. The package keeps:

- `meta name="robots" content="noindex,nofollow"` in HTML pages
- `robots.txt`
- `_headers` with `X-Robots-Tag: noindex, nofollow`

This is still not a substitute for password protection if sensitive content is added later.

## Send Flow

1. Run `node scripts/build-netlify-drop-package.cjs`.
2. Open `deliverables/olivex-preview-hub-netlify-drop/`.
3. Drag that folder to Netlify Drop.
4. Open the public root URL.
5. Confirm root shows the preview hub.
6. Confirm `Åpne nettsiden` goes to `website.html`.
7. Open `Kundehandoff`.
8. Paste the public root URL into the email text.
9. Send the root URL, not `website.html`.

## Validation

Current validation after adding this package:

- `node scripts/audit-preview-links.cjs`
- `node --check app.js`
- `node --check share-preview/app.js`
- `node --check scripts/qa-preview.cjs`
- `node --check share-preview/scripts/qa-preview.cjs`
- browser QA against local package and lean deploy package
