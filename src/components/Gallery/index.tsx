import { GalleryItem } from "@/types/galleryItem";
import GalleryGrid from "./GalleryGrid";

interface GalleryClientProps {
  images: GalleryItem[];
}

export default function Gallery({ images }: GalleryClientProps) {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <GalleryGrid images={images} paginated={false} imagesPerPage={12}/>
      </div>
    </section>
  );
}
