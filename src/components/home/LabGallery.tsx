import Image from "next/image";

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    caption: "LC-MS/MS Sample Preparation Area",
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    caption: "High-Performance Liquid Chromatography Suite",
  },
  {
    image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebe2?q=80&w=2069&auto=format&fit=crop",
    caption: "Trace Elemental Analysis (ICP-MS)",
  },
];

export default function LabGallery() {
  return (
    <section className="bg-brand-grey py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Inside Our Laboratory
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A state-of-the-art facility designed for uncompromised accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {gallery.map((item, index) => (
            <div key={index} className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-brand-border">
              <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px]">
                <div className="absolute inset-0 bg-brand-dark/10 transition-opacity group-hover:opacity-0 z-10" />
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 border-t border-brand-border text-center">
                <span className="text-sm font-semibold text-brand-dark">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
