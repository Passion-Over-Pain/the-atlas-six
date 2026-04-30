import { Hero } from "./components/sections/hero";
import { Navbar } from "@/app/components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero />
    </div>
  );
}
