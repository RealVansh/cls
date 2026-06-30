import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-white pt-16 pb-12 lg:pt-20 lg:pb-16">
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
        </div>
      </div>
    </section>
  );
}
