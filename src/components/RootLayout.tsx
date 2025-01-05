"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import ToasterContext from "@/app/api/context/ToasterContext";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-subheading",
});

// Create a client
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Default stale time of 5 minutes
        staleTime: 1000 * 60 * 5,
        // Default cache time of 24 hours
        gcTime: 1000 * 60 * 60 * 24,
        // Retry failed requests 1 time after the initial failure
        retry: 1,
        // Refetch on window focus
        refetchOnWindowFocus: true,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new client
    return makeQueryClient();
  } else {
    // Browser: make a new client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [queryClient] = useState(() => getQueryClient());

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("no-scroll");
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const isStudio = pathname.startsWith("/studio");

  return (
    <html
      suppressHydrationWarning
      lang="bg"
      className={`${montserrat.variable}`}
    >
      <GoogleAnalytics gaId="G-JFDSDGDFG" />
      <Head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div
            className={
              loading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300"
            }
          >
            {!isStudio && <Navbar />}
            <ToasterContext />
            <main>{children}</main>
            {!isStudio && <Footer />}
            {!isStudio && <ScrollToTop />}
          </div>

          {loading && <PreLoader />}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TattooParlor",
                name: "Ink Spell Tattoo Studio",
                image:
                  "https://www.ink-spell.com/images/ink-spell-full-colored-logo.jpg",
                description:
                  "Professional tattoo studio in Pleven, Bulgaria specializing in unique, artistic tattoos, including astrology and tarot-inspired designs.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Васил Априлов 48",
                  addressLocality: "Плевен",
                  addressRegion: "Плевен",
                  postalCode: "5800",
                  addressCountry: "BG",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "43.4168",
                  longitude: "24.6062",
                },
                url: "https://www.ink-spell.com",
                telephone: "+359894300545",
                openingHours: "Mo-Sa 10:00-19:00",
                priceRange: "$$",
                sameAs: [
                  "https://www.facebook.com/StudioInkSpell",
                  "https://www.instagram.com/inkspell.tattoo",
                ],
              }),
            }}
          />
          {/* Add React Query Devtools - will only show in development */}
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </body>
    </html>
  );
}
