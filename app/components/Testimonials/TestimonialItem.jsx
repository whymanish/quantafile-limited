import React from 'react';

const TestimonialItem = ({ quote, author, position, imageSrc }) => {
  return (
    <li>
      <figure className="relative h-full border shadow-xl p-6 bg-gradient-to-r from-gray-100 to-purple-50 rounded-3xl">
        <blockquote className="relative">
          <p className="text-base text-gray-600">{quote}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
          <div>
            <div className="text-base font-semibold text-black">{author}</div>
            <div className="mt-1 text-sm text-gray-500">{position}</div>
          </div>
          <div className="overflow-hidden rounded-full bg-gray-50">
            <img
              alt=""
              src={imageSrc}
              decoding="async"
              data-nimg="future"
              className="object-cover h-14 w-14"
              loading="lazy"
              style={{ color: 'transparent' }}
              width="56"
              height="56"
            />
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default TestimonialItem;
