import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center mb-2 text-lg font-ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-ovo'
      >
        ABOUT ME
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-montserrat'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full font-ovo"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-2 border-gray-400 dark:border-gray-500 rounded-2xl p-8 cursor-pointer 
                           hover:bg-[#FFF8E7] dark:hover:bg-gray-900 hover:-translate-y-1 duration-500 
                           shadow-lg hover:shadow-2xl dark:hover:shadow-white 
                           bg-[#FFFFF0] dark:bg-gray-700 font-ovo w-full min-h-[250px]"
              >
                <Image 
                  src={isDarkMode ? iconDark : icon} 
                  alt={title} 
                  className="w-10 mt-3 dark:bg-gray-700" 
                />
                
                <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>

                <p className="text-gray-600 text-md dark:text-gray-300">
                  {description.map((line, i) => (
                    <span key={i} className="block text-black dark:text-white">
                      {["Computer Programming:", "GPA:", "Full-Stack Web Developer", "Freelance Web Developer"].includes(line) ? (
                        <strong>{line}</strong>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
