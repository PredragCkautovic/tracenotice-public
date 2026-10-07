import type { Metadata } from "next";
import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Security & evidence handling" };

export default function SecurityPage(){
  const items=[
    [ShieldCheck,"Public-first review","The standard workflow is built around publicly accessible AI surfaces so the first engagement can avoid production credentials and internal systems."],
    [LockKeyhole,"PayPal-hosted payment","Card details stay on PayPal. TraceNotice links the buyer to PayPal and does not collect card data in the app."],
    [EyeOff,"Minimize confidential material","Do not use the public fallback contact routes for secrets, private customer data, private URLs, confidential source code, or private deal terms."],
  ] as const;
  return <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24"><p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">Security & evidence handling</p><h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.055em] md:text-7xl">Reduce the data footprint before adding complexity.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/64">TraceNotice deliberately starts with public/non-confidential evidence wherever possible. That makes the initial release review easier to buy, easier to fulfill, and safer to operate.</p><div className="mt-12 grid gap-3 md:grid-cols-3">{items.map(([Icon,title,body])=><article key={title} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><Icon className="text-[#A6E878]"/><h2 className="mt-8 text-xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-white/64">{body}</p></article>)}</div><div className="mt-10 rounded-3xl border border-white/10 bg-[#0c1714] p-7 text-sm leading-7 text-white/64"><b className="text-white">Evidence principle:</b> retain enough information to understand what was shipped, when it was shipped, how it was tested, and which visible surface the evidence refers to—without collecting unrelated customer data.</div></div>;
}
