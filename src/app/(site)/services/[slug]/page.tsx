import { getSingleService } from "@/lib/fetchServices";
import { Metadata } from "next";
import ServiceClient from "./ServiceClient";

type PageParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const service = await getSingleService(params.slug);

  if (!service) {
    return {
      title: "Услугата не е намерена",
      description: "Няма налична информация за тази услуга",
      robots: { index: false, follow: false },
    };
  }

  const name = service.name;
  const baseTitle = `${name} | Ink Spell Tattoo Studio Плевен`;
  const baseDesc =
    service.seo?.metaDescription ||
    `${name} от Ink Spell Tattoo Studio – професионална услуга за татуировки, перманентен грим, микроблейдинг и микропигментация в Плевен.`;
  const imgUrl = service.image?.asset?.url || "/images/placeholder.jpg";

  const generalKeywords = [
    "Ink Spell Tattoo Studio",
    "услуги татуировки",
    "перманентен грим Плевен",
    "микроблейдинг Плевен",
    "микропигментация Плевен",
    "татуировки Плевен",
  ];

  const categoryKeywords: Record<string, string[]> = {
    tattoo: ["персонализирани татуировки", "дизайни на татуировки"],
    "permanent-makeup": [
      "пудрови вежди",
      "комбиниран метод вежди",
      "дълготраен грим",
    ],
    piercing: ["професионален пиърсинг", "бижута за пиърсинг"],
  };

  const keywords = [
    ...(service.seo?.metaKeywords || []),
    ...generalKeywords,
    ...(categoryKeywords[service.category] || []),
  ];

  return {
    title: baseTitle,
    description: baseDesc,
    keywords,
    alternates: {
      canonical: `https://www.ink-spell.com/services/${params.slug}`,
    },
    openGraph: {
      title: baseTitle,
      description: baseDesc,
      url: `https://www.ink-spell.com/services/${params.slug}`,
      type: "article",
      siteName: "Ink Spell Tattoo Studio",
      images: [{ url: imgUrl, width: 1200, height: 630, alt: name }],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDesc,
      images: [imgUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const revalidate = 3600;
export default async function ServicePage({ params }: { params: PageParams }) {
  const service = await getSingleService(params.slug);
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-dark">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <p className="text-center text-xl text-gray-300">
            Услугата не е намерена.
          </p>
        </div>
      </div>
    );
  }

  return <ServiceClient service={service} />;
}
