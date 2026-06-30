import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Scale } from "lucide-react";
import type { ServiceData } from "./servicesData";

interface ServiceDetailProps {
  service: ServiceData;
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const Icon = service.icon;
  const isGrey = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-24 ${isGrey ? "bg-brand-grey" : "bg-white"} scroll-mt-32`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              {service.title}
            </h2>
            <p className="mt-3 text-xl font-medium text-slate-500">
              {service.tagline}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-dark shadow-md transition-all hover:opacity-90"
          >
            {service.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Challenge + Solution */}
          <div className="space-y-10">
            {/* Business Challenge */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-400">
                Business Challenge
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                {service.businessChallenge}
              </p>
            </div>

            {/* CLS Solution */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-success">
                CLS Solution
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                {service.clsSolution}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Key Benefits
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-success" />
                    <span className="text-sm font-medium text-brand-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Applications + Standards + Equipment */}
          <div className="space-y-10">
            {/* Applications */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Applications
              </p>
              <ul className="space-y-2">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Standards */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Scale className="h-4 w-4 text-slate-400" />
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Regulatory Standards
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.standards.map((standard, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-xs font-semibold text-brand-primary"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-slate-400" />
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Equipment Used
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.equipment.map((equip, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {equip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
