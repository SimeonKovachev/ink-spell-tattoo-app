import { Service, ServiceCategory, ServicesByCategory } from "@/types/service";
import { client } from "./client";
import {
  SERVICES_QUERY,
  SERVICES_BY_CATEGORY_QUERY,
  SINGLE_SERVICE_QUERY,
  SERVICES_BASIC_QUERY,
} from "./queries/servicesQuery";

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

export async function getServicesByCategory(
  category: ServiceCategory
): Promise<Service[]> {
  try {
    const query = SERVICES_BY_CATEGORY_QUERY(category);
    const services = await client.fetch(query);
    if (!services || services.length === 0) {
      console.warn(`No services found for category: ${category}`);
      return [];
    }
    return services as Service[];
  } catch (error) {
    console.error(`Error fetching services for category "${category}":`, error);
    return [];
  }
}

export async function getAllServicesByCategories(): Promise<ServicesByCategory> {
  try {
    const allServices = await getAllServices();

    const servicesByCategory: ServicesByCategory = {
      tattoo: [],
      "permanent-makeup": [],
      //piercing: [],
      "temporary-tattoo": [],
      "inkless-tattoo": [],
    };

    allServices.forEach((service) => {
      if (service.category && servicesByCategory[service.category]) {
        servicesByCategory[service.category].push(service);
      }
    });

    return servicesByCategory;
  } catch (error) {
    console.error("Error grouping services by categories:", error);
    return {
      tattoo: [],
      "permanent-makeup": [],
      //piercing: [],
      "temporary-tattoo": [],
      "inkless-tattoo": [],
    };
  }
}

export async function getSingleService(slug: string): Promise<Service | null> {
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
}

export async function getServicesBasic(): Promise<Partial<Service>[]> {
  try {
    const services = await client.fetch(SERVICES_BASIC_QUERY);
    if (!services || services.length === 0) {
      console.warn("No basic services found");
      return [];
    }
    return services;
  } catch (error) {
    console.error("Error fetching basic services:", error);
    return [];
  }
}

export async function hasServicesInCategory(
  category: ServiceCategory
): Promise<boolean> {
  try {
    const services = await getServicesByCategory(category);
    return services.length > 0;
  } catch (error) {
    console.error(`Error checking services in category "${category}":`, error);
    return false;
  }
}
