import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const DISH_PHOTOS = [
  {
    label: "Dish photo — Napi Leves",
    src: "/danias_restaurant/download (1).jpg",
  },
  {
    label: "Dish photo — Marha Gulyás",
    src: "/danias_restaurant/download (8).jpg",
  },
  {
    label: "Dish photo — Csirkepaprikás",
    src: "/danias_restaurant/download (13).jpg",
  },
];

export function MenuHighlights() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">{t.menu.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">
            {t.menu.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light text-muted-foreground">
            {t.menu.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.menu.dishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
                {/* --- DISH IMAGE --- */}
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ImagePlaceholder
                    label={DISH_PHOTOS[i]?.label ?? d.name}
                    src={DISH_PHOTOS[i]?.src ?? ""}
                    alt={d.name}
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-primary">{d.name}</h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                    {d.subtitle}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-block rounded-sm border border-primary px-9 py-4 text-xs uppercase tracking-[0.24em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {t.menu.viewFull}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
