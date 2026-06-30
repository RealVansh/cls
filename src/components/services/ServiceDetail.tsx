import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, Scale, LayoutGrid } from "lucide-react";
import type { ServiceData } from "./servicesData";

interface ServiceDetailProps {
  service: ServiceData;
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const Icon = service.icon;
  const isAlt = index % 2 !== 0;

  return (
    <section
      id={service.id}
      className={`pt-12 pb-28 scroll-mt-24 ${isAlt ? "bg-[#f8f9fb]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ← Back to Services */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          All Services
        </Link>

        {/* ── Hero Strip ── */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl leading-tight">
            {service.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 leading-relaxed">
            {service.tagline}
          </p>
          <div className="mt-8">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group inline-flex items-center gap-3 bg-brand-primary text-brand-dark px-8 py-4 rounded-lg text-sm font-bold tracking-wide shadow-lg shadow-brand-primary/25 transition-all hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Two-Column: Narrative + Sidebar ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* LEFT — Narrative */}
          <div className="lg:col-span-7 space-y-8">

            {/* The Challenge */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
                  The Challenge
                </p>
              </div>
              <p className="text-[15px] leading-[1.85] text-slate-600">
                {service.businessChallenge}
              </p>
            </div>

            {/* Our Approach */}
            <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.03] p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-2 w-2 rounded-full bg-brand-primary" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                  Our Approach
                </p>
              </div>
              <p className="text-[15px] leading-[1.85] text-slate-600">
                {service.clsSolution}
              </p>
            </div>

            {/* Why It Matters — Benefits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500">
                  Why It Matters
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-primary" />
                    <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Metadata Sidebar */}
          <div className="lg:col-span-5 space-y-10 lg:pl-8 lg:border-l lg:border-slate-200">

            {/* Applications */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <LayoutGrid className="h-4 w-4 text-brand-accent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Applications
                </p>
              </div>
              <ul className="space-y-3.5">
                {service.applications.map((app, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-slate-600"
                  >
                    <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-100" />

            {/* Standards */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Scale className="h-4 w-4 text-brand-accent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Regulatory Standards
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.standards.map((standard, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3.5 py-1.5 text-[12px] font-semibold text-brand-primary"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Equipment */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="h-4 w-4 text-brand-accent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Instrumentation
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.equipment.map((equip, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-brand-dark px-3.5 py-1.5 text-[12px] font-medium text-white"
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
