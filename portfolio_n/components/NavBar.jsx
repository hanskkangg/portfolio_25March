import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 });
    const sideMenuRef = useRef();

    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    },[])

    // Function to show animation where the user clicks
    const handleNavClick = (event) => {
        event.preventDefault(); // Prevent default jump

        const x = event.clientX;
        const y = event.clientY;

        setEffectPosition({ x, y });
        setShowEffect(true);

        setTimeout(() => setShowEffect(false), 800); // Hide effect after animation

        // Smooth scrolling to section
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            {/* Water Brush Effect Image */}
            <AnimatePresence>
                {showEffect && (
                   <motion.div
                   initial={{ opacity: 0, scale: 0.2 }}
                   animate={{ opacity: 1, scale: 0.5 }}
                   exit={{ opacity: 0, scale: 1.1 }}
                   transition={{ duration: 0.6, ease: 'easeOut' }}
                   style={{
                       position: 'fixed',
                       top: `${effectPosition.y - 70}px`, // Move upwards
                       left: `${effectPosition.x - 80}px`, // Move towards the left
                       transform: 'translate(-50%, -50%)',
                       zIndex: 1000, // Ensure it's above other elements
                   }}
                   className="pointer-events-none"
               >
                        <Image src={assets.circle_s} alt="Brush Effect" className="w-40 opacity-70" />
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-800 dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.hans_logo1 : assets.hans_logo2} alt='' className='w-28 cursor-pointer mr-14'/>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a href="#top" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#about" onClick={handleNavClick}>About me</a></li>
                    <li><a href="#services" onClick={handleNavClick}>Service</a></li>
                    <li><a href="#work" onClick={handleNavClick}>Work</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact 
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a onClick={handleNavClick} href="#top">Home</a></li>
                    <li><a onClick={handleNavClick} href="#about">About me</a></li>
                    <li><a onClick={handleNavClick} href="#services">Services</a></li>
                    <li><a onClick={handleNavClick} href="#work">My Work</a></li>
                    <li><a onClick={handleNavClick} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
