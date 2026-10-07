import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FileCheck2, RefreshCcw, Users, Workflow } from "lucide-react";
import { PayPalButton } from "@/components/PayPalButton";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Agency release gate", description: "A white-label-ready Article 50 release workflow for AI, web, and automation agencies.", alternates: { canonical: "/agency/" } };

export default function AgencyPage(){
  const offer=site.offers.audit;
  return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <section className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">For AI · web · automation agencies</p><h1 className="mt-4 text-balance text-5xl font-black leading-[.94] tracking-[-.06em] md:text-8xl">Add a release gate without becoming a compliance consultancy.</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-white/68">TraceNotice reviews the actual public client surface, converts the observation into exact implementation work, and returns a client-ready evidence handoff your delivery team can reuse.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/scope-check" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 font-black">Run free scope check</Link><Link href="/sample" className="rounded-2xl border border-white/15 px-5 py-3.5 font-black text-white/60">See sample</Link></div></div><div className="rounded-[2rem] border border-[#A6E878]/30 bg-[#0b1814] p-7 text-white shadow-[0_18px_60px_rgba(0,0,0,.22)]"><p className="text-xs font-black uppercase tracking-[.18em] opacity-55">Founding agency pilot</p><div className="mt-6 text-7xl font-black tracking-[-.07em]">€490</div><p className="mt-2 font-bold opacity-60">up to 3 public client surfaces</p><div className="mt-6 space-y-3">{offer.bullets.map(x=><div key={x} className="flex gap-2 text-sm font-semibold"><Check size={17} className="mt-0.5 shrink-0"/>{x}</div>)}</div><div className="mt-8"><PayPalButton href={offer.paypal} label="Pay €490 with PayPal"/></div></div></section>
    <section className="mt-24"><p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">How it fits delivery</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.05em] md:text-6xl">One narrow release workflow your agency can repeat.</h2><div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{[
      [Users,"Choose client surfaces","Pick one to three public chat, voice, or generative AI surfaces."],
      [Workflow,"Get implementation briefs","Each surface gets observed state, exact change, and developer acceptance criteria."],
      [FileCheck2,"Hand off evidence","Retain a concise evidence checklist for the client, procurement, or later review."],
      [RefreshCcw,"Re-check the fix","One remediation verification pass is included per surface."],
    ].map(([I,t,b])=>{const Icon=I as typeof Users;return <article key={String(t)} className="rounded-3xl border border-white/10 bg-white/[.025] p-6"><Icon className="text-[#A6E878]"/><h3 className="mt-8 text-xl font-black">{String(t)}</h3><p className="mt-3 text-sm leading-6 text-white/64">{String(b)}</p></article>})}</div></section>
    <section className="mt-24 grid gap-8 rounded-[2.5rem] border border-white/10 bg-[#0c1714] p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.18em] text-[#A6E878]">Commercial test first</p><h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-5xl">Prove the workflow on real client work before building a larger contract.</h2><p className="mt-4 max-w-3xl text-white/64">The pilot is deliberately fixed-scope. If the handoff is useful, the next step is repeatable month-to-month release work—not a vague enterprise transformation project.</p></div><Link href="/checkout?plan=audit" className="cta-green inline-flex items-center justify-center gap-2 rounded-2xl bg-[#A6E878] px-6 py-4 font-black text-[#07100e]">Start pilot <ArrowRight size={18}/></Link></section>
  </div>;
}
