import RootLayout from "@/components/RootLayout";

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
    icon: "/images/favicon.ico",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>{children}</RootLayout>
  );
}
