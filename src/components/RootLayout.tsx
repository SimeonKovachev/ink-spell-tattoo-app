"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PreLoader from "@/components/Common/PreLoader";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import ToasterContext from "@/app/api/context/ToasterContext";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60 * 24,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
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
    const cleanup = () => {
      document.body.classList.remove("no-scroll");
    };

    document.body.classList.add("no-scroll");

    const timer = setTimeout(() => {
      setLoading(false);
      cleanup();
    }, 1500);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  const isStudio = pathname.startsWith("/studio");

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
        }
      >
        {!isStudio && <Navbar />}
        <ToasterContext />
        <main>{children}</main>
        {!isStudio && <Footer />}
        {!isStudio && <ScrollToTop />}
      </div>

      {loading && <PreLoader />}

      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
