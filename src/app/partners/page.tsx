import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, BriefcaseBusiness, Scale, Waypoints } from "lucide-react";

export const metadata: Metadata = { title: "Partners", description: "Partner with TraceNotice around AI deployment, provenance, governance, and release evidence workflows." };

export default function PartnersPage(){
  const profiles=[
    [BriefcaseBusiness,"AI & delivery agencies","Use TraceNotice as the release/evidence layer behind chatbot, voice-agent, and generative-product handoff."],
    [Blocks,"Provenance & marking tools","Turn watermarking, content-credential, provenance, or verification output into a deployment-level evidence artefact."],
    [Scale,"Governance & legal partners","Keep interpretation with qualified counsel while TraceNotice handles observable surface state, implementation tickets, tests, and retained evidence."],
  ] as const;
  return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <section><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">Partner layer</p><h1 className="mt-4 max-w-5xl text-balance text-5xl font-black leading-[.94] tracking-[-.06em] md:text-8xl">Add the final AI transparency release layer without building it from scratch.</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-white/55">Start with one public deployment and one measurable output. If TraceNotice improves your delivery or evidence chain, then integrate deeper.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/scope-check" className="rounded-2xl bg-[#d9ff58] px-5 py-3.5 font-black text-[#07100e]">Test a public surface</Link><Link href="/contact" className="rounded-2xl border border-white/15 px-5 py-3.5 font-black">Partner contact</Link></div></section>
    <section className="mt-20 grid gap-3 md:grid-cols-3">{profiles.map(([Icon,title,body])=><article key={title} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><Icon className="text-[#d9ff58]"/><h2 className="mt-10 text-2xl font-black tracking-[-.03em]">{title}</h2><p className="mt-3 text-sm leading-6 text-white/50">{body}</p></article>)}</section>
    <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-[#0c1714] p-7 md:p-10"><div className="flex items-center gap-3 text-[#d9ff58]"><Waypoints/><span className="text-xs font-black uppercase tracking-[.2em]">Partner flow</span></div><div className="mt-8 grid gap-6 md:grid-cols-4">{[
      ["01","Pick one public surface","No private client access is needed for the standard test."],
      ["02","Run the workflow","Use the free triage or the €490 agency pilot."],
      ["03","Inspect the handoff","Judge whether the output fits your delivery, legal, or evidence workflow."],
      ["04","Repeat only if useful","Move to recurring release work or a deeper integration after proof."],
    ].map(([n,t,b])=><div key={n}><span className="text-xs font-black text-white/30">{n}</span><h3 className="mt-2 font-black">{t}</h3><p className="mt-2 text-sm leading-6 text-white/45">{b}</p></div>)}</div><Link href="/checkout?plan=audit" className="mt-9 inline-flex items-center gap-2 font-black text-[#d9ff58]">Start the agency pilot <ArrowRight size={17}/></Link></section>
  </div>;
}
