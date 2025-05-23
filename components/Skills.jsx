  import { motion } from "framer-motion";
  import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaDatabase, FaCloud, FaTerminal, FaGitAlt, FaMicrosoft
  } from "react-icons/fa";
  import {
    SiTailwindcss, SiNextdotjs, SiJquery, SiExpress, SiMysql, SiMongodb, SiFirebase, SiCpanel, SiVercel, SiNetlify, SiRender, SiPostman, SiGnubash, SiGithubactions, SiApache, SiNginx, SiXampp,SiJenkins, SiDocker,SiKubernetes
  } from "react-icons/si";



  const Skills = () => {
    return (
      <motion.div
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
        w-[90%] sm:w-[85%] md:w-[95%] lg:w-[63%] xl:w-[67%] 
          max-w-[1000px]
          min-h-[400px] sm:min-h-[500px] 
          relative mx-auto mt-10 xl:mt-1
          p-6 sm:p-8 md:p-12 
          text-center 
          bg-white bg-cover bg-center 
          dark:border-gray-700 
          rounded-xl 
          flex flex-col items-center gap-6 sm:gap-8 

          /* Matching Header's right & bottom shift */
          lg:translate-x- lg:translate-y-6 lg:mt-[-38%]
          xl:translate-x-48 xl:translate-y-2
 dark:bg-[#272626] 

          xl:flex xl:flex-col xl:items-left xl:justify-left
        "
      >

  <p className=" stroke-text_m text-xs md:text-xs xl:text-6xl text-gray-700 mt-3 font-ovo xl:absolute xl:top-[50px] xl:right-[74%] dark:text-[#EFB920] ">
            SKILLS
          </p>
        {/* Title & Subtitle */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="hidden xl:block text-sm md:text-lg xl:text-xs xl:font-bold font-bold font-ovo text-gray-900 dark:text-white
          xl:mt-[11%] xl:ml-[-175%] xl:font-sans">
            // SKILLS
          </p>

          
          <p className="text-2xl font-bold md:text-5xl text-gray-700 dark:text-gray-300 mt-3 font-ovo">
            Core Competencies
          </p>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mt-2 font-ovo">
            Code, design, deploy—engineering excellence at every step
          </p>
        </motion.div>
        

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full xl:flex xl:flex-col xl:gap-1 mt-4 ">

          <Category number="01" title="Frontend">
    <SkillItem icon={<FaHtml5 className="text-orange-600" />} name="HTML" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[100%] xl:mt-[10] " />
    <SkillItem icon={<FaCss3Alt className="text-blue-500 dark:text-white" />} name="CSS" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
    <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind CSS" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]"/>
    <SkillItem icon={<FaJs className="text-yellow-500" />} name="JavaScript" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
    <SkillItem icon={<FaReact className="text-blue-400" />} name="React" className="xl:ml-[-80%] flex justify-center items-center   xl:w-[140%] xl:h-[120%] xl:mt-[-24]" />
    <SkillItem icon={<SiNextdotjs className="text-black" />} name="Next.js" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24]" />
    <SkillItem icon={<SiJquery className="text-blue-600" />} name="jQuery" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />
  </Category>

          <Category number="02" title="Backend">
    <SkillItem icon={<FaPhp className="text-indigo-600"/>} name="PHP" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[120%] xl:mt-[20] xl:mb-[10]" />
    <SkillItem icon={<FaNodeJs className="text-green-500 dark:text-white" />} name="Node.js" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[120%] xl:mt-[20] xl:mb-[10]" />
    <SkillItem icon={<SiExpress className="text-gray-500" />} name="Express.js" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[20] xl:mb-[10]"/>
    <SkillItem icon={<FaJava className="text-red-500" />} name="Java" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[20] xl:mb-[10] " />
  </Category>

          <Category number="03" title="Database & Storage">
    <SkillItem icon={<SiMysql className="text-blue-700"/>} name="MySQL" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[120%] xl:mt-[10]" />
    <SkillItem icon={<FaDatabase className="text-orange-500 dark:text-white" />} name="Oracle" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[120%] xl:mt-[10]" />
    <SkillItem icon={<SiMongodb className="text-green-500" />} name="Mongo DB" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[10]"/>
    <SkillItem icon={<FaDatabase className="text-blue-500" />} name="SQL Server" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
    <SkillItem icon={<SiFirebase className="text-yellow-500" />} name="Firebase" className="xl:ml-[-80%] flex justify-center items-center   xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />

    {/* added after ai wrapper projet */}
    <SkillItem icon={<FaDatabase className="text-gray-500" />} name="PostgreSQL" className="xl:ml-[-80%] flex justify-center items-center   xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]"/>
  </Category>


          <Category number="04" title="CI/CD Automation & Tools">
    <SkillItem icon={<FaGitAlt className="text-black" />} name="Git" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
    <SkillItem icon={<SiGithubactions className="text-black dark:text-white" />} name="GitHub Actions" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
    <SkillItem icon={<SiGnubash className="text-gray-500" />} name="Bash Script" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]"/>
    <SkillItem icon={<FaTerminal className="text-blue-500" />} name="Power Shell" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]" />

    <SkillItem icon={<SiJenkins className="text-red-600" />} name="Jenkins" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[10]" />
    <SkillItem icon={<SiDocker className="text-blue-400" />} name="Docker" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[10]" />
    <SkillItem icon={<SiKubernetes className="text-blue-500" />} name="Kubernetes" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[10]" />

    <SkillItem icon={<SiPostman className="text-orange-500" />} name="Postman" className="xl:ml-[-80%] flex justify-center items-center   xl:w-[140%] xl:h-[120%] xl:mt-[-24]" />

    <SkillItem icon={<SiXampp className="text-orange-600" />} name="XAMPP" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />
    
    <SkillItem icon={<SiNginx className="text-green-500" />} name="Nginx" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]"/>
  </Category>

          <Category number="05" title="Cloud & Deployment">
            <SkillItem icon={<FaCloud className="text-blue-700" />} name="Azure Web App" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]" 
            />
            <SkillItem icon={<SiCpanel className="text-orange-500" />} name="cPanel" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]"  />
            <SkillItem icon={<SiVercel className="text-black dark:text-white" />} name="Vercel" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[100%] xl:mt-[10]"  />
            <SkillItem icon={<SiNetlify className="text-teal-500" />} name="Netlify" className="xl:ml-[-80%] flex justify-center items-center xl:w-[140%] xl:h-[100%] xl:mt-[10]" />
            <SkillItem icon={<SiRender className="text-black" />} name="Render" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />
            
    <SkillItem icon={<FaCloud className="text-blue-500" />} name="AWS EC2" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />
    <SkillItem icon={<FaCloud className="text-blue-500" />} name="AWS S3" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%] xl:mt-[-24] xl:mb-[10]" />
          </Category>
          
        <Category number="06" title="APIs & Auths">
    <SkillItem icon={<FaCloud className="text-gray-700" />} name="OpenAI API (LLM)" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]"  />
    <SkillItem icon={<SiFirebase className="text-blue-600" />} name="Google Maps API" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]"   />
    <SkillItem icon={<SiPostman className="text-orange-500" />} name="Stripe API" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]"  />
    <SkillItem icon={<SiPostman className="text-orange-500" />} name="PayPal API" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]"   />
    <SkillItem icon={<SiPostman className="text-blue-500" />} name="Clerk API"  className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]" />
    <SkillItem icon={<FaDatabase className="text-green-700" />} name="Pinecone API"  className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]"  />
    <SkillItem icon={<FaTerminal className="text-blue-500" />} name="JWT Auth" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]" />
    <SkillItem icon={<FaCloud className="text-gray-700" />} name="OAuth 2.0" className="xl:ml-[-80%] flex justify-center items-center  xl:w-[140%] xl:h-[120%]  xl:mt-[-10%] xl:mb-[10]" />
</Category>
</div>

      </motion.div>
    );
  };

  // Category Component with Styled Numberss 
  const Category = ({ number, title, children }) => (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="flex flex-col border-b border-black dark:border-gray-600 pb-5
    xl:flex-row xl:items-center xl:justify-start xl:gap-2 xl:w-[100%] xl:pb-8 xl:pt-2 xl:mb-0 xl:mt-1" 
  >
      {/* Number with stroke effect */}
      <div className="flex items-center xl:flex-row xl:items-center xl:w-full">
        <span className="text-4xl sm:text-6xl md:text-7xl font-bold  dark:stroke-text stroke-text xl:mr-1 mr-2 xl:text-5xl dark:text-[#EFB920] ">
          {number}
        </span>
        <h4 className="font-mono mt-1 text-2xl xl:text-2xl md:text-xl xl:font-normal xl:ml-2 xl:mt-3 text-gray-900 dark:text-white ">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 xl:grid-cols-4 xl:w-full xl:gap-12 ">{children}</div>
    </motion.div>
  );

  const SkillItem = ({ icon, name, className = "" }) => (
    <div
      
      className={`flex font-montserrat items-center gap-1 p-1 border border-dashed border-black mx-18  dark:border-[#EFB920]
                    rounded-3xl hover:scale-105 transition-transform text-xs
                    xl:w-[120px] xl:h-12 xl:gap-22 ${className}`}
    >
      <div className="xl:text-2xl">{icon}</div>
      <p className="text-xs font-sm text-gray-800  dark:text-gray-300 ">{name}</p>
    </div>
  );


  
  export default Skills;
