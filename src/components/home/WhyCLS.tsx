"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Timer, BadgeDollarSign, Microscope, TrendingUp } from 'lucide-react';

const trustPoints = [
  {
    title: "Dynamic and Agile Operations",
    description:
      "Our lean, focused team structure allows us to adapt rapidly to your evolving project needs — no decision making, just swift, decisive action that keeps your timelines intact.",
    icon: Zap,
    stat: "24/7",
    statLabel: "Responsive",
  },
  {
    title: "Quick Turnaround Times",
    description:
      "Streamlined workflows and dedicated project management ensure rapid results without compromising quality — getting your critical data to you in a short time.",
    icon: Timer,
    stat: "",
    statLabel: "Faster Delivery",
  },
  {
    title: "Unmatched Cost-Effectiveness",
    description:
      "World-class analytical capabilities at competitive pricing. Our efficient operations and optimized processes translate to significant cost savings without any compromise on data quality.",
    icon: BadgeDollarSign,
    stat: "40%",
    statLabel: "Cost Savings",
  },
  {
    title: "State-of-the-Art Facility",
    description:
      "Purpose-built laboratory equipped with the latest Shimadzu LC-MS/MS, Agilent ICP-MS, and GC-MS/MS instrumentation — delivering data accuracy that meets the most stringent global standards.",
    icon: Microscope,
    stat: "7+",
    statLabel: "Advanced Systems",
  },
  {
    title: "Ability to Expand in a Very Short Time",
    description:
      "Our scalable infrastructure and agile team model means we can rapidly expand capacity to handle large-scale or multi-study projects — ensuring your growing needs are always met.",
    icon: TrendingUp,
    stat: "∞",
    statLabel: "Scalable",
  },
];

export default function WhyCLS() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionHeight =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionTop < 0 || sectionTop > sectionHeight) return;

      const progress = Math.min(Math.max(sectionTop / sectionHeight, 0), 1);
      const index = Math.min(
        Math.floor(progress * trustPoints.length),
        trustPoints.length - 1
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index: number) => {
    if (!sectionRef.current) return;
    const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const progress = index / trustPoints.length;
    const targetScrollY = sectionRef.current.offsetTop + progress * sectionHeight;

    window.scrollTo({
      top: targetScrollY + 5,
      behavior: "smooth",
    });
  };

  const progressPercent =
    ((activeIndex + 1) / trustPoints.length) * 100;

  return (
    <section
      ref={sectionRef}
      style={{ height: `${trustPoints.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header (Full Width) */}
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Pharmaceutical Companies Trust CLS
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left Column — Accordion + Progress */}
            <div className="lg:col-span-7">
              {/* Accordion with Progress Bar */}
              <div className="relative flex gap-8">
                {/* Vertical Progress Track */}
                <div className="relative hidden w-0.5 shrink-0 sm:block">
                  <div className="absolute inset-0 rounded-full bg-slate-200" />
                  <div
                    className="absolute left-0 top-0 w-full rounded-full bg-brand-primary transition-all duration-700 ease-out"
                    style={{ height: `${progressPercent}%` }}
                  />
                </div>

                {/* Items */}
                <div className="flex-1 space-y-1">
                  {trustPoints.map((point, index) => {
                    const isActive = activeIndex === index;
                    const isPast = index < activeIndex;

                    return (
                      <div
                        key={point.title}
                        onClick={() => handleItemClick(index)}
                        className="cursor-pointer"
                      >
                        <div
                          className={`rounded-xl px-5 py-4 transition-all duration-500 ${
                            isActive
                              ? "bg-slate-50"
                              : "bg-transparent hover:bg-slate-50/50"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
                                isActive
                                  ? "bg-brand-primary text-white scale-110 shadow-md shadow-brand-primary/20"
                                  : isPast
                                  ? "bg-brand-primary/20 text-brand-primary"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3
                              className={`text-lg font-semibold transition-all duration-500 ${
                                isActive
                                  ? "text-brand-dark"
                                  : isPast
                                  ? "text-slate-400"
                                  : "text-slate-300"
                              }`}
                            >
                              {point.title}
                            </h3>
                          </div>

                          {/* Expanding Description */}
                          <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${
                              isActive
                                ? "max-h-48 opacity-100 mt-4"
                                : "max-h-0 opacity-0 mt-0"
                            }`}
                          >
                            <div className="pl-12">
                              <p className="text-sm leading-relaxed text-slate-500">
                                {point.description}
                              </p>
                              
                              {/* Mobile Mini Badge */}
                              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 px-3 py-1.5 text-brand-primary lg:hidden">
                                <span className="text-sm font-bold">{point.stat}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/60">
                                  {point.statLabel}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column — Stat Card */}
            <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
              <div className="relative">
                {/* Glowing background ring */}
                <div className="absolute -inset-8 rounded-full bg-brand-primary/10 blur-3xl" />

                {/* Card */}
                <div className="relative flex h-72 w-72 flex-col items-center justify-center rounded-3xl border border-brand-primary/20 bg-brand-primary/10 p-8 shadow-2xl shadow-brand-primary/5 backdrop-blur-xl transition-all duration-700">
                  {trustPoints.map((point, index) => {
                    const Icon = point.icon;
                    const isActive = activeIndex === index;

                    return (
                      <div
                        key={point.title}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                          isActive
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-90 translate-y-4"
                        }`}
                      >
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
                          <Icon className="h-8 w-8" />
                        </div>
                        <span className="text-5xl font-bold text-brand-primary">
                          {point.stat}
                        </span>
                        <span className="mt-2 text-sm font-bold uppercase tracking-widest text-brand-dark">
                          {point.statLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Progress Indicator */}
          <div className="mt-12 flex items-center gap-3">
            {trustPoints.map((_, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-8 bg-brand-primary"
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
            <span className="ml-auto text-xs font-medium text-slate-400">
              {String(activeIndex + 1).padStart(2, "0")} / {String(trustPoints.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
