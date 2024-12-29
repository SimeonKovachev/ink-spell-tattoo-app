"use client";

import { GalleryItem } from "@/types/galleryItem";
import Image from "next/image";
import { urlFor } from "@/lib/image";
import { useState } from "react";
import Modal from "react-modal";

interface GalleryGridProps {
  images: GalleryItem[];
  paginated?: boolean; // For enabling pagination
  imagesPerPage?: number; // Number of images per page
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
      {/* Image Grid */}
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
                  src={urlFor(img.image)
                    .width(800)
                    .height(1000)
                    .quality(90)
                    .url()}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

      {/* Pagination */}
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
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Image Modal"
        overlayClassName="fixed inset-0 bg-black/75 flex items-center justify-center z-50 transition-opacity duration-300"
        className="relative bg-gray-900 text-white p-8 md:p-10 lg:p-12 rounded-lg max-w-4xl w-full shadow-xl"
      >
        {selectedImage && (
          <>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-full p-2 transition-transform duration-300 transform hover:scale-110"
              aria-label="Close Modal"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full aspect-[16/9] max-h-[500px] overflow-hidden mb-6">
              <Image
                src={urlFor(selectedImage.image!)
                  .width(1200)
                  .height(800)
                  .quality(100)
                  .url()}
                alt={selectedImage.title || "Gallery Image"}
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
