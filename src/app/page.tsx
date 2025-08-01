import AboutSection from "@/components/About";
import Contact from "@/components/BookNow";
import WaveDivider from "@/components/Common/ShapeDivider";
import Faq from "@/components/Faq";
import FlashPromosClient from "@/components/Flash/FlashPromosClient";
import HomeGallerySection from "@/components/Gallery/HomeGallerySection";
import Header from "@/components/Hero";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";
import { fetchCertifications } from "@/lib/fetchCertifications";
import { getActiveFlashPromos } from "@/lib/fetchPromos";
import { getAllServicesByCategories } from "@/lib/fetchServices";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function Home() {
  const servicesByCategory = await getAllServicesByCategories();
  const promos = await getActiveFlashPromos();
  const certifications = await fetchCertifications();
  
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection certifications={certifications} />
      <HomeServiceSection servicesByCategory={servicesByCategory} />
      <FlashPromosClient promos={promos} />
      <div className="relative">
        <WaveDivider position="top" height={150} type="wave" color="#111827" />
        <HomeGallerySection />
      </div>
      <div className="relative">
        <WaveDivider position="top" height={150} type="wave" color="#111827" />
        <GoogleTestimonials />
      </div>
      <Faq isFormVisible={false} />
      <div className="relative">
        <WaveDivider position="top" height={150} type="wave" color="#111827" />
        <Contact />
      </div>
    </div>
  );
}
