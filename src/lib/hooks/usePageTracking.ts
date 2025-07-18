"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useConversions } from "@/lib/gtag";

export const usePageTracking = () => {
  const pathname = usePathname();
  const conversions = useConversions();

  useEffect(() => {
    const getPageName = (path: string): string => {
      if (path === "/") return "home";

      const segments = path.slice(1).split("/");
      const firstSegment = segments[0];

      // Handle specific routes
      switch (firstSegment) {
        case "services":
          return segments[1] ? `service_${segments[1]}` : "services";
        case "gallery":
          return "gallery";
        case "contact":
          return "contact";
        case "about":
          return "about";
        case "blogs":
          return segments[1] ? `blog_${segments[1]}` : "blogs";
        case "flash":
          return "flash";
        case "privacy":
          return "privacy";
        default:
          return firstSegment || "unknown";
      }
    };

    const pageName = getPageName(pathname);

    const timer = setTimeout(() => {
      conversions.pageView(pageName);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, conversions]);

  return null;
};
