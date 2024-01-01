'use client'
import React from "react";
import ProjectItem from "./ProjectItem";
import { projectsData } from "./projectdata";
import AOSComponent from "../AOSComponent";
const Projects = () => {
  return (
    <AOSComponent animationType="fade-up" duration={800} easing="ease-in-out" once>

    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pt-24 lg:pt-32">
          <div className="flex flex-col items-stretch">
            <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
              <h2 className="text-3xl   tracking-tighter font-bold text-gray-800 md:text-5xl">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Projects
                </span>{' '}
              </h2>
              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                Simple &amp; fixed pricing. 30 days money-back guarantee
              </p>
            </div>
            <div className="gap-x-8 grid grid-cols-1  lg:grid-cols-3 md:gap-x-4 ">
              {projectsData.map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </AOSComponent>
  );
};

export default Projects;
