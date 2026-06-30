"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  title = "Image",
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync index when lightbox opens
  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handlePrev = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-lg p-4"
      onClick={onClose}
    >
      {/* Top Header */}
      <div className="flex w-full items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
        <div className="text-sm font-semibold text-white">{title}</div>
        <button onClick={onClose} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image */}
      <div className="relative flex-1 flex items-center justify-center w-full my-4">
        {images.length > 1 && (
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-4 z-10 p-3 bg-white/10 rounded-full text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        <div className="relative w-full h-full max-h-[85vh] flex justify-center" onClick={(e) => e.stopPropagation()}>
          <Image
            src={images[currentIndex]}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {images.length > 1 && (
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 z-10 p-3 bg-white/10 rounded-full text-white">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
