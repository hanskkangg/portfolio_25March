import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState("about");

  // Function to handle smooth scrolling
  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // Track scrolling to update active section
  useEffect(() => {
    const sections = ["about", "skills", "resume", "projects", "contact"];
    
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        
        {/* Social Icons*/}
        <nav className="w-[100%] mx-auto mt-4 flex justify-center gap-6 xl:ml-[-5%] xl:text-xl xl:justify-end">
          {[
                    { icon: <FaGithub />, url: "https://github.com/hanskkangg" },
                    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hanskkang" },
                    { icon: <FaInstagram />, url: "https://www.instagram.com/kkanghhanss" },
                    { icon: <FaFacebook />, url: "https://www.facebook.com/hans.kkang" },
          ].map(({ icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors">
                {icon}
              </div>
            </a>
          ))}
        </nav>

        {/* Navigation Links */}
        <div className="font-alfa text-center sm:flex items-center justify-between border-t border-white mx-[5%] mt py-6 xl:w-[85%] xl:top-[1%] xl:mx-[10%]">
          <ul className="flex text-xs xl:text-sm gap-3 justify-center xl:justify-end sm:mt-0 font-montserrat w-full relative top-[-20px]">
            {["about", "skills", "resume", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className={`cursor-pointer transition-colors text-gray-700 hover:text-white tracking-wider ${
                    activeSection === section ? "" : ""
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
