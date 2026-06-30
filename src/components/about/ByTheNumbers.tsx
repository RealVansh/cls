"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 30, suffix: "+", label: "Years Combined Experience" },
  { value: 100, suffix: "+", label: "Projects Supported" },
  { value: 3, suffix: "", label: "Industry Sectors" },
];

export default function ByTheNumbers() {
  return (
    <section className="bg-brand-grey py-20 border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Our Impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-8">
              <div className="text-5xl font-bold tracking-tight text-brand-primary sm:text-6xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-brand-success/30 bg-brand-success/5 px-6 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-brand-success" />
            <span className="text-sm font-semibold text-brand-success">NABL Accredited Laboratory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
