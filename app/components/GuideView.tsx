import Link from "next/link";
import { PhotoGallery } from "@/app/components/PhotoGallery";
import { galleries } from "@/app/content/photos";
import type { Block, Card, Guide, MapFrame } from "@/app/content/shared";

const categoryCovers: Record<string, string> = {
  "/saunas": "/saunas/norra-vallgrund-beach",
  "/beaches": "/beaches/fjardskar",
  "/hiking": "/hiking/sommaron",
  "/ski-trails": "/ski-trails/norra-vallgrund",
  "/huts": "/huts/sommaro-laavu",
  "/kayaking": "/kayaking/djupskaret",
  "/towers": "/towers/saltkaret",
};

function coverSrc(href: string): string | undefined {
  return galleries[href]?.[0]?.src ?? galleries[categoryCovers[href]]?.[0]?.src;
}

function PlaceLink({ href, title, text }: { href: string; title: string; text?: string }) {
  const src = galleries[href]?.[0]?.src;
  return (
    <Link href={href} className="block">
      {src ? <img src={src} alt="" className="aspect-[4/3] w-full object-cover" /> : null}
      <span className={`block font-display text-2xl font-bold tracking-tight text-white ${src ? "mt-4" : ""}`}>
        {title}
      </span>
      {text ? <span className="mt-1 block text-sm leading-6 text-white/70">{text}</span> : null}
    </Link>
  );
}

function CategoryLink({ href, title, text, src }: { href: string; title: string; text?: string; src: string }) {
  return (
    <Link href={href} className="block">
      <img src={src} alt="" className="aspect-[16/10] w-full object-cover" />
      <span className="block bg-brand px-4 py-5 text-center font-display text-2xl font-bold tracking-tight text-white">
        {title}
      </span>
      {text ? <span className="mt-3 block text-sm leading-6 text-white/70">{text}</span> : null}
    </Link>
  );
}

export function CardGrid({ items }: { items: Card[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
      {items.map((item) => {
        const src = coverSrc(item.href);
        const category = Boolean(src && !galleries[item.href]);
        return (
          <li key={item.href}>
            {category && src ? (
              <CategoryLink href={item.href} title={item.title} text={item.text} src={src} />
            ) : (
              <PlaceLink href={item.href} title={item.title} text={item.text} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function MapEmbed({ map, eager = false, onDark = false }: { map: MapFrame; eager?: boolean; onDark?: boolean }) {
  return (
    <figure>
      <iframe
        src={map.src}
        title={map.title}
        className="h-[560px] w-full bg-[#d7d3c8] sm:h-[640px]"
        loading={eager ? "eager" : "lazy"}
        allowFullScreen
      />
      <figcaption className={`mt-3 text-sm ${onDark ? "text-white/70" : "text-muted"}`}>
        Map from{" "}
        <a href={map.href} className={`font-medium underline underline-offset-4 ${onDark ? "text-white" : "text-ink"}`}>
          Huts.fi
        </a>
      </figcaption>
    </figure>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex max-w-2xl flex-col gap-5 text-[17px] leading-8 text-white/80">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2 key={index} className="pt-8 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white">
              {block.text}
            </h2>
          );
        }
        if (block.kind === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.kind === "a") {
          return (
            <p key={index}>
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-sea px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-white no-underline hover:bg-[#0f7a40]"
              >
                {block.label}
              </a>
            </p>
          );
        }
        const pictured = block.items.some((item) => galleries[item.href]?.[0]);
        if (!pictured) {
          return (
            <ul key={index} className="border-b border-white/15">
              {block.items.map((item) => (
                <li key={item.href} className="border-t border-white/15">
                  <Link href={item.href} className="block py-4">
                    <span className="font-display text-lg font-bold text-white">{item.title}</span>
                    {item.text ? <span className="mt-1 block text-sm leading-6 text-white/60">{item.text}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <ul key={index} className="flex flex-col gap-14 pt-2">
            {block.items.map((item) => (
              <li key={item.href}>
                <PlaceLink href={item.href} title={item.title} text={item.text} />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function GuideView({ guide }: { guide: Guide }) {
  return (
    <article className="bg-black pb-20 text-white">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            {guide.crumbs.map((crumb, index) => {
              const last = index === guide.crumbs.length - 1;
              return (
                <li key={crumb.href} className="flex gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {last ? (
                    <span className="text-white">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">{guide.kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          {guide.title}
        </h1>
        <div className="mt-5 h-1 w-16 bg-accent" />
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{guide.lede}</p>
        {galleries[guide.path] ? <PhotoGallery photos={galleries[guide.path]} /> : null}
      </div>

      {guide.map ? (
        <div className="mt-10 bg-brand">
          <div className="mx-auto max-w-6xl px-5 py-10">
            <MapEmbed map={guide.map} onDark />
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-5">
        {guide.facts ? (
          <dl className="mt-10 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {guide.facts.map((fact) => (
              <div key={fact.label} className="border-t-2 border-accent pt-3">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg font-bold leading-6">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {guide.blocks.length > 0 ? (
          <div className="mt-10">
            <Blocks blocks={guide.blocks} />
          </div>
        ) : null}
        {guide.cards && guide.cards.length > 0 ? (
          <section className="mt-14">
            {guide.cardsHeading ? (
              <h2 className="mb-5 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">
                {guide.cardsHeading}
              </h2>
            ) : null}
            <CardGrid items={guide.cards} />
          </section>
        ) : null}
      </div>
    </article>
  );
}
