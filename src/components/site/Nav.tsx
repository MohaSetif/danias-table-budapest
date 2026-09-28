import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../../public/danias_restaurant/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

/** Sticky responsive navigation */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  const LINKS = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#location", label: t.nav.location },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Responsive Pill toggle: HU | EN */
  function LangToggle({ compact = false }: { compact?: boolean }) {
    return (
      <button
        type="button"
        onClick={toggleLang}
        aria-label={lang === "hu" ? "Switch to English" : "Váltás magyarra"}
        className={`flex shrink-0 items-center overflow-hidden rounded-sm border text-[0.62rem] font-medium uppercase tracking-[0.1em] transition-colors cursor-pointer ${
          compact ? "border-border" : scrolled ? "border-border" : "border-cream/40"
        }`}
      >
        <span
          className={`px-2 py-1 sm:px-2.5 sm:py-1.5 transition-colors ${
            lang === "hu"
              ? "bg-primary text-primary-foreground font-semibold"
              : compact || scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-cream/70 hover:text-cream"
          }`}
        >
          HU
        </span>
        <span
          className={`px-2 py-1 sm:px-2.5 sm:py-1.5 transition-colors ${
            lang === "en"
              ? "bg-primary text-primary-foreground font-semibold"
              : compact || scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-cream/70 hover:text-cream"
          }`}
        >
          EN
        </span>
      </button>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Logo */}
        <a
          href="#home"
          aria-label="Dania's Table - Home"
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Dania's Table Restaurant & Bar"
            className="
              h-12
              w-auto
              max-w-[150px]
              object-contain
              transition-all
              duration-300

              sm:h-14
              sm:max-w-[170px]

              md:h-16
              md:max-w-[190px]

              lg:h-20
              lg:max-w-[220px]
            "
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`whitespace-nowrap text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-accent xl:text-[0.75rem] xl:tracking-[0.18em] ${
                  scrolled
                    ? "text-foreground"
                    : "text-cream/85"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Language toggle — always accessible */}
          <LangToggle />
          
          {/* Desktop/tablet CTA */}
          <a
            href="#reserve"
            className="
              hidden
              rounded-sm
              bg-primary
              px-3
              py-2
              text-[0.62rem]
              uppercase
              tracking-[0.12em]
              text-primary-foreground
              transition-all
              duration-300
              hover:bg-accent
              hover:text-accent-foreground

              sm:inline-block
              md:px-4
              md:py-2.5
              md:text-[0.68rem]

              xl:px-5
              xl:text-[0.72rem]
              xl:tracking-[0.2em]
            "
          >
            {t.nav.reserve}
          </a>

          {/* Mobile / tablet menu */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background/98 shadow-lg backdrop-blur-lg lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {[...LINKS, { href: "#reserve", label: t.nav.reserve }].map(
              (l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="
                      block
                      border-b
                      border-border/50
                      py-4
                      text-sm
                      uppercase
                      tracking-[0.18em]
                      text-foreground
                      transition-colors
                      last:border-0
                      hover:text-accent
                    "
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
            {/* Language toggle at bottom of mobile menu drawer */}
            <li className="flex items-center justify-between pt-4 pb-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {lang === "hu" ? "Nyelv választás" : "Language selection"}
              </span>
              <LangToggle compact />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}