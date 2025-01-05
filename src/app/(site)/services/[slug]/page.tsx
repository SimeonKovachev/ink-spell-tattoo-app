import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { getSingleService } from "@/lib/fetchServices";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { ArrowLeft, Clock, ListChecks } from "lucide-react";
import Script from "next/script";
import portableTextComponents from "@/components/Common/PortableTextComponents";

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

export default async function ServicePage({ params }: { params: PageParams }) {
  const service = await getSingleService(params.slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-dark to-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <p className="text-center text-xl text-gray-300">
            Услугата не е намерена.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-black">
      <Breadcrumb pageName={service.name} />

      <main className="container mx-auto px-4 py-12 lg:py-16">
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative w-full h-96">
            <Image
              src={service.image?.asset?.url || "/images/placeholder.jpg"}
              alt={service.name}
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <aside className="lg:col-span-1">
            <div className="space-y-8">
              {service.features?.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-4">
                    <ListChecks className="text-accent-purple" />
                    <h2 className="text-xl font-bold text-white">
                      Характеристики
                    </h2>
                  </div>
                  <ul className="list-inside list-disc space-y-2 text-gray-300">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent-purple mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.duration && (
                <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-accent-purple" />
                    <h2 className="text-xl font-bold text-white">
                      Продължителност
                    </h2>
                  </div>
                  <p className="text-gray-300">{service.duration}</p>
                </div>
              )}
            </div>
          </aside>

          <section className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-white">{service.name}</h1>
              <p className="text-lg leading-relaxed text-gray-300">
                {service.description}
              </p>
            </div>

            {service.detailedDescription && (
              <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 lg:p-8 border border-gray-700/50">
                <PortableText
                  value={service.detailedDescription}
                  components={portableTextComponents}
                />
              </div>
            )}

            {service.gallery?.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Галерия</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-lg overflow-hidden group shadow-md"
                    >
                      <Image
                        src={image.asset.url}
                        alt={`${service.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent-purple hover:text-hover-purple transition-all group"
            >
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Назад към услугите</span>
            </Link>
          </section>
        </div>
      </main>

      <Script id="service-page-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: {
            "@type": "TattooParlor",
            name: "Ink Spell Tattoo Studio",
            image: service.image?.asset?.url || "/images/placeholder.jpg",
          },
        })}
      </Script>
    </div>
  );
}
