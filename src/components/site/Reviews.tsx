import { Reveal } from "./Reveal";
import { Stars } from "./Stars";

const REVIEWS = [
  {
    name: "Mateus Martins",
    tag: "Local Guide",
    quote:
      "We stopped by Dania's for lunch while passing nearby and were pleasantly surprised. The atmosphere was lovely — very welcoming and full of character, with an authentic feel.",
  },
  {
    name: "Charles Burks",
    tag: "Local Guide",
    quote:
      "The perfect spot to taste the best of Budapest. I wanted to do more smaller plate tastings as opposed to a larger meal and was happy to discover Dania's Table. The proprietor was the perfect guide.",
  },
  {
    name: "Lean Belly",
    tag: "Guest",
    quote:
      "A very quiet and great place. I tried Hungarian cuisine for the first time, and it's absolutely delicious! The goulash, dessert, and all the other dishes are simply wonderful!",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="candle-gradient py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">Guest Words</p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl md:text-5xl">
            4.9 out of 5, from 345 guests
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
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
          {/* TODO: replace with your Google Maps reviews link */}
          <a
            href="https://www.google.com/search?q=Dania%27s+Table+Restaurant+%26+Bar+Budapest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm border border-accent px-9 py-4 text-xs uppercase tracking-[0.24em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            See all 345 reviews on Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
