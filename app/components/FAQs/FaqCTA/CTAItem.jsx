import React from "react";

const CTAItem = ({ imageSrc, text }) => (
  <li className="ml-2 mr-2 flex flex-row items-center md:mx-4">
    <img
      src={imageSrc}
      alt=""
      className="mr-2 inline-block h-4 w-4"
    />
    <p className="text-black">{text}</p>
  </li>
);

export default CTAItem;
