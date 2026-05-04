import { KINGDOMS } from "@/app/constants/entities";
import Image from "next/image";

export const EntityGallery = () => {
  return (
    <section id="encyclopedia" className="bg-obsidian py-32 px-6">
      {/* Increased max-width to allow larger cards on high-res screens */}
      <div className="w-full 00 mx-auto">
        <header className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-7xl text-parchment uppercase tracking-tighter">
            Encyclopedia
          </h2>
          <p className="font-body italic text-parchment/50 mt-4 max-w-2xl mx-auto text-lg">
            A snapshot of the nations and powers that shape the face of The
            Atlas Six.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <span className="font-ui text-[12px] tracking-[0.5em] text-gold/60 uppercase">
              The Five Kingdoms
            </span>
          </div>

          {/* Strict 5-column layout for desktop with larger gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {KINGDOMS.map((kingdom) => (
              <div
                key={kingdom.id}
                className="relative aspect-2/3 bg-black border-2 border-zinc-500/40 overflow-hidden shadow-2xl"
              >
                <Image
                  fill
                  src={kingdom.imageUrl}
                  alt={kingdom.name}
                  className="w-full h-full object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 xl:p-8 flex flex-col justify-end text-center">
                  <span className="font-ui text-[10px] tracking-[0.3em] text-gold mb-3 uppercase">
                    — {kingdom.type} —
                  </span>

                  <h3 className="font-display text-2xl xl:text-3xl text-parchment uppercase mb-4 tracking-normal">
                    {kingdom.name}
                  </h3>

                  <p className="font-body text-sm xl:text-base leading-relaxed text-parchment/80 italic">
                    {kingdom.description}
                  </p>
                </div>

                {/* Border Corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/30" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/30" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/30" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
