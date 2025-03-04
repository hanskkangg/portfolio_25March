import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.pageYOffset;

            // Check when to fix navbar at the top
            setIsScrolled(scrollPosition > 100); // Change 100 to the point where you want it to start sticking

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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Sticky & Scrolling Navbar */}
            <nav className={`w-80 h-1/2 border-r border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-900 shadow-md transition-all duration-300 z-[100] rounded-xl
                             fixed left-[110px] ${isScrolled ? 'top-[10px]' : 'top-[130px]'}`}>
                <div className="flex flex-col items-center py-6 px-4">
                    
                    {/* Logo */}
                    <a href="#home">
                        <Image src={isDarkMode ? assets.hans_logo1 : assets.hans_logo2} 
                            alt="Logo" className='w-32 cursor-pointer mb-6' />
                    </a>

                    {/* Navigation Menu */}
                    <ul className="flex flex-col gap-1 w-full text-gray-800 dark:text-white">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                            <li key={section} className="w-full">
                                <a
                                    href={`#${section}`}
                                    className={`block w-full text-center py-3 rounded-lg transition-colors
                                               ${activeSection === section ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Spotify Playlist Embed */}
                    <div className="mt-2 w-full flex justify-center">
                        <iframe 
                            className="rounded-xl w-[100%] max-w-[500px] h-[352px]"  
                            src="https://open.spotify.com/embed/playlist/4NRH8GgGeAhKbeyi6qrOLk?utm_source=generator&theme=0" 
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>

                </div>
            </nav>

            {/* Main Content Wrapper - Pushes Content Right */}
            <div className="ml-[320px]">
                {/* Your Page Content Goes Here */}
            </div>
        </>
    );
};

export default Navbar;
