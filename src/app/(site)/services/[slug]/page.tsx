import { PortableText, PortableTextReactComponents } from "@portabletext/react";
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
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-dark to-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <p className="text-center text-xl text-gray-300">
            Service not found.
          </p>
        </div>
      </div>
    );
  }

 const portableTextComponents: PortableTextReactComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-300">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {},
  hardBreak: () => <br />,
  unknownBlockStyle: ({ children }) => (
    <p className="text-gray-300">{children}</p>
  ), 
  unknownList: ({ children }) => (
    <ul className="list-disc ml-5 space-y-2">{children}</ul>
  ),
  unknownListItem: ({ children }) => <li>{children}</li>,
  unknownMark: ({ children }) => <span>{children}</span>,
  types: {}, 
  unknownType: ({ value }) => (
    <div className="text-red-500">
      Unknown type: {JSON.stringify(value, null, 2)}
    </div>
  ),
};

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
                    <h2 className="text-xl font-bold text-white">Features</h2>
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
                    <h2 className="text-xl font-bold text-white">Duration</h2>
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
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
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
              <span>Back to Services</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
