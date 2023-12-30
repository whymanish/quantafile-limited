import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <div className="px-8 pt-12 mx-auto space-y-24 md:px-12 lg:px-32 max-w-7xl">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl   tracking-tighter font-bold text-gray-800 md:text-5xl">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Us
              </span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
        </div>
      </section>

      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-16 lg:py-16">
          <div class="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://images.unsplash.com/photo-1637825891028-564f672aa42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              class="inline-block h-full w-full rounded-3xl object-cover"
            />
            <div class="flex flex-col gap-5 rounded-3xl border  border-gray-300 p-10 sm:p-20">
              <h2 class="text-3xl text-gray-800 font-semibold tracking-tighter md:text-5xl">
                What we do ?
              </h2>
              <p class="text-sm text-[#808080] sm:text-base">
                {" "}
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="text-center">
            <p className="mt-12 text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
              Meet our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Team
              </span>
            </p>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-12 sm:gap-4 lg:max-w-none lg:grid-cols-3"
          >
            <li className="p-2 border bg-gray-50 rounded-3xl">
              <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
                <blockquote className="relative">
                  <p className="text-base text-gray-500">
                    Being in the financial industry, we were always looking for
                    ways to enhance our transactions' security and efficiency.
                  </p>
                </blockquote>
                <figcaption className="relative flex items-center justify-between pt-6 mt-6">
                  <div>
                    <div className="font-medium text-gray-900">Harsh Kumar</div>
                    <div className="mt-1 text-sm text-gray-500">CEO</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-50">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      decoding="async"
                      data-nimg="future"
                      className="object-cover h-14 w-14 "
                      loading="lazy"
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="p-2 border bg-gray-50 rounded-3xl">
              <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
                <blockquote className="relative">
                  <p className="text-base text-gray-500">
                    Implementing Semplice's blockchain technology has been a
                    game-changer for our supply chain management.
                  </p>
                </blockquote>
                <figcaption className="relative flex items-center justify-between pt-6 mt-6">
                  <div>
                    <div className="font-medium text-gray-900">Akash Yadav</div>
                    <div className="mt-1 text-sm text-gray-500">Not a CEO</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-50">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      decoding="async"
                      data-nimg="future"
                      className="object-cover h-14 w-14 "
                      loading="lazy"
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="p-2 border bg-gray-50 rounded-3xl">
              <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
                <blockquote className="relative">
                  <p className="text-base text-gray-500">
                    We were initially hesitant about integrating blockchain
                    technology into our existing systems, fearing the complexity
                    of the process.
                  </p>
                </blockquote>
                <figcaption className="relative flex items-center justify-between pt-6 mt-6">
                  <div>
                    <div className="font-medium text-gray-900">
                      Manishkumar Yadav
                    </div>
                    <div className="mt-1 text-sm text-gray-500">Not a CEO</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-50">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      decoding="async"
                      data-nimg="future"
                      className="object-cover h-14 w-14 "
                      loading="lazy"
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="p-2 border bg-gray-50 rounded-3xl">
            <div className="p-10 text-center bg-white border shadow-lg md:p-20 rounded-3xl">
              <p className="text-4xl font-semibold tracking-tighter text-black">
                Checkout our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Social media
                </span>{" "}
                handles
              </p>
              <div className="flex justify-center ">
                <div className="grid gap-4  mt-12 grid-cols-4">
                  <div className="tooltip" data-tip="Linkedin">
                    <img
                      className="w-10 h-10 "
                      src="https://www.svgrepo.com/show/354000/linkedin-icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="tooltip" data-tip="Github">
                    <img
                      className="w-10  h-10"
                      src="https://www.svgrepo.com/show/512317/github-142.svg"
                      alt=""
                    />
                  </div>
                  <div className="tooltip" data-tip="Instagram">
                    <img
                      className="w-10 h-10"
                      src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="tooltip" data-tip="Twitter">
                    <img
                      className="w-10 h-10"
                      src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
