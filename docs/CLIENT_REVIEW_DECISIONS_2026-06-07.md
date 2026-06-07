# OliveX Client Review Decisions

Status: added 2026-06-07.

## Purpose

`client-review-decisions.html` is a browser-native decision log for the OliveX preview package. It is meant to be used after the client or contact has reviewed the hub, storefront, product page and production-readiness pages.

The page separates three different states:

- approved direction
- requested changes
- missing production data

This matters because the current preview is ready for controlled review, but it is not a production Shopify store.

## What It Captures

The decision log covers:

- homepage and hero copy
- product page and purchase journey
- product 2, sizes and prices
- claims and legal language
- COA/analysebevis and origin
- visual direction and producer video
- checkout, payment and subscription
- shipping and returns
- support agent and FAQ
- SEO, AI search and Merchant Center
- legal, privacy and cookies
- training and operations

Each item can be marked as:

- Godkjent retning
- Må endres
- Mangler data
- Ikke vurdert

The generated report includes status counts, notes and open items before production.

## Privacy And Sharing

The page is static and stores draft data only in the browser through `localStorage`. It does not send data to a server. The reviewer can copy the generated Markdown report or download `.md` and `.json` files manually.

## Production Use

Use the exported report together with:

- `production-intake.html`
- `shopify-data-contract.html`
- `production-build-brief.html`
- `launch-checklist.html`
- `claim-review.html`
- `legal-policy-readiness.html`
- `checkout-readiness.html`

Do not treat a fully approved decision report as live approval by itself. Shopify production still requires final product data, COA, legal/policy inputs, payment accounts, Posten/Bring setup, checkout testing and launch QA.
