import React from 'react'

const HeroCards = ({ title, category, imageUrl, date }) => (
    <div className="relative snap-center shrink-0">
      <div className="w-full transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
        <div className="px-4 py-5 sm:p-5">
          <div className="flex items-center">
            <a href="#" title="" className="shrink-0">
              <img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover" src={imageUrl} alt="" />
            </a>
  
            <div className="flex-1 ml-4 lg:ml-6">
              <p className="text-xs font-medium text-gray-900 lg:text-sm">
                <a href="#" title="" className="">
                  {category}
                </a>
              </p>
              <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                <a href="#" title="" className="">
                  {title}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default HeroCards
