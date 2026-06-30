import Link from "next/link";
import { ArrowRight, TestTube, Microscope, FlaskConical, Beaker, ShieldCheck, FileSearch } from "lucide-react";

const services = [
  {
    title: "Extractables & Leachables",
    description: "Comprehensive E&L profiling for pharmaceutical packaging and medical devices.",
    icon: FlaskConical,
    link: "/services/extractables-leachables",
  },
  {
    title: "Method Development",
    description: "Developing robust, sensitive, and specific analytical methods for complex matrices.",
    icon: TestTube,
    link: "/services/method-development",
  },
  {
    title: "Method Validation",
    description: "ICH-compliant validation of analytical procedures to ensure accuracy and precision.",
    icon: ShieldCheck,
    link: "/services/method-validation",
  },
  {
    title: "Stability Studies",
    description: "Real-time and accelerated stability testing under varying environmental conditions.",
    icon: Beaker,
    link: "/services/stability-studies",
  },
  {
    title: "Qualitative & Quantitative Analysis",
    description: "High-accuracy structural elucidation and quantification of unknown compounds.",
    icon: Microscope,
    link: "/services/analysis",
  },
  {
    title: "Regulatory Consulting",
    description: "Expert guidance on regulatory submissions and compliance strategies.",
    icon: FileSearch,
    link: "/services/regulatory-consulting",
  },
];

export default function CoreServices() {
  return (
    <section className="bg-brand-grey py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Industry-leading analytical solutions engineered for pharmaceutical innovation and strict regulatory compliance.
            </p>
          </div>
          <Link 
            href="/services"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm ring-1 ring-inset ring-brand-border transition-all hover:bg-slate-50 hover:ring-brand-primary/20"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 hover:ring-brand-primary/20"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-brand-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-brand-dark">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="mt-auto inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-primary before:absolute before:inset-0"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
