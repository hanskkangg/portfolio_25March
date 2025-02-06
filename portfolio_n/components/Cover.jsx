"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Kolker_Brush, Protest_Revolution } from "next/font/google"; // Import Fonts

const kolkerBrush = Kolker_Brush({ weight: "400", subsets: ["latin"] });
const protestRevolution = Protest_Revolution({ weight: "400", subsets: ["latin"] });

const Cover = () => {
  const [isBg1, setIsBg1] = useState(false); // Track background state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBg1(true); // Switch to second background smoothly
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* First Background - Always Present */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg_5.png')" }}
        />
        
        {/* Second Background - Fades in Over First */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg_2.png')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isBg1 ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth Fade-in
        />
      </div>

      {/* Name Text with Smooth Font Size & Color Transition */}
      <motion.h1
        className={`relative ${kolkerBrush.className} font-bold z-10 transition-colors duration-5000 ${
          isBg1 ? "text-white" : "text-black"
        }`}
        style={{ fontSize: "110px", display: "flex", alignItems: "center", position: "relative" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <span className="text-[300px] leading-none">H</span>
        <span className="text-[100px] leading-none ml-2">ans Kang</span>
        

        <div className="flex justify-end items-end h-full w-full absolute bottom-2 left-50 right-0 p-10">
  <motion.p
    className={`${protestRevolution.className} text-lg sm:text-xl z-10 transition-colors duration-1500 whitespace-nowrap ${
      isBg1 ? "text-white" : "text-black"
    }`}
    style={{ fontSize: "35px" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    Full-Stack Developer
  </motion.p>
</div>


      </motion.h1>
    </div>
  );
};

export default Cover;
