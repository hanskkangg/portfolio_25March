import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal, FaWindows, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJquery, SiExpress, SiMysql, SiMongodb, SiFirebase, SiCpanel, SiVercel, SiNetlify, SiRender, SiLinux, SiGnubash, SiGithubactions, SiKubernetes, SiApache, SiNginx } from "react-icons/si";

const Skills = () => {
  return (
    <div 
    id='skills' 
    className="relative w-[940px]  ml-[460px] mt-20 min-h-[200px] 
      flex flex-col self-start justify-center gap-6 
      bg-[url('@/assets/skills_bg.png')] bg-cover bg-center dark:bg-gray-900 
      border-2 border-white dark:border-gray-700 shadow-lg rounded-xl p-8"
  >
  

      {/* Top Left: Title & Subtitle */}
      <div className="absolute top-5 left-5 text-left">
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs md:sm font-bold font-ovo text-gray-900 dark:text-white mt-12 ml-6"
        >
          // SKILLS
        </motion.h3>
        
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl text-gray-700 dark:text-gray-300 mt-5 ml-5  font-ovo "
        >
          What I'm Good At<br/>
        </motion.p>

        
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-md text-gray-500 dark:text-gray-300 mt-3 ml-6  font-ovo "
        >
          From pixels to pipelines, I'll make your digital dreams come true! 🚀
        </motion.p>

      </div>

      {/* Skills Categories (Left: Title, Right: Icons) */}
      <div className="flex flex-col w-full gap-6 mt-60 px-8">
        
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
          <SkillItem icon={<SiLinux className="text-yellow-500" />} name="VIM" />
        </Category>

        {/* 05 Deployment */}
        <Category title="05 Deployment">
          <SkillItem icon={<FaCloud className="text-blue-700" />} name="Azure Web App" />
          <SkillItem icon={<SiCpanel className="text-orange-500" />} name="cPanel" />
          <SkillItem icon={<SiVercel className="text-black dark:text-white" />} name="Vercel" />
          <SkillItem icon={<SiNetlify className="text-green-400" />} name="Netlify" />
          <SkillItem icon={<SiRender className="text-purple-500" />} name="Render" />
          <SkillItem icon={<SiKubernetes className="text-blue-500" />} name="Kubernetes" />
        </Category>

        {/* 06 Web Servers */}
        <Category title="06 Web Servers">
          <SkillItem icon={<SiApache className="text-red-600" />} name="Apache" />
          <SkillItem icon={<SiNginx className="text-green-500" />} name="Nginx" />
        </Category>

      </div>
    </div>
  );
};

// Category Component (Left Title, Right Icons)
const Category = ({ title, children }) => (
  <div className="flex w-full items-center justify-between border-b border-gray-300 dark:border-gray-600 pb-2">
    {/* Left: Category Title */}
    <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 w-1/3">{title}</h4>
    
    {/* Right: Icons */}
    <div className="flex flex-wrap gap-4 w-2/3 justify-start">{children}</div>
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
