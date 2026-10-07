import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "TraceNotice — AI transparency release infrastructure", template: "%s | TraceNotice" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "TraceNotice — inspect, fix, evidence", description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: "TraceNotice", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script id="apollo-website-tracker" strategy="beforeInteractive">{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6ac67667a7a9a0001c8ef8e6"})},document.head.appendChild(o)}initApollo();`}</Script>
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
