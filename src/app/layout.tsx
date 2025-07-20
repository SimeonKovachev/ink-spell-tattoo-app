import RootLayout from "@/components/RootLayout";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getSiteAlert } from "@/lib/fetchSiteAlert";
import SiteAlertBanner from "@/components/SiteAlertBanner.tsx";
import Script from "next/script";
import PageTracker from "@/components/Common/PageTracker";

export const metadata = {
  metadataBase: new URL("https://www.ink-spell.com"),
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

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const alert = await getSiteAlert();

  return (
    <html
      suppressHydrationWarning
      lang="bg"
      className={`${montserrat.variable}`}
    >
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16778180960"
          strategy="beforeInteractive"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FKY2SN96TJ"
          strategy="beforeInteractive"
        />

        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            window.gtag = gtag;
          `}
        </Script>

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            gtag('config', 'AW-16778180960', {
              'allow_enhanced_conversions': true,
              'send_page_view': true
            });
          `}
        </Script>

        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            gtag('config', 'G-FKY2SN96TJ');
          `}
        </Script>

        <Script id="force-ads-pageview" strategy="afterInteractive">
          {`
            gtag('event', 'page_view', {
              'send_to': 'AW-16778180960'
            });
          `}
        </Script>

        {/* Page Tracking Component */}
        <PageTracker />

        {alert && <SiteAlertBanner {...alert} />}
        <RootLayout>{children}</RootLayout>
        <Analytics />
        <SpeedInsights />

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
                streetAddress: "ул. Петко Р. Славейков 39",
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
