import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
import { client } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Gallery | CLS Private Limited",
  description: "View our state-of-the-art analytical testing facilities.",
};

// Revalidate the page data every 30 seconds
export const revalidate = 30;

// The GROQ Query to fetch our categories and images from the cloud
const GET_GALLERY_QUERY = `
  *[_type == "galleryCategory"] | order(order asc) {
    _id,
    title,
    description,
    showLabels,
    galleryImages[]{
      alt,
      "filename": asset->originalFilename,
      "url": asset->url
    }
  }
`;

export default async function GalleryPage() {
  // Fetch data from Sanity
  const galleryCategories = await client.fetch(GET_GALLERY_QUERY);

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
          {galleryCategories.map((category: any) => (
            <div key={category._id}>
              {/* Category Header */}
              <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-brand-dark">{category.title}</h2>
                {category.description && (
                  <p className="mt-2 text-slate-500">{category.description}</p>
                )}
              </div>

              {/* Gallery Grid - Uniform 3 Column Layout */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.galleryImages?.map((img: any, index: number) => {
                  // If 'alt' is empty, grab the filename and strip the extension (.jpg, .png)
                  const label = img.alt || (img.filename ? img.filename.replace(/\.[^/.]+$/, "") : "Untitled Image");

                  return (
                    <div 
                      key={index} 
                      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl flex flex-col`}
                    >
                      {/* Image Container */}
                      <div className="relative w-full overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-72">
                        {img.url ? (
                          <Image
                            src={img.url}
                            alt={label}
                            fill
                            className="relative z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                            <span>Image missing</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Only show labels if the category dictates it */}
                      {category.showLabels && (
                        <div className="relative z-20 bg-white px-5 py-4 border-t border-slate-100 mt-auto">
                          <p className="font-bold text-slate-700 tracking-wide text-sm">{label}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
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
