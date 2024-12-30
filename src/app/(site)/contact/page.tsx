import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/BookNow";
import { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is contact page description",
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
