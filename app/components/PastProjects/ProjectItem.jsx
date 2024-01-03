// ProjectItem.js
import React from "react";

const ProjectItem = ({ imageSrc, title, description, categories, websiteLink }) => {
  return (
    <div className="mb-12 inline-block border rounded-3xl border-solid border-[#cdcdcd] dark:border-zinc-800 md:mb-8 lg:mb-10">
      <img src={imageSrc} alt="" className="inline-block rounded-t-3xl" />
      <div className="px-5 py-8 sm:px-6">
        <h5 className="mb-3 text-xl text-zinc-800 dark:text-zinc-100 font-bold">{title}</h5>
        <p className="flex-col dark:text-zinc-400 text-[#808080]">{description}</p>
        <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl border dark:border-zinc-700 border-gray-200  p-2 text-xs font-semibold  text-[#636262]"
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href={websiteLink}
            className="r flex max-w-full gap-2.5 text-sm font-bold uppercase dark:text-zinc-200 text-black"
          >
            <p>VISIT WEBSITE</p>
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
              alt=""
              className="inline-block"
            />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
