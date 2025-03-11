import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
const algonquinLogo = "/algonquin_logo.png";
const self_logo = "/self_logo.png";

import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal,FaJs,FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiExpress, SiNextdotjs, 
  SiVercel, SiRender, SiJquery, SiCpanel, SiNetlify, SiPostman, SiGnubash, 
  SiGithubactions, SiApache, SiNginx, SiXampp 
} from "react-icons/si";

import { DiJavascript, DiPostgresql, DiPhp } from "react-icons/di";

const education = [
  {
    year: "2023 - 2025",
    title: "Computer Programming",
    institution: "Algonquin College – Ottawa, ON",
    gpa: "GPA: 3.7/4.0",
    awards: [
      "Dean’s List 2023 (Spring)",
      "Dean’s List 2023 (Summer)",
      "Dean’s List 2024 (Fall)",
    ],
  },
];

const experiences1 = [
  {
    company: "Ottawa Delivery Sushi",
    type: "Full Time - 2 years",
    location: "Ottawa, Ontario, Canada",
    title: "Full Stack Web Developer",
    year: "2023 - Present",

    logo: assets.del_logo, 
    description: [
      "Maintaining and enhancing a food business locator for restaurants with 4.5+ star rating with 400+ reviews, attracting 50+ daily users Implemented menu updates, price adjustments, tax changes (HST), and promotional banners based on business needs.",
    ],
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "jQuery", icon: <SiJquery className="text-gray-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
      { name: "cPanel", icon: <SiCpanel className="text-orange-500" /> },
    ],
  },
];
  
const experiences2 = [
  {
    company: "Freelance Web Developer",
    type: "Self-Employed - 2 years",
    location: "Ottawa, Ontario, Canada",
    title: "Full Stack Web Developer",
    
    year: "2023 - Present",
    
    logo: assets.self_logo,
    description: [
      "Developed custom Full Stack web apps using the MERV stack, integrating REST APIs and payment gateways.Implemented online payment systems allowing users to pay via Stripe, PayPal, and e-Transfer, ensuring secure transactions.Implemented CI/CD automation using GitHub Actions and Bash scripts to streamline deployment and testing workflows.",
    ],
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-red-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-black" /> },
      { name: "Git Actions", icon: <SiGithubactions className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-red-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Render", icon: <SiRender className="text-black" /> },
      { name: "Azure Web App", icon: <FaCloud className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
    ],
  },
];


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="resume"
      className="  w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] 
        max-w-[1000px]
        min-h-[400px] sm:min-h-[500px] relative mx-auto 
        mt-10 p-6 sm:p-8 md:p-12 text-center bg-white dark:bg-gray-900 
        dark:border-gray-700 shadow-lg rounded-xl flex flex-col items-center gap-6 sm:gap-8
        
        
        /* Matching Header's right & bottom shift */
        lg:translate-x-8 lg:translate-y-6
        xl:translate-x-48 xl:translate-y-2


        xl:flex xl:flex-col xl:items-left xl:justify-left"
    >

      

<p className="mt-2 stroke-text_m text-xs md:text-xs xl:text-6xl text-gray-700 dark:text-gray-300 mt-3 font-ovo xl:absolute xl:top-[54px] xl:right-[69%]">
          RESUME
        </p>
      
            {/* Title & Subtitle */}
            <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >

      <p className="hidden xl:block text-sm md:text-lg xl:text-xs xl:font-bold font-bold font-ovo text-gray-900 dark:text-white
        xl:mt-[11%] xl:ml-[-158%] xl:font-sans">
          // RESUME
        </p>
        
        <p className="text-2xl font-bold md:text-5xl xl:mt-10 text-gray-700 dark:text-gray-300 mt-3 font-ovo">
        Education & Experience
        </p>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-2 font-ovo">
        Code, design, deploy—engineering excellence at every step
        </p>
        

        <motion.h2 className="stroke-text mt-10 text-3xl font-bold text-gray-900 dark:text-white font-ovo xl:mt-20">
        EDUCATION
      </motion.h2>

      </motion.div>     

      <div className="w-full flex justify-center">
        <div className="relative flex flex-col w-full lg:w-[60%] xl:w-[100%] xl:ml-[0%]">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col xl:flex-row justify-between items-center p-4 sm:p-6 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md w-full bg-white dark:bg-gray-800 mb-8"
            >
              {/* LEFT SIDE: Logo + Program + Institution + Year */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Algonquin College Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                  <Image
                    src={assets.al_logo}
                    alt="Algonquin College Logo"
                    width={80}
                    height={80}
                    className="object-contain ml-[-10] mt-[-25] xl:ml-[-10] xl:mt-[-1] md:mt-[-1]"
                  />
                </div>

                {/* Program Info */}
                <div className="flex flex-col text-left">
                  <p className="font-poppins text-lg font-bold text-black dark:text-white ml-[-15] mt-[-2]">
                    {edu.title}
                  </p>
                  <p className="font-poppins text-sm text-gray-800 dark:text-gray-300  ml-[-15] mt-[3] ">{edu.institution}</p>
                  <p className="font-poppins text-xs text-gray-800 dark:text-gray-300  ml-[-15] mt-[1] ">{edu.year}</p>
                </div>
              </div>

              {/* RIGHT SIDE: GPA & Awards (Only for XL Screens) */}
              <div className=" xl:flex flex-col text-right">
                <p className="mt-5 xl:mt-[-7] flex-col text-left font-poppins text-xs  text-gray-600 dark:text-gray-400 font-semibold">{edu.gpa}</p>
                <ul className="mt-2 flex flex-col text-left list-none text-gray-600 dark:text-gray-300">
                  {edu.awards.map((award, i) => (
                    <li key={i} className="text-sm">{award}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
        ))}
      </div>
      </div>

      {/* 💼 PROFESSIONAL EXPERIENCE HEADER */}
      <motion.h2 className="stroke-text text-3xl font-bold text-gray-900 dark:text-white font-ovo mt-2">
        PROFESSIONAL EXPERIENCE
      </motion.h2>


{/* Delivery Sushi Experience (Styled Differently) */}
      <div className="w-full flex justify-center">
        <div className="relative flex flex-col w-full lg:w-[60%] xl:w-[100%] xl:ml-[0%]">
    {experiences1.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex flex-col xl:flex-row justify-between items-center xl:p-28 sm:p-6 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md w-full bg-white dark:bg-gray-800 mb-8"
            
      >
        {/* Logo + Job Title + Company */}
        <div className="w-full flex items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
            <Image src={exp.logo} alt={`${exp.company} Logo`} width={80} height={80} className="object-contain xl:ml-[-110%] xl:mt-[-115%] ml-4 md:mt-5" />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-left ml-5 mt-5 font-poppins text-xl font-bold text-gray-900 dark:text-green-400 
            xl:text-left xl:ml-[-18%] xl:mt-[-33%]">
              {exp.title}
            </p>
            <p className="font-poppins text-left ml-5 text-xs mt-1 font-normal text-gray-500 dark:text-white xl:text-left
            xl:ml-[-18%]">
              {exp.type}
            </p>
            <p className="font-poppins text-left ml-5 text-xs font-normal text-gray-400 dark:text-white 
            xl:text-left
            xl:ml-[-18%]">
              {exp.location}
            </p>
          </div>
        </div>

        {/* Company Name & Year */}
        <div className="text-left mt-5 ml-8 w-full flex flex-col xl:ml-[-100%] xl:mt-6">
          <p className="font-poppins xl:text-lg font-bold text-gray-800 dark:text-gray-300 xl:text-left
            xl:ml-[15%] xl:mt-[-12%]">
            {exp.company}
          </p>
          <p className="font-poppins xl:text-sm xl:text-gray-400 text-gray-800 dark:text-gray-300  xl:text-left
          xl:ml-[15%] xl:mt-[%]">
            {exp.year}
          </p>
        </div>

        {/* Description */}
        <div className="text-left ml-4 text-gray-600 dark:text-gray-300 mt-3 xl:text-left xl:ml-[-17%] xl:w-[85%]">
  {exp.description.map((point, i) => (
    <span key={i} className="text-sm xl:text-left xl:absolute
          xl:ml-[-36%] xl:mt-[0%]">{point}</span>
  ))}
</div>

{/* Tech Stack */}
<div className="w-full flex flex-col mt-4 xl:absolute xl:bottom-4 xl:left-6">
  <span className="font-semibold text-gray-500 dark:text-gray-400"></span>
  <div className="flex flex-wrap gap-2 xl:justify-start xl:items-center relative left-7 mb-3 xl:left-3 xl:top-1">
    {exp.techStack.map((tech, i) => (
      <div key={i} className="relative group flex flex-col items-center">
        {/* Tech Icon */}
        <div className="text-xl  ml-[-12] xl:text-4xl xl:ml-[-4]">{tech.icon}</div>
        {/* Tooltip with Tech Name */}
        <span className="absolute bottom-[-30px] scale-0 group-hover:scale-100 transition-transform duration-300 
          bg-black text-white text-xs px-3 py-1 rounded shadow-md">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>


      </motion.div>
    ))}
  </div>
</div>



{/* Freelance Experience (Styled Differently) */}
<div className="w-full flex justify-center">
  <div className="relative flex flex-col w-full lg:w-[60%] xl:w-[100%] xl:ml-[0%]
  ">
    {experiences2.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex flex-col xl:flex-row justify-between items-center xl:p-28 sm:p-6 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md w-full bg-white dark:bg-gray-800 mb-8"
          
      >
        {/* Logo + Job Title + Company */}
        <div className="w-full flex items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 ml-4">
            <Image src={exp.logo} alt={`${exp.company} Logo`} width={80} height={80} className="object-contain xl:ml-[-125%] xl:mt-[-120%]" />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-left ml-5 mt-5  font-poppins text-xl font-bold text-gray-900 dark:text-blue-400 
            xl:text-left xl:ml-[-21%] xl:mt-[-33%] md:ml-3">
              {exp.title}
            </p>
            <p className="font-poppins text-left ml-5 text-xs mt-1 md:ml-3 font-normal text-gray-500 dark:text-white xl:text-left
            xl:ml-[-21%]">
              {exp.type}
            </p>
            <p className="font-poppins  text-left ml-5 text-xs font-normal md:ml-3 text-gray-400 dark:text-white xl:text-left
            xl:ml-[-21%]">
              {exp.location}
            </p>
          </div>
        </div>



        {/* Company Name & Year */}
        <div className="text-left mt-5 ml-8 w-full flex flex-col xl:ml-[-100%] xl:mt-6">
          <p className="font-poppins xl:text-lg font-bold text-gray-800 dark:text-gray-300 xl:text-left
            xl:ml-[15%] xl:mt-[-12%]">
            {exp.company}
          </p>
          <p className="font-poppins xl:text-sm xl:text-gray-400 text-gray-800 dark:text-gray-300  xl:text-left
          xl:ml-[15%] xl:mt-[%]">
            {exp.year}
          </p>
        </div>



        {/* Description */}
        <p className="text-left ml-4 text-gray-600 dark:text-gray-300 mt-3 xl:text-left xl:ml-[-17%] xl:w-[85%]">
          {exp.description.map((point, i) => (
            <span key={i} className="text-sm xl:text-sm xl:text-left xl:absolute
          xl:ml-[-36%] xl:mt-[0%]">{point}</span>
          ))}
        </p>

{/* Tech Stack */}
<div className="w-full flex flex-col mt-4 xl:absolute xl:bottom-4 xl:left-1">
  <span className="font-semibold text-gray-500 dark:text-gray-400"></span>

  <div className="flex flex-wrap gap-2 xl:justify-start xl:items-center relative left-7 mb-3 xl:left-3 xl:top-1">
    {exp.techStack.map((tech, i) => (
      <div key={i} className="relative group flex flex-col items-centerf">
        {/* Tech Icon */}
        <div className="text-xl  ml-[-12] xl:text-4xl xl:ml-[-4]">{tech.icon}</div>
        {/* Tooltip with Tech Name */}
        <span className="absolute bottom-[-30px] scale-0 group-hover:scale-100 transition-transform duration-300 
          bg-black text-white text-xs px-3 py-1 rounded shadow-md">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>

      </motion.div>
    ))}
  </div>
</div>
    </motion.div>
  );
};

export default Resume;
