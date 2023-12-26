"use client";
// 'use client' (I assume you meant 'use strict', but I've left it as it is in your code)

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi alectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "what will be the process ?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What other themes do you have?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi alectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "what will be the process ?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What other themes do you have?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
    {
      question: "What is your policy on distribution",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
      color: "white",
      rounded: true,
    },
  ];

  return (
    <div>

      <section className="bg-[#f2f4f6] overflow-y-auto lg:overflow-hidden rounded-2xl h-screen flex  items-center">

        <div className=" mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="max-w-7xl text-center mt-28 lg:mt-0 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl  tracking-tighter font-bold text-gray-800 md:text-5xl">
              General{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                FAQs
              </span>
            </h2>

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
                <div className="mb-6 mt-8 h-[0.5px] w-full bg-gray-200"></div>
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
                <div
                  key={index}
                  className={`mb-6 w-full ${openIndex === index
                    ? "bg-blue-500 text-white duration-300"
                    : `bg-${faq.color} `
                    } text-black overflow-hidden p-6 rounded-${faq.rounded ? "2xl" : "sm"
                    }`}
                >
                  <div
                    onClick={() => handleToggle(index)}
                    className="flex cursor-pointer items-start justify-between"
                  >
                    <p className=" lg:text-lg font-semibold">{faq.question}</p>
                    <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                      {openIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="w-full mt-4 overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
                      <p className="max-[479px]:text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
