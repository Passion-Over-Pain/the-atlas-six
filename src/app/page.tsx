import { Hero } from "./components/sections/hero";
import { Navbar } from "@/app/components/features/navbar";
import { WorldOverview } from "@/app/components/sections/overview";
import { SectionDivider } from "@/app/components/ui/section-divider";
import { Characters } from "@/app/components/sections/characters";
import { InteractiveMapSection } from "./components/sections/map";
import { JourneySection } from "./components/sections/journey";
import { GameplayShowcase } from "./components/sections/gameplay";
import { CommunitySection } from "./components/sections/community";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorldOverview />
      <SectionDivider />
      <Characters />
      <SectionDivider />
      <InteractiveMapSection />
      <SectionDivider />
      <JourneySection />
      <SectionDivider />
      <GameplayShowcase />
      <SectionDivider />
      <CommunitySection />
    </div>
  );
}
