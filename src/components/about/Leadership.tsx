import Image from "next/image";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const milestones = [
  { year: "2019", label: "Founded at TICEL Bio Park, Chennai" },
  { year: "2020", label: "NABL Accreditation Achieved" },
  { year: "2021", label: "Expanded Analytical Capabilities" },
  { year: "2023", label: "100+ Projects Milestone" },
];

export default function Leadership() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Decades of pharmaceutical expertise driving every decision.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left — Portrait */}
          <div className="flex flex-col items-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-brand-border">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Dr. B Philip Ashok Karunakaran"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-brand-dark">
                Dr. B Philip Ashok Karunakaran
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-accent">
                Co-Founder & Director
              </p>
            </div>
          </div>

          {/* Right — Credentials & Timeline */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-dark">PhD in Pharmaceutical Quality Management</h4>
                  <p className="mt-1 text-sm text-slate-500">Deep academic foundation in pharmaceutical science and quality systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-dark">30+ Years in the Pharmaceutical Industry</h4>
                  <p className="mt-1 text-sm text-slate-500">Proven track record of supporting companies in realizing their goals and building successful teams.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-dark">Senior Management Leader</h4>
                  <p className="mt-1 text-sm text-slate-500">Has held senior management positions at companies of repute, playing significant roles throughout his career.</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 border-t border-brand-border pt-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Company Milestones
              </p>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-md bg-brand-primary text-xs font-bold text-brand-dark">
                      {milestone.year}
                    </div>
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-sm font-medium text-slate-600">{milestone.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
