import AboutSection from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";
import { fetchCertifications } from "@/lib/fetchCertifications";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "За мен | Уникални Татуировки в Плевен",
  description:
    "Аз съм Ива Лазарова и създавам уникални татуировки в Ink Spell Tattoo Studio в Плевен. Татуировките ми разказват вашата история и подчертават вашата индивидуалност.",
  keywords: [
    "татуировки Плевен",
    "Ink Spell Tattoo Studio",
    "татуист Плевен",
    "уникални татуировки",
    "персонализирани дизайни",
    "татуировки Ива Лазарова",
    "художествени татуировки",
    "консултация за татуировка",
    "цени татуировки Плевен",
    "запазване на час татуировка",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com/about",
  },
  openGraph: {
    title: "За мен | Уникални Татуировки в Плевен",
    description:
      "Запознайте се с мен – Ива Лазарова, татуист в Ink Spell Tattoo Studio. Обичам да създавам татуировки, които отразяват вашата история и характер.",
    url: "https://www.ink-spell.com/about",
    type: "article",
    siteName: "Ink Spell Tattoo Studio",
    images: [
      {
        url: "/images/about/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio - За мен",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "За мен | Уникални Татуировки в Плевен",
    description:
      "Запознайте се с мен – Ива Лазарова, татуист в Ink Spell Tattoo Studio. Обичам да създавам татуировки, които отразяват вашата история и характер.",
    images: ["/images/about/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 3600;

export default async function AboutPage() {
  const certifications = await fetchCertifications();
  
  return (
    <main>
      <Breadcrumb pageName="За Мен" />
      <AboutSection certifications={certifications} />
      <GoogleTestimonials />

      <Script id="about-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "За мен",
          description:
            "Аз съм Ива Лазарова и създавам уникални татуировки в Ink Spell Tattoo Studio в Плевен. Вярвам, че всяка татуировка трябва да бъде отражение на вашата индивидуалност.",
          mainEntity: {
            "@type": "Person",
            name: "Ива Лазарова",
            jobTitle: "Татуист",
            description:
              "Млад татуист, който се стреми да създава изкуство, което разказва вашата история. Специализирам в персонализирани дизайни, които подчертават уникалността ви.",
            worksFor: {
              "@type": "Organization",
              name: "Ink Spell Tattoo Studio",
            },
          },
          image: "/images/about/portrait.jpg",
          url: "https://www.ink-spell.com/about",
        })}
      </Script>
    </main>
  );
};

