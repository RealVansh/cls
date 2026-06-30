import type { Metadata } from "next";
import AccreditationsHero from "@/components/accreditations/AccreditationsHero";
import CertificationsGrid from "@/components/accreditations/CertificationsGrid";
import QualityCommitment from "@/components/accreditations/QualityCommitment";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Accreditations & Quality Assurance | CLS Private Limited",
  description:
    "Review CLS Private Limited's global regulatory accreditations including NABL (ISO/IEC 17025), US FDA, CDSCO, and State Drug Control licenses.",
};

import PageHeader from "@/components/layout/PageHeader";

export default function AccreditationsPage() {
  return (
    <>
      <PageHeader 
        title="Global Regulatory Compliance" 
        subtitle="Our analytical excellence is backed by the world's most stringent regulatory authorities. We maintain the highest standards of data integrity and laboratory practice."
        badge="Quality Assurance"
      />
      <CertificationsGrid />
      <QualityCommitment />
      <FinalCTA />
    </>
  );
}
