# Implementation Audit - 2026-06-07

## Scope

This note documents the current OliveX preview pass after the source-copy correction.

The customer-facing site must use the supplied OliveX copy and logo. Internal strategy, SEO, compliance and support-agent logic should shape the experience, but not become the homepage pitch.

## Current Research Checks

Official sources checked on 2026-06-07:

- Google Search AI features: existing SEO fundamentals still apply for AI Overviews/AI Mode; there is no special AI-only schema requirement. Important content should be textual, internally linked, supported by quality media and matched by structured data.
- Google ecommerce structured data: relevant ecommerce markup includes Organization, Product/ProductGroup, BreadcrumbList, Review and VideoObject when matching visible content.
- Google Product structured data: merchant listings are the relevant direction for purchasable products, especially with price, availability, shipping and return policy once final data exists.
- Google FAQ structured data: as of May 7, 2026, FAQ rich results are no longer appearing in Google Search. Do not build OliveX SEO around FAQ rich results.
- W3C WCAG overview: WCAG 2.2 is the latest W3C recommendation and W3C encourages using the latest version; WCAG 2.2 is backwards compatible with 2.1/2.0.
- Vipps/MobilePay Shopify docs: the official Shopify payment plugin lets customers choose Vipps/MobilePay in checkout; Express is not available in Shopify due to Shopify limitations.
- Vipps/MobilePay Recurring API: recurring payments exist through the API, but Shopify subscription compatibility must be verified before promising Vipps subscriptions.
- Shopify subscription considerations: subscription products have gateway and setup limitations that must be checked against the chosen subscription app/payment stack.
- Bring ecommerce resources: Posten/Bring checkout, pickup point and shipping APIs are the official production integration routes.
- OpenAI File Search/tools docs: a support agent should be implemented server-side from approved documents; do not expose API keys in the frontend.

## Implemented In This Pass

- Added preview-safe `noindex,nofollow` metadata to the storefront and preview hub.
- Added social/share metadata (`og:title`, `og:description`, `og:locale`, `twitter:card`) to the storefront preview.
- Kept FAQ as visible customer content, but did not add `FAQPage` schema because Google is deprecating FAQ rich-result support.
- Improved cart accessibility:
  - cart button now has `aria-controls` and `aria-expanded`
  - closed cart drawer is `inert`
  - opening the cart moves focus into the dialog
  - closing the cart restores focus
  - cart quantity changes are announced through a polite live region
- Improved keyboard behavior:
  - product size radio buttons support arrow/Home/End navigation
  - evidence tabs support arrow/Home/End navigation
  - active tabs update `tabindex`
- Added a preview support assistant module bound to approved FAQ/operational topics.
  - It answers from FAQ text when it has a match.
  - It handles payment and delivery at prototype level.
  - It refuses medical/medication questions and routes them to doctor/pharmacist guidance.

## Still Not Production-Ready

- Final domain/canonical URLs are unknown.
- Final product names, prices, GTIN/SKU, images, COA PDFs and batch values are missing.
- Product/merchant structured data should be finalized only after real product and shipping/return data exists.
- Producer video needs real file, poster, transcript/captions and then VideoObject markup.
- Vipps subscriptions are not promised; they require a verified Shopify/subscription/payment architecture.
- Native support agent backend is not built yet; current assistant is a static preview of the intended guardrails.

## Sources

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google ecommerce structured data: https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce
- Google product structured data: https://developers.google.com/search/docs/appearance/structured-data/product
- Google FAQ structured data: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- W3C WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
- Vipps/MobilePay Shopify: https://developer.vippsmobilepay.com/docs/plugins-ext/shopify/
- Vipps/MobilePay Recurring API: https://developer.vippsmobilepay.com/docs/APIs/recurring-api/
- Shopify subscriptions: https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations
- Bring ecommerce resources: https://developer.bring.com/api/e-commerce-solutions/
- OpenAI File Search: https://developers.openai.com/api/docs/guides/tools-file-search
