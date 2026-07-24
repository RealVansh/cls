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
  { value: 100, suffix: "+", label: "Years Combined Experience" },
  { value: 200, suffix: "+", label: "Projects Supported" },
  { value: 3, suffix: "", label: "Industry Sectors" },
  { value: 50, suffix: "+", label: "Customers Across India" },
  { value: 15, suffix: "+", label: "Customers from TN" },
  { value: 10, suffix: "+", label: "Global Customers" },
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

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-0 sm:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-8">
              {/* Vertical divider for columns 2 and 3 */}
              {index % 3 !== 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-slate-200" />
              )}
              <div className="text-5xl font-bold tracking-tight text-brand-primary sm:text-6xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
