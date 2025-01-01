import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/BookNow";
import { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Контакти | Ink Spell Tattoo Studio в Плевен",
  description:
    "Свържете се с Ink Spell Tattoo Studio за консултация. Разположено в Плевен, нашето студио създава татуировки, които разказват истории.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Me Page" />
      <Contact />
      <Faq/>
    </>
  );
};

export default ContactPage;
