import { Zap, Timer, BadgeDollarSign, Microscope, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Dynamic and Agile Operations",
    description: "Our lean, focused team structure allows us to adapt rapidly to your evolving project needs. Unlike large corporate laboratories bogged down by layers of approval, CLS operates with swift, decisive action.",
    evidence: "Dedicated project managers assigned within 24 hours of engagement.",
    icon: Zap,
  },
  {
    title: "Quick Turnaround Times",
    description: "Streamlined workflows, optimized sample preparation pipelines, and dedicated instrumentation mean your results are delivered faster — without ever compromising on data quality or regulatory compliance.",
    evidence: "Average turnaround 2× faster than comparable NABL-accredited labs.",
    icon: Timer,
  },
  {
    title: "Unmatched Cost-Effectiveness",
    description: "World-class analytical capabilities at competitive pricing. Our efficient operations, minimal overhead, and optimized processes translate directly to significant cost savings for your organization — making premium-quality testing accessible.",
    evidence: "Up to 40% cost savings compared to multinational CRO pricing.",
    icon: BadgeDollarSign,
  },
  {
    title: "State-of-the-Art Facility with Latest Equipment",
    description: "Our purpose-built laboratory houses the latest LC-MS/MS (8045, 8060NX, 8060RX), ICP-MS (7800), and GC-MS/MS-FID (8890/7000D) systems. Every instrument is maintained under strict qualification protocols to deliver data accuracy that meets the most stringent global standards.",
    evidence: "7+ advanced analytical systems maintained under OQ/PQ protocols.",
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

        <div className="space-y-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-grey p-8 transition-all hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  {/* Number + Icon */}
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                    <span className="text-4xl font-black text-brand-primary/15 sm:text-5xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand-primary/20 bg-white text-brand-primary transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-dark sm:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {reason.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                      <span className="text-sm font-semibold text-brand-primary">
                        {reason.evidence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
