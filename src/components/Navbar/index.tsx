"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Navbar = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

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
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-dark-3/20 bg-dark/80 backdrop-blur-[5px]"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-80 max-w-full px-4">
              <Link href="/" className="heading text-5xl text-accent-purple">
                Ink Spell
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
                            <span className="pl-1">
                              <svg
                                className="duration-300 lg:group-hover:rotate-180"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                          {openIndex === index && (
                            <ul
                              id={`dropdown-${index}`}
                              className="absolute left-0 top-full w-[250px] rounded bg-dark-2 p-4 transition-all duration-300 opacity-100 visible"
                            >
                              {menuItem?.submenu?.map((submenuItem, i) => (
                                <li key={i}>
                                  <Link
                                    href={submenuItem.path || "#"}
                                    className="block rounded px-4 py-[10px] text-sm text-dark-6 hover:text-accent-purple"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
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
