import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Handshake, Mail, Rocket, ShoppingCart } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Choose the right TraceNotice path for customer, agency, partner, or investor conversations." };

const email = "pckautovic@gmail.com";
const mailto = (subject: string, body: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function ContactPage(){
  const partner = mailto("TraceNotice partner conversation", "Hi Predrag,\n\nOrganization: \nPublic website: \nPartner fit: agency / AI implementation / provenance / governance / other\nWhat we want to test: \n\nPublic/non-confidential information only.");
  const investor = mailto("TraceNotice investor / venture conversation", "Hi Predrag,\n\nInvestor / program: \nPublic website: \nWhat we would like to discuss: \n\nPublic/non-confidential information only.");
  const general = mailto("TraceNotice question", "Hi Predrag,\n\nI have a question about TraceNotice: \n\nPublic/non-confidential information only.");
  const cards=[
    [ShoppingCart,"Customer","Buy a fixed-scope review","Use checkout for the €190 surface fix, €490 agency pilot, or €2,500 implementation sprint.","/checkout?plan=snapshot","Open checkout"],
    [Building2,"Agency","Test the release workflow","Start with one public surface or move directly into the three-surface founding pilot.","/agency","Agency path"],
    [Handshake,"Partner","Discuss an integration","Private email handoff for agency, provenance, or governance partnerships.",partner,"Email partner inquiry"],
    [Rocket,"Investor","Discuss funding or programs","Read the investor brief, then continue privately by email.",investor,"Email investor inquiry"],
  ] as const;
  return <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24"><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">Contact</p><h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.055em] md:text-7xl">Choose the fastest path for what you actually need.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/50">Paid work goes through PayPal. Intake and serious commercial conversations use private email—no public GitHub issue required.</p><div className="mt-12 grid gap-3 md:grid-cols-2">{cards.map(([Icon,tag,title,body,href,cta])=><a key={tag} href={href} className="rounded-3xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-[#d9ff58]/35"><Icon className="text-[#d9ff58]"/><p className="mt-8 text-xs font-black uppercase tracking-[.18em] text-white/35">{tag}</p><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-white/50">{body}</p><p className="mt-6 text-sm font-black text-[#d9ff58]">{cta} →</p></a>)}</div><div className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/[.025] p-5 text-sm leading-6 text-white/45 md:grid-cols-[1fr_auto] md:items-center"><div><p className="font-black text-white">Need a human before buying?</p><p className="mt-1">Email only public/non-confidential information. Never send credentials, private customer data, private URLs, source code, or secrets.</p></div><a href={general} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d9ff58] px-4 py-3 font-black text-[#07100e]"><Mail size={16}/> Email TraceNotice</a></div><p className="mt-6 text-xs text-white/30">Ready to buy? Start at <Link className="font-black text-white" href="/checkout?plan=snapshot">the €190 checkout</Link>.</p></div>;
}
