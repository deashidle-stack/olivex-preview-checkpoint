# OliveX Client Handoff

Last updated: 2026-06-07.

## Purpose

`client-handoff.html` is the browser-native page to use when sending the OliveX preview to a client or external contact.

It exists because the storefront URL alone does not explain the preview state. The recipient should see the hub, review guide, production blockers, data contract and next-step material before evaluating the website as if it were finished.

## Recommended Share Rule

- Local project review: open `preview.html` or `client-handoff.html`.
- Netlify Drop / share package: generate the lean package with `node scripts/build-netlify-drop-package.cjs`, deploy `deliverables/olivex-preview-hub-netlify-drop/`, and send the root URL.
- Do not send only the storefront URL unless the recipient has already seen the review context.

In the share package, the root `index.html` is the preview hub and the storefront is `website.html`.

Use `preview-deploy.html` before creating or replacing the public preview URL.

## Email Draft

Use the email copy embedded in `client-handoff.html`, or use `docs/CLIENT_EMAIL_DRAFT_NO.md` for a longer version.

The short handoff text should include:

- the public preview-hub URL
- instruction to start with the review guide
- the supplied hero line: "Mer enn en matolje. Ditt daglige, flytende kosttilskudd."
- explicit caveats for missing product names, product 2, sizes, prices, COA, product photos, producer video, approved claims, Shopify, Vipps/MobilePay and Posten/Bring

## Review Order

1. `review-guide.html`
2. storefront preview
3. `product-olivex-superolje.html`
4. `content-source-map.html`
5. `claim-review.html`
6. `production-build-brief.html`
7. `shopify-data-contract.html`
8. `production-intake.html`

## Go / No-Go Before Sending

- The hub link must open the delivery overview, not only the storefront.
- The homepage hero must use the supplied source text.
- Public copy must not expose internal sales strategy language as the customer pitch.
- Mock prices, mock sizes, mock SKU values and mock analysis values must stay out of the customer-facing preview.
- Production blockers must remain visible to the client/contact.
