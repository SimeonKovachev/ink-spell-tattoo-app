import RootLayout from "@/components/RootLayout";

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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
