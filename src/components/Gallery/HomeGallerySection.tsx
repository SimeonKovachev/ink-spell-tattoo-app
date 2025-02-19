"use client";

import { useEffect, useState } from "react";
import { GalleryItem } from "@/types/galleryItem";
import SectionTitle from "../Common/SectionTitle";
import GalleryGrid from "./GalleryGrid";
import { getAllGalleryItems } from "@/lib/fetchGallery";

export default function HomeGallerySection() {
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
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-12 md:py-24 lg:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 animate-fadeIn">
          <SectionTitle
            subtitle="Галерия"
            title="Изкуството на татуировките"
            paragraph="Потопете се в света на уникалните татуировки, създадени с внимание към детайла и страст към изкуството."
            width="840px"
            center
          />
        </div>
        <GalleryGrid images={images} paginated={true} />
      </div>
    </section>
  );
}
