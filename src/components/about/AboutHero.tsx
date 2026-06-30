import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-brand-accent"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              About Us
            </span>
            <div className="h-px w-8 bg-brand-accent"></div>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
            Precision.<br />
            Quality.<br />
            Integrity.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Established in 2019, Cephas Life Sciences (CLS) Private Limited provides
            specialized analytical and research services for the global pharmaceutical
            and medical device industries.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-primary px-8 py-4 text-base font-semibold text-brand-dark shadow-lg shadow-brand-primary/20 transition-all hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
