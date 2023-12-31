// TestimonialItem.js
import React from 'react';

const TestimonialItem = ({ text, imageSrc, name, role }) => (
  <li >
    
    <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] hover:duration-300 hover:shadow-xl dark:bg-black dark:border-zinc-900  border border-blue-200    px-8 py-6 md:mb-8">
      <p className="text-[#647084] dark:text-zinc-300 text-sm">{text}</p>
      <div class="flex mt-2">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" class="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" class="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" class="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" class="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" class="mr-1 inline-block w-3.5 flex-none" />
        </div>
    </div>
    <div className="mb-5 flex lg:mb-8">
      <img src={imageSrc} alt="" className="mr-4 rounded-full h-12 w-12" />
      <div className="flex flex-col">
        <h6 className="font-bold text-zinc-700 dark:text-zinc-200">{name}</h6>
        <p className="text-sm text-[#636262] dark:text-zinc-400">{role}</p>
      </div>
    </div>
  </li>
);

export default TestimonialItem;
