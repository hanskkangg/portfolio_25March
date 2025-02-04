import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.hans_logo3 : assets.hans_logo2} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto font-montserrat'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 '/>
            Hans.kkang@gmail.com
        </div>
      </div>

    <div className='font-montserrat text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Hans Kang. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-montserrat'>
            <li><a target='_blank' href="https://github.com/hanskkangg">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/hanskkang/">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.instagram.com/kkanghhanss/">Instagram</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
