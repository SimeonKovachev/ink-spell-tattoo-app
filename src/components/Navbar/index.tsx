"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

import menuData from "./menuData";

const Navbar = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

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

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleDropdownPosition = (index: number) => {
    const dropdown = document.getElementById(`dropdown-${index}`);
    if (!dropdown) return;

    const dropdownRect = dropdown.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (dropdownRect.right > viewportWidth) {
      dropdown.style.left = "auto";
      dropdown.style.right = "0";
    } else if (dropdownRect.left < 0) {
      dropdown.style.left = "0";
      dropdown.style.right = "auto";
    }
  };

  useEffect(() => {
    if (openIndex !== -1) {
      handleDropdownPosition(openIndex);
    }
  }, [openIndex]);

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center transition-transform duration-300 ${
          !visible ? "-translate-y-full" : "translate-y-0"
        } ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-dark-3/20 bg-dark/80 backdrop-blur-[5px]"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-80 max-w-full px-4">
              <Link href="/" className="inline-block group">
                <h2 className="heading text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 group-hover:from-purple-500 group-hover:to-purple-700">
                  Ink Spell
                </h2>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-accent-purple focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : ""
                    } ${pathUrl !== "/" && "!bg-dark"} ${
                      pathUrl === "/" && sticky ? "bg-white" : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : ""
                    } ${pathUrl !== "/" && "!bg-dark"} ${
                      pathUrl === "/" && sticky ? "bg-white" : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : ""
                    } ${pathUrl !== "/" && "!bg-dark"} ${
                      pathUrl === "/" && sticky ? "bg-white" : "bg-white"
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-dark-3 bg-dark-2 px-6 py-4 duration-300 ${
                    navbarOpen ? "opacity-100 visible" : "invisible opacity-0"
                  } lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100`}
                >
                  <ul className="block font-semibold uppercase lg:ml-8 lg:flex lg:gap-x-6 xl:ml-14 xl:gap-x-10">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          <Link
                            onClick={navbarToggleHandler}
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex pb-2 my-2 text-base text-white group-hover:text-accent-purple lg:inline-flex lg:px-0 lg:my-6 relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent-purple after:transition-all after:duration-300 hover:after:w-full`}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={index}
                          className="submenu-item group relative"
                          onMouseEnter={() => toggleSubmenu(index)}
                          onMouseLeave={() => setOpenIndex(-1)}
                        >
                          <button
                            onClick={() => toggleSubmenu(index)}
                            className="ud-menu-scroll flex items-center justify-between pb-2 my-2 uppercase text-base text-white group-hover:text-accent-purple lg:inline-flex lg:px-0 lg:my-6 relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent-purple after:transition-all after:duration-300 hover:after:w-full"
                          >
                            {menuItem.title}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
