import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, CheckCircle, FileBadge } from "lucide-react";

const accreditations = [
  {
    name: "NABL Accredited",
    description: "ISO/IEC 17025:2017",
    icon: Award,
  },
  {
    name: "FDA Compliant",
    description: "21 CFR Part 11",
    icon: ShieldCheck,
  },
  {
    name: "ISO Certified",
    description: "ISO 9001:2015",
    icon: CheckCircle,
  },
  {
    name: "CDSCO Approved",
    description: "Form 37 Certified",
    icon: FileBadge,
  },
];

export default function Accreditations() {
  return (
    <section className="bg-brand-grey py-24 border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
          Accreditations & Certifications
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Our laboratory operates under strict global quality standards, ensuring every result is accurate, reliable, and regulatory-ready.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {accreditations.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.name} 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-brand-border"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/10 text-brand-success mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">{item.name}</h3>
                <p className="text-sm font-medium text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link 
            href="/accreditations"
            className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
          >
            View All Accreditations
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
