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

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              About Us
            </Link>
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

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-md bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button className="md:hidden text-brand-dark" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
