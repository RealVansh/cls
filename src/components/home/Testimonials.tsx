import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-brand-grey py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mx-auto max-w-5xl">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border">
            <Quote className="h-10 w-10 text-brand-accent/30 mb-6" />
            <p className="text-lg leading-relaxed text-slate-700 italic flex-1">
              "CLS provided exceptional turnaround time on our extractables and leachables testing. Their detailed, regulatory-ready reports helped us accelerate our FDA submission without any compliance issues."
            </p>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-base font-bold text-brand-dark">Dr. Sarah Jenkins</p>
              <p className="text-sm font-medium text-slate-500">Director of Quality Control, GlobalHealth Pharma</p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-border">
            <Quote className="h-10 w-10 text-brand-accent/30 mb-6" />
            <p className="text-lg leading-relaxed text-slate-700 italic flex-1">
              "The technical expertise of their scientists is unmatched. They developed a highly complex method for our novel compound when two other laboratories had failed. We consider them a true extension of our team."
            </p>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-base font-bold text-brand-dark">Michael Chang</p>
              <p className="text-sm font-medium text-slate-500">VP of R&D, BioTech Innovations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
