import { Dna, Activity, Fingerprint, ScanSearch } from "lucide-react";

const technologies = [
  {
    name: "LC-MS/MS",
    description: "Liquid Chromatography with tandem mass spectrometry for highly sensitive trace analysis.",
    icon: Activity,
  },
  {
    name: "ICP-MS",
    description: "Inductively coupled plasma mass spectrometry for heavy metal and elemental impurities.",
    icon: Fingerprint,
  },
  {
    name: "GC-MS/MS",
    description: "Gas Chromatography-Mass Spectrometry for volatile and semi-volatile compounds.",
    icon: ScanSearch,
  },
  {
    name: "HSGC-MS/MS",
    description: "Headspace Gas Chromatography for precise residual solvent determination.",
    icon: Dna,
  },
];

export default function TechnologyShowcase() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Powered by <br />
            <span className="text-brand-accent">Industry-Leading</span> <br />
            Analytical Technology
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Our state-of-the-art facility is equipped with the latest instrumentation, enabling us to detect, quantify, and characterize compounds at unparalleled levels of sensitivity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-accent hover:shadow-[0_0_30px_rgba(32,143,223,0.15)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-wide text-white">
                  {tech.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
