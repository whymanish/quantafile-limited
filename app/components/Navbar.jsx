"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer absolute -left-full" // Set off-screen to hide without affecting the layout
          aria-hidden="true"
          checked={isMobileMenuOpen}
          onChange={toggleMobileMenu}
        />
        <nav
          className={`fixed z-20 py-2 lg:py-4  w-full  bg-transparent  backdrop-blur navbar  shadow-gray-600/5 ${
            isMobileMenuOpen ? "peer-checked:navbar-active" : ""
          } md:relative md:bg-gray-50  dark:shadow-none`}
        >
          <div className="xl:container m-auto px-6">
            <div className="flex flex-wrap justify-center items-center  gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between items-center lg:w-auto lg:pl-4">
                <Link
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div aria-hidden="true" className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-gray-800 "></div>
                      <div className="h-6 w-2 bg-blue-500 "></div>
                    </div>
                    <span className="text-base font-bold text-gray-900  dark:text-black">
                      Quantafile
                    </span>{" "}
                  </div>
                </Link>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  {isMobileMenuOpen ? (
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-blue-400  transform -rotate-45 translate-x-1 translate-y-1 transition duration-300"
                    ></div>
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="m-auto h-0.5 w-6 rounded bg-gray-800 d transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-800  transition duration-300"
                      ></div>
                    </>
                  )}
                </label>
              </div>
              <div
                className={`navmenu ${
                  isMobileMenuOpen ? "block" : "hidden"
                } w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-300 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white  lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0`}
              >
                <div
                  className={` lg:pr-4 ${
                    isMobileMenuOpen
                      ? "block text-gray-800 md:px-4  transition "
                      : "block text-gray-800 md:px-4 transition"
                  }`}
                >
                  <ul className="space-y-6 tracking-wide font-semibold  lg:text-md lg:flex lg:space-y-0">
                    <Link href="/components/About">
                      <li className="md:px-4 mb-2 lg:mb-0">
                        <span>Home</span>
                      </li>
                    </Link>

                    <Link href="/components/About ">
                      <li className="md:px-4 my-2 lg:my-0">
                        <span>About us</span>
                      </li>
                    </Link>
                    <Link href="/components/About">
                      <li className="md:px-4">
                        <span>Contact us</span>
                      </li>{" "}
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
