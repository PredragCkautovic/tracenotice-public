import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

const COMMISSION_GUIDANCE = "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems";
const COMMISSION_FAQ = "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act";

type Section = { title: string; body: string; bullets?: string[] };
type Faq = { q: string; a: string };

type Props = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  updated?: string;
  sections: Section[];
  faq: Faq[];
  related?: { label: string; href: string }[];
};

export function SeoLandingPage({ slug, eyebrow, title, lead, updated = "7 October 2026", sections, faq, related = [] }: Props) {
  const url = `https://tracenotice.com/${slug}/`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: lead,
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "TraceNotice", url: "https://tracenotice.com/" },
    publisher: { "@type": "Organization", name: "TraceNotice", url: "https://tracenotice.com/" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "TraceNotice", item: "https://tracenotice.com/" },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <article className="mx-auto max-w-[1180px] px-5 py-12 sm:py-16 xl:px-0 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-white/52"><Link href="/" className="hover:text-white">TraceNotice</Link><span className="mx-2">/</span><span>{eyebrow}</span></nav>
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#A6E878]">{eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.65rem,8vw,5.25rem)] font-black leading-[.94] tracking-[-.055em]">{title}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70 sm:text-xl">{lead}</p>
            <p className="mt-4 text-sm text-white/48">Updated {updated} · Technical implementation guidance, not legal advice.</p>
          </div>
          <aside className="rounded-3xl border border-[#A6E878]/25 bg-[#0b1814] p-6">
            <ShieldCheck className="text-[#A6E878]" />
            <p className="mt-5 text-sm font-black">Need one live surface reviewed?</p>
            <p className="mt-2 text-sm leading-6 text-white/62">Send a public URL. The €190 review turns the observed surface into implementation work, acceptance criteria, and an evidence checklist.</p>
            <Link href="/checkout?plan=snapshot" className="cta-green mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#A6E878] px-4 py-3 text-sm font-black text-[#07100e]">Start €190 review <ArrowRight size={16}/></Link>
          </aside>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="space-y-10">
            {sections.map((section) => <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[.025] p-6 sm:p-8"><h2 className="text-2xl font-black tracking-[-.035em] sm:text-3xl">{section.title}</h2><p className="mt-4 text-base leading-8 text-white/68">{section.body}</p>{section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((item)=><li key={item} className="flex gap-3 text-sm leading-6 text-white/68"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#A6E878]"/><span>{item}</span></li>)}</ul>}</section>)}

            <section>
              <h2 className="text-3xl font-black tracking-[-.04em]">Common questions</h2>
              <div className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[.02] px-5 sm:px-7">{faq.map((item)=><details key={item.q} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-black marker:hidden">{item.q}</summary><p className="mt-3 max-w-3xl text-sm leading-7 text-white/66">{item.a}</p></details>)}</div>
            </section>
          </div>
          <aside className="h-fit space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><p className="text-xs font-black uppercase tracking-[.15em] text-white/45">Primary sources</p><a href={COMMISSION_GUIDANCE} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start gap-2 text-sm font-bold text-[#A6E878]">European Commission Article 50 guidelines <ExternalLink size={14} className="mt-0.5 shrink-0"/></a><a href={COMMISSION_FAQ} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start gap-2 text-sm font-bold text-[#A6E878]">Commission Article 50 Q&A <ExternalLink size={14} className="mt-0.5 shrink-0"/></a></div>
            {related.length > 0 && <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><p className="text-xs font-black uppercase tracking-[.15em] text-white/45">Related guides</p><div className="mt-4 grid gap-3">{related.map((item)=><Link key={item.href} href={item.href} className="text-sm font-bold text-white/72 hover:text-white">{item.label} →</Link>)}</div></div>}
          </aside>
        </div>
      </article>
    </>
  );
}
