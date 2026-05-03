export interface Entity {
  id: string;
  name: string;
  rarity: "COMMON" | "ELITE" | "LEGENDARY" | "MYTHIC";
  description: string;
  imageUrl: string;
  accent: string; // Tailwind color for the border (e.g., 'gold', 'red', 'purple')
}

export const WORLD_ENTITIES: Entity[] = [
  {
    id: "eryndar-knight",
    name: "Eryndar Knight",
    rarity: "ELITE",
    description:
      "Bound by steel and a dying oath, these sentinels guard the crumbled spires of the north.",
    imageUrl: "/images/entities/knight.jpg",
    accent: "border-blue-400/40",
  },
  {
    id: "kurohanese-samurai",
    name: "Kurohanese Samurai",
    rarity: "ELITE",
    description:
      "Masters of the shadow-blade who wander the mist-choked marshes of Kurohan.",
    imageUrl: "/images/entities/samurai.jpg",
    accent: "border-red-500/40",
  },
  {
    id: "valdorian-mage",
    name: "Valdorian Mage",
    rarity: "MYTHIC",
    description:
      "Wielders of the raw, unstable ether that leaks from the cracks in the sky.",
    imageUrl: "/characters/eye.webp",
    accent: "border-purple-500/40",
  },
  {
    id: "fallow-ghoul",
    name: "Fallow Ghoul",
    rarity: "COMMON",
    description:
      "The hollowed remains of those who stayed too long in the blighted fields.",
    imageUrl: "/images/entities/ghoul.jpg",
    accent: "border-zinc-500/40",
  },
  {
    id: "ancient-dragon",
    name: "Void-Drake",
    rarity: "LEGENDARY",
    description:
      "A creature of myth that feeds on the heat of dying stars. Its breath is absolute zero.",
    imageUrl: "/images/entities/dragon.jpg",
    accent: "border-gold/40",
  },
];
