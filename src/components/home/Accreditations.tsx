import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function Accreditations() {
  return (
    <section className="bg-white py-10 border-y border-brand-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
        
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Accreditations & Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base max-w-xl">
            Our laboratory operates under strict global quality standards, ensuring every result is accurate, reliable, and regulatory-ready.
          </p>
        </div>

        {/* Right: Badges & Link */}
        <div className="flex flex-col items-center gap-8 sm:flex-row lg:items-center">
          
          {/* Subtle Badges */}
          <div className="flex flex-wrap justify-center gap-6 border-slate-200 sm:border-r sm:pr-8">
            <div className="flex items-center gap-2 text-brand-dark">
              <Award className="h-6 w-6 text-brand-primary" />
              <span className="text-sm font-semibold tracking-wide">NABL Accredited</span>
            </div>
            <div className="flex items-center gap-2 text-brand-dark">
              <CheckCircle className="h-6 w-6 text-brand-primary" />
              <span className="text-sm font-semibold tracking-wide">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 text-brand-dark">
              <ShieldCheck className="h-6 w-6 text-brand-primary" />
              <span className="text-sm font-semibold tracking-wide">FDA Compliant</span>
            </div>
          </div>
          
          {/* Call to Action */}
          <Link 
            href="/accreditations"
            className="group inline-flex shrink-0 items-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
