import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">Raippaluoto</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          This page is not on the map
        </h1>
        <div className="mt-5 h-1 w-16 bg-accent" />
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">The address does not match a guide on Raippaluoto.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-sea px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0f7a40]"
        >
          Raippaluoto
        </Link>
      </div>
    </main>
  );
}
