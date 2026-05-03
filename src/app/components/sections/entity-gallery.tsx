import { WORLD_ENTITIES } from "@/app/constants/entities";
import Image from "next/image";

export const EntityGallery = () => {
  return (
    <section id="bestiary" className="bg-obsidian py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            Denizens & Factions
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-parchment uppercase tracking-tighter">
            Encyclopedia
          </h2>
          <p className="font-body italic text-parchment/50 mt-4 max-w-2xl mx-auto">
            From the disciplined knights of the north to the hollowed remains of
            the blighted fields, every soul is a survivor.
          </p>
        </header>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WORLD_ENTITIES.map((entity) => (
            <div
              key={entity.id}
              className={`group relative aspect-2/3 bg-black border-2 ${entity.accent} overflow-hidden`}
            >
              <Image
                fill
                src={entity.imageUrl}
                alt={entity.name}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center">
                {/* Rarity Label */}
                <span className="font-ui text-[8px] tracking-[0.2em] text-gold/80 mb-2 uppercase">
                  — {entity.rarity} —
                </span>

                <h3 className="font-display text-xl text-parchment uppercase mb-3 tracking-tight">
                  {entity.name}
                </h3>

                <p className="font-body text-[11px] leading-relaxed text-parchment/60 italic">
                  {entity.description}
                </p>
              </div>

              {/* Ornate Border Corners (Technical Detail) */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold/30" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold/30" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold/30" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
