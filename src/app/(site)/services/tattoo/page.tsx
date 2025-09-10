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
  return generateCategoryMetadata("tattoo");
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function TattooPage() {
  const services = await getServicesByCategory("tattoo");
  const structuredData = generateCategoryStructuredData("tattoo", services);
  const breadcrumbData = generateBreadcrumbData("tattoo");

  return (
    <>
      <Breadcrumb
        pageName="Татуировки"
        homeUrl="/"
        parentName="Услуги"
        parentUrl="/services"
      />

      <ServiceCategoryClient category="tattoo" services={services} />

      <Script id="tattoo-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Script id="tattoo-breadcrumb-data" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
    </>
  );
}
