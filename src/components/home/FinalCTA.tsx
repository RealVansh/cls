import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Need Analytical Testing?
        </h2>
        <p className="mt-6 text-xl text-blue-100">
          Talk to our experts today to discuss your project requirements and timelines.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-bold text-brand-primary shadow-xl transition-all hover:bg-slate-100 hover:shadow-2xl hover:-translate-y-1"
          >
            Request Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
