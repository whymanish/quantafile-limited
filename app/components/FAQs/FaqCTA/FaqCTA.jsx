import React from "react";
import Link from "next/link";
import CTAItem from "./CTAItem";
import { items } from "./CTAdata";


const FaqCTA = () => (
  <div>
    <section>
      <div className="px-4 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="p-2 border bg-gray-50 rounded-3xl">
          <div className="p-6 text-center bg-[#f2f4f6] border shadow-lg md:p-16 rounded-3xl">
            <p className="text-3xl lg:text-5xl font-semibold tracking-tighter text-black">
              Is there any doubt in your mind?
            </p>
            <div className="mt-10 flex justify-center">
              <ul className="mb-6 grid grid-cols-1 lg:grid-cols-3">
                {items.map((item, index) => (
                  <CTAItem key={index} {...item} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-4 md:flex-row">
              <Link href="/components/FAQs">
                <button className="inline-flex items-center group justify-center w-full h-12 gap-3 px-5 py-3 bg-[#7360DF] md:w-auto rounded-xl hover:bg-gray-200 focus:outline-none">
                  <span className="text-md text-white group-hover:text-black transition duration-300 font-bold">
                    Checkout our FAQs
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FaqCTA;
