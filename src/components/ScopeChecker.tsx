"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

const questions = [
  { key: "eu", q: "Can people in the EU access this AI experience?" },
  { key: "direct", q: "Does the AI interact directly with a person?" },
  { key: "gen", q: "Does it generate or manipulate text, audio, image, or video?" },
  { key: "live", q: "Is the surface live or about to be released?" },
] as const;

export function ScopeChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const completed = Object.keys(answers).length;
  const score = Object.values(answers).filter(Boolean).length;
  const recommendation = useMemo(() => {
    if (completed < questions.length) return null;
    if (!answers.eu) return { title: "Start with a scope review", body: "The EU exposure signal is not clear. Document where the product is available before buying implementation work.", href: "/contact", cta: "Ask a scope question" };
    if (score >= 3) return { title: "A live release review is a strong fit", body: "You have EU exposure plus an interactive or generative AI surface. TraceNotice can turn the observable release state into an implementation and evidence pack.", href: "/checkout?plan=snapshot", cta: "Start the €190 surface fix" };
    return { title: "Review the surface before committing", body: "There may be an Article 50 transparency question, but the current answers do not justify a larger engagement yet.", href: "/sample", cta: "See a sample first" };
  }, [answers, completed, score]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0c1714] p-5 shadow-2xl md:p-8">
      <div className="mb-7 flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-[#d9ff58]">2-minute scope check</p><h3 className="mt-2 text-2xl font-black">Should this surface enter a release review?</h3></div><span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/50">{completed}/4</span></div>
      <div className="space-y-3">
        {questions.map((item, i) => (
          <div key={item.key} className="rounded-2xl border border-white/10 bg-white/[.025] p-4">
            <p className="font-bold"><span className="mr-2 text-white/35">0{i+1}</span>{item.q}</p>
            <div className="mt-3 flex gap-2">
              {[true,false].map(v => <button key={String(v)} onClick={() => setAnswers(a => ({...a,[item.key]:v}))} className={`rounded-full px-4 py-2 text-sm font-black transition ${answers[item.key]===v ? "bg-[#d9ff58] text-[#07100e]" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`}>{v ? "Yes" : "No"}</button>)}
            </div>
          </div>
        ))}
      </div>
      {recommendation && <div className="mt-5 rounded-2xl bg-[#d9ff58] p-5 text-[#07100e]"><div className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0"/><div><h4 className="text-lg font-black">{recommendation.title}</h4><p className="mt-1 text-sm font-medium leading-6 opacity-75">{recommendation.body}</p><Link href={recommendation.href} className="mt-4 inline-flex items-center gap-2 font-black">{recommendation.cta}<ArrowRight size={16}/></Link></div></div></div>}
      {completed > 0 && <button onClick={() => setAnswers({})} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white"><RotateCcw size={13}/> Reset</button>}
      <p className="mt-5 text-xs leading-5 text-white/35">Operational triage only. This checker is not a legal determination.</p>
    </div>
  );
}
