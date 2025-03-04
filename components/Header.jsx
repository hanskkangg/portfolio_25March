import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const messages = ["Web Developer", "Full-Stack Developer", "Software Developer"];
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 1500);
    }
  }, [charIndex, currentMessageIndex]);

  return (
    <>
      {/* Social Icons & Dark Mode Toggle (Top Right) */}
      <div className="fixed top-4 right-6 flex items-center gap-4 z-50">
        <a href="https://github.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-7 h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-7 h-7 text-blue-700 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.instagram.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-7 h-7 text-pink-600 dark:text-white hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-7 h-7 text-blue-600 dark:text-white hover:text-blue-500 transition-colors" />
        </a>

        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setIsDarkMode(prev => !prev)} 
          className="mt-auto p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors">
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Dark Mode" className='w-6' />
        </button>
      </div>

      {/* Header Section with Border and Positioning */}
      <div className="ml-[460px] mr-[120px] mt-[130px] max-w-5xl text-center h-screen flex flex-col items-center justify-center gap-4 
                bg-white dark:bg-gray-900 border-2 border-white dark:border-gray-700 shadow-lg rounded-xl p-8">

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.profile_img} alt="Profile" className="rounded-full w-40" />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo text-gray-900 dark:text-white"
        >
          Welcome! I'm Hans Kang <Image src={assets.hand_icon} alt="Hand" className="w-6" />
        </motion.h3>

        {/* Typing effect message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-ovo text-gray-900 dark:text-white"
        >
          {displayedText}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-montserrat font-semi text-gray-700 dark:text-gray-300"
        >
          I am a Full-Stack Developer based in Ottawa, Canada.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-gray-800 dark:border-gray-400"
          >
            Contact me <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          >
            My resume <Image src={assets.download_icon} alt="Download" className="w-4" />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Header;