import { Zap, Timer, BadgeDollarSign, Microscope } from "lucide-react";

const reasons = [
  {
    title: "Dynamic and Agile Operations",
    description: "Our lean, focused team structure allows us to adapt rapidly to your evolving project needs. Unlike large corporate laboratories bogged down by layers of approval, CLS operates with swift, decisive action.",
    icon: Zap,
  },
  {
    title: "Quick Turnaround Times",
    description: "Streamlined workflows, optimized sample preparation pipelines, and dedicated instrumentation mean your results are delivered faster — without ever compromising on data quality or regulatory compliance.",
    icon: Timer,
  },
  {
    title: "Unmatched Cost-Effectiveness",
    description: "World-class analytical capabilities at competitive pricing. Our efficient operations, minimal overhead, and optimized processes translate directly to significant cost savings for your organization — making premium-quality testing accessible.",
    icon: BadgeDollarSign,
  },
  {
    title: "State-of-the-Art Facility with Latest Equipment",
    description: "Our purpose-built laboratory houses the latest LC-MS/MS, ICP-MS, and GC-MS/MS-FID systems. Every instrument is maintained under strict qualification protocols to deliver data accuracy that meets stringent global standards.",
    icon: Microscope,
  }
];

export default function WhyCLSDetailed() {
  return (
    <section className="bg-white py-24 border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
            The CLS Advantage
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Why Choose CLS
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four core advantages that make CLS the preferred analytical partner for pharmaceutical and medical device companies.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-grey p-8 transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 sm:p-12"
              >
                {/* Large Background Number Watermark */}
                <span className="absolute -bottom-6 -right-4 text-[160px] font-black leading-none text-brand-dark/5 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-primary/5 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-brand-dark">
                    {reason.title}
                  </h3>
                  
                  <p className="text-base leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
