import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ApolloAnalytics } from "@/components/ApolloAnalytics";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "TraceNotice — EU AI Act Article 50 implementation support", template: "%s | TraceNotice" },
  description: "Article 50 implementation support for public AI chat, voice and generative AI surfaces: disclosure, acceptance criteria and release evidence.",
  applicationName: "TraceNotice",
  category: "technology",
  manifest: "/site.webmanifest",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  keywords: ["EU AI Act Article 50", "Article 50 compliance", "AI transparency", "AI chatbot disclosure", "voice AI disclosure", "AI-generated content labelling", "AI compliance"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "TraceNotice — EU AI Act Article 50 implementation support", description: "Inspect public AI surfaces, turn transparency gaps into implementation work, and retain release evidence.", url: site.url, siteName: site.name, type: "website", images: [{ url: "/og/tracenotice-og.png", width: 1200, height: 630, alt: "TraceNotice — Article 50 implementation support" }] },
  twitter: { card: "summary_large_image", title: "TraceNotice — Article 50 implementation support", description: "Practical AI transparency implementation support for chat, voice and generative AI.", images: ["/og/tracenotice-og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#06100e", colorScheme: "dark" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${site.url}/#organization`, name: "TraceNotice", url: site.url, logo: `${site.url}/logo-512.png`, description: "Technical implementation support for public AI transparency surfaces under the EU AI Act." },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: "TraceNotice", publisher: { "@id": `${site.url}/#organization` }, inLanguage: "en" },
    { "@type": "Service", "@id": `${site.url}/#service`, name: "TraceNotice AI transparency implementation review", provider: { "@id": `${site.url}/#organization` }, areaServed: "European Union", serviceType: "AI transparency implementation support", description: "Public-surface review, implementation brief, acceptance criteria and release-evidence checklist for AI chat, voice and generative AI products." }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ApolloAnalytics />
      </body>
    </html>
  );
}
