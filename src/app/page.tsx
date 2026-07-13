import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AccreditationsMarquee from "@/components/home/AccreditationsMarquee";
import IndustriesServed from "@/components/home/IndustriesServed";
import CoreServices from "@/components/home/CoreServices";
import WhyCLS from "@/components/home/WhyCLS";
import LabGallery from "@/components/home/LabGallery";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AccreditationsMarquee />
      <IndustriesServed />
      <CoreServices />
      <WhyCLS />
      <LabGallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
