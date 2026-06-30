import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | CLS Private Limited",
  description: "View our state-of-the-art analytical testing facilities.",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-brand-grey px-4 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-border">
        <ImageIcon className="h-10 w-10 text-brand-primary" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
        Laboratory Gallery
      </h1>
      <p className="mt-4 text-lg text-slate-500">
        Images to be added soon.
      </p>
    </div>
  );
}
