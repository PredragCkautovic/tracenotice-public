import Link from "next/link";
import { ArrowRight, Bot, Check, FileCheck2, Gauge, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { ContactCards } from "@/components/ContactCards";
import { PayPalButton } from "@/components/PayPalButton";
import { ScopeChecker } from "@/components/ScopeChecker";
import { site } from "@/lib/site";

const steps = [
  {n:"01", icon: Bot, title:"Observe the real AI surface", body:"Review the launcher, first interaction, voice greeting, generated-content state, locale, handoff, and other user-facing paths."},
  {n:"02", icon: Workflow, title:"Turn the gap into shipping work", body:"Specify the exact wording, placement, timing, developer action, and edge cases instead of handing engineering a generic memo."},
  {n:"03", icon: Gauge, title:"Define acceptance tests", body:"Give product and QA a concrete pass/fail release check so the change can be verified before handoff."},
  {n:"04", icon: FileCheck2, title:"Retain the evidence", body:"Capture the screenshots, release references, and implementation evidence a reviewer can understand later."},
] as const;

const proof = [
  ["Fixed scope", "Know exactly what is being reviewed before you pay."],
  ["Public-first", "Standard offers do not require production credentials."],
  ["Developer-ready", "Output is written to become work, not shelfware."],
  ["Re-check included", "Agency surfaces get one remediation verification pass."],
] as const;

export default function Home() {
  const audit = site.offers.audit;
  return (
    <>
      <section className="grid-bg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d9ff58]/30 bg-[#d9ff58]/10 px-3 py-1.5 text-xs font-black uppercase tracking-[.14em] text-[#d9ff58]"><Sparkles size={14}/> Article 50 · in force</span>
            <span className="text-xs font-bold uppercase tracking-[.14em] text-white/35">Chat · Voice · Generative AI</span>
          </div>
          <div className="grid items-end gap-14 xl:grid-cols-[1.25fr_.75fr]">
            <div>
              <h1 className="text-balance text-[clamp(3.6rem,8vw,8.6rem)] font-black leading-[.82] tracking-[-.075em]">Ship the AI.<br/><span className="text-[#d9ff58]">Keep the proof.</span></h1>
              <p className="mt-8 max-w-3xl text-balance text-lg leading-8 text-white/60 md:text-2xl md:leading-9">TraceNotice turns live AI transparency questions into exact implementation work, acceptance tests, and retained release evidence—before the client handoff becomes a compliance scramble.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/checkout?plan=audit" className="inline-flex items-center gap-2 rounded-2xl bg-[#d9ff58] px-6 py-4 font-black text-[#07100e] transition hover:-translate-y-0.5">Start agency pilot — €490 <ArrowRight size={18}/></Link>
                <Link href="/scope-check" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black transition hover:bg-white/10">Run free scope check</Link>
                <Link href="/sample" className="rounded-2xl border border-white/15 px-6 py-4 font-black text-white/70 transition hover:text-white">Inspect sample</Link>
              </div>
            </div>
            <div className="glow rounded-[2rem] border border-white/10 bg-[#0c1714]/90 p-5 md:p-7">
              <div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[.18em] text-white/40">Founding agency release gate</p><ShieldCheck className="text-[#d9ff58]"/></div>
              <div className="mt-8 flex items-end gap-3"><span className="text-6xl font-black tracking-[-.06em]">€490</span><span className="mb-2 text-sm font-bold text-white/40">/ pilot</span></div>
              <p className="mt-4 text-sm leading-6 text-white/55">Up to three public client AI surfaces. Client-ready implementation briefs. One remediation re-check per surface.</p>
              <div className="mt-6 space-y-3">{audit.bullets.slice(0,5).map(x=><div key={x} className="flex gap-2 text-sm font-semibold text-white/70"><Check size={16} className="mt-0.5 shrink-0 text-[#d9ff58]"/>{x}</div>)}</div>
              <div className="mt-7"><PayPalButton href={audit.paypal} label="Pay €490 with PayPal"/></div>
              <p className="mt-3 text-center text-[11px] leading-4 text-white/30">Payment is processed on PayPal. TraceNotice does not handle card details.</p>
            </div>
          </div>
          <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] md:grid-cols-4">{proof.map(([title,body],i)=><div key={title} className={`p-5 ${i<3?"border-b border-white/10 md:border-b-0 md:border-r":""}`}><p className="font-black">{title}</p><p className="mt-2 text-sm leading-6 text-white/45">{body}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">The release workflow</p><h2 className="mt-4 text-balance text-4xl font-black tracking-[-.05em] md:text-6xl">Not another AI Act checklist. A release artifact your team can actually use.</h2></div>
        <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{steps.map(({n,icon:Icon,title,body})=><article key={n} className="rounded-3xl border border-white/10 bg-white/[.025] p-6"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-[.18em] text-white/30">{n}</span><Icon className="text-[#d9ff58]"/></div><h3 className="mt-12 text-2xl font-black tracking-[-.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{body}</p></article>)}</div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1512]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">Free triage</p><h2 className="mt-4 text-4xl font-black tracking-[-.05em] md:text-6xl">Know whether the surface is worth reviewing before you buy.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/50">Answer four product questions. The checker routes you to a paid review only when the signals justify it.</p></div>
          <ScopeChecker/>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">Commercial model</p><h2 className="mt-4 text-4xl font-black tracking-[-.05em] md:text-6xl">Start small. Prove value. Reuse the workflow.</h2></div><p className="text-lg leading-8 text-white/50">The service is intentionally narrow. Validate the release-gate economics first; automate only the parts that repeat across paying customers.</p></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">{Object.values(site.offers).map((offer,i)=><article key={offer.id} className={`rounded-[2rem] border p-7 ${i===1?"border-[#d9ff58]/40 bg-[#d9ff58] text-[#07100e]":"border-white/10 bg-white/[.025]"}`}><div className="flex items-center justify-between"><p className={`text-xs font-black uppercase tracking-[.18em] ${i===1?"text-[#07100e]/55":"text-white/35"}`}>{offer.cadence}</p>{i===1&&<span className="rounded-full bg-[#07100e] px-3 py-1 text-[10px] font-black uppercase tracking-[.15em] text-[#d9ff58]">Primary offer</span>}</div><div className="mt-8 text-5xl font-black tracking-[-.06em]">{offer.price}</div><h3 className="mt-2 text-2xl font-black">{offer.name}</h3><p className={`mt-4 text-sm leading-6 ${i===1?"text-[#07100e]/65":"text-white/50"}`}>{offer.summary}</p><div className="mt-6 space-y-3">{offer.bullets.map(x=><div key={x} className="flex gap-2 text-sm font-semibold"><Check size={16} className="mt-0.5 shrink-0"/>{x}</div>)}</div><div className="mt-8"><PayPalButton href={offer.paypal} label={`Pay ${offer.price} with PayPal`} dark={i===1}/></div></article>)}</div>
      </section>

      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">One product, four entry points</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.05em] md:text-6xl">Customers, agencies, partners, and ventures all need a different front door.</h2></div><Layers3 className="hidden text-[#d9ff58] md:block" size={48}/></div><ContactCards/></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 rounded-[2.5rem] bg-[#f2f1e9] p-7 text-[#07100e] md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] opacity-50">Release confidence, without pretending it is certification</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.055em] md:text-6xl">Give engineering something they can ship and reviewers something they can inspect.</h2></div><Link href="/checkout?plan=audit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#07100e] px-6 py-4 font-black text-white">Start the €490 pilot <ArrowRight size={18}/></Link></div>
      </section>
    </>
  );
}
