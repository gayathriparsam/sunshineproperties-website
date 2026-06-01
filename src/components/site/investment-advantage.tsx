import { Reveal } from "./reveal";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  MapPin,
  Factory,
  Building2,
  Landmark,
  ShieldCheck,
  Banknote,
  Plane,
  Train,
  GraduationCap,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import map from "@/assets/gallery-6.jpg";

const pillars = [
  { icon: TrendingUp, t: "High Appreciation Potential", d: "Land in Bangalore's growth corridors has historically appreciated 18–25% annually." },
  { icon: Factory, t: "Industrial Demand Driver", d: "Honda, Mahindra, TATA, Scania and dozens of OEMs are creating sustained housing demand." },
  { icon: Banknote, t: "Bank Loans Up To 70%", d: "Pre-approved with leading banks — quick documentation, smooth disbursal." },
  { icon: ShieldCheck, t: "Zero Legal Risk", d: "100% DTCP approved, A-Katha certified, with clean titles you can independently verify." },
];

const drivers = [
  { icon: Factory, t: "Narsapur Industrial Area", d: "Home to multinational manufacturers driving employment and land value." },
  { icon: Plane, t: "Kempegowda Intl. Airport", d: "Connected via NH-44 — under an hour to terminals via the upcoming PRR." },
  { icon: Train, t: "Suburban Rail & Metro", d: "Planned rail and metro extensions improving last-mile connectivity." },
  { icon: GraduationCap, t: "Top Educational Institutions", d: "Reputed schools, colleges and global universities within easy reach." },
  { icon: HeartPulse, t: "Healthcare Hubs", d: "Multi-specialty hospitals along Bellary Road and Devanahalli corridor." },
  { icon: Building2, t: "IT & Aerospace SEZs", d: "Devanahalli Business Park, Aerospace SEZ and KIADB industrial zones nearby." },
];

const roi = [
  { y: "2019", v: "₹900", l: "Per Sqft" },
  { y: "2021", v: "₹1,600", l: "Per Sqft" },
  { y: "2023", v: "₹2,400", l: "Per Sqft" },
  { y: "2025", v: "₹2,999", l: "Per Sqft" },
  { y: "2028*", v: "₹4,500+", l: "Projected" },
];

export function InvestmentAdvantage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
        <img src={hero} alt="Aerial plotted development" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
            Investment Advantage
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight max-w-4xl mx-auto">
            Why Sunshine plots are an<br className="hidden md:block" />
            <span className="italic text-brand-orange"> investor's smartest move</span>.
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Strategically located near Bangalore's most active industrial corridor — engineered
            for transparency, liquidity and long-term wealth creation.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
                Four pillars of value
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
                Backed by data. Designed for <span className="italic text-brand-green">returns</span>.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white p-7 border border-border/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
                Appreciation Trajectory
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
                Land prices in the corridor — <span className="italic text-brand-green">last 6 years</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent hidden md:block" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {roi.map((r, i) => (
                  <div key={r.y} className="relative rounded-2xl bg-white border border-border/60 p-6 text-center shadow-sm">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.y}</div>
                    <div className={`mt-2 font-serif text-2xl ${i === roi.length - 1 ? "text-brand-orange" : "text-foreground"}`}>{r.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{r.l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground text-center">*Projected based on historical CAGR and confirmed infrastructure projects.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location drivers */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/60 bg-cream">
              <img
                src={map}
                alt="Aerial connectivity view of the Narsapur corridor"
                className="w-full h-full aspect-[4/5] md:aspect-[4/3] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="text-[11px] tracking-[0.22em] uppercase font-medium">Narsapur Corridor</span>
                <span className="text-[11px] tracking-[0.18em] uppercase opacity-80">NH-44 · PRR</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Location Advantage
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
              Surrounded by the engines of <span className="italic text-brand-green">Bangalore's growth</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every Sunshine project is positioned on confirmed infrastructure corridors —
              not speculation. Real demand drivers within minutes of your doorstep.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {drivers.map((d) => (
                <div key={d.t} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground text-sm">{d.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{d.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investor profile */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
                Who invests with us
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-white">
                Built for every type of <span className="italic text-brand-orange">smart investor</span>.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Landmark, t: "First-Time Buyers", d: "Affordable entry pricing with end-to-end registration support." },
              { icon: TrendingUp, t: "Portfolio Investors", d: "Diversify your portfolio with tangible appreciating assets." },
              { icon: MapPin, t: "NRI Investors", d: "Documented, remote-friendly transactions with verified titles." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-white">
                    <x.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-white">{x.t}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-7 h-12">
              <Link to="/contact">
                Schedule Investment Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}