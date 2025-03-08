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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "resume", "projects", "contact"];
      const scrollPosition = window.pageYOffset;

      // Toggle Navbar visibility on scroll
      setIsScrolled(scrollPosition > 100);
      setIsNavbarVisible(scrollPosition < prevScrollPos || scrollPosition < 50);
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
      {/* === Name (Visible on All Screens) === */}
      <div className="text-black text-6xl lg:text-8xl font-bold font-ovo tracking-wide mt-5 ml-8  lg:fixed lg:top-10 lg:left-[110px] xl:mt-1 xl:ml-1 ">
        Hans <span className="stroke-text">Kang</span>
        <span className="stroke-text text-8xl ml-1">.</span>
      </div>

      {/* === Mobile Navigation Links === */}
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-50 lg:hidden transition-opacity duration-300 text-xs 
        ${isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {["about", "skills", "resume", "projects", "contact"].map((section) => (
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

      {/* === Spotify Player (Mobile) === */}
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

      {/* === Social Icons (Mobile) === */}
      <nav className="lg:hidden w-[100%] mx-auto mt-2 flex justify-center gap-8">
        {[
          { icon: <FaGithub />, url: "https://github.com/hanskkangg" },
          { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hanskkangg" },
          { icon: <FaInstagram />, url: "https://www.instagram.com/hanskkangg" },
          { icon: <FaFacebook />, url: "https://www.facebook.com/hanskkangg" },
        ].map(({ icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <div className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 transition-colors">
              {icon}
            </div>
          </a>
        ))}
      </nav>

      {/* === Desktop Sidebar Navigation === */}
      <nav
        className={`hidden lg:block navbar w-[310px] h-[270px] bg-black dark:bg-gray-900 transition-all duration-300 z-[100] rounded-xl
        fixed left-[110px] ${isScrolled ? "top-[50px]" : "top-[160px]"} font-inter font-normal text-[14px]`}
      >
        <div className="flex flex-col items-center py-6 px-8">
          <ul className="flex flex-col w-full relative font-inter text-[14px]">
            {["about", "skills", "resume", "projects", "contact"].map((section) => (
              <li key={section} className="w-full flex items-center justify-start relative">
                {/* Navigation Link */}
                <a
                  href={`#${section}`}
                  className={`block w-full text-left ml-2 py-2 rounded-lg transition-colors text-gray-500 hover:text-white tracking-wider 
                  ${activeSection === section ? "text-white" : ""}`}
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
