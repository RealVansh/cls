import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cls.net.in"),
  title: "CLS Private Limited | Analytical Services for Pharmaceutical & Medical Device Industries",
  description: "Specialised analytical support for pharmaceuticals and related industries through Extractables & Leachables, Method Development, and Stability Studies.",
  openGraph: {
    title: "CLS Private Limited | Analytical Services",
    description: "Specialised analytical support for pharmaceuticals and related industries.",
    url: "https://cls.net.in",
    siteName: "CLS Private Limited",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLS Private Limited | Analytical Services",
    description: "Specialised analytical support for pharmaceuticals and related industries.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "MedicalOrganization"],
              name: "CLS Private Limited",
              url: "https://cls.net.in",
              logo: "https://cls.net.in/logo.png",
              description: "Specialised analytical support for pharmaceuticals and related industries.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "SP-119, Ambattur Industrial Estate",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600058",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7502133888",
                contactType: "customer service",
                email: "srinivasan.v@cls.net.in"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
