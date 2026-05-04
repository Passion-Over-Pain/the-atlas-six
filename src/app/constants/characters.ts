export interface Character {
  id: string;
  name: string;
  fullName: string;
  class: string;
  species: string;
  bio: string;
  quote: string;
  stats: {
    Strength: number;
    Dexterity: number;
    Intelligence: number;
    Stamina: number;
    Mana: number;
    Charisma: number;
  };
  portrait: string;
  thumbnail: string;
}

export const CHARACTERS: Character[] = [
  {
    id: "aiyana",
    name: "Aiyana",
    fullName: "Aiyana Miyazaki",
    class: "Phoenix",
    species: "Human (Strategist)",
    bio: "Your strategist, mentor, and even former enemy. You are Aiyana's greatest student, learning the art of war through her eyes.",
    quote: "Tactics win battles, but friendship wins the long game.",
    stats: {
      Strength: 70,
      Dexterity: 100,
      Intelligence: 110,
      Stamina: 100,
      Mana: 120,
      Charisma: 120,
    },
    portrait: "/characters/phoenix.webp",
    thumbnail: "/characters/phoenix.webp",
  },
  {
    id: "maylyn",
    name: "Maylyn",
    fullName: "Maylyn Armorenia",
    class: "Eye",
    species: "Elf (Archer)",
    bio: "Known as 'The Eye' for her exceptional accuracy. She often tends to tease you, but your friendship is parallel to the Sun and Moon.",
    quote: "I never miss. Unless I want to see you try harder.",
    stats: {
      Strength: 70,
      Dexterity: 100,
      Intelligence: 120,
      Stamina: 100,
      Mana: 140,
      Charisma: 110,
    },
    portrait: "/characters/eye.webp",
    thumbnail: "/characters/eye.webp",
  },
  {
    id: "ryan",
    name: "Ryan",
    fullName: "Ryan Artemis",
    class: "Titan",
    species: "Human (General)",
    bio: "A formidable warrior and general, but most importantly your close friend who would stand against an army for you.",
    quote: "My shield is your shield. Always.",
    stats: {
      Strength: 140,
      Dexterity: 90,
      Intelligence: 90,
      Stamina: 110,
      Mana: 60,
      Charisma: 60,
    },
    portrait: "/characters/titan.webp",
    thumbnail: "/characters/titan.webp",
  },
  {
    id: "jade",
    name: "Jade",
    fullName: "Jade Adenka",
    class: "Healer",
    species: "Human (Mystic)",
    bio: "A nurturing healer with a deep connection to water magic. She sees you as the family she adores and protects.",
    quote: "Even the deepest wounds can be mended with time and care.",
    stats: {
      Strength: 50,
      Dexterity: 120,
      Intelligence: 150,
      Stamina: 90,
      Mana: 160,
      Charisma: 80,
    },
    portrait: "/characters/healer.webp",
    thumbnail: "/characters/healer.webp",
  },
];
