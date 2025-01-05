import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/BookNow";
import WaveDivider from "@/components/Common/ShapeDivider";
import Faq from "@/components/Faq";
import HomeGallerySection from "@/components/Gallery/HomeGallerySection";
import Header from "@/components/Hero";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <HomeServiceSection />
      <HomeGallerySection />
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
