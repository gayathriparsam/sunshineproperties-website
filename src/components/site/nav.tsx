import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/investment-advantage", label: "Investment Advantage" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      {/* Top utility bar (desktop only) */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100 border-white/15"
        } ${open ? "border-border/60" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-9 text-[11px] tracking-[0.18em] uppercase">
          <span className={scrolled || open ? "text-muted-foreground" : "text-white/80"}>
            DTCP &amp; A-Katha Approved · Narsapur Industrial Corridor
          </span>
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 font-semibold hover:text-brand-orange ${
              scrolled || open ? "text-foreground/80" : "text-white/90"
            }`}
          >
            <Phone className="h-3.5 w-3.5" /> +91 98765 43210
          </a>
        </div>
      </div>

      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Sunshine Marketing & Promoters" className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} />
          <div className="hidden xl:flex flex-col leading-tight">
            <span
              className={`font-serif transition-all duration-300 ${scrolled ? "text-base" : "text-xl"} ${scrolled || open ? "text-foreground" : "text-white"}`}
            >
              Sunshine
            </span>
            <span
              className={`tracking-[0.2em] uppercase transition-all duration-300 ${scrolled ? "text-[9px]" : "text-[10px]"} ${
                scrolled || open ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Marketing &amp; Promoters
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`whitespace-nowrap text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-brand-orange ${
                scrolled || open ? "text-foreground/85" : "text-white/90"
              }`}
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Button
            asChild
            className={`hidden sm:inline-flex bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-5 md:px-6 text-[12px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap shadow-md shadow-orange-900/20 transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          >
            <Link to="/contact">Book Site Visit</Link>
          </Button>
          <button
            className={`lg:hidden p-2 rounded-md ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Full-screen overlay menu (Godrej-style) */}
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-xl" />
      <div className="relative h-full w-full overflow-y-auto pt-24 pb-10 px-6">
        <div className="mx-auto max-w-md flex flex-col">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-white/10 py-5 text-white"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: l.to === "/" }}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              <span className="font-serif text-2xl">{l.label}</span>
              <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-brand-orange transition-colors" />
            </Link>
          ))}

          <div className="mt-10 grid grid-cols-2 gap-3">
            <Button
              asChild
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full h-12"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book Site Visit
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full h-12 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </a>
            </Button>
          </div>

          <p className="mt-8 text-center text-xs tracking-[0.18em] uppercase text-white/40">
            Sunshine Marketing &amp; Promoters
          </p>
        </div>
      </div>
    </div>
    </>
  );
}