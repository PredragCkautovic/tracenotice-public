# TraceNotice

TraceNotice is technical implementation support for **EU AI Act Article 50** release surfaces. It reviews observable public AI chat, voice and generative-AI experiences and turns findings into exact implementation work, acceptance tests and release-evidence checklists.

**Live service:** https://tracenotice.com/

TraceNotice is not a law firm, does not provide legal certification, and does not claim that a technical review proves legal compliance.

## What TraceNotice delivers

The core workflow is deliberately operational:

1. **Observed public state** — what the user can actually see or hear in the reviewed release.
2. **Exact implementation change** — wording, placement, timing and engineering work where supportable.
3. **Acceptance test** — a reproducible QA check for the relevant surface, locale and device/channel.
4. **Evidence to retain** — a concise release record tied to the acceptance criteria.
5. **Remediation re-check** — included where the selected offer provides one.

This is intentionally different from a generic compliance checklist, disclosure-text generator or legal memo.

## Fixed-scope commercial offers

- **€190 — AI Surface Fix:** one live public AI surface, with an implementation-ready release ticket.  
  https://tracenotice.com/checkout/?plan=snapshot
- **€490 — Agency Release Gate:** up to three public client AI surfaces, white-label-ready handoff and one remediation re-check per surface.  
  https://tracenotice.com/checkout/?plan=audit
- **€2,500 — Implementation Sprint:** deeper multi-surface remediation and engineering handoff.  
  https://tracenotice.com/checkout/?plan=sprint

Payment is handled by PayPal. Standard reviews use **public/non-confidential inputs only**; do not send credentials, private customer data or confidential production material.

## Free entry points

- **2-minute scope check:** https://tracenotice.com/scope-check/
- **Sample output:** https://tracenotice.com/sample/
- **Agency mini-scan:** https://tracenotice.com/agency/

The free agency mini-scan uses one public surface and returns a concise observed-state note, one concrete implementation improvement where supportable, and what the paid pilot adds.

## Article 50 implementation resources

- Article 50 overview: https://tracenotice.com/article-50-ai-act/
- Practical implementation checklist: https://tracenotice.com/article-50-checklist/
- **Release-evidence pack guide:** https://tracenotice.com/article-50-evidence-pack/
- Copyable evidence-pack template: https://tracenotice.com/downloads/article-50-evidence-pack-template.md
- Chatbot disclosure guide: https://tracenotice.com/ai-chatbot-disclosure/
- Voice AI disclosure guide: https://tracenotice.com/voice-ai-disclosure/
- Generated-content labelling/marking guide: https://tracenotice.com/ai-generated-content-labeling/

Primary official sources used by the site include the European Commission Article 50 guidance and Q&A.

## Production architecture

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Static export
- Hostinger production hosting
- PayPal hosted checkout

The production source of truth is the `main` branch of this repository. The site is built as a static export and deployed to Hostinger; this repository is **not** a Vercel deployment target.

## Local development

```bash
bun install --frozen-lockfile
bun run lint
bun x tsc --noEmit
bun run build
```

Run the development server with:

```bash
bun run dev
```

## Search/discovery controls

Production publishes:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- canonical metadata on public search pages
- IndexNow key/submission support

Public implementation resources are indexable. Checkout, thanks and private operational surfaces are intentionally excluded from indexing.

## Security and data boundary

TraceNotice's standard public-surface workflow is designed around public/non-confidential material. Do not commit or submit credentials, private keys, production secrets, personal/customer data or confidential source material.

See https://tracenotice.com/security/ for the public handling boundary.
