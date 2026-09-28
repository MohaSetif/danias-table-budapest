export type Lang = "hu" | "en";

export const translations = {
  hu: {
    nav: {
      home: "Főoldal",
      about: "Rólunk",
      menu: "Étlap",
      reviews: "Vélemények",
      gallery: "Galéria",
      location: "Elérhetőség",
      reserve: "Asztal Foglalás",
    },
    hero: {
      reviewsBadge: "4.9 · 345 Google vélemény",
      tagline:
        "Hiteles magyar ízek Budapest szívében — kis tányérok, lassan főtt klasszikusok és jó bor, gyertyafény mellett.",
      cta: "Asztal Foglalás",
      menuLink: "Étlap Megtekintése",
    },
    about: {
      eyebrow: "Történetünk",
      heading: "Meleg asztal Erzsébetváros szívében",
      p1: "A Dania's Table egy kis, gyertyafényes bisztró, ahol a magyar konyha gondossággal és egy kis kortárs kíváncsisággal készül. Csupasz tégla, halk fény és a lassan párolódó paprika illata — inkább otthonra, mint étteremre emlékeztet.",
      p2: "Tulajdonosunk szinte minden vendéget személyesen üdvözöl, és végigkalauzol az étlapon — legyen szó intimebb, tapas-jellegű kis tányéros kóstolóról vagy egy teljes, sietség nélküli vacsoráról. Minden megosztásra, elbeszélgetésre és elidőzésre készült.",
      stats: [
        { k: "Konyha", v: "Kortárs Magyar" },
        { k: "Személyenként", v: "4 000–6 000 Ft" },
        { k: "Szolgáltatás", v: "Helyben fogyasztás" },
      ],
    },
    menu: {
      eyebrow: "A Konyhából",
      heading: "Étlap Kiemelések",
      intro:
        "Kis tányérok kóstoláshoz, vagy teljes adagok egy igazi magyar vacsorához. Gulyásunk és csirkepaprikásunk örökös vendégkedvenc.",
      viewFull: "Teljes Étlap Megtekintése",
      dishes: [
        {
          name: "Napi Leves",
          subtitle: "Napi Leves",
          desc: "Amit aznap reggel a piac ad, lassan főzve, friss kenyérrel tálalva.",
        },
        {
          name: "Marha Gulyás",
          subtitle: "Marha Gulyás",
          desc: "A klasszikus: omlós marhahús, édes paprika, gyökérzöldségek és egy mély, rozsdavörös leves.",
        },
        {
          name: "Csirkepaprikás",
          subtitle: "Csirkepaprikás",
          desc: "Krémes paprikás szósz szabadtartású csirke felett, kézzel csipkedett nokedlivel.",
        },
      ],
    },
    reviews: {
      eyebrow: "Vendégeink Szavai",
      heading: "4.9 az 5-ből, 345 vendég értékelése alapján",
      cta: "Összes 345 vélemény megtekintése a Google-on",
      items: [
        {
          name: "Mateus Martins",
          tag: "Helyi Útmutató",
          quote:
            "Ebédre betértünk Daniáékhoz, miközben a közelben jártunk, és kellemes meglepetés ért minket. A hangulat gyönyörű volt — nagyon barátságos és karakteres, hiteles érzéssel.",
        },
        {
          name: "Charles Burks",
          tag: "Helyi Útmutató",
          quote:
            "A legjobb hely Budapest legjavának megkóstolásához. Kisebb tányéros kóstolót szerettem volna a nagy fogás helyett, és örömmel fedeztem fel a Dania's Table-t. A tulajdonos tökéletes kalauz volt.",
        },
        {
          name: "Lean Belly",
          tag: "Vendég",
          quote:
            "Nagyon csendes és nagyszerű hely. Először kóstoltam magyar konyhát, és abszolút finom! A gulyás, a desszert és az összes többi fogás egyszerűen csodálatos!",
        },
      ],
    },
    gallery: {
      eyebrow: "A Hangulat",
      heading: "Galéria",
    },
    location: {
      eyebrow: "Találj Meg Minket",
      heading: "Helyszín és Nyitvatartás",
      addressLabel: "Cím",
      phoneLabel: "Telefon",
      hoursLabel: "Nyitvatartás",
      openDaily: "Naponta nyitva",
      openNow: "Most nyitva · 23:00-ig",
      dineIn: "Helyben fogyasztás",
      noDelivery: "Kiszállítás nincs",
    },
    reserve: {
      eyebrow: "Csatlakozzon Hozzánk",
      heading: "Asztal Foglalás",
      subtext:
        "Mondja el, mikor szeretne eljönni, és telefonon visszaigazoljuk. Inkább velünk szeretne beszélni?",
      callLink: "Hívja a 06 30 319 6031 számot",
      fields: {
        name: "Név",
        namePlaceholder: "Az Ön neve",
        contact: "Telefon vagy email",
        contactPlaceholder: "Elérhetősége",
        date: "Dátum",
        time: "Időpont",
        partySize: "Vendégek száma",
        notes: "Megjegyzés (opcionális)",
        notesPlaceholder: "Allergiák, alkalom, ülőhely preferencia…",
        guest: "vendég",
        guests: "vendég",
        nineOrMore: "9+ vendég",
      },
      submit: "Foglalás Kérése",
      callUs: "Hívjon Minket",
      confirmation:
        "Köszönjük! Kérését feljegyeztük — hamarosan visszaigazoljuk az asztalt.",
    },
    footer: {
      tagline:
        "Kortárs magyar konyha, kis tányérok és tapas-jellegű kóstolók Budapest 7. kerületében.",
      hours: "Naponta nyitva · 23:00-ig zár",
      perPerson: "4 000–6 000 Ft személyenként",
      reserve: "Asztal Foglalás",
      copyright: "Minden jog fenntartva.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      reviews: "Reviews",
      gallery: "Gallery",
      location: "Location",
      reserve: "Reserve a Table",
    },
    hero: {
      reviewsBadge: "4.9 · 345 Google reviews",
      tagline:
        "Authentic Hungarian Flavors in the Heart of Budapest — small plates, slow-cooked classics and good wine, served by candlelight.",
      cta: "Reserve a Table",
      menuLink: "View the Menu",
    },
    about: {
      eyebrow: "Our Story",
      heading: "A warm table in the heart of Erzsébetváros",
      p1: "Dania\u2019s Table is a small, candlelit bistro where Hungarian cooking is treated with care and a little contemporary curiosity. Exposed brick, low light and the smell of paprika simmering slowly \u2014 it feels less like a restaurant and more like being welcomed into someone\u2019s home.",
      p2: "Our proprietor greets nearly every guest personally, guiding you through the menu whether you\u2019re here for an intimate tapas-style tasting of small plates or a full, unhurried dinner. Everything is made to be shared, talked over and lingered upon.",
      stats: [
        { k: "Cuisine", v: "Contemporary Hungarian" },
        { k: "Per person", v: "4,000\u20136,000 Ft" },
        { k: "Service", v: "Dine-in & Delivery" },
      ],
    },
    menu: {
      eyebrow: "From the Kitchen",
      heading: "Menu Highlights",
      intro:
        "Small plates for tasting, or full portions for a proper Hungarian dinner. Our goulash and chicken paprikash are perennial guest favourites.",
      viewFull: "View Full Menu",
      dishes: [
        {
          name: "Napi Leves",
          subtitle: "Soup of the Day",
          desc: "Whatever the market gives us that morning, simmered slowly and served with fresh bread.",
        },
        {
          name: "Marha Gulyás",
          subtitle: "Beef Goulash",
          desc: "The classic: tender beef, sweet paprika, root vegetables and a deep, rust-red broth.",
        },
        {
          name: "Csirkepaprikás",
          subtitle: "Chicken Paprikash",
          desc: "Creamy paprika sauce over free-range chicken, with hand-pinched nokedli dumplings.",
        },
      ],
    },
    reviews: {
      eyebrow: "Guest Words",
      heading: "4.9 out of 5, from 345 guests",
      cta: "See all 345 reviews on Google",
      items: [
        {
          name: "Mateus Martins",
          tag: "Local Guide",
          quote:
            "We stopped by Dania\u2019s for lunch while passing nearby and were pleasantly surprised. The atmosphere was lovely \u2014 very welcoming and full of character, with an authentic feel.",
        },
        {
          name: "Charles Burks",
          tag: "Local Guide",
          quote:
            "The perfect spot to taste the best of Budapest. I wanted to do more smaller plate tastings as opposed to a larger meal and was happy to discover Dania\u2019s Table. The proprietor was the perfect guide.",
        },
        {
          name: "Lean Belly",
          tag: "Guest",
          quote:
            "A very quiet and great place. I tried Hungarian cuisine for the first time, and it\u2019s absolutely delicious! The goulash, dessert, and all the other dishes are simply wonderful!",
        },
      ],
    },
    gallery: {
      eyebrow: "The Vibe",
      heading: "Gallery",
    },
    location: {
      eyebrow: "Find Us",
      heading: "Location & Hours",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      openDaily: "Open daily",
      openNow: "Open now \u00b7 closes 11 pm",
      dineIn: "Dine-in",
      noDelivery: "No Delivery",
    },
    reserve: {
      eyebrow: "Join Us",
      heading: "Reserve a Table",
      subtext:
        "Tell us when you\u2019d like to come and we\u2019ll confirm by phone. Prefer to speak with us?",
      callLink: "Call 06 30 319 6031",
      fields: {
        name: "Name",
        namePlaceholder: "Your name",
        contact: "Phone or email",
        contactPlaceholder: "How we reach you",
        date: "Date",
        time: "Time",
        partySize: "Party size",
        notes: "Notes (optional)",
        notesPlaceholder: "Allergies, occasion, seating preference\u2026",
        guest: "guest",
        guests: "guests",
        nineOrMore: "9+ guests",
      },
      submit: "Request Reservation",
      callUs: "Call us",
      confirmation:
        "K\u00f6sz\u00f6nj\u00fck! Your request has been noted \u2014 we\u2019ll confirm your table shortly.",
    },
    footer: {
      tagline:
        "Contemporary Hungarian cuisine, small plates and tapas-style tastings in Budapest\u2019s 7th district.",
      hours: "Open daily \u00b7 closes 11 pm",
      perPerson: "4,000\u20136,000 Ft per person",
      reserve: "Reserve a Table",
      copyright: "All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)["hu"];
