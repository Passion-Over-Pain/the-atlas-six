export interface PointOfInterest {
  id: string;
  name: string;
  type:
    | "inn"
    | "battlefield"
    | "city"
    | "ruins"
    | "temple"
    | "shop"
    | "monster-den"
    | "grave"
    | "farm"
    | "port"
    | "place-of-knowledge";
  coords: [number, number];
  description: string;
}

export const PLACESOFINTEREST: PointOfInterest[] = [
  // AURELIA MARKERS
  {
    id: "aurelia-capital",
    name: "Ilysera",
    type: "city",
    coords: [-1100, 4800],
    description:
      "The capital of Aurelia, where scholar-councils and spiritkeepers guide the kingdom through the ancient cycles.",
  },
  {
    id: "bloomhaven-1",
    name: "Bloomhaven Inn",
    type: "inn",
    coords: [-1350, 4850],
    description:
      "Your starting point. Every great adventure starts in an elven inn.",
  },
  {
    id: "drunken-master",
    name: "The Drunken Master",
    type: "inn",
    coords: [-1100, 4350],
    description:
      "A strange tavern famed for exotic brews rumored to grant fleeting mystical visions.",
  },
  {
    id: "naevharbor",
    name: "Naevhollow Port",
    type: "port",
    coords: [-900, 5200],
    description:
      "A quiet harbor known for silverfin fisheries, moonlit markets, and river traders from distant kingdoms.",
  },
  {
    id: "silverfin",
    name: "Silverfin Port",
    type: "port",
    coords: [-1450, 4600],
    description:
      "A bustling fishing port where silverfin catches feed much of central Aurelia.",
  },
  {
    id: "golden-terraces-1",
    name: "The Solaine Terraces",
    type: "farm",
    coords: [-1200, 4350],
    description:
      "Layered farmlands fed by enchanted canals. Much of Aurelia’s harvest begins here.",
  },
  {
    id: "golden-terraces-2",
    name: "The Solaine Terraces",
    type: "farm",
    coords: [-1200, 4400],
    description:
      "Layered farmlands fed by enchanted canals. Much of Aurelia’s harvest begins here.",
  },
  {
    id: "golden-terraces-3",
    name: "The Solaine Terraces",
    type: "farm",
    coords: [-1200, 4450],
    description:
      "Layered farmlands fed by enchanted canals. Much of Aurelia’s harvest begins here.",
  },
  {
    id: "thelmyr-hollow",
    name: "Thelmyr Hollow",
    type: "monster-den",
    coords: [-1450, 5400],
    description:
      "A damp cavern swallowed by roots and mist. Travelers who enter rarely return.",
  },
  {
    id: "whispering-reeds",
    name: "Whispering Reeds",
    type: "grave",
    coords: [-1250, 5100],
    description:
      "A sacred wetland where lanterns are released for the dead. At dusk, the reeds are said to whisper with ancestral voices.",
  },
  // ERYNDOR
  {
    id: "wall-aegis",
    name: "Wall of Aegis",
    type: "battlefield",
    coords: [-400, 1500],
    description: "A massive fortification holding back the frost-giants.",
  },
  // KUROHANA
  {
    id: "temple-sun",
    name: "Temple of the Eternal Sun",
    type: "temple",
    coords: [-300, 7500],
    description: "Where the warrior-monks meditate amidst cherry blossoms.",
  },
  // VALDORA
  {
    id: "great-library",
    name: "The Great Library of Valdora",
    type: "place-of-knowledge",
    coords: [-1800, 1200],
    description: "Infinite halls of parchment and forbidden magic.",
  },
  // HOLLOWIND
  {
    id: "rust-bazaar",
    name: "The Rust Bazaar",
    type: "shop",
    coords: [-1700, 8200],
    description: "Buy clockwork limbs or ancient Egyptian relics—for a price.",
  },
];
