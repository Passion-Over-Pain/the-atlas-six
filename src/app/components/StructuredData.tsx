export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "The Atlas Six",
    author: {
      "@type": "Person",
      name: "Tinotenda Mhedziso",
    },
    description:
      "A fantasy tactical RPG with a branching narrative and recursive event engine.",
    genre: ["RPG", "Tactical", "Fantasy", "Story", "Indie"],
    gamePlatform: ["Windows", "macOS", "Linux"],
    applicationCategory: "Game",
    operatingSystem: "Windows, macOS, Linux",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
