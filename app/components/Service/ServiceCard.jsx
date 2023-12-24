// PricingCard.jsx
import React from "react";

const ServiceCard = ({ title, price, features, bgColor, btnBgColor, btnTextColor }) => {
  return (
    <div className={`mx-auto w-full transition-all duration-200 lg:transform lg:hover:shadow-lg lg:hover:-translate-y-4 max-w-md ${bgColor} p-10`}>
      <div className="mb-4 w-fit  rounded-full bg-cyan-50 px-4 py-1.5">
        <p className="text-sm font-bold text-cyan-600">{title}</p>
      </div>
      <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:mb-8 text-transparent  bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 ">
        {price}
      </h2>
      <p className="text-body mb-5 font-light text-gray-900 md:mb-6 lg:mb-8">{features}</p>
      <a
        href="#"
        className={`inline-block w-full rounded-3xl ${btnBgColor} px-6 py-3 text-center font-semibold ${btnTextColor}`}
      >
        Get started
      </a>
    </div>
  );
};

export default ServiceCard;
