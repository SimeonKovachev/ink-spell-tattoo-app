import { client } from "./client";
import { FlashPromo } from "@/types/flashPromo";
import { FLASH_PROMO_QUERY } from "./queries/flashPromoQuery";

export async function getActiveFlashPromos(): Promise<FlashPromo[]> {
  try {
    const promos = await client.fetch<FlashPromo[]>(FLASH_PROMO_QUERY);
    return promos ?? [];
  } catch (error) {
    console.error("Error fetching flash promos:", error);
    return [];
  }
}
