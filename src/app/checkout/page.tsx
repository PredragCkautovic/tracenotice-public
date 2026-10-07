import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "@/components/CheckoutClient";

export const metadata: Metadata = { title: "Checkout", robots: { index: false, follow: false } };

export default function CheckoutPage(){
  return <Suspense fallback={<div className="mx-auto max-w-6xl px-5 py-24 text-white/50">Loading checkout…</div>}><CheckoutClient/></Suspense>;
}
