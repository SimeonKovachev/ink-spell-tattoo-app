"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname === null) return null;
  const shouldHideNavbar = pathname.includes("/studio");

  return !shouldHideNavbar ? <Navbar /> : null;
}
