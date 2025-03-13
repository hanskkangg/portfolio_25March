"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Skills from "@/components/Skills";
import Services from "@/components/Resume";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect"; // Import
import Resume from "@/components/Resume";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Dark Mode Settings on Load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
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

  return (
    <div className="bg-scroll-gradient min-h-screen bg-custom dark:bg-[#2d6a4f]">
      <CursorEffect />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div id="about"></div>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Resume isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
