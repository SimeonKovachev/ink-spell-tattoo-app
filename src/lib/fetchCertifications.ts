import { cache } from "react";
import { client } from "./client";
import { Certification } from "@/types/certification";

export const fetchCertifications = cache(async (): Promise<Certification[]> => {
  try {
    const certifications = await client.fetch<Certification[]>(
      `*[_type == "certification" && isActive == true] | order(priority asc, dateIssued desc) {
        _id,
        title,
        description,
        category,
        issuingOrganization,
        dateIssued,
        isActive,
        priority,
        slug,
        image {
          asset -> {
            url
          },
          alt
        }
      }`,
      {},
      {
        next: {
          revalidate: 3600,
          tags: ["certifications"],
        },
      }
    );

    return certifications || [];
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }
});

export const fetchCertificationBySlug = cache(
  async (slug: string): Promise<Certification | null> => {
    try {
      const certification = await client.fetch<Certification>(
        `*[_type == "certification" && slug.current == $slug][0] {
        _id,
        title,
        description,
        category,
        issuingOrganization,
        dateIssued,
        isActive,
        priority,
        slug,
        image {
          asset -> {
            url
          },
          alt
        }
      }`,
        { slug },
        {
          next: {
            revalidate: 3600,
            tags: ["certifications", `certification-${slug}`],
          },
        }
      );

      return certification || null;
    } catch (error) {
      console.error("Error fetching certification by slug:", error);
      return null;
    }
  }
);

export const fetchCertificationsByCategory = cache(
  async (category: string): Promise<Certification[]> => {
    try {
      const certifications = await client.fetch<Certification[]>(
        `*[_type == "certification" && category == $category && isActive == true] | order(priority asc, dateIssued desc) {
        _id,
        title,
        description,
        category,
        issuingOrganization,
        dateIssued,
        isActive,
        priority,
        slug,
        image {
          asset -> {
            url
          },
          alt
        }
      }`,
        { category },
        {
          next: {
            revalidate: 3600,
            tags: ["certifications", `category-${category}`],
          },
        }
      );

      return certifications || [];
    } catch (error) {
      console.error("Error fetching certifications by category:", error);
      return [];
    }
  }
);
