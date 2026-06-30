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

export default function AccreditationsPage() {
  return (
    <>
      <AccreditationsHero />
      <CertificationsGrid />
      <QualityCommitment />
      <FinalCTA />
    </>
  );
}
