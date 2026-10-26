"use client";

import { useRef, useState } from "react";
import type { Photo } from "@/app/content/shared";

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const many = photos.length > 1;
  const current = photos[index] ?? photos[0];

  function go(next: number) {
    setIndex((next + photos.length) % photos.length);
  }

  function onScroll() {
    const el = scroller.current;
    if (!el || el.clientWidth === 0) return;
    const i = Math.max(0, Math.min(photos.length - 1, Math.round(el.scrollLeft / el.clientWidth)));
    setIndex((prev) => (prev === i ? prev : i));
  }

  return (
    <div className="mt-8">
      <div className="relative">
        <div
          ref={scroller}
          onScroll={onScroll}
          className="gallery-scroll flex snap-x snap-mandatory overflow-x-auto md:hidden"
        >
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              className="h-[280px] min-w-full flex-[0_0_100%] snap-center object-cover"
            />
          ))}
        </div>
        <img src={current.src} alt={current.alt} className="hidden h-[480px] w-full object-cover md:block" />
        {many ? (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => go(index - 1)}
              className="absolute top-1/2 left-3 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-black/75 text-2xl text-white md:flex"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => go(index + 1)}
              className="absolute top-1/2 right-3 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-black/75 text-2xl text-white md:flex"
            >
              ›
            </button>
          </>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-white/70">
        {current.credit}
        {many ? <span className="text-white/40"> · {index + 1} / {photos.length}</span> : null}
      </p>
      {many ? (
        <div className="mt-3 flex justify-center gap-1.5 md:hidden" aria-hidden="true">
          {photos.map((photo, i) => (
            <span key={photo.src} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-accent" : "bg-white/30"}`} />
          ))}
        </div>
      ) : null}
      {many ? (
        <div className="mt-4 hidden grid-cols-6 gap-2 md:grid">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
              className={`cursor-pointer ${i === index ? "outline outline-2 outline-offset-2 outline-accent" : "opacity-60 hover:opacity-100"}`}
            >
              <img src={photo.src} alt="" className="pointer-events-none h-16 w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
