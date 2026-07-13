import { MessageSquare, PenTool, FlaskConical, FileCheck2, HeadphonesIcon } from "lucide-react";

const steps = [
  { title: "Consultation", description: "We begin by understanding your product, regulatory landscape, and specific analytical challenges. Our scientists work closely with you to define a clear scope of work and timeline.", icon: MessageSquare },
  { title: "Study Design", description: "A detailed analytical plan is developed — tailored to your product matrix, target analytes, and regulatory requirements. Every protocol is reviewed before execution begins.", icon: PenTool },
  { title: "Sample Analysis", description: "Our team executes validated methods using advanced instrumentation (LC-MS/MS, ICP-MS, GC-MS) under strict GLP conditions, ensuring data integrity at every step.", icon: FlaskConical },
  { title: "Validated Report", description: "You receive comprehensive, QA-reviewed documentation that is regulatory-ready — formatted for FDA, EMA, CDSCO, or any other authority your submission requires.", icon: FileCheck2 },
  { title: "Technical Support", description: "Our relationship doesn't end at delivery. We provide ongoing technical support for regulatory queries, audits, method transfers, and any follow-up studies.", icon: HeadphonesIcon },
];

export default function ServicesProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
            How We Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A structured, transparent engagement from initial consultation to ongoing support.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title} className="relative flex gap-8 pb-16 last:pb-0">
                
                {/* Left: Timeline Spine */}
                <div className="flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary bg-white shadow-md shadow-brand-primary/10">
                    <span className="text-lg font-bold text-brand-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Connecting Line */}
                  {!isLast && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-primary/40 to-brand-primary/10" />
                  )}
                </div>

                {/* Right: Content Card */}
                <div className="group flex-1 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-sm transition-all hover:border-brand-primary/20 hover:bg-white hover:shadow-lg hover:shadow-brand-primary/5 sm:p-8 -mt-1">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-brand-primary/20 bg-white text-brand-primary transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Text */}
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {step.description}
                      </p>
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
