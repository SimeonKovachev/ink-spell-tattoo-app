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
      overlayClassName={`
        fixed inset-0 z-50 
        flex items-center justify-center
        bg-black/80
        backdrop-blur-sm
        transition-opacity duration-300
        p-4 sm:p-6
      `}
      className={`
        relative w-full max-w-4xl max-h-[90vh]
        bg-gray-900/60 backdrop-blur-xl
        rounded-2xl p-4 md:p-6 lg:p-8
        shadow-xl border border-accent-purple
        transition-all duration-300
        flex flex-col items-center
      `}
    >
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 text-white bg-gray-800/60 hover:bg-gray-700 rounded-full p-2 transition-transform duration-300 transform hover:scale-110"
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
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="
          relative w-full
          aspect-[16/9]
          max-h-[75vh]
          overflow-hidden
          flex items-center justify-center
          mb-6
          rounded-lg
        "
      >
        <Image
          src={urlFor(image.image, { preset: "modal" })}
          alt={image.title || "Gallery Image"}
          fill
          sizes={getSizes("modal")}
          className="object-contain"
        />
      </div>

      <div className="text-center px-2">
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
          {image.title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {image.description}
        </p>
      </div>
    </Modal>
  );
}
