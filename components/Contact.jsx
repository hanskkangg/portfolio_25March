import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Enter your web3 froms access key below
    formData.append("access_key", "48a7f388-7dca-4583-a57e-b2192b479294");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div
    initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
    id='contact' className=' w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] 
        max-w-[1000px]  
        min-h-[400px] sm:min-h-[500px] relative mx-auto 
        mt-10 p-6 sm:p-8 md:p-12 text-center bg-white dark:bg-gray-900 
        dark:border-gray-700 shadow-lg rounded-xl flex flex-col items-center gap-6 sm:gap-8
        
        
        lg:translate-x-8 lg:translate-y-6
        xl:translate-x-48 xl:translate-y-2


        xl:flex xl:flex-col xl:items-left xl:justify-left'>
          
<p className="mt-2 stroke-text_m text-xs md:text-xs xl:text-6xl text-gray-700 dark:text-gray-300 ont-ovo xl:absolute xl:top-[54px] xl:left-[7%]">
         CONTACT
        </p>


      <motion.h4 
      initial={{ y: -20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center font-bold mb-2 text-sm font-ovo text-gray-900 xl:block hidden  xl:ml-[-82%] xl:mt-[5%]'>
      // Connect with me</motion.h4>
      
      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='font-ovo text-center xl:text-5xl font-bold text-2xl'>
      Get in touch</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='font-ovo xl:text-md text-gray-500 text-center max-w-2xl mx-auto mt-[-5%] mb-12 xl:mt-[-3%]'>
      I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
       <div className='flex flex-col gap-6 mb-8 items-center mt-[-20%] xl:mt-[5%]'>
  <motion.input
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.6 }}
    type="text" placeholder='Enter your name' required
    className='w-full xl:w-[800px] p-3 xl:p-5 outline-none border-[0.5px] border-gray-400 
               rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90
               text-base xl:text-lg xl:mt-[-10%]' name='name'
  />
           
  <motion.input
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    type="email" placeholder='Enter your email' required
    className='w-full xl:w-[800px] p-3 xl:p-5 outline-none border-[0.5px] border-gray-400 
               rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90
               text-base xl:text-lg' name='email'
  />
</div>
<motion.textarea 
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.3, duration: 0.6 }}
  rows='6' placeholder='Enter your message' required
  className='w-full xl:w-[800px] p-4 xl:p-6 outline-none border-[0.5px] border-gray-400 
             rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90
             text-base xl:text-lg xl:ml-[-10%]' name='message'
></motion.textarea>

        <motion.button
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
