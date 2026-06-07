# OliveX Request Coverage - 2026-06-07

Dette dokumentet mapper opprinnelig nettbutikkforespørsel mot gjeldende preview, produksjonsplan og manglende kundedata.

## Konklusjon

Previewen dekker den ønskede butikkopplevelsen som reviewbar prototype:

- OliveX-brand og logo.
- Nettbutikkstruktur.
- To produktplasser.
- To størrelsesplasser per produkt.
- Vipps og kortbetaling som checkout-retning.
- Posten/Bring som fraktretning.
- Premium norsk designretning inspirert av Agelab, men med egen OliveX-identitet.
- Mobiltilpasset storefront, produktside og hub.
- SEO/AEO/merchant readiness.
- FAQ/supportagent-retning.
- Opplæring/drift-plan.
- SSL som produksjonskrav via Shopify og public preview via Netlify.

Previewen er ikke live-butikk. Produksjon krever ekte produktdata, kontoer, COA/analysebevis, juridisk godkjenning, Shopify-oppsett, betaling, frakt, personvern/policy og testordre.

## Nettbutikkspesifikasjoner

| Krav | Previewstatus | Produksjonskrav |
| --- | --- | --- |
| 2 produkter | Produkt 1 er OliveX høyphenolitisk olje. Produkt 2 er placeholder. | Endelig produkt 2 med navn, innhold, claims, bilder, analyse og pris. |
| 2 størrelser per produkt | Produktkort og produktside støtter `Størrelse 1` og `Størrelse 2`. | Reelle ml, SKU, vekt, pris, lager, varighet/porsjoner og variant-ID-er. |
| Vipps | Vises i storefront, cart, checkout readiness og launch checklist. | Vipps/MobilePay merchant, Shopify app og testbetaling/refund. |
| Betalingskort | Vises i kjøpsreise og produksjonsbrief. | Shopify Payments eller valgt leverandør, testordre, capture, refund og feilet betaling. |
| Posten/Bring | Vises i checkout readiness, produktside og launch gates. | Avtale/app/API, fraktvalg, hentested, etikett, tracking, retur og skadet vare. |
| Design inspirert av Agelab | Premium, ryddig og produktnær retning er etablert med OliveX-logo og lokale visuals. | Endelige produktfoto, emballasje, logoeksporter, produsentvideo og brand-avklaringer. |

## Inkludert I Leveransen

| Leveransepunkt | Status |
| --- | --- |
| Design og utvikling av nettbutikk | Dekket som preview med forside, produktside, handlekurvretning, FAQ/support, video-slot, consent og mobil sticky purchase. |
| Oppsett av betalingsløsninger | Dekket som plan og checkout readiness. Krever Shopify/Vipps/kortkontoer før produksjon. |
| Oppsett av fraktløsninger | Dekket som plan for Posten/Bring. Krever avtale, app/API og test. |
| Opplæring i bruk av nettbutikken | Dekket med `training-ops-readiness.html` og `docs/TRAINING_RUNBOOK.md`. |
| Grunnleggende SEO | Dekket med SEO/AEO readiness, schema/merchant plan og noindex-preview. |
| Mobiltilpasning | Dekket og QA-testet på mobile viewports. |
| SSL-sertifikat | Shopify SSL er produksjonskrav. Public Netlify preview får SSL fra Netlify. |

## Hvor Kravene Kan Kontrolleres

- `index.html`: storefront preview.
- `product-olivex-superolje.html`: produktside, størrelser, analysebevis-status og kjøpsretning.
- `checkout-readiness.html`: Vipps, kort, Posten/Bring, SSL, testordre og fast levering.
- `seo-merchant-readiness.html`: SEO/AEO, Merchant Center, schema og noindex gates.
- `support-agent-kb.html`: supportagent knowledge base.
- `support-agent-testbench.html`: agent guardrail og medisinsk handoff-test.
- `training-ops-readiness.html`: opplæring/drift.
- `production-build-brief.html`: anbefalt Shopify-produksjon.
- `shopify-data-contract.html`: felt og datakilder før produksjon.
- `production-intake.html`: hva kunden må levere.
- `launch-checklist.html`: operativ lanseringssjekkliste.

## Ikke Lås Før Kunden Leverer

- Produkt 2.
- Eksakte størrelser, priser, SKU, vekt, lager og GTIN hvis relevant.
- COA/analysebevis med batch, lab, metode, dato, verdier og PDF.
- Endelig logo, packshots, emballasje og produsentvideo.
- Juridisk godkjente påstander og FAQ-svar.
- Shopify dev store og produksjonsdomene.
- Shopify Payments/kort og Vipps/MobilePay.
- Posten/Bring-avtale og testet frakt.
- Kjøpsvilkår, personvern, cookies, retur, selgerdata og supportansvar.
- Client training med reelle ordre/refund/fraktøvelser.

## Anbefaling

Bruk `request-coverage.html` i kunde- eller reviewmøtet for å vise at briefen er dekket som opplevelse, samtidig som det er tydelig hva som fortsatt må inn før live Shopify-produksjon.
