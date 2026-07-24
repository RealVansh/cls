"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
        
        // Easing function (easeOutExpo)
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
    <span ref={ref} className="font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { label: "ISO/IEC Certified", value: "17025", type: "text" },
  { label: "GMP Compliant", value: "100%", type: "text" },
  { label: "Years Experience", value: 7, suffix: "+", type: "number" },
  { label: "Projects Delivered", value: 200, suffix: "+", type: "number" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-brand-border bg-brand-grey py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 md:divide-x md:divide-slate-200">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-3xl font-bold tracking-tight text-brand-primary">
                {stat.type === "number" ? (
                  <CountUp end={stat.value as number} suffix={stat.suffix} />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
