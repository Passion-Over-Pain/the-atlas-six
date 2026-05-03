export const JourneySection = () => {
  return (
    <section
      id="story"
      className="relative py-24 px-6 md:px-12 w-full min-h-screen"
      style={{
        background: `radial-gradient(ellipse 60% 80% at 30% 50%, rgba(180, 120, 40, 0.05) 0%, transparent 60%), 
                     radial-gradient(ellipse 40% 60% at 80% 60%, rgba(100, 60, 20, 0.04) 0%, transparent 50%), 
                     linear-gradient(180deg, #0b0c10, rgba(26, 20, 12, 0.95), #0b0c10)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            The Story
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-parchment uppercase tracking-tighter">
            A night to
            <span className="text-gold"> remember</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* LEFT COLUMN: The Journey Book */}
          <aside className=" pl-8 py-4 relative">
            <h3 className="font-ui text-xs tracking-[0.3em] text-gold uppercase mb-10">
              Current Build: v0.3
            </h3>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-gold/20 " />
                <span className="text-[10px] text-gold/40 uppercase tracking-widest block mb-2">
                  Prologue
                </span>
                <h4 className="font-display text-xl text-parchment mb-2">
                  The awakening
                </h4>
                <p className="text-sm text-parchment/50 font-serif italic">
                  A memory, dream or premition.
                </p>
              </div>

              {/* Timeline Item 2 - Active */}
              <div className="relative">
                <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-gold shadow-[0_0_10px_#daa520] animate-pulse" />
                <span className="text-[10px] text-gold uppercase tracking-widest block mb-2">
                  Chapter I: Act I
                </span>
                <h4 className="font-display text-xl text-gold mb-2">
                  A night to remember
                </h4>
                <p className="text-sm text-parchment/80 font-serif leading-relaxed">
                  Current Location: Bloomhaven. Night One. The hunt is over, but
                  the unrest remains.
                </p>
              </div>
              <div className="relative opacity-30 italic">
                <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-transparent border border-white/20" />
                <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                  Chapter I: Act II
                </span>
                <h4 className="font-display text-xl text-white/60 mb-2 ">
                  ???
                </h4>
                <p className="text-sm text-white/40">Build unavailable.</p>
              </div>
            </div>
          </aside>
          <div className="space-y-10">
            <div className="font-body text-xl text-parchment/90 leading-relaxed space-y-8">
              <p>
                Bloomhaven is a charming inn tucked in the heart of Aurelia,
                exuding warmth and inviting tranquility to all who pass through.
                It is the most visited refuge in the archipelago, known as the
                place where adventurers gather to rest after a long day of
                collecting bounties in the wilds. Ivy-wrapped walls and
                flower-laden windows reflect the kingdom's affinity for nature,
                while the scent of lavender drifts through the halls.
              </p>

              <p>
                You have arrived with your party to wash away the dust of a
                grueling day's hunt. The inn is currently alive with the soft,
                golden glow of its namesake lanterns and the boisterous laughter
                of travelers.
              </p>

              <p>
                But as the sun vanishes, the cozy ambiance feels fragile. You
                have dozed off for only a moment, and yet the atmosphere has
                shifted. You are here to live through the night, speaking to
                those who have found rest within these walls while keeping your
                eyes awake. The peace of Bloomhaven is a rare gift, but tonight,
                the darkness waiting outside the golden light feels more
                personal than a dream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
