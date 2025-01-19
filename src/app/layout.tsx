import RootLayout from "@/components/RootLayout";
import Head from "next/head";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: {
    default: "Ink Spell Tattoo Studio | Премиум татуиране в България",
    template: "%s | Ink Spell Tattoo Studio",
  },
  description:
    "Татуировки с изключителен дизайн в Плевен. Създайте уникална татуировка с Ink Spell Tattoo Studio. Безплатна консултация за вашата мечтана татуировка.",
  keywords: [
    "художествени татуировки Плевен",
    "персонализирани татуировки",
    "Ива Лазарова татуист",
    "концептуален художник татуировки",
    "безплатна консултация татуировки",
    "дизайн на татуировки Плевен",

    "уникални дизайни татуировки",
    "консултация за татуировка",
    "цени татуировки Плевен",
    "запазване на час татуировка",

    "фини линии татуировки",
    "минималистични татуировки",
    "геометрични татуировки",
    "илюстративни татуировки",

    "астрологични татуировки",
    "таро татуировки",
    "символични татуировки",

    "Ink Spell Tattoo Studio",
    "тату студио Плевен",
    "професионален татуист Плевен",

    "tattoo studio Pleven",
    "custom tattoo Bulgaria",
    "professional tattoo artist Pleven",
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
    icon: "/favicon.ico",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-subheading",
});

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="bg"
      className={`${montserrat.variable}`}
    >
      <Head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <RootLayout>{children}</RootLayout>

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
                latitude: "43.414790362561966",
                longitude: "24.619758278011275",
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
