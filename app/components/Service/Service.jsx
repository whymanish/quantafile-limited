// Service.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import Feature from "./Feature";
const Service = () => {
  const commonFeatures = [
    "Premium Component",
    "Exclusive Freebies",
    "Monthly Free Exclusive",
    "Customer Support",
  ];

  const backgroundImage = {
    backgroundImage: "url('https://images.unsplash.com/photo-1637825891028-564f672aa42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section >
  <div className="flex flex-col items-center justify-center pb-10 ">
    
        <div className="mx-auto max-w-7xl px-5  md:px-10">
        <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl tracking-tighter lg:mt-0 mt-10 font-bold text-gray-800 md:text-5xl">
              WebApps{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Development
              </span>{" "}
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            <ServiceCard
            
              price="UI/UX & Frontend Development"
              bgColor="overflow-hidden rounded-[60px] bg-[#52D3D8] border-2 p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-white "
              btnTextColor="text-black"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </ServiceCard>

            <ServiceCard
             
              price="Backend Development"
              bgColor="overflow-hidden rounded-[60px] bg-[#7360DF]   p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-white  "
              btnTextColor="text-black"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </ServiceCard>

            <ServiceCard
             
              price="Fullstack Development"
              bgColor="overflow-hidden rounded-[60px] bg-[#191919] border-2 p-10 border-2 p-10 text-white sm:w-full sm:flex-initial"
              btnBgColor="bg-white "
              btnTextColor="text-black"
              features="Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit"
            >
              {commonFeatures.map((feature, index) => (
                <Feature key={index}  text={feature} />
              ))}
            </ServiceCard>
          </div>
        </div>
     
    </div>
    </section>
  );
};

export default Service;
