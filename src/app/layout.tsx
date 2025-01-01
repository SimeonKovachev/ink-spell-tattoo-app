"use client";

import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "./api/context/ToasterContext";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AppHead from "./head";

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
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const isStudio = pathname.startsWith("/studio");

  return (
    <html
      suppressHydrationWarning={true}
      lang="bg"
      className={`${montserrat.variable}`}
    >
      <AppHead />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            {!isStudio && <Navbar />}
            <ToasterContext />
            <main>{children}</main>
            {!isStudio && <Footer />}
            {!isStudio && <ScrollToTop />}
          </>
        )}
      </body>
    </html>
  );
}
