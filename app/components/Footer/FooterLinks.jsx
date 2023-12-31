// FooterLinks.js
import React from 'react';
import Link from 'next/link';
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
      <Link href="/components/Terms&Condition">
        <li role="listitem"  className="hover:text-primary">
          T&C
        </li>
      </Link>
    </ul>
  );
};

export default FooterLinks;
