import { Activity, Fingerprint, ScanSearch, Dna, Eye, Radio, Beaker, Flame, Wind, Gauge, FlaskRound, Thermometer } from "lucide-react";

const primaryInstruments = [
  {
    name: "LC-MS/MS",
    models: "Shimadzu 8045, 8060NX, 8060RX",
    software: "Lab Solutions",
    description: "High-sensitivity liquid chromatography tandem mass spectrometry for trace-level analysis of extractables, leachables, and genotoxic impurities.",
    icon: Activity,
  },
  {
    name: "HSGC-MS/MS",
    models: "Agilent 7000D",
    software: "Mass Hunter",
    description: "Headspace gas chromatography for precise residual solvent determination and volatile compound analysis.",
    icon: Dna,
  },
  {
    name: "ICP-MS",
    models: "Agilent 7800",
    software: "Mass Hunter",
    description: "Inductively coupled plasma mass spectrometry for heavy metal and elemental impurity testing per ICH Q3D.",
    icon: Fingerprint,
  },
  {
    name: "GC-MS/MS",
    models: "Multiple platforms",
    software: "Integrated",
    description: "Gas chromatography mass spectrometry for volatile and semi-volatile organic compound identification.",
    icon: ScanSearch,
  },
];

const supportingEquipment = [
  { name: "UV-Vis Spectrophotometer", brand: "Shimadzu", icon: Eye },
  { name: "FTIR Spectrophotometer", brand: "Shimadzu", icon: Radio },
  { name: "Soxhlet Extractor", brand: "Soxtron", icon: Beaker },
  { name: "Microwave Digester", brand: "Anton Paar", icon: Flame },
  { name: "Nitrogen Evaporator", brand: "Eltek India", icon: Wind },
  { name: "Centrifuge", brand: "Eltek India", icon: Gauge },
  { name: "Autoclave", brand: "Servo Enterprises", icon: FlaskRound },
  { name: "pH Meter", brand: "Labman", icon: Thermometer },
];

export default function AboutTechnology() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Our <span className="text-brand-accent">Analytical</span> Arsenal
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            A comprehensive suite of state-of-the-art instrumentation enabling detection,
            quantification, and characterization at industry-leading levels of sensitivity.
          </p>
        </div>

        {/* Primary Analytical Instruments */}
        <div className="mb-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Primary Analytical Instruments
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {primaryInstruments.map((inst) => {
              const Icon = inst.icon;
              return (
                <div
                  key={inst.name}
                  className="group flex flex-col rounded-2xl bg-slate-800/50 p-6 ring-1 ring-slate-700 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-accent hover:shadow-[0_0_30px_rgba(32,143,223,0.15)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{inst.name}</h3>
                  <p className="mt-1 text-xs font-medium text-brand-accent">{inst.models}</p>
                  <p className="mt-1 text-xs text-slate-500">Software: {inst.software}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{inst.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Equipment */}
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Supporting Equipment
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {supportingEquipment.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl bg-slate-800/50 p-4 ring-1 ring-slate-700"
                >
                  <Icon className="h-4 w-4 shrink-0 text-slate-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-300">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.brand}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
