"use client";

import Modal from "react-modal";
import Image from "next/image";
import { GalleryItem } from "@/types/galleryItem";
import { urlFor, getSizes } from "@/lib/image";

interface ImagePreviewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: GalleryItem | null;
}

export default function ImagePreviewModal({
  isOpen,
  onRequestClose,
  image,
}: ImagePreviewModalProps) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName="fixed inset-0 bg-black/75 flex items-center justify-center z-50 transition-opacity duration-300"
      className="relative bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg max-w-4xl max-h-[90vh] w-full shadow-xl border border-accent-purple"
    >
      <button
        onClick={onRequestClose}
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
          src={urlFor(image.image, { preset: "modal" })}
          alt={image.title || "Gallery Image"}
          fill
          className="object-contain"
          sizes={getSizes("modal")}
        />
      </div>

      <div className="text-center">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{image.title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          {image.description}
        </p>
      </div>
    </Modal>
  );
}
