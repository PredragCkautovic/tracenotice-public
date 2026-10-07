export const site = {
  name: "TraceNotice",
  url: "https://tracenotice.com",
  description:
    "Article 50 release infrastructure for live AI products: inspect the surface, ship the fix, retain the evidence.",
  offers: {
    snapshot: {
      id: "snapshot",
      name: "AI Surface Fix",
      price: "€190",
      amount: 190,
      cadence: "one-time",
      target: "24h target",
      paypal: "https://www.paypal.com/ncp/payment/PLB-DGCNMXS725LE",
      summary: "One live public AI surface, turned into an implementation-ready release ticket.",
      bullets: [
        "Live public-surface review",
        "Exact disclosure and placement recommendation",
        "Developer-ready remediation ticket",
        "Acceptance test checklist",
        "Evidence-retention checklist",
      ],
    },
    audit: {
      id: "audit",
      name: "Agency Release Gate",
      price: "€490",
      amount: 490,
      cadence: "founding pilot",
      target: "2 business days",
      paypal: "https://www.paypal.com/ncp/payment/PLB-TTFVYVVFUXK5",
      summary: "Up to three client AI surfaces, packaged for a white-label release handoff.",
      bullets: [
        "Up to 3 public client surfaces",
        "Per-surface implementation brief",
        "Developer ticket + acceptance criteria",
        "Evidence checklist per release",
        "One remediation re-check per surface",
        "Founding renewal path at the same €490 scope",
      ],
    },
    sprint: {
      id: "sprint",
      name: "Implementation Sprint",
      price: "€2,500",
      amount: 2500,
      cadence: "one product",
      target: "priority delivery",
      paypal: "https://www.paypal.com/ncp/payment/PLB-29SWYAFW7TJE",
      summary: "A deeper remediation sprint for a product with multiple AI surfaces or a larger release backlog.",
      bullets: [
        "Multi-surface review",
        "Prioritized remediation backlog",
        "Disclosure / marking implementation notes",
        "Acceptance criteria",
        "Evidence register",
        "Product + engineering handoff",
      ],
    },
  },
} as const;

export type OfferKey = keyof typeof site.offers;
