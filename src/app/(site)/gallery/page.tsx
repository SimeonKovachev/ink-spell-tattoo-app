import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Галерия | Татуировки от Ink Spell Tattoo Studio в Плевен",
  description:
    "Разгледайте галерията на Ink Spell Tattoo Studio в Плевен. Вижте уникални татуировки, създадени с внимание към детайла и артистичен подход.",
  keywords: [
    "татуировки галерия",
    "Ink Spell Tattoo Studio галерия",
    "уникални татуировки",
    "татуировки Плевен",
    "персонализирани татуировки",
    "дизайни татуировки",
    "арт татуировки",
    "внимание към детайла",
    "татуировки идеи",
    "най-добрите татуировки в Плевен",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com/gallery",
  },
  openGraph: {
    title: "Галерия | Татуировки от Ink Spell Tattoo Studio в Плевен",
    description:
      "Разгледайте портфолиото на Ink Spell Tattoo Studio. Галерия от уникални дизайни и идеи за татуировки, вдъхновени от вашите истории.",
    url: "https://www.ink-spell.com/gallery",
    type: "article",
    siteName: "Ink Spell Tattoo Studio",
    images: [
      {
        url: "/images/about/tattoo-sample1.jpg",
        width: 1200,
        height: 630,
        alt: "Галерия от татуировки - Ink Spell Tattoo Studio",
      },
      {
        url: "/images/about/tattoo-sample2.jpg",
        width: 1200,
        height: 630,
        alt: "Уникални татуировки от Ink Spell Tattoo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Галерия | Татуировки от Ink Spell Tattoo Studio в Плевен",
    description:
      "Вижте галерията на Ink Spell Tattoo Studio - професионални и уникални татуировки с артистичен подход.",
    images: ["/images/about/tattoo-sample1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GalleryPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Галерия" />
      <Gallery />

      <Script id="gallery-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Галерия | Татуировки от Ink Spell Tattoo Studio",
          description:
            "Открийте уникалните татуировки, създадени от Ink Spell Tattoo Studio в Плевен. Галерия с разнообразие от дизайни и стилове, вдъхновени от лични истории.",
          mainEntity: {
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
            url: "https://www.ink-spell.com/gallery",
          },
        })}
      </Script>
    </main>
  );
};

export default GalleryPage;
