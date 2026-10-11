import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Article 50 evidence pack template for AI releases",
  description: "A practical Article 50 release-evidence pack for AI chat, voice and generative AI: observed state, exact change, acceptance test and retained proof.",
  alternates: { canonical: "/article-50-evidence-pack/" },
  openGraph: {
    title: "Article 50 evidence pack template | TraceNotice",
    description: "A copyable release-evidence structure for public AI surfaces: observed state, implementation change, acceptance test and retained proof.",
    url: "/article-50-evidence-pack/",
    images: ["/og/tracenotice-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article 50 evidence pack template | TraceNotice",
    description: "A practical evidence-pack structure for AI chat, voice and generative-AI releases.",
    images: ["/og/tracenotice-og.png"],
  },
};

export default function Page() {
  return <SeoLandingPage
    slug="article-50-evidence-pack"
    eyebrow="Article 50 evidence pack"
    title="Build release evidence that shows what actually shipped"
    lead="A useful evidence pack connects the public AI surface to the exact implementation change, acceptance test and retained proof. Use this structure for chat, voice and generative-AI releases instead of keeping a policy-only record that is detached from the product experience."
    updated="12 October 2026"
    sections={[
      {
        title: "1. Start with the observable release state",
        body: "Record the public experience before describing a fix. The evidence pack should let a reviewer understand which surface, release and user journey were actually tested.",
        bullets: [
          "Public surface URL or channel, product name, locale and device or client type.",
          "Release, deployment or ticket reference that identifies the reviewed version.",
          "A short factual description of what a user sees or hears at the relevant interaction point.",
          "A dated screenshot, recording or output sample where appropriate and safe to retain.",
        ],
      },
      {
        title: "2. Tie the finding to one exact implementation change",
        body: "Avoid vague conclusions such as ‘add transparency’. Write the product change so engineering can implement it and QA can verify it.",
        bullets: [
          "Exact proposed disclosure or label wording where supportable.",
          "Placement or timing: for example before first meaningful chat interaction, in an audible opening for a voice flow, or at the relevant generated-content presentation point.",
          "Fallback and edge cases such as reconnects, deep links, logged-out states, locales and human handoff.",
          "Known uncertainty or legal-interpretation questions that should be escalated rather than guessed.",
        ],
      },
      {
        title: "3. Write an acceptance test before release",
        body: "The acceptance test turns the implementation note into a release gate. It should be specific enough that a different person can reproduce the check.",
        bullets: [
          "Precondition: exact public URL, build, locale, device and account state where relevant.",
          "Action: the shortest reproducible path a user follows to reach the AI interaction or generated output.",
          "Expected result: the disclosure, marking or label appears at the intended point and remains legible or audible.",
          "Edge checks: mobile breakpoints, retry/reconnect, alternate locale, export/download or other relevant product path.",
        ],
      },
      {
        title: "4. Retain evidence that maps back to the test",
        body: "Evidence is more useful when every artefact answers a specific acceptance criterion instead of becoming an unstructured folder of screenshots.",
        bullets: [
          "Evidence ID and capture date.",
          "Acceptance criterion the artefact demonstrates.",
          "Screenshot, recording, generated-output example or release reference.",
          "Reviewer or owner, plus any unresolved item that still needs product, legal or compliance review.",
        ],
      },
      {
        title: "5. Use the same schema across chat, voice and generated content",
        body: "The evidence structure stays consistent while the surface-specific proof changes.",
        bullets: [
          "Chat AI: capture the entry point, first interaction state, disclosure placement and mobile/desktop variants.",
          "Voice AI: retain an opening-call recording or QA artefact that shows audible timing, retry behavior and handoff where relevant.",
          "Generative AI: retain a representative output plus the visible label, metadata, provenance or machine-readable marking path being tested.",
          "Agency work: repeat the same pack per client surface so the handoff is separable and white-label-ready.",
        ],
      },
      {
        title: "6. Keep the pack operational, not declarative",
        body: "An evidence pack is not a certificate and should not overstate what was reviewed. Keep the boundary explicit.",
        bullets: [
          "Do not store credentials, private customer data or confidential production material in a public-surface review pack.",
          "Do not label the pack as proof of legal compliance or certification.",
          "Record only the surface and release actually tested; do not generalize one result to unrelated product flows.",
          "Escalate unresolved applicability or legal-interpretation questions to qualified counsel or the appropriate compliance owner.",
        ],
      },
    ]}
    faq={[
      {
        q: "What is the minimum useful Article 50 evidence pack?",
        a: "For an operational release record, keep the reviewed public surface and release reference, the observed state, the exact implementation change, a reproducible acceptance test, and a dated artefact showing the final result. The legal sufficiency of any evidence set depends on the actual product and context.",
      },
      {
        q: "Is an evidence pack the same as Article 50 certification?",
        a: "No. TraceNotice does not certify legal compliance. The pack is technical and operational release evidence that helps teams show what they implemented and tested.",
      },
      {
        q: "Can an agency use one template for multiple clients?",
        a: "Yes, but keep a separate evidence record per client surface and release. That makes each handoff auditable and avoids mixing unrelated product states.",
      },
      {
        q: "Can TraceNotice build the pack from a live public surface?",
        a: "Yes. The €190 AI Surface Fix covers one public AI surface and produces an implementation-ready brief, acceptance criteria and an evidence-retention checklist. A free scope check is available first if you are not ready to buy.",
      },
    ]}
    related={[
      { label: "Download the evidence-pack template", href: "/downloads/article-50-evidence-pack-template.md" },
      { label: "Article 50 implementation checklist", href: "/article-50-checklist/" },
      { label: "Chatbot disclosure guide", href: "/ai-chatbot-disclosure/" },
      { label: "Voice AI disclosure guide", href: "/voice-ai-disclosure/" },
    ]}
  />;
}
