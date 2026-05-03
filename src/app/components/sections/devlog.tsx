import { DEVLOGS } from "@/app/constants/devlogs";
export const DevLogSection = () => {
  return (
    <section
      id="devlog"
      className="bg-obsidian py-32 px-6 border-t border-gold/10"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            Technical Showcase and Devlog
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-parchment uppercase tracking-tighter leading-none mb-8">
            Built Without <br />
            <span className="text-gold">A Game Engine.</span>
          </h2>
          <p className="font-body text-parchment/60 max-w-xl leading-relaxed text-lg">
            The Atlas Six runs on raw JavaScript, Electron.js, and magic. No
            Unity. No Godot. No shortcuts.
            <span className="text-gold/80 italic">
              <br />
              P.S: Actually going to write these soon
            </span>
          </p>
        </header>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gold/10">
          {DEVLOGS.map((log) => (
            <div
              key={log.id}
              className="p-8 md:p-12 border-r border-b border-gold/10 flex flex-col"
            >
              <h3 className="font-display text-2xl text-parchment mb-4 group-hover:text-gold transition-colors uppercase tracking-tight">
                {log.title}
              </h3>

              <p className="font-body text-sm text-parchment/50 leading-relaxed mb-8">
                {log.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-gold/20 text-[9px] text-gold/60 tracking-widest uppercase font-ui"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Code Snippet Box */}
              {log.codeSnippet && (
                <div className="bg-black/40 border border-gold/5 p-4 rounded-sm font-mono text-[11px] leading-relaxed relative overflow-hidden group-hover:border-gold/20 transition-all">
                  <div className="absolute top-0 right-0 p-2 opacity-20 text-[8px] text-gold  tracking-tighter">
                    {log.source}
                  </div>
                  <pre className="text-gold/80 ">
                    <code>{log.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
