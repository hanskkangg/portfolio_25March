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
    w-[100%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[65%] 
   max-w-[1000px] min-h-[105vh] sm:min-h-[140vh] md:min-h-[90vh] lg:min-h-[120vh] xl:min-h-[70vh]

    rounded-xl flex flex-col items-center justify-center 
    shadow-xl bg-white dark:bg-gray-800 p-6 
    relative z-40  /* Ensure it stays below navbar */
    
    pt-[5rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[5rem] xl:pt-[6rem] /* Adjust padding */
    mt-[0rem] sm:mt-[3rem] md:mt-[-3rem] lg:mt-[5rem] xl:mt-[6rem]
 lg:ml-[28rem] xl:mt-[10rem] xl:ml-[22rem] 
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
  className="font-sans stroke-text_s
    text-2xl sm:text-sm md:text-sm lg:text-sm xl:text-4xl
    font-bold text-gray-300 dark:text-white 
    absolute /* Ensure positioning */

    /* Move Up for Mobile */
    top-[24%] left-[10%] sm:top-[5%] md:top-[30%] lg:top-[25%] xl:top-[12%]

    /* Move Left on Desktop */
   sm:left-[30%] lg:left-[23%] xl:left-[40%] lg:left-[10%]

   
    /* Special Case for iPad Air (820px width) */
    md:max-w-[820px] md:top-[310px]  md:left-[23%]
  "
>
  ABOUT ME
</motion.h3>


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
    top-[26%] left-[10%] sm:top-[5%] md:top-[30%] lg:top-[25%] xl:top-[15%]

    /* Move Left on Desktop */
   sm:left-[30%] lg:left-[23%] xl:left-[40%] lg:left-[10%]

   
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
    lg:left-[10%] /* Move RIGHT for desktop */
    absolute lg:absolute xl:absolute /* Ensure positioning */


    /* Special Case for iPad Air (820px width) */
    md:max-w-[820px] md:top-[330px]  md:left-[23%]
    /* Move Up for Mobile */
    top-[27%] left-[10%] sm:top-[30%] md:top-[25%] lg:top-[30%] xl:top-[30%] 
    

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
    absolute top-[18%] left-[20%] sm:top-[15%] md:top-[12%] lg:top-[10%] xl:top-[50%] xl:left-[5%]
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
            justify-center gap-4 sm:gap-6 md:gap-2 lg:gap-10 xl:gap-12  mt-4 text-center items-center
            md:justify-start md:ml-36 
            absolute
            
            top-[32%] sm:top-[15%] md:top-[24%] lg:top-[35%] xl:top-[38%]
            right-[20%] sm:left-[30%] md:left-[26%] lg:left-[31%] xl:left-[48%]

    left-1/2 transform -translate-x-1/2
    w-[60%] sm:w-[60%] md:w-[40%] lg:w-[65%] xl:w-[40%]

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
        
{/* Tagline Below Tech Stack */}
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="
    text-lg font-lora text-gray-800 dark:text-gray-300 leading-relaxed text-left
    absolute w-[85%] left-[52%] -translate-x-1/2 top-[47%]

    /* Large Screens (XL & LG) */
    xl:top-[55%] xl:left-[65%] xl:w-[60%] 
    lg:top-[44%] lg:w-[80%]

    /* Medium Screens (MD) */
    md:top-[33%] md:w-[90%]

    /* Small Screens (SM) */
    sm:top-[60%] sm:w-[90%]
  "
>
  Based in Ottawa 🧑🏽‍💻 on a mission to make a difference, one line of code at a time! 💻 ✨
</motion.p>


<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  className="
    flex flex-wrap justify-center items-center gap-6
    text-gray-800 dark:text-gray-200 

    w-full px-2 md:px-12 top-[58%]
    
    sm:flex-col sm:gap-4 sm:text-center 

    /* Adjust for medium screens */
    md:flex-row md:gap-6 md:justify-center md:top-[40%]

    /* Align in one row for large screens */
    lg:flex lg:gap-12 lg:top-[55%]

    /* No absolute for xl to prevent disappearing */
    xl:w-[200%] xl:left-[48%] xl:-translate-x-1/2 xl:top-[72%]
  "
>{/* Experience Block */}
<div className="flex flex-col items-center w-80">
  {/* Number & + in one row */}
  <div className="flex items-start">
    <span className="text-8xl font-bold stroke-text text-gray-800 dark:text-white ">1</span>
    <span className="text-5xl font-bold stroke-text text-gray-800 dark:text-white ml-2">+</span>
    <span className="text-xl font-bold stroke-text text-gray-800 dark:text-white ml-[-17] mt-[36]">Years of Experience</span>
  </div>
</div>

  {/* Happy Customers Block */}
  <div className="flex items-start">
    <span className="text-8xl font-bold stroke-text text-gray-800 dark:text-white">4</span>
    <span className="text-5xl font-bold stroke-text text-gray-800 dark:text-white ml-2">+</span>
    <span className="text-xl font-bold stroke-text text-gray-800 dark:text-white ml-[-17] mt-[36]">Happy Customers</span>
  </div>

  {/* Projects Done Block */}
  <div className="flex items-start mr-14 md:mr-1">
    <span className="text-8xl font-bold stroke-text text-gray-800 dark:text-white">10</span>
    <span className="text-5xl font-bold stroke-text text-gray-800 dark:text-white ml-2">+</span>
    <span className="text-xl font-bold stroke-text text-gray-800 dark:text-white ml-[-17] mt-[36]">Projects</span>
  </div>
</motion.div>

      </div>


    </motion.div>

    
  );

  
};




export default Header;
