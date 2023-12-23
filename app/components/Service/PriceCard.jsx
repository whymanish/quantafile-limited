// PricingCard.jsx
import React from "react";

const PriceCard = ({ title, price, features, bgColor, btnBgColor, btnTextColor }) => {
  return (
    <div className={`mx-auto w-full max-w-md ${bgColor} p-10`}>
      <div className="mb-4 w-fit rounded-[4px] bg-black px-4 py-1.5">
        <p className="text-sm font-bold text-white">{title}</p>
      </div>
      <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
        {price}<span className="text-sm font-light">/year</span>
      </h2>
      <p className="text-body mb-5 font-light text-[#636262] md:mb-6 lg:mb-8">{features}</p>
      <a
        href="#"
        className={`inline-block w-full rounded-md ${btnBgColor} px-6 py-3 text-center font-semibold ${btnTextColor}`}
      >
        Get started
      </a>
    </div>
  );
};

export default PriceCard;
