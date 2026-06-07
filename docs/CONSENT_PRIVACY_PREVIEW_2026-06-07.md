# OliveX Consent And Privacy Preview - 2026-06-07

## What Changed

The storefront and OliveX product page now include a preview-safe cookie consent flow.

The preview does not load analytics, marketing pixels or external tracking. It only stores the visitor's preview choice in local storage so the consent behavior can be reviewed.

## Customer-Facing Behavior

First visit:

- consent banner is visible
- optional analytics and marketing categories are denied by default
- necessary cookies are shown as always on
- reject and accept are both visible actions
- settings can be opened before saving

After saving:

- banner closes
- `Personvernvalg` appears in the footer
- the visitor can reopen the consent banner and change the choice

## Consent Categories

| Category | Preview status | Production note |
| --- | --- | --- |
| Necessary | Always on | Store/session, cart, checkout and consent storage |
| Analytics | Off until consent | GA4/ecommerce events only after Consent Mode/CMP setup |
| Marketing | Off until consent | Ads pixels only after explicit approval and policy text |

## Implementation Notes

Files changed:

- `index.html`
- `product-olivex-superolje.html`
- `app.js`
- `styles.css`
- `scripts/qa-preview.cjs`

Technical behavior:

- consent choice is stored under `olivex-consent-preview`
- optional categories default to `denied`
- HTML receives `data-analytics-consent` and `data-marketing-consent`
- no tracking scripts are loaded
- mobile sticky purchase bar is hidden while the consent banner is open to avoid overlap

## Production Requirements

Before live launch:

1. Choose Shopify-compatible CMP/cookie tool.
2. List actual cookies and local storage entries by purpose, provider, duration and category.
3. Add final privacy policy and cookie policy.
4. Configure Google Consent Mode before GA4 or ads tags fire.
5. Keep analytics and marketing tags blocked until consent is granted.
6. Test accept, reject, save custom choices and withdrawal of consent.
7. Confirm the banner does not conflict with mobile sticky purchase, chat widgets or checkout notices.

## QA Evidence

Headless Chrome runtime QA verified:

- first visit shows consent banner
- analytics and marketing default to `denied`
- settings opens category controls and save button
- custom save can grant analytics while marketing remains denied
- `Personvernvalg` reopens the banner
- reject saves analytics and marketing as denied
- mobile sticky purchase bar is hidden while the banner is open
- mobile sticky purchase bar returns after consent is accepted
- no horizontal overflow on desktop or 390 px mobile

Screenshots:

- `qa/consent-banner-home-2026-06-07.png`
- `qa/consent-banner-mobile-2026-06-07.png`

## Source References

- Datatilsynet, cookies/informasjonskapsler: https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/cookies/
- Nkom, informasjonskapsler: https://nkom.no/internett/informasjonskapsler-cookies
- EDPB, consent guidelines: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en
- Google, Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
