import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
  return (
    <footer className="mt-16 text-center text-sm md:text-base text-gray-400 border-t border-gray-700 pt-8">
      <p>&copy; {new Date().getFullYear()} New Year Countdown. All rights reserved.</p>
    </footer>
  );
});

export default Footer;