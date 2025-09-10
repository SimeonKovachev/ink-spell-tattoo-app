// src/lib/seo-utils.ts
import { Service, ServiceCategory, SERVICE_CATEGORIES } from "@/types/service";

/**
 * Generate comprehensive SEO metadata for service categories
 * @param category - Service category
 * @returns SEO metadata object
 */
export function generateCategoryMetadata(category: ServiceCategory) {
  const categoryInfo = SERVICE_CATEGORIES[category];
  const categoryName = categoryInfo.name;
  const baseTitle = `${categoryName} | Ink Spell Tattoo Studio Плевен`;
  const baseDescription = `${categoryInfo.description}. Професионални услуги в Плевен с индивидуален подход и високо качество.`;

  const generalKeywords = [
    "Ink Spell Tattoo Studio",
    "услуги Плевен",
    "професионални услуги",
    "индивидуален подход",
  ];

  const keywords = [
    ...categoryInfo.localKeywords,
    ...generalKeywords,
    `${categoryName.toLowerCase()} Плевен`,
    `най-добри ${categoryName.toLowerCase()}`,
    `цени ${categoryName.toLowerCase()}`,
  ];

  return {
    title: baseTitle,
    description: baseDescription,
    keywords,
    alternates: {
      canonical: `https://www.ink-spell.com/services/${categoryInfo.slug}`,
    },
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `https://www.ink-spell.com/services/${categoryInfo.slug}`,
      type: "website",
      siteName: "Ink Spell Tattoo Studio",
      images: [
        {
          url: `/images/services/${categoryInfo.slug}-hero.jpg`,
          width: 1200,
          height: 630,
          alt: `${categoryName} - Ink Spell Tattoo Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
      images: [`/images/services/${categoryInfo.slug}-hero.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate structured data for service categories
 * @param category - Service category
 * @param services - Services in the category
 * @returns Schema.org structured data
 */
export function generateCategoryStructuredData(
  category: ServiceCategory,
  services: Service[]
) {
  const categoryInfo = SERVICE_CATEGORIES[category];

  const serviceListItems = services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.name,
    description: service.description,
    url: `https://www.ink-spell.com/services/${service.slug.current}`,
    provider: {
      "@type": getProviderType(category),
      name: "Ink Spell Tattoo Studio",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Петко Р. Славейков 39",
        addressLocality: "Плевен",
        addressCountry: "BG",
      },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${categoryInfo.name} - Ink Spell Tattoo Studio`,
    description: categoryInfo.description,
    itemListElement: serviceListItems,
    provider: {
      "@type": getProviderType(category),
      name: "Ink Spell Tattoo Studio",
      image: `https://www.ink-spell.com/images/services/${categoryInfo.slug}-hero.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Петко Р. Славейков 39",
        addressLocality: "Плевен",
        addressRegion: "Плевен",
        postalCode: "5800",
        addressCountry: "BG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.414790362561966",
        longitude: "24.619758278011275",
      },
      url: "https://www.ink-spell.com",
      telephone: "+359894300545",
    },
  };
}

/**
 * Get appropriate provider type for schema.org markup
 * @param category - Service category
 * @returns Schema.org provider type
 */
function getProviderType(category: ServiceCategory): string {
  switch (category) {
    case "tattoo":
    case "temporary-tattoo":
      return "TattooParlor";
    case "permanent-makeup":
    case "inkless-tattoo":
      return "BeautySalon";
    // case "piercing":
    //   return "TattooParlor"; // Closest match for piercing
    default:
      return "LocalBusiness";
  }
}

/**
 * Generate breadcrumb structured data
 * @param category - Optional service category
 * @param serviceName - Optional service name
 * @returns Breadcrumb structured data
 */
export function generateBreadcrumbData(
  category?: ServiceCategory,
  serviceName?: string
) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Начало",
      item: "https://www.ink-spell.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: "https://www.ink-spell.com/services",
    },
  ];

  if (category) {
    const categoryInfo = SERVICE_CATEGORIES[category];
    breadcrumbs.push({
      "@type": "ListItem",
      position: 3,
      name: categoryInfo.name,
      item: `https://www.ink-spell.com/services/${categoryInfo.slug}`,
    });

    if (serviceName) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 4,
        name: serviceName,
        item: "#",
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  };
}
