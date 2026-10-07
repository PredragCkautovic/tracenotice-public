import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Voice AI disclosure under EU AI Act Article 50",
  description: "Practical voice AI and AI phone-agent disclosure guidance under Article 50: audible timing, handoff, retries, locales, QA and evidence.",
  alternates: { canonical: "/voice-ai-disclosure/" },
  openGraph: { title: "Voice AI disclosure under Article 50 | TraceNotice", description: "Practical voice-agent transparency guidance for AI phone and conversational voice systems.", url: "/voice-ai-disclosure/", images: ["/og/tracenotice-og.png"] },
  twitter: { card: "summary_large_image", title: "Voice AI disclosure under Article 50 | TraceNotice", description: "Practical voice-agent transparency guidance for AI phone and conversational voice systems.", images: ["/og/tracenotice-og.png"] },
};

export default function Page(){
  return <SeoLandingPage slug="voice-ai-disclosure" eyebrow="Voice AI disclosure" title="Voice AI disclosure for AI phone and conversational voice systems" lead="Voice agents need a transparency experience that works without a screen. Review the audible opening, retries, transfers and reconnect flows so the user can understand when they are interacting with AI and when that state changes." sections={[
    { title: "Make the disclosure audible in the real call flow", body: "Test the production or public demonstration path from the first answered call or voice interaction. The disclosure should not depend on a visual interface the caller may never see." },
    { title: "Test edge cases, not only the happy path", body: "Voice flows can change after silence, no-input retries, voicemail detection, call transfer, interruption or reconnection.", bullets: ["First answered interaction and outbound callback opening.", "No-input and retry prompts.", "Transfer from AI to a human and, where applicable, return to AI.", "Supported languages and accent/locale variants.", "Call recording or transcript paths used as release evidence."] },
    { title: "Keep the wording understandable", body: "Product teams should evaluate whether the disclosure is audible, concise and understandable before the rest of the interaction competes for the user's attention. Avoid burying the AI identity inside a long opening script." },
    { title: "Retain release evidence", body: "A short dated call recording, transcript excerpt, deployment reference and acceptance checklist can establish what the public voice experience actually did at release time." },
  ]} faq={[
    { q: "Does an AI phone agent need a visual disclosure?", a: "A voice-only interaction may require an audible implementation because the user may never encounter a screen. The exact duty depends on the system and context." },
    { q: "Should the AI disclosure repeat after a transfer?", a: "Handoff states should be tested so users are not left uncertain about whether they are speaking with AI or a human. The exact product behavior should be reviewed in context." },
    { q: "Can TraceNotice review an outbound callback demo?", a: "Yes, where a public or buyer-provided non-confidential interaction path is available. The review can focus on the observable opening, handoff and acceptance evidence." },
  ]} related={[
    { label: "Article 50 overview", href: "/article-50-ai-act/" },
    { label: "Article 50 checklist", href: "/article-50-checklist/" },
    { label: "Chatbot disclosure", href: "/ai-chatbot-disclosure/" },
  ]}/>;
}
