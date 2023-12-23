// Service.jsx
import React from "react";
import PriceCard from "./PriceCard";
import Feature from "./Feature";

const Service = () => {
  const commonFeatures = [
    "Premium Component",
    "Exclusive Freebies",
    "Monthly Free Exclusive",
    "Customer Support",
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-[#0e1218]">
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl pt-10 font-bold text-white md:text-5xl">WebApps Development</h2>
            <p className="mt-4 text-sm text-gray-200 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            <PriceCard
              title="1"
              price="UI/UX & Frontend Development"
              bgColor="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-blue-50 border-2 p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-black"
              btnTextColor="text-white"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </PriceCard>

            <PriceCard
              title="2"
              price="Backend Development"
              bgColor="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-blue-50 border-2 p-10 border-2 p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-black"
              btnTextColor="text-white"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </PriceCard>

            <PriceCard
              title="3"
              price="Fullstack Development"
              bgColor="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-blue-50 border-2 p-10 border-2 p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-black"
              btnTextColor="text-white"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </PriceCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
