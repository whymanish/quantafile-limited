import React from 'react';
import TestimonialList from './TestimonialList';
import { testimonials } from './testimonialdata';
const Testimonial = () => {
  

  return (
    <div>
      <section className="py-20 bg-gray-50 sm:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 mt-24 lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl  font-bold text-gray-800 md:text-5xl">What our client says </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">Simple &amp; fixed pricing. 30 days money-back guarantee</p>
          </div>
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
