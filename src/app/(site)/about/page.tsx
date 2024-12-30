import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Me",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Me Page" />
      <About />
      <GoogleTestimonials />
    </main>
  );
};

export default AboutPage;
