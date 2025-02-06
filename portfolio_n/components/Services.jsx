import { assets, skillData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-montserrat'>
       What I can offer</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-montserrat'>
      SKILLS</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-montserrat'>
        I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</motion.p>

        <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className='text-4xl text-center my-6 text-gray-700  dark:text-gray-50 font-ovo'>Tools</motion.h4>

<motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className='flex items-center justify-center gap-3 sm:gap-5 w-full'>
            {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#FFFFF0] dark:border-gray-600 rounded-lg cursor-pointer hover:bg-[#FFF8E7] dark:hover:bg-gray-900 hover:-translate-y-1 duration-500'
                 key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </motion.li>
            ))}
        </motion.ul>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-auto gap-6 my-10'>
            {skillData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index}
                className='border-2 border-gray-400 rounded-lg bg-[#FFFFF0] dark:bg-gray-700 px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-gray-800 dark:hover:shadow-white font-ovo'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white' >{title}</h3>
                    <p className='text-gray-600 text-md dark:text-white/80'>
                        {description.map((line, i) => (
                          <span key={i} className="block text-black dark:text-white font-ovo">
                            {line}
                          </span>
                        ))}
                    </p>
                  
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services
