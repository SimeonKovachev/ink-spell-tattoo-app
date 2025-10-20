"use client";

import { getSizes, urlFor } from "@/lib/image";
import { GalleryItem } from "@/types/galleryItem";
import Image from "next/image";
import { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useConversions } from "@/lib/gtag";

const ImagePreviewModal = dynamic(() => import("../Common/ImagePreviewModal"), {
  ssr: false,
});

const TABS = [
  { id: "tattoo", label: "Татуировки" },
  { id: "permanent-makeup", label: "Перманентен грим" },
  { id: "henna-tattoo", label: "Временни татуировки" },
  { id: "inkless-tattoo", label: "Безмастилни татуировки" },
] as const;

interface GalleryGridProps {
  images: GalleryItem[];
  paginated?: boolean;
  imagesPerPage?: number;
}

export default function GalleryGrid({
  images,
  paginated = false,
  imagesPerPage = 12,
}: GalleryGridProps) {
  const conversions = useConversions();

  const initialTab: (typeof TABS)[number]["id"] =
    images[0]?.category ?? "tattoo";
  const [tab, setTab] = useState(initialTab);

  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => {
      const dateA = new Date(a._createdAt).getTime();
      const dateB = new Date(b._createdAt).getTime();
      return dateB - dateA;
    });
  }, [images]);

  const byTab = sortedImages.filter((img) => img.category === tab);
  const totalPages = Math.ceil(byTab.length / imagesPerPage);
  const slice = paginated
    ? byTab.slice((page - 1) * imagesPerPage, page * imagesPerPage)
    : byTab;

  const go = (next: number) => {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTabChange = (tabId: typeof tab) => {
    conversions.galleryTabSwitch(tabId);

    setTab(tabId);
    setPage(1);
  };

  const handleImageClick = (img: GalleryItem) => {
    conversions.galleryImageClick(img.title);

    setSelectedImage(img);
  };

  const isNewImage = (createdAt: string): boolean => {
    const now = new Date().getTime();
    const created = new Date(createdAt).getTime();
    const daysDiff = (now - created) / (1000 * 60 * 60 * 24);
    return daysDiff <= 7;
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => handleTabChange(t.id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors
                ${
                  tab === t.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {slice.map((img, index) => (
          <button
            key={img._id}
            onClick={() => handleImageClick(img)}
            className="relative w-full p-0 border-none bg-transparent group animate-fadeIn overflow-hidden rounded-lg shadow-lg break-inside-avoid"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {img.image?.asset?.url && (
              <Image
                src={urlFor(img.image, { preset: "gallery" })}
                alt={img.title}
                width={800}
                height={600}
                sizes={getSizes("gallery")}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index < 4}
              />
            )}

            {isNewImage(img._createdAt) && (
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                  NEW
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {paginated && totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-6">
          <button
            onClick={() => go(page > 1 ? page - 1 : totalPages)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            aria-label="Previous page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-gray-300 font-medium">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => go(page < totalPages ? page + 1 : 1)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            aria-label="Next page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      <ImagePreviewModal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </>
  );
}
