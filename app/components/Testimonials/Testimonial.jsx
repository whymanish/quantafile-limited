// Testimonial.js
import React from 'react';
import TestimonialList from './TestimonialList';
import { testimonials } from './testimonialdata';
const Testimonial = () => {
 

  return (
    <div>
      <section className="flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl   tracking-tighter font-bold text-gray-800 md:text-5xl">
              What our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                client
              </span>{' '}
              says
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
