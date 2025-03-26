"use client";

import { getSizes, urlFor } from "@/lib/image";
import { GalleryItem } from "@/types/galleryItem";
import Image from "next/image";
import { useState } from "react";
import ImagePreviewModal from "../Common/ImagePreviewModal";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const paginatedImages = paginated
    ? images.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
      )
    : images;

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {paginatedImages.map((img, index) => (
          <button
            key={img._id}
            onClick={() => setSelectedImage(img)}
            className="block w-full h-full p-0 border-none bg-transparent group animate-fadeIn relative overflow-hidden rounded-lg shadow-lg break-inside-avoid"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={`relative ${
                index % 3 === 0
                  ? "aspect-square"
                  : index % 3 === 1
                    ? "aspect-[4/3]"
                    : "aspect-[3/4]"
              }`}
            >
              {img.image?.asset?.url && (
                <Image
                  src={urlFor(img.image, { preset: "gallery" })}
                  alt={img.title}
                  fill
                  sizes={getSizes("gallery")}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index < 4}
                />
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
            </div>
          </button>
        ))}
      </div>

      {paginated && totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-6">
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
            }
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
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-gray-300 font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
            }
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
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Modal */}
      <ImagePreviewModal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </>
  );
}
