"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-900 lg:text-3xl">
          {title || "Frequently Asked Questions"}
        </h1>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg bg-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 lg:p-8 text-left"
              >
                <h1 className="font-semibold text-gray-900">
                  {faq.question}
                </h1>

                <span
                  className={`text-gray-900 bg-gray-300 rounded-full transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <hr className="border-gray-300" />
                  <div className="p-6 lg:p-8">
                    <div className="text-sm text-gray-700">
                      {typeof faq.answer === "string" ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
