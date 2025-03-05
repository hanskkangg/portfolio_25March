import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "@fontsource/noto-sans"; // Defaults to weight 400
import "@fontsource/noto-sans/700.css"; // Bold
import "@fontsource/noto-sans/100.css"; // Thin 100
import "@fontsource/noto-sans/200.css"; // ExtraLight 200
import "@fontsource/noto-sans/300.css"; // Light 300
import "@fontsource/noto-sans/400.css"; // Regular 400

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.pageYOffset;

            // Check when to fix navbar at the top
            setIsScrolled(scrollPosition > 100);

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
            {/* Name on Top Left Corner */}
            <div className="absolute top-7 left-[110px] text-7xl font-bold text-gray-900 dark:text-white">
                Hans <span className="stroke-text">Kang</span>
            </div>

            {/* Sticky & Scrolling Navbar */}
            <nav className={`navbar w-[310px] h-[330px] border-r dark:border-gray-700 
                            bg-black dark:bg-gray-900 transition-all duration-300 z-[100] rounded-xl
                            fixed left-[110px] ${isScrolled ? 'top-[20px]' : 'top-[130px]'} font-noto font-normal`}>
                <div className="flex flex-col items-center py-6 px-4">

                    {/* Navigation Menu */}
                    <ul className="flex flex-col gap-1 w-full">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                            <li key={section} className="w-full">
                                <a
                                    href={`#${section}`}
                                    className={`block w-full text-left ml-5 py-3 rounded-lg transition-colors 
                                    text-gray-100 hover:text-white 
                                    ${activeSection === section ? 'text-white font-bold' : ''}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
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
