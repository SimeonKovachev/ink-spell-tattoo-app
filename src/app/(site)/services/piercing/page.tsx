//import { Metadata } from "next";
//import Script from "next/script";
// import { getServicesByCategory } from "@/lib/fetchServices";
// import {
//   generateCategoryMetadata,
//   generateCategoryStructuredData,
//   generateBreadcrumbData,
// } from "@/lib/utils/seo-utils";
import Breadcrumb from "@/components/Common/Breadcrumb";
//import ServiceCategoryClient from "../ServiceCategoryClient";

// export async function generateMetadata(): Promise<Metadata> {
//   return generateCategoryMetadata("piercing");
// }

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function PiercingPage() {
  // const services = await getServicesByCategory("piercing");
  // const structuredData = generateCategoryStructuredData("piercing", services);
  // const breadcrumbData = generateBreadcrumbData("piercing");

  return (
    <>
      <Breadcrumb
        pageName="Пиърсинг"
        homeUrl="/"
        parentName="Услуги"
        parentUrl="/services"
      />

      {/* <ServiceCategoryClient category="piercing" services={services} />

      <Script id="piercing-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Script id="piercing-breadcrumb-data" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script> */}
    </>
  );
}
