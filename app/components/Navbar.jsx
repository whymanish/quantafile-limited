"use client";
import React, { useState } from "react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start dark:bg-transparent lg:dark:bg-black lg:bg-gray-50 sm:flex-nowrap z-50 w-full  fixed lg:relative backdrop-blur text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <a
              class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
              href="#"
            >
              <div aria-hidden="true" className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-gray-800 "></div>
                <div className="h-6 w-2 bg-blue-500 "></div>
              </div>
              Quantafile
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className={`hs-collapse-toggle p-2  inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                onClick={toggleMobileMenu}
              >
                <svg
                  className="hs-collapse-open:hidden  flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <line key="line1" x1="18" y1="6" x2="6" y2="18" />
                      <line key="line2" x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line key="line3" x1="3" x2="21" y1="6" y2="6" />
                      <line key="line4" x1="3" x2="21" y1="12" y2="12" />
                      <line key="line5" x1="3" x2="21" y1="18" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-1"
            className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Link
                href="/"
                class="font-medium text-gray-600 dark:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/components/About"
                class="font-medium text-gray-600 dark:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-current="page"
              >
                About us
              </Link>
              <Link
                href="/components/Contact"
                class="font-medium text-gray-600 dark:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-current="page"
              >
                Contact us
              </Link>
              <ToggleButton/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
