import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "./servicesData";

export default function ServicesGrid() {
  return (
    <section className="bg-brand-grey py-24 border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Seven specialized analytical disciplines, all from a single NABL-accredited laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 hover:ring-brand-primary/20"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-brand-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-dark">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
                  {service.tagline}
                </p>
                <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-accent">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
