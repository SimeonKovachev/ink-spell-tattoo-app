import Head from "next/head";

export default function AppHead() {
  return (
    <Head>
      {/* Page Title */}
      <title>Ink Spell Tattoo Studio | Премиум татуиране в България</title>

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Ink Spell Tattoo Studio в Плевен, където талантливата художничка Ива създава уникални татуировки с артистичен подход. Специализирани в персонализирани дизайни, астрологична символика и Таро изкуство. Създаваме значими татуировки, които разказват вашата лична история."
      />
      <meta
        name="keywords"
        content="Ink Spell Tattoo Studio, тату студио Плевен, татуировки Плевен, Ива Лазарова татуировки, цени на татуировки Плевен, студио за татуировки Плевен, художествени татуировки, татуист Плевен, персонализирани татуировки, дизайн на татуировки, уникални татуировки, цветни татуировки Плевен, фини линии татуировки, минималистични татуировки, геометрични татуировки, илюстративни татуировки, астрологични татуировки, таро татуировки, символични татуировки, мистични татуировки, консултация за татуировка, коригиране на татуировки, дизайн на custom татуировки, tattoo studio Pleven, custom tattoo Pleven, professional tattoo artist Bulgaria, artistic tattoos Bulgaria"
      />
      <meta name="author" content="Ink Spell Tattoo Studio" />

      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Ink Spell Tattoo Studio | Премиум татуиране в България"
      />
      <meta
        property="og:description"
        content="Открийте уникалното изкуство на татуирането в Плевен. Персонализирани дизайни, астрология и художествени татуировки от професионален артист с background в илюстрацията."
      />
      <meta
        property="og:image"
        content="https://www.ink-spell.com/images/ink-spell-full-colored-logo.jpg"
      />
      <meta property="og:url" content="https://ink-spell.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ink Spell Tattoo Studio" />

      {/* Alternate Links */}
      <link rel="canonical" href="https://www.ink-spell.com" />
      <link rel="alternate" hrefLang="bg-BG" href="https://www.ink-spell.com" />

      {/* Robots Meta */}
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />

      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="" />
      <meta name="yandex-verification" content="" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Ink Spell Tattoo Studio",
            image: "https://www.ink-spell.com/images/studio.jpg",
            description:
              "Професионално студио за художествени татуировки в Плевен",
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
              latitude: "ВАШАТА_ШИРИНА",
              longitude: "ВАШАТА_ДЪЛЖИНА",
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
    </Head>
  );
}
