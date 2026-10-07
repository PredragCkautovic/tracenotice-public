import Link from "next/link";
import {
  ArrowRight, AudioWaveform, Bot, Check, CheckCircle2, Code2, FileCheck2, FileText,
  Layers3, MessageCircle, RotateCcw, ShieldCheck, Sparkles, WandSparkles
} from "lucide-react";
import { site } from "@/lib/site";

const steps = [
  { n: "1", icon: MessageCircle, title: "Tell us about your AI surface", body: "Share the public chat, voice, or generative AI experience that needs a release review." },
  { n: "2", icon: FileText, title: "Get an implementation brief", body: "We turn transparency questions into concrete wording, placement, timing, and implementation work." },
  { n: "3", icon: Code2, title: "Build with confidence", body: "Use developer tickets, acceptance criteria, and a clear evidence checklist instead of a generic memo." },
  { n: "4", icon: ShieldCheck, title: "Ship and keep the proof", body: "Retain release evidence and use the included re-check where your plan includes one." },
] as const;

const surfaces = [
  { icon: Bot, label: "Chat AI" },
  { icon: AudioWaveform, label: "Voice AI" },
  { icon: WandSparkles, label: "Generative AI" },
] as const;

const deliverables = [
  { icon: Layers3, title: "Up to 3 public client AI surfaces", body: "Chat, voice, or generative AI experiences." },
  { icon: FileText, title: "Per-surface implementation brief", body: "Clear, actionable work for product and engineering." },
  { icon: Code2, title: "Developer ticket + acceptance criteria", body: "Exact implementation work, ready to build and test." },
  { icon: FileCheck2, title: "Evidence checklist per release", body: "Know what to capture and retain for the handoff." },
  { icon: RotateCcw, title: "One remediation re-check per surface", body: "We review the implemented changes once more." },
] as const;

const capabilityStrip = ["Public AI surfaces", "Chat + voice + generative AI", "Developer-ready output", "Release evidence", "Agency handoff"] as const;

export default function Home() {
  const snapshot = site.offers.snapshot;
  const audit = site.offers.audit;
  const sprint = site.offers.sprint;

  return (
    <>
      <section className="hero-grid noise relative overflow-hidden border-b border-white/[0.07]">
        <div className="hero-orb"/>
        <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-16 md:py-20 lg:grid-cols-[.98fr_1.02fr] lg:items-center lg:px-0 lg:py-24">
          <div className="relative z-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[.19em] text-[#9DFB7A]">AI transparency. Real implementation.</p>
            <h1 className="mt-5 text-balance text-[clamp(3rem,5.7vw,5.6rem)] font-black leading-[.94] tracking-[-.065em] text-white">
              Ship the AI.<br/><span className="text-[#9DFB7A]">Keep the proof.</span>
            </h1>
            <p className="mt-7 max-w-[620px] text-[17px] leading-7 text-white/58 md:text-[18px]">TraceNotice turns AI transparency questions into exact implementation work, acceptance tests, and retained evidence—before the client handoff becomes a compliance scramble.</p>

            <div className="mt-8 grid max-w-[690px] gap-3 sm:grid-cols-3">
              <Link href="/checkout?plan=snapshot" className="group rounded-xl border border-[#9DFB7A]/42 bg-white/[0.025] px-5 py-4 transition hover:-translate-y-0.5 hover:bg-[#9DFB7A]/[0.06]">
                <span className="block text-[12px] font-extrabold text-white">€190</span>
                <span className="mt-1 flex items-center justify-between text-[13px] font-semibold text-white/70">Single AI surface <ArrowRight size={14} className="transition group-hover:translate-x-1"/></span>
              </Link>
              <Link href="/checkout?plan=audit" className="group rounded-xl bg-[#9DFB7A] px-5 py-4 text-[#07100e] shadow-[0_0_34px_rgba(157,251,122,.1)] transition hover:-translate-y-0.5 hover:brightness-105">
                <span className="block text-[12px] font-extrabold">€490</span>
                <span className="mt-1 flex items-center justify-between text-[13px] font-extrabold">Agency pilot <ArrowRight size={14} className="transition group-hover:translate-x-1"/></span>
              </Link>
              <Link href="/scope-check" className="group rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
                <span className="block text-[12px] font-extrabold text-white">Free</span>
                <span className="mt-1 flex items-center justify-between text-[13px] font-semibold text-white/70">Scope check <ArrowRight size={14} className="transition group-hover:translate-x-1"/></span>
              </Link>
            </div>
            <p className="mt-4 text-[12px] font-medium text-white/32">For chat · voice · generative AI · Article 50 readiness</p>
          </div>

          <div className="relative z-10 lg:pl-4">
            <div className="glass relative rounded-[28px] p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] font-extrabold text-white">AI Transparency Readiness</p>
                  <p className="mt-1 text-[11px] text-white/36">Release evidence workspace</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#9DFB7A]/25 bg-[#9DFB7A]/10 px-3 py-1.5 text-[10px] font-extrabold text-[#9DFB7A]"><span className="size-1.5 rounded-full bg-[#9DFB7A]"/> Review ready</span>
              </div>

              <div className="mt-5 grid gap-2.5">
                {["Implementation brief", "Developer ticket + acceptance criteria", "Evidence checklist", "Remediation re-check"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/10 px-3.5 py-3 text-[12px] font-semibold text-white/68">
                    <span className="grid size-5 place-items-center rounded-full border border-[#9DFB7A]/30 bg-[#9DFB7A]/10 text-[#9DFB7A]"><Check size={12}/></span>{item}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {surfaces.map(({icon:Icon,label}) => (
                  <div key={label} className="glass-soft rounded-2xl p-4">
                    <div className="flex items-center justify-between"><Icon size={19} className="text-white/72"/><CheckCircle2 size={16} className="text-[#9DFB7A]"/></div>
                    <p className="mt-6 text-[12px] font-bold text-white/76">{label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute -right-4 top-[74px] hidden rounded-2xl border border-[#9DFB7A]/25 bg-[#0d201a] px-4 py-3 shadow-2xl md:block">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full border border-[#9DFB7A]/20 text-[#9DFB7A]"><Sparkles size={16}/></span>
                  <div><p className="text-[11px] font-extrabold text-white">Article 50</p><p className="mt-0.5 text-[10px] text-white/40">AI transparency</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] bg-black/10">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 lg:px-0">
            <p className="mr-2 text-[9px] font-extrabold uppercase tracking-[.18em] text-white/28">Built for teams shipping public AI</p>
            {capabilityStrip.map((x) => <span key={x} className="text-[12px] font-semibold text-white/36">{x}</span>)}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-[#07120f]">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-0 lg:py-20">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.19em] text-[#9DFB7A]">Founding agency release gate</p>
            <h2 className="mt-4 max-w-[500px] text-balance text-[clamp(2.3rem,4vw,4rem)] font-black leading-[1.02] tracking-[-.055em]">€490 pilot for up to 3 public client AI surfaces</h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-white/50">A practical, implementation-focused package to help agencies ship with confidence and meet AI transparency requirements with a concrete technical handoff.</p>
            <Link href="/checkout?plan=audit" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#9DFB7A] px-5 py-3.5 text-[13px] font-extrabold text-[#07100e] transition hover:-translate-y-0.5 hover:brightness-105">Start agency pilot <ArrowRight size={15}/></Link>
            <p className="mt-4 text-[11px] leading-5 text-white/28">Payment is processed on PayPal. TraceNotice does not handle card details.</p>
          </div>

          <div className="glass rounded-[26px] p-5 md:p-6">
            <div className="space-y-1">
              {deliverables.map(({icon:Icon,title,body}) => (
                <div key={title} className="flex gap-4 rounded-2xl px-2 py-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#9DFB7A]/18 bg-[#9DFB7A]/[0.06] text-[#9DFB7A]"><Icon size={20}/></span>
                  <div><p className="text-[13px] font-extrabold text-white/86">{title}</p><p className="mt-1 text-[12px] leading-5 text-white/38">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-[#06100e]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-0 lg:py-20">
          <div className="grid gap-6 md:grid-cols-[1fr_.8fr] md:items-end">
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-black tracking-[-.05em]">How TraceNotice works</h2>
            <p className="max-w-[520px] text-[14px] leading-6 text-white/38 md:justify-self-end">From questions to implementation. A clear path to release readiness without the guesswork.</p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(({n,icon:Icon,title,body}) => (
              <article key={n} className="glass-soft relative min-h-[240px] rounded-2xl p-5">
                <div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#9DFB7A]/10 text-[11px] font-extrabold text-[#9DFB7A]">{n}</span><Icon size={19} className="text-[#9DFB7A]"/></div>
                <h3 className="mt-8 text-[16px] font-extrabold tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-white/38">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#07120f]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-0 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-black tracking-[-.05em]">Pricing options</h2>
            <p className="text-[13px] text-white/34">Choose the right starting point for your needs.</p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            <article className="glass-soft rounded-[22px] p-6">
              <p className="text-[14px] font-extrabold">Single AI surface</p>
              <p className="mt-2 text-4xl font-black tracking-[-.055em]">€190</p>
              <p className="mt-3 text-[13px] leading-5 text-white/42">Ideal for a focused use case or an initial release review.</p>
              <div className="mt-6 space-y-3">{snapshot.bullets.slice(0,4).map(x=><p key={x} className="flex gap-2 text-[12px] font-semibold text-white/58"><Check size={15} className="mt-0.5 text-[#9DFB7A]"/>{x}</p>)}</div>
              <Link href="/checkout?plan=snapshot" className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[12px] font-extrabold transition hover:bg-white/[0.08]">Get started — €190 <ArrowRight size={14}/></Link>
            </article>

            <article className="lime-glow relative rounded-[22px] border border-[#9DFB7A]/80 bg-[linear-gradient(180deg,rgba(34,77,54,.48),rgba(9,24,18,.96))] p-6">
              <span className="absolute right-5 top-5 rounded-full bg-[#9DFB7A] px-2.5 py-1 text-[8px] font-black uppercase tracking-[.08em] text-[#07100e]">Founding release gate</span>
              <p className="text-[14px] font-extrabold">Agency pilot</p>
              <p className="mt-2 text-4xl font-black tracking-[-.055em]">€490</p>
              <p className="mt-3 text-[13px] leading-5 text-white/48">For agencies with up to 3 public client AI surfaces.</p>
              <div className="mt-6 space-y-3">{audit.bullets.slice(0,5).map(x=><p key={x} className="flex gap-2 text-[12px] font-semibold text-white/68"><Check size={15} className="mt-0.5 text-[#9DFB7A]"/>{x}</p>)}</div>
              <Link href="/checkout?plan=audit" className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#9DFB7A] px-4 py-3.5 text-[12px] font-extrabold text-[#07100e] transition hover:-translate-y-0.5 hover:brightness-105">Start agency pilot — €490 <ArrowRight size={14}/></Link>
            </article>

            <article className="glass-soft rounded-[22px] p-6">
              <p className="text-[14px] font-extrabold">Free scope check</p>
              <p className="mt-2 text-4xl font-black tracking-[-.055em]">€0</p>
              <p className="mt-3 text-[13px] leading-5 text-white/42">Not sure what you need? Start with a fast operational assessment.</p>
              <div className="mt-6 space-y-3">{["Review your use case", "Identify key transparency considerations", "Recommend the right scope", "No payment required"].map(x=><p key={x} className="flex gap-2 text-[12px] font-semibold text-white/58"><Check size={15} className="mt-0.5 text-[#9DFB7A]"/>{x}</p>)}</div>
              <Link href="/scope-check" className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[12px] font-extrabold transition hover:bg-white/[0.08]">Request free scope check <ArrowRight size={14}/></Link>
            </article>
          </div>
          <p className="mt-5 text-center text-[11px] text-white/28">Need a deeper multi-surface implementation engagement? The {sprint.name} is available at {sprint.price}.</p>
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-[#06100e]">
        <div className="mesh-wave"/>
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:items-center lg:px-0 lg:py-20">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.19em] text-[#9DFB7A]">Be responsible. Move faster.</p>
            <h2 className="mt-4 max-w-[770px] text-balance text-[clamp(2rem,3.7vw,3.8rem)] font-black leading-[1.03] tracking-[-.055em]">Turn AI transparency into a competitive advantage.</h2>
            <p className="mt-4 max-w-[690px] text-[14px] leading-6 text-white/42">Ship innovative AI experiences with clear implementation work, acceptance criteria, and retained release evidence.</p>
          </div>
          <div className="md:text-right">
            <Link href="/checkout?plan=audit" className="inline-flex items-center gap-2 rounded-xl bg-[#9DFB7A] px-6 py-4 text-[13px] font-extrabold text-[#07100e] transition hover:-translate-y-0.5 hover:brightness-105">Start your pilot <ArrowRight size={15}/></Link>
            <div className="mt-3"><Link href="/scope-check" className="text-[11px] font-bold text-white/46 hover:text-white">Or get a free scope check →</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
