import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiJquery, SiExpress, SiMysql, SiMongodb, SiFirebase, SiCpanel, SiVercel, SiNetlify, SiRender, SiPostman, SiXampp, SiVisualstudiocode, SiGnubash, SiGithubactions, SiApache, SiNginx
} from "react-icons/si";

const Skills = () => {
  return (
    <div
    id="skills"
    className="relative mx-auto mt-10 w-full 
    max-w-[350px] 
    sm:max-w-[600px]
    md:max-w-[800px] 
    lg:max-w-[950px] 
    p-6 sm:p-8 md:p-12 text-center min-h-[400px] sm:min-h-[500px] 
    bg-[url('@/assets/about_bg.png')] bg-cover bg-center 
    dark:bg-gray-900 dark:border-gray-700 shadow-lg rounded-xl 
    flex flex-col items-center gap-4 sm:gap-6
    
    lg:ml-[30%] xl:ml-[30%] 2xl:ml-[30%] md:mx-auto"
>



      {/* Title & Subtitle */}
      <div className="text-center">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-lg font-bold font-ovo text-gray-900 dark:text-white"
        >
          // SKILLS
        </motion.h3>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-5xl text-gray-700 dark:text-gray-300 mt-3 font-ovo"
        >
          Core Competencies
        </motion.p>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-2 font-ovo"
        >
          Code, design, deploy—engineering excellence at every step
        </motion.p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-8">
        {/* 01 Frontend */}
        <Category title="01 Frontend">
          <SkillItem icon={<FaHtml5 className="text-orange-600" />} name="HTML" />
          <SkillItem icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind CSS" />
          <SkillItem icon={<FaJs className="text-yellow-500" />} name="JavaScript" />
          <SkillItem icon={<FaReact className="text-blue-400" />} name="React" />
          <SkillItem icon={<SiNextdotjs className="text-black dark:text-white" />} name="Next.js" />
          <SkillItem icon={<SiJquery className="text-blue-600" />} name="jQuery" />
        </Category>

        {/* 02 Backend */}
        <Category title="02 Backend">
          <SkillItem icon={<FaPhp className="text-indigo-600" />} name="PHP" />
          <SkillItem icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
          <SkillItem icon={<SiExpress className="text-gray-500" />} name="Express.js" />
          <SkillItem icon={<FaJava className="text-red-600" />} name="Java" />
        </Category>

        {/* 03 Database */}
        <Category title="03 Database">
          <SkillItem icon={<SiMysql className="text-blue-700" />} name="MySQL" />
          <SkillItem icon={<FaDatabase className="text-orange-500" />} name="Oracle" />
          <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <SkillItem icon={<FaDatabase className="text-blue-500" />} name="SQL Server" />
          <SkillItem icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
        </Category>

        {/* 04 Tools */}
        <Category title="04 Tools">
          <SkillItem icon={<FaGitAlt className="text-red-500" />} name="Git" />
          <SkillItem icon={<SiGithubactions className="text-gray-700 dark:text-white" />} name="GitHub Actions" />
          <SkillItem icon={<SiGnubash className="text-gray-500" />} name="Bash Script" />
          <SkillItem icon={<FaTerminal className="text-blue-500" />} name="PowerShell" />
          <SkillItem icon={<SiPostman className="text-orange-500" />} name="Postman" />
          <SkillItem icon={<SiApache className="text-red-600" />} name="Apache" />
          <SkillItem icon={<SiNginx className="text-green-500" />} name="Nginx" />
        </Category>

        {/* 05 Deployment */}
        <Category title="05 Deployment">
          <SkillItem icon={<FaCloud className="text-blue-700" />} name="Azure Web App" />
          <SkillItem icon={<SiCpanel className="text-orange-500" />} name="cPanel" />
          <SkillItem icon={<SiVercel className="text-black dark:text-white" />} name="Vercel" />
          <SkillItem icon={<SiNetlify className="text-green-400" />} name="Netlify" />
          <SkillItem icon={<SiRender className="text-purple-500" />} name="Render" />
        </Category>
      </div>
    </div>
  );
};

// Category Component (Left Title, Right Icons)
const Category = ({ title, children }) => (
  <div className="flex flex-col border-b border-dashed border-gray-300 dark:border-gray-600 pb-5">
    {/* Category Title */}
    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>

    {/* Skill Items */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">{children}</div>
  </div>
);

// Skill Item Component (Icons with Hover Effect)
const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-2 p-2 border border-gray-400 dark:border-gray-600 
                  rounded-lg shadow-md hover:scale-105 transition-transform text-xs">
    <div className="text-xl">{icon}</div>
    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{name}</p>
  </div>
);

export default Skills;
