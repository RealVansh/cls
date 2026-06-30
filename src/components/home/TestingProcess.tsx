import { ArrowRight, PackageOpen, FlaskConical, SearchCheck, FileCheck2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Submit Sample",
    description: "Secure delivery and logged custody of your materials.",
    icon: PackageOpen,
  },
  {
    title: "Testing & Analysis",
    description: "Rigorous execution of validated analytical methods.",
    icon: FlaskConical,
  },
  {
    title: "Scientific Review",
    description: "Multi-level data integrity and quality assurance check.",
    icon: SearchCheck,
  },
  {
    title: "Validated Report",
    description: "Comprehensive, regulatory-ready documentation delivered.",
    icon: FileCheck2,
  },
];

export default function TestingProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Our Testing Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A streamlined, fully traceable workflow from sample receipt to final report.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden md:block" aria-hidden="true" />
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-100 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-brand-dark">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent font-bold text-white shadow-sm">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 rounded-md bg-brand-primary px-8 py-4 text-base font-semibold text-brand-dark shadow-md transition-colors hover:opacity-90"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
