import { CheckCircle2 } from "lucide-react";

export const cuttingEdgeTechnologies = [
  "LC-MS/MS (Shimadzu LCMS-8045)",
  "High Sensitivity LC-MS/MS (Shimadzu LCMS-8060NX)",
  "High Sensitivity LC-MS/MS (Shimadzu LCMS-8060RX)",
  "ICP-MS (Agilent 7800, SPS 4 Autosampler)",
  "GC-MS/MS-FID (Agilent 8890, 7000D GC/TQ)",
  "UV Visible Spectrophotometer (Shimadzu)",
  "FTIR Spectrophotometer (Shimadzu)"
];

export default function AboutTechnology() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            Cutting-edge technologies are used for high accuracy of data
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuttingEdgeTechnologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 rounded-xl bg-slate-800/50 p-6 ring-1 ring-slate-700 transition-all hover:bg-slate-800 hover:ring-brand-accent hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(32,143,223,0.15)]"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-accent" />
              <p className="font-semibold text-slate-200">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
