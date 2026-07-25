import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | CLS Private Limited",
  description: "View our state-of-the-art analytical testing facilities.",
};

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "CLS Laboratory Infrastructure", colSpan: "sm:col-span-12 lg:col-span-8" },
  { src: "/gallery/2.jpg", alt: "State-of-the-art Analytical Equipment", colSpan: "sm:col-span-6 lg:col-span-4" },
  { src: "/gallery/3.jpg", alt: "Scientists conducting analytical testing", colSpan: "sm:col-span-6 lg:col-span-4" },
  { src: "/gallery/4.jpg", alt: "Quality Control Operations at CLS", colSpan: "sm:col-span-12 lg:col-span-4" },
  { src: "/gallery/5.jpg", alt: "Mass Spectrometry Instrumentation", colSpan: "sm:col-span-12 lg:col-span-4" },
];

export default function GalleryPage() {
  return (
    <div className="bg-brand-grey min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-border">
            <Camera className="h-8 w-8 text-brand-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Our Facility & Infrastructure
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Take a glimpse into our NABL accredited and US FDA inspected laboratory, equipped with state-of-the-art analytical instrumentation and manned by expert scientists.
          </p>
        </div>

        {/* Gallery Grid (Bento Box Style) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all hover:shadow-xl ${img.colSpan}`}
            >
              <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-80">
                {/* Fallback styling for before images are added */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span>Waiting for Image {index + 1}...</span>
                </div>
                
                {/* Once the image exists, this will render over the fallback text */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="relative z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Dark overlay on hover with text */}
              <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-6">
                  <p className="font-semibold text-white">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-slate-400">
            * Images showcase actual laboratory operations and infrastructure at CLS Private Limited.
          </p>
        </div>
      </div>
    </div>
  );
}
