# Payment And Shipping Spec - 2026-06-07

## Formål

Dette dokumentet gjør briefens krav om Vipps, betalingskort, Posten/Bring, SSL og opplæring operasjonelt for OliveX.

Previewen viser nå en statisk kjøpsflyt. Produksjonslansering krever kontoer, godkjenninger, testordre og endelige juridiske vilkår.

Browser-native review artifact: `checkout-readiness.html`.

## Krav Fra Brief

- Vipps
- Betalingskort
- Frakt med Posten
- SSL-sertifikat
- Opplæring i bruk av nettbutikken

## Anbefalt Produksjonsstack

| Område | Anbefaling | Må Verifiseres |
| --- | --- | --- |
| Plattform | Shopify | Plan, domene, skatt/MVA, språk, personvern |
| Kort | Shopify Payments hvis tilgjengelig/godkjent for bedriften, ellers godkjent kortleverandør | Payout-konto, 2FA, test/refund-flow |
| Vipps | Vipps/MobilePay Shopify payment app | Merchant account, checkout test, refund/capture-flow |
| Frakt | Posten/Bring app/API-oppsett | Leveringsprodukter, hentested, prisregler, etiketter, sporing |
| SSL | Shopify SSL på tilkoblet domene | DNS og HTTPS aktiv etter domenekobling |
| Abonnement | Kun etter egen avklaring | Shopify subscription app + gateway-støtte + Vipps-kompatibilitet |

## Checkout UX

### Synlig For Kunden

- produkt
- størrelse
- pris
- antall
- delsum
- frakt beregnet i checkout
- Vipps som betalingsvalg
- kortbetaling som betalingsvalg
- leveringsvalg fra Posten/Bring
- ordrebekreftelse og sporing

### Ikke Lov Å Late Som Er Ferdig

Previewen skal ikke late som betaling eller frakt er live før:

- Shopify store er opprettet
- betalingskontoer er godkjent
- fraktapp/oppsett er konfigurert
- testordre er kjørt
- retur/kjøpsvilkår er godkjent
- domene/SSL er aktivert

## Vipps/MobilePay

Anbefalt Shopify-oppsett:

1. Opprett/verifiser Vipps/MobilePay merchant.
2. Installer offisiell Vipps/MobilePay payment app i Shopify.
3. Koble appen til riktig merchant.
4. Bekreft at Vipps vises som betalingsmetode i Shopify checkout.
5. Test betaling, kansellering, capture og refund.
6. Dokumenter supportflyt for mislykket betaling.

Viktig:

- Shopify Payments MobilePay-dokumentasjonen er ikke alene nok til å bevise norsk Vipps-støtte. Den må leses sammen
  med den offisielle Vipps/MobilePay Shopify-pluginen og verifiseres i faktisk norsk checkout.
- Vipps/MobilePay Express Checkout er ikke tilgjengelig i Shopify ifølge Vipps/MobilePay-dokumentasjonen, på grunn av Shopify-begrensninger.
- Vipps-abonnement må ikke loves før subscription app, gateway og vilkår er verifisert.

## Kortbetaling

Anbefalt:

1. Start med Shopify Payments hvis bedriften kvalifiserer.
2. Bekreft land, selskapsinformasjon, bankkonto, valuta, skatteinformasjon og 2FA.
3. Bekreft korttyper som skal støttes.
4. Kjør testbetaling.
5. Test refund.
6. Bekreft hvordan tvister/chargebacks håndteres.

Hvis Shopify Payments ikke er aktuelt, velg en Shopify-støttet tredjepartsleverandør for kort.

## Posten/Bring

Anbefalt:

1. Avklar Posten/Bring kundeavtale.
2. Velg Shopify app/API-oppsett.
3. Sett leveringsprodukter:
   - hentested/pakkeboks der relevant
   - hjemlevering hvis ønsket
   - eventuelt fri frakt over terskel
4. Legg inn vekt/dimensjoner per variant.
5. Test rate calculation i checkout.
6. Test etikett, tracking og ordrebekreftelse.
7. Test retur/skadet vare-prosess.

## SSL Og Domene

Shopify håndterer SSL for tilkoblet domene, men dette må testes etter DNS-kobling:

- `https://` aktiv
- ingen mixed content
- canonical URL satt
- Search Console koblet til
- sitemap tilgjengelig
- preview/noindex fjernet først når produksjonsinnholdet er klart

## Abonnement

Abonnement kan være kommersielt interessant for et daglig ritual-produkt. Previewen viser nå `Fast levering` som kjøpsvalg, men dette er ikke en live produksjonsforpliktelse.

Før abonnement:

- velg Shopify subscription app
- avklar betalingsgateway-støtte
- test recurring billing
- skriv tydelige vilkår for pause, endring, oppsigelse og refund
- avklar om Vipps/MobilePay kan brukes i ønsket subscription-oppsett
- fjern `preview`-merking først når betalingsflyt, vilkår og kundeserviceprosess er verifisert

## Tracking Og Consent

Før analytics:

- cookie banner med aksepter/avvis; statisk preview finnes, produksjon krever CMP/cookie-verktøy
- Consent Mode hvis Google tags brukes
- GA4 ecommerce events etter samtykkeoppsett:
  - `view_item`
  - `add_to_cart`
  - `begin_checkout`
  - `purchase`
- unngå markedsføringspiksler før samtykkeløsning er klar

## Testordreplan

Kjør test før lansering:

1. Størrelse 1 med Vipps.
2. Størrelse 2 med kort.
3. Feilet betaling.
4. Rabattkode hvis brukt.
5. Posten/Bring hentested.
6. Eventuell hjemlevering.
7. Ordrebekreftelse.
8. Fraktetikett.
9. Tracking.
10. Refund.
11. Kansellering.
12. Skadet vare/retur.

## Opplæring

Opplæringen bør dekke:

- redigere produkter og varianter
- endre pris/lager
- laste opp produktbilder
- lese ordre
- refundere betaling
- skrive ut fraktetikett
- følge opp tracking
- håndtere retur/skadet vare
- oppdatere FAQ/supportsvar
- sjekke betalings- og fraktrapporter

## Launch Checklist

- [ ] Shopify store opprettet
- [ ] Domene koblet
- [ ] SSL aktiv
- [ ] Produkter og varianter lagt inn
- [ ] Vekt/dimensjoner lagt inn
- [ ] Shopify Payments eller kortleverandør godkjent
- [ ] Vipps/MobilePay app installert og testet
- [ ] Posten/Bring app/API konfigurert
- [ ] Fraktpriser testet
- [ ] Etikett og tracking testet
- [ ] Kjøpsvilkår, retur, personvern og cookies godkjent
- [ ] Cookie consent konfigurert
- [ ] Testordre gjennomført
- [ ] Refund testet
- [ ] Opplæring gjennomført
- [ ] Preview `noindex` erstattet med produksjons-SEO når alt er klart

## Kilder Sjekket

- Vipps/MobilePay Shopify plugin: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Shopify MobilePay local payment method: https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/mobilepay
- Vipps/MobilePay Recurring API: https://developer.vippsmobilepay.com/docs/APIs/recurring-api/
- Shopify Payments requirements: https://help.shopify.com/en/manual/payments/shopify-payments
- Shopify subscription considerations: https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations
- Bring ecommerce resources: https://developer.bring.com/api/e-commerce-solutions/
- Bring API overview: https://developer.bring.com/
