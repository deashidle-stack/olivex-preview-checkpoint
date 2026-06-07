# OliveX Source Verification - 2026-06-07

Status: added 2026-06-07.

## Purpose

`source-verification.html` is a browser-native review artifact for the official-source assumptions behind the OliveX ecommerce preview.

It exists because the project goal depends on current best practices for:

- Shopify ecommerce production
- Vipps/MobilePay and card checkout
- Posten/Bring delivery
- SEO, AI search and Merchant Center
- WCAG/accessibility
- privacy/consent
- support agent architecture
- image generation and visual production

## Main Decisions

The latest source verification supports these production rules:

- Keep the preview noindexed until real product data, legal approval and checkout/frakt tests exist.
- Use visible, crawlable HTML and true product data as the foundation for SEO and AI search.
- Do not rely on FAQ rich results as an ecommerce SEO strategy.
- Do not publish Product/Offer/Merchant/VideoObject schema for placeholders.
- Treat Vipps/MobilePay and recurring delivery as production tests, not assumptions.
- Treat Shopify Payments MobilePay as insufficient proof for the Norwegian Vipps buyer journey; production must test the official Vipps/MobilePay Shopify route with a real checkout path.
- Treat Posten/Bring as a Shopify integration and fulfillment workflow, not frontend copy.
- Treat WCAG 2.2 AA as the production accessibility target.
- Build a production support agent on the current OpenAI Responses/File Search/Agents direction, grounded in approved sources.
- Use GPT Image 2 / image generation for art direction and safe visual exploration, not fake certificates, labels, badges or product claims.
- Treat Mattilsynet/Forbrukertilsynet claim guidance as a launch gate for the kosttilskudd positioning, including strict review of disease, treatment, side-effect, biomarker and `antioksidant` wording.

## Official Source Groups

Use these source groups before production decisions:

- Google Search: AI features, Merchant structured data, FAQPage, VideoObject.
- Shopify: payments, MobilePay, subscriptions, Customer Privacy API, theme performance.
- Vipps/MobilePay: official Shopify plugin documentation.
- Posten/Bring: ecommerce/shipping resources.
- W3C/WAI: WCAG 2.2 and accessibility guidance.
- OpenAI: Responses migration, File Search, image generation and GPT Image 2 model documentation.
- Norwegian public authorities: consumer rights, privacy/cookies, business operation and food labeling.
- Mattilsynet/Forbrukertilsynet: kosttilskudd, helsepåstander, ernæringspåstander and subscription marketing guidance.
- Netlify: manual/static deploy behavior for preview sharing.

## Production Implication

This pass does not make the website production-ready. It makes the assumptions auditable.

The remaining production blockers are still:

- real product data
- real COA/analysebevis
- final claims/legal review
- Shopify dev store
- Vipps/MobilePay merchant and checkout test
- card-payment setup and refund test
- Posten/Bring setup and fulfillment test
- final legal/policy/cookie text
- final visuals, packshots and producer video
- production support-agent backend and approved KB
- Lighthouse/Core Web Vitals pass in the live Shopify stack
