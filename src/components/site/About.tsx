import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import table from "../../../public/danias_restaurant/download (9).jpg";

/**
 * ABOUT SECTION
 * IMAGE PLACEHOLDER #2 — "About photo — dining room / exposed brick"
 */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          {/* --- ABOUT IMAGE --- */}
          <div className="aspect-4/5 w-full overflow-hidden rounded-sm border border-border">
            <ImagePlaceholder src={table} label="About photo — dining room / exposed brick" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl md:text-5xl">
            A warm table in the heart of Erzsébetváros
          </h2>
          <div className="mt-7 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
            <p>
              Dania&rsquo;s Table is a small, candlelit bistro where Hungarian
              cooking is treated with care and a little contemporary curiosity.
              Exposed brick, low light and the smell of paprika simmering slowly
              — it feels less like a restaurant and more like being welcomed
              into someone&rsquo;s home.
            </p>
            <p>
              Our proprietor greets nearly every guest personally, guiding you
              through the menu whether you&rsquo;re here for an intimate
              tapas-style tasting of small plates or a full, unhurried dinner.
              Everything is made to be shared, talked over and lingered upon.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { k: "Cuisine", v: "Contemporary Hungarian" },
              { k: "Per person", v: "4,000–6,000 Ft" },
              { k: "Service", v: "Dine-in & Delivery" },
            ].map((i) => (
              <div key={i.k}>
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-accent">{i.k}</dt>
                <dd className="mt-2 font-serif text-lg text-foreground">{i.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
