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
  const [showIcons, setShowIcons] = useState(true); // State to track icons visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowIcons(currentScrollPos < prevScrollPos || currentScrollPos < 50); // Hide icons when scrolling down
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    if (charIndex < currentMessage.length) {
      // Type each character one by one
      const timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait before switching to the next message
      setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 1500); // Delay before next message starts typing
    }
  }, [charIndex, currentMessageIndex]);



  return (
    <>
    
      {/* Social Icons & Dark Mode Toggle (Disappear on Scroll) */}
      <div 
        id="about" className={`fixed top-1 right-[120px] flex items-center gap-4 z-50 transition-opacity duration-300
                      ${showIcons ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden sm:flex`}
                      >


        <a href="https://github.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5 -mt-3 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 -mt-3 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://www.instagram.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-5 h-5 -mt-3  text-gray-800 dark:text-white hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/hanskkangg" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-5 h-5  -mt-3 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
        </a>


        {/* Dark Mode Toggle */}
       {/* Dark Mode Toggle with Black Border */}
<div className="p-2 border-1 border-black rounded-md bg-gray-800 dark:bg-gray-700 ml-1 -mt-3">
  <button 
    onClick={() => setIsDarkMode(prev => !prev)} 
    className="p-2 transition-colors h-[40px]">
    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Dark Mode" className='w-5 h-5' />
  </button>
</div>

      </div>

{/* Header Section with Border and Positioning */}
<div className="ml-[460px] mr-[120px] mt-[130px] max-w-5xl text-center 
                min-h-[500px] flex flex-col items-center justify-center gap-4 
                bg-[url('@/assets/about_bg.png')]
 bg-cover bg-center dark:bg-gray-900 border-2 border-white dark:border-gray-700 shadow-lg 
                rounded-xl p-8" >


        {/* Profile Image Positioned at Top Left Inside Border */}
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="absolute top-[180px] left-[510px] border-4 border-white dark:border-gray-600 rounded-full"
    >
        <Image src={assets.prof} alt="Profile" className="rounded-full w-32 sm:w-32 md:w-60" />
    </motion.div>
    
     {/* About Me Title */}
     <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[210px] left-[805px] font-ovo text-xl md:text-sm font-bold text-gray-900 dark:text-white"
        >
          //   ABOUT ME
        </motion.h3>

{/* Typing Effect */}
<motion.div
  initial={{ opacity: 1, y: -10 }}
  animate={{ opacity: 2, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="absolute top-[370px] left-[520px] flex items-center gap-2 px-4 py-1 rounded-3xl 
             bg-black/20 dark:bg-black/90 backdrop-blur-2xl shadow-2xl ">
  <span id="hero-avatar-text" className="text-sm sm:text-md font-montserrat font-normal text-white dark:text-white">
    {displayedText}
  </span>
  <span className="text-lg sm:text-xl font-normal text-orange-500 animate-blink">_</span>
</motion.div>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-[250px] left-[800px] items-end gap-2 text-sm md:text-5xl mb-3 font-ovo text-gray-900 dark:text-white"
          >
          Full Stack Developer
        </motion.p>
{/* Developer Tagline */}
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="absolute top-[390px] left-[800px] text-left text-md md:text-lg 
             font-lora text-gray-700 dark:text-gray-300 leading-relaxed"
>
  Based in Ottawa 🧑🏽‍💻 on a mission to make a difference, one line of <br/> code at a time! 💻 ✨
</motion.p>


        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  className="absolute top-[320px] left-[800px] flex flex-wrap gap-3"
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
  className="absolute top-[480px] left-[520px] flex flex-wrap gap-16 text-gray-800 dark:text-gray-200"
>
  {/* Experience Block */}
  <div className="relative flex items-center">
    <span className="absolute text-4xl font-bold top-[5px] left-[40px]">+</span>
    <span className="text-8xl font-bold stroke-text">1</span>
    <p className="text-xl text-gray-900 ml-3 mt-7">Years of Experience</p>
  </div>

  {/* Happy Customers Block */}
  <div className="relative flex items-center">
    <span className="absolute text-4xl font-bold top-[5px] left-[60px]">+</span>
    <span className="text-8xl font-bold stroke-text">4</span>
    <p className="text-xl text-gray-900 ml-3  mt-7">Happy Customers</p>
  </div>

  {/* Projects Done Block */}
  <div className="relative flex items-center">
    <span className="absolute text-4xl font-bold top-[5px] left-[110px]">+</span>
    <span className="text-8xl font-bold stroke-text">10</span>
    <p className="text-xl text-gray-900 ml-3  mt-7">Projects Done</p>
  </div>
</motion.div>




        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">





          {/* <motion.a
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
          </motion.a> */}
        </div>
      </div>
    </>
  );
};

export default Header;
