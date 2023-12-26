'use client'
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { faqData } from "./Faqdata";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  

  return (
    <div>
      <section className="bg-[#f2f4f6] overflow-y-auto lg:overflow-hidden rounded-2xl h-screen flex  items-center">
        <div className=" mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="max-w-7xl text-center pt-10 lg:pt-0 mt-40 lg:mt-0 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl  tracking-tighter font-bold text-gray-800 md:text-5xl">
              General{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                FAQs
              </span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>

          <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
            <div className="flex-[1_1_500px] mt-4 lg:mt-0 max-[991px]:w-full max-[991px]:flex-none">
              <div className="mb-6 h-full w-full overflow-auto  bg-white p-8 rounded-3xl">
                <div className="flex flex-row gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1637825891028-564f672aa42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="inline-block h-12 w-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-xl font-bold">Still have questions?</h5>
                    <div className="max-w-[380px]">
                      <p className="text-[#636262] max-[479px]:text-sm">
                        Can’t find the answer you’re looking for? Please chat to
                        lorem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 mt-2 h-[0.5px] w-full bg-gray-200"></div>
                <a
                  href="#"
                  className="inline-block rounded-full items-center bg-blue-500 px-6 py-3 text-center font-semibold text-white"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex-[1_1_500px] overflow-y-auto scrollbar-hide h-[66vh]  max-[991px]:w-full max-[991px]:flex-none">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  {...faq}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
