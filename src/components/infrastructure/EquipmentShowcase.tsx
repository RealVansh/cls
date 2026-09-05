import { Atom, ScanSearch, Lightbulb, Waves } from "lucide-react";

interface Machine {
  _key: string;
  name: string;
  model?: string;
  description?: string;
}

interface Department {
  _id: string;
  departmentName: string;
  subtitle: string;
  machines: Machine[];
}

export default function EquipmentShowcase({ initialEquipment = [] }: { initialEquipment?: Department[] }) {
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

        {initialEquipment.map((dept, catIndex) => {
          const equipmentList = dept.machines || [];
          
          // Alternate accent colors based on category index
          const isPrimary = catIndex % 2 === 0;
          const accentColorClass = isPrimary ? "text-brand-accent" : "text-brand-primary";
          const bgAccentClass = isPrimary ? "bg-brand-accent/10" : "bg-brand-primary/10";
          const fromGradient = isPrimary ? "from-brand-accent/20 to-brand-primary/20" : "from-brand-primary/20 to-brand-accent/10";
          const hoverGradient = isPrimary ? "group-hover:from-brand-accent group-hover:to-brand-primary" : "group-hover:from-brand-primary group-hover:to-brand-accent";
          const hoverShadow = isPrimary ? "group-hover:shadow-brand-accent/20 hover:ring-brand-accent" : "group-hover:shadow-brand-primary/20 hover:ring-brand-primary";

          return (
            <div key={dept._id} className="mb-16 last:mb-0">
              <div className="mb-8 flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgAccentClass}`}>
                  {isPrimary ? <Atom className={`h-5 w-5 ${accentColorClass}`} /> : <Lightbulb className={`h-5 w-5 ${accentColorClass}`} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{dept.departmentName}</h3>
                  <p className="text-sm text-slate-400">{dept.subtitle}</p>
                </div>
                <div className="hidden sm:block ml-4 h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {equipmentList.map((item) => {
                  return (
                    <div
                      key={item._key}
                      className={`group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 ${hoverShadow}`}
                    >
                      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${fromGradient} ${accentColorClass} transition-all duration-300 ${hoverGradient} group-hover:text-white group-hover:shadow-lg ${hoverShadow.split(' ')[0]}`}>
                         {isPrimary ? <ScanSearch className="h-6 w-6" /> : <Waves className="h-6 w-6" />}
                      </div>

                      <h4 className="mb-1 text-xl font-bold tracking-wide text-white">
                        {item.name}
                      </h4>

                      {item.model && (
                        <p className={`mb-4 text-sm font-semibold ${accentColorClass}`}>
                          {item.model}
                        </p>
                      )}

                      {item.description && (
                        <p className="text-sm leading-relaxed text-slate-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
