import React from "react";

const FaqItem = ({ question, answer, color, rounded, isOpen, onClick }) => (
  <div
    className={`mb-6 w-full ${isOpen ? "bg-blue-500 text-white duration-300" : `bg-${color} `
      } text-black overflow-hidden p-6 rounded-${rounded ? "2xl" : "sm"
      }`}
  >
    <div
      onClick={onClick}
      className="flex cursor-pointer items-start justify-between"
    >
      <p className="lg:text-lg font-semibold">{question}</p>
      <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        )}
      </div>
    </div>
    {isOpen && (
      <div className="w-full mt-4 overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
        <p className="max-[479px]:text-sm">{answer}</p>
      </div>
    )}
  </div>
);

export default FaqItem;
