import { Hero } from "./components/sections/hero";
import { Navbar } from "@/app/components/navbar";
import { WorldOverview } from "@/app/components/sections/overview";
import { SectionDivider } from "@/app/components/ui/section-divider";
import { Characters } from "@/app/components/sections/characters";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorldOverview />
      <SectionDivider />
      <Characters />
      <SectionDivider />
    </div>
  );
}
