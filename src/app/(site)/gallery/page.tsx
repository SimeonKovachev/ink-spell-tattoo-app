import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Page",
  description: "This is services page description",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Gallery" />
      <Gallery />
    </>
  );
};

export default ServicesPage;
