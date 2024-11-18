"use client";

import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "./api/context/ToasterContext";
import NavbarWrapper from "@/components/NavbarWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
     setTimeout(() => setLoading(false), 1000);
   }, []);
   
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
          <NavbarWrapper />
            <ToasterContext />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
