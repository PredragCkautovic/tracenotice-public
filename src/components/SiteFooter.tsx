import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const guideLinks = [
  ["Article 50 guide", "/article-50-ai-act/"],
  ["Article 50 checklist", "/article-50-checklist/"],
  ["Chatbot disclosure", "/ai-chatbot-disclosure/"],
  ["Voice AI disclosure", "/voice-ai-disclosure/"],
  ["AI content labelling", "/ai-generated-content-labeling/"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#040b09]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 lg:grid-cols-[1.2fr_.8fr_.8fr] xl:px-0">
        <div>
          <div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg border border-[#A6E878]/30 bg-[#A6E878]/10 text-[#A6E878]"><ShieldCheck size={17}/></span><span className="font-extrabold tracking-[-.03em]">TraceNotice</span></div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/58">Technical implementation support for public AI transparency surfaces under the EU AI Act. Not legal representation, certification, or a guarantee of legal compliance.</p>
          <p className="mt-4 text-xs text-white/38">© 2026 TraceNotice</p>
        </div>
        <div><p className="text-xs font-black uppercase tracking-[.16em] text-white/40">Article 50 resources</p><div className="mt-4 grid gap-3 text-sm font-semibold text-white/65">{guideLinks.map(([label,href])=><Link key={href} className="hover:text-white" href={href}>{label}</Link>)}</div></div>
        <div><p className="text-xs font-black uppercase tracking-[.16em] text-white/40">Company</p><div className="mt-4 grid gap-3 text-sm font-semibold text-white/65"><Link className="hover:text-white" href="/agency/">Agency</Link><Link className="hover:text-white" href="/sample/">Sample</Link><Link className="hover:text-white" href="/partners/">Partners</Link><Link className="hover:text-white" href="/privacy/">Privacy</Link><Link className="hover:text-white" href="/terms/">Terms</Link><Link className="hover:text-white" href="/security/">Security</Link><Link className="hover:text-white" href="/contact/">Contact</Link></div></div>
      </div>
    </footer>
  );
}
