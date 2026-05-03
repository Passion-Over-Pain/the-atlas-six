"use client";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "GitHub",
      href: "https://github.com/Passion-Over-Pain/the-atlas-six",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tinotenda-mhedziso/",
    },
    { name: "Contact", href: "mailto:tinomhedziso22@gmail.com" },
  ];

  const sections = [
    "Overview",
    "Characters",
    "World",
    "Story",
    "Gameplay",
    "Community",
    "Devlog",
  ];

  return (
    <footer className="bg-obsidian border-t border-gold/10 py-12 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-gold font-display text-sm tracking-[0.3em] font-bold">
          THE ATLAS SIX
        </div>

        <div className="text-[10px] font-ui text-parchment/40 tracking-widest uppercase text-center">
          © {currentYear} The Atlas Six.{" "}
          <span className="italic">Created with 💛 in Africa.</span>
        </div>

        {/* Right: External Links */}
        <div className="flex gap-6 text-[9px] tracking-[0.2em] font-ui text-parchment/60 uppercase">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold transition-colors duration-300"
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Internal Navigation Links (Sub-footer) */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[8px] tracking-[0.3em] font-ui text-parchment/20 hover:text-gold/50 transition-colors uppercase"
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
};
