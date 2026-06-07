# Research Source Register - 2026-06-07

This register keeps the current production decisions tied to official/current sources. It is for implementation planning, not customer-facing homepage copy.

Latest verification pass: 2026-06-07. SEO/AEO/Merchant decisions were re-checked against official Google Search Central and Google Merchant Center documentation before adding `seo-merchant-readiness.html`.

Payment/shipping verification pass: 2026-06-07. Checkout, Vipps/MobilePay, Shopify Payments, subscriptions and Posten/Bring decisions were re-checked against official provider documentation before adding `checkout-readiness.html`.

Accessibility verification pass: 2026-06-07. WCAG/WAI and Norwegian uu guidance were re-checked before adding `accessibility-readiness.html`.

Production build brief pass: 2026-06-07. Shopify/payment/shipping/schema/consent/support assumptions were consolidated into `production-build-brief.html` and `docs/PRODUCTION_BUILD_BRIEF_2026-06-07.md`.

Shopify data contract pass: 2026-06-07. Product/variant/metafield/metaobject/schema ownership was consolidated into `shopify-data-contract.html`, `docs/SHOPIFY_DATA_CONTRACT_2026-06-07.md` and `docs/SHOPIFY_DATA_CONTRACT_FIELDS_2026-06-07.csv`.

Netlify Drop package pass: 2026-06-07. Manual deploy/share-package decisions were checked against Netlify's official `Create deploys` documentation before adding `preview-deploy.html`, `docs/NETLIFY_DROP_PREVIEW_PACKAGE_2026-06-07.md` and `scripts/build-netlify-drop-package.cjs`.

Producer video pass: 2026-06-07. Video SEO, accessibility and Shopify media assumptions were checked against official Google Search Central, W3C WAI and Shopify documentation before adding `producer-video-handoff.html` and `docs/PRODUCER_VIDEO_HANDOFF_2026-06-07.md`.

Legal/policy pass: 2026-06-07. Norwegian ecommerce policy, privacy/cookie, food-labeling and Shopify legal-page assumptions were checked against official Norwegian public authorities and Shopify documentation before adding `legal-policy-readiness.html` and `docs/LEGAL_POLICY_READINESS_2026-06-07.md`.

Performance pass: 2026-06-07. Core Web Vitals, page experience, Lighthouse/DevTools and Shopify theme performance assumptions were checked against official Google/web.dev/Chrome and Shopify documentation before adding `performance-readiness.html` and `docs/PERFORMANCE_READINESS_2026-06-07.md`.

Training/operations pass: 2026-06-07. Shopify admin, products, metafields, orders, refunds/cancellations and reports/analytics assumptions were checked against official Shopify Help Center documentation before adding `training-ops-readiness.html` and `docs/TRAINING_OPS_READINESS_2026-06-07.md`.

Visual direction pass: 2026-06-07. OpenAI image generation assumptions were consolidated into `visual-direction.html` and `docs/VISUAL_DIRECTION_2026-06-07.md`.

Browser-native source verification pass: 2026-06-07. Key official-source assumptions were consolidated into `source-verification.html` and `docs/SOURCE_VERIFICATION_2026-06-07.md` so the hub can be reviewed without opening Markdown first.

Live source tightening pass: 2026-06-07. Shopify MobilePay/subscription constraints, Vipps/MobilePay Shopify plugin risk, Mattilsynet claim guidance and OpenAI Responses/File Search/GPT Image 2 assumptions were re-checked against official sources and folded into the source verification, checkout and copy-guardrail documents.

Support agent blueprint pass: 2026-06-07. OpenAI Responses/File Search, safety/deployment, Shopify Customer Privacy API, Shopify legal pages, Admin API and app proxy assumptions were consolidated into `support-agent-blueprint.html` and `docs/SUPPORT_AGENT_PRODUCTION_BLUEPRINT_2026-06-07.md`.

## Key Decisions

| Area | Current source | OliveX decision |
| --- | --- | --- |
| Public preview sharing | Netlify Create deploys documentation: `https://docs.netlify.com/deploy/create-deploys/` | Use a generated lean Drop folder with `index.html` as the preview hub and `website.html` as the storefront. Manual Netlify deploys do not run build commands, so the deploy folder must already contain final static files. |
| Shopify payment baseline | Shopify Payments documentation: `https://help.shopify.com/en/manual/payments` | Use Shopify Payments as the default card-payment baseline unless the client has a stronger production constraint. |
| MobilePay/Vipps risk | Shopify MobilePay documentation: `https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/mobilepay` | Do not assume the Shopify Payments MobilePay method fully solves Norwegian Vipps checkout or subscriptions. Verify the actual Vipps/MobilePay route in the Shopify store before launch. Shopify's current MobilePay considerations also state that subscription products cannot be paid with MobilePay. |
| Subscription products | Shopify subscription payment considerations: `https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations` | Keep `Fast levering` preview-safe. Production recurring delivery requires subscription app selection, Shopify/payment-gateway verification, terms and full checkout testing. |
| Privacy and consent | Shopify Customer Privacy API: `https://shopify.dev/docs/api/customer-privacy` | The static consent banner is a UX preview only. Production must use a Shopify-compatible CMP or implementation that updates Shopify-managed consent surfaces through the Customer Privacy API. |
| Legal and policy pages | Forbrukertilsynet: `https://www.forbrukertilsynet.no/`, Forbrukerrådet: `https://www.forbrukerradet.no/`, Datatilsynet: `https://www.datatilsynet.no/`, Mattilsynet food labeling: `https://www.mattilsynet.no/mat-og-drikke/merking-av-mat`, Altinn business operation: `https://www.altinn.no/starte-og-drive/`, Shopify legal pages: `https://help.shopify.com/en/manual/privacy-and-security/privacy/legal-pages` | Treat policy pages as production gates, not footer filler. Require visible seller/importer details, purchase terms, privacy, cookies, shipping/returns, product labeling fields and support boundaries before removing noindex. Final legal text requires client/legal approval. |
| Performance / Core Web Vitals | web.dev Web Vitals: `https://web.dev/articles/vitals`, Google Search page experience: `https://developers.google.com/search/docs/appearance/page-experience`, Lighthouse scoring: `https://developer.chrome.com/docs/lighthouse/performance/performance-scoring`, Chrome DevTools Performance: `https://developer.chrome.com/docs/devtools/performance`, Shopify theme performance: `https://shopify.dev/docs/storefronts/themes/best-practices/performance`, Shopify optimized images: `https://shopify.dev/docs/storefronts/themes/best-practices/performance/optimized-images` | Static preview is lightweight, but production performance must be measured after Shopify theme, apps, video, CMP, support widget and tracking are enabled. Keep LCP/INP/CLS as launch gates and document third-party resource ownership. |
| Training and operations | Shopify admin: `https://help.shopify.com/en/manual/shopify-admin`, products: `https://help.shopify.com/en/manual/products`, metafields: `https://help.shopify.com/en/manual/custom-data/metafields`, orders: `https://help.shopify.com/en/manual/orders`, refunds/cancellations: `https://help.shopify.com/en/manual/orders/refund-cancel-order`, reports/analytics: `https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports` | Treat client training as an operational acceptance gate. The client must practice products, variants, COA/metafields, orders, refunds, fulfillment/tracking, support KB, analytics and escalation before project handoff. |
| Posten/Bring shipping | Posten Bring Checkout on Shopify App Store: `https://apps.shopify.com/posten-bring-checkout` | Treat Posten/Bring as a production setup task, not a static frontend feature. Install/configure the shipping app, test rates, labels, pickup point behavior and tracking. |
| Merchant structured data | Google Merchant Center structured-data help: `https://support.google.com/merchants/answer/7331077?hl=en` | Add merchant/Product/Offer structured data only when real product price, currency, availability, condition, image, SKU/GTIN, shipping and returns are approved. Validate in Search Console/Rich Results tooling. |
| Producer video SEO/accessibility | Google video structured data: `https://developers.google.com/search/docs/appearance/structured-data/video`, W3C WAI audio/video accessibility: `https://www.w3.org/WAI/media/av/`, Shopify product media: `https://help.shopify.com/en/manual/products/product-media` and Shopify theme media support: `https://shopify.dev/docs/storefronts/themes/product-merchandising/media/support-media` | Keep the current video as a placeholder. Request real video, poster, captions, transcript, rights and metadata. Add VideoObject only when the real video is visible and has required metadata; in Shopify production, treat video as product/media data or reusable theme media rather than hardcoded decoration. |
| FAQ structured data | Google FAQPage structured-data documentation: `https://developers.google.com/search/docs/appearance/structured-data/faqpage` | Keep FAQ visible and useful for customers/support/AEO, but do not sell FAQ rich-result eligibility as a normal ecommerce SEO feature. Google's current FAQ rich-result eligibility is limited to well-known authoritative government or health sites. |
| Accessibility target | W3C WCAG 2.2: `https://www.w3.org/TR/WCAG22/` and WAI summary: `https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/` | Continue targeting accessible semantic HTML, visible focus, keyboard flows, non-obscured focus with sticky UI, large enough targets, reduced motion and clear form labels. |
| Support agent API direction | OpenAI deprecations: `https://platform.openai.com/docs/deprecations`, migration guide: `https://platform.openai.com/docs/guides/migrate-to-responses`, File Search guide: `https://platform.openai.com/docs/guides/tools-file-search`, safety best practices: `https://platform.openai.com/docs/guides/safety-best-practices` and deployment checklist: `https://developers.openai.com/api/docs/guides/deployment-checklist` | Build any production support assistant on the current OpenAI Responses/File Search direction, not the deprecated Assistants API. Keep the assistant grounded in approved knowledge, keep keys server-side, test safety/latency/fallback behavior and hand off medical questions. |
| Support agent Shopify/privacy boundary | Shopify Customer Privacy API: `https://shopify.dev/docs/api/customer-privacy`, Shopify legal pages: `https://help.shopify.com/en/manual/privacy-and-security/privacy/legal-pages`, Shopify Admin GraphQL API: `https://shopify.dev/docs/api/admin-graphql`, Shopify app proxies: `https://shopify.dev/docs/apps/build/online-store/app-proxies` | Treat the support agent as a privacy and integration surface. Chat/AI logging must be covered by policy, secrets stay server-side, order/product/subscription data must come from Shopify tools and live order-specific answers require secure customer identification. |
| Image generation direction | OpenAI image generation guide: `https://platform.openai.com/docs/guides/image-generation` and GPT Image 2 model page: `https://developers.openai.com/api/docs/models/gpt-image-2` | Use GPT Image 2 / GPT Image workflow for premium preview visuals and art direction where useful, but do not generate fake labels, certificates, lab values, badges or claims. Final production should use real product photos, producer video and approved assets. |
| Kosttilskudd and claim risk | Mattilsynet cost-supplement guidance: `https://www.mattilsynet.no/mat-og-drikke/kosttilskott/kosttilskudd-eller-treningsprodukt--hvilke-regler-gjelder`, Mattilsynet health-claim guidance: `https://www.mattilsynet.no/mat-og-drikke/merking-av-mat/ernaerings-og-helsepastander/veileder-om-ernaeringspastander/helsepastand-og-ikke-ernaeringspastand`, Mattilsynet/Forbrukertilsynet 2026 industry guidance: `https://www.mattilsynet.no/mat-og-drikke/kosttilskott/mattilsynet-og-forbrukertilsynet-veileder-sammen-om-kosttilskudd` | Treat claim review as a launch gate. Do not use disease, treatment, pain-relief, side-effect, biomarker or body-function promises unless a specific authorized claim and all use conditions are documented. Treat `antioksidant` as a health-claim risk, not casual lifestyle language. |

## Live Source Tightening Notes

The 2026-06-07 tightening pass adds these concrete implementation consequences:

- Norwegian Vipps should be planned through the official Vipps/MobilePay Shopify route and tested with a real Norwegian checkout path. Shopify Payments MobilePay is not enough evidence that Vipps works for the target Norwegian buyer journey.
- `Fast levering` remains a preview-safe purchase-choice direction only. A production subscription must show frequency, price, renewal, cancellation policy and supported gateway behavior in the actual Shopify checkout.
- The support agent must be built on approved product/support/legal sources and should use OpenAI Responses/File Search direction for a new implementation. Avoid starting a new build on deprecated Assistants API.
- Generated images are acceptable for art direction and preview, but not as evidence. Do not generate false labels, lab results, seals, certificates, review badges, medical endorsers or measurable product claims.
- OliveX copy should not use `antioksidant` casually. Mattilsynet treats the term as a health-claim context, so any use must be tied to an approved claim and conditions.

## Production Build Brief Decision

`production-build-brief.html` is the recommended handoff artifact for turning the static preview into a Shopify implementation. It combines the source-checked assumptions above into one implementation sequence:

1. Data intake for products, variants, COA, media, claims and policies.
2. Shopify dev store and theme scaffold upload.
3. Checkout setup for card, Vipps/MobilePay and Posten/Bring.
4. Content lock with approved live copy and real documents.
5. SEO/Merchant data, consent and support-agent knowledge base.
6. Launch QA before noindex is removed.

## Shopify Data Contract Decision

`shopify-data-contract.html` defines the implementation rule for production data: no product fact should be more true in the theme than it is in Shopify data.

Current implications:

- Product names, product 2, product category, descriptions, media and SEO fields belong to Shopify Product data.
- Sizes, prices, SKU/GTIN, inventory and shipping weights belong to Shopify Variant/Inventory data.
- Batch, origin, lab, test method/date, COA link, daily dose, serving condition and warnings belong to product metafields in the current `lab` namespace.
- COA records, producer video, claim records and support source documents may become metaobjects if the production setup benefits from reusable structured records.
- ProductGroup/Product/Offer/VideoObject/merchant data should not publish until the corresponding visible Shopify facts are final.

## Production Gates From The Sources

### Payment

- Card payment can be planned around Shopify Payments, but the client's Shopify account, business eligibility and Norwegian tax/business data must be confirmed.
- Vipps/MobilePay must be tested as an actual checkout route in the selected Shopify setup.
- If subscriptions remain in scope, recurring payment compatibility must be tested before the website promises `Fast levering`.

### Shipping

- Posten/Bring must be configured in Shopify with live rates and fulfilment rules.
- Test at minimum: mobile checkout, desktop checkout, pickup point, home delivery if offered, free-shipping threshold if used, label printing, tracking email and refund/return handling.

### SEO / AEO / GEO

- Product structured data should mirror visible product and checkout facts.
- Do not publish fake placeholder schema for Product 2.
- FAQ content should remain readable in HTML and useful to users, but FAQ rich-result visibility should not be promised.
- Add VideoObject only after the actual producer video, poster, upload date, duration, transcript/captions and metadata exist.

### Privacy

- The current preview stores local choices and loads no tracking scripts.
- Production needs an approved privacy/cookie policy, final cookie inventory, GA4/ads consent behavior and Shopify Customer Privacy API/CMP integration.
- Legal/policy pages must define seller/importer, contact, purchase terms, returns, shipping, privacy, cookies, support boundaries and any subscription terms before noindex is removed.
- Do not launch with invented delivery times, unverified return flows, hidden seller details or tracking before consent.

### Accessibility

- Sticky mobile purchase controls must not hide focused elements.
- Buttons and form controls should stay reachable by keyboard and touch.
- Dynamic cart/support/consent updates should announce status changes where relevant.
- Spoken producer video needs captions; important content should also be available in a transcript or visible HTML text.
- Browser zoom, mobile viewport and reduced-motion behavior should be tested before production.

### Performance

- Keep Core Web Vitals as a launch gate: LCP, INP and CLS must be measured in the final Shopify context.
- Measure after real product media, producer video, CMP, subscriptions, Posten/Bring, support widget and tracking scripts are active.
- Optimize hero/packshot/video assets and remove unused app embeds before launch.
- Keep preview noindex until production performance and page experience have been verified.

### Support Agent

- The support agent should answer only from approved product, payment, shipping, return and FAQ knowledge.
- Medical, medication, diagnosis, pregnancy or treatment questions should route to doctor/pharmacist guidance.
- Logs, escalation and knowledge-base update process must be defined before a live agent is enabled.

### Training and Operations

- Client training must cover Shopify admin, products, variants, metafields/COA, orders, refunds, fulfillment/tracking, content/policies, support KB and analytics.
- Do not hand off the store until the client has practiced a test order, refund, tracking update, product update and support-handoff scenario.
- Define role owners for product data, COA, support KB, shipping, payments, legal/claims, analytics and technical escalation.

### Visuals

- Generated visuals are suitable for art direction and preview, not proof of product facts.
- Final product page and checkout should use real packshots, producer video, logo exports and certificate assets.
- Generated images must avoid false labels, logos, certifications, people endorsements and measurable product claims unless those are real and approved.
