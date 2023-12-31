import React from 'react';
import HeroCards from './HeroCards';

const Hero = () => (
  <div className="relative">
    {/* Left side SVG (React icon) */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>

    <div className="flex items-center justify-center h-screen">
      <section className="relative bg-white">
      <div className="absolute inset-0">
                <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png" alt="" />
            </div>

<div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-3xl mt-40 lg:mt-0 font-bold  sm:text-4xl lg:text-6xl ">Going online is now easier with{' '}<span className='text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Quantafile</span> </h1>
                    <p class="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                    <form action="#" method="POST" class="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 flex justify-center sm:space-y-0 sm:items-end">
                        

                        <div class="relative group">
                            <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                            <button
                                type="button"
                                class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Get Started
                            </button>
                        </div>
                    </form>

                    <ul class="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-xs font-medium text-gray-900 sm:text-sm"> Weekly new articles </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-xs font-medium text-gray-900 sm:text-sm"> Join other 1600+ Devs </span>
                        </li>
                    </ul>
                </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 pb-8 mt-12 sm:mt-16 lg:mt-20 snap-x">
            <HeroCards
              title="How a visual artist redefines success in graphic design"
              imageUrl="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
              date="April 09, 2022"
            />
            <HeroCards
              title="How a visual artist redefines success in graphic design"
              imageUrl="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
              date="April 09, 2022"
            />
            <HeroCards
              title="How a visual artist redefines success in graphic design"
              imageUrl="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
              date="April 09, 2022"
            />
          </div>
        </div>
      </section>
    </div>

    {/* Right side SVG (Tailwind CSS icon) */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 17l-1 1m0 0l1-1m-1 1h1m1-1h-1M9 21l-1 1m0 0l1-1m-1 1h1m1-1h-1M5 21l-1 1m0 0l1-1m-1 1h1m1-1h-1M5 3l-1 1m0 0l1-1m-1 1h1m1-1h-1M9 3l-1 1m0 0l1-1m-1 1h1m1-1h-1M21 9l-1 1m0 0l1-1m-1 1h1m1-1h-1M21 5l-1 1m0 0l1-1m-1 1h1m1-1h-1M17 5l-1 1m0 0l1-1m-1 1h1m1-1h-1"
        />
      </svg>
    </div>
  </div>
);

export default Hero;
