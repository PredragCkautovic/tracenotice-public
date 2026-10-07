import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/agency.html", destination: "/agency", permanent: true },
      { source: "/agency-intake.html", destination: "/checkout?plan=audit", permanent: true },
      { source: "/agency-mini-scan.html", destination: "/scope-check", permanent: true },
      { source: "/scope-check.html", destination: "/scope-check", permanent: true },
      { source: "/intake.html", destination: "/scope-check", permanent: true },
      { source: "/checkout.html", destination: "/checkout", permanent: true },
      { source: "/sample.html", destination: "/sample", permanent: true },
      { source: "/partners.html", destination: "/partners", permanent: true },
      { source: "/investors.html", destination: "/investors", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/security.html", destination: "/security", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/thanks.html", destination: "/thanks", permanent: true },
      { source: "/reply.html", destination: "/contact", permanent: true },
      { source: "/app.html", destination: "/partners", permanent: true },
      { source: "/article-50-chatbot-disclosure.html", destination: "/sample", permanent: true },
      { source: "/article-50-voice-agent-disclosure.html", destination: "/sample", permanent: true },
      { source: "/article-50-synthetic-content-marking.html", destination: "/sample", permanent: true },
    ];
  },
};

export default nextConfig;
