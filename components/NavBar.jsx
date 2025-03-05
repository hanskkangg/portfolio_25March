import React, { useEffect, useState } from 'react';
import "@fontsource/poppins"; 
import "@fontsource/montserrat"; 
import "@fontsource/inter"; 

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'resume', 'projects', 'contact'];
            const scrollPosition = window.pageYOffset;

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
            <div 
                style={{ backgroundColor: "#E5B9A3" }} className="absolute top-7 left-[110px] text-7xl font-bold text-gray-900 font-ovo">
                Hans <span className="stroke-text">Kang</span><span className="stroke-text absolute -top-8 left-[350px] text-9xl font-bold text-gray-900 font-ovo"
                style={{ backgroundColor: "#E5B9A3" }}>.</span>
            </div>
            
            {/* Sticky Navbar */}
            <nav className={`navbar w-[310px] h-[280px] border-r border-gray-300  
                bg-white transition-all duration-300 z-[100] rounded-xl
                fixed left-[110px] ${isScrolled ? 'top-[20px]' : 'top-[130px]'}
                font-inter font-normal text-[14px] tracking-wider shadow-lg`}>

                <div className="flex flex-col items-center py-6 px-8">
                    <ul className="flex flex-col w-full relative font-inter text-[14px]">

                        {['about', 'skills', 'resume', 'projects', 'contact'].map((section) => (
                            <li key={section} className="w-full flex items-center justify-start relative"> 
                                {/* Menu Link */}
                                <a
                                    href={`#${section}`}
                                    className={`block w-full text-left ml-2 py-2 rounded-lg transition-colors 
                                    text-gray-700 hover:text-gray-900 tracking-wider
                                    ${activeSection === section ? 'text-gray-900 font-bold' : ''}`}
                                >
                                    {section.toUpperCase()}
                                </a>

                                {/* Dot Indicator */}
                                <span className={`absolute left-[220px] flex items-center justify-center
                                    transition-all duration-300
                                    ${activeSection === section 
                                        ? 'left-[230px] w-6 h-6 border-2 border-dashed border-gray-700 animate-spin-slow'  // Active: Spins & Bigger
                                        : 'left-[240px] w-1 h-1 bg-gray-700 opacity-70'} // Inactive: Small & Static
                                `}></span>
                            </li>
                        ))}
                    </ul>

                    {/* Spotify Playlist Embed */}
                    <div className="mt-10 flex justify-center">
                        <iframe
                            id="spotify-embed"
                            className="rounded-xl w-[310px] h-[352px] shadow-md"
                            src="https://open.spotify.com/embed/playlist/4NRH8GgGeAhKbeyi6qrOLk?utm_source=generator&theme=0"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe> 
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
