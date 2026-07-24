import {
  Activity,
  Fingerprint,
  ScanSearch,
  Waves,
  FlaskConical,
  Lightbulb,
  Microscope,
  Atom,
  Sparkles,
} from "lucide-react";

const massSpecSystems = [
  {
    name: "LC-MS/MS",
    model: "Shimadzu LCMS-8045",
    description:
      "Liquid chromatography tandem mass spectrometry for trace-level extractables, leachables, and impurity analysis.",
    icon: Activity,
  },
  {
    name: "High Sensitivity LC-MS/MS",
    model: "Shimadzu LCMS-8060NX",
    description:
      "Next-generation high-sensitivity mass spectrometry for ultra-trace detection of genotoxic impurities and nitrosamines.",
    icon: Microscope,
  },
  {
    name: "High Sensitivity LC-MS/MS",
    model: "Shimadzu LCMS-8060RX",
    description:
      "Advanced rapid polarity switching MS for complex pharmaceutical matrices and NDSRI evaluations.",
    icon: FlaskConical,
  },
  {
    name: "ICP-MS",
    model: "Agilent 7800, SPS 4 Autosampler",
    description:
      "Inductively coupled plasma mass spectrometry for elemental impurity testing per ICH Q3D guidelines.",
    icon: Fingerprint,
  },
  {
    name: "GC-MS/MS-FID",
    model: "Agilent 8890, 7000D GC/TQ",
    description:
      "Gas chromatography triple quadrupole MS with flame ionization for volatile compound analysis and ETO residual testing.",
    icon: ScanSearch,
  },
];

const spectroscopySystems = [
  {
    name: "UV Visible Spectrophotometer",
    model: "Shimadzu",
    description:
      "Absorbance and transmittance measurements across the UV-Vis spectrum, supporting dissolution and assay testing.",
    icon: Lightbulb,
  },
  {
    name: "FTIR Spectrophotometer",
    model: "Shimadzu",
    description:
      "Fourier transform infrared spectroscopy for molecular identification, functional group analysis, and material characterization.",
    icon: Waves,
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-brand-dark py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Instrumentation
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Cutting-edge technologies are{" "}
            <span className="text-brand-accent">
              used for high accuracy
            </span>{" "}
            of data
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Our laboratory houses a comprehensive suite of advanced analytical
            instruments — each selected and validated to deliver best-in-class
            sensitivity, precision, and regulatory compliance.
          </p>
        </div>

        {/* ─── Category 1: Mass Spectrometry Systems ─── */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10">
              <Atom className="h-5 w-5 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Mass Spectrometry Systems</h3>
              <p className="text-sm text-slate-400">Core analytical instrumentation for trace-level detection</p>
            </div>
            <div className="hidden sm:block ml-4 h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          {/* Top row: 2 featured cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
            {massSpecSystems.slice(0, 2).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${item.model}`}
                  className="group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 sm:p-10 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-accent hover:shadow-[0_0_40px_rgba(20,178,240,0.12)]"
                >
                  {/* Large index number watermark */}
                  <span className="absolute -bottom-4 -right-2 text-[120px] font-black leading-none text-white/[0.03] select-none transition-transform duration-500 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 text-brand-accent transition-all duration-300 group-hover:from-brand-accent group-hover:to-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-accent/20">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h4 className="mb-1 text-2xl font-bold tracking-wide text-white">
                      {item.name}
                    </h4>

                    <p className="mb-5 text-sm font-semibold text-brand-accent">
                      {item.model}
                    </p>

                    <p className="text-base leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {massSpecSystems.slice(2).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${item.model}`}
                  className="group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-accent hover:shadow-[0_0_40px_rgba(20,178,240,0.12)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 text-brand-accent transition-all duration-300 group-hover:from-brand-accent group-hover:to-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-accent/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h4 className="mb-1 text-xl font-bold tracking-wide text-white">
                    {item.name}
                  </h4>

                  <p className="mb-4 text-sm font-semibold text-brand-accent">
                    {item.model}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Category 2: Spectroscopy & Analysis ─── */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10">
              <Sparkles className="h-5 w-5 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Spectroscopy & Analysis</h3>
              <p className="text-sm text-slate-400">Supporting instruments for characterization & identification</p>
            </div>
            <div className="hidden sm:block ml-4 h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {spectroscopySystems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${item.model}`}
                  className="group relative flex items-start gap-6 rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-primary hover:shadow-[0_0_40px_rgba(20,178,240,0.08)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 text-brand-primary transition-all duration-300 group-hover:from-brand-primary group-hover:to-brand-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-xl font-bold tracking-wide text-white">
                      {item.name}
                    </h4>
                    <p className="mb-3 text-sm font-semibold text-brand-primary">
                      {item.model}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
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
