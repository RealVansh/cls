import Image from "next/image";

const industries = [
  {
    title: "Pharmaceutical Industries",
    description: "Ensuring safety and efficacy with advanced analytical testing, extractables & leachables, and method validation.",
    image: "/industries/pharmaceutical.jpg",
    link: "/services",
  },
  {
    title: "Pharmaceutical Packaging",
    description: "Evaluating primary and secondary packaging materials to ensure they are safe and compliant for drug storage.",
    image: "/industries/packaging.jpg",
    link: "/services",
  },
  {
    title: "Medical Devices",
    description: "Rigorous extractables and leachables testing to guarantee medical device safety and regulatory compliance.",
    image: "/industries/medical-devices.jpg",
    link: "/services",
  }
];

export default function IndustriesServed() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our expertise lies in conducting both qualitative and quantitative study and analysis.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {industries.map((industry) => (
            <div 
              key={industry.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-brand-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/20 transition-opacity group-hover:opacity-0 z-10" />
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-brand-dark">
                  {industry.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
