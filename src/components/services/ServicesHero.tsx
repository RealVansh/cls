import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-brand-accent"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Our Services
            </span>
            <div className="h-px w-8 bg-brand-accent"></div>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
            Specialized<br />
            Analytical<br />
            Solutions
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Cost-effective, regulatory-compliant testing services helping pharmaceutical 
            and medical device companies overcome unique analytical challenges.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-4 text-base font-semibold text-brand-dark shadow-lg shadow-brand-primary/20 transition-all hover:opacity-90"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
