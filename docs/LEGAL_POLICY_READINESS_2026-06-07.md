# Legal And Policy Readiness - 2026-06-07

This note documents the legal/policy readiness gate for the OliveX Shopify production build. It is not legal advice. The client or a qualified advisor must approve final policy text before launch.

## Browser Review Page

- `legal-policy-readiness.html`

## Required Policy Pages

Before launch, the Shopify store should include:

- Kjøpsvilkår
- Personvernerklæring
- Cookiepolicy
- Frakt og levering
- Retur, angrerett og reklamasjon
- Kontakt og selskap
- Kvalitet og dokumentasjon
- Fast levering/subscription terms if recurring delivery is in v1
- Support/agent scope if an AI support flow is enabled

## Customer Data Needed

Ask the client for:

- legal seller/importer name
- organization number
- postal address and return address
- contact email and support owner
- legal product category
- net quantity per size
- ingredients, allergens and origin
- daily dose, storage and warnings
- payment methods that will actually be enabled
- shipping services, prices, delivery windows and geographic restrictions
- refund, return, damaged-item and unclaimed-parcel process
- Shopify, payment, shipping, support, analytics, newsletter and AI/support data processors
- cookie/CMP and Google/ads tracking decisions
- approved claims and forbidden claims
- COA/analysebevis per batch

## Production Surfaces

Policy information must appear in:

- Footer: legal seller, org number, address, contact and policy links.
- Product page: legal product category, size, ingredients, dose, warnings, storage, COA and seller/importer link.
- Cart: price/shipping status, payment direction and policy links.
- Checkout: final price, shipping, payment method and terms.
- Cookie banner: reject, accept, preferences and change choice.
- Support agent: policy-bound answers and escalation for medical/order-specific issues.

## No-Go Risks

Do not launch while any of these remain unresolved:

- no visible legal seller/importer details
- tracking or marketing pixels firing before consent
- unresolved health/medical claims
- subscription/fast delivery promised without terms and payment testing
- invented delivery times or shipping prices
- product labeling fields missing or based on assumptions

## Official Source Baseline

Use current official guidance when finalizing:

- Forbrukertilsynet: `https://www.forbrukertilsynet.no/`
- Forbrukerrådet: `https://www.forbrukerradet.no/`
- Datatilsynet: `https://www.datatilsynet.no/`
- Mattilsynet, food labeling: `https://www.mattilsynet.no/mat-og-drikke/merking-av-mat`
- Altinn, business operation: `https://www.altinn.no/starte-og-drive/`
- Shopify legal pages: `https://help.shopify.com/en/manual/privacy-and-security/privacy/legal-pages`

## Production Decision

Keep the current preview `noindex`. Do not remove noindex or present the site as a live store until legal/policy pages, checkout terms, privacy/cookies, claims, product labeling, shipping and support boundaries are complete and approved.
