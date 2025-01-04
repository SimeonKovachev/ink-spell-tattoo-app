import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Страницата не е намерена - Ink Spell Tattoo Studio",
  description:
    "Съжаляваме, но страницата която търсите не съществува. Върнете се към началната страница на Ink Spell Tattoo Studio.",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
