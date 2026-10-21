import Link from "next/link";
import { businessPlot, nav } from "@/app/content/shared";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-hero text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Raippaluoto
        </Link>
        <nav aria-label="Sections" className="hidden items-center gap-7 text-sm sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white/70">
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none text-sm [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Sections"
            className="absolute right-0 top-full mt-3 w-52 border border-line bg-white p-2 text-ink shadow-lg"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-hero text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">Raippaluoto</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
            A guide to the island in Mustasaari. Maps on these pages are embedded from Huts.fi.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a href="https://www.huts.fi/finland/ostrobothnia/mustasaari" className="text-white/80 hover:text-white">
            Mustasaari on Huts.fi
          </a>
          <a
            href={businessPlot}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white"
          >
            Business plots in Raippaluoto
          </a>
        </div>
      </div>
    </footer>
  );
}
