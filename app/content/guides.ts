import {
  areaMap,
  businessPlot,
  categoryMap,
  cityMap,
  homeCrumb,
  placeMap,
  routeMap,
  type Card,
  type Guide,
} from "@/app/content/shared";

const see = { href: "/see-and-do", label: "See & do" };
const places = { href: "/places", label: "Places to go" };
const stay = { href: "/stay", label: "Stay" };
const eat = { href: "/eat-and-drink", label: "Eat & drink" };

const placeCards: Card[] = [
  {
    href: "/places/norra-vallgrund",
    title: "Norra Vallgrund",
    text: "A small fishing village, a sandy beach, and a harbor of red huts.",
  },
  {
    href: "/places/sodra-vallgrund",
    title: "Södra Vallgrund",
    text: "The southern village, and the start of the Sommarö trails.",
  },
  {
    href: "/places/bjorkoby",
    title: "Björköby",
    text: "The road north, toward the Kvarken Archipelago.",
  },
  {
    href: "/places/replot-bridge",
    title: "Replot Bridge",
    text: "The crossing onto the island.",
  },
  {
    href: "/places/kvarken",
    title: "Kvarken Archipelago",
    text: "A world heritage landscape at the north end of the island.",
  },
  {
    href: "/places/parking",
    title: "Where to park",
    text: "Free lots at the trailheads, and the sports field in Replot.",
  },
];

const seeCards: Card[] = [
  {
    href: "/saunas",
    title: "Saunas",
    text: "Six saunas you can use or rent, one of them free if you paddle there.",
  },
  {
    href: "/beaches",
    title: "Beaches",
    text: "Six official beaches on the island, and one just before the bridge.",
  },
  {
    href: "/hiking",
    title: "Hiking trails",
    text: "Ten official trails, from a 15-minute path to a 23 km ferry hike.",
  },
  {
    href: "/ski-trails",
    title: "Ski trails",
    text: "Two lit tracks, and the harbor ice when the winter is cold enough.",
  },
  {
    href: "/huts",
    title: "Huts & outdoor grills",
    text: "Day shelters, one free overnight cabin, and places to light a fire.",
  },
  {
    href: "/kayaking",
    title: "Kayaking",
    text: "Two paddles from Norra Vallgrund beach, to a sauna and a laavu.",
  },
  {
    href: "/biking",
    title: "Biking trails",
    text: "Cycling routes on the island, on the map.",
  },
  {
    href: "/towers",
    title: "Towers & viewpoints",
    text: "Saltkaret, Kikanberget, and two viewing terraces.",
  },
  {
    href: "/disc-golf",
    title: "Disc golf",
    text: "A ten-hole course in Norra Vallgrund, looked after by IF Kvarken.",
  },
  {
    href: "/fishing",
    title: "Fishing & piers",
    text: "Shore fishing at the bridge, and the piers along the trails.",
  },
  {
    href: "/sports",
    title: "Sports",
    text: "School gyms, ball fields, hockey rinks, and the outdoor gyms.",
  },
];

const stayCards: Card[] = [
  {
    href: "/stay/rv-camping",
    title: "RV camping",
    text: "Places to park a camper, including the harbor at Klobbskat.",
  },
  {
    href: "/stay/tent-camping",
    title: "Tent camping",
    text: "Where a tent is welcome, including the yard at Sommarö sauna.",
  },
  {
    href: "/stay/holiday-homes",
    title: "Holiday homes",
    text: "Five holiday cabins on the island, plus two wilderness rentals.",
  },
];

const eatCards: Card[] = [
  {
    href: "/eat-and-drink/restaurants",
    title: "Restaurants & cafes",
    text: "Café Kompass and Kalle’s Inn at Klobbskat.",
  },
  {
    href: "/eat-and-drink/kvarken-brewery",
    title: "Kvarken Brewery",
    text: "A gastropub and pizzeria on Replotvägen in Replot.",
  },
];

export const home = {
  title: "Raippaluoto – Kvarken Archipelago",
  description:
    "A guide to Raippaluoto in Mustasaari: villages, saunas, beaches, trails, and a map of the island.",
  lede: "A fishing island in Mustasaari, across the Replot Bridge. Red boathouses, sandy beaches, saunas the villages heat themselves, and trails out toward the Kvarken Archipelago.",
  map: areaMap("Map of Raippaluoto", "63.260000", "21.290000", "9.50"),
  placeCards,
  seeCards,
  stayCards,
  eatCards,
};

const ferryNote =
  "The timetable noted for the 2024 season was every day from 10.00 to 18.00 between 29 June and 15 August, then Saturdays and Sundays from 10 to 18 between 16 August and 30 September. Check the current year before you count on a crossing.";

export const guides: Guide[] = [
  {
    path: "/the-island",
    title: "The island",
    description:
      "Sourced notes on Raippaluoto: the names, the bridge, the rising land, and the municipality of Mustasaari.",
    kicker: "Raippaluoto",
    lede: "The maps on this site come from Huts.fi. This page is the rest: what the municipality, UNESCO, and Statistics Finland actually publish about the island.",
    crumbs: [homeCrumb, { href: "/the-island", label: "The island" }],
    map: areaMap("Map of Raippaluoto", "63.260000", "21.290000", "9.50"),
    facts: [
      { label: "Finnish name", value: "Raippaluoto" },
      { label: "Swedish name", value: "Replot" },
      { label: "Municipality", value: "Mustasaari (Korsholm)" },
      { label: "Region", value: "Ostrobothnia" },
      { label: "Road bridge", value: "1,045 m, opened 27 August 1997" },
      { label: "World Heritage", value: "Kvarken Archipelago, added in 2006" },
    ],
    blocks: [
      { kind: "h2", text: "Two names" },
      {
        kind: "p",
        text: "Raippaluoto is the Finnish name. Replot is the Swedish one. Both are in daily use, because Mustasaari is a Swedish-speaking municipality that also uses the name Korsholm. The road bridge is Raippaluodon silta in Finnish and Replotbron in Swedish.",
      },
      {
        kind: "p",
        text: "Today’s Mustasaari was formed in 1973, when five municipalities merged: Björköby, Korsholm, Kvevlax, Replot, and Solf. In Finnish those are Björköby, Mustasaari, Koivulahti, Raippaluoto, and Sulva. Replot had been its own municipality until that date. The municipality now reports about 19,800 inhabitants, of whom 69 percent have Swedish and 29 percent Finnish as their mother tongue. That split is for the whole municipality, not a separate census of the island.",
      },
      { kind: "h2", text: "How many people live here" },
      {
        kind: "p",
        text: "There is no single official headcount published for “the island of Raippaluoto” as one area. Statistics Finland counts people by postal area. In 2024 the postal area 65800 Raippaluoto had 841 residents. That area is the Replot village postcode. It is not Vallgrund, and it is not Björköby. A round number for the whole archipelago would mix those areas together, so this site does not invent one.",
      },
      { kind: "h2", text: "The bridge" },
      {
        kind: "p",
        text: "The Replot Bridge is a cable-stayed road bridge with two pylons. Mustasaari gives the measurements: 1,045 metres long, 64 cables, the longest of them 127 metres, a main span of 250 metres with 26 metres of clearance, and pylons 82.5 metres above the water. It was opened on 27 August 1997. From then until 2026 it was Finland’s longest bridge.",
      },
      {
        kind: "p",
        text: "On 18 April 2026 Helsinki opened the Kruunuvuori Bridge, 1,191 metres, and Yle reported that it took the title. That bridge is for walking, cycling, and trams. Cars are not allowed on it. The drive onto Raippaluoto is still the Replot Bridge. Mustasaari’s own page has not yet caught up: it still calls this Finland’s longest bridge.",
      },
      { kind: "h2", text: "The land is still rising" },
      {
        kind: "p",
        text: "The north end of the islands is part of a UNESCO World Heritage property shared with Sweden. Its name is High Coast / Kvarken Archipelago. The World Heritage Committee added the Kvarken Archipelago in 2006, extending the High Coast, which was already on the list. UNESCO describes about 5,600 islands, and about 290 metres of uplift over the past 10,500 years. The rise has not stopped.",
      },
      {
        kind: "p",
        text: "The world-heritage managers put the recent pace at about 0.9 metres a century, which is fast enough to notice in a lifetime. Mustasaari says the municipality’s land area grows by about 20 hectares a year because of that uplift. The 20 hectares are for all of Mustasaari, not for Raippaluoto alone.",
      },
      {
        kind: "p",
        text: "The shape of the north end is a field of De Geer moraines. They are named for the geologist Gerard De Geer, who first described them. The world-heritage site says the ridges sit 50 to 200 metres apart, and that one ridge can run for up to a kilometre and stand two to five metres high. They formed on the sea floor at the edge of the inland ice. The same site says the ice over this coast was about 3,000 metres thick at its maximum, 18,000 years ago. The ridges are easiest to see where they still stand in the water, at Svedjehamn, on the walk out from Björköby.",
      },
      { kind: "h2", text: "The villages on the record" },
      {
        kind: "p",
        text: "The National Library of Finland’s place vocabulary lists the villages on Replot as Replot, Södra Vallgrund (with the hamlet Kalvholmen), Norra Vallgrund, Brändövik, Söderudden, Panike, and Vistan. Björkö, with the village Björköby, lies to the north. Those are recorded place names, not a ranking of which village matters. The guides on this site cover the ones a visitor actually asks for.",
      },
      { kind: "h2", text: "Where to park" },
      {
        kind: "p",
        text: "Huts maps three free lots at the trailheads: Kvarken in Björköby, Sommarö in Södra Vallgrund, and Vargis in Panike. The sports field in Replot is the lot for the lit ski track.",
      },
      {
        kind: "links",
        items: [{ href: "/places/parking", title: "Where to park" }],
      },
      { kind: "h2", text: "What this site will not pretend to know" },
      {
        kind: "p",
        text: "Beach amenities, a full restaurant list, a bike-route guide, and an events calendar are not here unless someone has published them and we can point at that page. Saunas, trails, and harbours are on the maps from Huts.fi. If a number on this page and a number on the municipality’s own site ever disagree, the municipality is the one to trust, and this page should be corrected.",
      },
      { kind: "h2", text: "Sources" },
      {
        kind: "links",
        items: [
          {
            href: "https://en.korsholm.fi/municipality/facts-about-the-municipality",
            title: "Mustasaari: facts about the municipality",
            text: "The 1973 merger, population, languages, and the 20 hectares of new land a year.",
          },
          {
            href: "https://mustasaari.fi/kunta/matkailu/nahtavyydet/raippaluodon-silta",
            title: "Mustasaari: Raippaluodon silta",
            text: "Length, cables, span, clearance, pylons, and the opening date.",
          },
          {
            href: "https://yle.fi/a/74-20220786",
            title: "Yle, 18 April 2026: Finland’s longest bridge opens in Helsinki",
            text: "The Kruunuvuori Bridge, 1,191 metres, and the title it took from Replot.",
          },
          {
            href: "https://www.hel.fi/fi/uutiset/sillalla-tavataan-lauantaina-18-huhtikuuta-oma-kruunu-paahan",
            title: "City of Helsinki: the opening day",
            text: "Walking and cycling from 18 April 2026. No cars.",
          },
          {
            href: "https://whc.unesco.org/en/list/898/",
            title: "UNESCO: High Coast / Kvarken Archipelago",
            text: "The 5,600 islands, and about 290 metres of uplift in 10,500 years.",
          },
          {
            href: "https://whc.unesco.org/en/decisions/996/",
            title: "UNESCO decision, 2006",
            text: "The meeting that added the Kvarken Archipelago to the World Heritage List.",
          },
          {
            href: "https://highcoastkvarken.org/our-joint-world-heritage/traces-of-the-ice/",
            title: "High Coast / Kvarken: traces of the ice",
            text: "De Geer moraines, and where to see them at Svedjehamn.",
          },
          {
            href: "https://tilastokone.fi/en/municipalities/mustasaari/65800/",
            title: "Statistics Finland, Paavo 2024: postal area 65800",
            text: "841 residents. This is the Replot postcode, not the whole island.",
          },
          {
            href: "https://finto.fi/yso-paikat/se/page/p105764",
            title: "National Library of Finland: Replot",
            text: "The Swedish entry lists the village names, and the merger into Korsholm in 1973.",
          },
        ],
      },
      {
        kind: "links",
        items: [
          { href: "/places/replot-bridge", title: "Replot Bridge", text: "The crossing, and the beach just before it." },
          { href: "/places/kvarken", title: "Kvarken Archipelago", text: "The north end, and the walks from Björköby." },
          { href: "/places", title: "Places to go", text: "The villages." },
        ],
      },
    ],
  },
  {
    path: "/places",
    title: "Places to go",
    description: "Villages and landscapes on Raippaluoto: Norra Vallgrund, Södra Vallgrund, Björköby, the bridge, and Kvarken.",
    kicker: "Raippaluoto",
    lede: "The island is a string of villages. Start in one of them, or drive north until the road runs out at the archipelago.",
    crumbs: [homeCrumb, { href: "/places", label: "Places to go" }],
    map: areaMap("Map of places on Raippaluoto", "63.260000", "21.290000", "9.50"),
    blocks: [],
    cards: placeCards,
    cardsHeading: "On the island",
  },
  {
    path: "/places/norra-vallgrund",
    title: "Norra Vallgrund",
    description: "A small fishing village on Raippaluoto, with a harbor of red huts, a beach, and a guest harbor.",
    kicker: "Places to go",
    lede: "Norra Vallgrund is a small village on Raippaluoto. It was a fishing village, and it is still known for a harbor of classic red fishing huts.",
    crumbs: [homeCrumb, places, { href: "/places/norra-vallgrund", label: "Norra Vallgrund" }],
    map: areaMap("Map of Norra Vallgrund", "63.190000", "21.318000", "12.60"),
    blocks: [
      { kind: "h2", text: "Things to do" },
      {
        kind: "links",
        items: [
          { href: "/beaches/norra-vallgrund", title: "Norra Vallgrund Beach", text: "A sandy beach the village looks after, with a sauna and a winter swimming hole." },
          { href: "/saunas/norra-vallgrund-beach", title: "Beach sauna", text: "10 euros. Firewood included." },
          { href: "/kayaking/djupskaret", title: "Kayak to Djupskäret sauna", text: "From the beach to the free sauna on Djupskäret." },
          { href: "/kayaking/sommaro", title: "Kayak to Sommarö laavu", text: "The same line can be skied in a cold winter, once the ice is thick." },
          { href: "/disc-golf", title: "Disc golf", text: "A ten-hole course in the village, looked after by IF Kvarken." },
        ],
      },
      { kind: "h2", text: "On the ice" },
      {
        kind: "p",
        text: "In a cold winter the ice in the harbor gets very thick, and locals eventually take snowmobiles and skis out on it. The kayak line toward Sommarö can become a ski line. Wait until you see people already out there. Farther out there are currents, and the ice can be thinner.",
      },
      { kind: "h2", text: "Fishing" },
      {
        kind: "p",
        text: "The traditional winter fishing here is with nets. A fishing license for nets is sold at the local store in Södra Vallgrund, Södra Vallgrund Handelslag. A lot of people come for a fishing holiday and use Norra Vallgrund as a base. The guest harbor has a boat ramp.",
      },
      { kind: "h2", text: "Berries" },
      {
        kind: "p",
        text: "Sea buckthorn grows at Norra Vallgrund beach. Blueberries and lingonberries show up if you drive down Söderuddentie.",
      },
      { kind: "h2", text: "The boat harbor" },
      {
        kind: "p",
        text: "The village keeps two private harbors. Mustasaari keeps one public guest harbor.",
      },
      { kind: "h2", text: "History" },
      {
        kind: "a",
        href: "https://storymaps.arcgis.com/stories/122142073eb8416b9cb9e2738234d318",
        label: "History of Norra Vallgrund",
      },
    ],
  },
  {
    path: "/places/sodra-vallgrund",
    title: "Södra Vallgrund",
    description: "The southern village on Raippaluoto, where the Sommarö trails begin.",
    kicker: "Places to go",
    lede: "Södra Vallgrund is the southern village. The Sommarö walks start here, and the village store sells the net-fishing licenses.",
    crumbs: [homeCrumb, places, { href: "/places/sodra-vallgrund", label: "Södra Vallgrund" }],
    map: areaMap("Map of Södra Vallgrund", "63.169000", "21.290000", "12.80"),
    blocks: [
      {
        kind: "p",
        text: "Sommarön luontopolku is a short, wide, accessible loop of about 1.5 km that ends at Sommarö laavu. The longer Sommarön trail is about 5 km from the same start, out to Sommarösund beach and the sauna you can rent. Sommarön vartiotupa sits on both walks.",
      },
      {
        kind: "p",
        text: "Södra Vallgrund Handelslag is the store that sells licenses for fishing with nets.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/sommaron-nature-trail", title: "Sommarön nature trail", text: "1.5 km, accessible, to the laavu." },
          { href: "/hiking/sommaron", title: "Sommarön hiking trail", text: "About 5 km to the beach and sauna." },
          { href: "/huts/sommaro-laavu", title: "Sommarö laavu" },
          { href: "/saunas/sommarosund", title: "Sommarösund sauna" },
          { href: "/beaches/sodra-vallgrund", title: "Södra Vallgrund beach" },
        ],
      },
    ],
  },
  {
    path: "/places/bjorkoby",
    title: "Björköby",
    description: "The village on the way to the Kvarken Archipelago, with a city beach at Röresbukten.",
    kicker: "Places to go",
    lede: "You come through Björköby on the way to the north end of the island. The Kvarken Archipelago is the day out. The city beach is at Röresbukten.",
    crumbs: [homeCrumb, places, { href: "/places/bjorkoby", label: "Björköby" }],
    map: areaMap("Map of Björköby", "63.356000", "21.314000", "12.50"),
    blocks: [
      {
        kind: "p",
        text: "For a day walk, Bodvattnet runt is the 4 km loop. The accessible version stops at about 1 km. Both leave from the same landscape of the archipelago.",
      },
      {
        kind: "links",
        items: [
          { href: "/places/kvarken", title: "Kvarken Archipelago" },
          { href: "/hiking/bodvattnet", title: "Bodvattnet runt", text: "4 km loop." },
          { href: "/hiking/bodvattnet-accessible", title: "Bodvattnet, accessible", text: "About 1 km." },
          { href: "/beaches/bjorkoby", title: "Björköby beach" },
        ],
      },
    ],
  },
  {
    path: "/places/replot-bridge",
    title: "Replot Bridge",
    description: "The bridge onto Raippaluoto, and the beach just before the crossing.",
    kicker: "Places to go",
    lede: "The Replot Bridge is the drive onto the island. It is 1,045 metres long and opened on 27 August 1997. Fjärdskär beach sits on the mainland side, just before you cross.",
    crumbs: [homeCrumb, places, { href: "/places/replot-bridge", label: "Replot Bridge" }],
    facts: [
      { label: "Length", value: "1,045 m" },
      { label: "Opened", value: "27 August 1997" },
      { label: "Main span", value: "250 m, with 26 m of clearance" },
      { label: "Pylons", value: "82.5 m, held by 64 cables" },
    ],
    map: {
      title: "Map of the Replot Bridge",
      href: cityMap,
      src: "https://www.huts.fi/embed/finland/ostrobothnia/mustasaari/bridges?trails=1&address=1&lat=63.208000&lng=21.470000&zoom=12.80",
    },
    blocks: [
      {
        kind: "p",
        text: "Mustasaari’s figures: a cable-stayed bridge, two pylons, 64 cables of which the longest is 127 metres. It was Finland’s longest bridge until 18 April 2026, when Helsinki opened the Kruunuvuori Bridge for walking, cycling, and trams. Cars still cross to the island here.",
      },
      {
        kind: "links",
        items: [
          { href: "/the-island", title: "The island", text: "The sourced account of the bridge, the land uplift, and the municipality." },
          { href: "/fishing", title: "Fishing at the bridge", text: "A shore spot on the crossing, plus the piers elsewhere on the island." },
        ],
      },
      {
        kind: "a",
        href: "https://mustasaari.fi/kunta/matkailu/nahtavyydet/raippaluodon-silta",
        label: "Mustasaari on the bridge",
      },
      {
        kind: "a",
        href: "https://mustasaari.fi/2023/04/infotilaisuus-raippaluodon-sillan-uudesta-valaistuksesta-2",
        label: "Mustasaari on the bridge’s new lighting",
      },
      {
        kind: "links",
        items: [
          {
            href: "/beaches/fjardskar",
            title: "Fjärdskär beach",
            text: "Just before the bridge. Not on the island itself.",
          },
        ],
      },
    ],
  },
  {
    path: "/places/kvarken",
    title: "Kvarken Archipelago",
    description: "The UNESCO Kvarken Archipelago at the north end of Raippaluoto, reached through Björköby.",
    kicker: "Places to go",
    lede: "The famous part of the island is at the north end. Drive toward Björköby and you reach the Kvarken Archipelago, a UNESCO World Heritage site.",
    crumbs: [homeCrumb, places, { href: "/places/kvarken", label: "Kvarken Archipelago" }],
    map: areaMap("Map of the Kvarken Archipelago", "63.359000", "21.297000", "13.00"),
    blocks: [
      {
        kind: "p",
        text: "For a day, walk Bodvattnet runt, a 4 km loop, or the accessible kilometer that stops sooner. The loop passes Saltkaret bird tower, the Märraryggen outdoor grill, and Bodvattnet hut. There is free firewood and there are toilets. Blueberries and lingonberries grow in the forest in late summer. In summer you will not be alone.",
      },
      {
        kind: "p",
        text: "The long walk is Björkö to Panike, 23 km. It needs two water crossings. The ferry at Korsbådafjärden is a new electric ferry and it is free. " + ferryNote + " At Rotörskatan the city does not run a ferry. The two recommended private boat taxis are Neptune Service and Ulf Rönnblad.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/bodvattnet", title: "Bodvattnet runt" },
          { href: "/hiking/bodvattnet-accessible", title: "Accessible Bodvattnet" },
          { href: "/towers/saltkaret", title: "Saltkaret" },
          { href: "/huts/marraryggen", title: "Märraryggen outdoor grill" },
          { href: "/hiking/bjorko-panike", title: "Björkö to Panike" },
        ],
      },
      { kind: "a", href: "https://neptune-service.fi", label: "Neptune Service" },
    ],
  },
  {
    path: "/see-and-do",
    title: "See & do",
    description: "Saunas, beaches, trails, huts, kayaking, disc golf, fishing, sports, and towers on Raippaluoto.",
    kicker: "Raippaluoto",
    lede: "The island is small enough to learn in a few days. Most of what people come for is outdoors: a sauna, a beach, a loop in the woods, or the archipelago.",
    crumbs: [homeCrumb, see],
    map: areaMap("Map of things to do on Raippaluoto", "63.260000", "21.290000", "9.50"),
    blocks: [],
    cards: seeCards,
    cardsHeading: "Guides",
  },
  {
    path: "/saunas",
    title: "Saunas",
    description: "Six saunas on Raippaluoto you can use or rent, from a free island sauna to a cabin at Björkören.",
    kicker: "See & do",
    lede: "There are six saunas you can use or rent. One is free, if you arrive by boat or kayak. Five others rent from 10 to 40 euros, and one comes with a cabin at 180 euros a day.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }],
    map: categoryMap("Saunas on Raippaluoto", "saunas"),
    blocks: [],
    cardsHeading: "The six",
    cards: [
      { href: "/saunas/djupskaret", title: "Djupskäret", text: "Free. A public sauna on an island, reached by boat or kayak." },
      { href: "/saunas/norra-vallgrund-beach", title: "Norra Vallgrund beach", text: "10 euros. A quiet sandy beach, with a winter swimming hole." },
      { href: "/saunas/sommarosund", title: "Sommarösund", text: "3 euros on Wednesday, or 40 euros to rent it." },
      { href: "/saunas/klobbskat", title: "Klobbskat", text: "19 euros. The fishing port’s sauna, with a room to sit in." },
      { href: "/saunas/sommaro", title: "Sommarö", text: "40 euros. Room for a larger group, on the accessible trail." },
      { href: "/saunas/bjorkoren", title: "Björkören", text: "180 euros a day for the cabin, sauna included." },
    ],
  },
  {
    path: "/saunas/djupskaret",
    title: "Djupskäret sauna",
    description: "A free public sauna on the island of Djupskäret, with a grill, an outhouse, and a pier.",
    kicker: "Saunas",
    lede: "A pretty hidden sauna, known mostly to locals and people with boats. It is free.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/djupskaret", label: "Djupskäret" }],
    map: placeMap("Djupskäret sauna", "saunas", "djupskaret-sauna-and-laavu"),
    facts: [{ label: "Price", value: "Free" }],
    blocks: [
      {
        kind: "p",
        text: "On Djupskäret there is a public sauna anyone can use, a covered outdoor grill, an outhouse, and a pier. People have left saws for cutting sauna wood. Others bring wood and leave some for the next guests. On a nice summer weekend it can be busy, and it draws a drinking crowd. On a weekday, very few people are there.",
      },
      {
        kind: "p",
        text: "It is an easy trip with a boat or a kayak. By kayak, the mapped route starts at Norra Vallgrund beach. By boat, the main channel runs in front of the island and the pier is visible from it.",
      },
      {
        kind: "links",
        items: [{ href: "/kayaking/djupskaret", title: "Kayak from Norra Vallgrund beach" }],
      },
    ],
  },
  {
    path: "/saunas/norra-vallgrund-beach",
    title: "Norra Vallgrund beach sauna",
    description: "A community sauna on an isolated sandy beach in Norra Vallgrund. 10 euros, firewood included.",
    kicker: "Saunas",
    lede: "Another quiet one. The village looks after it, on a sandy beach where there is usually no one else around.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/norra-vallgrund-beach", label: "Norra Vallgrund beach" }],
    map: placeMap("Norra Vallgrund beach sauna", "saunas", "norra-vallgrund-beach-and-sauna"),
    facts: [
      { label: "Price", value: "10 euros. Firewood included." },
      { label: "Address", value: "Hamnvägen 170, Norra Vallgrund" },
    ],
    blocks: [
      {
        kind: "p",
        text: "A summer evening here is the right time. In winter the community keeps a swimming hole, an avanto. Classic red fishing huts stand around the beach. In summer there is a lot of sea buckthorn to pick. The beach has an outhouse, a fire pit, and changing rooms.",
      },
      {
        kind: "links",
        items: [
          { href: "/beaches/norra-vallgrund", title: "The beach" },
          { href: "/places/norra-vallgrund", title: "Norra Vallgrund" },
        ],
      },
    ],
  },
  {
    path: "/saunas/sommarosund",
    title: "Sommarösund sauna",
    description: "A Södra Vallgrund sauna on the beach. 3 euros on Wednesday, or 40 euros to rent.",
    kicker: "Saunas",
    lede: "Better known than the village saunas, and still usually free to book. It sits on the beach at the end of the longer Sommarö trail.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/sommarosund", label: "Sommarösund" }],
    map: placeMap("Sommarösund sauna", "saunas", "sommarosund-sauna"),
    facts: [
      { label: "Wednesday", value: "3 euros. Women 17.30–19.30, men 19.30–22.00." },
      { label: "Private rental", value: "40 euros. Comfortable for four people." },
    ],
    blocks: [
      {
        kind: "p",
        text: "Every Wednesday the Södra Vallgrund community heats the sauna and anyone can join. There is also a room with a fireplace and a table, so you can sit with friends during and after. In winter they keep an avanto. There are volleyball courts and an outdoor grill. Bring a little extra firewood if you want to grill, and extra water: there is no tap.",
      },
      {
        kind: "links",
        items: [{ href: "/hiking/sommaron", title: "Sommarön hiking trail" }],
      },
    ],
  },
  {
    path: "/saunas/klobbskat",
    title: "Klobbskat sauna",
    description: "The Klobbskat fishing port sauna. 19 euros, with a room and tables.",
    kicker: "Saunas",
    lede: "Mostly locals use this one, so it is usually free to rent. The fishing port keeps it, and anyone can book it.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/klobbskat", label: "Klobbskat" }],
    map: placeMap("Klobbskat sauna", "saunas", "klobbskat-sauna"),
    facts: [{ label: "Price", value: "19 euros" }],
    blocks: [
      {
        kind: "p",
        text: "The sauna is in the harbor, with a fairly large room and tables. Klobbskat feels like the middle of nowhere. Kvarken Brewery makes its beer here, and Kalle’s Inn is here too. The harbor also has RV parking, a grill that the city sometimes stocks with wood, and a glass gazebo with a grill looking over the water.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/kikanberget", title: "Kikanberget" },
          { href: "/towers/kikanberget", title: "Kikanberget tower" },
          { href: "/stay/rv-camping", title: "RV parking" },
        ],
      },
    ],
  },
  {
    path: "/saunas/sommaro",
    title: "Sommarö sauna",
    description: "A larger sauna near the Sommarö parking lot. 40 euros, with a kitchen building and a yard for tents.",
    kicker: "Saunas",
    lede: "The one to book for a bigger group. It is close to the parking lot, on the accessible trail.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/sommaro", label: "Sommarö" }],
    map: placeMap("Sommarö sauna", "saunas", "sommaro-pihasauna"),
    facts: [{ label: "Price", value: "40 euros" }],
    blocks: [
      {
        kind: "p",
        text: "The sauna is large, and a second building has a kitchen. The yard has an outdoor grill and a lot of firewood. You cannot stay overnight in the buildings. You can set up tents around the place.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/sommaron-nature-trail", title: "Sommarön nature trail" },
          { href: "/stay/tent-camping", title: "Tent camping" },
        ],
      },
    ],
  },
  {
    path: "/saunas/bjorkoren",
    title: "Björkören",
    description: "A Metsähallitus rental cabin with a sauna near Vargis. 180 euros a day.",
    kicker: "Saunas",
    lede: "The cheap saunas are the ones above. Björkören is the cabin. You get the sauna by renting the cabin, 180 euros a day.",
    crumbs: [homeCrumb, see, { href: "/saunas", label: "Saunas" }, { href: "/saunas/bjorkoren", label: "Björkören" }],
    map: placeMap("Björkören cabin", "wilderness-huts", "bjorkoren-vuokratupa"),
    facts: [
      { label: "Price", value: "180 euros a day" },
      { label: "Sleeps", value: "A group of about six. Bunk beds." },
      { label: "Managed by", value: "Metsähallitus" },
    ],
    blocks: [
      {
        kind: "p",
        text: "The cabin has a kitchen and indoor fireplaces, and the sauna. It is a good holiday spot if six of you want somewhere a bit out of the way. Vargis hiking trail and the kayak rental at Vaasan Kajakkivuokraus are nearby.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/vargis", title: "Vargis hiking trail" },
          { href: "/stay/holiday-homes", title: "Holiday homes" },
        ],
      },
    ],
  },
  {
    path: "/beaches",
    title: "Beaches",
    description: "Six official beaches on Raippaluoto, plus Fjärdskär just before the bridge.",
    kicker: "See & do",
    lede: "There are six official beaches on the island. Fjärdskär is a seventh, on the mainland side of the bridge.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }],
    map: categoryMap("Beaches on Raippaluoto", "beaches"),
    blocks: [],
    cardsHeading: "Beaches",
    cards: [
      { href: "/beaches/raippaluoto", title: "Raippaluoto beach", text: "By the harbor. Changing rooms, a jumping tower, volleyball, and a kiosk." },
      { href: "/beaches/norra-vallgrund", title: "Norra Vallgrund beach", text: "Isolated sand, a sauna, and a winter swimming hole." },
      { href: "/beaches/sodra-vallgrund", title: "Södra Vallgrund beach", text: "In the southern village." },
      { href: "/beaches/bulleras", title: "Bullerås beach", text: "One of the six official beaches." },
      { href: "/beaches/vistan", title: "Vistan beach", text: "One of the six official beaches." },
      { href: "/beaches/bjorkoby", title: "Björköby beach", text: "At Röresbukten, kept by the city of Mustasaari." },
      { href: "/beaches/fjardskar", title: "Fjärdskär beach", text: "Just before the bridge, not on the island itself." },
    ],
  },
  {
    path: "/beaches/raippaluoto",
    title: "Raippaluoto beach",
    description: "The community beach by the harbor at Kyläsatamantie 200.",
    kicker: "Beaches",
    lede: "The community keeps a sandy beach right next to the harbor.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/raippaluoto", label: "Raippaluoto beach" }],
    map: placeMap("Raippaluoto beach", "beaches", "raippaluoto-beach"),
    facts: [{ label: "Address", value: "Kyläsatamantie 200, Raippaluoto" }],
    blocks: [
      { kind: "p", text: "Changing rooms, an outdoor toilet, a jumping tower, a beach volleyball court, and a kiosk." },
    ],
  },
  {
    path: "/beaches/norra-vallgrund",
    title: "Norra Vallgrund beach",
    description: "A community beach at Hamnvägen 170, with a sauna, grill, and winter swimming hole.",
    kicker: "Beaches",
    lede: "The village keeps a sandy beach in a very quiet spot. You can drive and park near it.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/norra-vallgrund", label: "Norra Vallgrund beach" }],
    map: placeMap("Norra Vallgrund beach", "beaches", "norra-vallgrund-uimaranta"),
    facts: [{ label: "Address", value: "Hamnvägen 170, Norra Vallgrund" }],
    blocks: [
      { kind: "p", text: "Changing rooms, an outdoor toilet, a winter swimming hole, a sauna, an outdoor grill, and firewood." },
      {
        kind: "links",
        items: [{ href: "/saunas/norra-vallgrund-beach", title: "The beach sauna", text: "10 euros." }],
      },
    ],
  },
  {
    path: "/beaches/sodra-vallgrund",
    title: "Södra Vallgrund beach",
    description: "An official beach in Södra Vallgrund.",
    kicker: "Beaches",
    lede: "One of the six official beaches, in Södra Vallgrund.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/sodra-vallgrund", label: "Södra Vallgrund beach" }],
    map: placeMap("Södra Vallgrund beach", "beaches", "sodra-vallgrund-beach"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/places/sodra-vallgrund", title: "Södra Vallgrund" }],
      },
    ],
  },
  {
    path: "/beaches/bulleras",
    title: "Bullerås beach",
    description: "An official beach on Raippaluoto.",
    kicker: "Beaches",
    lede: "One of the six official beaches on the island.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/bulleras", label: "Bullerås" }],
    map: placeMap("Bullerås beach", "beaches", "bulleras-uimaranta"),
    blocks: [],
  },
  {
    path: "/beaches/vistan",
    title: "Vistan beach",
    description: "An official beach on Raippaluoto.",
    kicker: "Beaches",
    lede: "One of the six official beaches on the island.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/vistan", label: "Vistan" }],
    map: placeMap("Vistan beach", "beaches", "vistan-beach"),
    blocks: [],
  },
  {
    path: "/beaches/bjorkoby",
    title: "Björköby beach",
    description: "The city beach at Röresbukten, close to the Kvarken Archipelago.",
    kicker: "Beaches",
    lede: "Mustasaari keeps this beach. It is close to the Kvarken Archipelago world heritage site.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/bjorkoby", label: "Björköby beach" }],
    map: placeMap("Björköby beach", "beaches", "bjorkoby-uimaranta"),
    facts: [{ label: "Address", value: "Röresbukten, 65870 Mustasaari" }],
    blocks: [
      { kind: "p", text: "Changing rooms, a playground, an outdoor grill, and an outdoor toilet." },
    ],
  },
  {
    path: "/beaches/fjardskar",
    title: "Fjärdskär beach",
    description: "A Mustasaari beach just before the Replot Bridge, at Alskatintie 1337, Iskmo.",
    kicker: "Beaches",
    lede: "This one is not actually on Raippaluoto. It is just before the bridge, on the way over. The city of Mustasaari keeps it.",
    crumbs: [homeCrumb, see, { href: "/beaches", label: "Beaches" }, { href: "/beaches/fjardskar", label: "Fjärdskär" }],
    map: placeMap("Fjärdskär beach", "beaches", "fjardskar-beach"),
    facts: [{ label: "Address", value: "Alskatintie 1337, Iskmo" }],
    blocks: [
      {
        kind: "p",
        text: "Changing rooms, an outdoor grill, an outdoor toilet, and firewood. A lookout tower is close by, and there is another large covered grill with firewood.",
      },
      {
        kind: "links",
        items: [{ href: "/places/replot-bridge", title: "Replot Bridge" }],
      },
    ],
  },
  {
    path: "/hiking",
    title: "Hiking trails",
    description: "Hiking on Raippaluoto, from the Sommarö loops to Bodvattnet and the 23 km trail to Panike.",
    kicker: "Nature & exercise",
    lede: "There are 10 official hiking trails on Raippaluoto. The ones people actually choose between are below: two in the south, two famous ones in the archipelago, a long trail with ferries, and three quieter walks in the north.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking trails" }],
    map: categoryMap("Hiking trails on Raippaluoto", "hiking-trails"),
    blocks: [
      { kind: "h2", text: "Southern Raippaluoto" },
      {
        kind: "p",
        text: "In Södra Vallgrund, Sommarön luontopolku is a short 1.5 km accessible loop, very wide, ending at Sommarö laavu. The other trail from the same place is about 5 km and goes all the way to Sommarösund beach and the rentable sauna, past old military bunkers and lakes in an old forest. Sommarön vartiotupa, a rental hut for up to 22 people with a sauna, is on both.",
      },
      { kind: "h2", text: "The archipelago" },
      {
        kind: "p",
        text: "Drive toward Björköby. Bodvattnet runt is a 4 km loop. The accessible trail is the same start and stops at about 1 km. The loop goes to Saltkaret, Märraryggen, and Bodvattnet hut. Free firewood, toilets, berries in late summer, and other people if you come in summer.",
      },
      { kind: "h2", text: "Quieter walks in the north" },
      {
        kind: "p",
        text: "Vikarskat to Hamnbastun is about 1.5 km to Finnhamnen, the free overnight cabin. Vargis is a 2.5 km loop that also meets the end of the Panike trail, with two fire spots and a kayak rental. Kikanberget is a 15-minute path by Klobbskat harbor.",
      },
    ],
    cardsHeading: "Trails",
    cards: [
      { href: "/hiking/sommaron-nature-trail", title: "Sommarön nature trail", text: "1.5 km accessible loop to the laavu." },
      { href: "/hiking/sommaron", title: "Sommarön hiking trail", text: "About 5 km to the beach, the sauna, and the old bunkers." },
      { href: "/hiking/bodvattnet", title: "Bodvattnet runt", text: "4 km around the archipelago shore." },
      { href: "/hiking/bodvattnet-accessible", title: "Bodvattnet, accessible", text: "The first kilometer, built to be accessible." },
      { href: "/hiking/bjorko-panike", title: "Björkö to Panike", text: "23 km, with two water crossings." },
      { href: "/hiking/vikarskat", title: "Vikarskat to Hamnbastun", text: "About 1.5 km to the free cabin." },
      { href: "/hiking/vargis", title: "Vargis", text: "A 2.5 km loop, usually quiet." },
      { href: "/hiking/kikanberget", title: "Kikanberget", text: "Fifteen minutes, by the harbor and the tower." },
    ],
  },
  {
    path: "/hiking/sommaron-nature-trail",
    title: "Sommarön nature trail",
    description: "A 1.5 km accessible loop in Södra Vallgrund, ending at Sommarö laavu.",
    kicker: "Hiking",
    lede: "Sommarön luontopolku is the short one. It is about 1.5 km, accessible, and very wide.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/sommaron-nature-trail", label: "Sommarön nature trail" }],
    map: routeMap("Sommarön nature trail", "hiking-trails", "sommaron-luontopolku-haloren"),
    facts: [{ label: "Length", value: "About 1.5 km, a loop." }],
    blocks: [
      {
        kind: "p",
        text: "It ends at Sommarö laavu, a covered shelter with an outdoor grill looking over the sea and an old pier. There is usually a woodpile, and an ax or a saw. Sommarön vartiotupa, the rental hut, is on this trail too.",
      },
      {
        kind: "links",
        items: [
          { href: "/huts/sommaro-laavu", title: "Sommarö laavu" },
          { href: "/huts/sommaron-guard-hut", title: "Sommarön vartiotupa" },
          { href: "/saunas/sommaro", title: "Sommarö sauna" },
        ],
      },
    ],
  },
  {
    path: "/hiking/sommaron",
    title: "Sommarön hiking trail",
    description: "A 5 km trail from Södra Vallgrund to Sommarösund beach and sauna.",
    kicker: "Hiking",
    lede: "The longer Sommarö trail starts in the same place as the short loop and runs about 5 km to Sommarösund beach and the sauna.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/sommaron", label: "Sommarön hiking trail" }],
    map: routeMap("Sommarön hiking trail", "hiking-trails", "sommaron-hiking-trail"),
    facts: [{ label: "Length", value: "About 5 km." }],
    blocks: [
      {
        kind: "p",
        text: "The path goes by old military bunkers and lakes in an old forest. Sommarön vartiotupa is on this trail as well as the short one. The hut sleeps up to 22 and has a sauna. At the far end you can rent Sommarösund sauna.",
      },
      {
        kind: "links",
        items: [
          { href: "/saunas/sommarosund", title: "Sommarösund sauna" },
          { href: "/huts/sommaron-guard-hut", title: "Sommarön vartiotupa" },
          { href: "/towers/sommaro", title: "Sommarö viewing terrace", text: "An accessible terrace on these trails, kept by Metsähallitus." },
          { href: "/places/parking", title: "Sommarö parking" },
        ],
      },
    ],
  },
  {
    path: "/hiking/bodvattnet",
    title: "Bodvattnet runt",
    description: "A 4 km loop in the Kvarken Archipelago, past Saltkaret, Märraryggen, and Bodvattnet hut.",
    kicker: "Hiking",
    lede: "The day walk in the archipelago. A 4 km loop. The accessible trail is the same path for the first kilometer.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/bodvattnet", label: "Bodvattnet runt" }],
    map: routeMap("Bodvattnet runt", "hiking-trails", "bodvattnet-runt"),
    facts: [{ label: "Length", value: "4 km, a loop." }],
    blocks: [
      {
        kind: "p",
        text: "You pass Saltkaret bird tower, the Märraryggen outdoor grill, and Bodvattnet hut. There is free firewood and there are toilets. It is a beautiful loop. Blueberries and lingonberries grow in the forest in late summer. It is a popular place, so in summer there will be other people.",
      },
      {
        kind: "links",
        items: [
          { href: "/towers/saltkaret", title: "Saltkaret" },
          { href: "/huts/marraryggen", title: "Märraryggen" },
          { href: "/hiking/bodvattnet-accessible", title: "The accessible kilometer" },
        ],
      },
    ],
  },
  {
    path: "/hiking/bodvattnet-accessible",
    title: "Bodvattnet, accessible",
    description: "The accessible 1 km of Bodvattnet runt, from Svedjehamn toward Bodback.",
    kicker: "Hiking",
    lede: "The same trail as Bodvattnet runt, built so the first kilometer is accessible. It does not continue around the full loop.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/bodvattnet-accessible", label: "Accessible Bodvattnet" }],
    map: routeMap("Bodvattnet accessible trail", "hiking-trails", "bodvattnet-runt-svedjehamn-bodback"),
    facts: [{ label: "Length", value: "About 1 km." }],
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/bodvattnet", title: "The full 4 km loop" }],
      },
    ],
  },
  {
    path: "/hiking/bjorko-panike",
    title: "Björkö to Panike",
    description: "A 23 km hike from Björkö to Panike, with an electric ferry and a private boat taxi.",
    kicker: "Hiking",
    lede: "The multi-day option. It is 23 km, and you have to cross water twice.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/bjorko-panike", label: "Björkö to Panike" }],
    map: routeMap("Björkö to Panike", "hiking-trails", "bjorko-panike-vaellusreitti"),
    facts: [{ label: "Length", value: "23 km." }],
    blocks: [
      {
        kind: "p",
        text: "One crossing is the ferry at Korsbådafjärden, a new electric ferry, and it is free. " + ferryNote,
      },
      {
        kind: "p",
        text: "The other crossing is at Rotörskatan. The city does not run a ferry there, so you use a private boat taxi. Two are recommended: Neptune Service, and Ulf Rönnblad, +358 500 163 021, ulf.ronnblad@netikka.fi.",
      },
      { kind: "a", href: "https://neptune-service.fi", label: "Neptune Service" },
      {
        kind: "links",
        items: [
          { href: "/huts/bullrikoren", title: "Bullrikören laavu", text: "A free lean-to at the midpoint of this trail." },
          { href: "/fishing", title: "Piers on the route" },
        ],
      },
    ],
  },
  {
    path: "/hiking/vikarskat",
    title: "Vikarskat to Hamnbastun",
    description: "A quiet 1.5 km walk to Finnhamnen, the free overnight cabin.",
    kicker: "Hiking",
    lede: "If you want to be away from the summer crowds, this is the walk. About 1.5 km, to Finnhamnen wilderness hut.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/vikarskat", label: "Vikarskat" }],
    map: routeMap("Vikarskat to Hamnbastun", "hiking-trails", "vikarskat-hamnbastun-vaellusreitti"),
    facts: [
      { label: "Length", value: "About 1.5 km." },
      { label: "Parking", value: "Björköbyn kalasatama, Vikarskatvägen 426." },
    ],
    blocks: [
      {
        kind: "p",
        text: "Very few people come here. You can also kayak to the cabin from the harbor. The hut is free to stay in overnight. There are bunks and an indoor stove, and no bedding or firewood.",
      },
      {
        kind: "links",
        items: [{ href: "/huts/finnhamnen", title: "Finnhamnen" }],
      },
    ],
  },
  {
    path: "/hiking/vargis",
    title: "Vargis",
    description: "A 2.5 km loop in northern Raippaluoto that meets the Björkö–Panike trail.",
    kicker: "Hiking",
    lede: "A short loop, 2.5 km, and also the last part of the trail from Björkö to Panike. Easy to drive to, and usually quiet.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/vargis", label: "Vargis" }],
    map: routeMap("Vargis hiking trail", "hiking-trails", "vargis-vaellusreitti"),
    facts: [{ label: "Length", value: "2.5 km, a loop." }],
    blocks: [
      {
        kind: "p",
        text: "Two places for a fire sit near the parking lot: Vargis laavu, and a Vargis open hut. Vaasan Kajakkivuokraus hires kayaks from here, listed from 25 euros, May through October. Björkören, the Metsähallitus cabin with a sauna, is very close. Kvicksund viewing terrace is on this west side.",
      },
      {
        kind: "links",
        items: [
          { href: "/huts/vargis", title: "Vargis laavu" },
          { href: "/saunas/bjorkoren", title: "Björkören" },
          { href: "/towers/kvicksund", title: "Kvicksund viewing terrace" },
          { href: "/places/parking", title: "Vargis parking" },
        ],
      },
    ],
  },
  {
    path: "/hiking/kikanberget",
    title: "Kikanberget",
    description: "A short path at Klobbskat, with a tower, a harbor grill, and a sauna.",
    kicker: "Hiking",
    lede: "More of a 15-minute path than a hike. Very few people, and the harbor next to it has more going on than the path does.",
    crumbs: [homeCrumb, see, { href: "/hiking", label: "Hiking" }, { href: "/hiking/kikanberget", label: "Kikanberget" }],
    map: routeMap("Kikanberget", "hiking-trails", "kikanbergets-naturstig"),
    blocks: [
      {
        kind: "p",
        text: "Café Kompass is nearby. The Kikanberget observation tower is at the start. In the harbor there is RV parking, an outdoor grill the city sometimes stocks with wood, a glass Klobbskat gazebo with a grill overlooking the water, and the Klobbskat sauna. Kalle’s Inn is here. Kvarken Brewery is on Replotvägen in Replot, not at this harbor.",
      },
      {
        kind: "links",
        items: [
          { href: "/towers/kikanberget", title: "Kikanberget tower" },
          { href: "/saunas/klobbskat", title: "Klobbskat sauna" },
          { href: "/eat-and-drink/restaurants", title: "Eat & drink" },
          { href: "/eat-and-drink/kvarken-brewery", title: "Kvarken Brewery" },
          { href: "/stay/holiday-homes/kalles-inn", title: "Kalle’s Inn" },
        ],
      },
    ],
  },
  {
    path: "/ski-trails",
    title: "Ski trails",
    description: "Two official ski tracks on Raippaluoto, plus harbor ice in a cold winter.",
    kicker: "Nature & exercise",
    lede: "There are two official ski trails. One is in Norra Vallgrund. The other is the Raippaluoto track. In a cold winter, people also ski the ice from the Norra Vallgrund harbor.",
    crumbs: [homeCrumb, see, { href: "/ski-trails", label: "Ski trails" }],
    map: categoryMap("Ski trails on Raippaluoto", "ski-trails", "ski-trails", "63.210000", "21.348000", "12.20"),
    blocks: [
      {
        kind: "p",
        text: "On the ice, start at the Norra Vallgrund harbor and stay where you can see that locals are already out. The kayak line to Sommarö laavu is one that gets skied when the year is cold enough. Farther out, currents keep the ice thinner.",
      },
    ],
    cardsHeading: "Tracks",
    cards: [
      { href: "/ski-trails/norra-vallgrund", title: "Norra Vallgrundin valaistu latu", text: "1.8, 2.8, and 6.8 km. Traditional. The two shorter loops are lit." },
      { href: "/ski-trails/raippaluoto", title: "Raippaluodon valaistu latu", text: "1.8, 2.8, and 6 km. Traditional and freestyle, on woodchips." },
      { href: "/kayaking/sommaro", title: "The ice line to Sommarö", text: "Not an official track. The kayak route, when the ice is trusted." },
    ],
  },
  {
    path: "/ski-trails/norra-vallgrund",
    title: "Norra Vallgrundin valaistu latu",
    description: "A traditional ski track in Norra Vallgrund with loops of 1.8, 2.8, and 6.8 km.",
    kicker: "Ski trails",
    lede: "The Norra Vallgrund lit track. Three loops, skied traditional.",
    crumbs: [homeCrumb, see, { href: "/ski-trails", label: "Ski trails" }, { href: "/ski-trails/norra-vallgrund", label: "Norra Vallgrund" }],
    map: routeMap("Norra Vallgrund ski track", "ski-trails", "norra-vallgrundin-valaistulatu"),
    facts: [
      { label: "Loops", value: "1.8 km, 2.8 km, and 6.8 km." },
      { label: "Style", value: "Traditional." },
      { label: "Lighting", value: "The two smaller tracks are lit." },
      { label: "Parking", value: "Replot Sportplan (N63 11.244 E021 17.800)." },
      { label: "Managed by", value: "IF Kvarken." },
    ],
    blocks: [
      { kind: "a", href: "https://www.ifkvarken.fi/skidning/skidspar", label: "IF Kvarken ski tracks" },
    ],
  },
  {
    path: "/ski-trails/raippaluoto",
    title: "Raippaluodon valaistu latu",
    description: "The Raippaluoto ski track: 1.8, 2.8, and 6 km, traditional and freestyle, on woodchips.",
    kicker: "Ski trails",
    lede: "Three loops on woodchips, with both traditional tracks and a maintained freestyle track.",
    crumbs: [homeCrumb, see, { href: "/ski-trails", label: "Ski trails" }, { href: "/ski-trails/raippaluoto", label: "Raippaluoto" }],
    map: routeMap("Raippaluoto ski track", "ski-trails", "raippaluodon-valaistu-latu"),
    facts: [
      { label: "Loops", value: "1.8 km, 2.8 km, and a larger 6 km loop." },
      { label: "Style", value: "Traditional, and a maintained freestyle track." },
      { label: "Surface", value: "Woodchips." },
      { label: "Lighting", value: "The two smaller routes are lit." },
      { label: "Parking", value: "The sports field, Vallgrundintie 50, 65800 Raippaluoto." },
    ],
    blocks: [],
  },
  {
    path: "/huts",
    title: "Huts & outdoor grills",
    description: "Free huts, laavus, and outdoor grills on Raippaluoto, including the overnight cabin at Finnhamnen.",
    kicker: "Nature & exercise",
    lede: "There are many free huts on the island. Most are for a day trip, not the night. One free cabin is meant for sleeping: Finnhamnen.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts & outdoor grills" }],
    map: categoryMap("Huts on Raippaluoto", "wilderness-huts"),
    blocks: [
      { kind: "h2", text: "What the words mean" },
      {
        kind: "p",
        text: "A laavu is a lean-to. It blocks the wind, you can sit in it, and people do sleep in them. There is usually an outdoor grill in front.",
      },
      {
        kind: "p",
        text: "A cabin here is an open wilderness hut, an autiotupa. The state built them and they are free. No booking. The custom is that the last person to arrive may stay, and in practice it is flexible. A translator will sometimes call them “desert huts.” They are just cabins.",
      },
      {
        kind: "p",
        text: "Villages and local groups also build huts and leave them open. An outdoor grill, a nuotiopaikka, is only the fire itself: a ring, often picnic benches, often free wood, sometimes an ax or a saw.",
      },
      {
        kind: "p",
        text: "The map also shows rest stops that do not have their own page yet: Långgrund and the Bodvattnet circuit stop in Björköby, Stora Segelsören on the Björkö–Panike route, and the grill kota at Sommarösund beach.",
      },
    ],
    cardsHeading: "Places",
    cards: [
      { href: "/huts/finnhamnen", title: "Finnhamnen", text: "The free overnight cabin. Bunks and an indoor stove." },
      { href: "/huts/sommaro-laavu", title: "Sommarö laavu", text: "A covered shelter over the sea, at the end of the short trail." },
      { href: "/huts/sommaron-guard-hut", title: "Sommarön vartiotupa", text: "A rental hut for up to 22, with a sauna." },
      { href: "/huts/vargis", title: "Vargis laavu", text: "By the Vargis parking lot, with a second open hut." },
      { href: "/huts/marraryggen", title: "Märraryggen", text: "The outdoor grill on the Bodvattnet loop." },
      { href: "/huts/bullrikoren", title: "Bullrikören laavu", text: "A free lean-to at the midpoint of Björkö to Panike." },
    ],
  },
  {
    path: "/huts/finnhamnen",
    title: "Finnhamnen",
    description: "The free overnight wilderness cabin on Raippaluoto, reached from Vikarskat.",
    kicker: "Huts",
    lede: "If you want to hike and sleep in a free cabin, this is the one on the island. It is easy to reach, and usually quiet.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/finnhamnen", label: "Finnhamnen" }],
    map: placeMap("Finnhamnen", "wilderness-huts", "finnhamnin-autiotupa"),
    facts: [
      { label: "Price", value: "Free." },
      { label: "Parking", value: "Björköbyn kalasatama, Vikarskatvägen 426." },
      { label: "Inside", value: "An indoor fireplace, old kitchen equipment, and a raised bunk. No bedding and no firewood." },
    ],
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/vikarskat", title: "Vikarskat to Hamnbastun", text: "About 1.5 km. You can also kayak from the harbor." }],
      },
    ],
  },
  {
    path: "/huts/sommaro-laavu",
    title: "Sommarö laavu",
    description: "A covered laavu and outdoor grill at the end of the short Sommarö trail, over the sea.",
    kicker: "Huts",
    lede: "A covered lean-to with an outdoor grill, looking over the sea and an old pier. The woodpile is usually full, with an ax or a saw.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/sommaro-laavu", label: "Sommarö laavu" }],
    map: placeMap("Sommarö laavu", "wilderness-huts", "sommaron-laavu"),
    blocks: [
      {
        kind: "links",
        items: [
          { href: "/hiking/sommaron-nature-trail", title: "The 1.5 km trail" },
          { href: "/kayaking/sommaro", title: "Kayak from Norra Vallgrund" },
        ],
      },
    ],
  },
  {
    path: "/huts/sommaron-guard-hut",
    title: "Sommarön vartiotupa",
    description: "A rental hut for up to 22 people on the Sommarö trails, with a sauna.",
    kicker: "Huts",
    lede: "A rental hut on both Sommarö trails. It can take up to 22 people, and it has a sauna.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/sommaron-guard-hut", label: "Sommarön vartiotupa" }],
    map: placeMap("Sommarön vartiotupa", "wilderness-huts", "sommaron-vartiotupa-vuokratupa"),
    facts: [{ label: "Sleeps", value: "Up to 22. Sauna in the hut." }],
    blocks: [
      {
        kind: "links",
        items: [
          { href: "/hiking/sommaron-nature-trail", title: "Short trail" },
          { href: "/hiking/sommaron", title: "Long trail" },
          { href: "/stay/holiday-homes", title: "Holiday homes" },
        ],
      },
    ],
  },
  {
    path: "/huts/vargis",
    title: "Vargis laavu",
    description: "A laavu and an open hut by the Vargis trail parking lot.",
    kicker: "Huts",
    lede: "Two fire spots near the Vargis parking lot. One is the laavu. The other is an open hut.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/vargis", label: "Vargis" }],
    map: placeMap("Vargis laavu", "wilderness-huts", "vargis-laavu"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/vargis", title: "Vargis hiking trail" }],
      },
    ],
  },
  {
    path: "/huts/marraryggen",
    title: "Märraryggen",
    description: "An outdoor grill on the Bodvattnet loop, with free firewood.",
    kicker: "Huts",
    lede: "The outdoor grill on Bodvattnet runt. There is free firewood, and toilets nearby on the loop.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/marraryggen", label: "Märraryggen" }],
    map: placeMap("Märraryggen", "campfire-spots", "marraryggen-tulipaikka"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/bodvattnet", title: "Bodvattnet runt" }],
      },
    ],
  },
  {
    path: "/kayaking",
    title: "Kayaking",
    description: "Two kayak routes from Norra Vallgrund beach, to Djupskäret sauna and Sommarö laavu.",
    kicker: "Nature & exercise",
    lede: "Two routes are mapped from Norra Vallgrund beach. One ends at the free sauna on Djupskäret. The other ends at Sommarö laavu.",
    crumbs: [homeCrumb, see, { href: "/kayaking", label: "Kayaking" }],
    map: categoryMap("Kayaking routes on Raippaluoto", "kayaking-routes", "kayaking-routes", "63.173000", "21.320000", "12.80"),
    blocks: [
      {
        kind: "h2",
        text: "Where to rent a kayak",
      },
      {
        kind: "p",
        text: "Vaasan Kajakkivuokraus hires Oasis 430 kayaks from the Vargis hiking site in Panike. Huts lists them from 25 euros. Their season is May through October, and you book ahead online or by phone, +358 40 505 5665. From Vikarskat you can also paddle to Finnhamnen.",
      },
      { kind: "a", href: "https://www.vaasankajakkivuokraus.fi/fi/vuokraus-hinnat", label: "Rental prices" },
    ],
    cardsHeading: "Routes",
    cards: [
      { href: "/kayaking/djupskaret", title: "To Djupskäret", text: "From the beach to the free sauna." },
      { href: "/kayaking/sommaro", title: "To Sommarö laavu", text: "From the beach. In a hard winter this line is skied." },
    ],
  },
  {
    path: "/kayaking/djupskaret",
    title: "Kayak to Djupskäret",
    description: "A kayak route from Norra Vallgrund beach to the free sauna on Djupskäret.",
    kicker: "Kayaking",
    lede: "From Norra Vallgrund beach to the public sauna on Djupskäret. The sauna, the grill, and the pier are free to use.",
    crumbs: [homeCrumb, see, { href: "/kayaking", label: "Kayaking" }, { href: "/kayaking/djupskaret", label: "Djupskäret" }],
    map: routeMap("Kayak to Djupskäret", "kayaking-routes", "kayak-to-djupskaret-sauna"),
    blocks: [
      {
        kind: "h2",
        text: "Where to rent a kayak",
      },
      {
        kind: "p",
        text: "Vaasan Kajakkivuokraus hires Oasis 430 kayaks from the Vargis hiking site in Panike, not from this beach. Huts lists them from 25 euros, May through October. Book ahead, +358 40 505 5665.",
      },
      { kind: "a", href: "https://www.vaasankajakkivuokraus.fi/fi/", label: "Vaasan Kajakkivuokraus" },
      {
        kind: "links",
        items: [{ href: "/saunas/djupskaret", title: "Djupskäret sauna" }],
      },
    ],
  },
  {
    path: "/kayaking/sommaro",
    title: "Kayak to Sommarö laavu",
    description: "A kayak route from Norra Vallgrund beach to Sommarö laavu, skied in a cold winter.",
    kicker: "Kayaking",
    lede: "From Norra Vallgrund beach to Sommarö laavu. When the ice is thick enough, and locals are already on it, this is also a ski line.",
    crumbs: [homeCrumb, see, { href: "/kayaking", label: "Kayaking" }, { href: "/kayaking/sommaro", label: "Sommarö" }],
    map: routeMap("Kayak to Sommarö laavu", "kayaking-routes", "kayak-to-sommaro-laavu"),
    blocks: [
      {
        kind: "p",
        text: "Do not treat the ice as safe because the route exists. Currents farther out keep some ice thin. Go when you can see that people from the village are already out.",
      },
      {
        kind: "h2",
        text: "Where to rent a kayak",
      },
      {
        kind: "p",
        text: "Vaasan Kajakkivuokraus hires Oasis 430 kayaks from the Vargis hiking site in Panike. Huts lists them from 25 euros, May through October. Book ahead, +358 40 505 5665.",
      },
      { kind: "a", href: "https://www.vaasankajakkivuokraus.fi/fi/", label: "Vaasan Kajakkivuokraus" },
      {
        kind: "links",
        items: [{ href: "/huts/sommaro-laavu", title: "Sommarö laavu" }],
      },
    ],
  },
  {
    path: "/biking",
    title: "Biking trails",
    description: "Biking trails on Raippaluoto, on the Huts.fi map.",
    kicker: "Nature & exercise",
    lede: "Cycling routes for the island are on the map below. A written guide to them is still to come.",
    crumbs: [homeCrumb, see, { href: "/biking", label: "Biking trails" }],
    map: {
      title: "Biking trails on Raippaluoto",
      href: cityMap,
      src: "https://www.huts.fi/embed/finland/ostrobothnia/mustasaari/biking-trails?trails=1&address=1&lat=63.260000&lng=21.290000&zoom=9.50",
    },
    blocks: [],
  },
  {
    path: "/towers",
    title: "Towers & viewpoints",
    description: "Saltkaret, Kikanberget, and the viewing terraces at Kvicksund and Sommarö.",
    kicker: "Nature & exercise",
    lede: "Two towers are worth the detour. Saltkaret is on the Bodvattnet loop. Kikanberget is at the start of the short path by Klobbskat harbor. Metsähallitus also keeps viewing terraces at Kvicksund and Sommarö.",
    crumbs: [homeCrumb, see, { href: "/towers", label: "Observation towers" }],
    map: categoryMap("Observation towers on Raippaluoto", "viewpoints"),
    blocks: [],
    cardsHeading: "Places",
    cards: [
      { href: "/towers/saltkaret", title: "Saltkaret", text: "The bird tower on Bodvattnet runt." },
      { href: "/towers/kikanberget", title: "Kikanberget", text: "At the harbor end of a 15-minute path." },
      { href: "/towers/kvicksund", title: "Kvicksund", text: "A viewing terrace on the west side, near the Vargis walks." },
      { href: "/towers/sommaro", title: "Sommarö", text: "An accessible viewing terrace on the Sommarö trails." },
    ],
  },
  {
    path: "/towers/saltkaret",
    title: "Saltkaret",
    description: "The bird tower on the Bodvattnet loop in the Kvarken Archipelago.",
    kicker: "Towers",
    lede: "The bird tower on Bodvattnet runt, in the Kvarken Archipelago.",
    crumbs: [homeCrumb, see, { href: "/towers", label: "Towers" }, { href: "/towers/saltkaret", label: "Saltkaret" }],
    map: placeMap("Saltkaret", "viewpoints", "saltkaret"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/bodvattnet", title: "Bodvattnet runt" }],
      },
    ],
  },
  {
    path: "/towers/kikanberget",
    title: "Kikanberget tower",
    description: "The observation tower at the start of the Kikanberget path, by Klobbskat harbor.",
    kicker: "Towers",
    lede: "The tower is at the start of the short Kikanberget path, above Klobbskat harbor.",
    crumbs: [homeCrumb, see, { href: "/towers", label: "Towers" }, { href: "/towers/kikanberget", label: "Kikanberget" }],
    map: placeMap("Kikanberget tower", "viewpoints", "kikanberget-luontotorni"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/kikanberget", title: "The path and the harbor" }],
      },
    ],
  },
  {
    path: "/disc-golf",
    title: "Disc golf",
    description: "A ten-hole disc golf course in Norra Vallgrund, looked after by IF Kvarken.",
    kicker: "See & do",
    lede: "Norra Vallgrund has a ten-hole course, looked after by IF Kvarken. Mustasaari publishes it as free.",
    crumbs: [homeCrumb, see, { href: "/disc-golf", label: "Disc golf" }],
    map: categoryMap("Disc golf in Norra Vallgrund", "disc-golf-courses", "disc-golf-courses", "63.187000", "21.297000", "13.00"),
    facts: [
      { label: "Holes", value: "10" },
      { label: "Address", value: "Storkärrtået 63, Norra Vallgrund" },
      { label: "Price", value: "Free" },
    ],
    blocks: [
      {
        kind: "links",
        items: [{ href: "/places/norra-vallgrund", title: "Norra Vallgrund" }],
      },
      {
        kind: "a",
        href: "https://mustasaari.fi/hyvinvointi/vapaa-aikatoiminta/frisbeegolf/norra-vallgrundin-frisbeegolfrata",
        label: "Mustasaari on the course",
      },
    ],
  },
  {
    path: "/fishing",
    title: "Fishing & piers",
    description: "Shore fishing at the Replot Bridge, and the piers mapped on Raippaluoto.",
    kicker: "See & do",
    lede: "The mapped fishing spot is the shore at the Replot Bridge. The piers are landings along the trails, not a second set of fishing spots.",
    crumbs: [homeCrumb, see, { href: "/fishing", label: "Fishing & piers" }],
    map: categoryMap("Piers on Raippaluoto", "boat-launches"),
    blocks: [
      { kind: "h2", text: "The bridge" },
      {
        kind: "p",
        text: "Huts lists shore fishing from the Replot Bridge. A national fisheries management fee is the usual requirement for that kind of fishing. This page does not set a local price.",
      },
      {
        kind: "links",
        items: [{ href: "/places/replot-bridge", title: "Replot Bridge" }],
      },
      { kind: "a", href: "https://www.eraluvat.fi/kalastus/kalastonhoitomaksu", label: "Fisheries management fee" },
      { kind: "h2", text: "Piers" },
      {
        kind: "p",
        text: "Stora Segelsören, Rotörskatan, and the Långgrund floating jetty are landings on the Björkö–Panike route. Björkören has a canoe jetty at the rental cabin. Vargis has a paddling pier and a shore crossing in the yard at Panike. Sommarö has a landing at the old fortress area in Södra Vallgrund.",
      },
      {
        kind: "links",
        items: [
          { href: "/hiking/bjorko-panike", title: "Björkö to Panike" },
          { href: "/hiking/vargis", title: "Vargis" },
          { href: "/saunas/bjorkoren", title: "Björkören" },
          { href: "/hiking/sommaron", title: "Sommarö trails" },
        ],
      },
    ],
  },
  {
    path: "/sports",
    title: "Sports",
    description: "School gyms, ball fields, hockey rinks, outdoor gyms, and courts on Raippaluoto.",
    kicker: "See & do",
    lede: "The island’s sports places are municipal or school yards, plus one private gym and a club shooting range. Most of the outdoor ones are free.",
    crumbs: [homeCrumb, see, { href: "/sports", label: "Sports" }],
    blocks: [
      { kind: "h2", text: "Replot" },
      {
        kind: "p",
        text: "The school yard at Kyrkvägen 84 has a match-size outdoor hockey rink, about 60 by 30 metres. Mustasaari lists general skating on weekdays from 16.00 to 19.00, and all day on weekends. The same yard has a school skating rink, used by the school on school days and open for public skating in the evenings and on weekends when the ice is in. There is a gravel ball field, about 60 by 40 metres, and a gravel panna-football court.",
      },
      {
        kind: "p",
        text: "The school gym is at Kyrkvägen 94. Mustasaari lists a wood floor and a court about 20 by 10 metres, booked through the municipality. The grass field at Vallgrundintie 50 has high jump, long jump, a shot-put circle, and a sprint track, and it is also the lot for the lit ski track. The outdoor gym at Vallgrundvägen 50 is free. Beach volleyball is at Raippaluoto beach, Kyläsatamantie 200.",
      },
      {
        kind: "p",
        text: "Amazing Family Gym, Vallgrundvägen 78, is a private gym. Members can train around the clock, and customer service is on Thursdays from 16.00 to 18.00. Membership is listed from 38 euros. Phone +358 50 521 8736.",
      },
      {
        kind: "links",
        items: [
          { href: "/ski-trails/raippaluoto", title: "The lit ski track" },
          { href: "/beaches/raippaluoto", title: "Raippaluoto beach" },
        ],
      },
      { kind: "a", href: "https://www.amazing-gym.com/raipaluoto", label: "Amazing Family Gym" },
      { kind: "h2", text: "Norra Vallgrund" },
      {
        kind: "p",
        text: "Vallgrund school has a gravel ball field and an outdoor hockey rink at Söderuddsvägen 9. The rink is about 60 by 30 metres. School use is on weekdays, and evenings and weekends are for free skating and pickup hockey. The school gym is the smaller hall at Söderuddsvägen 2, booked through the municipality. Beach volleyball is at Sommarösund beach.",
      },
      {
        kind: "links",
        items: [{ href: "/beaches/sodra-vallgrund", title: "Södra Vallgrund beaches" }],
      },
      { kind: "h2", text: "Björköby" },
      {
        kind: "p",
        text: "The outdoor gym at Björköntie 735 is free. A smaller hockey rink, about 40 by 20 metres, is on Kråkbosletvägen. A local association puts the ice in, and it is not on the main-rink skating schedule. The grass field at Sundesvägen 13 has high jump, long jump, a sprint track, a shot-put circle, and a beach-volleyball court.",
      },
      {
        kind: "p",
        text: "Folkhälsan i Björköby keeps an indoor gym at Björkövägen 768. The association says it is open year-round, and access is through a membership. Phone +358 50 464 8260.",
      },
      { kind: "a", href: "https://www.folkhalsan.fi/halsoframjande-arbete/foreningsverksamhet/lokalforeningar/folkhalsan-i-bjorkoby", label: "Folkhälsan i Björköby" },
      { kind: "h2", text: "A club shooting range" },
      {
        kind: "p",
        text: "Skärgårdens skjutbana is an outdoor range at Vallgrundvägen 305, looked after by hunting clubs in Replot. It is not a public field. Phone +358 50 918 0220.",
      },
      { kind: "a", href: "https://www.sodravallgrund.fi/jaktforeningen/skjutbanan/", label: "Södra Vallgrund hunting club" },
      {
        kind: "a",
        href: "https://mustasaari.fi/hyvinvointi/urheilutoiminta/liikuntapaikat/kaukalot-ja-jaaradat",
        label: "Mustasaari on the rinks",
      },
    ],
  },
  {
    path: "/places/parking",
    title: "Where to park",
    description: "Free parking at the Kvarken, Sommarö, and Vargis trailheads, and the sports field in Replot.",
    kicker: "Places to go",
    lede: "Three free lots are mapped for the trailheads. The sports field in Replot is the one for the lit ski track.",
    crumbs: [homeCrumb, places, { href: "/places/parking", label: "Where to park" }],
    map: categoryMap("Free parking on Raippaluoto", "free-parking"),
    blocks: [
      {
        kind: "p",
        text: "Kvarken parking is in Björköby, for the north-end walks. Sommarö parking is in Södra Vallgrund, for the Sommarö trails. Vargis parking is in Panike, kept by Metsähallitus, for the Vargis trail and the kayak rental.",
      },
      {
        kind: "p",
        text: "The lit ski track uses the sports field at Vallgrundintie 50, 65800 Raippaluoto. That lot is not one of the three free-parking pins.",
      },
      {
        kind: "links",
        items: [
          { href: "/places/kvarken", title: "Kvarken Archipelago" },
          { href: "/hiking/sommaron", title: "Sommarö trails" },
          { href: "/hiking/vargis", title: "Vargis" },
          { href: "/ski-trails/raippaluoto", title: "Raippaluoto ski track" },
        ],
      },
    ],
  },
  {
    path: "/towers/kvicksund",
    title: "Kvicksund viewing terrace",
    description: "A Metsähallitus viewing terrace on the west side of Raippaluoto, near the Vargis walks.",
    kicker: "Towers",
    lede: "A viewing terrace kept by Metsähallitus, on the west side near the Vargis and Björkö–Panike walks.",
    crumbs: [homeCrumb, see, { href: "/towers", label: "Towers" }, { href: "/towers/kvicksund", label: "Kvicksund" }],
    map: placeMap("Kvicksund viewing terrace", "viewpoints", "kvicksund-nakoalaterassi-2"),
    blocks: [
      {
        kind: "links",
        items: [
          { href: "/hiking/vargis", title: "Vargis" },
          { href: "/hiking/bjorko-panike", title: "Björkö to Panike" },
        ],
      },
    ],
  },
  {
    path: "/towers/sommaro",
    title: "Sommarö viewing terrace",
    description: "An accessible viewing terrace kept by Metsähallitus on the Sommarö trails.",
    kicker: "Towers",
    lede: "An accessible viewing terrace kept by Metsähallitus, on the Sommarö trails in Södra Vallgrund.",
    crumbs: [homeCrumb, see, { href: "/towers", label: "Towers" }, { href: "/towers/sommaro", label: "Sommarö" }],
    map: placeMap("Sommarö viewing terrace", "viewpoints", "sommaro-esteeton-nakoalaterassi-2"),
    blocks: [
      {
        kind: "links",
        items: [
          { href: "/hiking/sommaron", title: "Sommarön hiking trail" },
          { href: "/places/parking", title: "Sommarö parking" },
        ],
      },
    ],
  },
  {
    path: "/huts/bullrikoren",
    title: "Bullrikören laavu",
    description: "A free lean-to at the midpoint of the Björkö to Panike trail.",
    kicker: "Huts",
    lede: "A free lean-to at the midpoint of the walk from Björkö to Panike.",
    crumbs: [homeCrumb, see, { href: "/huts", label: "Huts" }, { href: "/huts/bullrikoren", label: "Bullrikören" }],
    map: placeMap("Bullrikören laavu", "wilderness-huts", "bullrikoren-laavu"),
    facts: [{ label: "Price", value: "Free" }],
    blocks: [
      {
        kind: "links",
        items: [{ href: "/hiking/bjorko-panike", title: "Björkö to Panike" }],
      },
    ],
  },
  {
    path: "/stay",
    title: "Stay",
    description: "RV parking, tent camping, and holiday cabins on Raippaluoto.",
    kicker: "Raippaluoto",
    lede: "A camper at the harbor, a tent in a sauna yard, or a holiday cabin. The map on this page is the holiday-cabin layer, so the five rentals show up here.",
    crumbs: [homeCrumb, stay],
    map: categoryMap("Places to stay on Raippaluoto", "holiday-cabins"),
    blocks: [],
    cards: stayCards,
    cardsHeading: "Ways to stay",
  },
  {
    path: "/stay/rv-camping",
    title: "RV camping",
    description: "RV parking on Raippaluoto, including Klobbskat harbor.",
    kicker: "Stay",
    lede: "Klobbskat harbor has RV parking, out at the quiet end of the island. The map shows the other camper spots in Mustasaari, framed on Raippaluoto.",
    crumbs: [homeCrumb, stay, { href: "/stay/rv-camping", label: "RV camping" }],
    map: categoryMap("RV parks on Raippaluoto", "rv-parks"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/saunas/klobbskat", title: "Klobbskat", text: "The harbor, the sauna, and the gazebo." }],
      },
    ],
  },
  {
    path: "/stay/tent-camping",
    title: "Tent camping",
    description: "Tent camping on Raippaluoto, including the yard at Sommarö sauna.",
    kicker: "Stay",
    lede: "At Sommarö sauna you may pitch a tent in the yard. You may not sleep in the buildings. Other tent spots on the island are on the map.",
    crumbs: [homeCrumb, stay, { href: "/stay/tent-camping", label: "Tent camping" }],
    map: categoryMap("Tent camping on Raippaluoto", "tents"),
    blocks: [
      {
        kind: "links",
        items: [{ href: "/saunas/sommaro", title: "Sommarö sauna" }],
      },
    ],
  },
  {
    path: "/stay/holiday-homes",
    title: "Holiday homes",
    description: "Holiday cabins on Raippaluoto: Villa Tallskär, Villa Idören, Kotkanpesä, Kalle’s Inn, and Merenkurkun Majatalo.",
    kicker: "Stay",
    lede: "Five holiday cabins are on this map. Four more cabins in the same Huts category sit elsewhere in Mustasaari, so they are not listed here. Björkören and Sommarön vartiotupa are rentals too, on the wilderness-hut layer.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }],
    map: categoryMap("Holiday cabins on Raippaluoto", "holiday-cabins"),
    blocks: [
      { kind: "h2", text: "Wilderness rentals" },
      {
        kind: "links",
        items: [
          { href: "/saunas/bjorkoren", title: "Björkören", text: "180 euros a day. Bunks, kitchen, fireplaces, sauna." },
          { href: "/huts/sommaron-guard-hut", title: "Sommarön vartiotupa", text: "Up to 22 people, with a sauna, on the Sommarö trails." },
        ],
      },
    ],
    cardsHeading: "On the island",
    cards: [
      { href: "/stay/holiday-homes/villa-tallskar", title: "Villa Tallskär", text: "Idören 72, Söderudden. Up to 8, from 120 euros." },
      { href: "/stay/holiday-homes/villa-idoren", title: "Villa Idören", text: "Brändövik. Up to 10, rented by ReplotBo." },
      { href: "/stay/holiday-homes/kotkanpesa", title: "Björkön Kotkanpesä", text: "Two cabins near Svedjehamn, listed for up to 4." },
      { href: "/stay/holiday-homes/kalles-inn", title: "Kalle’s Inn", text: "Klobbskatintie 189, at Klobbskat." },
      { href: "/stay/holiday-homes/merenkurkun-majatalo", title: "Merenkurkun Majatalo", text: "Lodging in Björköby, with a restaurant on their own site." },
    ],
  },
  {
    path: "/stay/holiday-homes/villa-tallskar",
    title: "Villa Tallskär",
    description: "A holiday cabin at Idören 72 in Söderudden, rented by Idoren, from 120 euros.",
    kicker: "Holiday homes",
    lede: "Villa Tallskär is at Idören 72 in Söderudden. Idoren rents it. Huts lists it for up to 8 people, from 120 euros.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }, { href: "/stay/holiday-homes/villa-tallskar", label: "Villa Tallskär" }],
    map: placeMap("Villa Tallskär", "holiday-cabins", "villa-tallskar-mustasaari"),
    facts: [
      { label: "Address", value: "Idören 72, 65970 Söderudden" },
      { label: "Sleeps", value: "Up to 8" },
      { label: "Price", value: "From 120 euros" },
      { label: "Phone", value: "+358 44 980 7799" },
    ],
    blocks: [{ kind: "a", href: "https://idoren72.com/villa-tallskat/", label: "Book Villa Tallskär" }],
  },
  {
    path: "/stay/holiday-homes/villa-idoren",
    title: "Villa Idören",
    description: "A holiday villa in Brändövik, rented by ReplotBo, listed for up to 10 people.",
    kicker: "Holiday homes",
    lede: "ReplotBo rents Villa Idören in Brändövik. Huts lists it for up to 10 people, year-round, with arrival agreed when you book.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }, { href: "/stay/holiday-homes/villa-idoren", label: "Villa Idören" }],
    map: placeMap("Villa Idören", "holiday-cabins", "replotbo-oy-mustasaari"),
    facts: [
      { label: "Place", value: "Brändövik" },
      { label: "Sleeps", value: "Up to 10" },
      { label: "Phone", value: "+358 44 980 7799" },
    ],
    blocks: [
      { kind: "a", href: "https://www.replotbo.fi/", label: "ReplotBo" },
      { kind: "a", href: "https://idoren72.com/villa-idoren/", label: "Villa Idören" },
    ],
  },
  {
    path: "/stay/holiday-homes/kotkanpesa",
    title: "Björkön Kotkanpesä",
    description: "Two holiday cabins near Svedjehamn in Björköby, listed for up to 4 people.",
    kicker: "Holiday homes",
    lede: "Björkön Kotkanpesä rents two winterized cabins near Svedjehamn in Björköby. Huts lists the place for up to 4 people.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }, { href: "/stay/holiday-homes/kotkanpesa", label: "Kotkanpesä" }],
    map: placeMap("Björkön Kotkanpesä", "holiday-cabins", "bjorkon-kotkanpesa-mustasaari"),
    facts: [
      { label: "Address", value: "Björkövägen 981a, 65870 Björköby" },
      { label: "Sleeps", value: "Up to 4" },
      { label: "Phone", value: "+358 50 536 8275" },
    ],
    blocks: [{ kind: "a", href: "https://www.bjorkonkotkanpesa.com/en/", label: "Björkön Kotkanpesä" }],
  },
  {
    path: "/stay/holiday-homes/kalles-inn",
    title: "Kalle’s Inn",
    description: "A holiday rental at Klobbskatintie 189, Klobbskat.",
    kicker: "Holiday homes",
    lede: "Kalle’s Inn is a holiday rental at Klobbskat, on Klobbskatintie.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }, { href: "/stay/holiday-homes/kalles-inn", label: "Kalle’s Inn" }],
    map: placeMap("Kalle’s Inn", "holiday-cabins", "kalle-s-inn-resort-mustasaari"),
    facts: [
      { label: "Address", value: "Klobbskatintie 189, 65970 Mustasaari" },
      { label: "Phone", value: "+358 44 723 2369" },
    ],
    blocks: [
      { kind: "a", href: "https://kallesinnresort.com/", label: "Kalle’s Inn" },
      {
        kind: "links",
        items: [{ href: "/hiking/kikanberget", title: "Klobbskat and Kikanberget" }],
      },
    ],
  },
  {
    path: "/stay/holiday-homes/merenkurkun-majatalo",
    title: "Merenkurkun Majatalo",
    description: "Lodging in Björköby at Rudträskvägen 6. The inn’s own site also lists a restaurant and an order sauna.",
    kicker: "Holiday homes",
    lede: "Merenkurkun Majatalo is in Björköby. Their own site describes lodging, a restaurant, an order sauna, and rooms for parties and meetings.",
    crumbs: [homeCrumb, stay, { href: "/stay/holiday-homes", label: "Holiday homes" }, { href: "/stay/holiday-homes/merenkurkun-majatalo", label: "Merenkurkun Majatalo" }],
    map: placeMap("Merenkurkun Majatalo", "holiday-cabins", "merenkurkun-majatalo-oy-mustasaari"),
    facts: [
      { label: "Address", value: "Rudträskvägen 6, 65870 Björköby" },
      { label: "Phone", value: "+358 50 448 6790" },
    ],
    blocks: [{ kind: "a", href: "https://www.merenkurkunmajatalo.fi/", label: "Merenkurkun Majatalo" }],
  },
  {
    path: "/eat-and-drink",
    title: "Eat & drink",
    description: "Eating and drinking on Raippaluoto.",
    kicker: "Raippaluoto",
    lede: "The island is not a restaurant town. A few places cluster at Klobbskat, and the map shows what else is listed in Mustasaari.",
    crumbs: [homeCrumb, eat],
    map: categoryMap("Restaurants on Raippaluoto", "restaurants"),
    blocks: [],
    cards: eatCards,
  },
  {
    path: "/eat-and-drink/restaurants",
    title: "Restaurants & cafes",
    description: "Café Kompass and Kalle’s Inn at Klobbskat, and other places to eat on the map.",
    kicker: "Eat & drink",
    lede: "At Klobbskat harbor, Café Kompass is nearby, and Kalle’s Inn is the stay on Klobbskatintie. Kvarken Brewery is on Replotvägen in Replot. More places to eat are on the map as they are added.",
    crumbs: [homeCrumb, eat, { href: "/eat-and-drink/restaurants", label: "Restaurants & cafes" }],
    map: categoryMap("Restaurants and cafes on Raippaluoto", "restaurants"),
    blocks: [
      {
        kind: "links",
        items: [
          { href: "/hiking/kikanberget", title: "Klobbskat and Kikanberget" },
          { href: "/eat-and-drink/kvarken-brewery", title: "Kvarken Brewery" },
          { href: "/stay/holiday-homes/kalles-inn", title: "Kalle’s Inn" },
        ],
      },
    ],
  },
  {
    path: "/eat-and-drink/kvarken-brewery",
    title: "Kvarken Brewery",
    description: "A brewery, gastropub, and pizzeria on Replotvägen in Replot.",
    kicker: "Eat & drink",
    lede: "Kvarken Brewery brews in Replot and runs a gastropub and pizzeria on Replotvägen. House beers, pizza, and pub food. Hours change by the day.",
    crumbs: [homeCrumb, eat, { href: "/eat-and-drink/kvarken-brewery", label: "Kvarken Brewery" }],
    map: placeMap("Kvarken Brewery", "breweries", "kvarken-brewery-mustasaari"),
    facts: [
      { label: "Address", value: "Replotvägen 427, 65800 Replot" },
      { label: "Phone", value: "+358 6 352 0033" },
    ],
    blocks: [
      { kind: "a", href: "https://www.kvarkenbrewery.com/gastro-pub", label: "The gastropub" },
      { kind: "a", href: "https://kvarkenbrewery.fi", label: "Kvarken Brewery" },
    ],
  },
  {
    path: "/events",
    title: "Events",
    description: "Events on Raippaluoto.",
    kicker: "Raippaluoto",
    lede: "There is no event calendar here yet. Wednesday sauna at Sommarösund is the regular gathering: women from 17.30 to 19.30, men from 19.30 to 22.00, three euros.",
    crumbs: [homeCrumb, { href: "/events", label: "Events" }],
    blocks: [
      {
        kind: "links",
        items: [{ href: "/saunas/sommarosund", title: "Sommarösund sauna" }],
      },
      { kind: "a", href: businessPlot, label: "Business plots in Raippaluoto" },
    ],
  },
];

const byPath = new Map(guides.map((guide) => [guide.path, guide]));

if (byPath.size !== guides.length) {
  throw new Error("Duplicate guide path");
}

export function getGuide(slug: string[]): Guide | undefined {
  return byPath.get(`/${slug.join("/")}`);
}

export function allGuides(): Guide[] {
  return guides;
}
