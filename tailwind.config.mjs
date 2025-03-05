import { Poppins } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Lora: ["Lora", "serif"],
        noto: ["Noto Sans", "sans-serif"],
        arvo: ['Arvo', 'serif'],
        playfair: ["Playfair Display", "serif"],
        garamond: ["Cormorant Garamond", "serif"],
        merriweather: ["Merriweather", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        dmserif: ["DM Serif Display", "serif"],
        garamond: ["EB Garamond", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        thin: "100", // ✅ Thin weight
        extralight: "200",
        light: "300",
        normal: "400",
        bold: "700",
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
