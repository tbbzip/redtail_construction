import React from "react";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <Image
              src="/logo.svg" // Replace with your logo path
              alt="Redtail Telematics Logo"
              width={150}
              height={150}
            />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-rb-300"
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#solutions"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-rb-300"
              aria-label="Solution"
            >
              Solution
            </a>
            <a
              href="#industries"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-rb-300"
              aria-label="Industries"
            >
              Industries
            </a>
            <a
              href="#testimonials"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-rb-300"
              aria-label="Testimonials"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-rb-300"
              aria-label="Pricing"
            >
              Pricing
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2024 Redtail Telematics. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.url}
                target="_blank"
                className="mx-2 text-gray-600 transition-colors duration-300 hover:text-rb-300"
              >
                <info.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;