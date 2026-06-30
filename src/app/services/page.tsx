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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <FinalCTA />
    </>
  );
}
