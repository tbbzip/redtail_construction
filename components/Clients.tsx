"use client";

import React from "react";
import Image from "next/image";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-3xl text-center font-bold mt-1 mb-20">
      Customer
        <span className="text-rb-100"> Testimonials</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // Adjusted height for responsive design
          className="h-[50vh] md:h-[30rem] rounded-md mb-20 flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col items-center">
              <Image
                src={company.img}
                alt={company.name}
                width={80}
                height={80}
                className="w-20 md:w-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;