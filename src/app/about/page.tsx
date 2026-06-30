import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutTrustStrip from "@/components/about/AboutTrustStrip";
import WhoWeAre from "@/components/about/WhoWeAre";
import ByTheNumbers from "@/components/about/ByTheNumbers";
import VisionMission from "@/components/about/VisionMission";
import Leadership from "@/components/about/Leadership";
import ScientificTeam from "@/components/about/ScientificTeam";
import Accreditations from "@/components/home/Accreditations";
import AboutTechnology from "@/components/about/AboutTechnology";
import Facility from "@/components/about/Facility";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | CLS Private Limited — Specialized Analytical Services",
  description:
    "Learn about Cephas Life Sciences (CLS) Private Limited — an NABL accredited analytical laboratory providing specialized testing services for pharmaceutical and medical device industries since 2019.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTrustStrip />
      
      {/* Identity & Scale */}
      <WhoWeAre />
      <ByTheNumbers />
      
      {/* Philosophy */}
      <VisionMission />
      
      {/* People */}
      <Leadership />
      <ScientificTeam />
      
      {/* Infrastructure */}
      <Facility />
      <AboutTechnology />
      
      {/* Proof */}
      <Accreditations />
      
      {/* CTA */}
      <FinalCTA />
    </>
  );
}
