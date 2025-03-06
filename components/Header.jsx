import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMoon, FaSun , FaReact, FaNodeJs, FaDatabase, FaServer} from 'react-icons/fa';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const messages = ["Hello There!", "I'm Hans Kang"];
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowIcons(currentScrollPos < prevScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
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
  
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="header"
    className="relative mx-auto 
               w-full 
               max-w-[350px] 
               sm:max-w-[600px]
               md:max-w-[800px] 
               lg:max-w-[950px] 
               p-6 sm:p-8 md:p-12 text-center min-h-[900px] sm:min-h-[600px] 
               bg-[url('@/assets/about_bg.png')] bg-cover bg-center 
               dark:bg-gray-900 dark:border-gray-700 shadow-lg rounded-xl 
               flex flex-col items-center gap-4 sm:gap-6
               
               mt-[5%] sm:mt-[5%] md:mt-[5%] lg:mt-[10%] xl:mt-[10%] 2xl:mt-[10%] 
               
               lg:ml-[30%] xl:ml-[30%] 2xl:ml-[30%] md:mx-auto"
  >
  
  
      
      {/* Social Icons & Dark Mode Toggle */}
      <div 
        className={`fixed top-1 right-[120px] flex items-center gap-4 z-50 transition-opacity duration-300 md:hidden sm:hidden
                      ${showIcons ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden sm:flex
                      
                                            
                      `}
      >
        <a href="https://github.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.instagram.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-5 h-5 text-gray-800 dark:text-white hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>

        {/* Dark Mode Toggle */}
        <div className="p-2 border-1 border-black rounded-md bg-gray-800 dark:bg-gray-700 ml-1">
          <button onClick={() => setIsDarkMode(prev => !prev)} className="p-2 transition-colors h-[40px]">
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Dark Mode" className='w-5 h-5' />
          </button>
        </div>
      </div>

     {/* Profile Image */}
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
  className="
    border-4 border-white dark:border-gray-600 rounded-full w-56
    md:absolute md:top-10 md:left-10  
    md:w-40 lg:w-48 xl:w-64 xl:mt-5  
    mx-auto mt-6 sm:mt-10 sm:w-12" 
>
  <Image src={assets.prof} alt="Profile" className="rounded-full w-full" />
</motion.div>

      {/* About Me Title */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xs font-bold text-gray-900 dark:text-white  xl:mt-5 -ml-56"
      >
        // ABOUT ME
      </motion.h3>

         {/* title*/}
         <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl text-gray-900 dark:text-white  xl:mt-5 xl:ml-36 font-ovo"
      >
        Full Stack Developer
      </motion.h3>
{/* Typing Effect */}
<motion.div
  initial={{ opacity: 1, y: -10 }}
  animate={{ opacity: 2, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
 
  className="
  flex items-center gap-2 px-4 py-1 rounded-3xl 
  bg-black/20 dark:bg-black/90 backdrop-blur-2xl shadow-2xl
  -mt-[75%] mr-[30%]
  text-white dark:text-white 

  /* Desktop (xl) - Position left */
  xl:absolute xl:top-[20%] xl:-left-[4%]

  /* Medium Screens (md) - Keep in flow */
  md:relative md:mt-[%] md:ml-20 

  /* Small Screens (sm) - Move to top */
  sm:absolute sm:mt-[10%] sm:left-1/2 sm:-translate-x-1/2 sm:w-fit
"

>

  <span className="text-md font-montserrat font-normal">
    {displayedText}
  </span>
  <span className="text-xl font-normal text-orange-500 animate-blink">_</span>
</motion.div>

      {/* Developer Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-lg font-lora text-gray-700 dark:text-gray-300 leading-relaxed
        
        
    absolute top-[65%] -left-[30%]
    xl:mt-[5px]   // ✅ Correct syntax for Tailwind
 ml-[30%]"
      >
        Based in Ottawa 🧑🏽‍💻 on a mission to make a difference, one line of <br /> code at a time! 💻 ✨
      </motion.p>

{/* Tech Stack Icons (Below Full Stack Developer Title) */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  className="
    flex flex-wrap justify-center gap-4 mt-4  
    md:justify-start md:ml-36 md:gap-6

    xl:-mt-[200px] xl:left-[220px]
    
    "
>
  {/* React */}
  <div className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-2xl p-2 w-24">
    <FaReact className="text-gray-500 text-2xl" title="React" />
    <span className="ml-2 text-xs font-light text-gray-500 dark:text-gray-300">React</span>
  </div>

  {/* Node.js */}
  <div className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-2xl p-2 w-24">
    <FaNodeJs className="text-gray-500 text-2xl" title="Node.js" />
    <span className="ml-2 text-xs font-light text-gray-500 dark:text-gray-300">Node.js</span>
  </div>

  {/* MongoDB */}
  <div className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-2xl p-2 w-24">
    <FaDatabase className="text-gray-500 text-2xl" title="MongoDB" />
    <span className="ml-2 text-xs font-light text-gray-500 dark:text-gray-300">MongoDB</span>
  </div>

  {/* Jest */}
  <div className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-2xl p-2 w-24">
    <FaServer className="text-gray-500 text-2xl" title="Jest" />
    <span className="ml-2 text-xs font-light text-gray-500 dark:text-gray-300">Jest</span>
  </div>
</motion.div>


      {/* Experience Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="

    flex flex-wrap gap-2 text-gray-800 dark:text-gray-200
    sm:absolute sm:top-[75%] sm:left-[10%] 
    sm:w-[80%] sm:flex-col sm:items-center
    md:relative md:top-auto md:left-auto 
    xl:mt-[20%] xl:flex-row xl:gap-20
  "
      >
        {/* Experience Block */}
        <div className="relative flex items-center">
          <span className="text-5xl font-bold stroke-text">1+</span>
          <p className="text-xl text-gray-900 ml-3">Years of Experience</p>
        </div>

        {/* Happy Customers Block */}
        <div className="relative flex items-center">
          <span className="text-5xl font-bold stroke-text">4+</span>
          <p className="text-xl text-gray-900 ml-3">Happy Customers</p>
        </div>

        {/* Projects Done Block */}
        <div className="relative flex items-center">
          <span className="text-5xl font-bold stroke-text">10+</span>
          <p className="text-xl text-gray-900 ml-3">Projects Done</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
