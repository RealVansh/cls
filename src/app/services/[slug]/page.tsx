import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/components/services/servicesData";
import ServiceDetail from "@/components/services/ServiceDetail";
import StandardsBar from "@/components/services/StandardsBar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return { title: "Service Not Found | CLS Private Limited" };
  }

  return {
    title: `${service.title} | CLS Private Limited`,
    description: service.clsSolution,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetail service={service} index={0} />
      <StandardsBar />
    </>
  );
}
