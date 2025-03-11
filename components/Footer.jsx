import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-[-5%] relative xl:mt-[1%]">
      {/* Marquee Animation */}
      <div className="w-full marquee-wrapper">
        <div className="animate-marquee text-[150px] sm:text-7xl md:text-8xl xl:text-[350px] font-garamond font-bold text-gray-800 dark:text-gray-300">
  HANS&nbsp;HANS&nbsp;HANS&nbsp;HANS&nbsp;
</div>


</div>


      {/* Footer Content */}
      <div className="text-center mt-8">
      
        <div className="w-max flex items-center gap-2 mx-auto font-montserrat">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          Hans.kkang@gmail.com
        </div>
      </div>

      <div className="font-alfa text-center sm:flex items-center justify-between border-t border-white mx-[10%] mt-12 py-6 xl:w-[80%]">
        <p>© 2025 Hans Kang. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-montserrat">
          <li>
            <a target="_blank" href="https://github.com/hanskkangg">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hanskkang/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/kkanghhanss/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
