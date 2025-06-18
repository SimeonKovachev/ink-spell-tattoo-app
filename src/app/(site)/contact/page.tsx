import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/BookNow";
import { Metadata } from "next";
import Faq from "@/components/Faq";
import Script from "next/script";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Контакти | Свържете се с мен - Ink Spell Tattoo Studio в Плевен",
  description:
    "Свържете се директно с мен, Ива Лазарова, за да обсъдим вашите идеи за татуировка. Разположено в Плевен, моето студио предлага уникални персонализирани татуировки.",
  keywords: [
    "татуировки Плевен",
    "Ink Spell Tattoo Studio",
    "контакти татуист Плевен",
    "уникални татуировки",
    "персонализирани татуировки",
    "запазване на час татуировка",
    "цени татуировки Плевен",
    "консултация за татуировка",
  ],
  alternates: {
    canonical: "https://www.ink-spell.com/contact",
  },
  openGraph: {
    title: "Контакти | Свържете се с мен - Ink Spell Tattoo Studio в Плевен",
    description:
      "Свържете се с мен, Ива Лазарова, за персонализирани татуировки, които разказват вашата история. Студиото ми в Плевен предлага консултации и уникален дизайн.",
    url: "https://www.ink-spell.com/contact",
    type: "article",
    siteName: "Ink Spell Tattoo Studio",
    images: [
      {
        url: "/images/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio - Контакти",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти | Свържете се с мен - Ink Spell Tattoo Studio в Плевен",
    description:
      "Свържете се с мен, Ива Лазарова, за да обсъдим вашата идея за татуировка. Разположено в Плевен, студиото ми предлага персонализирани татуировки и консултации.",
    images: ["/images/contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Контакти" />
      <Contact />
      <Faq />

      <Script id="contact-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Контакти - Ink Spell Tattoo Studio",
          description:
            "Свържете се с мен, Ива Лазарова, за уникални персонализирани татуировки. Моето студио в Плевен предлага консултации и татуировки, които разказват вашата история.",
          mainEntity: {
            "@type": "Person",
            name: "Ива Лазарова",
            jobTitle: "Татуист",
            worksFor: {
              "@type": "Organization",
              name: "Ink Spell Tattoo Studio",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+359894300545",
              email: "support@ink-spell.com",
              contactType: "customer service",
              areaServed: "BG",
              availableLanguage: ["Bulgarian", "English"],
            },
          },
          image: "/images/contact.jpg",
          url: "https://www.ink-spell.com/contact",
        })}
      </Script>
    </>
  );
};

export default ContactPage;
