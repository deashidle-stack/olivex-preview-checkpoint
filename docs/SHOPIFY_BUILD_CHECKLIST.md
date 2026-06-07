# Shopify Build Checklist

## 1. Store Setup

- Create Shopify store
- Add store name, sender email, legal company information and currency
- Configure Norwegian language
- Configure taxes/VAT settings with accountant/client confirmation
- Confirm domain and DNS plan
- Confirm Shopify plan supports required shipping-rate setup
- Confirm SSL active after domain connection

## 2. Products

- Create product 1
- Create product 2
- Add 2 size variants per product
- Add SKU per variant
- Add price per variant
- Add inventory tracking
- Add product images
- Add product descriptions
- Add ingredients and warnings
- Add serving size and daily dose
- Add shipping weight and dimensions

## 3. Product Metafields

Create metafields for:

- Batch ID
- Origin
- Lab name
- Test method
- Test date
- Certificate URL
- Active substance amount
- Serving size
- Number of servings
- Claim copy
- Claim condition
- Warnings
- Ingredients
- Nutrition declaration
- Storage

## 4. Theme Sections

Build or configure:

- Hero section
- Product selector section
- Featured product cards
- Quality Passport section
- Evidence tabs
- Product facts table
- Product size comparison table
- Mobile sticky add-to-cart on product page
- FAQ accordion
- Trust strip
- Shipping/payment section
- Lab Notes/article cards
- Footer with legal links

## 5. Payments

- Enable Shopify Payments for card payments
- Verify supported cards and payout account
- Install official Vipps/MobilePay Shopify plugin
- Configure Vipps merchant settings
- Run test payment if test mode is available
- Confirm refund/capture flow

## 6. Purchase Plans / Subscription

- Decide whether `Fast levering` launches in v1 or remains a later phase
- Choose Shopify subscription app/implementation if recurring delivery is included
- Confirm supported gateways for subscription products
- Verify whether the desired Vipps/MobilePay recurring experience is possible through Shopify or requires separate Vipps Recurring API architecture
- Define frequency, renewal date, cancellation, pause/change and refund terms
- Add approved subscription copy to product page, checkout and transactional email flow
- Test recurring order, failed payment, cancellation and refund
- Remove preview-only wording only after the full subscription flow is verified

## 7. Shipping

- Install Posten Bring Checkout app
- Configure shipping products
- Configure pickup point/home delivery rules
- Configure free shipping threshold if desired
- Test shipping rate calculation
- Test label generation
- Test tracking email flow

## 8. Legal And Compliance Pages

- Terms and conditions
- Privacy policy
- Cookie policy
- Returns and cancellation
- Shipping information
- Contact page
- Company information in footer

Important: legal text should be reviewed by the client or legal advisor.

## 9. SEO

- Homepage title and meta description
- Product title and meta description
- Clean product URLs
- Alt text on meaningful images
- Product structured data
- Sitemap submitted
- Google Search Console connected
- Google Merchant Center considered
- Internal links from articles to products

## 10. Analytics And Consent

- Shopify-compatible cookie consent/CMP solution with accept/reject/custom choices
- Google Consent Mode if Google tags are used
- GA4 connected after consent setup
- Ecommerce events tested:
  - `view_item`
  - `add_to_cart`
  - `begin_checkout`
  - `purchase`
- Meta/Google Ads pixels only after consent setup

## 11. QA

- Mobile layout
- Desktop layout
- Product variant switching
- Mobile sticky add-to-cart
- Add to cart
- Cart update
- Checkout path
- Vipps path
- Card path
- Shipping path
- Order confirmation
- Refund flow
- Contact form
- SEO metadata
- Broken links
- Accessibility basics

## 12. Training

Record or run a live session covering:

- Edit products
- Edit variants
- Upload images
- Update inventory
- Handle orders
- Capture/refund payments
- Print shipping labels
- Update pages
- Update SEO fields
- Read analytics
- Manage cookie/banner settings

Deliver a short runbook after training.
