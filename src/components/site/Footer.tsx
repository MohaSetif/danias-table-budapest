import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="candle-gradient">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-cream">Dania&rsquo;s Table</h3>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent">
              Restaurant &amp; Bar
            </p>
            <p className="mt-5 text-sm font-light text-cream/70">
              Contemporary Hungarian cuisine, small plates and tapas-style
              tastings in Budapest&rsquo;s 7th district.
            </p>
          </div>

          <div className="space-y-3 text-sm text-cream/80">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" /> Izabella u. 27/A, 1077 Budapest
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <a href="tel:+36303196031" className="hover:text-accent">
                06 30 319 6031
              </a>
            </p>
            <p className="text-cream/60">Open daily &middot; closes 11 pm</p>
            <p className="text-cream/60">4,000–6,000 Ft per person</p>
          </div>

          <div className="md:text-right">
            {/* SOCIAL PLACEHOLDERS — swap the href values for your real profiles */}
            <div className="flex gap-3 md:justify-end">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="rounded-sm border border-cream/25 p-2.5 text-cream/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="#reserve"
              className="mt-6 inline-block rounded-sm bg-accent px-7 py-3 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-colors hover:bg-cream"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} Dania&rsquo;s Table Restaurant &amp; Bar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
