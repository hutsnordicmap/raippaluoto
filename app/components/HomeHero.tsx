"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  href: string;
  title: string;
  credit: string;
  creditHref?: string;
  position?: string;
};

export function HomeHero({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  function go(next: number) {
    setPaused(true);
    setIndex(next);
  }

  return (
    <section aria-roledescription="carousel" aria-label="Places on Raippaluoto" className="relative h-[72vh] min-h-[460px] max-h-[820px] bg-black">
      {slides.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          aria-label={item.title}
          tabIndex={i === index ? 0 : -1}
          aria-hidden={i === index ? undefined : true}
          className={`absolute inset-0 block transition-opacity duration-700 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <img
            src={item.src}
            alt={i === index ? item.alt : ""}
            className="h-full w-full object-cover"
            style={{ objectPosition: item.position ?? "center" }}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        </Link>
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
      <p className="pointer-events-none absolute bottom-14 left-5 font-display text-2xl font-bold tracking-tight text-white sm:left-8 sm:text-3xl">
        {slide.title}
      </p>
      <p className="absolute bottom-14 right-5 max-w-[14rem] text-right text-[11px] leading-4 text-white/80 sm:right-8">
        {slide.creditHref ? (
          <a href={slide.creditHref} className="pointer-events-auto underline underline-offset-2">
            {slide.credit}
          </a>
        ) : (
          slide.credit
        )}
      </p>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((item, i) => (
          <button
            key={item.href}
            type="button"
            aria-label={`Show ${item.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
            className={`h-1.5 cursor-pointer rounded-full ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
