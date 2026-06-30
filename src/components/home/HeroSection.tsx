"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col bg-white lg:flex-row">
      {/* Left Content Half */}
      <div className="flex w-full flex-col justify-center px-4 py-20 lg:w-[60%] lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-accent"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              CLS Private Limited
            </span>
          </div>
          
          <h1 className="text-balance text-6xl font-bold leading-tight tracking-tight text-brand-dark md:text-7xl lg:text-[5rem]">
            Precision <br />
            <span className="text-brand-primary">Analytical</span> <br />
            Science.
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Specialized analytical and research services for pharmaceuticals and medical devices. LC-MS/MS, ICP-MS, and cutting-edge technology for regulatory compliance.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="group flex items-center justify-center gap-2 rounded-md bg-brand-primary px-8 py-4 text-base font-semibold text-brand-dark shadow-lg shadow-brand-primary/20 transition-all hover:opacity-90"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-brand-dark transition-colors hover:border-brand-primary hover:bg-slate-50"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Image Half */}
      <div className="relative h-96 w-full lg:h-auto lg:w-[40%]">
        <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply z-10" />
        <Image
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Analytical Laboratory"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-brand-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
