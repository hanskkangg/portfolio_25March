import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMoon, FaSun , FaReact, FaNodeJs, FaDatabase, FaServer} from 'react-icons/fa';

const Header = () => {
  const messages = ["Hello There!", "I'm Hans Kang"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

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
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 dark:bg-gray-900"
    >

      

{/* Social Icons & Dark Mode Toggle */}
<div 
  className={`fixed top-6 right-12 flex items-center gap-6 z-50 transition-opacity duration-300
    ${showIcons ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden lg:flex
    xl:top-8 xl:right-20`}
>
  {/* GitHub */}
  <a href="https://github.com/hanskkangg" target="_blank" rel="noopener noreferrer">
    <FaGithub className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/hanskkangg" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/hanskkangg" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800 dark:text-white hover:text-pink-500 transition-colors" />
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/hanskkangg" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
  </a>

</div>
      {/* Border Box Container */}
      <div className="
        w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] 
        max-w-[1000px] min-h-screen sm:min-h-[120vh] md:min-h-[100vh] lg:min-h-[90vh] xl:min-h-[70vh]
        rounded-xl flex flex-col items-center justify-center shadow-xl 
        bg-white dark:bg-gray-800 p-6 relative z-40
        
        
  /* Shift to right and bottom on large screens */
  lg:translate-x-6 lg:translate-y-6
  xl:translate-x-48 xl:translate-y-12"
      >


        {/* Profile Image & Typing Effect Wrapper */}
        <div className="relative flex justify-center items-center w-[75%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[28%] xl:absolute xl:top-14 xl:left-12">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative w-full"
          >
            <Image src={assets.prof} alt="Profile" className="rounded-full w-full h-auto" />
          </motion.div>

          {/* Typing Effect - Positioned on Bottom-Left of Profile Image */}
          <motion.div
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" mb-[10%] 
              absolute font-montserrat bottom-0 left-0 translate-x-[-10%] translate-y-[40%]
              text-xs sm:text-sm  bg-black/20 dark:bg-black/90 text-white 
              px-2 py-2 rounded-3xl xl:ml-[5%] xl:mb-[15%] 
            "
          >
            {displayedText} <span className="text-orange-500 animate-blink">_</span>
          </motion.div>
        </div>

  {/* About Me Text (SMALL TEXT ABOVE FULL STACK DEVELOPER) */}
  <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" xl:block hidden
           xl:font-bold text-xs sm:text-sm md:text-base mt-4 text-gray-900 dark:text-gray-300 
            xl:absolute xl:top-16 xl:left-[38%] xl:text-left xs:text-xs"
        >
          // ABOUT ME
        </motion.p>

         {/* About Me Text (SMALL TEXT ABOVE FULL STACK DEVELOPER) */}
  <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            stroke-text_m text-xs sm:text-7xl md:text-base mt-4 xl:mt-[-26] text-gray-900 dark:text-gray-300 
            xl:absolute xl:top-20 xl:left-[38%] xl:text-left xl:text-5xl"
        >
          ABOUT ME
        </motion.p>

        {/* About Me Title */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center font-ovo text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 
            font-bold text-gray-900 dark:text-white mt-5 xl:absolute xl:top-32 xl:left-[38%]"
        >
          Full Stack Developer
        </motion.h3>

        {/* Tech Stack Icons with Labels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-6 xl:gap-4
          
           xl:absolute xl:top-[40%] xl:left-[38%]"
        >
          {[
            { icon: FaReact, name: "React.js" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: FaDatabase, name: "MongoDB" },
            { icon: FaServer, name: "Express.js" }
          ].map(({ icon: Icon, name }, index) => (
            <div key={index} className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-3xl p-2">
              <Icon className="text-gray-500 text-3xl sm:text-4xl md:text-5xl xl:text-lg" />
              <span className="ml-2 text-sm sm:text-md md:text-lg xl:text-sm text-gray-500 dark:text-gray-300">
                {name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tagline Below Tech Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-lg
            text-gray-500 dark:text-gray-300 leading-relaxed mt-8
             xl:absolute xl:top-[50%] xl:left-[35%] xl:w-[65%] xl:text-left"
        >
          Based in Ottawa 🧑🏽‍💻 on a mission to make a difference, one line of code at a time! 💻 ✨
        </motion.p>
{/* Experience Stats Section - Perfect Alignment */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  className="
    flex flex-wrap justify-center items-center gap-14
    text-gray-800 dark:text-gray-200 w-full px-6 md:px-12
    sm:flex-col sm:text-center 
    md:flex-row md:justify-center 
    lg:flex-row lg:gap-12 mt-12
    xl:absolute xl:top-[65%] xl:left-[-5%] xl:gap-56 "
>
  {[
    { number: "1", label: "Years of Experience" },
    { number: "4", label: "Happy Customers" },
    { number: "6", label: "Projects Done" }
  ].map(({ number, label }, index) => (
    <div key={index} className="flex items-center gap-1 w-[80px] xl:text-7xl">
      {/* Number - Shift Left on Small Screens */}
    {/* Number - Shift Left on Small Screens, but "1" moves right */}
<span
  className={`text-8xl md:text-7xl xl:text-8xl font-bold stroke-text w-[50px] 
    ${number === "1" ? "ml-[-10px]" : "ml-[-20px]"} sm:ml-[-12px] md:ml-0`}
>
  {number}
</span>


      {/* + and Label - Now **Perfectly Close** */}
      <div className="flex flex-col items-start ml-[5px]">
        <span className="text-4xl font-bold stroke-text text-orange-500 leading-none">+</span>
        <p className="text-lg md:text-xl xl:text-[16px]  text-gray-900 dark:text-gray-300 font-ovo leading-tight xl:mt-[-6] xl:text-left xl:w-40">
          {label}
        </p>
      </div>
    </div>
  ))}
</motion.div>

      </div>

      
    </motion.div>

    
  );
};

export default Header;
