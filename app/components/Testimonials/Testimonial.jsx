'use client'
import React from 'react';
import TestimonialList from './TestimonialList';
import { testimonials } from './testimonialdata';
import AOSComponent from '../AOSComponent';
const Testimonial = () => {
 

  return (
    <AOSComponent animationType="fade-up" duration={800} easing="ease-in-out" once>

    <div>
      <section className="flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-24">
          <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl   tracking-tighter font-bold text-zinc-800 dark:text-zinc-200 md:text-5xl">
              What our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                client
              </span>{' '}
              says
            </h2>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>
    </div>
    </AOSComponent>
  );
};

export default Testimonial;
