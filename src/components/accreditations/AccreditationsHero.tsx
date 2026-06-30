import { ShieldCheck } from "lucide-react";

export default function AccreditationsHero() {
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-brand-primary"></div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Quality Assurance</span>
            </div>
            <div className="h-px w-8 bg-brand-primary"></div>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Global Regulatory<br />Compliance
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Our analytical excellence is backed by the world's most stringent regulatory authorities. We maintain the highest standards of data integrity and laboratory practice.
          </p>
        </div>
      </div>
    </section>
  );
}
