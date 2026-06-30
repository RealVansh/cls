import { CheckCircle2, Lock, FileSearch } from "lucide-react";

export default function QualityCommitment() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Uncompromising Data Integrity
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our accreditations are sustained by rigorous internal quality systems built on ALCOA+ principles and 21 CFR Part 11 compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-dark">ALCOA+ Principles</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Every data point generated in our laboratory is Attributable, Legible, Contemporaneous, Original, and Accurate — guaranteeing complete traceability for regulatory audits.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-dark">21 CFR Part 11</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              All advanced instrumentation operates on standalone or networked software with strict audit trails, electronic signatures, and multi-tier access controls.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <FileSearch className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-dark">Independent QA</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Our autonomous Quality Assurance unit conducts continuous internal audits, protocol reviews, and data verification before any report is finalized and released.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
