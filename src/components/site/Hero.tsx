import { ImagePlaceholder } from "./ImagePlaceholder";
import { Stars } from "./Stars";
import { Reveal } from "./Reveal";

/**
 * HERO SECTION
 * IMAGE PLACEHOLDER #1 — "Hero image — restaurant interior"
 * Replace by importing your photo and passing it as `src` below.
 */
export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* --- HERO BACKGROUND IMAGE --- */}
      <div className="absolute inset-0">
        <ImagePlaceholder label="Hero image — restaurant interior" align="top" />
        {/* Candlelit warm overlay for text legibility */}
        <div className="absolute inset-0 candle-gradient opacity-90" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-cream/25 px-4 py-2">
            <Stars value={4.9} />
            <span className="text-xs uppercase tracking-[0.2em] text-cream/85">
              4.9 &middot; 345 Google reviews
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow mb-5">Izabella u. 27/A &middot; Budapest</p>
          <h1 className="font-serif text-4xl leading-[1.1] text-cream sm:text-6xl md:text-7xl">
            Dania&rsquo;s Table
            <span className="mt-2 block text-2xl font-light italic text-accent sm:text-3xl">
              Restaurant &amp; Bar
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-cream/80 sm:text-lg">
            Authentic Hungarian Flavors in the Heart of Budapest — small plates,
            slow-cooked classics and good wine, served by candlelight.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#reserve"
              className="rounded-sm bg-accent px-9 py-4 text-xs uppercase tracking-[0.24em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-sm border border-cream/40 px-9 py-4 text-xs uppercase tracking-[0.24em] text-cream transition-all duration-300 hover:border-accent hover:text-accent"
            >
              View the Menu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
