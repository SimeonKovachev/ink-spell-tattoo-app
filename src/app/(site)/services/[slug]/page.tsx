import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { getSingleService } from "@/lib/fetchServices";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

type PageParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const service = await getSingleService(params.slug);

  if (!service)
    return {
      title: "Service Not Found",
      description: "No service details are available",
      robots: { index: false, follow: false },
    };

  return {
    title:
      service.seo?.metaTitle || `${service.name} | ${process.env.SITE_NAME}`,
    description: service.seo?.metaDescription || service.description,
    keywords: service.seo?.metaKeywords,
  };
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const service = await getSingleService(params.slug);

  if (!service) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-center text-xl text-gray-600">Service not found.</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName={service.name} />
      <section className="bg-dark pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Service Image */}
              <div className="mb-10">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={service.image?.asset?.url || "/images/placeholder.jpg"}
                    alt={service.name}
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Service Title */}
              <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                {service.name}
              </h1>

              {/* Description */}
              <div className="mb-8 text-lg leading-relaxed text-gray-300">
                <p>{service.description}</p>
              </div>

              {/* Detailed Description */}
              {service.detailedDescription && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    About the Service
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <PortableText value={service.detailedDescription} />
                  </div>
                </div>
              )}

              {/* Features */}
              {service.features?.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Key Features
                  </h2>
                  <ul className="list-inside list-disc space-y-2 text-gray-300">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Duration */}
              {service.duration && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Duration
                  </h2>
                  <p className="text-gray-300">{service.duration}</p>
                </div>
              )}

              {/* Back to Services */}
              <Link
                href="/services"
                className="mt-8 inline-block text-yellow-500 hover:underline"
              >
                ← Back to Services
              </Link>
            </div>

            {/* Sidebar: Gallery */}
            {service.gallery?.length > 0 && (
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Gallery
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {service.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-48 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={image.asset.url}
                          alt={`${service.name} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
