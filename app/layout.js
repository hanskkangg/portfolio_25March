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
  title: "HansKang",
  description: "",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden w-full">
      <body className="flex flex-col items-center justify-center min-h-screen bg-custom dark:bg-[#272626]
      
      dark:text-white overflow-x-hidden">
        {/* Border Container with Proper Size */}
        <div className="w-full min-h-screen dark:border-white box-border">
          {children}
        </div>
      </body>
    </html>
  );
}
