import { MapPin, Phone, Clock, UtensilsCrossed, Bike } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

/**
 * LOCATION & HOURS
 * IMAGE PLACEHOLDER #12 — "Map placeholder — Izabella u. 27/A, 1077 Budapest"
 * To use a live map, replace the ImagePlaceholder below with a Google Maps <iframe>.
 */
export function Location() {
  return (
    <section id="location" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
        <Reveal>
          {/* --- MAP --- */}
          <div className="aspect-4/3 w-full overflow-hidden rounded-sm border border-border">
            <ImagePlaceholder label="Map placeholder — Izabella u. 27/A, 1077 Budapest" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="eyebrow">Find Us</p>
          <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">
            Location &amp; Hours
          </h2>

          <ul className="mt-9 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Address
                </span>
                <span className="font-serif text-lg text-foreground">
                  Izabella u. 27/A, 1077 Budapest
                </span>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </span>
                {/* Click-to-call */}
                <a href="tel:+36303196031" className="font-serif text-lg text-foreground hover:text-accent">
                  06 30 319 6031
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Hours
                </span>
                <span className="font-serif text-lg text-foreground">Open daily</span>
                <span className="mt-2 inline-flex items-center gap-2 rounded-sm bg-primary/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Open now &middot; closes 11 pm
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <UtensilsCrossed className="h-4 w-4 text-accent" /> Dine-in
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Bike className="h-4 w-4 text-accent" /> Delivery
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
