import FlashPromosClient from "@/components/Flash/FlashPromosClient";
import { getActiveFlashPromos } from "@/lib/fetchPromos";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "Флаш Татуировки – Промо Оферти в Плевен, Ловеч и региона | Ink Spell Tattoo",
  description:
    "Открийте флаш татуировки с уникални дизайни и промо цени в Плевен, Ловеч и близките градове. Бързи, стилни и достъпни татуси, идеални за феновете на боди арт. Възползвайте се от специалните оферти на Ink Spell Tattoo Studio!",
  keywords: [
    "флаш татуировки",
    "flash tattoo промоция",
    "евтини татуси",
    "татуси Плевен",
    "тату Плевен",
    "татуировки Ловеч",
    "tattoo оферти",
    "bързи татуси",
    "уникални тату дизайни",
    "tattoo studio Плевен",
    "област Плевен татуси",
  ],
  openGraph: {
    title: "Флаш Татуировки в Плевен и региона | Ink Spell Tattoo",
    description:
      "Разгледайте специалните флаш татуси на Ink Spell Tattoo Studio, валидни в Плевен, Ловеч и околните населени места. Модерни дизайни, отлични цени и ограничено време за резервация!",
    url: "https://www.ink-spell.com/flash",
    type: "article",
    siteName: "Ink Spell Tattoo Studio",
    images: [
      {
        url: "/images/flash-promos-hero.jpg", // актуализирайте пътя към ваша подходяща картинка
        width: 1200,
        height: 630,
        alt: "Флаш Тату Промоции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Флаш Татуировки – Промо Оферти за Плевен и Ловеч | Ink Spell Tattoo",
    description:
      "Специални флаш татуси на промо цени в Плевен и региона. Стилни, бързи и достъпни дизайни за феновете на уникалния боди арт.",
    images: ["/images/flash-promos-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ink-spell.com/flash",
  },
};


export default async function FlashPage() {
  const promos = await getActiveFlashPromos();
  return <FlashPromosClient promos={promos} />;
}
