import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "EU AI Act Article 50 transparency obligations",
  description: "Practical Article 50 guidance for public AI systems: interaction disclosure, AI-generated content marking, deepfake labelling, and implementation evidence.",
  alternates: { canonical: "/article-50-ai-act/" },
  openGraph: { title: "EU AI Act Article 50 transparency obligations | TraceNotice", description: "A practical implementation guide to Article 50 transparency obligations for interactive and generative AI systems.", url: "/article-50-ai-act/", images: ["/og/tracenotice-og.png"] },
  twitter: { card: "summary_large_image", title: "EU AI Act Article 50 transparency obligations | TraceNotice", description: "Practical Article 50 implementation guidance for AI products.", images: ["/og/tracenotice-og.png"] },
};

export default function Page(){
  return <SeoLandingPage slug="article-50-ai-act" eyebrow="EU AI Act · Article 50" title="Article 50 transparency obligations for AI systems" lead="Article 50 of the EU AI Act sets transparency duties for certain interactive, generative, biometric, and synthetic-content AI systems. The rules apply from 2 August 2026. This guide translates the public guidance into implementation questions a product team can actually test." sections={[
    { title: "What Article 50 covers", body: "The European Commission's guidance separates obligations for providers and deployers. Depending on the system and use case, relevant duties include informing people when they interact directly with AI, machine-readable marking of AI-generated or manipulated content, and disclosure for certain deepfakes, biometric or emotion-recognition systems, and public-interest text.", bullets: ["Interactive AI: make the AI nature clear to the person interacting with the system.", "AI-generated or manipulated content: providers may need machine-readable marking that supports detection.", "Deployers: additional visible or audible disclosure can apply to deepfakes and certain other content/use cases.", "The exact obligation depends on the product role, deployment context, content type, and applicable exception."] },
    { title: "Why implementation detail matters", body: "A policy sentence is not the same thing as a shipped disclosure. Teams need to decide where the disclosure appears, when a user sees or hears it, whether it survives responsive layouts and locale changes, what happens during human handoff, and what evidence is retained after release." },
    { title: "What to test on a public AI surface", body: "A practical release review should inspect the user journey rather than only the legal copy.", bullets: ["Can a first-time user tell they are interacting with AI before or at the relevant interaction point?", "Is the disclosure clear on mobile, tablet, desktop, and voice channels?", "Does wording remain visible or audible after navigation, escalation, or handoff?", "For generated content, is the chosen marking or label approach actually present in the output path?", "Can the team retain a dated screenshot, recording, test result, or release reference showing what shipped?"] },
    { title: "What TraceNotice does", body: "TraceNotice reviews observable public AI surfaces and converts findings into concrete implementation actions, developer-ready acceptance criteria, and an evidence checklist. It does not provide legal representation or certify legal compliance; legal interpretation remains with the buyer and qualified counsel where needed." },
  ]} faq={[
    { q: "When did Article 50 start to apply?", a: "The European Commission states that Article 50 transparency obligations apply from 2 August 2026. A limited transitional period applies to certain marking and detection obligations for systems placed on the market before that date." },
    { q: "Does every AI system need the same disclosure?", a: "No. The relevant duty depends on the type of AI system, whether the organisation is acting as provider or deployer, the content or interaction involved, the deployment context, and applicable exceptions." },
    { q: "Does TraceNotice certify Article 50 compliance?", a: "No. TraceNotice provides technical and operational implementation support for public AI surfaces, not legal certification or legal representation." },
    { q: "Can one public AI surface be reviewed without internal access?", a: "Yes. The standard TraceNotice review is deliberately public-first and can begin with a public URL or publicly accessible interaction path." },
  ]} related={[
    { label: "Article 50 implementation checklist", href: "/article-50-checklist/" },
    { label: "AI chatbot disclosure", href: "/ai-chatbot-disclosure/" },
    { label: "Voice AI disclosure", href: "/voice-ai-disclosure/" },
    { label: "AI-generated content labelling", href: "/ai-generated-content-labeling/" },
  ]}/>;
}
