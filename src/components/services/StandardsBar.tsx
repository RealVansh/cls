const standards = [
  "ICH Q2", "ICH Q3D", "ICH M7 (R1)", "USP", "EP", "BP", "JP", "IP",
  "FCC", "ACS", "ISO/IEC 17025", "ISO 10993-7", "US FDA", "EMA", "CDSCO",
];

export default function StandardsBar() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Standards & Compliance
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Every test we perform adheres to globally recognized regulatory frameworks.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {standards.map((standard, index) => (
            <span
              key={index}
              className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent"
            >
              {standard}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
