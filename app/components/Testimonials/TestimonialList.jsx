import React from 'react';
import TestimonialItem from './TestimonialItem';

const TestimonialList = ({ testimonials }) => {
  return (
    <ul role="list" className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
    </ul>
  );
};

export default TestimonialList;
