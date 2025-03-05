'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cover from "@/components/Cover";
import CursorEffect from "@/components/CursorEffect"; // Import

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Dark Mode Settings
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <div className="bg-custom min-h-screen"> 
    
    <CursorEffect /> {/* Add the effect here */}
      <div id="about"></div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <Cover/> */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
