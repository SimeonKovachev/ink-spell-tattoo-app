import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/BookNow";
import Faq from "@/components/Faq";
import HomeGallerySection from "@/components/Gallery";
import Header from "@/components/Hero";
import HomeServiceSection from "@/components/Services/HomeServiceSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <HomeServiceSection />
      <HomeGallerySection />
      <HomeBlogSection />
      <Faq />
      <Contact />
    </div>
  );
}
