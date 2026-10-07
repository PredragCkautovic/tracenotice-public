import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Article 50 compliance checklist for AI products",
  description: "A practical Article 50 implementation checklist for AI chat, voice and generative AI releases: disclosure, marking, QA and evidence retention.",
  alternates: { canonical: "/article-50-checklist/" },
  openGraph: { title: "Article 50 implementation checklist | TraceNotice", description: "A practical release checklist for AI transparency under Article 50.", url: "/article-50-checklist/", images: ["/og/tracenotice-og.png"] },
  twitter: { card: "summary_large_image", title: "Article 50 implementation checklist | TraceNotice", description: "Release checklist for AI transparency under Article 50.", images: ["/og/tracenotice-og.png"] },
};

export default function Page(){
  return <SeoLandingPage slug="article-50-checklist" eyebrow="Article 50 checklist" title="A practical Article 50 implementation checklist" lead="Use this checklist to turn AI transparency requirements into release work your product, engineering and QA teams can actually verify. It is designed for public AI chat, voice and generative-AI surfaces." sections={[
    { title: "1. Classify the surface", body: "Start with the observable product experience and the organisation's role in that experience.", bullets: ["Identify whether the surface is interactive AI, voice AI, a generated-content feature, a deepfake/synthetic-content flow, or another Article 50-relevant use case.", "Record whether your organisation acts as provider, deployer, or both for the relevant surface.", "Document the public URL, locale, channel, device type and release/version being reviewed."] },
    { title: "2. Verify the disclosure experience", body: "A disclosure that exists only in a policy page may not match the user journey. Test the actual interaction path.", bullets: ["Check whether the user encounters the AI disclosure at the relevant interaction point.", "Verify wording on phone, tablet and desktop breakpoints.", "For voice systems, check audible disclosure before or at the relevant interaction point.", "Test human handoff, reconnect, deep links, locale changes and logged-out states where applicable."] },
    { title: "3. Check generated-content marking and labels", body: "Where machine-readable marking or deployer disclosure applies, verify the shipped output path rather than relying on roadmap statements.", bullets: ["Capture an example output and identify what marking, metadata, provenance or visible label is present.", "Verify the mechanism survives export, download, reposting or format conversion where relevant.", "Record known limitations or exceptions for legal/product review."] },
    { title: "4. Retain release evidence", body: "Evidence should make it easy to understand what users saw, what changed, and which release was tested.", bullets: ["Dated screenshots or recordings of the final interaction state.", "Developer ticket or release reference for the implemented change.", "Acceptance-test result for the relevant breakpoints, locales and channels.", "A short note describing the reviewed public surface and the evidence artefact retained."] },
  ]} faq={[
    { q: "Is this checklist legal advice?", a: "No. It is an operational implementation checklist. Final legal interpretation and applicability should be reviewed in the context of the actual product and jurisdiction." },
    { q: "Can this be used for AI agencies with multiple client products?", a: "Yes. The same surface-by-surface structure can be repeated for separate client chat, voice or generative-AI releases." },
    { q: "What is the fastest TraceNotice starting point?", a: "The €190 review covers one public AI surface and is designed to produce a focused implementation brief, acceptance criteria and evidence checklist." },
  ]} related={[
    { label: "Article 50 overview", href: "/article-50-ai-act/" },
    { label: "Chatbot disclosure guide", href: "/ai-chatbot-disclosure/" },
    { label: "Voice AI disclosure guide", href: "/voice-ai-disclosure/" },
  ]}/>;
}
