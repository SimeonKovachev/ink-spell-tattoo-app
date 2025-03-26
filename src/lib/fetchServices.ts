import { Service } from "@/types/service";
import { client } from "./client";
import { SERVICES_QUERY, SINGLE_SERVICE_QUERY } from "./queries/servicesQuery";

export async function getAllServices(): Promise<Service[]> {
  try {
    const services = await client.fetch(SERVICES_QUERY);
    if (!services || services.length === 0) {
      console.warn("No services found");
      return [];
    }
    return services as Service[];
  } catch (error) {
    console.error("Error fetching all services:", error);
    return [];
  }
}

export const getSingleService = async (
  slug: string
): Promise<Service | null> => {
  try {
    const query = SINGLE_SERVICE_QUERY(slug);
    const service = await client.fetch(query);
    if (!service) {
      console.warn(`No service found for slug: "${slug}"`);
      return null;
    }
    return service as Service;
  } catch (error) {
    console.error(`Error fetching service with slug "${slug}":`, error);
    return null;
  }
};
