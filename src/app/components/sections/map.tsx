"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { KingdomProperties } from "../features/gamemap";
import kingdomGeoJsonData from "@/app/data/kingdoms.json";
import { PLACESOFINTEREST } from "@/app/constants/places-of-interest";

const RawFantasyMapFeature = dynamic(() => import("../features/gamemap"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#0b0c10] text-[#daa520] font-serif text-2xl animate-pulse">
      Unrolling the Parchment...
    </div>
  ),
});

export const InteractiveMapSection: React.FC = () => {
  const [activeKingdomLore, setActiveKingdomLore] =
    useState<KingdomProperties | null>(null);

  return (
    <section
      className="relative w-full min-h-screen bg-obsidian flex flex-col pb-24 z-5"
      id="world"
    >
      {/* HEADER UI (Title + Legend) */}
      <div className="relative z-3000 pt-12 pb-8 px-6 text-center border-b border-gold/10">
        <h2 className="font-display text-5xl text-parchment tracking-[0.3em] uppercase mb-4">
          The <span className="text-gold">Known</span> World
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-4 max-w-3xl mx-auto py-3 px-6 rounded-full border border-gold/20 bg-gold/5">
          <span className="text-gold/60 text-[10px] uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Map
            Under Construction
          </span>
          <span className="text-parchment/70 text-xs font-serif italic">
            Click a kingdom or a point of interest to learn more about it.
          </span>
        </div>
      </div>

      {/* THE MAP CONTAINER */}
      <div className="relative grow h-[80vh] w-full overflow-hidden">
        <RawFantasyMapFeature
          geoJsonData={kingdomGeoJsonData as any}
          onKingdomClick={(props) => setActiveKingdomLore(props)}
          height="100%"
          markers={PLACESOFINTEREST}
        />

        {/* LORE THINGY - YK IT */}
        {activeKingdomLore && (
          <div
            className="absolute top-6 right-6 w-80 md:w-96 p-8 z-4000 rounded-lg shadow-2xl border-2 border-[#8b5a2b] animate-in fade-in slide-in-from-right-10 duration-500"
            style={{
              background: "linear-gradient(135deg, #fdf3e7 0%, #f4e0c8 100%)",
              fontFamily: "serif",
              color: "#331a00",
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold">
                {activeKingdomLore.kingdomName}
              </h2>
              <button
                onClick={() => setActiveKingdomLore(null)}
                className="text-2xl hover:text-red-800 transition-colors"
              >
                &times;
              </button>
            </div>
            <p className="italic mb-2 opacity-80 text-sm font-bold uppercase tracking-tighter">
              Domain of {activeKingdomLore.element}
            </p>
            <p className="text-base leading-relaxed mb-4">
              {activeKingdomLore.description}
            </p>
            <div className="border-t border-[#8b5a2b]/30 pt-4 text-sm opacity-90 italic">
              {activeKingdomLore.loreDetails}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
