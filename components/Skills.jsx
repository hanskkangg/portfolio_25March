import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal, FaWindows, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJquery, SiExpress, SiMysql, SiMongodb, SiFirebase, SiMicrosoft, SiCpanel, SiVercel, SiNetlify, SiRender, SiLinux, SiGnubash, SiGithubactions, SiKubernetes, SiApache, SiNginx } from "react-icons/si";

const Skills = () => {
  return (
    <div className="ml-[460px] mr-[100px] mt-[100px] max-w-5xl text-center 
                min-h-[500px] flex flex-col items-center justify-center gap-4 
                bg-[url('@/assets/about_bg.png')] bg-cover bg-center dark:bg-gray-900 
                border-2 border-white dark:border-gray-700 shadow-lg rounded-xl p-6">

      {/* Skills Title */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl font-bold font-ovo text-gray-900 dark:text-white"
      >
        // SKILLS
      </motion.h3>

      {/* Skills Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 text-xs">
        
        {/* Frontend */}
        <Category title="Frontend">
          <SkillItem icon={<FaHtml5 className="text-orange-600" />} name="HTML" />
          <SkillItem icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind CSS" />
          <SkillItem icon={<FaJs className="text-yellow-500" />} name="JavaScript" />
          <SkillItem icon={<FaReact className="text-blue-400" />} name="React" />
          <SkillItem icon={<SiNextdotjs className="text-black dark:text-white" />} name="Next.js" />
          <SkillItem icon={<SiJquery className="text-blue-600" />} name="jQuery" />
        </Category>

        {/* Backend */}
        <Category title="Backend">
          <SkillItem icon={<FaPhp className="text-indigo-600" />} name="PHP" />
          <SkillItem icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
          <SkillItem icon={<SiExpress className="text-gray-500" />} name="Express.js" />
          <SkillItem icon={<FaJava className="text-red-600" />} name="Java" />
        </Category>

        {/* Database */}
        <Category title="Database">
          <SkillItem icon={<SiMysql className="text-blue-700" />} name="MySQL" />
          <SkillItem icon={<FaDatabase className="text-orange-500" />} name="Oracle" />
          <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <SkillItem icon={<FaDatabase className="text-blue-500" />} name="SQL Server" />
          <SkillItem icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
        </Category>

        {/* Tools */}
        <Category title="Tools">
          <SkillItem icon={<FaGitAlt className="text-red-500" />} name="Git" />
          <SkillItem icon={<SiGithubactions className="text-gray-700 dark:text-white" />} name="GitHub Actions" />
          <SkillItem icon={<SiGnubash className="text-gray-500" />} name="Bash Script" />
          <SkillItem icon={<FaTerminal className="text-blue-500" />} name="PowerShell" />
          <SkillItem icon={<SiLinux className="text-yellow-500" />} name="VIM" />
        </Category>

        {/* Deployment */}
        <Category title="Deployment">
          <SkillItem icon={<FaCloud className="text-blue-700" />} name="Azure Web App" />
          <SkillItem icon={<SiCpanel className="text-orange-500" />} name="cPanel" />
          <SkillItem icon={<SiVercel className="text-black dark:text-white" />} name="Vercel" />
          <SkillItem icon={<SiNetlify className="text-green-400" />} name="Netlify" />
          <SkillItem icon={<SiRender className="text-purple-500" />} name="Render" />
          <SkillItem icon={<SiKubernetes className="text-blue-500" />} name="Kubernetes" />
        </Category>

        {/* Web Servers */}
        <Category title="Web Servers">
          <SkillItem icon={<SiApache className="text-red-600" />} name="Apache" />
          <SkillItem icon={<SiNginx className="text-green-500" />} name="Nginx" />
          <SkillItem icon={<SiNginx className="text-green-500" />} name="Nginx" />
          <SkillItem icon={<SiNginx className="text-green-500" />} name="UptimeRobot" />
        </Category>

      </div>
    </div>
  );
};

// Category Component
const Category = ({ title, children }) => (
  <div className="flex flex-col items-center">
    <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{title}</h4>
    <div className="grid grid-cols-2 gap-2">{children}</div>
  </div>
);

// Skill Item Component (Smaller Icons & Text)
const SkillItem = ({ icon, name }) => (
  <div className="flex flex-col items-center p-2 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md hover:scale-105 transition-transform text-xs">
    <div className="text-2xl">{icon}</div>
    <p className="mt-1 text-xs font-medium text-gray-800 dark:text-gray-200">{name}</p>
  </div>
);

export default Skills;
