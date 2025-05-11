"use client";

import { useState } from "react";
import { Service } from "@/types/service";
import { GalleryItem } from "@/types/galleryItem";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Clock, ListChecks } from "lucide-react";
import { PortableText } from "@portabletext/react";

import Breadcrumb from "@/components/Common/Breadcrumb";
import portableTextComponents from "@/components/Common/PortableTextComponents";
import { getSizes, urlFor } from "@/lib/image";

import dynamic from "next/dynamic";
const ImagePreviewModal = dynamic(
  () => import("@/components/Common/ImagePreviewModal"),
  {
    ssr: false,
  }
);

interface ServiceClientProps {
  service: Service;
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-dark">
      <Breadcrumb pageName={service.name} />

      <main className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <aside className="lg:col-span-1 space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="aspect-[51/40] relative w-full">
                <Image
                  src={urlFor(service.image, { preset: "hero" })}
                  alt={service.name}
                  layout="fill"
                  className="object-cover"
                  sizes={getSizes("hero")}
                  priority
                />
              </div>
            </div>
            {service.features?.length > 0 && (
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
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
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-accent-purple" />
                  <h2 className="text-xl font-bold text-white">
                    Продължителност
                  </h2>
                </div>
                <p className="text-gray-300">{service.duration}</p>
              </div>
            )}
          </aside>

          <section className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-white">{service.name}</h1>
              <p className="text-lg leading-relaxed text-gray-300">
                {service.description}
              </p>
            </div>

            {service.detailedDescription && (
              <div className="bg-gray-800/50 rounded-xl p-6 lg:p-8 border border-gray-700/50">
                <PortableText
                  value={service.detailedDescription}
                  components={portableTextComponents}
                />
              </div>
            )}

            {service.galleryItems && service.galleryItems.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Галерия</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.galleryItems.map((item, index) => (
                    <button
                      key={item._id}
                      onClick={() => setSelectedImage(item)}
                      className="aspect-[51/40] relative rounded-lg overflow-hidden group shadow-md"
                    >
                      <Image
                        src={urlFor(item.image, { preset: "gallery" })}
                        alt={
                          item.title ||
                          `${service.name} gallery image ${index + 1}`
                        }
                        fill
                        sizes={getSizes("gallery")}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
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

      <ImagePreviewModal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        image={selectedImage}
      />

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
