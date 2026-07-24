"use client";

import { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Phone, Mail, Globe, Check, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .regex(/^[^0-9]*$/, "Name should not contain numbers"),
  company: z.string().min(1, "Company name is required"),
  email: z
    .string()
    .min(1, "Please enter a valid email address")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s\-()]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const clsServices = [
  "Extractables & Leachables",
  "Method Development",
  "Method Validation",
  "Stability Studies",
  "Qual & Quant Analysis",
  "Nitrosamines",
  "Routine Testing",
];

function ContactFormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  // Match the query param against our services list (supports partial matches)
  const matchedService = initialService
    ? clsServices.find(
        (s) =>
          s.toLowerCase() === initialService.toLowerCase() ||
          initialService.toLowerCase().includes(s.toLowerCase())
      ) || ""
    : "";

  // Multi-select product state
  const [selectedServices, setSelectedServices] = useState<string[]>(
    matchedService ? [matchedService] : []
  );
  const [serviceError, setServiceError] = useState<string | null>(null);

  const toggleService = (code: string) => {
    setSelectedServices((prev) => {
      let updated;
      if (code === "General Enquiry") {
        updated = prev.includes("General Enquiry") ? [] : ["General Enquiry"];
      } else {
        const withoutGeneral = prev.filter((c) => c !== "General Enquiry");
        updated = withoutGeneral.includes(code)
          ? withoutGeneral.filter((c) => c !== code)
          : [...withoutGeneral, code];
      }

      if (updated.length > 0) {
        setServiceError(null);
      }
      return updated;
    });
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (selectedServices.length === 0) {
      setServiceError("Please select at least one service interest or General Enquiry");
      return;
    }
    setServiceError(null);
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Mocking the API response since no real backend route exists yet.
      // Replace this with actual fetch("/api/contact") once backend is set up.
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Failed to send enquiry. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "block w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 rounded focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors peer text-brand-dark shadow-sm";
  const labelCls = "absolute left-4 top-4 text-slate-500 font-medium text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-brand-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-brand-grey pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your analytical testing requirements? Our team of experts is here to provide tailored solutions with uncompromising quality.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-border p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tight mb-8">
                Send an Enquiry
              </h2>
              
              {isSuccess ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-dark mb-4">
                    Enquiry Sent!
                  </h3>
                  <p className="text-slate-600">
                    Thank you. Our scientific team has received your request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  {submitError && (
                     <div className="p-4 bg-red-50 text-red-600 border border-red-200 text-sm rounded-lg font-medium">
                      {submitError}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input {...register("name")} placeholder=" " className={inputCls} />
                      <label className={labelCls}>Full Name *</label>
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="relative">
                      <input {...register("company")} placeholder=" " className={inputCls} />
                      <label className={labelCls}>Company Name *</label>
                      {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company.message}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input {...register("email")} type="email" placeholder=" " className={inputCls} />
                      <label className={labelCls}>Email Address *</label>
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>
                    <div className="relative">
                      <input {...register("phone")} type="tel" placeholder=" " className={inputCls} />
                      <label className={labelCls}>Phone Number</label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Multi-Select Service Interest */}
                  <div className="pt-2">
                    <label className="block text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">
                      Service Interest *
                      {selectedServices.length > 0 && (
                        <span className="ml-2 text-brand-primary">
                          ({selectedServices.length} selected)
                        </span>
                      )}
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {/* General Enquiry Option */}
                      <button
                        type="button"
                        onClick={() => toggleService("General Enquiry")}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                          selectedServices.includes("General Enquiry")
                            ? "bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/20"
                            : "bg-white border-slate-300 text-slate-600 hover:border-brand-primary/50 hover:text-brand-primary hover:bg-brand-primary/5"
                        }`}
                      >
                        {selectedServices.includes("General Enquiry") && <Check className="w-4 h-4" />}
                        General Enquiry
                      </button>

                      {clsServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-brand-primary border-brand-primary text-brand-dark shadow-md shadow-brand-primary/20"
                                : "bg-white border-slate-300 text-slate-600 hover:border-brand-primary/50 hover:text-brand-primary hover:bg-brand-primary/5"
                            }`}
                          >
                            {isSelected && <Check className="w-4 h-4" />}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                    {serviceError && (
                      <p className="text-red-500 text-sm mt-3 font-medium">{serviceError}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">
                      Message / Requirements (Optional)
                    </label>
                    <textarea 
                      {...register("message")} 
                      rows={4} 
                      placeholder="How can we help you?"
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors text-brand-dark shadow-sm resize-none" 
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>}
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-3 py-4 bg-brand-dark text-white font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50">
                      {isSubmitting ? "Processing..." : "Send Enquiry"} <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* WhatsApp Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 p-6 md:p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#25D366]/10 text-[#25D366]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-9 w-9" fill="currentColor" aria-hidden="true">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-1">Prefer WhatsApp?</h3>
                  <p className="text-sm text-slate-500">
                    Get an instant reply — we're most active here.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917338947871"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-brand-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-brand-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Traditional Contact Info */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917338947871" className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors">+91 75021 33888</a>
                  <a href="tel:+9188258 79073" className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors">+91 88258 79073</a>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@cls.net.in" className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors">info@cls.net.in</a>
                  <a href="mailto:philip@cls.net.in" className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors">philip@cls.net.in</a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative h-80 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                src="https://maps.google.com/maps?q=12.9856441,80.2491535&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CLS Facility Location"
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="bg-brand-grey min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-bold text-xl tracking-widest text-slate-400">LOADING...</div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
