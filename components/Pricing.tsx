import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricingRedtail } from "@/data"; // Adjust the path to where your pricingRedtail data is located

const Pricing = () => {
  return (
    <section className="bg-white" id="pricing">
      <div className="container px-6 py-8 mt-4 mx-auto">
          <h1 className="heading mt-0 mb-20 text-4xl text-center font-bold ">
            Our
            <span className="text-rb-100"> Pricing</span>
          </h1>

        <div className="grid gap-6 mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pricingRedtail.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col justify-between px-6 py-8 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 bg-white"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {plan.title}
                </p>

                <h4 className="mt-2 text-3xl font-semibold text-gray-800">
                  {plan.price}
                </h4>

                <p className="mt-4 text-gray-500">
                  {plan.desc}
                </p>

                <div className="mt-8 space-y-4">
                  {plan.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle
                        size={17}
                        className="text-rb-300 flex-shrink-0"
                      />
                      <span className="ml-4 text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={plan.link}
                className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-rb-100 rounded-md hover:bg-rb-300/40 focus:outline-none focus:bg-rb-300/20"
              >
                {plan.price === "Contact us for pricing"
                  ? "Contact us"
                  : "Choose plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
