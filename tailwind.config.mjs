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
      },
      screens: {
        xs: "320px", // Extra small (older iPhones, small Androids)
        sm1: "375px", // iPhone SE, 12 Mini, 13 Mini
        sm2: "390px", // iPhone 12, 13, 14, 15 (Regular)
        sm3: "414px", // iPhone XR, iPhone 11, 14 Pro, 15 Pro
        sm4: "430px", // iPhone 14 Pro Max, 15 Pro Max
        sm5: "360px", // iPhone 14 Pro Max, 15 Pro Max
        sm6: "412px", // iPhone 14 Pro Max, 15 Pro Max
        sm6: "540px", // iPhone 14 Pro Max, 15 Pro Max
        sm7: "344px", // iPhone 14 Pro Max, 15 Pro Max

        md1: "600px", // Small tablets (Kindle Fire, Nexus 7)
        md2: "768px", // iPad Mini, iPad Air
        md3: "820px", // iPad Pro 11" (Portrait)
        md4: "912px", // Microsoft Surface Duo (Folded)
        md5: "853px", // Microsoft Surface Duo (Folded)
        
        lg: "1024px", // Laptops
        lg1: "1280px", // Large desktops
        "2xl": "1536px", // 4K screens
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
