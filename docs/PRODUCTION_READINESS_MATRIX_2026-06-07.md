# OliveX Production Readiness Matrix - 2026-06-07

Dette er en produksjonsnær krav- og risikomatrise for OliveX. Den bygger på gjeldende preview, kundens kildetekst og offisielle kilder sjekket 7. juni 2026.

Statusnøkkel:

- `Grønn`: klart i preview eller lav risiko.
- `Gul`: riktig retning, men trenger produksjonsdata, konto eller QA.
- `Rød`: må godkjennes, erstattes eller dokumenteres før live lansering.

## Executive Summary

Previewen er god som retning og kundeopplevelse. Den er ikke klar som live butikk.

De største åpne punktene er:

1. Juridisk claim-godkjenning av helsepåstander.
2. Reelle produktdata for begge produkter.
3. COA/analysebevis, batch, lab og metode.
4. Shopify dev store med betaling, Vipps og Posten/Bring testet.
5. Produksjonsklar supportagent med godkjent kunnskapsbase.
6. Juridiske/policy-sider med selgerdata, angrerett, personvern, cookies, frakt/retur og produktmerking.
7. Performance/Core Web Vitals etter at Shopify-apper, media, video, CMP og tracking er aktivert.
8. Kundens opplæring og driftsrutiner for ordre, refund, frakt, produktdata, COA og support.
9. Endelig SEO/merchant data etter at produkt, frakt og returvilkår er klare.

## Readiness Matrix

| Område | Status | Nåværende bevis | Produksjonskrav |
| --- | --- | --- | --- |
| Brand og logo | Gul | OliveX-logo brukes i hub, forside og produktside | Endelig SVG/transparent PNG fra kunde, eventuell navneendring avklart |
| Hero og offentlig startcopy | Grønn for preview | Forside bruker kildeteksten verbatim | Juridisk/brand-godkjenning før live |
| Produkt 1 | Gul | OliveX-produkt med to planlagte størrelsesplasser og `Pris kommer` | Finalt navn, reelle størrelser, pris, bilder, SKU, GTIN hvis relevant, lager, vekt/dimensjon |
| Produkt 2 | Rød | Kun eksplisitt placeholder | Produktnavn, kategori, innhold, størrelser, pris, claims, bilder og analyse |
| Helsepåstander | Rød | Kildeteksten inneholder sykdoms-, biomarkør- og medisinlignende formuleringer | Juridisk gjennomgang mot Mattilsynet/EU før publisering |
| Godkjent EU-påstand | Gul | Polyfenolretning er relevant | Må kun brukes hvis batch oppfyller vilkår og 20 g daglig kontekst vises |
| COA/analysebevis | Rød | Preview viser `Avventer COA` | PDF, batch-ID, lab, metode, dato, verdier og godkjent forklaring |
| Produsentvideo | Gul | Video-slot og posterplassholder finnes | Video, poster, norsk teksting/transkript, komprimert format, VideoObject schema |
| Betaling | Gul | Preview viser Vipps/kort som planlagt flyt | Shopify Payments/kortleverandør, Vipps/MobilePay app, testbetaling, refund |
| Frakt | Gul | Preview viser Posten/Bring som planlagt flyt | Bring/Posten avtale, pickup point, shipping rates, etikett, tracking og retur |
| SSL/domene | Gul | Preview er noindex | Produksjonsdomene, Shopify SSL, canonical, sitemap, Search Console |
| SEO/AEO/GEO | Gul | Synlig tekst, noindex og basic schema i preview | Produktdata, MerchantReturnPolicy, shipping/return markup, Merchant Center, indeksåpning |
| FAQ | Gul | Synlig FAQ og statisk søk | Endelig FAQ etter claim review; ikke bygg SEO-strategien på FAQ rich results |
| Supportagent | Gul | Statisk guarded assistant preview | Server-side agent, godkjent kunnskapsbase, logging, eskalering og medisinsk handoff |
| Tilgjengelighet | Gul | Fokus, keyboard og overflow sjekket i preview | WCAG 2.2 AA pass, axe/Theme Check, kontrast og skjermlesertest i Shopify |
| Analytics/cookies | Gul | Preview har samtykkebanner uten tracking | Produksjons-CMP, cookieoversikt, GA4 etter samtykke, Search Console, eventplan |
| Juridisk og policy | Rød | Kort compliance-sjekkliste og browser-native readiness-side finnes | Kjøpsvilkår, angrerett/retur, personvern, cookiepolicy, frakt/levering, kontakt/selskap og produktmerking godkjent |
| Performance | Gul | Statisk preview er lett, uten tredjepartsscripts | Core Web Vitals, Lighthouse, real-device mobil, mediebudsjett og app/script-inventory i Shopify |
| Opplæring | Gul | Runbook og browser-native readiness-side finnes | Merchant training med produkter, metafields/COA, ordre, refund, frakt, FAQ/support, analytics og eskalering |

## Claim Risk Map

Følgende typer formuleringer i kildeteksten må behandles som `Rød` før produksjon:

- Påstander om å forebygge hjerteinfarkt, slag, diabetes, fettlever, Alzheimer eller kognitiv svikt.
- Påstander om blodtrykk, HbA1c, LDL, visceralt fett eller andre målbare biomarkører.
- Sammenligning med legemidler eller uttrykk som kan tolkes som legemiddelvirkning.
- Formuleringer om at produktet virker uten bivirkninger.
- Individuelle medisinske råd til personer med sykdom, medisiner, graviditet eller behandling.

Tryggere produksjonsretning:

- Vis batchanalyse og opprinnelse.
- Forklar smak, bruk, oppbevaring og dosering.
- Bruk den godkjente EU-påstanden for olivenoljepolyfenoler bare når vilkårene er oppfylt.
- Ved medisinske spørsmål: henvis til lege/farmasøyt.

## SEO/AEO/GEO Requirements

Google sier at samme grunnleggende SEO-prinsipper gjelder for AI Overviews/AI Mode. For OliveX betyr det:

- Viktig innhold må finnes som tekst, ikke bare i bilder/video.
- Strukturert data må matche synlig innhold.
- Produktdata bør ikke være endelig før pris, lager, frakt og retur er faktiske.
- FAQ skal være synlig og nyttig, men ikke prioriteres for FAQ rich results.
- Merchant Center bør kobles når produkter, frakt og retur er klare.
- Når videoen kommer, bør siden ha transkript og relevant VideoObject markup.

## Payment And Shipping Requirements

Produksjonsbutikken bør ikke love live checkout før dette er verifisert:

- Shopify store og domene aktivert.
- Kortbetaling aktivert og testet.
- Vipps/MobilePay Shopify payment app installert og testet.
- Capture/refund/kansellering testet.
- Posten/Bring leveringsvalg, hentested, etikett og tracking testet.
- Kjøpsvilkår, returvilkår, personvern og cookies godkjent.
- Juridisk selger/importør, org.nr., adresse, returadresse og kontakt synlig.
- Cookie/CMP må være godkjent før ikke-nødvendig tracking lastes.
- Core Web Vitals må testes etter at Shopify-apper, CMP, video, supportwidget og tracking er på plass.
- Kunden må ha praktisert testordre, refund, tracking, produktoppdatering og support-handoff før overtakelse.

Vipps/MobilePay Express Checkout er ikke en trygg antakelse i Shopify-oppsettet. Bruk vanlig betalingsvalg i Shopify checkout med mindre offisiell app og konto viser noe annet i test.

## Support Agent Requirements

Produksjonsagenten skal ikke være en fri medisinsk chatbot.

Krav:

- Server-side implementation.
- Godkjent kunnskapsbase med FAQ, produktdata, COA, vilkår, frakt og retur.
- File search/vector store eller tilsvarende retrieval over godkjente dokumenter.
- Harde avgrensninger for sykdom, medisin, dosering for medisinsk effekt, graviditet og behandling.
- Kilde-/statusmerking i svar der det er praktisk.
- Handoff til kundeservice eller lege/farmasøyt etter tema.
- Logging og periodisk review av ubesvarte spørsmål.

## Next Action Order

1. Få reelle produktdata for produkt 1 og produkt 2.
2. Få COA/analysebevis og final logo exports.
3. Få juridisk gjennomgang av claim-settet.
4. Opprett Shopify dev store.
5. Legg inn produkter, varianter, metafields og medieassets.
6. Konfigurer Vipps/MobilePay, kortbetaling og Posten/Bring.
7. Kjør testordre, refund, tracking og retur.
8. Fjern `noindex` først når produksjonsinnhold og juridiske krav er klare.

## Official Sources Checked

- Mattilsynet - Ernærings- og helsepåstander: https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander
- Mattilsynet - Krav til merking ved bruk av ernærings- og helsepåstander: https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander/krav-til-merking-av-matvarer-ved-bruk-av-ernaerings-og-helsepastander
- EU Register of health claims: https://food.ec.europa.eu/food-safety/labelling-and-nutrition/nutrition-and-health-claims/eu-register-health-claims_en
- European Commission - Health claims: https://food.ec.europa.eu/food-safety/labelling-and-nutrition/nutrition-and-health-claims/health-claims_en
- EFSA - Polyphenols in olive related health claims: https://www.efsa.europa.eu/en/efsajournal/pub/2033
- Google Search Central - AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central - Merchant return policy structured data: https://developers.google.com/search/docs/appearance/structured-data/return-policy
- Google Search Central - Merchant listing structured data: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- W3C - WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
- Vipps/MobilePay Shopify payment plugin: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Vipps/MobilePay Shopify FAQ: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/shopify-faq/
- Bring Developer API platform: https://developer.bring.com/
- Bring Pickup Point API: https://developer.bring.com/api/pickup-point/
- OpenAI File Search: https://platform.openai.com/docs/guides/tools-file-search/
