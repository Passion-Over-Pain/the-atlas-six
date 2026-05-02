"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  videoSrc: string;
  thumbnail: string;
}

const FEATURES: Feature[] = [
  {
    id: "creation",
    title: "Character Identity",
    tagline: "Define your legacy",
    description:
      "Beyond just aesthetics, your choices in the character creator ripple through the Known World. Distribute attributes that unlock unique dialogue paths and combat abilities.",
    videoSrc: "/gameplay/creation.mp4",
    thumbnail: "/ui/character-creation.jpg",
  },
  {
    id: "narrative",
    title: "Branching Narrative",
    tagline: "Your words, their world",
    description:
      "Engage with a world that remembers you. This dialogue system isn't just flavour text; it's the engine of the story. Forge alliances or burn bridges, the world will remember.",
    videoSrc: "/gameplay/narrative.mp4",
    thumbnail: "/ui/story.jpg",
  },
  {
    id: "combat",
    title: "Tactical Combat",
    tagline: "Turn-based precision",
    description:
      "Every move matters. Experience a turn-based combat system built on tactical positioning and elemental synergies. Command your party with a classic initiative-based flow designed for strategy enthusiasts.",
    videoSrc: "/gameplay/combat.mp4",
    thumbnail: "/ui/combat.jpg",
  },

  {
    id: "minigames",
    title: "Mini-games",
    tagline: "The art of the downtime",
    description:
      "Even heroes need a break. Engage in localized mini-games from high-stakes card to meditative fishing.",
    videoSrc: "/gameplay/minigames.mp4",
    thumbnail: "/ui/minigames.jpg",
  },
];

export const GameplayShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(FEATURES[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Restart video when active feature changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeFeature]);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#0b0c10] ">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            System overview
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-parchment uppercase tracking-tighter">
            The
            <span className="text-gold"> gameplay</span>
          </h2>
        </header>

        {/* ACTIVE FEATURE HERO */}
        <div className="grid lg:grid-cols-2 gap-0 border border-gold/10 bg-black/40 overflow-hidden rounded-sm mb-8 shadow-2xl">
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden border-r border-gold/10">
            <AnimatePresence mode="wait">
              <motion.video
                key={activeFeature.id}
                ref={videoRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={activeFeature.videoSrc} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
            {/* Scanned Line Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,128,0.03))] bg-size-[100%_4px,3px_100%]" />
          </div>

          <div className="p-12 flex flex-col justify-center">
            <motion.div
              key={activeFeature.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gold font-ui text-xs tracking-widest uppercase mb-4 block">
                {activeFeature.tagline}
              </span>
              <h3 className="text-4xl font-display text-parchment mb-6 uppercase">
                {activeFeature.title}
              </h3>
              <p className="text-lg text-parchment/70 font-serif leading-relaxed mb-8">
                {activeFeature.description}
              </p>
              <div className="flex gap-4">
                <div className="h-0.5 w-12 bg-gold mt-3" />
                <span className="text-[10px] text-gold/40 uppercase tracking-tighter">
                  In-Engine Footage — Early Build v0.4
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BENTO SELECTOR GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`cursor-pointer relative group overflow-hidden border transition-all duration-500 rounded-sm text-left
                ${
                  activeFeature.id === feature.id
                    ? "border-gold bg-gold/5 shadow-[0_0_15px_rgba(218,165,32,0.15)]"
                    : "border-gold/10 grayscale hover:grayscale-0 hover:border-gold/40"
                }`}
            >
              <div className="aspect-4/3 relative overflow-hidden">
                <img
                  src={feature.thumbnail}
                  alt={feature.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 
                  ${activeFeature.id === feature.id ? "bg-transparent" : "bg-black/60 group-hover:bg-black/20"}`}
                />
              </div>
              <div className="p-4">
                <h4
                  className={`text-[11px] font-ui uppercase tracking-widest transition-colors
                  ${activeFeature.id === feature.id ? "text-gold" : "text-parchment/60"}`}
                >
                  {feature.title}
                </h4>
              </div>

              {/* Active Indicator Bar */}
              {activeFeature.id === feature.id && (
                <motion.div
                  layoutId="activeFeatureBar"
                  className="absolute bottom-0 left-0 h-0.5 bg-gold w-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
