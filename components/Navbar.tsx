"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <Image src="/logo.svg" alt="Logo" width={180} height={180} />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Desktop Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6 md:space-x-6">
            <a
              className="my-2 text-black text-center transition-colors duration-300 transform hover:text-rb-100 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-2 text-black text-center transition-colors duration-300 transform hover:text-rb-100 md:my-0"
              href="#solutions"
            >
              Solution
            </a>
            <a
              className="my-2 text-black text-center transition-colors duration-300 transform hover:text-rb-100 md:my-0"
              href="#roi"
            >
              ROI Calculator
            </a>
            <a
              className="my-2 text-black text-center transition-colors duration-300 transform hover:text-rb-100 md:my-0"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="my-2 text-black text-center transition-colors duration-300 transform hover:text-rb-100 md:my-0"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
