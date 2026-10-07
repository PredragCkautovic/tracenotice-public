"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

const APP_ID = "6ac67667a7a9a0001c8ef8e6";
const STORAGE_KEY = "tracenotice-analytics-consent";

type Consent = "analytics" | "necessary" | null;
type ApolloWindow = Window & { trackingFunctions?: { onLoad: (options: { appId: string }) => void } };

function fireApollo() {
  const w = window as ApolloWindow;
  if (w.trackingFunctions?.onLoad) {
    w.trackingFunctions.onLoad({ appId: APP_ID });
    return;
  }
  if (document.getElementById("apollo-website-tracker-runtime")) return;
  const script = document.createElement("script");
  script.id = "apollo-website-tracker-runtime";
  script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${Math.random().toString(36).slice(2)}`;
  script.async = true;
  script.defer = true;
  script.onload = () => (window as ApolloWindow).trackingFunctions?.onLoad({ appId: APP_ID });
  document.head.appendChild(script);
}

export function ApolloAnalytics() {
  const pathname = usePathname();
  const isClient = useSyncExternalStore(() => () => {}, () => true, () => false);
  const [choice, setChoice] = useState<Consent>(null);
  const stored = isClient ? window.localStorage.getItem(STORAGE_KEY) as Consent : null;
  const gpc = isClient && Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl);
  const consent: Consent = choice ?? stored ?? (gpc ? "necessary" : null);

  useEffect(() => {
    if (consent !== "analytics") return;
    fireApollo();
  }, [consent, pathname]);

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  if (!isClient || consent) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/12 bg-[#0a1512]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,.45)] backdrop-blur-xl md:flex md:items-center md:gap-5 md:p-5" aria-label="Analytics preferences">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-black text-white">Optional analytics</p>
        <p className="mt-1 text-sm leading-6 text-white/68">TraceNotice can use Apollo company-level website analytics to understand which pages attract business interest. It runs only if you accept analytics.</p>
        <Link href="/privacy" className="mt-2 inline-block text-xs font-bold text-[#A6E878] hover:underline">Privacy details</Link>
      </div>
      <div className="mt-4 flex shrink-0 flex-wrap gap-2 md:mt-0">
        <button type="button" onClick={() => choose("necessary")} className="rounded-xl border border-white/14 bg-white/[0.04] px-4 py-2.5 text-sm font-extrabold text-white/78 transition hover:bg-white/[0.08] hover:text-white">Necessary only</button>
        <button type="button" onClick={() => choose("analytics")} className="cta-green rounded-xl bg-[#A6E878] px-4 py-2.5 text-sm font-black text-[#07100e] transition hover:brightness-95">Accept analytics</button>
      </div>
    </aside>
  );
}
