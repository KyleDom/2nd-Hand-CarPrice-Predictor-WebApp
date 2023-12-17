import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navigationLinks = [
  { path: "/home", text: "HOME" },
  { path: "/about-us", text: "ABOUT US" },
  { path: "/used-cars", text: "USED CARS" },
];

export const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`w-full pt-2 bg-white fixed top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between px-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <img
              src="/rks-logo.png"
              height={50}
              width={50}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>

          <div className="text-lg font-semibold"> RKS </div>
        </div>

        {/* Navigation for lg to xl view */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="lg:flex">
            {navigationLinks.map((link) => (
              <li key={link.path} className="text-md my-6 ml-24">
                <Link
                  href={link.path}
                  className={`font-medium ${
                    router.pathname === link.path
                      ? "border-b-4 border-gray-700 py-2"
                      : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-end lg:flex">
          <Link
            href="/check-car-prices"
            className=" rounded bg-[#FF7A00] px-6 py-2 font-medium text-white hover:bg-[#F17400]"
          >
            Check Car Price
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Dropdown menu for sm to md view */}
      <div
        className={`fixed left-0 top-0 h-screen w-full transform bg-white ${
          menuOpen
            ? "translate-y-0 transition-transform ease-in"
            : "-translate-y-full"
        } px-4 py-2 duration-500 lg:hidden`}
      >
        {/* Close button for sm to md view */}
        <div className="mb-4 flex items-center justify-between mt-3">
          <div className="flex items-center justify-center">
            <img
              src="rks-logo.png"
              height={50}
              width={50}
              alt="logo"
              className="cursor-pointer"
            />
            <div className="text-lg font-semibold"> RKS </div>
          </div>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        {/* Navigation links for sm to md view */}
        <div className="flex-col px-4 py-4 mt-8">
          <ul>
            {navigationLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className="flex items-center justify-between"
                  onClick={closeMenu}
                >
                  <li className="flex cursor-pointer items-center text-base font-semibold">
                    <span className="ml-6"> {link.text}</span>
                  </li>
                  <HiArrowNarrowRight
                    size={34}
                    className="mr-6 rounded-full bg-gray-100 px-2 py-1 transition-transform hover:scale-110"
                  />
                </div>
                <hr className="mx-3 my-5 border-t border-dashed border-gray-500"></hr>
              </Link>
            ))}

            <div className="absolute bottom-0 left-0 w-full py-5 shadow-inner">
              <Link href="/check-car-prices">
                <li
                  onClick={closeMenu}
                  className="mx-16 rounded-lg bg-[#FF7A00] py-3 text-center text-lg font-bold text-white shadow-md hover:bg-[#F17400]"
                  style={{ zIndex: 1 }}
                >
                  CHECK CAR PRICES
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
