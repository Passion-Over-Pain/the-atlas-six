import Image from "next/image";
export const FEATURES = [
  {
    title: "Branching Narrative",
    description:
      "Make choices that not only affect your party but the world around you and carry the consequences of every word spoken.",
    icon: (
      <Image
        src={"icons/scroll.svg"}
        width={32}
        height={32}
        alt="A golden scroll icon"
      />
    ),
  },
  {
    title: "Character Creation",
    description:
      "Forge your identity from Gender, Kingdom, and Class. Your background is the stepping stone to an interesting journey.",
    icon: (
      <Image
        src={"icons/sword.svg"}
        width={32}
        height={32}
        alt="A golden sword icon"
      />
    ),
  },
  {
    title: "Tactical Combat",
    description:
      "Master turn-based battles with deck-builder depth. Chain unique abilities, exploit enemy weaknesses, and build synergies.",
    icon: (
      <Image
        src={"icons/knight.svg"}
        width={32}
        height={32}
        alt="A golden knight on a horse icon"
      />
    ),
  },
  {
    title: "World Progression",
    description:
      "Watch the world evolve as you grow. Expand your skill tree, manage your expanding inventory, and unlock the secrets of the Five Kingdoms.",
    icon: (
      <Image
        src={"icons/world.svg"}
        width={32}
        height={32}
        alt="A golden world icon"
      />
    ),
  },
  {
    title: "Dynamic Relationships",
    description:
      "Interact with strange characters and deepen your relationships, or let those who cross you suffer at your wrath.",
    icon: (
      <Image
        src={"icons/masks.svg"}
        width={32}
        height={32}
        alt="A golden set of 3 masks icon"
      />
    ),
  },
  {
    title: "The Atlas Deck",
    description:
      "This time, you do choose your cards. Build a deck capable of surviving the madness of the Known World.",
    icon: (
      <Image
        src={"icons/cards.svg"}
        width={32}
        height={32}
        alt="A hand of golden cards icon"
      />
    ),
  },
];
