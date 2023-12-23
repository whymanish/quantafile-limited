// Feature.jsx
import React from "react";

const Feature = ({ icon, text }) => {
  return (
    <div className="flex flex-row">
      <div className="mr-3 flex">{icon}</div>
      <p className="text-body text-[#636262]">
        <span className="font-bold text-black">{text}</span> Lorem ipsum dolor sit amet consecteur adipiscing.
      </p>
    </div>
  );
};

export default Feature;
