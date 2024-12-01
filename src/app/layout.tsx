"use client";

import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "./api/context/ToasterContext";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-subheading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${montserrat.variable}`}
    >
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
