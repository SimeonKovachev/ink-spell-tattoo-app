import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Услуги | Татуировки и Татуиране в Плевен",
  description:
    "Разгледайте услугите на Ink Spell Tattoo Studio в Плевен. Специализирани в персонализирани татуировки, корекции и създаване на уникални дизайни.",
  keywords: [
    "услуги татуировки",
    "татуиране в Плевен",
    "татуировки персонализирани",
    "дизайни на татуировки",
    "корекции на татуировки",
    "тату студио услуги",
    "консултация за татуировка",
    "най-добрите услуги за татуировки",
    "татуировки с артистичен подход",
    "цени за услуги татуировки Плевен",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com/services",
  },
  openGraph: {
    title: "Услуги | Татуировки и Татуиране в Плевен",
    description:
      "Открийте разнообразието от услуги на Ink Spell Tattoo Studio. Предлагаме професионално татуиране, корекции и създаване на уникални персонализирани дизайни.",
    url: "https://www.ink-spell.com/services",
    type: "article",
    siteName: "Ink Spell Tattoo Studio",
    images: [
      {
        url: "/images/about/tattoo-sample1.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio - Услуги",
      },
      {
        url: "/images/about/tattoo-sample2.jpg",
        width: 1200,
        height: 630,
        alt: "Персонализирани татуировки в Плевен",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги | Татуировки и Татуиране в Плевен",
    description:
      "Открийте услугите на Ink Spell Tattoo Studio в Плевен - професионални татуировки, корекции и персонализирани дизайни.",
    images: ["/images/about/tattoo-sample1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Услуги" />
      <HomeServiceSection />

      <Script id="services-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Татуировки и Татуиране в Плевен",
          description:
            "Ink Spell Tattoo Studio предлага услуги за персонализирани татуировки, корекции на стари дизайни и създаване на уникални татуировки в Плевен.",
          provider: {
            "@type": "TattooParlor",
            name: "Ink Spell Tattoo Studio",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Васил Априлов 48",
              addressLocality: "Плевен",
              addressCountry: "BG",
            },
            image: [
              "https://www.ink-spell.com/images/about/tattoo-sample1.jpg",
              "https://www.ink-spell.com/images/about/tattoo-sample2.jpg",
            ],
            url: "https://www.ink-spell.com/services",
          },
        })}
      </Script>
    </main>
  );
};

export default ServicesPage;
