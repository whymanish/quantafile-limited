import React from "react";

const Features = () => {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl  font-bold text-gray-800 md:text-5xl">
              Smooth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Process
              </span>{" "}
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>{" "}
          <div
            class="flex flex-col items-center justify-center bg-contain bg-center pt-10"
            style={{
              backgroundImage:
                " url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')",
            }}
          >
            <div class="flex flex-col justify-around gap-4 sm:flex-row">
              <div
                class="rounded-2xl border lg:w-[25vw] border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]"
                href="#w-tabs-2-data-w-pane-0"
               >
                <div className=" mr-2 flex flex-row mb-2 items-center ">
                  <svg
                    class="mr-2 inline-block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#276ef1"
                      d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M8 7.71v3.34l7.14.95l-7.14.95v3.34L18 12z"
                    />
                  </svg>

                  <h5 class=" text-xl font-bold">Send your requirements</h5>
                </div>

                <p class="text-sm">
                  Kickstart your project by sharing your needs. We'll shape your
                  ideas into a tailored development plan.
                </p>
              </div>
              <div
                class="rounded-2xl border lg:w-[25vw] border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]"
                tabindex="-1"
                href="#w-tabs-2-data-w-pane-1"
              >
                <div className=" mr-2 flex flex-row mb-2 items-center ">
                  <svg
                    class="mr-2 inline-block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                  >
                    <g fill="none">
                      <defs>
                        <mask id="pepiconsPopCodeCircleFilled0">
                          <path fill="#fff" d="M0 0h26v26H0z" />
                          <g
                            fill="#000"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M4.59 12.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412" />
                            <path d="M9.41 9.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074" />
                            <path d="M16.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702" />
                          </g>
                        </mask>
                      </defs>
                      <circle
                        cx="13"
                        cy="13"
                        r="13"
                        fill="#ff5757"
                        mask="url(#pepiconsPopCodeCircleFilled0)"
                      />
                    </g>
                  </svg>
                  <h5 class=" text-xl font-bold">Development</h5>
                </div>
                <p class="text-sm">
                  Watch your website come to life with agile coding, delivering
                  a user-friendly and dynamic digital experience.
                </p>
              </div>
              <div class="rounded-2xl lg:w-[25vw] border border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]">
                <div className=" mr-2 flex flex-row mb-2 items-center ">
                  <svg
                    class="mr-2 inline-block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#46d49c"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <h5 class=" text-xl font-bold">Testing & Deployement</h5>
                </div>
                <p class="text-sm">
                  We ensure perfection through meticulous testing, then
                  seamlessly deploy your polished website for the world to see.
                  Your online success starts here.
                </p>
              </div>
            </div>
            <div className="max-w-5xl mt-16 hidden lg:block mx-auto">
              <img src="laptop.png" alt="" />
            </div>
            <div className="max-w-5xl mt-16 block lg:hidden mx-auto">
              <img className="h-fit" src="mobile.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
