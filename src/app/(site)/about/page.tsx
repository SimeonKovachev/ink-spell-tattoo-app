import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import GoogleTestimonials from "@/components/Testimonials/GoogleTestimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "За Ink Spell Tattoo Studio | Татуировки в Плевен",
  description:
    "Научете повече за Ink Spell Tattoo Studio и талантливия татуист Ива. Специализирани в уникални татуировки, които разказват вашата история.",
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
