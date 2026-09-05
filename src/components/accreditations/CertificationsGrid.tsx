"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

interface Cert {
  _id: string;
  authority: string;
  title: string;
  certificateNo: string;
  logoUrl: string;
  imageUrl: string;
}

export default function CertificationsGrid({ initialCertifications = [] }: { initialCertifications?: Cert[] }) {
  const [zoomImages, setZoomImages] = useState<string[]>([]);
  const [zoomTitle, setZoomTitle] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleZoom = (imageSrc: string, title: string) => {
    setZoomImages([imageSrc]);
    setZoomTitle(title);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <section className="bg-brand-grey py-24 border-y border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {initialCertifications.map((cert) => {
              return (
                <div 
                  key={cert._id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-border transition-all hover:shadow-xl hover:shadow-brand-primary/10 hover:ring-brand-primary/30"
                >
                  <div className="border-b border-brand-border bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Render Logo */}
                    <div className="relative flex h-24 w-32 sm:h-28 sm:w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {cert.logoUrl ? (
                        <Image 
                          src={cert.logoUrl} 
                          alt={`${cert.authority} Logo`} 
                          fill 
                          className="object-contain p-3"
                        />
                      ) : (
                        <span className="text-xs text-slate-400">No Logo</span>
                      )}
                    </div>
                    
                    <div className="pt-1 flex-1">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        {cert.authority}
                      </h3>
                      <p className="mt-1 text-2xl font-bold text-brand-dark">
                        {cert.title}
                      </p>
                      {cert.certificateNo && (
                        <p className="mt-2 inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/20">
                          {cert.certificateNo}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => cert.imageUrl && handleZoom(cert.imageUrl, cert.authority)}
                    className="relative aspect-[4/3] w-full bg-slate-100 cursor-zoom-in group overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  >
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#14B2F0 2px, transparent 2px)", backgroundSize: "20px 20px" }}></div>
                    
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-8">
                      {cert.imageUrl ? (
                        <Image 
                          src={cert.imageUrl} 
                          alt={`${cert.authority} Certificate`}
                          width={600}
                          height={600}
                          className="h-full w-full object-contain shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-sm transition-transform duration-500 scale-95 group-hover:scale-100"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-slate-400">
                          <FileText className="h-10 w-10 mb-2 opacity-50" />
                          <p className="text-sm font-medium">Missing Certificate Image</p>
                        </div>
                      )}
                    </div>

                    {cert.imageUrl && (
                      <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                        <span className="text-white font-bold text-sm tracking-wider uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl">
                          Tap to View
                        </span>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      <Lightbox
        isOpen={isLightboxOpen}
        images={zoomImages}
        initialIndex={0}
        onClose={() => setIsLightboxOpen(false)}
        title={zoomTitle}
      />
    </>
  );
}
