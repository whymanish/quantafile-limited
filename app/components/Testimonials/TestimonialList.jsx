// TestimonialList.js
import React from 'react';
import TestimonialItem from './TestimonialItem';

const TestimonialList = ({ testimonials }) => (
  <div className='flex justify-center'>
  <ul className="grid gap-8 sm:grid-cols-3">
    {testimonials.map((testimonial, index) => (
      <TestimonialItem key={index} {...testimonial} />
    ))}
  </ul>
  </div>
);

export default TestimonialList;
