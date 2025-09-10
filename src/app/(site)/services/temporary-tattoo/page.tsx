import { Metadata } from "next";
import Script from "next/script";
import { getServicesByCategory } from "@/lib/fetchServices";
import {
  generateBreadcrumbData,
  generateCategoryMetadata,
  generateCategoryStructuredData,
} from "@/lib/utils/seo-utils";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceCategoryClient from "../ServiceCategoryClient";

export async function generateMetadata(): Promise<Metadata> {
  return generateCategoryMetadata("temporary-tattoo");
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function TemporaryTattooPage() {
  const services = await getServicesByCategory("temporary-tattoo");
  const structuredData = generateCategoryStructuredData(
    "temporary-tattoo",
    services
  );
  const breadcrumbData = generateBreadcrumbData("temporary-tattoo");

  return (
    <>
      <Breadcrumb
        pageName="Временни татуировки"
        homeUrl="/"
        parentName="Услуги"
        parentUrl="/services"
      />

      <ServiceCategoryClient category="temporary-tattoo" services={services} />

      <Script id="temporary-tattoo-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Script id="temporary-tattoo-breadcrumb-data" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
    </>
  );
}
