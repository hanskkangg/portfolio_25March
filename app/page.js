"use client"; // ✅ Add this at the top

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
  const [bgTransition, setBgTransition] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Dark Mode Settings
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  // Background Transition
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setBgTransition(true);
    }, 1000);
  }, []);

  return (
   
    <div className="bg-scroll-gradient min-h-screen " >
        <CursorEffect />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div id="about"></div>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Resume isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      {/* <Contact isDarkMode={isDarkMode} /> */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
