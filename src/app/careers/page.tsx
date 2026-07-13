import { Mail, Paperclip, Send, Briefcase, User, Phone, FileText } from "lucide-react";

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
                    LET'S JOIN
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

      {/* Application Form Section */}
      <section id="apply" className="relative z-20 mx-auto -mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/50 border border-slate-100">
          
          {/* Form Header */}
          <div className="bg-brand-dark px-8 py-10 sm:px-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <h2 className="relative text-3xl font-bold text-white">Application Form</h2>
            <p className="relative mt-2 text-slate-300">Take the first step towards a rewarding career with CLS.</p>
          </div>

          <form className="px-8 py-10 sm:px-12 sm:py-12" action="#" method="POST">
            
            <div className="space-y-10">
              {/* Personal Details Section */}
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-brand-dark border-b border-slate-100 pb-4">
                  <User className="h-5 w-5 text-brand-primary" />
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="group relative">
                    <input type="text" id="firstName" name="firstName" required className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10" placeholder=" " />
                    <label htmlFor="firstName" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">First Name <span className="text-red-500">*</span></label>
                  </div>
                  <div className="group relative">
                    <input type="text" id="lastName" name="lastName" required className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10" placeholder=" " />
                    <label htmlFor="lastName" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">Last Name <span className="text-red-500">*</span></label>
                  </div>
                  <div className="group relative">
                    <input type="email" id="email" name="email" required className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10" placeholder=" " />
                    <label htmlFor="email" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">Email Address <span className="text-red-500">*</span></label>
                  </div>
                  <div className="group relative">
                    <input type="tel" id="phone" name="phone" required className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10" placeholder=" " />
                    <label htmlFor="phone" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">Phone Number <span className="text-red-500">*</span></label>
                  </div>
                </div>
              </div>

              {/* Application Details Section */}
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-brand-dark border-b border-slate-100 pb-4">
                  <FileText className="h-5 w-5 text-brand-primary" />
                  Application Details
                </h3>
                
                <div className="space-y-6">
                  <div className="group relative">
                    <input type="text" id="position" name="position" className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10" placeholder=" " />
                    <label htmlFor="position" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">Position Applying For</label>
                  </div>

                  {/* Premium Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Resume / CV <span className="text-red-500">*</span></label>
                    <div className="group relative flex justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 transition-all hover:bg-brand-primary/5 hover:border-brand-primary focus-within:border-brand-primary focus-within:ring-4 focus-within:ring-brand-primary/10">
                      <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:text-brand-primary">
                          <Paperclip className="h-8 w-8 text-slate-400 group-hover:text-brand-primary transition-colors" />
                        </div>
                        <div className="mt-6 flex text-base leading-6 text-slate-600 justify-center">
                          <label htmlFor="resume-upload" className="relative cursor-pointer rounded-md font-bold text-brand-primary focus-within:outline-none hover:text-brand-dark transition-colors">
                            <span>Click to upload</span>
                            <input id="resume-upload" name="resume-upload" type="file" className="sr-only" required accept=".pdf,.doc,.docx" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-slate-400 mt-2">Supports PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <textarea id="message" name="message" rows={4} className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-slate-900 transition-all focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10 resize-none" placeholder=" "></textarea>
                    <label htmlFor="message" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-primary">Cover Letter / Message (Optional)</label>
                  </div>
                </div>
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand-dark px-8 py-5 text-lg font-bold text-white shadow-xl shadow-brand-dark/20 transition-all hover:bg-brand-primary hover:shadow-brand-primary/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/30">
                <Send className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
