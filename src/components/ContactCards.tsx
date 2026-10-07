import Link from "next/link";
import { Building2, Handshake, Rocket, ShoppingCart } from "lucide-react";

const cards = [
  {icon: ShoppingCart, tag: "Customer", title: "Buy a fixed-scope release review", body: "Choose one surface, an agency pilot, or a deeper implementation sprint and pay through PayPal.", href: "/checkout?plan=snapshot", cta: "Open checkout"},
  {icon: Building2, tag: "Agency", title: "Put TraceNotice behind client delivery", body: "Run up to three client surfaces through the release gate and reuse the output in your handoff.", href: "/agency", cta: "See agency workflow"},
  {icon: Handshake, tag: "Partner", title: "Connect provenance or governance tooling", body: "Test whether your existing technical evidence can become part of a repeatable TraceNotice release record.", href: "/partners", cta: "Explore partnership"},
  {icon: Rocket, tag: "Investor", title: "Back the productization of the workflow", body: "See the current pre-revenue model, validation milestones, and what the software layer becomes after paid repetition.", href: "/investors", cta: "Read investor brief"},
] as const;

export function ContactCards(){
  return <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{cards.map(({icon:Icon,...c})=><Link href={c.href} key={c.tag} className="group rounded-3xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-[#d9ff58]/40 hover:bg-white/[.04]"><Icon className="text-[#d9ff58]"/><p className="mt-8 text-xs font-black uppercase tracking-[.18em] text-white/40">{c.tag}</p><h3 className="mt-2 text-xl font-black leading-tight">{c.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{c.body}</p><p className="mt-6 text-sm font-black text-[#d9ff58]">{c.cta} →</p></Link>)}</div>
}
