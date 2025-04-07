"use client";

import React from 'react';
import blogData from './blogData';
import { motion } from "framer-motion";

const Blogs = ({ isDarkMode }) => {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="blog"
      className="  w-[90%] sm:w-[85%] md:w-[95%] lg:w-[63%] xl:w-[67%] 
        max-w-[1000px]
        min-h-[400px] sm:min-h-[500px] relative mx-auto 
        mt-10 p-6 sm:p-8 md:p-12 text-center bg-white
        dark:border-gray-700 rounded-xl flex flex-col items-center gap-6 sm:gap-8
 dark:bg-[#272626] 
        
        /* Matching Header's right & bottom shift */
        lg:translate-x- lg:translate-y-6
        xl:translate-x-48 xl:translate-y-2


        xl:flex xl:flex-col xl:items-left xl:justify-left"
    >

      

<p className=" stroke-text_m text-xs md:text-xs xl:text-6xl text-gray-700 mt-3 font-ovo xl:absolute xl:top-[50px] xl:right-[77%] dark:text-[#EFB920] ">

    
BLOG
</p>
          <p className="hidden xl:block text-sm md:text-lg xl:text-xs xl:font-bold font-bold font-ovo text-gray-900 dark:text-white
          xl:mt-[6%] xl:ml-[-89%] xl:font-sans">
            // BLOG
          </p>
          
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} dark:bg-[#272626] ` }>

      <h2 className="text-2xl font-bold md:text-5xl text-center font-ovo dark:text-gray-300">My Recent Blog</h2>
      
      <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-2 font-ovo">
      Here, I write about things I’ve learned and found interesting. You're welcome to explore my blog!
          </p>
          
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <a
            key={blog.id}
            href={blog.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border dark:border-gray-500 shadow-2xl rounded-lg overflow-hidden  hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold font-ovo dark:text-gray-300">{blog.title}</h3>
              
              <p className="border border-dashed border-gray-800 rounded-full px-12 py-2 inline-block mt-[10%] 
             text-black dark:border-[#EFB920] hover:text-white 
             hover:bg-gray-500 transition-all duration-300 ease-in-out dark:text-gray-300 text-sm">Read
</p>
            </div>
          </a>
        ))}
                      </div>
      
    </div>
    <div> <a href="https://hans-blogs.onrender.com/home" target="_blank" rel="noopener noreferrer" className="border border-dashed border-gray-800 rounded-full px-10 py-2 inline-block mt-[10%] 
             text-black dark:border-[#EFB920] hover:text-black bg-[#EFB920]
             hover:bg-gray-100 black transition-all duration-300 ease-in-out xl:ml-[10%] 
             ml-[1%] md:ml-[1%] xl:mb-[5%] xl:mt-[10%] lg:ml-[10%] dark:text-black">Visit_Blog</a>
            </div>
  </motion.div>
  );
  
};

export default Blogs;
