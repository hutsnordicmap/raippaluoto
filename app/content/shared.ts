export type Card = {
  href: string;
  title: string;
  text: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type GuideLink = {
  href: string;
  title: string;
  text?: string;
};

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "links"; items: GuideLink[] }
  | { kind: "a"; href: string; label: string };

export type MapFrame = {
  src: string;
  title: string;
  href: string;
};

export type Guide = {
  path: string;
  title: string;
  description: string;
  kicker: string;
  lede: string;
  crumbs: { href: string; label: string }[];
  map?: MapFrame;
  facts?: Fact[];
  blocks: Block[];
  cards?: Card[];
  cardsHeading?: string;
};

const HUTS = "https://www.huts.fi";
const CITY = "finland/ostrobothnia/mustasaari";
// Sommarö through Björköby, Klobbskat through the bridge, inside the guide iframe.
const ISLAND_LAT = "63.260000";
const ISLAND_LNG = "21.290000";
const ISLAND_ZOOM = "9.50";

export const cityMap = `${HUTS}/${CITY}`;

export function areaMap(
  title: string,
  lat: string,
  lng: string,
  zoom: string,
): MapFrame {
  return {
    title,
    href: cityMap,
    src: `${HUTS}/embed/${CITY}?trails=1&address=1&lat=${lat}&lng=${lng}&zoom=${zoom}`,
  };
}

export function categoryMap(
  title: string,
  slug: string,
  hrefSlug: string = slug,
  lat: string = ISLAND_LAT,
  lng: string = ISLAND_LNG,
  zoom: string = ISLAND_ZOOM,
): MapFrame {
  return {
    title,
    href: `${HUTS}/${CITY}/${hrefSlug}`,
    src: `${HUTS}/embed/${CITY}/${slug}?trails=1&address=1&lat=${lat}&lng=${lng}&zoom=${zoom}`,
  };
}

export function placeMap(
  title: string,
  category: string,
  slug: string,
): MapFrame {
  const path = `${CITY}/${category}/${slug}`;
  return {
    title,
    href: `${HUTS}/${path}`,
    src: `${HUTS}/embed/${path}?trails=1&address=1`,
  };
}

export function routeMap(
  title: string,
  category: string,
  slug: string,
): MapFrame {
  const path = `${CITY}/routes/${category}/${slug}`;
  return {
    title,
    href: `${HUTS}/${path}`,
    src: `${HUTS}/embed/${path}?trails=1&address=1`,
  };
}

export const nav = [
  { href: "/places", label: "Places to go" },
  { href: "/see-and-do", label: "See & do" },
  { href: "/stay", label: "Stay" },
  { href: "/eat-and-drink", label: "Eat & drink" },
  { href: "/events", label: "Events" },
] as const;

export const homeCrumb = { href: "/", label: "Home" };

export const businessPlot =
  "https://mustasaari.fi/kehittaminen/yrittaminen/yrityskeskukset-ja-yritystontit/raippaluodon-yrityskeskus";
