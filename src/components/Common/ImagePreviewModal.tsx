"use client";

import Modal from "react-modal";
import Image from "next/image";
import { GalleryItem } from "@/types/galleryItem";
import { urlFor, getSizes } from "@/lib/image";
import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
        fixed inset-0 z-[60] 
        flex items-center justify-center
        bg-black/80
        transition-opacity duration-300
        p-4 sm:p-6
      `}
      className={`
        relative w-full max-w-4xl max-h-[90vh]
        bg-gray-900/90
        rounded-2xl p-4 md:p-6 lg:p-8
        shadow-xl border border-accent-purple
        transition-all duration-300
        flex flex-col items-center
      `}
    >
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 z-[70] text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-transform duration-300 transform hover:scale-110"
        aria-label="Close Modal"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative w-full max-h-[80vh] overflow-hidden mb-6 flex items-center justify-center rounded-lg">
        <TransformWrapper
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: true }}
        >
          <TransformComponent>
            <Image
              src={urlFor(image.image, { preset: "modal" })}
              alt={image.title || "Gallery Image"}
              sizes={getSizes("modal")}
              width={800}
              height={600}
              className="object-contain w-full h-auto"
            />
          </TransformComponent>
        </TransformWrapper>
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
