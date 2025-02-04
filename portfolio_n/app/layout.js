import { Inter, Montserrat, Lora, Outfit, Ovo, Prata } from "next/font/google";
import "./globals.css";

// Set Inter as the global font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Additional fonts for styling
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio - GreatStack",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased leading-8 overflow-auto dark:bg-gray-800 dark:text-white`}>
        
        {/* Border Container with Proper Size */}
        <div className="min-h-screen relative mx-5 my-5 border-2 border-gray-900 dark:border-white  box-border">
          {children}
        </div>

      </body>
    </html>
  );
}
