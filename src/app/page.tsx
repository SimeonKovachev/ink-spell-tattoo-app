import AboutMe from "@/components/AboutSection";
import BookNow from "@/components/BookNow";
import Gallery from "@/components/GallerySection";
import Header from "@/components/Header";
import Services from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutMe />
      <Services />
      <Gallery />
      {/* <Testimonials /> */}
      <BookNow />
    </div>
  );
}
