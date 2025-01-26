"use client";

import { useEffect, useState } from "react";
import { GalleryItem } from "@/types/galleryItem";
import GalleryGrid from "./GalleryGrid";
import { getAllGalleryItems } from "@/lib/fetchGallery";

export default function Gallery() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const data = await getAllGalleryItems();
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <GalleryGrid images={images} paginated={false} />
      </div>
    </section>
  );
}
