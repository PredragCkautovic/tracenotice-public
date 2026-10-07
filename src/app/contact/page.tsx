import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Handshake, Rocket, ShoppingCart } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Choose the right TraceNotice path for customer, agency, partner, or investor conversations." };

const issueBase = "https://github.com/PredragCkautovic/tracenotice-public/issues/new";
const partner = `${issueBase}?title=${encodeURIComponent("TraceNotice partner conversation")}&body=${encodeURIComponent("## Organization\n\n## Public website\n\n## Partner fit\nAgency / AI implementation / provenance / governance / other\n\n## What you want to test\n\nPublic/non-confidential information only.")}`;
const investor = `${issueBase}?title=${encodeURIComponent("TraceNotice investor / venture conversation")}&body=${encodeURIComponent("## Investor / program\n\n## Public website\n\n## What you would like to discuss\n\nPublic/non-confidential information only.")}`;

export default function ContactPage(){
  const cards=[
    [ShoppingCart,"Customer","Buy a fixed-scope review","Use the checkout for the €190 surface fix, €490 agency pilot, or €2,500 implementation sprint.","/checkout?plan=snapshot","Open checkout"],
    [Building2,"Agency","Test the release workflow","Run the free scope check, inspect the sample, then move into the three-surface pilot.","/agency","Agency path"],
    [Handshake,"Partner","Discuss an integration","For agency, provenance, or governance partnerships. Public/non-confidential contact only.",partner,"Open partner contact"],
    [Rocket,"Investor","Discuss funding or programs","Use the investor brief first, then open a public venture contact thread.",investor,"Investor contact"],
  ] as const;
  return <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24"><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9ff58]">Contact</p><h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.055em] md:text-7xl">Choose the fastest path for what you actually need.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/50">Paid work goes through PayPal. Public partner and investor conversations currently use a public GitHub fallback, so do not include secrets or confidential deal information.</p><div className="mt-12 grid gap-3 md:grid-cols-2">{cards.map(([Icon,tag,title,body,href,cta])=><a key={tag} href={href} className="rounded-3xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-[#d9ff58]/35"><Icon className="text-[#d9ff58]"/><p className="mt-8 text-xs font-black uppercase tracking-[.18em] text-white/35">{tag}</p><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-white/50">{body}</p><p className="mt-6 text-sm font-black text-[#d9ff58]">{cta} →</p></a>)}</div><div className="mt-10 rounded-2xl border border-white/10 bg-white/[.025] p-5 text-sm leading-6 text-white/45">Do not post credentials, private customer data, private URLs, source code, or confidential documents into the public contact fallback. For paid public-surface work, start at <Link className="font-black text-white" href="/checkout?plan=snapshot">checkout</Link>.</div></div>;
}
