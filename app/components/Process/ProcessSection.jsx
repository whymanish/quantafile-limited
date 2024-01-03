// ProcessSection.js
import React from "react";

const ProcessSection = ({ title, icon, description }) => {
  return (
    <div className="rounded-2xl lg:w-[25vw] hover:border-yellow-400 dark:bg-black dark:border-zinc-800 hover:duration-500 border border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]">
      <div className="mr-2 flex flex-row mb-2 items-center">
        {icon}
        <h5 className="text-xl font-bold dark:text-zinc-100 text-zinc-600">{title}</h5>
      </div>
      <p className="text-sm dark:text-zinc-400 text-zinc-500">{description}</p>
    </div>
  );
};

export default ProcessSection;
