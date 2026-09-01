import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

/**
 * MENU HIGHLIGHTS
 * IMAGE PLACEHOLDERS #3–#5 — one per dish card.
 * To swap a photo: import it above and add `src: myPhoto` to that dish object.
 */
const DISHES: { label: string; name: string; hu: string; desc: string; src?: string }[] = [
  {
    label: "Dish photo — Napi Leves",
    name: "Napi Leves",
    hu: "Soup of the Day",
    desc: "Whatever the market gives us that morning, simmered slowly and served with fresh bread.",
  },
  {
    label: "Dish photo — Marha Gulyás",
    name: "Marha Gulyás",
    hu: "Beef Goulash",
    desc: "The classic: tender beef, sweet paprika, root vegetables and a deep, rust-red broth.",
  },
  {
    label: "Dish photo — Csirkepaprikás",
    name: "Csirkepaprikás",
    hu: "Chicken Paprikash",
    desc: "Creamy paprika sauce over free-range chicken, with hand-pinched nokedli dumplings.",
  },
];

export function MenuHighlights() {
  return (
    <section id="menu" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">From the Kitchen</p>
          <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">
            Menu Highlights
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light text-muted-foreground">
            Small plates for tasting, or full portions for a proper Hungarian
            dinner. Our goulash and chicken paprikash are perennial guest
            favourites.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {DISHES.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
                {/* --- DISH IMAGE --- */}
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ImagePlaceholder label={d.label} src={d.src} alt={d.name} />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-primary">{d.name}</h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-accent">{d.hu}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          {/* TODO: point this at your full menu page or PDF (e.g. /menu.pdf in /public) */}
          <a
            href="#menu"
            className="inline-block rounded-sm border border-primary px-9 py-4 text-xs uppercase tracking-[0.24em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Full Menu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
