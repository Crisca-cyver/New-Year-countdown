import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 text-center text-sm md:text-base opacity-70">
      <p>&copy; {new Date().getFullYear()} New Year Countdown. All rights reserved.</p>
    </footer>
  );
};

export default Footer;