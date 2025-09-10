import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu as MenuIcon, X, Calendar, ChevronDown } from "lucide-react";
import menuData from "./menuData";
import Button from "../Common/Button";
import { track } from "@vercel/analytics/react";
import { useConversions } from "@/lib/gtag";

const Navbar = () => {
  const pathUrl = usePathname();
  const router = useRouter();
  const conversions = useConversions();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

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

  const handleBookNowClick = () => {
    track("navbar_appointment_book_btn");
    conversions.navbarBookNow();
    setNavbarOpen(false);
    router.push("/contact/#booknow");
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          !visible ? "-translate-y-full" : "translate-y-0"
        } ${sticky ? "bg-dark-2/95 backdrop-blur-md shadow-lg border-b border-gray-800/50" : "bg-transparent"}`}
      >
        <div className="relative container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="group relative z-50">
              <h2 className="heading text-3xl lg:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-500">
                  Ink Spell
                </span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {menuData.map((item) => (
                <div key={item.id} className="relative">
                  {item.submenu && item.submenu.length > 0 ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`relative font-medium text-base text-white hover:text-purple-400 transition-colors duration-300 flex items-center gap-1
                          after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                          after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 
                          after:transition-all after:duration-300 hover:after:w-full
                          ${pathUrl.startsWith(item.path!) ? "text-purple-400 after:w-full" : ""}`}
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.id
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.path!}
                            className={`block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/10 transition-colors duration-200 border-b border-gray-700/30 last:border-b-0 ${
                              pathUrl === subItem.path
                                ? "text-purple-400 bg-purple-600/5"
                                : ""
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.path!}
                      target={item.newTab ? "_blank" : "_self"}
                      className={`relative font-medium text-base text-white hover:text-purple-400 transition-colors duration-300 
                        after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                        after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 
                        after:transition-all after:duration-300 hover:after:w-full
                        ${pathUrl === item.path ? "text-purple-400 after:w-full" : ""}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <Button
                text="Безплатна Консултация"
                type="filled"
                icon={<Calendar size={20} />}
                size="sm"
                onClick={handleBookNowClick}
              />
            </div>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 z-50"
              aria-label="Toggle Menu"
            >
              {navbarOpen ? (
                <X size={24} className="text-purple-400" />
              ) : (
                <MenuIcon size={24} className="text-purple-400" />
              )}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-dark-2" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center min-h-screen gap-6 px-4 overflow-y-auto py-20">
          {menuData.map((item) => (
            <div key={item.id} className="text-center">
              {item.submenu && item.submenu.length > 0 ? (
                <div className="space-y-4">
                  <div className="text-2xl font-medium text-purple-400 mb-4">
                    {item.title}
                  </div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.path!}
                      onClick={() => setNavbarOpen(false)}
                      className={`block text-lg font-medium text-white hover:text-purple-400 transition-colors duration-300 py-2
                        ${pathUrl === subItem.path ? "text-purple-400" : ""}`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          ))}

          <div className="mt-4">
            <Button
              text="Безплатна Консултация"
              type="filled"
              icon={<Calendar size={20} />}
              size="md"
              onClick={handleBookNowClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
