import type { Metadata } from "next";
import { ScopeChecker } from "@/components/ScopeChecker";

export const metadata: Metadata = { title: "Free scope check", description: "A quick operational triage for public AI transparency surfaces.", alternates: { canonical: "/scope-check/" } };

export default function ScopeCheckPage(){
  return <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24"><div className="mb-10 max-w-3xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">Free triage · no card</p><h1 className="mt-4 text-5xl font-black tracking-[-.055em] md:text-7xl">Check the release surface before you buy work.</h1><p className="mt-5 text-lg leading-8 text-white/64">Four questions help route the product toward a paid release review, a sample-first decision, or a basic scope conversation.</p></div><ScopeChecker/></div>;
}
