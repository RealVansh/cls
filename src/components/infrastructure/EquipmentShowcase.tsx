import {
  Activity,
  Fingerprint,
  ScanSearch,
  Waves,
  FlaskConical,
  Lightbulb,
  Microscope,
} from "lucide-react";

const equipment = [
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
  {
    name: "UV Visible Spectrophotometer",
    model: "Shimadzu",
    description:
      "For absorbance and transmittance measurements across the UV-Vis spectrum, supporting dissolution and assay testing.",
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

const otherDevices = [
  { name: "Soxhlet Extractor", model: "Soxtron" },
  { name: "Microwave Digester", model: "Anton Paar" },
  { name: "Nitrogen Evaporator", model: "Eltek India" },
  { name: "Centrifuge", model: "Eltek India" },
  { name: "Autoclave", model: "Servo Enterprises" },
  { name: "pH Meter", model: "Labman" },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
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

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={`${item.name}-${item.model}`}
                className={`group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:ring-brand-accent hover:shadow-[0_0_40px_rgba(20,178,240,0.12)] ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Icon with gradient background */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 text-brand-accent transition-all duration-300 group-hover:from-brand-accent group-hover:to-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-accent/20">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Equipment Name */}
                <h3 className="mb-1 text-xl font-bold tracking-wide text-white">
                  {item.name}
                </h3>

                {/* Model */}
                <p className="mb-4 text-sm font-semibold text-brand-accent">
                  {item.model}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute right-6 top-6 h-8 w-8 rounded-full border border-slate-700 opacity-30 transition-all duration-300 group-hover:border-brand-accent group-hover:opacity-60" />
              </div>
            );
          })}
        </div>

        {/* Other Devices */}
        <div className="mt-20 border-t border-slate-700/50 pt-16">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Other Devices for Testing Equipment
            </h3>
            <p className="mt-3 text-slate-400">Essential supporting instrumentation for comprehensive analytical workflows.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherDevices.map((device, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between rounded-xl bg-slate-800/30 p-5 ring-1 ring-slate-700/50 transition-all duration-300 hover:bg-slate-800 hover:ring-brand-accent/50"
              >
                <span className="font-semibold text-slate-300">{device.name}</span>
                <span className="text-xs font-bold tracking-widest text-brand-accent/80">{device.model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
