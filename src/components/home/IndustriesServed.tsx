import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Pharmaceutical",
    description: "Ensuring safety and efficacy with advanced analytical testing and validation.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe668df531b?q=80&w=800&auto=format&fit=crop",
    link: "/services/pharmaceutical",
  },
  {
    title: "Medical Devices",
    description: "Rigorous extractables and leachables testing for medical device compliance.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    link: "/services/medical-devices",
  },
  {
    title: "Packaging",
    description: "Evaluating primary and secondary packaging materials for product safety.",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800&auto=format&fit=crop",
    link: "/services/packaging",
  },
  {
    title: "Biotechnology",
    description: "Supporting biopharma innovations with specialized analytical workflows.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db61b7c5?q=80&w=800&auto=format&fit=crop",
    link: "/services/biotechnology",
  },
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
            Delivering precision and compliance across critical life science sectors.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                <Link 
                  href={industry.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-primary"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
