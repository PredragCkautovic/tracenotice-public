import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-white/50 lg:grid-cols-[1fr_auto] lg:px-8">
        <div><b className="text-white">TraceNotice</b><p className="mt-2 max-w-xl leading-6">Technical implementation support for AI transparency surfaces. Not legal representation, certification, or a guarantee of legal compliance.</p></div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
          <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/security">Security</Link><Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
