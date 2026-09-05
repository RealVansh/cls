"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Building } from "lucide-react";

type Category = "drugs-control" | "nabl" | "usfda";

interface Milestone {
  _id?: string;
  year: number | string;
  month: string;
  title: string;
  category: Category;
  description?: string;
}

const categoryConfig: Record<string, any> = {
  "drugs-control": {
    color: "text-blue-500",
    bg: "bg-blue-500",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    icon: Building,
  },
  nabl: {
    color: "text-brand-primary",
    bg: "bg-brand-primary",
    lightBg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
    icon: Award,
  },
  usfda: {
    color: "text-emerald-500",
    bg: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: ShieldCheck,
  },
};

export default function MilestonesTimeline({ initialMilestones = [] }: { initialMilestones?: Milestone[] }) {
  // Group milestones by year for a cleaner display
  const groupedMilestones = initialMilestones.reduce((acc, milestone) => {
    const year = Number(milestone.year);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(milestone);
    return acc;
  }, {} as Record<number, Milestone[]>);

  const years = Object.keys(groupedMilestones).map(Number).sort((a, b) => a - b);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold leading-7 text-brand-primary uppercase tracking-widest">Our Journey</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Milestones & Achievements</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A proven track record of rapid regulatory compliance and global accreditations.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-slate-700">Drugs Control & Licensing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-brand-primary" />
            <span className="text-sm font-medium text-slate-700">NABL / ISO:17025</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-slate-700">USFDA</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Central Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {years.map((year, yearIndex) => {
              const yearMilestones = groupedMilestones[year];
              const isEven = yearIndex % 2 === 0;

              return (
                <div key={year} className="relative">
                  {/* Year Marker */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 flex h-8 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-brand-dark shadow-md ring-4 ring-slate-50 z-10"
                  >
                    <span className="text-sm font-bold text-white">{year}</span>
                  </motion.div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* For desktop, we place content either on left or right depending on year index */}
                    <div className={!isEven ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                      <div className={`space-y-4 ${!isEven ? "pl-12 md:pl-8" : "pl-12 md:pl-0 md:pr-8"}`}>
                        {yearMilestones.map((milestone, idx) => {
                          const config = categoryConfig[milestone.category] || categoryConfig["nabl"];
                          const Icon = config.icon;

                          return (
                            <motion.div
                              key={milestone._id || `${milestone.year}-${milestone.month}-${idx}`}
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className={`relative flex flex-col gap-1.5 rounded-xl border-2 ${config.border} bg-white p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:border-slate-400 hover:scale-[1.02]`}
                            >
                              <div className={`flex items-center gap-4 ${isEven ? "md:flex-row-reverse md:justify-start" : ""}`}>
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.lightBg} ${config.color}`}>
                                  <Icon className="h-5 w-5" />
                                </div>
                                <span className={`text-sm font-bold tracking-widest ${config.color} uppercase`}>
                                  {milestone.month}
                                </span>
                              </div>
                              
                              <h3 className="text-lg font-bold text-brand-dark mt-2">
                                {milestone.title}
                              </h3>
                              
                              {milestone.description && (
                                <p className="text-sm text-slate-500">
                                  {milestone.description}
                                </p>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
