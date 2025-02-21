import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Kolker_Brush, Protest_Revolution } from "next/font/google"; // Import Fonts

const kolkerBrush = Kolker_Brush({ weight: "400", subsets: ["latin"] });
const protestRevolution = Protest_Revolution({ weight: "400", subsets: ["latin"] });

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState('home');
    const sideMenuRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);



    useEffect(() => {


        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition < 50) {
                        setActiveSection('home');
                    } else if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavClick = (event) => {
        event.preventDefault();
    
        const x = event.clientX;
        const y = event.clientY;
    
        setEffectPosition({ x, y });
        setShowEffect(true);
    
        setTimeout(() => setShowEffect(false), 800);
    
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
            // Smooth scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth",
            });
    
            // Close the mobile menu if open
            if (window.innerWidth < 768) { // Check if the screen size is small
                closeMenu();
            }
    
            // Handle active section update
            const onScroll = () => {
                const sectionTop = targetSection.getBoundingClientRect().top;
                const offset = 70;
                if (sectionTop <= offset && sectionTop >= -offset) {
                    setActiveSection(targetId);
                    window.removeEventListener("scroll", onScroll);
                }
            };
    
            window.addEventListener("scroll", onScroll);
        }
    };
    
    

    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
           <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
{/* 
          Water Brush Effect Image
<AnimatePresence>
    {showEffect && (
        <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 0.5 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: `${effectPosition.y - 60}px`,
                left: `${effectPosition.x - 63}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
            }}
            className="pointer-events-none"
        >
            <Image 
                src={isDarkMode ? assets.circle_s_white : assets.circle_s}  
                alt="Brush Effect" 
                className="w-32 opacity-70"
            />
        </motion.div>
    )}
</AnimatePresence> */}


            <nav className={`fixed top-0 left-0 right-0 border-[1px] border-black bg-white shadow-md rounded-none 
    dark:bg-gray-800 dark:border-white dark:shadow-white/20 transition-colors duration-300 z-[100]
    ${isScroll ? "bg-opacity-50 backdrop-blur-lg dark:bg-opacity-50" : ""}`}>
    
    <div className="max-w-screen-lg mx-auto flex items-center justify-between px-8 lg:px-0 py-3">
        {/* Logo - Moved Slightly to the Left */}
        <a href="#home">
            <Image src={isDarkMode ? assets.hans_logo1 : assets.hans_logo2} 
                alt='' className='w- cursor-pointer w-40' />
        </a>

                    <ul className="hidden md:flex items-center gap-8 font-ovo text-lg text-gray-800 dark:text-white">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
    <li key={section} className="relative">
        <a
            href={`#${section}`}
            onClick={handleNavClick}
            className="px-2 py-1 relative hover:text-blue-500 transition-colors"
        >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            
            {activeSection === section && (
                <span
                    className={`absolute left-0 bottom-[-1px] w-full h-[2px] transition-all duration-300 
                    ${isDarkMode ? 'bg-gray-200' : 'bg-black'}`}
                ></span>
            )}
        </a>
    </li>
))}


                    </ul>

        {/* Right-Aligned Icons */}
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
    {/* Dark Mode Toggle */}
    <button onClick={() => setIsDarkMode(prev => !prev)} className="z-[110]">
        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
    </button>

          {/* Menu Button - Visible Only on Small Screens */}
    <button className='block md:hidden z-[110]' onClick={openMenu}>
        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-7' />
    </button>

            {/* Contact Button - Visible Only on Large Screens */}
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-5 py-2 border border-gray-400 dark:border-white rounded-md'>
                Contact 
                <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
            </a>
        </div>
    </div>

    {/* Mobile Menu - Lower Z-Index */}
    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-16 px-8 fixed top-0 right-0 w-60 z-[90] h-screen bg-rose-50 dark:bg-gray-900 dark:text-white transition-transform duration-500 transform translate-x-full border-l border-gray-300 dark:border-white/20'>
        <div className='absolute right-5 top-5' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
        </div>

        <li><a onClick={handleNavClick} href="#home">Home</a></li>
        <li><a onClick={handleNavClick} href="#about">About me</a></li>
        <li><a onClick={handleNavClick} href="#skills">Skills</a></li>
        <li><a onClick={handleNavClick} href="#projects">My Project</a></li>
        <li><a onClick={handleNavClick} href="#contact">Contact me</a></li>
    </ul>
</nav>


        </>
    );
};

export default Navbar;
