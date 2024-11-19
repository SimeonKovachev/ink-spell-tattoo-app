import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/Contact";
import BookNow from "@/components/Contact/BookNow";
import Gallery from "@/components/Gallery";
import Header from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Services />
      <Gallery />
      <HomeBlogSection />
      <Contact />
    </div>
  );
}
