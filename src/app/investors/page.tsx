import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, CircleDollarSign, Network, Route } from "lucide-react";

export const metadata: Metadata = { title: "Investor brief", description: "TraceNotice investor brief: early-stage Article 50 implementation and release-evidence infrastructure." };

export default function InvestorsPage(){
  return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <section><div className="flex flex-wrap gap-2">{["Pre-revenue","Product live","PayPal live","Agency pilot active"].map(x=><span key={x} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black text-white/68">{x}</span>)}</div><p className="mt-8 text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">Investor brief · October 2026</p><h1 className="mt-4 max-w-5xl text-balance text-5xl font-black leading-[.94] tracking-[-.06em] md:text-8xl">Turn mandatory AI transparency into repeatable release infrastructure.</h1><p className="mt-6 max-w-4xl text-xl leading-8 text-white/68">TraceNotice starts narrow: inspect the real public AI surface, specify the implementation fix, define acceptance evidence, and verify remediation. The software opportunity is to productize the parts that repeat only after paid workflows prove they deserve automation.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/sample" className="cta-green rounded-2xl bg-[#A6E878] px-5 py-3.5 font-black text-[#07100e]">Inspect product output</Link><Link href="/contact" className="rounded-2xl border border-white/15 px-5 py-3.5 font-black">Investor contact</Link></div></section>
    <section className="mt-20 grid gap-3 md:grid-cols-3">{[
      [CircleDollarSign,"Service wedge","€190 single-surface review, €490 agency pilot, €2,500 implementation sprint."],
      [Network,"Agency distribution","One agency can reuse the workflow across multiple client releases instead of buying once."],
      [Route,"Productization thesis","Surface registry → control/evidence mapping → remediation lifecycle → repeatable release records."],
    ].map(([Icon,t,b])=><article key={String(t)} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><Icon className="text-[#A6E878]"/><h2 className="mt-9 text-2xl font-black">{String(t)}</h2><p className="mt-3 text-sm leading-6 text-white/64">{String(b)}</p></article>)}</section>
    <section className="mt-20 grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><div className="rounded-[2.5rem] border border-[#A6E878]/28 bg-[#0b1814] p-7 text-white md:p-10"><ChartNoAxesCombined size={34}/><p className="mt-10 text-xs font-black uppercase tracking-[.18em] text-white/52">Near-term milestone</p><h2 className="mt-3 text-4xl font-black tracking-[-.05em]">Prove the first repeatable paid agency workflow.</h2><p className="mt-5 leading-7 text-white/68">The immediate objective is not vanity traffic or a huge feature set. It is converting qualified agencies into paid pilots, then testing whether the release gate repeats month-to-month.</p></div><div className="rounded-[2.5rem] border border-white/10 bg-[#0c1714] p-7 md:p-10"><p className="text-xs font-black uppercase tracking-[.18em] text-[#A6E878]">What capital should accelerate</p><div className="mt-6 space-y-6">{[
        ["Customer validation","More qualified public-surface tests and faster paid pilot conversion."],
        ["Delivery tooling","Structured evidence capture and remediation workflow without overbuilding SaaS too early."],
        ["Partner distribution","Agency, provenance, and governance integrations that multiply surface volume."],
      ].map(([t,b],i)=><div key={t} className="flex gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-xs font-black text-[#A6E878]">0{i+1}</span><div><h3 className="font-black">{t}</h3><p className="mt-1 text-sm leading-6 text-white/60">{b}</p></div></div>)}</div><Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-black text-[#A6E878]">Start an investor conversation <ArrowRight size={17}/></Link></div></section>
    <p className="mt-8 text-xs leading-5 text-white/48">TraceNotice is not claiming existing revenue or projected returns. Revenue is counted only after confirmed payment.</p>
  </div>;
}
