import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "@fontsource/poppins"; // Modern Sans-serif
import "@fontsource/montserrat"; // Clean Look
import "@fontsource/inter"; // Clean Look

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'resume', 'projects', 'contact'];
            const scrollPosition = window.pageYOffset;

            // Fix navbar when scrolling
            setIsScrolled(scrollPosition > 100);

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition < 50) {
                        setActiveSection('about');
                    } else if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Name on Top Left Corner */}
            <div className="absolute top-7 left-[110px] text-7xl font-bold text-gray-900 dark:text-white font-ovo">

                Hans <span className="stroke-text">Kang</span>
            </div>
            
            {/* Sticky & Scrolling Navbar */}

            
<nav className={`navbar w-[310px] h-[280px] border-r dark:border-gray-700 
                bg-black dark:bg-gray-900 transition-all duration-300 z-[100] rounded-xl
                fixed left-[110px] ${isScrolled ? 'top-[20px]' : 'top-[130px]'}
                font-inter font-normal text-[14px] tracking-wider`}>


    <div className="flex flex-col items-center py-6 px-8">

    <ul className="flex flex-col  w-full relative">
        {['about me', 'skills', 'resume', 'projects', 'contact'].map((section) => (
            <li key={section} className="w-full flex items-center justify-start relative"> 
                {/* Menu Link */}
                <a
                    href={`#${section.replace(" ", "-")}`} 
                    className={`block w-full text-left ml-2 py-2 rounded-lg transition-colors 
                    text-gray-300 hover:text-white tracking-wider
                    ${activeSection === section ? 'text-white font-semibold' : ''}`}
                >
                    {section.toUpperCase()}
                </a>

                {/* Dot Indicator Positioned Outside Navbar */}
                <span className={`absolute left-[250px] w-1 h-1 rounded-full flex items-center justify-center
                    ${activeSection === section 
                        ? 'border-2 border-dashed border-white animate-spin-slow' // Spinning Dashed Border for Active Section
                        : 'bg-white'} // Solid Dot for Inactive Sections
                `}></span>
            </li>
        ))}
    </ul>
                    {/* Spotify Playlist Embed */}
                    <div className="mt-10 flex justify-center">
                        <iframe 
                            className="rounded-xl w-[310px] h-[352px]"  
                            src="https://open.spotify.com/embed/playlist/4NRH8GgGeAhKbeyi6qrOLk?utm_source=generator&theme=0" 
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </nav>

            {/* Main Content Wrapper - Pushes Content Right */}
            <div className="ml-[500px]">
                {/* Your Page Content Goes Here */}
            </div>
        </>
    );
};

export default Navbar;
