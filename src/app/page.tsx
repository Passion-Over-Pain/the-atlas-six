import { Hero } from "./components/sections/hero";
import { Navbar } from "@/app/components/navbar";
import { WorldOverview } from "@/app/components/sections/overview";
import { SectionDivider } from "@/app/components/ui/section-divider";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorldOverview />
      <SectionDivider />
    </div>
  );
}
