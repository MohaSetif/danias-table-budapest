import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuHighlights } from "@/components/site/MenuHighlights";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Reserve } from "@/components/site/Reserve";
import { Footer } from "@/components/site/Footer";

const TITLE = "Dania's Table Restaurant & Bar — Hungarian Dining in Budapest";
const DESCRIPTION =
  "Authentic Hungarian flavors in the heart of Budapest. Small plates, goulash and chicken paprikash at Izabella u. 27/A. Open daily until 11 pm. 4.9★ from 345 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Reviews />
        <Gallery />
        <Location />
        <Reserve />
      </main>
      <Footer />

      {/* Mobile-only floating Reserve button so the CTA is always reachable */}
      <a
        href="#reserve"
        className="fixed inset-x-5 bottom-5 z-40 rounded-sm bg-primary py-4 text-center text-xs uppercase tracking-[0.24em] text-primary-foreground shadow-lg sm:hidden"
      >
        Reserve a Table
      </a>
    </div>
  );
}
