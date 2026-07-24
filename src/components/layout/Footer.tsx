import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Column 1: Brand & Mini Form */}
          <div className="flex flex-col gap-6">
            <div>
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="CLS Private Limited" 
                  width={180} 
                  height={54} 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Specialised analytical support for pharmaceuticals and related industries with quality, agility, and economy.
              </p>
              <div className="mt-6">
                <a href="https://www.linkedin.com/company/cls-net-in/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-400 hover:text-brand-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/accreditations" className="text-sm hover:text-white transition-colors">Accreditations</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Our Services</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">Extractables & Leachables</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">Method Development</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">Method Validation</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">Qualitative & Quantitative Analysis</Link>
              </li>

            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
            <ul className="mt-6 flex flex-col gap-6">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-accent" />
                <span className="text-sm leading-relaxed">
                  CLS Private Limited<br />
                  Module 313 & 314 Phase I,<br />
                  TICEL Bio Park Limited,<br />
                  NO.5 CSIR Road, Taramani,<br />
                  Chennai-600113, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-accent" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+917338947871" className="hover:text-white">+91 75021 33888</a>
                  <a href="tel:+9188258 79073" className="hover:text-white">+91 88258 79073</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-accent" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="mailto:info@cls.net.in" className="hover:text-white">info@cls.net.in</a>
                  <a href="mailto:philip@cls.net.in" className="hover:text-white">philip@cls.net.in</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 lg:flex-row lg:gap-4">
          <p className="text-xs text-gray-400 text-center lg:text-left">
            &copy; {new Date().getFullYear()} CLS Private Limited. All rights reserved.
          </p>

          {/* Credits */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Designed & Developed by Vansh V</span>
            <span className="mx-1">•</span>
            <a href="mailto:vanshv0920@gmail.com" className="hover:text-brand-accent transition-colors" aria-label="Email Vansh" title="Email Vansh">
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a href="tel:7010526173" className="hover:text-brand-accent transition-colors" aria-label="Call Vansh" title="Call Vansh">
              <Phone className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
