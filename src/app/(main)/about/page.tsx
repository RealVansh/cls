import type { Metadata } from "next";
import WhoWeAre from "@/components/about/WhoWeAre";
import ByTheNumbers from "@/components/about/ByTheNumbers";
import VisionMission from "@/components/about/VisionMission";
import MilestonesTimeline from "@/components/about/MilestonesTimeline";
import Leadership from "@/components/about/Leadership";
import ScientificTeam from "@/components/about/ScientificTeam";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | CLS Private Limited — Specialized Analytical Services",
  description:
    "Learn about Cephas Life Sciences (CLS) Private Limited — an NABL accredited analytical laboratory providing specialized testing services for pharmaceutical and medical device industries since 2019.",
};

import PageHeader from "@/components/layout/PageHeader";
import { client } from "@/sanity/client";

export const revalidate = 30;

const GET_MILESTONES_QUERY = `
  *[_type == "milestone"] | order(year asc) {
    _id,
    year,
    month,
    category,
    title,
    description
  }
`;

export default async function AboutPage() {
  const milestonesData = await client.fetch(GET_MILESTONES_QUERY);

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Established in 2019, Cephas Life Sciences (CLS) Private Limited provides specialized analytical and research services for the global pharmaceutical and medical device industries."
        badge="Precision. Quality. Integrity."
      />
      
      {/* Identity & Scale */}
      <WhoWeAre />
      
      {/* Philosophy */}
      <VisionMission />

      {/* Impact */}
      <ByTheNumbers />
      
      {/* History & Achievements */}
      <MilestonesTimeline initialMilestones={milestonesData} />
      
      {/* People */}
      <Leadership />
      <ScientificTeam />
      
      {/* CTA */}
      <FinalCTA />
    </>
  );
}
