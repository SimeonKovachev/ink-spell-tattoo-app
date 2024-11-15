"use client";

import { useEffect, useState } from "react";
import { client } from "../lib/client";
import { urlFor } from "../lib/image";
import Link from "next/link";
import Button from "./Button";
import { GalleryItem } from "@/types/galleryItem";
import { GALLERY_QUERY } from "@/lib/queries/galleryQuery";

export default function Gallery() {
  const [images, setImages] = useState<GalleryItem[]>([]);

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

  if (images.length === 0) {
    return <p className="text-center py-12">Loading Gallery...</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Tattoo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img) => (
          <Link
            key={img._id}
            href={`/gallery/${img.slug.current}`}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={
                  img.image?.asset?.url
                    ? urlFor(img.image.asset)
                        .width(400)
                        .height(400)
                        .quality(80)
                        .url()
                    : "/images/placeholder.png"
                }
                alt={img.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{img.title}</h3>
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button text="View Gallery" type="outlined" />
      </div>
    </section>
  );
}
