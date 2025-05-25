import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/BookNow";
import WaveDivider from "@/components/Common/ShapeDivider";
import Faq from "@/components/Faq";
import FlashPromosClient from "@/components/Flash/FlashPromosClient";
import HomeGallerySection from "@/components/Gallery/HomeGallerySection";
import Header from "@/components/Hero";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";
import { getActiveFlashPromos } from "@/lib/fetchPromos";
import { getAllServices } from "@/lib/fetchServices";

export const revalidate = 3600;

export default async function Home() {
  const services = await getAllServices();
  const promos = await getActiveFlashPromos();
  
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <HomeServiceSection services={services} />
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
      <HomeBlogSection />
      <div className="relative">
        <WaveDivider position="top" height={150} type="wave" color="#000000" />
        <Contact />
      </div>
    </div>
  );
}
