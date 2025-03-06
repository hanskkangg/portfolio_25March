import React, { useEffect, useState } from 'react';
import "@fontsource/poppins"; 
import "@fontsource/montserrat"; 
import "@fontsource/inter"; 
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const [showNav, setShowNav] = useState(true);

        const [showIcons, setShowIcons] = useState(true);


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

            // Navbar Hide/Show on Scroll
            setIsNavbarVisible(scrollPosition < prevScrollPos || scrollPosition < 50);
            setPrevScrollPos(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);


    
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(currentScrollPos < prevScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


    return (
        <>{/* === Hans Kang Name (Visible on All Screen Sizes) === */}
        <div className="text-black text-6xl lg:text-8xl font-bold font-ovo tracking-wide text-left mt-5 ml-8 lg:mt-0 lg:ml-0 lg:fixed lg:top-10 lg:left-[110px] ">
            Hans <span className="stroke-text">Kang</span>  <span className="stroke-text text-8xl -ml-3">.</span>
        </div>
        
        {/* Mobile Navigation Links */}
<div
    className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-50 lg:hidden transition-opacity duration-300 text-xs
    ${showNav ? "opacity-100" : "opacity-0 pointer-events-none"} text-center`}
>
    {['about', 'skills', 'resume', 'projects', 'contact'].map((section) => (
        <div key={section} className="relative flex items-center">
            {/* Spinning Dot */}
            <span className={`w-3 h-3 rounded-full transition-all duration-300 mr-1
                ${activeSection === section 
                    ? 'border-2 border-dashed border-yellow-300 animate-spin-slow'  
                    : 'w-2 h-2 opacity-70'}
            `}></span>

            {/* Text */}
            <a href={`#${section}`}
                className={`text-gray-100 dark:text-white hover:text-blue-500 transition-colors stroke-text_m
                ${activeSection === section ? 'text-white' : ''}`} // Active text turns white
            >
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
        </div>
    ))}
</div>



                {/* Spotify Player (Small Screens) */}
                <div className="relative w-full flex justify-center mt-2 z-[100] pointer-events-none lg:hidden">
                    <iframe
                        id="spotify-embed"
                        className="relative rounded-lg w-[90%] h-[80px] z-[200] pointer-events-auto"
                        src="https://open.spotify.com/embed/playlist/4NRH8GgGeAhKbeyi6qrOLk?utm_source=generator&theme=0"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
                
            <nav className="lg:hidden w-[90%] mx-auto mt-2  rounded-lg px-4 py-2 flex justify-center gap-8 bg-">
    <a href="https://github.com/hanskkangg" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
    </a>
    <a href="https://www.linkedin.com/in/hanskkangg" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
    </a>
    <a href="https://www.instagram.com/hanskkangg" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6 text-gray-800 dark:text-white hover:text-pink-500 transition-colors" />
    </a>
    <a href="https://www.facebook.com/hanskkangg" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
    </a>
</nav>

            {/* === Desktop Sidebar Navigation (lg: Large Screens) === */}
            <nav className={`hidden lg:block navbar w-[310px] h-[270px] border-r dark:border-gray-700 
                bg-black dark:bg-gray-900 transition-all duration-300 z-[100] rounded-xl
                fixed left-[110px] ${isScrolled ? 'top-[50px]' : 'top-[150px]'}
                font-inter font-normal text-[14px] tracking-wider`}>



                <div className="flex flex-col items-center py-6 px-8">
                    <ul className="flex flex-col w-full relative font-inter text-[14px]">
                        {['about', 'skills', 'resume', 'projects', 'contact'].map((section) => (
                            <li key={section} className="w-full flex items-center justify-start relative"> 
                                {/* Menu Link */}
                                <a
                                    href={`#${section}`}
                                    className={`block w-full text-left ml-2 py-2 rounded-lg transition-colors 
                                    text-gray-500 hover:text-white tracking-wider
                                    ${activeSection === section ? 'text-white' : ''}`}
                                >
                                    {section.toUpperCase()}
                                </a>

                                {/* Dot Indicator */}
                                <span className={`absolute left-[220px] flex items-center justify-center
                                    transition-all duration-300
                                    ${activeSection === section 
                                        ? 'left-[230px] w-6 h-6 border-2 border-dashed border-yellow-300 animate-spin-slow'  
                                        : 'left-[240px] w-1 h-1 bg-white opacity-70'} 
                                `}></span>
                            </li>
                        ))}
                    </ul>

                    {/* Spotify Playlist Embed (Desktop) */}
                    <div className="mt-20 flex justify-center">
                        <iframe
                            id="spotify-embed"
                            className="rounded-xl w-[310px] h-[380px]"
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
