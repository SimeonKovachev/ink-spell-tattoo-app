import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { getSingleService } from "@/lib/fetchServices";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { ArrowLeft, Clock, ListChecks } from "lucide-react";

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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <p className="text-center text-xl text-gray-600 dark:text-gray-300">
            Service not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-gray-900">
      <Breadcrumb pageName={service.name} />

      <main className="container mx-auto px-4 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-video relative">
            <Image
              src={service.image?.asset?.url || "/images/placeholder.jpg"}
              alt={service.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 lg:p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {service.detailedDescription && (
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="prose prose-invert prose-lg max-w-none">
                  <PortableText value={service.detailedDescription} />
                </div>
              </div>
            )}

            {/* Gallery Grid */}
            {service.gallery?.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-lg overflow-hidden group shadow-lg"
                    >
                      <Image
                        src={image.asset.url}
                        alt={`${service.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features Section */}
            {service.features?.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="text-yellow-500" />
                  <h2 className="text-xl font-bold text-white">Features</h2>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-yellow-500 text-lg">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Duration Section */}
            {service.duration && (
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-yellow-500" />
                  <h2 className="text-xl font-bold text-white">Duration</h2>
                </div>
                <p className="text-gray-300">{service.duration}</p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mt-12 text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </Link>
      </main>
    </div>
  );
}