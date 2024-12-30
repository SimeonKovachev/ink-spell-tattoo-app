import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page",
  description: "This is services page description",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services Page" />
      <HomeServiceSection />
    </>
  );
};

export default ServicesPage;
