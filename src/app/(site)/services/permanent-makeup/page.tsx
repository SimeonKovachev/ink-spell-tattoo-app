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
  return generateCategoryMetadata("permanent-makeup");
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function PermanentMakeupPage() {
  const services = await getServicesByCategory("permanent-makeup");
  const structuredData = generateCategoryStructuredData(
    "permanent-makeup",
    services
  );
  const breadcrumbData = generateBreadcrumbData("permanent-makeup");

  return (
    <>
      <Breadcrumb
        pageName="Перманентен грим"
        homeUrl="/"
        parentName="Услуги"
        parentUrl="/services"
      />

      <ServiceCategoryClient category="permanent-makeup" services={services} />

      <Script id="permanent-makeup-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Script id="permanent-makeup-breadcrumb-data" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
    </>
  );
}
