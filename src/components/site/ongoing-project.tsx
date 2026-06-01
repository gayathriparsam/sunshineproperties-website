import { CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import asvGate from "@/assets/asv-gate.jpg";

const highlights = [
  "DTCP Approved Layout",
  "A-Katha Certified Plots",
  "Bank Loan Available up to 70%",
  "Project Location - Kolar",
];

export function OnGoingProject() {
  return (
    <section id="ongoing-project" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="relative">
          {/* Full-width image */}
          <Reveal>
            <div className="relative overflow-hidden shadow-sm">
              <img
                src={asvGate}
                alt="ASV 135 GOLD project gate"
                className="h-[320px] sm:h-[420px] md:h-[560px] lg:h-[640px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Card overlaid on the right of the image, vertically centered */}
          <Reveal
            delay={0.15}
            className="relative md:absolute md:top-1/2 md:right-6 lg:right-10 md:-translate-y-1/2 md:w-[440px] lg:w-[500px] z-10 -mt-16 md:mt-0 px-4 md:px-0"
          >
            <div className="bg-white shadow-2xl border border-border/40 p-6 sm:p-8 md:p-10">
              <p className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                On Going Project
              </p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-brand-orange tracking-wide">
                ASV 135 GOLD
              </h3>

              {/* Diamond divider */}
              <div className="mt-4 flex items-center gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-2 w-2 rotate-45 bg-foreground/70"
                  />
                ))}
              </div>

              <ul className="mt-7 space-y-5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="h-6 w-6 text-[#22b14c] flex-shrink-0" fill="currentColor" stroke="white" strokeWidth={2.5} />
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20ASV%20135%20GOLD"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full md:w-auto bg-[#22b14c] hover:bg-[#1c9a41] text-white px-10 py-4 rounded-md font-semibold text-base transition-colors shadow-md"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}