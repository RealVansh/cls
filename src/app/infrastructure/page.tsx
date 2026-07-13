import PageHeader from "@/components/layout/PageHeader";
import AboutTechnology from "@/components/about/AboutTechnology";
import FinalCTA from "@/components/home/FinalCTA";

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader 
        title="Our Infrastructure" 
        subtitle="Explore our world-class, purpose-built analytical testing facilities equipped with the latest instrumentation."
        badge="World-Class Facilities"
      />
      <AboutTechnology />
      <FinalCTA />
    </>
  );
}
