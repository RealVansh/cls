import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import FacilityOverview from "@/components/infrastructure/FacilityOverview";
import EquipmentShowcase from "@/components/infrastructure/EquipmentShowcase";
import QualityCompliance from "@/components/infrastructure/QualityCompliance";
import WhyCLSDetailed from "@/components/infrastructure/WhyCLSDetailed";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Infrastructure | CLS Private Limited — World-Class Analytical Facilities & Equipment",
  description:
    "Explore CLS Private Limited's state-of-the-art infrastructure, cutting-edge analytical instrumentation including Shimadzu LC-MS/MS, Agilent ICP-MS, and GC-MS/MS, and comprehensive quality compliance certifications.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader 
        title="Our Infrastructure" 
        subtitle="Explore our world-class, purpose-built analytical testing facilities equipped with the latest instrumentation for high accuracy of data."
        badge="World-Class Facilities"
      />
      <FacilityOverview />
      <EquipmentShowcase />
      <QualityCompliance />
      <WhyCLSDetailed />
      <FinalCTA />
    </>
  );
}
