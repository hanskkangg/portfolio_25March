import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2025",
    title: "🎓 Computer Programming",
    institution: "Algonquin College – Ottawa, ON",
    gpa: "GPA: 3.7/4.0",
    awards: [
      "Dean’s List 2023 (Spring)",
      "Dean’s List 2023 (Summer)",
      "Dean’s List 2024 (Fall)",
    ],
  },
];

const experiences = [
  {
    year: "2023 - Present",
    title: "💼 Full Stack Web Developer",
    company: "Delivery Sushi",
    location: "Ottawa, Ontario, Canada",
    type: "Full Time - 2 years",
    description: [
      "Maintaining and enhancing a food business locator for restaurants with 4.5+ star rating with 400+ reviews, attracting 50+ daily users.",
      "Implemented menu updates, price adjustments, tax changes (HST), and promotional banners based on business needs.",
      "Optimized website performance resolving bugs and ensuring site stability.",
      "Collaborated with the owner to improve UX/UI design and implement business-driven feature enhancements.",
    ],
  },
  {
    year: "2023 - Present",
    title: "💼 Full Stack Web Developer",
    company: "Freelance",
    location: "Ottawa, Ontario, Canada",
    type: "Full Time - 2 years",
    description: [
      "Developed custom Full Stack web apps using the MERV stack, integrating REST APIs and payment gateways.",
      "Implemented online payment systems allowing users to pay via Stripe, PayPal, and e-Transfer, ensuring secure transactions.",
      "Designed and built dedicated admin panels, enabling business owners to manage products, track payments, and process orders in real time.",
      "Collaborated with business owners to refine UX/UI design, incorporating feedback to enhance usability and drive sales.",
      "Ensured cross-device compatibility by building responsive and accessible web apps optimized for mobile and desktop users.",
      "Implemented CI/CD automation using GitHub Actions and Bash scripts to streamline deployment and testing workflows.",
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
      className="
        w-[90%] sm:w-[85%] md:w-[95%] lg:w-[65%] xl:w-[67%] max-w-[1000px]
        min-h-[400px] sm:min-h-[500px] 
        relative mx-auto mt-10 
        p-6 sm:p-8 md:p-12 
        text-center 
        bg-[url('@/assets/about_bg.png')] bg-cover bg-center 
        dark:bg-gray-900 dark:border-gray-700 
        shadow-lg rounded-xl 
        flex flex-col items-center gap-6 sm:gap-8 

        /* Matching Header's right & bottom shift */
        lg:translate-x-8 lg:translate-y-6
        xl:translate-x-48 xl:translate-y-40
      "
    >
      {/* Resume Header */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-[3%] left-[5%] sm:top-[4%] md:top-[3%] lg:top-[2%] 
          text-sm font-bold text-black font-ovo"
      >
        // Resume
      </motion.h2>

      {/* EDUCATION SECTION */}
      <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-white font-ovo">
        🎓 EDUCATION
      </motion.h2>

      <div className="relative w-full flex flex-col gap-6 border-l-2 border-dashed border-gray-500 pl-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col w-full mb-8 relative"
          >
            {/* Year Positioning (Responsive) */}
            <div className="absolute -left-[12%] sm:-left-[10%] md:-left-[8%] 
              border border-dashed border-gray-500 px-4 py-1 rounded-md bg-white 
              text-gray-800 text-sm font-bold"
            >
              {edu.year}
            </div>

            {/* Education Content */}
            <div className="border border-gray-400 dark:border-gray-600 p-6 rounded-lg shadow-md 
              w-full bg-white dark:bg-gray-800"
            >
              <p className="text-lg font-bold text-black">{edu.title}</p>
              <p className="text-gray-800 dark:text-white">{edu.institution}</p>
              <p className="text-gray-600">{edu.gpa}</p>
              <ul className="list-disc text-gray-600 dark:text-gray-300 mt-3 pl-5">
                {edu.awards.map((award, i) => (
                  <li key={i} className="text-sm">{award}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-white font-ovo mt-12">
        💼 PROFESSIONAL EXPERIENCE
      </motion.h2>

      <div className="relative w-full flex flex-col gap-6 border-l-2 border-dashed border-gray-500 pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col w-full mb-8 relative"
          >
            {/* Year Positioning (Responsive) */}
            <div className="absolute -left-[12%] sm:-left-[10%] md:-left-[8%] 
              border border-dashed border-gray-500 px-4 py-1 rounded-md bg-white 
              text-gray-800 text-sm font-bold"
            >
              {exp.year}
            </div>

            {/* Work Experience Content */}
            <div className="border border-gray-400 dark:border-gray-600 p-6 rounded-lg shadow-md 
              w-full bg-white dark:bg-gray-800"
            >
              <p className="text-lg font-bold text-black">{exp.title}</p>
              <p className="text-gray-800 dark:text-white">{exp.company} | {exp.type}</p>
              <p className="text-gray-500">{exp.location}</p>
              <ul className="list-disc text-gray-600 dark:text-gray-300 mt-3 pl-5">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Resume;
