import Image from "next/image";

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    caption: "LC-MS/MS Sample Preparation Area",
    tag: "Sample Prep",
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    caption: "High-Performance Liquid Chromatography Suite",
    tag: "HPLC Suite",
  },
  {
    image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebe2?q=80&w=2069&auto=format&fit=crop",
    caption: "Trace Elemental Analysis (ICP-MS)",
    tag: "ICP-MS Lab",
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

        {/* Bento-box Layout: 1 large left + 2 stacked right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:grid-rows-2">
          {/* Hero Image — spans left 3 columns and both rows */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-border lg:col-span-3 lg:row-span-2">
            <div className="relative h-[350px] w-full lg:h-full lg:min-h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent z-10 transition-opacity duration-500" />
              <Image
                src={gallery[0].image}
                alt={gallery[0].caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="mb-2 inline-block rounded-full bg-brand-primary/90 px-3 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider">
                  {gallery[0].tag}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {gallery[0].caption}
                </h3>
              </div>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-border lg:col-span-2">
            <div className="relative h-[250px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent z-10 transition-opacity duration-500" />
              <Image
                src={gallery[1].image}
                alt={gallery[1].caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="mb-2 inline-block rounded-full bg-brand-primary/90 px-3 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider">
                  {gallery[1].tag}
                </span>
                <h3 className="text-base font-bold text-white">
                  {gallery[1].caption}
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-border lg:col-span-2">
            <div className="relative h-[250px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent z-10 transition-opacity duration-500" />
              <Image
                src={gallery[2].image}
                alt={gallery[2].caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="mb-2 inline-block rounded-full bg-brand-primary/90 px-3 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider">
                  {gallery[2].tag}
                </span>
                <h3 className="text-base font-bold text-white">
                  {gallery[2].caption}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
