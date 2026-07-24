import {
  Award,
  ShieldCheck,
  FileText,
  DatabaseZap,
  Landmark,
} from "lucide-react";

const certifications = [
  {
    title: "NABL Accredited",
    subtitle: "ISO/IEC 17025:2017",
    description:
      "National accreditation ensuring competence of testing laboratories through rigorous assessment of technical capability and quality systems.",
    icon: Award,
  },
  {
    title: "US FDA Inspected 2023 & 2025",
    subtitle: "EIR Received",
    description:
      "Successfully passed FDA inspection, demonstrating adherence to current Good Manufacturing Practices and data integrity standards.",
    icon: ShieldCheck,
  },
  {
    title: "CDSCO Registered",
    subtitle: "Form MD-40",
    description:
      "Registered with the Central Drugs Standard Control Organisation for medical device testing and evaluation services.",
    icon: Landmark,
  },
  {
    title: "21 CFR Part 11",
    subtitle: "Electronic Compliance",
    description:
      "Full compliance with electronic records and signatures regulations, featuring audit trails, access controls, and validated systems.",
    icon: DatabaseZap,
  },
  {
    title: "Central/State Drug License",
    subtitle: "Form 37",
    description:
      "Licensed under Central and State Drug Control authorities for pharmaceutical analytical testing and quality control operations.",
    icon: FileText,
  },
];

export default function QualityCompliance() {
  return (
    <section className="bg-brand-grey py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-success">
            Certifications
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Quality & Compliance
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Our laboratory operates under strict global quality standards,
            ensuring every result is accurate, reliable, and ready to meet the
            most demanding regulatory requirements worldwide.
          </p>
        </div>

        {/* Compliance Cards Container - Using Flex to center the 5 items perfectly */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="group relative flex w-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-success/10 hover:ring-brand-success/30 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-success/10 text-brand-success transition-colors duration-300 group-hover:bg-brand-success group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-dark">
                  {cert.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-sm font-semibold text-brand-accent">
                  {cert.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
