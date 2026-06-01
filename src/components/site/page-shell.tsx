import { SiteNav } from "./nav";
import { SiteFooter } from "./footer";
import { FloatingContact } from "./floating-contact";
import type { ReactNode } from "react";
import hero from "@/assets/hero.jpg";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
        <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">{eyebrow}</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}