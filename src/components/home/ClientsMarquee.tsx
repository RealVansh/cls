import Image from "next/image";
import { client } from "@/sanity/client";

const GET_CLIENTS_QUERY = `
  *[_type == "clientLogo"][0] {
    logos[]{
      alt,
      "url": asset->url,
      "filename": asset->originalFilename
    }
  }
`;

export default async function ClientsMarquee() {
  const data = await client.fetch(GET_CLIENTS_QUERY);
  const logos = data?.logos || [];

  if (logos.length === 0) return null;

  return (
    <section className="bg-white py-16 border-b border-brand-border overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Left/Right Fades for smooth entry/exit */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee w-max flex items-center">
          {[...logos, ...logos].map((logo: any, index: number) => {
            const label = logo.alt || (logo.filename ? logo.filename.replace(/\.[^/.]+$/, "") : "Client Logo");
            
            return (
              <div
                key={index}
                className="mx-8 flex h-16 w-32 items-center justify-center transition-all duration-300 hover:scale-105"
              >
                {logo.url ? (
                  <Image
                    src={logo.url}
                    alt={label}
                    width={128}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
