import { Building2, Thermometer, ShieldAlert, DatabaseZap } from "lucide-react";

const highlights = [
  {
    title: "Purpose-Built Lab",
    description:
      "Designed and constructed specifically for pharmaceutical analytical testing, with dedicated zones for sample preparation, instrument suites, and quality control operations.",
    icon: Building2,
  },
  {
    title: "Controlled Environment",
    description:
      "Precision temperature, humidity, and contamination control systems maintain optimal conditions for sensitive analytical procedures and regulatory compliance.",
    icon: Thermometer,
  },
  {
    title: "Safety Systems",
    description:
      "Comprehensive safety protocols including fume extraction, chemical spill containment, fire suppression, and personal protective equipment for all personnel.",
    icon: ShieldAlert,
  },
  {
    title: "Data Integrity",
    description:
      "21 CFR Part 11 compliant data management with audit trails, electronic signatures, role-based access control, and secure backup infrastructure.",
    icon: DatabaseZap,
  },
];

export default function FacilityOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Our Facility
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Our State-of-the-Art Facility
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A purpose-built analytical testing laboratory engineered from the
            ground up for pharmaceutical and medical device testing — combining
            cutting-edge instrumentation with rigorous environmental controls to
            deliver results you can trust.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 hover:ring-brand-primary/30"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-brand-dark">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Decorative bottom accent bar */}
                <div className="mt-6 h-0.5 w-0 rounded-full bg-brand-primary transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
