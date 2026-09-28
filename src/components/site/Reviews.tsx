import { Reveal } from "./Reveal";
import { Stars } from "./Stars";
import { useLanguage } from "@/i18n/LanguageContext";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="candle-gradient py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">{t.reviews.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl md:text-5xl">
            {t.reviews.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-sm border border-cream/15 bg-cream/5 p-8 transition-colors duration-500 hover:border-accent/60">
                <Stars value={5} />
                <blockquote className="mt-5 flex-1 font-serif text-lg font-light italic leading-relaxed text-cream/90">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-cream/15 pt-5">
                  <span className="block text-sm text-cream">{r.name}</span>
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                    {r.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href="https://www.google.com/maps/place/Dania's+Table+Restaurant+%26+Bar+Budapest/@47.5047989,19.0690185,592m/data=!3m1!1e3!4m15!1m8!3m7!1s0x4741ddd727c91d07:0x59c07d7c714d552c!2sDania's+Table+Restaurant+%26+Bar+Budapest!8m2!3d47.5047953!4d19.0715934!10e9!16s%2Fg%2F11xtwvvf2s!3m5!1s0x4741ddd727c91d07:0x59c07d7c714d552c!8m2!3d47.5047953!4d19.0715934!16s%2Fg%2F11xtwvvf2s?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm border border-accent px-9 py-4 text-xs uppercase tracking-[0.24em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {t.reviews.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
