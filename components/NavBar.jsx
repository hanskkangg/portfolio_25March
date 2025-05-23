import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import "@fontsource/inter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);


  
  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  useEffect(() => {
      const handleScroll = () => {
        const sections = ["about", "skills", "resume", "projects", "blog","contact"];
        const scrollPosition = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;


        

      // Navbar Visibility Logic
      setIsScrolled(scrollPosition > 100);
      setIsNavbarVisible(scrollPosition < prevScrollPos || scrollPosition < 50);
      setPrevScrollPos(scrollPosition);

      // Footer Visibility Logic
      const isAtBottom = scrollPosition + viewportHeight >= documentHeight - 50;
      setIsFooterVisible(isAtBottom);

      
      // Desktop Navbar: Hide on Scroll Down, Show on Scroll Up
      if (window.innerWidth >= 1025) { 
        setIsNavbarVisible(scrollPosition < prevScrollPos || scrollPosition < 50);
      } else {
        setIsNavbarVisible(true); 
      }

      setPrevScrollPos(scrollPosition);
      
      // Highlight active section
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition < 50) {
            setActiveSection("about");
          } else if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>    
      {/* Name (Visible on All Screens) */}
      <div className="text-black dark:text-gray-300 text-5xl lg:text-7xl md:text-7xl md:ml-% lg:mt-1 font-bold font-ovo tracking-wide mt-[2%] ml-7 lg:fixed lg:top-10 lg:left-[110px] xl:mt-1 xl:ml-1 md:ml-10 xl:text-8xl lg:ml-[10%]">
        Hans <span className="stroke-text dark:text-[#EFB920]">Kang</span>
        <span className="stroke-text text-8xl ml-1 dark:text-[#EFB920]">.</span>
      </div>

      {/* Footer */}
      <footer
        className={`fixed bottom-0 left-0 w-full bg-gray-800  dark:bg-[#272626]  text-white text-center p-1 transition-transform duration-300 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        © {new Date().getFullYear()} Hans Kang. All Rights Reserved.
      </footer>
      
      {/* Unified Navigation Bar (Mobile & Desktop) */}
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex gap-1 z-50 transition-opacity duration-300 text-xs  xl:hidden 
        ${isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"} lg:w-auto lg:p-4`}
      >
        {["about", "skills", "resume", "projects", "blog", "contact"].map((section) => (
          <div key={section} className="relative flex items-center stroke-text_m">
            {/* Spinning Dot */}
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 mr-1 ${
                activeSection === section
                  ? "border-2 border-dashed border-yellow-300 animate-spin-slow"
                  : "w-2 h-2 opacity-70"
              }`}
            ></span>


            {/* Navigation Links */}
            <a
              href={`#${section}`}
              className={`text-gray-100 dark:text-white hover:text-blue-500 transition-colors stroke-text_m
              ${activeSection === section ? "text-white" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
            
          </div>
        ))}
      </div>

      {/* Spotify Player (Mobile) */}
      <div className="relative w-full flex justify-center mt-2 z-[100] pointer-events-none xl:hidden lg:mt-[15%] lg:w-[70%] lg:ml-[15%]">
        <iframe
          id="spotify-embed"
          className="relative rounded-lg w-[90%] h-[80px] z-[200] pointer-events-auto"
          src="https://open.spotify.com/embed/playlist/4NRH8GgGeAhKbeyi6qrOLk?utm_source=generator&theme=0"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Icons (Mobile)  */}
      <nav className="xl:hidden w-[100%] mx-auto mt-2 flex justify-center items-center gap-4 lg:hidden
      ">

        {[
          { icon: <FaGithub />, url: "https://github.com/hanskkangg" },
          { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hanskkang" },
          { icon: <FaInstagram />, url: "https://www.instagram.com/kkanghhanss" },
          { icon: <FaFacebook />, url: "https://www.facebook.com/hans.kkang" },
        ].map(({ icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <div className="w-6 h-6 text-gray-800 hover:text-blue-500 transition-colors
            dark:text-gray-300">
              {icon}
            </div>
          </a>
        ))}
        

        {/*Dark Mode Toggle Button*/}
        <button
          onClick={toggleDarkMode}
          className="w-4 h-4 flex items-center justify-center rounded-full text-gray-800 hover:text-yellow-400 transition-colors ml-[-2] mt-[-2%] md:mt-[-1%] dark:text-gray-300"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>

      {/*Desktop Sidebar Navigation */}
      <nav
        className={`hidden lg:hidden xl:block navbar w-[310px] h-[270px] bg-black dark:bg-[#272626] transition-all duration-300 z-[100] rounded-xl 
        fixed left-[110px] ${isScrolled ? "top-[35px]" : "top-[160px]"} font-inter font-normal text-[14px]`}
      >
        
        <div className="flex flex-col items-center py-6 px-8">
          <ul className="flex flex-col w-full relative font-inter text-[14px] ">
            {["about", "skills", "resume", "projects","blog" ,"contact"].map((section) => (
              <li key={section} className="w-full flex items-center justify-start relative">
                {/* Navigation Link */}
                <a
                  href={`#${section}`}
                  className={`block w-full text-left ml-2 py-2 rounded-lg transition-colors text-gray-500 hover:text-white tracking-wider 
                  ${activeSection === section ? "text-white dark:text-[#EFB920]" : ""}`}
                >
                  {section.toUpperCase()}
                </a>

                {/* Dot Indicator */}
                <span
                  className={`absolute left-[220px] flex items-center justify-center transition-all duration-300 ${
                    activeSection === section
                      ? "left-[230px] w-6 h-6 border-2 border-dashed border-yellow-300 animate-spin-slow"
                      : "left-[240px] w-1 h-1 bg-white opacity-70"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Spotify Playlist Embed (Desktop) */}
          <div className="mt-10 flex justify-center">
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
