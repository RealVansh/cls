import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import IndustriesServed from "@/components/home/IndustriesServed";
import CoreServices from "@/components/home/CoreServices";
import WhyCLS from "@/components/home/WhyCLS";
import TechnologyShowcase from "@/components/home/TechnologyShowcase";
import LabGallery from "@/components/home/LabGallery";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <IndustriesServed />
      <CoreServices />
      <WhyCLS />
      <TechnologyShowcase />
      <LabGallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
