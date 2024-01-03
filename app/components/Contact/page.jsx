import React from "react";

const page = () => {
  return (
    <div className="h-screen dark:bg-black bg-[#f2f4f6] flex items-center">
      <section className="flex  items-center justify-center w-full">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col items-start max-w-2xl">
              <h2 className="mb-6 lg:mt-0 mt-40 text-zinc-700 dark:text-zinc-100  text-3xl font-bold md:text-5xl">
                Let's build something exciting together!
              </h2>
              <p class="mb-6 max-w-lg pb-4 text-zinc-700 dark:text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
             
              
            </div>
            <div class="mx-auto rounded-3xl max-w-xl bg-white dark:bg-black border dark:border-zinc-800 p-8 text-center">
              <h3 class="text-2xl text-zinc-800 dark:text-zinc-100 font-bold md:text-3xl">Contact us</h3>
              <p class="mx-auto mb-6 mt-4 max-w-md text-sm text-zinc-800 dark:text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
              <form
                class="mx-auto mb-4 max-w-sm text-left"
                name="wf-form-password"
                method="get"
              >
                <label className="form-control mt-4 w-full ">
                  <div className="label">
                    <span className="label-text text-zinc-700 dark:text-zinc-200">Your name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered dark:bg-black dark:text-zinc-200 dark:border-zinc-800 w-full "
                  />
                </label>
                <label className="form-control mt-2 w-full ">
                  <div className="label">
                    <span className="label-text text-zinc-700 dark:text-zinc-200">Your Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered dark:bg-black dark:text-zinc-200 dark:border-zinc-800 w-full "
                  />
                </label>
                <label className="form-control mt-2 w-full ">
                  <div className="label">
                    <span className="label-text text-zinc-700 dark:text-zinc-200">Message</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered dark:bg-black dark:text-zinc-200 dark:border-zinc-800 w-full "
                  />
                </label>
                <button className="btn bg-indigo-600 hover:bg-indigo-500 dark:hover:border-black inline-block dark:border-black mt-6 w-full cursor-pointer  px-6 py-4 text-center font-semibold text-white transition">
               Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
