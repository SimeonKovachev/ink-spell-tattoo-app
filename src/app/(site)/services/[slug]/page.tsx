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

  return {
    title: `${service.name} | Услуги от Ink Spell Tattoo Studio`,
    description: service.seo?.metaDescription || service.description,
    keywords: service.seo?.metaKeywords || [
      "услуги за татуировки",
      "татуировка Плевен",
      "Ink Spell Tattoo Studio услуги",
      "уникални татуировки",
      "персонализирани дизайни татуировки",
    ],
    openGraph: {
      title: `${service.name} | Услуги от Ink Spell Tattoo Studio`,
      description:
        service.seo?.metaDescription ||
        `Открийте повече за услугата ${service.name} в Ink Spell Tattoo Studio. Специализираме се в персонализирани татуировки.`,
      url: `https://www.ink-spell.com/services/${params.slug}`,
      type: "article",
      siteName: "Ink Spell Tattoo Studio",
      images: [
        {
          url: service.image?.asset?.url || "/images/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Услуги от Ink Spell Tattoo Studio`,
      description:
        service.seo?.metaDescription ||
        `Открийте повече за услугата ${service.name} в Ink Spell Tattoo Studio.`,
      images: [service.image?.asset?.url || "/images/placeholder.jpg"],
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
