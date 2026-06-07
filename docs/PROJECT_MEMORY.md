# Project Memory

Last updated: 2026-06-07.

## Project

Original working name: **Nordic Longevity Lab**.

Current working brand name: **OliveX**.

The name and logo may still change, but June 2026 preview work should use OliveX.

Local paths:

- Working copy: `/Users/andreas/Documents/Codex/2026-04-24/go-into-my-email-https-mail/nordic-longevity-lab`
- User-facing project folder: `/Users/andreas/Documents/Prosjekter/2026-Ideas/nordic-longevity-lab`

This is currently a static prototype, documentation pack and Shopify theme scaffold. It is not yet installed in a Shopify dev store.

## June 2026 OliveX Update

The user supplied new OliveX context:

- `/assets/Logo_OliveX_020620261452.pdf`
- `/Website context/Ofte stilte spørsmål (FAQ) om vår superolje.md`
- `/Website context/Revidert nettsidetekst_ Hvorfor velge vår høyphenolitiske olje.md`

The logo PDF is a four-page presentation file, not a clean web logo export. A temporary raster wordmark was cropped to `assets/olivex-wordmark-temp.png`. For production, request final SVG and transparent PNG logo exports.

The supplied markdown is the source of truth for the current Norwegian preview copy. The hero must use:

**Mer enn en matolje. Ditt daglige, flytende kosttilskudd.**

Do not replace this with internal strategy language. The supplied markdown also includes high-risk health/medical claims, so production publication still requires legal/regulatory review before launch.

Internal design principle:

**Dokumentasjon før påstand.**

Implementation stance:

- The internal principle should be shown through information architecture, analysis modules and product education, not stated as the homepage sales pitch.
- Current preview copy should follow the supplied source documents unless the user explicitly approves rewriting.
- Disease/biomarker-heavy copy needs legal review before production launch.
- A future producer video from Greece should be represented now with a placeholder and activated later by adding `assets/producer-video.mp4` plus captions/transcript.

## Original Client Request

The request came from an email thread. The user pasted the actionable brief:

> Konsept: Vi tenker nettbutikk med salg av spesielt effektive og bredt dokumenterte kosttilskudd som f.eks. olivenoljen jeg nevnte for deg med markedets høyeste innhold av polyfenoler.
>
> Nettbutikkspesifikasjoner:
> 2 produkter med 2 størrelser per produkt
> Betalingsløsninger: Vipps og betalingskort
> Frakt: Posten
> Design inspirert av https://agelab.no/
>
> Inkludert i leveransen:
> Design og utvikling av nettbutikk
> Oppsett av betalings- og fraktløsninger
> Opplæring i bruk av nettbutikken
> Grunnleggende søkemotoroptimalisering
> Mobiltilpasning
> SSL-sertifikat

Important: I did not access the private Gmail message. The pasted request is the working source of truth.

## Strategy

Do not build a generic supplement shop. Build a premium, evidence-first Norwegian ecommerce experience.

Internal positioning:

- Traceable composition over vague wellness
- Batch data close to purchase
- Product pages as mini clinical dossiers
- Nordic, warm, scientific, premium
- Better than Agelab by reducing clutter and making trust easier to scan

Previous working concept, not public OliveX hero copy:

**Nordic Longevity Lab: Dokumentert. Sporbar. Presis.**

## Reference Site Read

Agelab is useful because it has:

- Norwegian ecommerce trust cues
- Product education
- Product reviews
- Analysis certificates
- Expert/science tone
- Vipps/card/shipping reassurance patterns

Where to improve:

- Less crowded product grids
- More premium restraint
- Stronger editorial typography
- Quality Passport instead of hidden analysis pages
- Stronger product storytelling around origin, dose, certificate and usage
- Product pages that feel curated, not catalogue-heavy

## Product And Compliance Memory

For Norway/EU, the page should be built around substantiated product information and approved claims.

Use safe angles:

- Batch-tested composition
- Origin, cultivar, harvest, production method and storage
- Lab name, method, test date, batch ID and certificate link
- Dosage and number of servings
- Ingredient form and amount per recommended daily dose
- Authorized substance-level health claims when conditions are met

Avoid risky angles unless legal review confirms exact wording:

- Prevents heart disease
- Lowers blood pressure
- Reduces LDL
- Anti-inflammatory
- Helps diabetes
- Protects against Alzheimer or cancer
- Detox
- Immune boosting unless tied to an authorized nutrient claim
- Doctor-style endorsement imagery
- Disease imagery
- Before/after framing

Olive oil claim anchor:

- EU-authorized olive oil polyphenol claim requires at least 5 mg hydroxytyrosol and derivatives per 20 g olive oil.
- Consumer must be told the beneficial effect is obtained with 20 g olive oil per day.
- Total polyphenols are not automatically the same as qualifying hydroxytyrosol and derivatives.

Useful sources captured during research:

- Mattilsynet nutrition and health claims: `https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander`
- Mattilsynet supplement rules: `https://www.mattilsynet.no/en/food-and-beverages/regulations-on-food-supplements`
- EU Regulation 432/2012: `https://eur-lex.europa.eu/eli/reg/2012/432/`
- EFSA olive polyphenols opinion: `https://www.efsa.europa.eu/en/efsajournal/pub/2033`

## Ecommerce Decision

Recommendation: **Shopify** unless the client has a strong WordPress/content requirement.

Why:

- Four variants is simple Shopify territory
- Built-in SSL
- Good admin training story
- Lower maintenance
- Native variants, inventory, orders, refunds and analytics
- Best path to quickly configure payment and shipping

Integrations:

- Cards: Shopify Payments Norway
- Vipps: official Vipps/MobilePay Shopify plugin
- Shipping: Posten Bring Checkout Shopify app

Useful sources:

- Shopify Payments Norway: `https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/norway`
- Vipps/MobilePay Shopify plugin: `https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/`
- Posten Bring Shopify app: `https://apps.shopify.com/posten-bring-checkout`
- Bring ecommerce plugins/APIs: `https://developer.bring.com/api/e-commerce-solutions/plugins/`
- Forbrukertilsynet standard sales conditions: `https://www.forbrukertilsynet.no/english/guidelines/standard-sales-conditions-consumer-purchases-of-goods-the-internet`

Alternative:

- WooCommerce if they need WordPress editorial control.
- Headless Next.js only if a much more custom brand experience is required. Overkill for two products unless the pitch scope expands.

## Prototype Files

- `index.html`: static storefront prototype
- `preview.html`: local preview hub
- `preview.css`: preview hub styling
- `share-preview/`: drag-and-drop deploy folder where root `index.html` opens the preview hub
- `styles.css`: full responsive visual system
- `app.js`: product variant picker, cart drawer, evidence tabs
- `deck/index.html`: browser-native client presentation deck
- `deck/deck.css`: deck visual system and print styling
- `deck/deck.js`: deck navigation controls
- `concept-board/index.html`: browser-native visual direction board
- `concept-board/board.css`: concept board visual system
- `shopify-theme/`: local Online Store 2.0-style theme scaffold
- `deliverables/nordic-longevity-lab-shopify-theme.zip`: packaged local Shopify theme scaffold
- `README.md`: open/use notes
- `docs/APPROACH.md`: strategy, IA, Shopify mapping
- `docs/PRODUCT_DATA_CHECKLIST.md`: product/compliance intake fields
- `docs/AI_VISUAL_DIRECTION.md`: generated image direction and prompt skeleton
- `docs/CLIENT_PROPOSAL_NO.md`: Norwegian client-facing proposal
- `docs/CLIENT_EMAIL_DRAFT_NO.md`: Norwegian email draft for sending proposal context
- `docs/SHOPIFY_BUILD_CHECKLIST.md`: production checklist for Shopify setup
- `docs/CONTENT_ARCHITECTURE.md`: page and content structure
- `docs/VISUAL_PRODUCTION_PLAN.md`: asset plan and prompt directions
- `docs/PRODUCT_INTAKE_TEMPLATE.csv`: structured client intake template
- `docs/OLIVEX_STRATEGY_JUNE_2026.md`: current OliveX strategy, research sources and implementation stance
- `docs/OLIVEX_COPY_GUARDRAILS.md`: claim-safe copy rules and example rewrites
- `docs/PRESENTATION_PACKAGE.md`: how to use/export the deck and concept board
- `docs/SHOPIFY_METAFIELDS.md`: metafield setup for Quality Passport
- `docs/LEGAL_AND_COMPLIANCE_PAGES.md`: legal page and compliance structure
- `docs/TRAINING_RUNBOOK.md`: client training agenda and handoff checklist
- `docs/DELIVERY_STATUS.md`: completed vs blocked delivery items
- `scripts/qa-preview.cjs`: Playwright QA script for later browser screenshot testing

## Current Prototype Behavior

Implemented:

- Premium landing/storefront page
- 2 product cards, where the second card is a source-copy-based ecommerce placeholder until product 2 is defined
- 2 size variants per product
- Variant selector
- Add to cart
- Cart drawer
- Quantity increase/decrease
- Vipps and card payment placeholder buttons
- Posten/Bring checkout story
- Quality Passport module
- Evidence tabs
- Deliverables section matching client request
- SEO title/description
- Product structured data example
- Responsive CSS
- Supplied OliveX logo in the site header
- Supplied OliveX hero text and source-document educational sections

Placeholder data:

- Final product 2 name
- Product images
- Prices
- Polyphenol values
- Batch ID
- Origin
- Lab method
- Certificates
- Claims

Replace these with client-supplied data before any client presentation that could be mistaken for final product facts.

## Visual Direction

Use AI-generated imagery for:

- Hero campaign imagery
- Ingredient atlas sections
- Scientific editorial assets
- Quality Passport mood imagery
- Lifestyle ritual visuals

Use real product photography or reference-based generation for:

- Final packshots
- Labels
- Certificates
- Any asset showing factual dosage, claims, lab seals or certification marks

Do not generate fake certifications, study names, lab seals, claims, dosage values or product labels.

Current generated preview assets:

- `assets/visuals/olivex-hero-editorial-2026-06-07.jpg`
- `assets/visuals/olivex-producer-poster-2026-06-07.jpg`
- `assets/visuals/olivex-product-placeholder-2026-06-07.jpg`
- Prompt and source documentation: `docs/GENERATED_ASSETS_2026-06-07.md`

These are preview assets only. Replace with final product photography, final packaging and the real producer video before launch.

## QA Status

Completed:

- `node --check app.js` passed in both workspace and copied project folder.
- File copy to `/Users/andreas/Documents/Prosjekter/2026-Ideas/nordic-longevity-lab` completed.

Attempted:

- Started a local static server on port `4173`.
- Tried Playwright screenshot QA.

Issue:

- Playwright package exists in bundled Codex runtime, but the browser binary is not installed:
  `Executable doesn't exist at /Users/andreas/Library/Caches/ms-playwright/chromium_headless_shell-1217/...`

Next QA path:

- Install Playwright browsers, or point `scripts/qa-preview.cjs` at an existing Chrome/Chromium if one is installed later.
- Then run the QA script and inspect `qa/desktop.png`, `qa/mobile.png`, and `qa/report.json`.

## User Preference Signals

The user wants a high-ambition output, not just “meets spec.”

Important phrasing from user:

- “you and me can do even better”
- “First and foremost we must understand the product”
- “meet the request criteria”
- “research and brainstorm how we can use the new gpt image 2 model”
- “stunning visuals”
- “great story telling, information architecture and user experience”
- “most impressive ecommerce website possible in april 2026”

Carry this energy forward. The client asked for Agelab-inspired. We should present something more focused, premium and credible.

## Next Big Move

Turn this from prototype into client-ready pitch material:

1. Request real product facts with `docs/PRODUCT_INTAKE_TEMPLATE.csv`.
2. Review `deck/index.html`, `concept-board/index.html` and `shopify-theme/`.
3. Replace placeholder imagery with generated concept images or real visual references.
4. Export `deck/index.html` to PDF from browser if needed.
5. Create a Shopify development store and test `shopify-theme/` when account access is available.
   - assumptions and required client inputs
4. If approved, convert prototype into Shopify theme sections.
