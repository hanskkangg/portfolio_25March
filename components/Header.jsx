import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";

const Header = () => {
  const messages = ["Hello There!", "I'm Hans Kang"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

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
  {/* Border Box Container */}
  <div className="
    w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[65%] 
    max-w-[1000px] 
    h-[150vh] sm:h-[150vh] md:h-[150vh] lg:h-[80vh] xl:h-[80vh]
    rounded-xl flex flex-col items-center justify-center 
    shadow-xl bg-white dark:bg-gray-800 p-6 
    relative z-40  /* Ensure it stays below navbar */
    
    pt-[5rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[5rem] xl:pt-[6rem] /* Adjust padding */
    mt-[0rem] sm:mt-[0rem] md:mt-[0rem] lg:mt-[10rem] lg:ml-[28rem] xl:mt-[10rem] xl:ml-[22rem] 
  ">



{/* Profile Image */}
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  className="
    absolute top-[2%] ml-[1%] transform -translate-x-1/2 xl:top-[10%] xl:left-[5%]
    rounded-full overflow-hidden 
    w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%]
    max-w-[220px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[350px]
  "
>
  <Image src={assets.prof} alt="Profile" className="rounded-full w-full h-auto" />
</motion.div>

{/* About Me */}
<motion.h3
  initial={{ y: -20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="font-ovo 
    text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm
    font-bold text-gray-900 dark:text-white 
    absolute /* Ensure positioning */

    /* Move Up for Mobile */
    top-[20%] left-[10%] sm:top-[5%] md:top-[30%] lg:top-[25%] xl:top-[15%]

    /* Move Left on Desktop */
   sm:left-[30%] lg:left-[23%] xl:left-[40%] 

   
    /* Special Case for iPad Air (820px width) */
    md:max-w-[820px] md:top-[310px]  md:left-[23%]
  "
>
  // ABOUT ME
</motion.h3>

      {/* Title */}
<motion.h3
  initial={{ y: -20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="font-Ovo
    text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
    text-gray-900 dark:text-white 
    mt-3 sm:mt-3 md:mt-3 lg:mt-[-10px] xl:mt-[-20px]  /* Move UP for desktop */
    lg:left-[20%] /* Move RIGHT for desktop */
    absolute lg:absolute xl:absolute /* Ensure positioning */


    /* Special Case for iPad Air (820px width) */
    md:max-w-[820px] md:top-[330px]  md:left-[23%]
    /* Move Up for Mobile */
    top-[22%] left-[10%] sm:top-[30%] md:top-[25%] lg:top-[30%] xl:top-[30%]  

    xl:top-[25%] xl:left-[40%]
  "
>
  Full Stack Developer
</motion.h3>


  {/* Typing Effect */}
<motion.div
  initial={{ opacity: 1, y: -10 }}
  animate={{ opacity: 2, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="
    absolute top-[15%] left-[20%] sm:top-[15%] md:top-[12%] lg:top-[10%] xl:top-[50%] xl:left-[10%]
    transform -translate-x-1/2
    px-4 py-2 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
    bg-black/20 dark:bg-black/90 rounded-3xl backdrop-blur-2xl shadow-2xl 
    text-white

    md:w-auto md:px-6 md:py-3 /* More padding on tablets */
    lg:top-[18%] lg:px-8 lg:py-3 /* Higher on large screens */
    
    /* Special tweak for iPad Air (820px width) */
    md:max-w-[280px] md:top-[15%] md:left-[30%]
  "
>
  {displayedText} <span className="text-orange-500 animate-blink">_</span>
</motion.div>




        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="
            grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
            justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12  mt-4 text-center items-center
            md:justify-start md:ml-36 
            absolute
            
            top-[27%] sm:top-[15%] md:top-[24%] lg:top-[35%] xl:top-[38%]
            right-[20%] sm:left-[30%] md:left-[26%] lg:left-[31%] xl:left-[48%]

    left-1/2 transform -translate-x-1/2
    w-[60%] sm:w-[60%] md:w-[50%] lg:w-[65%] xl:w-[40%]

     fold1:top-[20%] fold:left-1/2 fold:transform fold:-translate-x-1/2 fold:w-[80%]
          "
        >
          {/* Icons */}
          {[FaReact, FaNodeJs, FaDatabase, FaServer].map((Icon, index) => (
            <div key={index} className="flex items-center border border-dashed border-gray-500 dark:border-gray-300 rounded-3xl p-2 w-24">
              <Icon className="text-gray-500 text-2xl" />
              <span className="ml-2 text-xs font-light text-gray-500 dark:text-gray-300">
                {Icon.name.replace("Fa", "")}
              </span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default Header;
