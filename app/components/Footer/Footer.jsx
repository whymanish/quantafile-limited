// Footer.js
import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterText from './FooterText';

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-white border-t dark:bg-gray-900 py-16">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
            <FooterLogo />
            <FooterLinks />
            <FooterText />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
