import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Татуировки и Татуиране в Плевен",
  description:
    "Разгледайте услугите на Ink Spell Tattoo Studio в Плевен. Специализирани в татуиране, корекции и персонализирани дизайни.",
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
