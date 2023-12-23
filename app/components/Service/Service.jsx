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
    <div>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">WebApps Development</h2>
            <p className="mt-4 text-sm text-[#636262] sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            <PriceCard
              title="Free Plan"
              price="$99"
              bgColor="rounded-md bg-blue-600"
              btnBgColor="bg-black"
              btnTextColor="text-white"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </PriceCard>

            <PriceCard
              title="Growth"
              price="$149"
              bgColor="overflow-hidden rounded-md bg-black p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-white"
              btnTextColor="text-black"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </PriceCard>

            <PriceCard
              title="Accelerate"
              price="$249"
              bgColor="rounded-md bg-orange-700"
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
