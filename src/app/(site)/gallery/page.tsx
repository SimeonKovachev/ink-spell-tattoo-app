import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерия | Татуировки от Ink Spell Tattoo Studio",
  description:
    "Разгледайте галерията на Ink Spell Tattoo Studio. Уникални татуировки с внимание към детайла и перфекционизъм.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="My Gallery Page" />
      <Gallery />
    </>
  );
};

export default ServicesPage;
