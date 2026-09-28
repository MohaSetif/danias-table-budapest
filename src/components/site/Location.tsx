import { MapPin, Phone, Clock, UtensilsCrossed, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * LOCATION & HOURS
 */
export function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
        <Reveal>
          {/* --- MAP --- */}
          <div className="aspect-4/3 w-full overflow-hidden rounded-sm border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.424810508707!2d19.06901851715156!3d47.504795289377604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddd727c91d07%3A0x59c07d7c714d552c!2sDania's%20Table%20Restaurant%20%26%20Bar%20Budapest!5e1!3m2!1sen!2shu!4v1788288925652!5m2!1sen!2shu"
              width="600"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="eyebrow">{t.location.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">
            {t.location.heading}
          </h2>

          <ul className="mt-9 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.location.addressLabel}
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
                  {t.location.phoneLabel}
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
                  {t.location.hoursLabel}
                </span>
                <span className="font-serif text-lg text-foreground">{t.location.openDaily}</span>
                <div className="mt-2 flex items-center">
                  <span className="inline-flex items-center gap-2 rounded-sm bg-primary/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t.location.openNow}
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <UtensilsCrossed className="h-4 w-4 text-accent" /> {t.location.dineIn}
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <X className="h-4 w-4 text-accent" /> {t.location.noDelivery}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
