import { Mail, Paperclip, Send, Briefcase, FileText } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32 border-b border-slate-100">
        {/* Subtle high-tech background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#2B4B8C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-[#38BDF8]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
            
            {/* Left Column: Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary mb-6">
                <Briefcase className="h-4 w-4" />
                Join Our Team
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                Shape the Future of <span className="text-brand-primary">Testing Services</span>
              </h1>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Explore exciting career opportunities at CLS Private Limited. Join our team of dedicated professionals and advance your career in the dynamic field of testing services.
                </p>
                <p>
                  Discover open positions and apply today to be a part of our innovative and growing company. If you cannot find a suitable role, we are always on the lookout for talented individuals.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-1 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-dark/20">
                  Submit Resume
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Graphic Replica */}
            <div className="relative flex h-[450px] items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute right-8 top-8 h-8 w-8 rounded-full bg-[#38BDF8]/80 shadow-lg shadow-[#38BDF8]/40 animate-pulse" />
              <div className="absolute bottom-20 left-8 h-12 w-12 rounded-full bg-brand-primary/80 shadow-lg shadow-brand-primary/40 animate-pulse delay-75" />
              
              <svg className="absolute left-16 top-1/4 h-12 w-12 text-[#38BDF8] opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>

              {/* The Graphic */}
              <div className="relative z-10 -rotate-3 transition-transform duration-700 hover:-rotate-1 hover:scale-105">
                {/* Background offset border */}
                <div className="absolute -inset-6 rotate-6 rounded-2xl border-2 border-brand-dark/10 bg-white/50 backdrop-blur-sm" />
                
                {/* Main Dark Blue Box */}
                <div className="relative rounded-2xl bg-brand-dark px-12 py-10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <h2 className="relative text-center font-sans text-5xl font-black italic tracking-widest text-white sm:text-6xl sm:tracking-[0.15em] transform -skew-x-6 drop-shadow-lg">
                    LET&apos;S JOIN
                  </h2>
                </div>
                
                {/* Overlapping Light Blue Box */}
                <div className="absolute -bottom-10 left-12 right-12 rotate-2 rounded-xl bg-brand-accent px-8 py-4 shadow-xl overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <h3 className="relative text-center font-sans text-3xl font-bold italic tracking-wider text-white sm:text-4xl transform -skew-x-6 drop-shadow-md">
                    OUR TEAM
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Apply via Email Section */}
      <section id="apply" className="relative z-20 mx-auto -mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/50 border border-slate-100">
          
          {/* Header */}
          <div className="bg-brand-dark px-8 py-10 sm:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <h2 className="relative text-3xl font-bold text-white">Apply Now</h2>
            <p className="relative mt-2 text-slate-300">Take the first step towards a rewarding career with CLS.</p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 sm:px-12 sm:py-16">
            
            {/* Instructions */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-brand-dark mb-4">How to Apply</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Send us your resume and a brief introduction via email. Our HR team reviews every application and will get back to you within 5 business days.
              </p>
            </div>

            {/* Steps */}
            <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-brand-primary/20 hover:bg-white hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">Step 1</span>
                <p className="text-sm font-semibold text-brand-dark">Click the button below</p>
                <p className="mt-1 text-xs text-slate-500">Your email client will open with a pre-filled template</p>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-brand-primary/20 hover:bg-white hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Paperclip className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">Step 2</span>
                <p className="text-sm font-semibold text-brand-dark">Attach your Resume / CV</p>
                <p className="mt-1 text-xs text-slate-500">PDF or DOC format preferred</p>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-brand-primary/20 hover:bg-white hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Send className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">Step 3</span>
                <p className="text-sm font-semibold text-brand-dark">Hit Send</p>
                <p className="mt-1 text-xs text-slate-500">We will respond within 5 business days</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="border-t border-slate-100 pt-10">
              <a 
                href="mailto:info@cls.net.in?subject=Career%20Application%20-%20CLS%20Private%20Limited&body=Dear%20CLS%20HR%20Team%2C%0A%0AI%20am%20writing%20to%20express%20my%20interest%20in%20a%20position%20at%20CLS%20Private%20Limited.%0A%0AName%3A%20%0APosition%20Applied%20For%3A%20%0APhone%3A%20%0A%0APlease%20find%20my%20resume%20attached.%0A%0AThank%20you%20for%20your%20consideration.%0A%0ABest%20regards"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand-dark px-8 py-5 text-lg font-bold text-white shadow-xl shadow-brand-dark/20 transition-all hover:bg-brand-primary hover:shadow-brand-primary/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
              >
                <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
                Send Application Email
              </a>
              <p className="mt-4 text-center text-sm text-slate-400">
                Opens your default email client — no account or sign-up required
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
