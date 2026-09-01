import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

/**
 * GALLERY SECTION
 * IMAGE PLACEHOLDERS #6–#11 — swap each entry's `src` with your own import.
 */
const GALLERY: { label: string; span?: string; src?: string }[] = [
  { label: "Gallery photo 1 — dining room at night", span: "md:col-span-2 md:row-span-2" },
  { label: "Gallery photo 2 — plated dish close-up" },
  { label: "Gallery photo 3 — bar & wine selection" },
  { label: "Gallery photo 4 — small plates spread" },
  { label: "Gallery photo 5 — dessert" },
  { label: "Gallery photo 6 — exterior on Izabella utca", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal className="text-center">
        <p className="eyebrow">The Vibe</p>
        <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">Gallery</h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
        {GALLERY.map((g, i) => (
          <Reveal key={g.label} delay={i * 80} className={`${g.span ?? ""} overflow-hidden`}>
            <div className="h-full w-full overflow-hidden rounded-sm border border-border transition-all duration-500 hover:border-accent">
              {/* --- GALLERY IMAGE --- */}
              <ImagePlaceholder label={g.label} src={g.src} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
