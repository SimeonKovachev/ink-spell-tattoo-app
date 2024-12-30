import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Calendar } from "lucide-react";
import menuData from "./menuData";
import Button from "../Common/Button";

const Navbar = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setSticky(currentScrollPos >= 80);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 80);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        !visible ? "-translate-y-full" : "translate-y-0"
      } ${
        sticky ? "bg-dark-2/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group relative">
            <h2 className="heading text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-500">
                Ink Spell
              </span>
            </h2>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path!}
                target={item.newTab ? "_blank" : "_self"}
                className={`relative font-medium text-lg text-white hover:text-purple-400 transition-colors duration-300 
                  after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 
                  after:transition-all after:duration-300 hover:after:w-full
                  ${pathUrl === item.path ? "text-purple-400 after:w-full" : ""}`}
              >
                {item.title}
              </Link>
            ))}

            <Button
              text="Book Now"
              type="filled"
              icon={<Calendar size={20} />}
              size="sm"
              navigateTo="/contact/#booknow"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {navbarOpen ? (
              <X size={24} className="text-purple-400" />
            ) : (
              <MenuIcon size={24} className="text-purple-400" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-dark-2/95 backdrop-blur-md transition-all duration-300 ${
            navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path!}
                target={item.newTab ? "_blank" : "_self"}
                onClick={() => setNavbarOpen(false)}
                className={`text-2xl font-medium text-white hover:text-purple-400 transition-colors duration-300
                  ${pathUrl === item.path ? "text-purple-400" : ""}`}
              >
                {item.title}
              </Link>
            ))}

            <div className="flex gap-6 mt-8">
              <Button
                text="Book Now"
                type="filled"
                icon={<Calendar size={20} />}
                size="sm"
                navigateTo="/contact/#booknow"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
