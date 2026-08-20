import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AccreditationsMarquee from "@/components/home/AccreditationsMarquee";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import IndustriesServed from "@/components/home/IndustriesServed";
import CoreServices from "@/components/home/CoreServices";
import WhyCLS from "@/components/home/WhyCLS";

import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ClientsMarquee />
      <AccreditationsMarquee />
      <IndustriesServed />
      <CoreServices />
      <WhyCLS />

      <FAQ />
      <FinalCTA />
    </>
  );
}
