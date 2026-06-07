# OliveX Copy Guardrails

Last updated: 2026-06-07.

Note: the current local preview intentionally mirrors supplied source copy where the user requested it. This document is a production/legal review aid, not permission to override the supplied preview copy without approval.

For a claim-by-claim review list, see `docs/CLAIMS_REVIEW_REGISTER_2026-06-07.md`.

## Principle

OliveX should sound confident because the product is documented, not because the copy makes medical promises.

Use the rule:

**Show the analysis. Explain the meaning. Avoid disease claims.**

Do not turn internal sales, UX or information-architecture strategy into public homepage copy. Phrases like
"dokumentasjon før påstand", "sporbar sammensetning", "analysebevis", "tydelig handel", "mindre støy" and
"premium hierarki" can guide the build, but they should not be announced to customers as the front-page pitch.
The public homepage starts with the supplied source positioning:

`Mer enn en matolje. Ditt daglige, flytende kosttilskudd.`

## Source Lock For Current Preview

The supplied Norwegian website text and FAQ are the source of truth for visible OliveX storefront copy.

Rules for current preview iterations:

- Use the supplied hero text verbatim.
- Use supplied section headings verbatim when they appear on the page.
- If layout requires shorter text, use a direct excerpt from the supplied copy instead of a new marketing angle.
- Do not expose the selling strategy as customer-facing copy. Documentation, analysis certificates, trust structure and premium hierarchy should be experienced through layout and UX, not announced as slogans.
- Do not add product claims, product names, ingredients, sizes, prices or effects that are not present in the supplied documents or client requirements.
- Product 2 remains a placeholder until real product data is supplied.

## Machine Check

Run this before every share-preview sync, Netlify Drop rebuild or public preview link:

```bash
node scripts/validate-customer-copy.cjs
```

Expected result:

```json
{
  "problems": []
}
```

The validator checks root, `share-preview/` and the lean Netlify Drop package for:

- supplied hero text and hero lede
- visible OliveX logo asset
- supplied source-section headings on the storefront
- honest product placeholders for missing sizes/prices
- share-safe product-page routes to `website.html`
- absence of internal strategy or preview-process language from customer-facing storefront surfaces
- absence of old mock prices, old variant IDs and old size labels

If the validator fails, do not send a public preview link until the reported file and phrase are fixed.

## High-Risk Phrases From Supplied Source Text

Do not publish these patterns without legal review:

- "antioksidant" or "antioksidant-effekt" used as casual lifestyle copy
- "betennelsesdempende effekt"
- "virker som ibuprofen"
- "uten bivirkninger"
- "forebygger hjerteinfarkt/slag"
- "reduserer blodtrykk"
- "senker LDL"
- "bedrer HbA1c"
- "reduserer visceralt fett"
- "beskytter mot Alzheimer/kognitiv svikt"
- "forebygger diabetes/fettlever/metabolsk syndrom"
- "målbar effekt på biomarkører"
- "beviset på at den virker"
- any promise tied to disease, treatment, cure, prevention or measurable medical outcome

Mattilsynet treats `antioksidant` as a health-claim context, not neutral lifestyle language. Use only with a specific
approved claim and all required conditions, or avoid it in public storefront copy.

## Safer Public Wording

Use:

- "høyphenolisk extra virgin olivenolje"
- "batchdokumentert fenolprofil"
- "analysebevis for hver batch"
- "sporbar opprinnelse fra produsent og region"
- "pepperaktig og bitter sensorikk, typisk for oljer med tydelig fenolprofil"
- "utviklet for daglig bruk i en enkel rutine"
- "20 g daglig inntak er rammen for den godkjente EU-påstanden når batchen oppfyller kravet"
- "olivenoljepolyfenoler bidrar til å beskytte blodlipider mot oksidativt stress" only if the batch qualifies and the 20 g context is shown

Do not call the product a `kosttilskudd` in legally final production copy until the client has confirmed the product
classification, required labeling, recommended daily dose, warnings and any mandatory Norwegian/EØS information.

## Example Rewrites

Risky:

"Den pepperaktige følelsen i halsen er beviset på at oljen virker."

Safer:

"Den pepperaktige følelsen er en naturlig sensorisk egenskap ved mange høyphenoliske oljer. På OliveX knyttes dette til batchanalyse, ikke løse påstander."

Risky:

"Oleocanthal virker som ibuprofen uten bivirkninger."

Safer:

"Oleocanthal er en av fenolforbindelsene som kan måles i extra virgin olivenolje. Vi viser batchverdier og analysemetode der kunden vurderer produktet."

Risky:

"Beskytter mot hjerte- og karsykdom."

Safer:

"Når kravene er oppfylt, kan den godkjente EU-påstanden for olivenoljepolyfenoler brukes: olivenoljepolyfenoler bidrar til å beskytte blodlipider mot oksidativt stress. Den gunstige effekten oppnås ved et daglig inntak på 20 g olivenolje."

Risky:

"Anbefales for personer med diabetes, blodtrykk og betennelser."

Safer:

"Personer som bruker medisiner, er gravide, ammer eller har en relevant medisinsk tilstand bør rådføre seg med lege eller farmasøyt ved spørsmål om kostholdsendringer."

## FAQ Tone

FAQ should be direct, but not clinical:

- Explain taste, storage, usage and dosage.
- Explain what an analysis certificate is.
- Explain what a batch is.
- Explain how subscription, shipping and return work.
- Explain when customers should contact a healthcare professional.
- Do not answer personal medical questions.

## Support Agent Guardrails

The support agent may answer:

- "Hvordan bruker jeg produktet?"
- "Hvor finner jeg batchanalysen?"
- "Hva betyr polyfenoler?"
- "Hvordan fungerer abonnement?"
- "Hvordan leveres pakken?"

The support agent must refuse or hand off:

- "Kan dette hjelpe med sykdommen min?"
- "Kan jeg slutte med medisin?"
- "Hvor mye skal jeg ta for å senke blodtrykket?"
- "Er dette trygt sammen med blodfortynnende?"

Default handoff:

"Jeg kan ikke gi medisinske råd. For spørsmål om sykdom, medisiner, graviditet eller behandling bør du kontakte lege eller farmasøyt."
