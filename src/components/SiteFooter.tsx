import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#040b09]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 md:grid-cols-[1fr_auto] lg:px-0">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg border border-[#9DFB7A]/30 bg-[#9DFB7A]/10 text-[#9DFB7A]"><ShieldCheck size={17}/></span>
            <span className="font-extrabold tracking-[-.03em]">TraceNotice</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/38">Technical implementation support for public AI transparency surfaces. Not legal representation, certification, or a guarantee of legal compliance.</p>
        </div>
        <div className="flex flex-wrap content-start gap-x-6 gap-y-3 text-sm font-semibold text-white/45 md:justify-end">
          <Link className="hover:text-white" href="/agency">Agency</Link>
          <Link className="hover:text-white" href="/sample">Sample</Link>
          <Link className="hover:text-white" href="/privacy">Privacy</Link>
          <Link className="hover:text-white" href="/terms">Terms</Link>
          <Link className="hover:text-white" href="/security">Security</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
