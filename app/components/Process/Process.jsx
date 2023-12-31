'use client'
import React from "react";
import ProcessSection from "./ProcessSection";
import {sections} from './Processdata'
import AOSComponent from "../AOSComponent";
const Process = () => {
  
  return (
    <AOSComponent animationType="fade-up" duration={800} easing="ease-in-out" once>

    <div>
      <section>
       
        <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
          <h2 className="text-3xl tracking-tighter font-bold text-zinc-800 dark:text-zinc-200 md:text-5xl">
          Smooth{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Process
          </span>{" "}
        </h2>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Simple &amp; fixed pricing. 30 days money-back guarantee
        </p>
          </div>{" "}
          <div
            className="flex flex-col items-center justify-center bg-contain bg-center pt-10"
           
          >
            <div className="flex flex-col justify-around gap-4 sm:flex-row">
              {sections.map((section, index) => (
                <ProcessSection key={index} {...section} />
              ))}
            </div>
            <div className="max-w-5xl mt-16 hidden lg:block mx-auto">
              <img src="laptop.png" alt="" />
            </div>
            <div className="max-w-5xl mt-16 block lg:hidden mx-auto">
              <img className="h-fit" src="mobile.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </AOSComponent>
  );
};

export default Process;
