import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import { getGalleryItemsDirect } from "@/lib/fetchGallery";
import Script from "next/script";
import { Metadata } from "next";
import Button from "@/components/Common/Button"; // уверете се, че пътят е коректен

export const metadata: Metadata = {
  title: "Галерия | Татуировки от Ink Spell Tattoo Studio в Плевен",
  description:
    "Разгледайте нашата богата галерия от уникални татуировки – ретро, аниме, минималистични, реалистични и други. Ink Spell Tattoo Studio в Плевен предлага професионален подход и внимание към детайла.",
  keywords: [
    "татуировки галерия",
    "Ink Spell Tattoo Studio галерия",
    "уникални татуировки",
    "татуировки Плевен",
    "тату студио Плевен",
    "аниме татуировки",
    "ретро татуировки",
    "реалистични татуси",
    "черно-бели татуировки",
    "3D татуси",
    "флорални татуси",
    "персонализирани татуировки",
    "шрифтове и lettering",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com/gallery",
  },
  openGraph: {
    title: "Галерия | Татуировки от Ink Spell Tattoo Studio в Плевен",
    description:
      "Разгледайте портфолиото на Ink Spell Tattoo Studio. Галерия от уникални дизайни и идеи – реалистични, винтидж, аниме, 3D и други.",
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
      "Вижте нашата галерия – професионални и уникални татуировки с артистичен подход в Плевен.",
    images: ["/images/about/tattoo-sample1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function GalleryPage() {
  const images = await getGalleryItemsDirect();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Галерия | Татуировки от Ink Spell Tattoo Studio",
    description:
      "Разгледайте нашата богата галерия от разнообразни татуировки – от ретро до 3D, реализъм и аниме проекти.",
    mainEntity: {
      "@type": "TattooParlor",
      name: "Ink Spell Tattoo Studio",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Петко Р. Славейков 39",
        addressLocality: "Плевен",
        addressCountry: "BG",
      },
      image: [
        "https://www.ink-spell.com/images/about/tattoo-sample1.jpg",
        "https://www.ink-spell.com/images/about/tattoo-sample2.jpg",
      ],
      url: "https://www.ink-spell.com/gallery",
    },
  };

  return (
    <main>
      <Breadcrumb pageName="Галерия" />

      <Gallery images={images} />

      <section className="bg-gray-900 text-white py-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base leading-relaxed">
          <h2 className="text-lg md:text-xl font-semibold">
            Добре дошли в Ink Spell Tattoo Studio
          </h2>
          <p>
            Тук ще откриете селекция от <strong>уникални татуировки</strong> –
            ретро, <strong>аниме</strong>, <strong>реалистични</strong>,{" "}
            <strong>3D</strong>, минималистични и други. В нашето студио в
            Плевен работим с професионализъм и безкомпромисна хигиена, за да
            създадем <strong>качествени татуси</strong> със{" "}
            <strong>стил</strong> и <strong>детайлност</strong>.
          </p>
          <p>
            Предлагаме <strong>lettering</strong>,{" "}
            <strong>черно-бели дизайни</strong>, цветни{" "}
            <strong>флорални</strong> решения и всичко, което отразява вашата
            индивидуалност. Независимо дали търсите{" "}
            <strong>малък акцент</strong> или <strong>голям арт проект</strong>,
            свържете се с нас и запишете своя час. Вашата идея заслужава
            истинско <strong>тату изкуство</strong>.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-xl md:text-2xl font-bold">
            Готови ли сте за своята следваща татуировка?
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Свържете се с нас и запишете безплатна консултация. Ще обсъдим
            вашата идея и ще изберем перфектния дизайн, който отразява уникалния
            ви стил.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              text="Запишете час сега"
              type="filled"
              size="md"
              navigateTo="/contact"
            />
          </div>
        </div>
      </section>

      <Script id="gallery-page-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </main>
  );
}
