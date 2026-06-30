import { CheckCircle2, Zap, Users, ShieldCheck, Activity, Target } from "lucide-react";

const features = [
  {
    title: "Regulatory Compliance",
    description: "Strict adherence to FDA, EMA, and ICH guidelines for all analytical procedures.",
    icon: ShieldCheck,
  },
  {
    title: "Scientific Accuracy",
    description: "Uncompromising precision powered by industry-leading analytical instruments.",
    icon: Target,
  },
  {
    title: "Confidential Testing",
    description: "Robust data integrity protocols ensuring your IP remains completely secure.",
    icon: CheckCircle2,
  },
];

const secondaryFeatures = [
  { title: "Advanced Analytical Instruments", icon: Activity },
  { title: "Experienced Scientists", icon: Users },
  { title: "Fast Turnaround Time", icon: Zap },
];

export default function WhyCLS() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Why Pharmaceutical Companies Trust CLS
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Delivering the critical data you need to bring safe, effective products to market.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col rounded-2xl bg-brand-grey p-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-success/10 text-brand-success">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {secondaryFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className="flex items-center gap-4 rounded-xl border border-brand-border p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-brand-dark">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
