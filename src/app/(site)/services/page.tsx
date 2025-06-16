import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import { getAllServicesByCategories } from "@/lib/fetchServices";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Услуги | Татуировки И Перманентен грим в Плевен",
  description:
    "Разгледайте услугите на Ink Spell Tattoo Studio в Плевен. Специализирани в персонализирани татуировки, перманентен грим и микроблейдинг.",
  keywords: [
    "услуги татуировки",
    "татуиране в Плевен",
    "перманентен грим Плевен",
    "микроблейдинг Плевен",
    "пудрови вежди",
    "микропигментация Плевен",
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
    title: "Услуги | Татуировки И Перманентен грим в Плевен",
    description:
      "Открийте разнообразието от услуги на Ink Spell Tattoo Studio. Предлагаме професионално татуиране, перманентен грим, микроблейдинг, микропигментация и създаване на уникални персонализирани дизайни.",
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
    title: "Услуги | Татуировки и Перманентен грим в Плевен",
    description:
      "Открийте услугите на Ink Spell Tattoo Studio в Плевен - професионални татуировки, перманентен грим, микроблейдинг, микропигментация и персонализирани дизайни.",
    images: ["/images/about/tattoo-sample1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 3600;

export default async function ServicesPage() {
  const servicesByCategory = await getAllServicesByCategories();

  return (
    <main>
      <Breadcrumb pageName="Услуги" />
      <HomeServiceSection servicesByCategory={servicesByCategory} />

      <Script id="services-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Услуги на Ink Spell Tattoo Studio",
          description:
            "Пълен списък от услуги включващи татуировки, перманентен грим и пиърсинг",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "Татуировки и Татуиране в Плевен",
              description:
                "Персонализирани татуировки, корекции на стари дизайни и създаване на уникални татуировки в Плевен.",
              provider: {
                "@type": "TattooParlor",
                name: "Ink Spell Tattoo Studio",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Петко Р. Славейков 39",
                  addressLocality: "Плевен",
                  addressCountry: "BG",
                },
                url: "https://www.ink-spell.com/services",
              },
            },
            {
              "@type": "Service",
              position: 2,
              name: "Перманентен грим и Микроблейдинг",
              description:
                "Професионален перманентен грим, микроблейдинг на вежди, пудрови вежди и други техники за дълготрайна красота.",
              provider: {
                "@type": "BeautySalon",
                name: "Ink Spell Tattoo Studio",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Петко Р. Славейков 39",
                  addressLocality: "Плевен",
                  addressCountry: "BG",
                },
                url: "https://www.ink-spell.com/services",
              },
            },
          ],
        })}
      </Script>
    </main>
  );
}
