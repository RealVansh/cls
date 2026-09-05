import type { Metadata } from "next";
import CertificationsGrid from "@/components/accreditations/CertificationsGrid";
import QualityCommitment from "@/components/accreditations/QualityCommitment";
import FinalCTA from "@/components/home/FinalCTA";
import PageHeader from "@/components/layout/PageHeader";
import { client } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Accreditations & Quality Assurance | CLS Private Limited",
  description:
    "Review CLS Private Limited's global regulatory accreditations including NABL (ISO/IEC 17025), US FDA, CDSCO, and State Drug Control licenses.",
};

export const revalidate = 30;

const GET_ACCREDITATIONS_QUERY = `
  *[_type == "accreditation"] | order(order asc) {
    _id,
    authority,
    title,
    certificateNo,
    "logoUrl": logo.asset->url,
    "imageUrl": certificateImage.asset->url
  }
`;

export default async function AccreditationsPage() {
  const accreditations = await client.fetch(GET_ACCREDITATIONS_QUERY);

  return (
    <>
      <PageHeader 
        title="Global Regulatory Compliance" 
        subtitle="Our analytical excellence is backed by the world's most stringent regulatory authorities. We maintain the highest standards of data integrity and laboratory practice."
        badge="Quality Assurance"
      />
      <CertificationsGrid initialCertifications={accreditations} />
      <QualityCommitment />
      <FinalCTA />
    </>
  );
}
