import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

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
        
        {/* === Social Icons (Bottom of Footer) === */}
        <nav className="w-[100%] mx-auto mt-4 flex justify-center gap-6 xl:ml-[-5%] xl:text-xl xl:justify-end">
          {[
            { icon: <FaGithub />, url: "https://github.com/hanskkangg" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hanskkangg" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/kkanghhanss" },
            { icon: <FaFacebook />, url: "https://www.facebook.com/hanskkangg" },
          ].map(({ icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ">
                {icon}
              </div>
            </a>
          ))}
        </nav>
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
