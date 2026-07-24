import Image from "next/image";
import { GraduationCap, Award, Briefcase, Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-primary">
            Our People
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Meet Our Leadership
          </h2>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand-primary/5 ring-1 ring-brand-border">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Image Area */}
            <div className="flex flex-col bg-white md:col-span-5 border-r border-brand-border">
              <div className="relative h-[400px] w-full md:h-full md:min-h-[450px]">
                <Image
                  src="/dr.philip.png"
                  alt="Dr. B Philip Ashok Karunakaran"
                  fill
                  className="object-contain object-center p-8"
                />
              </div>
              {/* Name Plate */}
              <div className="bg-brand-dark px-8 py-6 text-center text-white">
                <h3 className="text-xl font-bold">
                  Dr. B Philip Ashok
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-wider text-brand-accent uppercase">
                  Co-Founder & Director
                </p>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col justify-center p-8 sm:p-12 md:col-span-7">
              <Quote className="mb-6 h-10 w-10 text-brand-primary/20" />
              <p className="mb-10 text-lg font-medium leading-relaxed text-slate-700">
                With over three decades of distinguished experience in pharmaceutical sciences, our leadership is committed to delivering uncompromised analytical excellence, fostering global regulatory compliance, and building a foundation of absolute trust.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-md hover:shadow-brand-primary/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">PhD in Pharmaceutical Quality Management</h4>
                    <p className="mt-1 text-sm text-slate-500">Extensive expertise in pharmaceutical science and quality systems.</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-md hover:shadow-brand-primary/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">30+ Years Industry Experience</h4>
                    <p className="mt-1 text-sm text-slate-500">Proven track record of building successful teams and achieving corporate goals.</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-md hover:shadow-brand-primary/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">Senior Management Leader</h4>
                    <p className="mt-1 text-sm text-slate-500">Held key strategic positions across highly reputed global organizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
