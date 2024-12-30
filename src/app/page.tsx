import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/BookNow";
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
      <GoogleTestimonials />
      <Faq isFormVisible={false} />
      <HomeBlogSection />
      <Contact />
    </div>
  );
}
