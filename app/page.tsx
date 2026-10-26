import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, MapEmbed } from "@/app/components/GuideView";
import { HomeHero, type HeroSlide } from "@/app/components/HomeHero";
import { home } from "@/app/content/guides";
import { galleries } from "@/app/content/photos";

const sauna = galleries["/saunas/norra-vallgrund-beach"][0];
const kayak = galleries["/kayaking/sommaro"][0];
const tower = galleries["/towers/saltkaret"][0];

const slides: HeroSlide[] = [
  {
    src: "/replot-bridge.jpg",
    alt: "The Replot Bridge, the crossing onto Raippaluoto",
    href: "/places/replot-bridge",
    title: "Replot Bridge",
    credit: "Photo: Ninara, CC BY 2.0",
    creditHref: "https://commons.wikimedia.org/wiki/File:Replot_Bridge_in_Korsholm,_Finland,_2021_August.jpg",
    position: "center 40%",
  },
  {
    src: sauna.src,
    alt: sauna.alt,
    href: "/saunas/norra-vallgrund-beach",
    title: "Norra Vallgrund beach sauna",
    credit: sauna.credit,
  },
  {
    src: kayak.src,
    alt: kayak.alt,
    href: "/kayaking/sommaro",
    title: "Kayak to Sommarö",
    credit: kayak.credit,
  },
  {
    src: tower.src,
    alt: tower.alt,
    href: "/towers/saltkaret",
    title: "Saltkaret",
    credit: tower.credit,
  },
];

const seeOrder = [
  "/saunas",
  "/kayaking",
  "/beaches",
  "/towers",
  "/hiking",
  "/huts",
  "/ski-trails",
  "/disc-golf",
  "/fishing",
  "/sports",
  "/biking",
];
const seeCards = seeOrder.map((href) => home.seeCards.find((card) => card.href === href)!);

export const metadata: Metadata = {
  title: { absolute: home.title },
  description: home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: home.title,
    description: home.description,
    url: "https://raippaluoto.fi/",
    locale: "en_GB",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HomeHero slides={slides} />
      <div className="h-1.5 bg-accent" />

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-accent">Kvarken Archipelago</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(3.2rem,8vw,5.6rem)] font-extrabold uppercase leading-[0.92] tracking-tight">
          Raippaluoto
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">{home.lede}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">See & do</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
          Trails, beaches, and the archipelago
        </h2>
        <div className="mt-8">
          <CardGrid items={seeCards} />
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">Map</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
            The island, one map
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            Villages, saunas, beaches, and trails. The same kind of map is on every guide.
          </p>
          <div className="mt-8">
            <MapEmbed map={home.map} eager onDark />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">The island</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
          The bridge, the rising land, and the record
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
          Written from Mustasaari, UNESCO, and Statistics Finland, separate from the maps.
        </p>
        <Link
          href="/the-island"
          className="mt-8 inline-flex rounded-full bg-sea px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0f7a40]"
        >
          Read the island
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">Stay</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight">
          Sleep on the island
        </h2>
        <div className="mt-8">
          <CardGrid items={home.stayCards} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">Eat & drink</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">
            A harbor, not a restaurant row
          </h2>
          <div className="mt-6">
            <CardGrid items={home.eatCards} />
          </div>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">Events</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">
            Wednesday sauna is the standing plan
          </h2>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            Women from 17.30, men from 19.30, at Sommarösund. Three euros.
          </p>
          <Link
            href="/events"
            className="mt-6 inline-flex rounded-full bg-sea px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0f7a40]"
          >
            Events
          </Link>
        </div>
      </section>
    </main>
  );
}
