"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full border-b border-brand-border bg-white px-4">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="CLS Private Limited"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Home
            </Link>

            {/* Dropdown for About Us */}
            <div className="group relative">
              <button 
                className="flex items-center gap-1 py-2 text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full invisible mt-2 w-48 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0">
                <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                  <Link href="/about" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary focus:bg-slate-50 focus:text-brand-primary outline-none">
                    Overview
                  </Link>
                  <Link href="/infrastructure" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary focus:bg-slate-50 focus:text-brand-primary outline-none">
                    Infrastructure
                  </Link>
                  <Link href="/careers" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary focus:bg-slate-50 focus:text-brand-primary outline-none">
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/services" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Services
            </Link>
            <Link href="/accreditations" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Accreditations
            </Link>
            <Link href="/gallery" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Gallery
            </Link>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
              <a href="https://wa.me/917502133888" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors" aria-label="WhatsApp" title="WhatsApp">
                <svg viewBox="0 0 16 16" fill="currentColor" stroke="none" className="h-5 w-5">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/cls-net-in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-5 w-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@CephasLifeSciencePvtLtd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors" aria-label="YouTube" title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-5 w-5">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
            <Link
              href="/contact"
              className="rounded-md bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button 
            className="lg:hidden text-brand-dark p-2" 
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-brand-border shadow-lg z-40 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4">
            <Link 
              href="/" 
              className="px-4 py-3 text-base font-semibold text-brand-dark hover:bg-slate-50 hover:text-brand-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="px-4 py-3 text-base font-semibold text-brand-dark">
              About Us
              <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-slate-100 pl-4">
                <Link 
                  href="/about" 
                  className="py-1 text-sm text-slate-600 hover:text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                <Link 
                  href="/infrastructure" 
                  className="py-1 text-sm text-slate-600 hover:text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Infrastructure
                </Link>
                <Link 
                  href="/careers" 
                  className="py-1 text-sm text-slate-600 hover:text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>

            <Link 
              href="/services" 
              className="px-4 py-3 text-base font-semibold text-brand-dark hover:bg-slate-50 hover:text-brand-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/accreditations" 
              className="px-4 py-3 text-base font-semibold text-brand-dark hover:bg-slate-50 hover:text-brand-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accreditations
            </Link>
            <Link 
              href="/gallery" 
              className="px-4 py-3 text-base font-semibold text-brand-dark hover:bg-slate-50 hover:text-brand-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            
            <div className="mt-4 px-4 pt-4 border-t border-slate-100">
              <Link 
                href="/contact" 
                className="flex w-full justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-bold text-brand-dark shadow-sm hover:opacity-90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
