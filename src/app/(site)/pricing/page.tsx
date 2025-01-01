import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цени за татуировки | Ink Spell Tattoo Studio",
  description:
    "Вижте цени за татуировки в Ink Spell Tattoo Studio. Конкурентни цени за уникални и персонализирани дизайни.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
