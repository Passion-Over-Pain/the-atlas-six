import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 border-b border-gold/20 bg-obsidian/80 backdrop-blur-sm">
      <div className="text-gold font-display text-xl tracking-[0.2em] font-bold">
        THE ATLAS SIX
      </div>

      <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] font-ui text-parchment/70 uppercase">
        {["The World", "Characters", "Kingdoms", "Combat", "Devlog"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gold transition-colors"
            >
              {item}
            </a>
          ),
        )}
      </div>

      <Button
        variant="secondary"
        className="px-6 py-2 text-[10px]"
        href="https://github.com/Passion-Over-Pain/the-atlas-six"
        target="_blank"
      >
        {/* TODO:// Add proper GitHub staring functionality */}
        Join Waitlist
      </Button>
    </nav>
  );
};
