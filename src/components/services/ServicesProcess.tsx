import { MessageSquare, PenTool, FlaskConical, FileCheck2, HeadphonesIcon } from "lucide-react";

const steps = [
  { title: "Consultation", description: "Understand your requirements and define the scope of work.", icon: MessageSquare },
  { title: "Study Design", description: "Develop a detailed analytical plan tailored to your product.", icon: PenTool },
  { title: "Sample Analysis", description: "Execute validated methods using advanced instrumentation.", icon: FlaskConical },
  { title: "Validated Report", description: "Deliver regulatory-ready, QA-reviewed documentation.", icon: FileCheck2 },
  { title: "Technical Support", description: "Ongoing support for regulatory queries and follow-ups.", icon: HeadphonesIcon },
];

export default function ServicesProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A structured, transparent engagement from initial consultation to ongoing support.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-200 hidden lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-100 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-brand-dark">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 -mt-1 -mr-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white shadow-sm lg:right-auto lg:left-0 lg:-ml-1">
                    {index + 1}
                  </div>

                  <h3 className="text-base font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
