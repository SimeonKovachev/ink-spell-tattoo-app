"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GalleryItem } from "@/types/galleryItem";
import { GALLERY_QUERY } from "@/lib/queries/galleryQuery";
import Image from "next/image";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/image";
import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";

export default function HomeGallerySection() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await client.fetch(GALLERY_QUERY);
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGallery();
  }, []);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const paginatedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  if (images.length === 0) {
    return <p className="text-center py-12">Loading Gallery...</p>;
  }

  return (
    <section className="bg-black text-white py-16 px-8">
      {/* Section Title */}
      <div className="mb-[60px]">
        <SectionTitle
          subtitle="Gallery"
          title="Showcase of my work"
          paragraph="Explore my tattoo works that define artistry and precision."
          width="640px"
          center
        />
      </div>

      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedImages.map((img) => (
          <Link
            key={img._id}
            href={`/gallery/${img.slug.current}`}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {img.image?.asset?.url && (
                <Image
                  src={urlFor(img.image)
                    .width(400)
                    .height(400)
                    .quality(80)
                    .url()}
                  alt={img.title}
                  width={400}
                  height={400}
                  className="w-full h-72 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">{img.title}</h3>
                <p className="text-sm text-gray-300">{img.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={handlePrevPage}
          className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <span className="text-gray-300 text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* View Full Gallery Button */}
      <div className="text-center mt-12">
        <Link href="/gallery">
          <Button text="View Full Gallery" type="outlined" />
        </Link>
      </div>
    </section>
  );
}
