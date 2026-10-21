import Link from "next/link";
import type { Block, Card, Guide, MapFrame } from "@/app/content/shared";

export function CardGrid({ items }: { items: Card[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex h-full flex-col rounded-md border border-line bg-white p-5 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <span className="text-lg font-semibold tracking-tight">{item.title}</span>
            <span className="mt-2 text-sm leading-6 text-muted">{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MapEmbed({ map, eager = false }: { map: MapFrame; eager?: boolean }) {
  return (
    <figure>
      <iframe
        src={map.src}
        title={map.title}
        className="h-[560px] w-full border border-line bg-[#f3f3f3] sm:h-[640px]"
        loading={eager ? "eager" : "lazy"}
        allowFullScreen
      />
      <figcaption className="mt-3 text-sm text-muted">
        Map from{" "}
        <a href={map.href} className="font-medium text-ink underline underline-offset-4">
          Huts.fi
        </a>
      </figcaption>
    </figure>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex max-w-2xl flex-col gap-5 text-[17px] leading-8">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2 key={index} className="pt-6 text-3xl font-semibold tracking-tight">
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
                className="font-medium underline underline-offset-4"
              >
                {block.label}
              </a>
            </p>
          );
        }
        return (
          <ul key={index} className="border-b border-line">
            {block.items.map((item) => (
              <li key={item.href} className="border-t border-line">
                <Link href={item.href} className="block py-4 hover:bg-[#fafafa]">
                  <span className="font-semibold">{item.title}</span>
                  {item.text ? (
                    <span className="mt-1 block text-sm leading-6 text-muted">{item.text}</span>
                  ) : null}
                </Link>
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
    <article className="mx-auto flex max-w-6xl flex-col px-5 pt-10">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          {guide.crumbs.map((crumb, index) => {
            const last = index === guide.crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span className="text-ink">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-ink">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <p className="mt-8 text-sm text-muted">{guide.kicker}</p>
      <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.02]">
        {guide.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink">{guide.lede}</p>
      {guide.map ? (
        <div className="mt-10">
          <MapEmbed map={guide.map} />
        </div>
      ) : null}
      {guide.facts ? (
        <dl className="mt-10 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
          {guide.facts.map((fact) => (
            <div key={fact.label} className="border-t border-line pt-3">
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1 leading-6">{fact.value}</dd>
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
            <h2 className="mb-5 text-3xl font-semibold tracking-tight">{guide.cardsHeading}</h2>
          ) : null}
          <CardGrid items={guide.cards} />
        </section>
      ) : null}
    </article>
  );
}
