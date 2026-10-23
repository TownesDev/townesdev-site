# Deployment guardrails

This repository is the clean-room successor to `TownesDev/web-app`. The legacy
repository and its Vercel project remain the production rollback point until a
separate cutover is approved and verified.

## Foundation phase

- Deploy only to the separate Vercel project named `townesdev-site`.
- Use generated Vercel preview URLs for review.
- Do not assign `townes.dev` or another custom domain to this project.
- Do not copy environment variables or secrets from the legacy project.
- Do not add billing, authentication, CMS, email, or customer-data integrations
  without a separate approved change record.

## Future cutover

A production cutover requires a separate Captain approval after preview
acceptance. The intended operation is a Vercel alias reassignment; DNS,
nameservers, and MX/email records remain unchanged.

Before cutover:

1. Confirm CI and the Vercel production build are green.
2. Crawl every public route and verify metadata, accessibility, and health.
3. Record the release commit and deployment ID.
4. Confirm the legacy holding deployment is still available for rollback.

Rollback after a future cutover is to restore `townes.dev` to the verified legacy
holding deployment. Do not delete the legacy repository or Vercel project during
the soak period.
