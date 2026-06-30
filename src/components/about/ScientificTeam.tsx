import { Atom, SearchCheck, FlaskConical, ShieldCheck, Microscope, BookOpen } from "lucide-react";

const expertiseAreas = [
  { title: "Mass Spectrometry", description: "Advanced LC-MS/MS, GC-MS/MS, and ICP-MS techniques for trace-level detection.", icon: Atom },
  { title: "Trace Analysis", description: "Detecting and quantifying compounds at parts-per-billion levels with unparalleled precision.", icon: SearchCheck },
  { title: "Method Development", description: "Creating robust, sensitive, and specific analytical methods for complex pharmaceutical matrices.", icon: FlaskConical },
  { title: "Method Validation", description: "ICH-compliant validation ensuring reproducibility, accuracy, and regulatory acceptance.", icon: ShieldCheck },
  { title: "Qualitative & Quantitative Studies", description: "Structural elucidation and precise quantification of unknown compounds and impurities.", icon: Microscope },
  { title: "Research & Development", description: "Supporting novel research initiatives with cutting-edge analytical capabilities.", icon: BookOpen },
];

export default function ScientificTeam() {
  return (
    <section className="bg-brand-grey py-24 border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Our Scientific Team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our technical and quality assurance teams are led by experienced managers with over a decade of 
            specialization in trace analysis and mass spectrometric techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-border"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-dark">{area.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
