export default function AboutTrustStrip() {
  const items = [
    "NABL Accredited",
    "Pharmaceutical Testing",
    "Medical Device Testing",
    "TICEL Bio Park, Chennai",
  ];

  return (
    <section className="border-y border-brand-border bg-brand-grey py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-x-8 md:gap-x-12">
              <span className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="hidden h-4 w-px bg-slate-300 md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
