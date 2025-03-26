import SectionTitle from "../Common/SectionTitle";
import GalleryGrid from "./GalleryGrid";
import { getGalleryItemsDirect } from "@/lib/fetchGallery";

export const revalidate = 3600; 

export default async function HomeGallerySection() {
  const images = await getGalleryItemsDirect();

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
