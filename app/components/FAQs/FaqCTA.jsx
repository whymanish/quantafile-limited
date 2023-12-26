import React from "react";
import Link from "next/link";
const FaqCTA = () => {
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div class="p-2 border bg-gray-50 rounded-3xl">
            <div class="p-6 text-center bg-[#f2f4f6] border shadow-lg md:p-16 rounded-3xl">
              <p class="text-3xl lg:text-5xl font-semibold tracking-tighter text-black">
                Is there any doubt in your mind?
              </p>
              <div class=" mt-10 flex justify-center">
                <ul class="mb-6 grid grid-cols-1 lg:grid-cols-3 ">
                  <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                      alt=""
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <p class="text-black">300+ UI Blocks</p>
                  </li>
                  <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                      alt=""
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <p class="text-black">Fully responsive</p>
                  </li>
                  <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                      alt=""
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <p class="text-black">Just copy & paste</p>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col items-center justify-center gap-2 mx-auto mt-4 md:flex-row">
                <Link href="/components/FAQs"><button class="inline-flex items-center group justify-center w-full h-12 gap-3 px-5 py-3 bg-[#7360DF] md:w-auto rounded-xl hover:bg-gray-200 focus:outline-none">
                  <span class="text-md text-white  group-hover:text-black transition duration-300  font-bold">
                    Checkout our FAQs
                  </span>
                </button></Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default FaqCTA;
