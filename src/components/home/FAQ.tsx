"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "Our standard turnaround time is 10-15 business days depending on the complexity of the method and the volume of samples. We also offer expedited services for critical path projects.",
  },
  {
    question: "Do you provide regulatory-ready reports?",
    answer: "Yes, all our analytical reports are fully validated, QA-reviewed, and formatted to meet the strict submission requirements of the FDA, EMA, CDSCO, and other global regulatory bodies.",
  },
  {
    question: "Can you handle confidential formulations?",
    answer: "Absolutely. We operate under strict Non-Disclosure Agreements (NDAs) and employ robust data integrity protocols to ensure your intellectual property is completely secure at all times.",
  },
  {
    question: "What sample sizes do you need?",
    answer: "Sample size requirements vary depending on the specific analytical method and the matrix involved. Our scientific team will provide precise requirements during the initial consultation phase.",
  },
  {
    question: "Which regulatory standards do you comply with?",
    answer: "Our laboratory is NABL Accredited (ISO/IEC 17025:2017), ISO 9001:2015 certified, CDSCO approved, and fully compliant with FDA 21 CFR Part 11 requirements for electronic records.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-xl border transition-colors ${isOpen ? 'border-brand-primary/20 bg-brand-primary/5' : 'border-brand-border bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-dark">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
