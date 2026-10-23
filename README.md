# TownesDev Site

Clean-room foundation for the next TownesDev website.

The currently verified production holding page remains in the legacy
[`TownesDev/web-app`](https://github.com/TownesDev/web-app) project. This repository
is intentionally isolated from that application's SaaS, billing, authentication,
CMS, and customer-data architecture.

## Baseline

- Next.js 16.4.3 App Router
- React 19.3
- TypeScript with strict checking
- Plain CSS with no UI framework
- Vitest unit and contract tests
- Node.js 24
- No runtime services or secrets

The temporary page and crawler directives are `noindex`/`nofollow` until a future
site is approved for public indexing.

## Commands

```bash
npm ci
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm audit
```

## Boundaries

- Do not copy the legacy source tree or lockfile into this repository.
- Do not add accounts, checkout, subscriptions, pricing, forms, Stripe, Sanity,
  email, CRM, or portal behavior without an approved change record.
- Do not copy legacy environment variables or secrets.
- Do not attach `townes.dev` before a separately approved production cutover.

See [deployment guardrails](docs/operations/deployment.md) for preview, cutover,
and rollback rules.
