"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, LockKeyhole, ShieldCheck } from "lucide-react";
import { PayPalButton } from "@/components/PayPalButton";
import { site, type OfferKey } from "@/lib/site";

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("plan");
  const key: OfferKey = raw && raw in site.offers ? (raw as OfferKey) : "audit";
  const offer = site.offers[key];
  const intakeSubject = encodeURIComponent(`TraceNotice paid intake — ${offer.name}`);
  const intakeBody = encodeURIComponent(`Hi Predrag,\n\nI paid for: ${offer.name} (${offer.price})\nPayPal payer email: \nPublic AI surface URL: \nCompany / product: \nAnything important about the surface: \n\nI am only sending public/non-confidential information.`);
  const intakeHref = `mailto:pckautovic@gmail.com?subject=${intakeSubject}&body=${intakeBody}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">Secure commercial handoff</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.055em] md:text-7xl">Choose the scope. Pay on PayPal.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/64">TraceNotice never sees your card details. PayPal handles payment; TraceNotice handles the implementation work after payment.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <section className="rounded-[2rem] border border-[#A6E878]/28 bg-[#0b1814] p-7 text-white md:p-10">
          <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-white/52">Selected offer</p><h2 className="mt-2 text-3xl font-black">{offer.name}</h2></div><ShieldCheck size={32}/></div>
          <div className="mt-8 text-7xl font-black tracking-[-.07em]">{offer.price}</div>
          <p className="mt-3 text-sm font-bold uppercase tracking-[.12em] text-white/58">{offer.cadence} · {offer.target}</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68">{offer.summary}</p>
          <div className="mt-7 space-y-3">{offer.bullets.map(x=><div key={x} className="flex gap-2 font-semibold"><Check className="mt-0.5 shrink-0" size={18}/>{x}</div>)}</div>
          <div className="mt-9"><PayPalButton href={offer.paypal} label={`Pay ${offer.price} with PayPal`} /></div>
          <a href={intakeHref} className="mt-3 block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-bold text-white/72 hover:bg-white/[0.06] hover:text-white">After payment: email the public surface URL</a>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-white/58"><LockKeyhole size={13}/> Payment opens on paypal.com · intake is private email</div>
        </section>
        <aside className="rounded-[2rem] border border-white/10 bg-[#0c1714] p-7 md:p-10">
          <p className="text-xs font-black uppercase tracking-[.18em] text-white/52">What happens next</p>
          <ol className="mt-6 space-y-6">
            {["Complete payment on PayPal.","Email your PayPal payer email plus the public AI surface URL to pckautovic@gmail.com.","TraceNotice confirms the fixed scope and starts the review.","Receive the implementation brief and evidence checklist.","Use the included re-check where your plan includes one."].map((x,i)=><li key={x} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-xs font-black text-[#A6E878]">{i+1}</span><p className="pt-1 text-sm leading-6 text-white/60">{x}</p></li>)}
          </ol>
          <div className="mt-8 grid gap-2"><a href={intakeHref} className="cta-green rounded-xl bg-[#A6E878] px-4 py-3 text-center text-sm font-black text-[#07100e]">Already paid? Send intake now</a><Link href="/thanks/" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-black hover:bg-white/10">Open delivery instructions</Link><Link href="/sample/" className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-black text-white/60 hover:text-white">See sample output first</Link></div>
          <p className="mt-6 text-xs leading-5 text-white/48">TraceNotice counts revenue only after a confirmed PayPal payment. The service is technical/operational implementation support, not legal certification.</p>
        </aside>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">{(Object.keys(site.offers) as OfferKey[]).map(k=><Link key={k} href={`/checkout/?plan=${k}`} className={`rounded-full border px-4 py-2 text-sm font-black ${k===key?"border-[#A6E878] bg-[#A6E878]/10 text-[#A6E878]":"border-white/10 text-white/60 hover:text-white"}`}>{site.offers[k].price} · {site.offers[k].name}</Link>)}</div>
    </div>
  );
}
