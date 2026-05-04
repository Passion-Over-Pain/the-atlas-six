interface Feature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  videoSrc: string;
  thumbnail: string;
}

export const FEATURES: Feature[] = [
  {
    id: "creation",
    title: "Character Identity",
    tagline: "Define your legacy",
    description:
      "Beyond just aesthetics, your choices in the character creator ripple through the Known World. Distribute attributes that unlock unique dialogue paths and combat abilities.",
    videoSrc:
      "https://res.cloudinary.com/dqocjmq7h/video/upload/v1777886986/character-creation_jcqw3f.mp4",
    thumbnail: "/ui/character-creator.webp",
  },
  {
    id: "narrative",
    title: "Branching Narrative",
    tagline: "Your words, their world",
    description:
      "Engage with a world that remembers you. This dialogue system isn't just flavour text; it's the engine of the story.",
    videoSrc:
      "https://res.cloudinary.com/dqocjmq7h/video/upload/v1777886993/story_clmzsg.mp4",
    thumbnail: "/ui/story.webp",
  },
  {
    id: "combat",
    title: "Tactical Combat",
    tagline: "Turn-based precision",
    description:
      "Every move matters. Experience a turn-based combat system built on tactical positioning.",
    videoSrc:
      "https://res.cloudinary.com/dqocjmq7h/video/upload/v1777886989/battle_oucrtl.mp4",
    thumbnail: "/ui/battle.webp",
  },
  {
    id: "minigames",
    title: "Mini-games",
    tagline: "The art of the downtime",
    description: "Even heroes need a break. Engage in localized mini-games.",
    videoSrc:
      "https://res.cloudinary.com/dqocjmq7h/video/upload/v1777886986/mini-game_rfuoie.mp4",
    thumbnail: "/ui/mini-games.webp",
  },
];
