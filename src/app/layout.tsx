"use client";

import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "./api/context/ToasterContext";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-subheading",
});

export const metadata = {
  title: {
    default: "Ink Spell Tattoo Studio | Премиум татуиране в България",
    template: "%s | Ink Spell Tattoo Studio",
  },
  description:
    "Ink Spell Tattoo Studio в Плевен, където талантливата художничка Ива създава уникални татуировки с артистичен подход. Специализирани в персонализирани дизайни, астрологична символика и Таро изкуство. Създаваме значими татуировки, които разказват вашата лична история.",
  keywords: [
    // Основни брандирани ключови думи
    "Ink Spell Tattoo Studio",
    "тату студио Плевен",
    "татуировки Плевен",
    "Ива Лазарова татуировки",

    // Високо търсени ключови думи
    "цени на татуировки Плевен",
    "студио за татуировки Плевен",
    "художествени татуировки",
    "татуист Плевен",

    // Специализирани услуги
    "персонализирани татуировки",
    "дизайн на татуировки",
    "уникални татуировки",
    "цветни татуировки Плевен",

    // Стилове
    "фини линии татуировки",
    "минималистични татуировки",
    "геометрични татуировки",
    "илюстративни татуировки",

    // Тематични
    "астрологични татуировки",
    "таро татуировки",
    "символични татуировки",
    "мистични татуировки",

    // Услуги
    "консултация за татуировка",
    "коригиране на татуировки",
    "дизайн на custom татуировки",

    // Английски варианти
    "tattoo studio Pleven",
    "custom tattoo Pleven",
    "professional tattoo artist Bulgaria",
    "artistic tattoos Bulgaria",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com",
    languages: {
      "bg-BG": "https://www.ink-spell.com",
    },
  },
  openGraph: {
    title: "Ink Spell Tattoo Studio | Премиум татуиране в България",
    description:
      "Открийте уникалното изкуство на татуирането в Плевен. Персонализирани дизайни, астрология и художествени татуировки от професионален артист с background в илюстрацията.",
    url: "https://ink-spell.com",
    type: "website",
    siteName: "Ink Spell Tattoo Studio",
    locale: "bg_BG",
    images: [
      {
        url: "https://www.ink-spell.com/images/ink-spell-full-colored-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio - Премиум татуиране",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Spell Tattoo Studio | Премиум татуиране в България",
    description:
      "Открийте уникалното изкуство на татуирането в Плевен. Персонализирани дизайни, астрология и художествени татуировки от професионален артист с background в илюстрацията.",
    images: [
      "https://www.ink-spell.com/images/ink-spell-full-colored-logo.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            {!isStudio && <Navbar />}
            <ToasterContext />
            <main>{children}</main>
            {!isStudio && <Footer />}
            {!isStudio && <ScrollToTop />}
          </>
        )}

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
                latitude: "43.4168", // Replace with actual latitude
                longitude: "24.6062", // Replace with actual longitude
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
