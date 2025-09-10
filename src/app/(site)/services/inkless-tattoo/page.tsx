import { Metadata } from "next";
import Script from "next/script";
import { getServicesByCategory } from "@/lib/fetchServices";
import {
  generateCategoryMetadata,
  generateCategoryStructuredData,
  generateBreadcrumbData,
} from "@/lib/utils/seo-utils";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceCategoryClient from "../ServiceCategoryClient";

export async function generateMetadata(): Promise<Metadata> {
  return generateCategoryMetadata("inkless-tattoo");
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function InklessTattooPage() {
  const services = await getServicesByCategory("inkless-tattoo");
  const structuredData = generateCategoryStructuredData(
    "inkless-tattoo",
    services
  );
  const breadcrumbData = generateBreadcrumbData("inkless-tattoo");

  return (
    <>
      <Breadcrumb
        pageName="Безмастилни татуировки"
        homeUrl="/"
        parentName="Услуги"
        parentUrl="/services"
      />

      <ServiceCategoryClient category="inkless-tattoo" services={services} />

      <Script id="inkless-tattoo-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Script id="inkless-tattoo-breadcrumb-data" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
    </>
  );
}
