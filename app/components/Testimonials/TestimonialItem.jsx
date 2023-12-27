// TestimonialItem.js
import React from 'react';

const TestimonialItem = ({ text, imageSrc, name, role }) => (
  <li >
    
    <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px]  hover:shadow-xl border-b border-blue-200  bg-gradient-to-r from-gray-50 to-blue-50/50 px-8 py-6 md:mb-8">
      <p className="text-[#647084] text-sm">{text}</p>
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
        <h6 className="font-bold">{name}</h6>
        <p className="text-sm text-[#636262]">{role}</p>
      </div>
    </div>
  </li>
);

export default TestimonialItem;
