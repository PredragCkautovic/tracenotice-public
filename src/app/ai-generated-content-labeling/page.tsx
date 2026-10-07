import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "AI-generated content labelling and Article 50",
  description: "Practical Article 50 guidance for AI-generated and manipulated content: machine-readable marking, deepfake disclosure, provenance and release evidence.",
  alternates: { canonical: "/ai-generated-content-labeling/" },
  openGraph: { title: "AI-generated content labelling and Article 50 | TraceNotice", description: "Practical guidance for generated-content marking, deepfake disclosure and evidence.", url: "/ai-generated-content-labeling/", images: ["/og/tracenotice-og.png"] },
  twitter: { card: "summary_large_image", title: "AI-generated content labelling and Article 50 | TraceNotice", description: "Generated-content marking, deepfake disclosure and release evidence under Article 50.", images: ["/og/tracenotice-og.png"] },
};

export default function Page(){
  return <SeoLandingPage slug="ai-generated-content-labeling" eyebrow="AI-generated content" title="AI-generated content labelling, marking and Article 50" lead="Article 50 includes transparency obligations for certain AI-generated and manipulated content. Implementation can involve machine-readable marking by providers and additional visible or audible disclosure obligations for deployers in specific use cases." sections={[
    { title: "Separate provider marking from deployer disclosure", body: "The Commission guidance distinguishes technical marking obligations for certain provider outputs from deployer-facing disclosure duties that can apply to deepfakes and other specified content. Product teams should map which role applies to each release path." },
    { title: "Test the actual generated output", body: "Do not stop at a platform capability statement. Generate an example output and verify what metadata, provenance signal, watermark, content credential or visible label survives the route users actually take.", bullets: ["Generate representative outputs from the production or release-candidate flow.", "Inspect downloaded/exported files and any public rendering path.", "Record which marking or provenance mechanism is present and where it can be detected.", "Capture known transformations that remove or alter the signal."] },
    { title: "Deepfake and synthetic-content disclosure", body: "Where a deployer disclosure obligation applies, the visible or audible disclosure should be reviewed in the context of the content experience—not only in general terms or policy text." },
    { title: "Create an evidence handoff", body: "Retain representative output files, screenshots, metadata/provenance inspection results, the implementation ticket and acceptance criteria used to approve the release." },
  ]} faq={[
    { q: "Does Article 50 require all AI-generated content to carry the same label?", a: "No. The obligations vary by role, content type and use case. Provider marking and deployer disclosure are distinct concepts, and exceptions can apply." },
    { q: "Are C2PA or watermarks the only possible implementation?", a: "The Commission's framework is technology-neutral. The appropriate technical approach should be evaluated against the applicable obligation, state of the art and the actual output path." },
    { q: "Can TraceNotice test public generated-content outputs?", a: "Yes. TraceNotice can inspect observable output paths and turn those observations into implementation findings, acceptance criteria and evidence-retention steps." },
  ]} related={[
    { label: "Article 50 overview", href: "/article-50-ai-act/" },
    { label: "Article 50 checklist", href: "/article-50-checklist/" },
    { label: "Chatbot disclosure", href: "/ai-chatbot-disclosure/" },
  ]}/>;
}
