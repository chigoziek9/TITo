import { HeroSection } from "../components/home/HeroSection";
import { MissionVisionSection } from "../components/home/MissionVisionSection";
import { ValuesSection } from "../components/home/ValuesSection";
import { WhyChooseSection } from "../components/home/WhyChooseSection";
import { ProductShowcase } from "../components/home/ProductShowcase";

export function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      <HeroSection />
      <ProductShowcase />
      <MissionVisionSection />
      <ValuesSection />
      <WhyChooseSection />
    </div>
  );
}