"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileSearch, Building } from "lucide-react";

type Category = "drugs-control" | "nabl" | "usfda";

interface Milestone {
  year: number;
  month: string;
  title: string;
  category: Category;
  description?: string;
}

const milestones: Milestone[] = [
  {
    year: 2020,
    month: "Oct",
    title: "Drugs Control Licensing Authority - Inspection",
    category: "drugs-control",
  },
  {
    year: 2021,
    month: "Jan",
    title: "Drug License in Form 37",
    category: "drugs-control",
  },
  {
    year: 2021,
    month: "Feb",
    title: "ISO/IEC 17025:2017 NABL Accreditation",
    category: "nabl",
  },
  {
    year: 2021,
    month: "Dec",
    title: "USFDA Registration (DUNS)",
    category: "usfda",
  },
  {
    year: 2022,
    month: "Mar",
    title: "NABL Surveillance Completed",
    category: "nabl",
  },
  {
    year: 2023,
    month: "Feb",
    title: "NABL 1st Renewal Accreditation",
    category: "nabl",
  },
  {
    year: 2023,
    month: "May",
    title: "USFDA Inspection & EIR Received",
    category: "usfda",
    description: "EIR received in July.",
  },
  {
    year: 2024,
    month: "Mar",
    title: "Drugs Control (RBI) Joint Inspection",
    category: "drugs-control",
  },
  {
    year: 2024,
    month: "May",
    title: "Medical Device Form MD 40",
    category: "drugs-control",
  },
  {
    year: 2024,
    month: "Dec",
    title: "NABL 2nd Renewal Audited",
    category: "nabl",
  },
  {
    year: 2025,
    month: "Feb-May",
    title: "USFDA Inspection & EIR Received",
    category: "usfda",
    description: "Inspection conducted in February, EIR received in May.",
  },
  {
    year: 2026,
    month: "Jan",
    title: "NABL Onsite Surveillance",
    category: "nabl",
  },
];

const categoryConfig = {
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

export default function MilestonesTimeline() {
  // Group milestones by year for a cleaner display
  const groupedMilestones = milestones.reduce((acc, milestone) => {
    if (!acc[milestone.year]) {
      acc[milestone.year] = [];
    }
    acc[milestone.year].push(milestone);
    return acc;
  }, {} as Record<number, Milestone[]>);

  const years = Object.keys(groupedMilestones).map(Number).sort((a, b) => a - b);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-base font-semibold leading-7 text-brand-primary uppercase tracking-widest">Our Journey</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Milestones & Achievements</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A proven track record of rapid regulatory compliance and global accreditations.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-slate-600">Drugs Control & Licensing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-brand-primary" />
            <span className="text-sm font-medium text-slate-600">NABL / ISO:17025</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-slate-600">USFDA</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Central Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-16">
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
                    className="absolute left-4 md:left-1/2 flex h-8 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-brand-dark shadow-sm ring-4 ring-white z-10"
                  >
                    <span className="text-sm font-bold text-white">{year}</span>
                  </motion.div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* For desktop, we place content either on left or right depending on year index */}
                    <div className={!isEven ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                      <div className={`space-y-6 ${!isEven ? "pl-12 md:pl-8" : "pl-12 md:pl-0 md:pr-8"}`}>
                        {yearMilestones.map((milestone, idx) => {
                          const config = categoryConfig[milestone.category];
                          const Icon = config.icon;

                          return (
                            <motion.div
                              key={`${milestone.year}-${milestone.month}-${idx}`}
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className={`relative flex flex-col gap-2 rounded-2xl border ${config.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
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
