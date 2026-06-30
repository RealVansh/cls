export default function ClientLogos() {
  return (
    <section className="bg-white py-16 border-b border-brand-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by Leading Pharmaceutical Organizations
        </p>
        
        {/* Simple flex layout for placeholder logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Placeholder for logos. Using text since we don't have actual SVG logos */}
          <div className="text-2xl font-black font-serif text-slate-800">PharmaCorp</div>
          <div className="text-2xl font-black font-sans tracking-tighter text-slate-800">BioTech<span className="text-brand-primary">Inc.</span></div>
          <div className="text-2xl font-black font-serif text-slate-800">Medi<span className="italic">Labs</span></div>
          <div className="text-2xl font-black font-sans uppercase tracking-widest text-slate-800">GlobalHealth</div>
          <div className="text-2xl font-black font-sans tracking-tighter text-slate-800">Life<span className="text-brand-success">Sci</span></div>
        </div>
      </div>
    </section>
  );
}
