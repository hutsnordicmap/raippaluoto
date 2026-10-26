"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessPlot, nav } from "@/app/content/shared";

function current(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-brand text-white">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="leading-none">
          <span className="block font-display text-lg font-extrabold tracking-tight">Raippaluoto</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
            Kvarken
          </span>
        </Link>
        <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const on = current(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={`px-2.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] ${
                  on ? "text-accent outline outline-2 outline-accent" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <details key={pathname} className="group relative lg:hidden">
          <summary className="cursor-pointer list-none text-[12px] font-semibold uppercase tracking-[0.16em] [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Close</span>
          </summary>
          <nav
            aria-label="Sections"
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-30 overflow-auto bg-brand px-6 py-6"
          >
            {nav.map((item) => {
              const on = current(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={on ? "page" : undefined}
                  onClick={(event) => {
                    event.currentTarget.closest("details")!.open = false;
                  }}
                  className={`block border-b border-white/10 py-4 font-display text-3xl font-bold tracking-tight ${
                    on ? "text-accent" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="h-1.5 bg-accent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">Raippaluoto</p>
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
