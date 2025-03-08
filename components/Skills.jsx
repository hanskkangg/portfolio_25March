import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal, FaGitAlt, FaMicrosoft
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiJquery, SiExpress, SiMysql, SiMongodb, SiFirebase, SiCpanel, SiVercel, SiNetlify, SiRender, SiPostman, SiGnubash, SiGithubactions, SiApache, SiNginx, SiXampp
} from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
       w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] 
        max-w-[1000px]
        min-h-[400px] sm:min-h-[500px] 
        relative mx-auto mt-10 
        p-6 sm:p-8 md:p-12 
        text-center 
        bg-white bg-cover bg-center 
        dark:bg-gray-900 dark:border-gray-700 
        shadow-lg rounded-xl 
        flex flex-col items-center gap-6 sm:gap-8 

        /* Matching Header's right & bottom shift */
        lg:translate-x-8 lg:translate-y-6
        xl:translate-x-48 xl:translate-y-40
      "
    >
      {/* Title & Subtitle */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <h3 className="hidden xl:block text-sm md:text-lg font-bold font-ovo text-gray-900 dark:text-white">
          // SKILLS
        </h3>

        <p className=" stroke-text_m text-xs md:text-xs text-gray-700 dark:text-gray-300 mt-3 font-ovo">
          SKILLS
        </p>
        <p className="text-2xl font-bold md:text-5xl text-gray-700 dark:text-gray-300 mt-3 font-ovo">
          Core Competencies
        </p>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-2 font-ovo">
          Code, design, deploy—engineering excellence at every step
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        <Category number="01" title="Frontend">
          <SkillItem icon={<FaHtml5 className="text-orange-600" />} name="HTML" />
          <SkillItem icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind CSS" />
          <SkillItem icon={<FaJs className="text-yellow-500" />} name="JavaScript" />
          <SkillItem icon={<FaReact className="text-blue-400" />} name="React" />
          <SkillItem icon={<SiNextdotjs className="text-black dark:text-white" />} name="Next.js" />
          <SkillItem icon={<SiJquery className="text-blue-600" />} name="jQuery" />
        </Category>

        <Category number="02" title="Backend">
          <SkillItem icon={<FaPhp className="text-indigo-600" />} name="PHP" />
          <SkillItem icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
          <SkillItem icon={<SiExpress className="text-gray-500" />} name="Express.js" />
          <SkillItem icon={<FaJava className="text-red-600" />} name="Java" />
        </Category>

        <Category number="03" title="Database">
          <SkillItem icon={<SiMysql className="text-blue-700" />} name="MySQL" />
          <SkillItem icon={<FaDatabase className="text-orange-500" />} name="Oracle" />
          <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <SkillItem icon={<FaDatabase className="text-blue-500" />} name="SQL Server" />
          <SkillItem icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
        </Category>

        <Category number="04" title="Tools">
          <SkillItem icon={<FaGitAlt className="text-red-500" />} name="Git" />
          <SkillItem icon={<SiGithubactions className="text-gray-700 dark:text-white" />} name="GitHub Actions" />
          <SkillItem icon={<SiGnubash className="text-gray-500" />} name="Bash Script" />
          <SkillItem icon={<FaTerminal className="text-blue-500" />} name="PowerShell" />
          <SkillItem icon={<SiPostman className="text-orange-500" />} name="Postman" />
          <SkillItem icon={<FaMicrosoft className="text-blue-600" />} name="Visual Studio" />
 
 <SkillItem icon={<SiXampp className="text-orange-600" />} name="XAMPP" />
        </Category>

        <Category number="05" title="Deployment">
          <SkillItem icon={<FaCloud className="text-blue-700" />} name="Azure Web App" />
          <SkillItem icon={<SiCpanel className="text-orange-500" />} name="cPanel" />
          <SkillItem icon={<SiVercel className="text-black dark:text-white" />} name="Vercel" />
          <SkillItem icon={<SiNetlify className="text-green-400" />} name="Netlify" />
          <SkillItem icon={<SiRender className="text-purple-500" />} name="Render" />
        </Category>
      </div>
    </motion.div>
  );
};

// Category Component with Styled Numbers
const Category = ({ number, title, children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="flex flex-col border-b border-dashed border-gray-300 dark:border-gray-600 pb-5"
  >
    {/* Number with stroke effect */}
    <div className="flex items-center">
      <span className="text-4xl sm:text-6xl md:text-7xl font-bold stroke-text_m mr-2">
        {number}
      </span>
      <h4 className="font-ovo mt-1 text-2xl md:text-xl text-gray-900 dark:text-white">
        {title}
      </h4>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">{children}</div>
  </motion.div>
);

// Skill Item Component
const SkillItem = ({ icon, name }) => (
  <motion.div
    initial={{ scale: 0.9 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    className="flex font-montserrat items-center gap-2 p-2 border border-dashed border-gray-400 dark:border-gray-600 
                  rounded-3xl hover:scale-105 transition-transform text-xs"
  >
    <div className="text-xl">{icon}</div>
    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{name}</p>
  </motion.div>
);

export default Skills;
