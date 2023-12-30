import React from "react";

const page = () => {
  return (
    <div>
      
      
        <section className="bg-[#f2f4f6]">
          <div class="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <h2 class="text-center text-3xl font-bold md:text-5xl">
              Meet our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Team
              </span>{" "}
            </h2>
            <p class="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-16">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>
            <ul class="mx-auto grid lg:gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-lg md:max-w-5xl">
              
              
              
              <li class="mx-auto flex max-w-xs flex-col items-center gap-4 py-6 md:py-4 text-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4809622b0572f305f9f2_Rectangle%2035-5.png"
                  alt=""
                  class="mb-4 inline-block h-40 w-40 rounded-full object-cover"
                />
                <p class="font-bold">Kevin</p>
                <p class="text-sm text-[#636262]">Product Manager</p>
                <div class="mt-4 flex flex-wrap">
                  <a href="#" class="mr-2 inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4971014d2b4c0744a079_FacebookLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                  <a href="#" class="inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4977ee8effeeefc05b5d_InstagramLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                </div>
              </li>
              <li class="mx-auto flex max-w-xs flex-col items-center gap-4 py-6 md:py-4 text-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f4f5f1f0a93f8aba0d7_Ellipse%2017-1.png"
                  alt=""
                  class="mb-4 inline-block h-40 w-40 rounded-full object-cover"
                />
                <p class="font-bold">Amy Parker</p>
                <p class="text-sm text-[#636262]">Webflow Developer</p>
                <div class="mt-4 flex flex-wrap">
                  <a href="#" class="mr-2 inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4971014d2b4c0744a079_FacebookLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                  <a href="#" class="inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4977ee8effeeefc05b5d_InstagramLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                </div>
              </li>
              <li class="mx-auto flex max-w-xs flex-col items-center gap-4 py-6 md:py-4 text-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f55fa526007c5a03e57_Ellipse%2017.png"
                  alt=""
                  class="mb-4 inline-block h-40 w-40 rounded-full object-cover"
                />
                <p class="font-bold">Ben Watson</p>
                <p class="text-sm text-[#636262]">Founder, CEO</p>
                <div class="mt-4 flex flex-wrap">
                  <a href="#" class="mr-2 inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4971014d2b4c0744a079_FacebookLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                  <a href="#" class="inline-block h-8 w-8 max-w-full">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4977ee8effeeefc05b5d_InstagramLogo.svg"
                      alt=""
                      class="inline-block"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
    </div>
  );
};

export default page;
