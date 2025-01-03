"use client";

import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import ToasterContext from "@/app/api/context/ToasterContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-subheading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const isStudio = pathname.startsWith("/studio");

  return (
    <html
      suppressHydrationWarning={true}
      lang="bg"
      className={`${montserrat.variable}`}
    >
      <GoogleAnalytics gaId="G-JFDSDGDFG" />
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div
          className={
            loading
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-300"
          }
        >
          {!isStudio && <Navbar />}
          <ToasterContext />
          <main>{children}</main>
          {!isStudio && <Footer />}
          {!isStudio && <ScrollToTop />}
        </div>

        {loading && <PreLoader />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "Ink Spell Tattoo Studio",
              image:
                "https://www.ink-spell.com/images/ink-spell-full-colored-logo.jpg",
              description:
                "Professional tattoo studio in Pleven, Bulgaria specializing in unique, artistic tattoos, including astrology and tarot-inspired designs.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Васил Априлов 48",
                addressLocality: "Плевен",
                addressRegion: "Плевен",
                postalCode: "5800",
                addressCountry: "BG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.4168",
                longitude: "24.6062",
              },
              url: "https://www.ink-spell.com",
              telephone: "+359894300545",
              openingHours: "Mo-Sa 10:00-19:00",
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/StudioInkSpell",
                "https://www.instagram.com/inkspell.tattoo",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
