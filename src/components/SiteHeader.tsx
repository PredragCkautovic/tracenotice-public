import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const links = [
  ["Agency", "/agency"],
  ["Sample", "/sample"],
  ["Partners", "/partners"],
  ["Investors", "/investors"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07100e]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-black tracking-[-0.03em]">
          <span className="grid size-9 place-items-center rounded-xl bg-[#d9ff58] text-[#07100e]"><ShieldCheck size={19}/></span>
          <span className="text-lg">TraceNotice</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-white/65 transition hover:text-white">{label}</Link>)}
        </nav>
        <Link href="/checkout?plan=audit" className="group inline-flex items-center gap-2 rounded-full bg-[#d9ff58] px-4 py-2.5 text-sm font-black text-[#07100e] transition hover:brightness-110">
          Start pilot <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
        </Link>
      </div>
    </header>
  );
}
