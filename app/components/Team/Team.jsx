import React from "react";
import TeamCard from "./TeamCard";
import { teamData } from "./teamdata";
const Team = () => {
   
  
    return (
      <div>
        <section className="text-gray-600 dark:text-gray-300 px-5 py-16 md:px-10 body-font">
          <div className="container px-5 pt-12 mx-auto">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl  font-bold text-gray-800 md:text-5xl">
             Meet our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
               Team
              </span>{" "}
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
            <div className="max-w-7xl mx-auto">

           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {teamData.map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
            </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Team;