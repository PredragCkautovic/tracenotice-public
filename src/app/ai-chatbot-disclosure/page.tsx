import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "AI chatbot disclosure under EU AI Act Article 50",
  description: "How to implement an AI chatbot disclosure for Article 50: timing, wording, placement, mobile QA, human handoff and release evidence.",
  alternates: { canonical: "/ai-chatbot-disclosure/" },
  openGraph: { title: "AI chatbot disclosure under Article 50 | TraceNotice", description: "Practical chatbot disclosure guidance for product and engineering teams.", url: "/ai-chatbot-disclosure/", images: ["/og/tracenotice-og.png"] },
  twitter: { card: "summary_large_image", title: "AI chatbot disclosure under Article 50 | TraceNotice", description: "Practical chatbot disclosure guidance for product and engineering teams.", images: ["/og/tracenotice-og.png"] },
};

export default function Page(){
  return <SeoLandingPage slug="ai-chatbot-disclosure" eyebrow="AI chatbot disclosure" title="How to implement an AI chatbot disclosure under Article 50" lead="For public AI chat experiences, the implementation question is not only what the disclosure says. It is whether a user can understand that they are interacting with AI at the relevant point in the journey—and whether that remains true on every device and state." sections={[
    { title: "Place the disclosure in the real interaction path", body: "Review the launcher, pre-chat state, header and first-response flow. If the AI identity appears only after the user has already interacted, product and legal teams should review whether the timing matches the intended transparency requirement." },
    { title: "Design for mobile and embedded chat", body: "Chat widgets are frequently constrained by small screens and host-page overlays. Disclosure text should remain legible, tappable controls should not overlap it, and the information should survive keyboard opening, rotation and narrow viewport states.", bullets: ["Test common phone widths and at least one tablet breakpoint.", "Check launcher, expanded widget and full-screen mobile chat states.", "Confirm the disclosure is not hidden by cookie banners, fixed footers or keyboard overlays.", "Verify contrast, font size and line wrapping in supported themes."] },
    { title: "Handle human handoff clearly", body: "When a conversation moves from AI to a human agent—or back again—the interface should not leave users guessing which state they are in. Capture the transition as part of QA and retained release evidence." },
    { title: "Keep evidence of what shipped", body: "Retain a dated screenshot or recording of the disclosure state, the implementation ticket or release reference, and the acceptance result for the primary mobile and desktop journeys." },
  ]} faq={[
    { q: "Does a chatbot disclosure have to use specific words?", a: "The Commission guidance focuses on making people aware that they are interacting with an AI system, unless that is obvious from the circumstances and context. Exact product wording should be reviewed in context." },
    { q: "Should the disclosure appear before the first message?", a: "Timing is a key implementation question. Product teams should review whether the disclosure is present at the relevant interaction point rather than only after the user has already engaged." },
    { q: "Can TraceNotice review a public chat widget without credentials?", a: "Yes. A standard review can start from a publicly accessible chat experience and produce observable implementation findings and acceptance criteria." },
  ]} related={[
    { label: "Article 50 overview", href: "/article-50-ai-act/" },
    { label: "Article 50 checklist", href: "/article-50-checklist/" },
    { label: "Voice AI disclosure", href: "/voice-ai-disclosure/" },
  ]}/>;
}
