import Image from "next/image";

const clientLogos = [
  "image1.png","image10.png","image11.png","image12.png","image13.png","image14.png",
  "image15.png","image16.png","image17.png","image18.png","image19.png","image2.png",
  "image20.png","image21.png","image22.png","image23.png","image24.png","image25.png",
  "image26.png","image27.png","image28.png","image29.png","image3.jpeg","image30.jpeg",
  "image31.png","image32.png","image33.png","image34.png","image35.png","image36.png",
  "image4.png","image5.png","image6.jpeg","image7.jpeg","image8.png","image9.png"
];

export default function ClientsMarquee() {
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
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex h-16 w-32 items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={`/clients/${logo}`}
                alt={`Client Logo`}
                width={128}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
