import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-[-5%] relative xl:mt-[1%]">
      {/* Marquee Animation */}
      <div className="w-full marquee-wrapper xl:ml-[28%]">
        <div className="animate-marquee text-[150px] sm:text-7xl md:text-8xl xl:text-[300px] font-garamond font-bold text-gray-800 dark:text-gray-300 md:mt-14 md:mb-4 lg:mt-24">
  HANS&nbsp;HANS&nbsp;HANS&nbsp;HANS&nbsp;
  
</div>

</div>
      {/* Footer Content */}
      <div className="text-center">
      <div className="font-alfa text-center sm:flex items-center justify-between border-t border-white mx-[5%] mt py-6 xl:w-[85%] xl:top-[1%] xl:mx-[10%]">
      <ul className=" flex text-xs  xl:text-sm gap-3 justify-center xl:justify-end sm:mt-0 font-montserrat w-full relative top-[-20px]">

      <li>
          <a target="_blank" href="https://github.com/hanskkangg">
              ABOUT
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hanskkang/">
              SKILLS
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/kkanghhanss/">
              RESUME
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/kkanghhanss/">
              PROJECTS
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/kkanghhanss/">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      </div>

    </div>
  );
};

export default Footer;
