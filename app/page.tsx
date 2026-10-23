import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, MapEmbed } from "@/app/components/GuideView";
import { home } from "@/app/content/guides";

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
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-hero text-white">
        <img
          src="/replot-bridge.jpg"
          alt="The Replot Bridge, the crossing onto Raippaluoto"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-end px-5 pb-16 pt-24 text-center">
          <p className="text-sm tracking-wide text-white/80">Kvarken Archipelago</p>
          <h1 className="mt-4 text-[clamp(3.4rem,8vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            Raippaluoto
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">{home.lede}</p>
        </div>
        <p className="absolute bottom-3 right-4 text-[11px] leading-4 text-white/75">
          Photo:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Replot_Bridge_in_Korsholm,_Finland,_2021_August.jpg"
            className="underline underline-offset-2"
          >
            Ninara
          </a>
          , CC BY 2.0
        </p>
      </section>

      <main>
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-muted">The record</p>
          <h2 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The island, in the sources
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8">
            The bridge, the rising land, and the municipality. Written from Mustasaari, UNESCO, and Statistics Finland, separate from the maps.
          </p>
          <Link href="/the-island" className="mt-6 inline-block font-medium underline underline-offset-4">
            Read the island
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <p className="text-sm text-muted">Places to go</p>
          <h2 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Five ways onto the island
          </h2>
          <div className="mt-8">
            <CardGrid items={home.placeCards} />
          </div>
        </section>

        <section className="bg-[#f6f6f6]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm text-muted">Map</p>
            <h2 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              The island, one map
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8">
              Villages, saunas, beaches, and trails. The same kind of map is on every guide.
            </p>
            <div className="mt-8">
              <MapEmbed map={home.map} eager />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-muted">Sauna</p>
          <h2 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Six saunas, and one of them is free
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8">
            Paddle to Djupskäret, or rent a village sauna for the evening. The expensive one is a cabin.
          </p>
          <Link href="/saunas" className="mt-6 inline-block font-medium underline underline-offset-4">
            See the saunas
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-muted">See & do</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trails, beaches, and the archipelago
          </h2>
          <div className="mt-8">
            <CardGrid items={home.seeCards} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-4">
          <p className="text-sm text-muted">Stay</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Sleep on the island</h2>
          <div className="mt-8">
            <CardGrid items={home.stayCards} />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted">Eat & drink</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">A harbor, not a restaurant row</h2>
            <div className="mt-6">
              <CardGrid items={home.eatCards} />
            </div>
          </div>
          <div>
            <p className="text-sm text-muted">Events</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Wednesday sauna is the standing plan</h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Women from 17.30, men from 19.30, at Sommarösund. Three euros.
            </p>
            <Link href="/events" className="mt-4 inline-block font-medium underline underline-offset-4">
              Events
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
