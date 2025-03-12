import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaStripe, FaPaypal, FaCloud } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiVercel, SiNextdotjs, SiFirebase } from "react-icons/si";

const projects = [
  {
    title: "Delivery Sushi",
    description: "Maintaining and enhancing a food business locator and Implemented menu updates, price adjustments, tax changes (HST), and promotional banners.",
    image: "/del.gif",
    contributions: ["Added new menu items", "Updated HST pricing", "Enhanced performance stability"],
    techStack: [FaPhp, FaDatabase, SiMysql, SiTailwindcss, SiFirebase],
    link: "https://www.ottawadeliverysushi.com",
  },
  {
    title: "Baeyond Nails",
    description: "Built a full-stack e-commerce web app using the MERV stack with a REST API for CRUD operations. Integrated Stripe, PayPal, and e-Transfer for secure payments.",
    image: "/bae.gif",
    contributions: ["Implemented secure transactions", "Built admin panel for order tracking", "Optimized for mobile devices"],
    techStack: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss, FaStripe, FaPaypal],
    link: "https://baeyondfrontend.vercel.app/",
  },
  {
    title: "OnPapier",
    description: "Built a full-stack e-commerce web app using the MERV stack with a REST API for CRUD operations. Integrated Stripe, PayPal, and e-Transfer for secure payments.",
    image: "/On1.png",
    contributions: ["Added new menu items", "Updated HST pricing", "Enhanced performance stability"],
    techStack: [FaPhp, FaDatabase, SiMysql, SiTailwindcss, SiFirebase],
    link: "https://www.onpapier.com/",
  },
  {
    title: "Personal Blog",
    description: "Developed a personal blog platform with role-based access control (RBAC), allowing admins to create and manage posts, while users can read and comment.",
    image: "/blog.gif",
    contributions: ["Implemented RBAC system", "Enhanced UI/UX design", "Deployed on Render with monitoring"],
    techStack: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
    link: "https://personal-blog-lboi.onrender.com",
  },
  {
    title: "Personal Portfolio",
    description: "Developed my personal portfolio website using Next.js, React, and Tailwind CSS, featuring animations, dark mode, and CI/CD deployment.",
    image: "/pro.gif",
    contributions: [
      <>
        Latest Portfolio:{" "}
        <a href="https://hanskang.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          hanskang.com
        </a>
      </>,
      <>
        Second Portfolio:{" "}
        <a href="https://hanskkangport.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          hanskkangport.netlify.app
        </a>
      </>,
      <>
        First Portfolio:{" "}
        <a href="https://hanskang.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        hanskang.netlify.app


        </a>
      </>
    ],
    techStack: [FaReact, SiNextdotjs, SiTailwindcss, SiVercel],
    link: "https:hanskang.com",
  }
  
,  
  {
    title: "CCNA Blog",
    description: "Developed a CCNA study guide web app hosted on Azure Web App, dynamically fetching and displaying study materials from MongoDB JSON files.",
    image: "/CCNA.gif",
    contributions: ["Implemented dynamic data fetching", "Added CI/CD automation", "Deployed on Azure Web App"],
    techStack: [FaReact, FaCloud, SiMongodb, SiTailwindcss],
    link: "https://hansdevhub-cxa3cba5hmhdhyb0.canadacentral-01.azurewebsites.net/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };


  const techNames = {
    FaReact: "React",
    FaNodeJs: "Node.js",
    FaPhp: "PHP",
    FaDatabase: "Database",
    FaStripe: "Stripe",
    FaPaypal: "PayPal",
    FaCloud: "Cloud",
    SiMongodb: "MongoDB",
    SiMysql: "MySQL",
    SiExpress: "Express.js",
    SiTailwindcss: "Tailwind CSS",
    SiVercel: "Vercel",
    SiNextdotjs: "Next.js",
    SiFirebase: "Firebase",
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="projects"
    className=" w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] 
        max-w-[1000px]
        min-h-[400px] sm:min-h-[500px] relative mx-auto 
        mt-10 p-6 sm:p-8 md:p-12 text-center bg-white dark:bg-gray-900 
        dark:border-gray-700 shadow-lg rounded-xl flex flex-col items-center gap-6 sm:gap-8
        
        
        /* Matching Header's right & bottom shift */
        lg:translate-x-8 lg:translate-y-6
        xl:translate-x-48 xl:translate-y-2


        xl:flex xl:flex-col xl:items-left xl:justify-left overflow-hidden"
  >
    
<p className="mt-2 stroke-text_m text-xs md:text-xs xl:text-6xl text-gray-700 dark:text-gray-300 ont-ovo xl:absolute xl:top-[54px] xl:left-[7%]">
          PORTFOLIO
        </p>
      
        <p className="hidden xl:block text-sm md:text-lg xl:text-xs xl:font-bold font-bold font-ovo  stroke-text_m  text-gray-700 dark:text-gray-300 mt-3 font-ovo xl:absolute xl:top-[90px] xl:left-[7%]">
          // PORTFOLIO
        </p>

     {/* Navigation Buttons */}
<button
  onClick={prevSlide}
  className="absolute left-4 -translate-y-1/2 transform text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md z-10
 top-[24%] xl:top-[41%] xl:ml-[10%] md:top-[30%]
 lg:top-[45%]" 
>
  ❮
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 -translate-y-1/2 transform text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md z-10
 top-[24%] xl:top-[41%] xl:mr-[10%] md:top-[30%]
 
 lg:top-[45%]" 
>
  ❯
</button>

            {/* Title & Subtitle */}
            <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        
    <h2 className="text-2xl font-bold md:text-5xl text-gray-700 dark:text-gray-300 mt-3 font-ovo xl:mt-[30%]">Projects Highlights</h2>
    <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-[2%] font-ovo xl:mt-[2%]">Showcasing my latest full-stack web applications</p>
    </motion.div>


    {/* Dots Navigation */}
    <div className="flex space-x-2 mt-4">
      {projects.map((_, index) => (
        <span key={index} className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-orange-300 scale-125' : 'bg-gray-400'}`} />
      ))}
    </div>
    
    <div className="relative w-full flex justify-center items-center mt-[-10]">
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0, scale: 0.95 }} 
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 
    bg-white dark:bg-gray-800 p-8 xl:p-12 rounded-2xl
    w-[110%] sm:w-[120%] md:w-[130%] lg:w-[140%] xl:w-[150%] max-w-none 
    h-[800px] sm:h-[750px] md:h-[800px] xl:h-[500px] 
    -mx-10 sm:-mx-12 md:-mx-16 lg:-mx-20 xl:-mx-24 
    
    lg:h-[550px]"

    
  >

       
  <div className="w-full xl:w-[140%] xl:h-[540px] lg:w-[140%] lg:h-[300px] flex justify-center mt-[18%] xl:mt-0 md:mt-[15%]">
  <Image 
    src={projects[currentIndex].image} 
    alt={projects[currentIndex].title} 
    width={700} 
    height={800} 
    className="rounded-lg xl:w-[90%] xl:h-[500px] max-h-[800px] object-contain xl:ml-[-10%] xl:mt-[9%] md:-[9%]
    lg:w-[90%] lg:h-[500px] lg:ml-[-10%] lg:mt-[-30%] md:-[9%] "
  />
</div>
<div className="w-full lg:w-full text-left relative ">
  {/* Title - Centered at the Top */}
  <h3 className="absolute text-2xl font-bold mt-[-110%] left-1/2 -translate-x-1/2 
                 font-poppins xl:text-5xl text-gray-600 dark:text-white 
                 text-center whitespace-nowrap max-w-[100%] xl:max-w-[600px] 
                 overflow-hidden text-ellipsis mb-6 xl:mt-[-10%] xl:ml-[-80%] xl:top-[-10] md:top-[80%] 
                 md:text-6xl
                 lg:top-[65%] lg:ml-[-80%] lg:text-2xl">
    {projects[currentIndex].title}
</h3>



            <p className="font-montserrat text-gray-600 dark:text-gray-300 mt-2 xl:ml-[-25%] xl:mt-[30%] lg:mt-[60%]
            ">{projects[currentIndex].description}</p>
            <ul className="font-montserrat mt-4 text-gray-900 dark:text-gray-300 text-sm xl:ml-[-25%] xl:mb-5">
              {projects[currentIndex].contributions.map((item, i) => (
                <li key={i} className="list-disc ml-4 xl:mt-2">{item}</li>
              ))}
            </ul>

            
<div className="flex flex-wrap gap-4 mt-4 xl:ml-[-23%]">
  {projects[currentIndex].techStack.map((Icon, i) => (
    <div key={i} className="relative group flex flex-col items-center">
      <div className="text-2xl text-gray-700 dark:text-gray-300 xl:mb-1">{<Icon />}</div>

      {/* Tooltip with manual name */}
      <span className="absolute bottom-[-30px] hidden group-hover:block bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-xl">
        {techNames[Icon.name] || "Unknown"}
      </span>
    </div>
  ))}
</div>
              <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer" className="border border-dashed border-gray-800 rounded-full px-6 py-1 inline-block mt-4 
             text-gray-600 dark:text-blue-400 hover:text-white 
             hover:bg-black transition-all duration-300 ease-in-out xl:ml-[-25%] ml-[-1%] md:ml-[38%] ">View Live</a>
            </div>
          </motion.div>
        
      </div>
    </motion.div>
  );
};

export default Projects;
