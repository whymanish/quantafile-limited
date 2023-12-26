// FooterLinks.js
import React from 'react';

const FooterLinks = () => {
  return (
    <ul
      role="list"
      className="flex items-center justify-center gap-4 py-4 flex-row sm:gap-8"
    >
      <li role="listitem">
        <a href="#" className="hover:text-primary">
          About
        </a>
      </li>
      <li role="listitem">
        <a href="#" className="hover:text-primary">
          Contact us
        </a>
      </li>
      <li role="listitem">
        <a href="#" className="hover:text-primary">
          T&C
        </a>
      </li>
    </ul>
  );
};

export default FooterLinks;
