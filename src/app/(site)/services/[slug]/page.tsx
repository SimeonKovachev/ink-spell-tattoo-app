import Breadcrumb from "@/components/Common/Breadcrumb";
import { getSingleService } from "@/lib/fetchServices";
import Image from "next/image";
import Link from "next/link";

type PageParams = { slug: string };

export async function generateMetadata({ params }: { params: PageParams }) {
  const service = await getSingleService(params.slug);

  const siteName = process.env.SITE_NAME || "Your Site Name";

  if (service) {
    return {
      title: `${service.name} | ${siteName}`,
      description: service.description,
      robots: {
        index: true,
        follow: true,
      },
    };
  } else {
    return {
      title: "Service Not Found",
      description: "No service details are available",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const service = await getSingleService(params.slug);

  if (!service) return <p className="text-center py-12">Service not found.</p>;

  return (
    <>
      <Breadcrumb pageName={service.name} />
      <section className="pb-10 pt-20 bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-10 overflow-hidden rounded-lg">
                <Image
                  src={service.image?.asset?.url || "/images/placeholder.jpg"}
                  alt={service.name}
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold text-white">
                {service.name}
              </h1>
              <p className="text-gray-300">{service.description}</p>
              <Link href="/services">
                <a className="mt-6 inline-block text-yellow-500 hover:underline">
                  ← Back to Services
                </a>
              </Link>
            </div>
            {/* <div className="w-full px-4 lg:w-4/12">
              <Newsletter />
              <PopularArticle
                title="Featured Services"
                articles={services.slice(0, 3).map((s) => ({
                  name: s.name,
                  description: s.description,
                  image: s.image?.asset?.url || "/images/placeholder.jpg",
                }))}
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}