import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/BookNow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
