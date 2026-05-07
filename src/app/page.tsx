"use client";
import dynamic from "next/dynamic";

import { Hero } from "./components/sections/hero";
import { Navbar } from "@/app/components/features/navbar";
import { Footer } from "./components/sections/footer";

const WorldOverview = dynamic(
  () => import("./components/sections/overview").then((m) => m.WorldOverview),
  { ssr: true },
);

const Characters = dynamic(
  () => import("./components/sections/characters").then((m) => m.Characters),
  {
    loading: () => <div className="h-100" />,
  },
);

const InteractiveMapSection = dynamic(() =>
  import("./components/sections/map").then((m) => m.InteractiveMapSection),
);

const EntityGallery = dynamic(() =>
  import("./components/sections/entity-gallery").then((m) => m.EntityGallery),
);

const JourneySection = dynamic(() =>
  import("./components/sections/journey").then((m) => m.JourneySection),
);

const GameplayShowcase = dynamic(
  () =>
    import("./components/sections/gameplay").then((m) => m.GameplayShowcase),
  {
    ssr: false,
  },
);

const CommunitySection = dynamic(() =>
  import("./components/sections/community").then((m) => m.CommunitySection),
);

const DevLogSection = dynamic(() =>
  import("./components/sections/devlog").then((m) => m.DevLogSection),
);

const SectionDivider = dynamic(() =>
  import("./components/ui/section-divider").then((m) => m.SectionDivider),
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <WorldOverview />

      <SectionDivider />
      <Characters />

      <SectionDivider />
      <InteractiveMapSection />

      <EntityGallery />

      <SectionDivider />
      <JourneySection />

      <SectionDivider />
      <GameplayShowcase />

      <SectionDivider />
      <CommunitySection />

      <SectionDivider />
      <DevLogSection />

      <Footer />
    </main>
  );
}
