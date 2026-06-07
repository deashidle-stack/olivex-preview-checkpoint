# Support Agent Production Blueprint - 2026-06-07

Purpose: define the production path for the OliveX support agent so it can become a controlled support product, not a free chatbot.

## Recommendation

Build the production agent with:

- Shopify storefront widget
- server-side endpoint or Shopify app proxy
- OpenAI Responses API
- `file_search` over approved OliveX documents
- server-side Shopify tools for live product/order/subscription data
- explicit guardrails for medical, claim-sensitive and missing-source questions
- privacy/cookie/legal review before launch

Do not build a new production support agent on the deprecated Assistants API.

## Architecture

1. Shopify widget
   - Norwegian UI.
   - Suggested questions.
   - Visible support handoff.
   - No API keys in the browser.

2. Server endpoint
   - Holds OpenAI and Shopify credentials.
   - Adds rate limiting and abuse protection.
   - Logs only necessary operational data.
   - Converts unknown or unsafe questions into a support task.

3. Retrieval
   - Responses API with `file_search`.
   - Vector store containing approved FAQ, product, COA, payment, shipping, return, legal and privacy files.
   - Include source labels in answers.

4. Shopify tools
   - Product/pricing/inventory from Shopify.
   - Order status only after secure customer identification.
   - Subscription, refund and return data only after the live app flow is tested.

5. Guardrails
   - Pre-filter for disease, medicine, pregnancy, treatment, side effects, biomarker, antioksidant and claim-sensitive language.
   - System instruction to answer only from approved sources.
   - Handoff for medical or uncertain questions.
   - Draft sources blocked in production mode.

## KB Metadata Contract

Each source document should include:

```json
{
  "doc_type": "faq | product | coa | shipping | returns | legal | payment | privacy",
  "approval_status": "draft | approved | expired",
  "language": "nb",
  "product_id": "shopify_product_id_or_pending",
  "batch_id": "batch_id_if_relevant",
  "claim_review": "approved | restricted | blocked",
  "last_reviewed": "YYYY-MM-DD",
  "owner": "role_or_person"
}
```

Production agent rule: use only `approval_status=approved`.

## Rollout

1. FAQ-only mode.
2. Internal agent pilot.
3. Limited live agent for practical questions.
4. Extended support with order/subscription tools only after secure Shopify integration.

## Go/No-Go

Do not activate the live agent until:

- FAQ/product copy has claim review.
- Product data, sizes, prices and COA are real.
- Shipping, return, payment and subscription terms are approved.
- Personvern/cookie/support terms mention AI/chat and logging.
- Server endpoint keeps all secrets out of the browser.
- Rate limiting and fallback behavior are tested.
- Medical handoff passes the standard test suite.
- Unknown questions become support tasks.

## Official Sources Checked

- OpenAI Responses migration: https://platform.openai.com/docs/guides/migrate-to-responses
- OpenAI File Search: https://platform.openai.com/docs/guides/tools-file-search
- OpenAI Agents guide: https://platform.openai.com/docs/guides/agents
- OpenAI safety best practices: https://platform.openai.com/docs/guides/safety-best-practices
- OpenAI deployment checklist: https://developers.openai.com/api/docs/guides/deployment-checklist
- Shopify Customer Privacy API: https://shopify.dev/docs/api/customer-privacy
- Shopify legal pages: https://help.shopify.com/en/manual/privacy-and-security/privacy/legal-pages
- Shopify Admin GraphQL API: https://shopify.dev/docs/api/admin-graphql
- Shopify app proxies: https://shopify.dev/docs/apps/build/online-store/app-proxies
