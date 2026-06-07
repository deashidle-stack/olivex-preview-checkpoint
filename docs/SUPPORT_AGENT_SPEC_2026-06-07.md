# OliveX Support Agent Spec - 2026-06-07

## Formål

OliveX bør ha en kontrollert FAQ/support-agent som hjelper kunden med praktiske spørsmål uten å gi medisinske råd eller finne opp produktfakta.

Agenten skal:

- svare på bruk, smak, oppbevaring, dosering, analysebevis, betaling, frakt, retur og status
- bruke godkjent kunnskapsbase som kilde
- vise når noe mangler eller må avklares
- eskalere ukjente eller medisinske spørsmål
- aldri gi personlige helse-, sykdoms- eller medisinråd

## Nåværende Preview

Previewen har en statisk, regelbasert assistent i `index.html` og `app.js`.

Det finnes også en nettleservennlig review-side i `support-agent-kb.html` med kunnskapsbase-status, intents,
svarpolicy, testmatrise og go/no-go-liste for fremtidig FAQ/supportagent.

Det finnes i tillegg en nettleservennlig testbenk i `support-agent-testbench.html`. Den tester spørsmål mot en statisk
intent-/guardrailmodell, viser kildestatus, simulerer produksjonsmodus, kjører standardtest-suite og eksporterer en
JSON-testrapport. Dette er fortsatt ikke en live LLM-agent.

Den dekker:

- foreslåtte spørsmål
- tematreff for steking, oppbevaring, dosering, smak, analysebevis, betaling, frakt, abonnement og retur
- medisinsk handoff for sykdom, medisiner, graviditet, behandling og lignende
- utvidet handoff for biomarkører, hjerte/slag, fettlever, diabetes, betennelse, kognitiv svikt, bivirkninger og dosering ved sykdom
- kilde/status-linje i svar
- ukjent-spørsmål-eskalering
- statusbrikker i storefront som viser at assistenten er `Preview`, `Kildebundet` og har `Medisinsk handoff`
- separat testbenk for manuelle spørsmål, standardtester og eksport av testresultat

Dette er ikke en live LLM-agent. Det er en UX- og sikkerhetsprototype.

## Anbefalt Produksjonsarkitektur

Anbefaling: bygg agenten med OpenAI Responses API og `file_search` over en godkjent OliveX-kunnskapsbase.

Ikke bygg ny løsning på Assistants API. OpenAI dokumenterer at Assistants API er deprecated og skal stenges 26. august 2026.

### Komponenter

1. **Frontend-widget**
   - Innebygd på Shopify-temaet.
   - Norsk språk.
   - Foreslåtte spørsmål.
   - Tydelig eskaleringsvei til e-post/kundeservice.
   - Ingen skjult medisinsk rådgivning.

2. **Server-side endpoint**
   - Shopify app proxy, serverless endpoint eller separat backend.
   - Holder API-nøkler utenfor nettleseren.
   - Logger kun nødvendige data.
   - Rate limiting og abuse-beskyttelse.

3. **OpenAI Responses API**
   - Bruk `file_search` tool.
   - Knytt til én eller flere vector stores.
   - Hent søkeresultater/citations ved behov med `include=["file_search_call.results"]`.

4. **Godkjent kunnskapsbase**
   - FAQ.
   - Produktdata.
   - Analysebevis/COA.
   - Kjøpsvilkår.
   - Frakt og retur.
   - Betaling/Vipps/kort.
   - Personvern.
   - Juridisk godkjente claims.

5. **Guardrail-lag**
   - Pre-filter for medisinske ord.
   - Systeminstruks om å holde seg til kilder.
   - Maksimal svarlengde.
   - Handoff når kildegrunnlag mangler.
   - Logging av ubesvarte spørsmål for FAQ-forbedring.

## Kunnskapsbase

### Før Lansering

Ingest kun dokumenter som er godkjent for kundesvar:

| Dokument | Status | Kommentar |
| --- | --- | --- |
| FAQ om superoljen | Delvis | Må juridisk vurderes før live-agent bruker medisinske formuleringer |
| Produktdata | Mangler | Trengs for navn, størrelser, priser, dosering og ingredienser |
| Analysebevis/COA | Mangler | Trengs for batchsvar |
| Frakt og retur | Mangler | Trengs for leverings-/retursvar |
| Kjøpsvilkår | Mangler | Trengs for juridisk presisjon |
| Personvern/cookies | Mangler | Trengs før live chat og logging |
| Vipps/kort oppsett | Mangler | Trengs for betalingsspørsmål |

### Metadata

Hvert dokument bør merkes med:

- `doc_type`: `faq`, `product`, `coa`, `shipping`, `returns`, `legal`, `payment`
- `language`: `nb`
- `approval_status`: `draft`, `approved`, `expired`
- `product_id`: relevant produkt
- `batch_id`: relevant batch, hvis aktuelt
- `last_reviewed`: dato

Agenten skal ikke bruke dokumenter med `approval_status=draft` i produksjon.

## Svarpolicy

### Kan Svare På

- hvordan produktet brukes
- kald bruk og steking
- oppbevaring
- smak og pepperaktig følelse
- hva analysebevis betyr
- hvor kunden finner batchdokumentasjon
- betaling med Vipps/kort
- frakt med Posten/Bring
- retur og skadet vare
- om et spørsmål må sendes til support

### Skal Ikke Svare På

- sykdomsbehandling
- medisinjustering
- personlig dosering ved sykdom
- graviditet/amming som medisinsk råd
- blodtrykk, diabetes, Alzheimer, fettlever eller andre sykdomsspørsmål
- løfter om effekt, biomarkører eller bivirkninger
- produktdata som ikke finnes i godkjent kilde

Standard handoff:

> Jeg kan ikke gi medisinske råd. For spørsmål om sykdom, medisiner, graviditet eller behandling bør du kontakte lege eller farmasøyt.

## Systeminstruks

```text
Du er OliveX sin norske supportagent. Svar kort, konkret og vennlig på norsk.

Bruk kun godkjente kilder fra OliveX-kunnskapsbasen og praktiske butikkdata som er tilgjengelig i verktøyene.

Hvis svaret ikke finnes i kildene, si at du ikke har et sikkert svar og tilby å sende spørsmålet videre til support.

Ikke gi medisinske råd. Ikke vurder sykdom, medisiner, graviditet, behandling, blodtrykk, diabetes, Alzheimer, fettlever, betennelse eller andre helsetilstander. Ved slike spørsmål skal du kort forklare at kunden bør kontakte lege eller farmasøyt.

Ikke finn opp analyseverdier, batchdata, produktnavn, priser, lagerstatus, leveringstid, sertifikater eller claims.

Når du bruker en kilde, inkluder en kort kildeetikett som "Kilde: FAQ", "Kilde: analysebevis" eller "Kilde: fraktvilkår".
```

## Foreslåtte Intents

| Intent | Eksempler | Handling |
| --- | --- | --- |
| `usage_cold` | "Kan jeg steke med den?" | Svar fra FAQ/bruk |
| `storage` | "Hvordan oppbevares flasken?" | Svar fra produkt/FAQ |
| `dosage` | "Hvor mye tar jeg?" | Svar fra godkjent brukstekst |
| `taste` | "Hvorfor pepper i halsen?" | Svar fra FAQ/Oleocanthal |
| `coa` | "Hvor finner jeg analysebevis?" | Hent COA/batch |
| `shipping` | "Når kommer pakken?" | Hent fraktstatus hvis ordredata finnes, ellers generelt fraktsvar |
| `payment` | "Kan jeg betale med Vipps?" | Svar fra betalingsoppsett |
| `returns` | "Hva om flasken er skadet?" | Svar fra retur/reklamasjon |
| `medical` | "Kan jeg ta dette med blodtrykksmedisin?" | Handoff til lege/farmasøyt |
| `claim_sensitive_faq` | FAQ-treff med sykdom, medisin, biomarkør eller bivirkning | Ikke svar automatisk; eskaler til support/review |
| `unknown` | Uten sikkert treff | Eskaler til support |

## Shopify-Integrasjon

### Første Produksjonsversjon

- Chat-widget som åpnes fra FAQ/supportseksjonen.
- Server endpoint for agentkall.
- Kunnskapsbase med godkjente dokumenter.
- Ingen ordrespesifikke svar før innlogging/ordreoppslag er designet.
- Manuell support-eskalering via e-post eller kundeserviceverktøy.

### Senere

- ordrestatus via Shopify Admin API etter sikker autentisering
- returflyt
- abonnementsspørsmål
- support-ticket opprettelse
- analysebevis basert på valgt produkt/batch

## Personvern Og Sikkerhet

Før live:

- oppdater personvernerklæring for chat/support
- avklar databehandlerforhold
- informer om eventuell AI-assistent
- logg minst mulig persondata
- anonymiser trenings-/analyseuttrekk
- aldri send sensitive helseopplysninger til supportagent uten eksplisitt lovlig grunnlag
- rate limit per IP/session
- CAPTCHA eller abuse-beskyttelse ved misbruk

## Måleparametre

- andel spørsmål besvart fra godkjente kilder
- andel medisinske spørsmål korrekt eskalert
- andel ukjente spørsmål
- top 20 ubesvarte spørsmål
- klikk til produkt/checkout etter supportinteraksjon
- kundetilfredshet etter svar
- feilrate og latency

## Launch Checklist

- [ ] Godkjent FAQ
- [ ] Godkjente produktdata
- [ ] Godkjente analysebevis/COA
- [ ] Frakt-/returvilkår
- [ ] Betalingsoppsett bekreftet
- [ ] Personvern/cookie-tekst oppdatert
- [ ] Kunnskapsbase opprettet
- [ ] Vector store metadata satt
- [ ] Medisinske guardrails testet
- [ ] Ukjent-spørsmål-eskalering testet
- [ ] Rate limiting satt
- [ ] Support-e-post/ticketing koblet til
- [ ] Testlogg godkjent før lansering

## Kilder Sjekket

- OpenAI File Search guide: https://platform.openai.com/docs/guides/tools-file-search/
- OpenAI Responses API reference: https://platform.openai.com/docs/api-reference/responses/create
- OpenAI Agents overview: https://platform.openai.com/docs/guides/agents
- OpenAI Agents SDK tools: https://openai.github.io/openai-agents-js/guides/tools/
- OpenAI Assistants File Search deprecation notice: https://platform.openai.com/docs/assistants/tools/file-search
