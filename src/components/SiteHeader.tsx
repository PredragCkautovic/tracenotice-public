import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const links = [
  ["Agency", "/agency"],
  ["Sample", "/sample"],
  ["Partners", "/partners"],
  ["Investors", "/investors"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#06100e]/88 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-0">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-[#A6E878]/35 bg-[#A6E878]/10 text-[#A6E878] transition group-hover:bg-[#A6E878]/15">
            <ShieldCheck size={20}/>
          </span>
          <span className="text-[18px] font-extrabold tracking-[-.035em] text-white">TraceNotice</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-[13px] font-semibold text-white/72 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/checkout?plan=snapshot" className="cta-green inline-flex items-center gap-2 rounded-xl bg-[#A6E878] px-5 py-3 text-[13px] font-extrabold text-[#07100e] shadow-[0_10px_28px_rgba(0,0,0,.2)] transition hover:-translate-y-0.5 hover:brightness-95">
          Start €190 review <ArrowRight size={15}/>
        </Link>
      </div>
    </header>
  );
}
