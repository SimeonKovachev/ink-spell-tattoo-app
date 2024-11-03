import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ink Spell Tattoo Studio - Custom Artistic Tattoos",
  description:
    "Welcome to Ink Spell Tattoo Studio, where experienced artist Iva creates unique tattoos with a personal touch. With a background in illustration and expertise in custom designs, astrology, and Tarot-inspired art, Ink Spell offers meaningful tattoos that tell your story.",
  keywords: [
    // Brand and general keywords
    "Ink Spell Tattoo Studio",
    "Iva Lazarova tattoos",
    "Ink Spell tattoos",
    "custom tattoos",
    "artistic tattoos",
    "tattoo artist",
    "professional tattoo artist",
    "unique tattoos",
    "bespoke tattoos",
    "high-quality tattoos",
    "fine line tattoos",
    "tattoo studio",
    "professional tattoo studio",

    // Custom and personalized tattoos
    "personalized tattoos",
    "custom tattoo designs",
    "one of a kind tattoos",
    "tattoo artist for custom designs",
    "illustrative tattoos",
    "creative tattoos",
    "detailed tattoos",
    "character tattoos",
    "concept art tattoos",
    "custom black and gray tattoos",
    "realistic tattoos",
    "portrait tattoos",
    "minimalist tattoos",

    // Mystical and spiritual elements
    "mystical tattoos",
    "Tarot tattoos",
    "astrology tattoos",
    "spiritual tattoos",
    "esoteric tattoos",
    "symbolic tattoos",
    "mystical symbols tattoos",
    "spiritual art tattoos",
    "metaphysical tattoos",
    "cosmic tattoos",

    // Specific styles and popular tattoo types
    "illustration tattoos",
    "fine art tattoos",
    "line work tattoos",
    "detailed line tattoos",
    "dotwork tattoos",
    "geometric tattoos",
    "mandala tattoos",
    "minimal tattoos",
    "watercolor tattoos",
    "black and gray tattoos",
    "tattoo design studio",

    // Tattooing services and related keywords
    "custom tattoo consultations",
    "unique tattoo designs",
    "bespoke tattoo artist",
    "commissioned tattoo art",
    "tattoo art studio",
    "highly skilled tattoo artist",
    "illustration-based tattoos",
    "personalized body art",
    "astrology-inspired tattoos",
    "illustration inspired tattoos",

    // Location-neutral but relevant terms for SEO
    "professional tattoos near me",
    "unique tattoos near me",
    "top rated tattoo studio",
    "modern tattoo studio",
    "quality tattoo designs",
    "experienced tattoo artist",
    "trusted tattoo artist",
    "professional tattooing services",
    "custom tattoo artist",
    "tattoo artist with illustration background",

    // Bulgarian keywords for local SEO
    "тату студио",
    "татуировка",
    "уникални татуировки",
    "художествени татуировки",
    "тату артист",
    "професионален тату артист",
    "висококачествени татуировки",
    "персонализирани татуировки",
    "дизайнерски татуировки",
    "тайнствени татуировки",
    "астрологични татуировки",
    "таро татуировки",
    "реалистични татуировки",
    "портретни татуировки",
    "детайлни татуировки",
    "геометрични татуировки",
    "минималистични татуировки",
    "уникален дизайн на татуировки",
    "поръчкови татуировки",
    "илюстративни татуировки",
    "мистични татуировки",
    "символични татуировки",
    "спиритуални татуировки",
  ],
  openGraph: {
    title: "Ink Spell Tattoo Studio - Custom Artistic Tattoos",
    description:
      "At Ink Spell Tattoo Studio, artist Iva Lazarova brings a personal touch to every tattoo. With a strong foundation in illustration, Iva specializes in custom designs, astrology and Tarot-inspired tattoos, and unique pieces that tell your story.",
    url: "https://ink-spell.com",
    type: "website",
    images: [
      {
        url: "/images/ink-spell-full-colored-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio - Custom Artistic Tattoos by Iva",
      },
    ],
  },
};

export function generateMetadata() {
  return metadata;
}
