import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | CLS Private Limited",
  description: "View our state-of-the-art analytical testing facilities.",
};

const galleryCategories = [
  {
    id: "facility-infrastructure",
    title: "Facility Infrastructure",
    description: "Explore our specialized laboratory rooms and workspaces.",
    showLabels: true,
    images: [
      { src: "/gallery/Rooms/1.GC-MS-MS ROOM.JPG", alt: "GC-MS-MS Room", colSpan: "sm:col-span-12 lg:col-span-8" },
      { src: "/gallery/Rooms/2.LC-MS-MS ROOM.JPG", alt: "LC-MS-MS Room", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/Rooms/3.ICP-MS ROOM.JPG", alt: "ICP-MS Room", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/Rooms/4.SAMPLE STORE ROOM.JPG", alt: "Sample Store Room", colSpan: "sm:col-span-12 lg:col-span-4" },
      { src: "/gallery/Rooms/5.CHEMICAL STORE ROOM.JPG", alt: "Chemical Store Room", colSpan: "sm:col-span-12 lg:col-span-4" },
      { src: "/gallery/Rooms/6.DOCUMENT ARCHIVAL ROOM.JPG", alt: "Document Archival Room", colSpan: "sm:col-span-12 lg:col-span-4" },
      { src: "/gallery/Rooms/7.BALANCE ROOM.JPG", alt: "Balance Room", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/Rooms/8.SERVER ROOM.JPG", alt: "Server Room", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/Rooms/9.MEETING ROOM.JPG", alt: "Meeting Room", colSpan: "sm:col-span-12 lg:col-span-8" },
      { src: "/gallery/Rooms/10.GAS ROOM.JPG", alt: "Gas Room", colSpan: "sm:col-span-6 lg:col-span-6" },
      { src: "/gallery/Rooms/11.WORKING AREA.JPG", alt: "Working Area", colSpan: "sm:col-span-6 lg:col-span-6" },
    ]
  },
  {
    id: "cls-family",
    title: "The CLS Family",
    description: "Our dedicated team of expert scientists and professionals.",
    showLabels: false,
    images: [
      { src: "/gallery/CLS FAMILY.JPG", alt: "CLS Family", colSpan: "sm:col-span-12 lg:col-span-8 lg:col-start-3" },
    ]
  },
  {
    id: "analytical-operations",
    title: "Analytical Operations",
    description: "State-of-the-art analytical equipment and processes.",
    showLabels: false,
    images: [
      { src: "/gallery/1.jpg", alt: "Analytical Operations", colSpan: "sm:col-span-12 lg:col-span-8" },
      { src: "/gallery/2.jpg", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/4.jpg", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-6" },
      { src: "/gallery/5.jpg", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-6" },
      { src: "/gallery/DSC04023.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04028.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04069.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04084.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04099.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04189.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04213.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04237.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04248.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04273.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04295.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04300.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04437.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04465.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04652.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04717.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04730.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
      { src: "/gallery/DSC04734.JPG", alt: "Analytical Operations", colSpan: "sm:col-span-6 lg:col-span-4" },
    ]
  }
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
            Our Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Take a glimpse into our NABL accredited and US FDA inspected laboratory, equipped with state-of-the-art analytical instrumentation and manned by expert scientists.
          </p>
        </div>

        <div className="space-y-24">
          {galleryCategories.map((category) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-brand-dark">{category.title}</h2>
                <p className="mt-2 text-slate-500">{category.description}</p>
              </div>

              {/* Gallery Grid (Bento Box Style) */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                {category.images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl flex flex-col ${img.colSpan}`}
                  >
                    <div className={`relative w-full overflow-hidden ${category.id === "cls-family" ? "aspect-[16/9] lg:h-96" : "aspect-[4/3] lg:aspect-auto lg:h-72"}`}>
                      {/* Fallback styling for before images are added */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                        <span>Waiting for Image...</span>
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
                    
                    {/* Only show labels if the category dictates it */}
                    {category.showLabels && (
                      <div className="relative z-20 bg-white px-5 py-4 border-t border-slate-100 mt-auto">
                        <p className="font-bold text-slate-700 tracking-wide text-sm">{img.alt}</p>
                      </div>
                    )}
                  </div>
                ))}
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
