import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full border-b border-brand-border bg-white px-4">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Image 
              src="/logo.png" 
              alt="CLS Private Limited" 
              width={200} 
              height={60} 
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Home
            </Link>

            {/* Dropdown for About Us */}
            <div className="group relative">
              <button className="flex items-center gap-1 py-2 text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
                About Us
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full invisible mt-2 w-48 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:mt-0">
                <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                  <Link href="/about" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary">
                    Overview
                  </Link>
                  <Link href="/infrastructure" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary">
                    Infrastructure
                  </Link>
                  <Link href="/careers" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary">
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

          <button className="lg:hidden text-brand-dark" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
