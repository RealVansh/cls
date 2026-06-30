import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesGrid from "@/components/services/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title:
    "Services | CLS Private Limited — Extractables & Leachables, Method Development, Nitrosamines Testing",
  description:
    "Explore CLS Private Limited's specialized analytical services including Extractables & Leachables, Method Development & Validation, Nitrosamines & NDSRIs, Compendial Testing, and more. NABL accredited, US FDA inspected.",
};

import PageHeader from "@/components/layout/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Cost-effective, regulatory-compliant testing services helping pharmaceutical and medical device companies overcome unique analytical challenges."
        badge="Analytical Capabilities"
      />
      <ServicesGrid />
      <ServicesProcess />
      <FinalCTA />
    </>
  );
}
