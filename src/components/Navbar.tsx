"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../public/styles/Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setIsScrolled(currentScrollPos > 50);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="heading text-5xl text-yellow-500">
          Ink Spell
        </Link>

        <ul className="flex space-x-12 text-md font-[var(--font-poppins)] uppercase">
          <li>
            <Link
              href="#home"
              className={`${styles.animatedLink} font-bold text-white`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={`${styles.animatedLink} font-bold text-white`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#artists"
              className={`${styles.animatedLink} font-bold text-white`}
            >
              Artists
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className={`${styles.animatedLink} font-bold text-white`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`${styles.animatedLink} font-bold text-white`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}