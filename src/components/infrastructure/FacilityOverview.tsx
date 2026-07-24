import Image from "next/image";
import { ShieldCheck, Cctv, Lock, Building2 } from "lucide-react";

const features = [
  {
    title: "TICEL Bio Park",
    description: "Located at Chennai's leading Life Science parks — a hub for innovation in life sciences.",
    icon: Building2,
  },
  {
    title: "24/7 CCTV Surveillance",
    description: "Round-the-clock monitoring ensures the highest level of security for all samples and data.",
    icon: Cctv,
  },
  {
    title: "Strict Access Controls",
    description: "Controlled laboratory entry protocols to protect intellectual property and ensure sample integrity.",
    icon: Lock,
  },
  {
    title: "Data Integrity",
    description: "Robust electronic systems compliant with 21 CFR Part 11 for tamper-proof data management.",
    icon: ShieldCheck,
  },
];

export default function FacilityOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Our Facility & Infrastructure
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand-accent rounded-full" />

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              CLS Private Limited operates from Modules 313 & 314, Phase I, at 
              <strong className="text-brand-dark"> TICEL Bio Park Limited</strong> — Chennai&apos;s 
              premier Life Science parks. Our facility is designed to deliver world-class analytical 
              results in a secure, controlled environment.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-dark">{feature.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1587854692152-cbe668df531b?q=80&w=2070&auto=format&fit=crop"
              alt="CLS Laboratory Facility at TICEL Bio Park"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
