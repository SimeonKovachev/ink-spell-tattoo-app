"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/client";
import { GALLERY_QUERY } from "@/lib/queries/galleryQuery";
import { GalleryItem } from "@/types/galleryItem";
import SectionTitle from "../Common/SectionTitle";
import GalleryGrid from "./GalleryGrid";

export default function HomeGallerySection() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(GALLERY_QUERY);
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
      <div className="min-h-[600px] flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 animate-fadeIn">
          <SectionTitle
            subtitle="Gallery"
            title="Showcase Of My Work"
            paragraph="Explore my tattoo works that define artistry and precision."
            width="640px"
            center
          />
        </div>
        <GalleryGrid images={images} paginated={true} />
      </div>
    </section>
  );
}
