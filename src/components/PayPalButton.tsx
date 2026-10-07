import { CreditCard, LockKeyhole } from "lucide-react";

export function PayPalButton({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black transition hover:-translate-y-0.5 hover:brightness-95 ${dark ? "bg-[#07100e] text-white" : "cta-green bg-[#A6E878] text-[#07100e]"}`}>
      <CreditCard size={17}/> {label}
      <LockKeyhole size={14} className="opacity-60"/>
    </a>
  );
}
