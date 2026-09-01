import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

/** Sticky navigation with mobile hamburger + persistent "Reserve a Table" CTA. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#home"
          className={`font-serif text-lg leading-tight tracking-wide transition-colors md:text-xl ${
            scrolled ? "text-primary" : "text-cream"
          }`}
        >
          Dania&rsquo;s Table
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-cream/85"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground sm:inline-block"
          >
            Reserve a Table
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
          >
            {open ? <Menu className="h-6 w-6 rotate-90 transition-transform" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {[...LINKS, { href: "#reserve", label: "Reserve" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3 text-sm uppercase tracking-[0.18em] text-foreground last:border-0 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export { X };
