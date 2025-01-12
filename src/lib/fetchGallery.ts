import { GalleryItem } from "@/types/galleryItem";
import { fetcher } from "./fetcher";

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  return fetcher<GalleryItem[]>("/api/gallery");
}
