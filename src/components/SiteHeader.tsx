import Link from "next/link";
import { ArrowRight, Menu, ShieldCheck } from "lucide-react";

const links = [
  ["Article 50", "/article-50-ai-act/"],
  ["Checklist", "/article-50-checklist/"],
  ["Agency", "/agency/"],
  ["Sample", "/sample/"],
  ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#06100e]/92 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-5 xl:px-0">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5" aria-label="TraceNotice home">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#A6E878]/35 bg-[#A6E878]/10 text-[#A6E878] transition group-hover:bg-[#A6E878]/15">
            <ShieldCheck size={20}/>
          </span>
          <span className="hidden text-[17px] font-extrabold tracking-[-.035em] text-white min-[360px]:inline">TraceNotice</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.slice(0,4).map(([label, href]) => (
            <Link key={href} href={href} className="text-[13px] font-semibold text-white/72 transition hover:text-white">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/checkout?plan=snapshot" className="cta-green hidden min-h-11 items-center gap-2 rounded-xl bg-[#A6E878] px-4 py-2.5 text-[13px] font-extrabold text-[#07100e] shadow-[0_10px_28px_rgba(0,0,0,.2)] transition hover:-translate-y-0.5 hover:brightness-95 sm:inline-flex">
            Start €190 review <ArrowRight size={15}/>
          </Link>
          <details className="group relative lg:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-white/12 bg-white/[0.04] text-white marker:hidden" aria-label="Open navigation"><Menu size={20}/></summary>
            <div className="absolute right-0 top-[calc(100%+10px)] w-[min(90vw,330px)] rounded-2xl border border-white/12 bg-[#081411] p-3 shadow-[0_24px_80px_rgba(0,0,0,.5)]">
              <nav className="grid" aria-label="Mobile navigation">
                {links.map(([label, href]) => <Link key={href} href={href} className="rounded-xl px-4 py-3.5 text-sm font-bold text-white/78 hover:bg-white/[0.05] hover:text-white">{label}</Link>)}
              </nav>
              <Link href="/checkout?plan=snapshot" className="cta-green mt-2 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#A6E878] px-4 py-3 text-sm font-black text-[#07100e] sm:hidden">Start €190 review <ArrowRight size={15}/></Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
