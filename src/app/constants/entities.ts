export interface Kingdom {
  id: string;
  name: string;
  type: string;
  description: string;
  imageUrl: string;
}

export const KINGDOMS: Kingdom[] = [
  {
    id: "aurelia",
    name: "Aurelia",
    type: "Water",
    description:
      "A peaceful heart of radiant forests and shimmering lakes. Ruled by ancient scholars, they master the healing arts and nature magic, guarding the world's wisdom with strategic grace.",
    imageUrl: "/characters/aurelia.webp",
  },
  {
    id: "eryndor",
    name: "Eryndor",
    type: "Earth",
    description:
      "A military titan forged in mountain flame. Governed by a rigid aristocracy of knights and earth-shapers, they prize honour and raw conquering strength above all else.",
    imageUrl: "/characters/eryndor.webp",
  },
  {
    id: "kurohana",
    name: "Kurohana",
    type: "Fire",
    description:
      "A volcanic realm of cherry blossoms and ancestral pride. Their warriors blend lethal fire magic with artistic ferocity, fueled by a deep-rooted hatred for their rivals in Eryndor.",
    imageUrl: "/characters/kurohana.webp",
  },
  {
    id: "valdora",
    name: "Valdora",
    type: "Arcane",
    description:
      "The cradle of magical mystery hidden in deep woods. Ruled by circles of Archmages, they relentlessly pursue ancient knowledge, balancing supreme wisdom with dangerous power.",
    imageUrl: "/characters/valdora.webp",
  },
  {
    id: "hollowind",
    name: "Hollowind",
    type: "Air",
    description:
      "A smog-choked metropolis of gears and lightning towers. Led by secretive guilds, they wield shadow magic to power machines that can shift the tides of any war.",
    imageUrl: "/characters/hollowind.webp",
  },
];
