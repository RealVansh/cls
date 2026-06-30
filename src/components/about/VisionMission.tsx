import { Target, Compass, Handshake } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    icon: Compass,
    description: "To be the preferred partner for specialized analytical and research services, enabling pharmaceutical and medical device companies to bring safe, effective products to market.",
  },
  {
    title: "Our Mission",
    icon: Target,
    description: "To meet and exceed customer expectations in terms of quality, agility, and economy — delivering results that regulatory bodies worldwide trust.",
  },
  {
    title: "Our Commitment",
    icon: Handshake,
    description: "Adding value through need-based pre and post-support services, ensuring our customers meet their regulatory and research requirements with absolute confidence.",
  },
];

export default function VisionMission() {
  return (
    <section className="bg-brand-grey py-24 border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border transition-shadow hover:shadow-md"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
