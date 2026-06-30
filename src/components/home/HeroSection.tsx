"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden bg-[#0a0f16]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Modern Analytical Laboratory"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Gradient Overlay: Solid dark on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f16] via-[#0a0f16]/90 to-[#0a0f16]/10 z-10" />
      </div>

      {/* Left-Aligned Content */}
      <div className="relative z-20 flex w-full flex-col px-4 py-20 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-balance text-6xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
            Precision <br />
            Analytical <br />
            <span className="text-brand-primary">Science.</span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Specialized analytical and research services for pharmaceuticals and medical devices. LC-MS/MS, ICP-MS, and cutting-edge technology for regulatory compliance.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="group flex items-center justify-center gap-2 bg-white px-8 py-4 text-base font-semibold text-[#0a0f16] transition-all hover:bg-slate-100"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
