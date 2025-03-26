import { GalleryItem } from "@/types/galleryItem";
import { GALLERY_QUERY } from "./queries/galleryQuery";
import { client } from "./client";

export async function getGalleryItemsDirect(): Promise<GalleryItem[]> {
  try {
    const galleryItems = await client.fetch<GalleryItem[]>(GALLERY_QUERY);
    return galleryItems || [];
  } catch (error) {
    console.error("Error fetching gallery from Sanity:", error);
    return [];
  }
}
