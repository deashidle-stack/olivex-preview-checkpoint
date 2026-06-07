# OliveX Strategy - June 2026

Last updated: 2026-06-07.

## Current Direction

Working brand name: **OliveX**.

The website should now be treated as an evidence-first Norwegian ecommerce experience for a high-phenolic olive oil product, not a broad supplement shop. The internal concept is:

**Dokumentasjon før påstand.**

This is not the public homepage headline. The public hero should use the supplied source text:

**Mer enn en matolje. Ditt daglige, flytende kosttilskudd.**

The client liked the existing preview direction:

- sporbar sammensetning
- norsk tillit
- produktutdanning
- analysebevis
- tydelig handel
- mindre støy
- mer premium hierarki
- Quality Passport på produktside
- dokumentasjon før påstand

These should remain the spine of the site experience, but they should be shown through UX and content structure rather than stated as a sales pitch.

## Strategic Recommendation

Build the public experience around three trust layers:

1. **Opprinnelse:** producer, grove/region, harvest, cultivar, production method, storage and bottling.
2. **Analyse:** batch ID, lab, method, date, certificate, qualifying values and plain-language interpretation.
3. **Kjøp:** two products, two sizes, subscription optional, Vipps/card, Posten/Bring, clear return/shipping terms.

The website should feel premium and editorial, but the UX must stay commerce-led. The best homepage structure is:

- hero with OliveX logo, supplied headline, supplied support copy and direct CTAs
- trust strip with Vipps, Posten/Bring, SSL and batch documentation
- product cards with size selection and add-to-cart
- Quality Passport preview
- producer video placeholder
- documentation/claim education
- support/FAQ assistant entry point
- delivery/payment/subscription explanation
- claim-safe FAQ

## Product Claim Position

The supplied markdown documents contain valuable product rationale, but some phrasing should not be published without legal review.

Avoid public claims that imply prevention, treatment or measurable improvement of disease/medical conditions. This includes phrases around inflammation treatment, ibuprofen equivalence, blood pressure, diabetes, Alzheimer, fatty liver, LDL reduction, biomarker promises, "without side effects" and general disease prevention.

Use public copy around:

- high-phenolic extra virgin olive oil
- documented batch values
- sensory bitterness/pepperiness as a natural cue of phenolic profile, not proof of medical effect
- the EU-authorized olive oil polyphenol claim only when the batch meets the required threshold
- recommended daily intake context
- origin, analysis and use

## Compliance Anchor

Mattilsynet states that approved health claims can be used when EU requirements are met, and that medical claims for foods/supplements are prohibited. EU Regulation 432/2012 permits the olive oil polyphenol claim only when the oil contains at least 5 mg hydroxytyrosol and derivatives per 20 g olive oil, and the consumer is told the beneficial effect is obtained with 20 g daily intake.

Sources:

- Mattilsynet health claims: https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander
- Mattilsynet medical claims: https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander/veileder-om-helsepastander/helsepastander-som-uansett-ikke-kan-brukes/sakalte-medisinske-pastander
- Mattilsynet supplement guidance: https://www.mattilsynet.no/mat-og-drikke/kosttilskott/mattilsynet-og-forbrukertilsynet-veileder-sammen-om-kosttilskudd
- EUR-Lex Regulation 432/2012: https://eur-lex.europa.eu/eli/reg/2012/432/2016-06-20/eng

## SEO, AEO and GEO

Google's current guidance for AI features says the fundamentals of SEO still apply; there is no special AI-only schema or required machine-readable file. The priority is crawlable text, internal links, helpful people-first content, high-quality media where relevant, and structured data that matches visible content.

For OliveX:

- Keep all important claims and product facts in HTML text, not only images.
- Use clear H1/H2 hierarchy and answer-oriented sections.
- Use Product structured data for each sellable product/variant when final product data is known.
- Use Organization structured data.
- Use MerchantReturnPolicy and shipping policy markup when final terms are known.
- Use VideoObject only after the real producer video exists.
- Avoid FAQ structured data for rich-result expectations; Google says FAQ rich results stopped appearing as of May 7, 2026, with related Search Console/Rich Results Test support being dropped in June/August 2026.
- Keep FAQ content visible and useful for users/AI systems even if FAQ rich results are unlikely.
- Verify in Search Console after launch.

Sources:

- Google AI features guidance: https://developers.google.com/search/docs/appearance/ai-features
- Google ecommerce structured data: https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce
- Google product structured data: https://developers.google.com/search/docs/appearance/structured-data/product
- Google FAQ structured data availability: https://developers.google.com/search/docs/appearance/structured-data/faqpage

## Accessibility

Target WCAG 2.2 AA as the implementation bar. WCAG 2.2 is the current W3C recommendation and is backwards compatible with 2.1/2.0. The site should implement:

- semantic landmarks, headings and labels
- keyboard-operable cart, accordions and support UI
- visible focus states
- 44px+ touch targets for core controls
- sufficient color contrast
- no information conveyed only by color
- alt text for meaningful product/origin images
- decorative images with empty alt
- captions/transcript for the producer video
- reduced-motion support for non-essential motion
- consistent help/support placement

Source:

- W3C WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/

## Payments, Subscription and Shipping

Recommended production stack remains Shopify unless the client has a strong WordPress requirement.

Payments:

- Use Shopify Payments for cards where eligible.
- Use the official Vipps/MobilePay Shopify plugin for Vipps in checkout.
- Do not promise Vipps Express in Shopify; official docs state Express is not available in Shopify due to Shopify limitations.

Subscriptions:

- Shopify Subscriptions can sell recurring products, but Shopify documents gateway and local-payment limitations.
- Before promising subscription with Vipps, confirm the exact subscription architecture. Vipps has Recurring APIs, but Shopify subscription compatibility must be verified against the chosen app/payment setup.
- Public subscription copy must clearly show frequency, price, cancellation terms and renewal policy.

Shipping:

- Use Posten Bring Checkout where possible.
- Expose delivery options, pickup points/parcel lockers, tracking and expected lead time in checkout.
- If custom shipping logic is needed, Bring's ecommerce resources, Shipping Guide API and Pickup Point API are the official route.

Sources:

- Vipps/MobilePay Shopify plugin: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Vipps plugin overview: https://developer.vippsmobilepay.com/docs/plugins/
- Vipps recurring API: https://developer.vippsmobilepay.com/docs/APIs/recurring-api/
- Shopify purchase options: https://help.shopify.com/en/manual/products/purchase-options
- Shopify subscription considerations: https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations
- Posten Bring Checkout Shopify app: https://apps.shopify.com/posten-bring-checkout
- Bring ecommerce resources: https://developer.bring.com/api/e-commerce-solutions/
- Bring Pickup Point API: https://developer.bring.com/api/pickup-point/

## Native Support Agent

Best solution: a constrained FAQ/product-support assistant, not a medical chatbot.

The assistant should answer from an approved knowledge base:

- product facts
- batch certificates
- usage and storage
- shipping/returns
- subscriptions
- contact handoff
- legal disclaimer

Guardrails:

- no diagnosis
- no treatment advice
- no medication interaction advice beyond "ask your doctor/pharmacist"
- cite the page/document used when answering
- escalate unknowns to support
- keep public answer language claim-safe

OpenAI implementation direction:

- Responses API
- file_search over approved FAQ/COA/shipping/legal docs
- optional structured output for support tickets
- server-side API route; no API key in frontend

Sources:

- OpenAI File Search: https://platform.openai.com/docs/guides/tools-file-search/
- OpenAI tools/Responses API: https://platform.openai.com/docs/guides/tools

## Producer Video Placeholder

Add a visible section for the future Greece producer video. The implementation should support a simple later replacement:

- put final video at `assets/producer-video.mp4`
- optional poster at `assets/producer-video-poster.jpg`
- add Norwegian captions/transcript before launch
- update the page to use VideoObject structured data only when final video metadata exists

## Open Decisions

- final brand name and production logo exports
- exact product names and sizes
- retail prices and subscription discount
- real batch values and COA PDFs
- legally approved health claim wording
- Shopify plan, merchant account and Vipps/Posten/Bring account status
- whether second product is another OliveX size/bundle or a separate supplement
