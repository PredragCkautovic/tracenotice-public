import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileInput, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Delivery", robots: { index: false, follow: false } };

export default function ThanksPage(){
  return <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24"><div className="rounded-[2.5rem] border border-[#d9ff58]/25 bg-[#0c1714] p-7 md:p-10"><div className="flex items-center gap-3 text-[#d9ff58]"><ShieldCheck/><span className="text-xs font-black uppercase tracking-[.18em]">After PayPal</span></div><h1 className="mt-6 text-5xl font-black tracking-[-.055em] md:text-7xl">Start the implementation handoff.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/50">Download the reusable implementation pack, then submit the public surface through the appropriate intake. A return to this page is not itself an accounting confirmation; revenue is counted only after PayPal confirms payment.</p><div className="mt-10 grid gap-4 md:grid-cols-2"><a href="/downloads/implementation-pack.md" download className="rounded-3xl bg-[#d9ff58] p-6 text-[#07100e]"><Download/><h2 className="mt-8 text-2xl font-black">Download implementation pack</h2><p className="mt-2 text-sm leading-6 opacity-65">Surface inventory, control mapping, QA, evidence capture, remediation, and reviewer handoff templates.</p></a><Link href="/contact" className="rounded-3xl border border-white/10 bg-white/[.025] p-6"><FileInput className="text-[#d9ff58]"/><h2 className="mt-8 text-2xl font-black">Open the intake path</h2><p className="mt-2 text-sm leading-6 text-white/50">Choose customer or agency and provide only public/non-confidential surface information.</p></Link></div></div></div>;
}
