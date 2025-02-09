"use client"
import { Badge } from "@/components/ui/badge"
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithubSquare, FaNpm, FaChrome } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiBootstrap, SiPostman, SiVercel } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from "framer-motion";

interface SkillsProps {
  className?: string;
}

const skillCategories = {
  "Programming Languages": {
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
    icons: {
      "JavaScript": <FaJs />,
      "TypeScript": <SiTypescript />,
      "HTML": <FaHtml5 />,
      "CSS": <FaCss3Alt />,
    }
  },
  "Frontend Development": {
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    icons: {
      "React.js": <FaReact />,
      "Next.js": <SiNextdotjs />,
      "Tailwind CSS": <SiTailwindcss />,
      "Bootstrap": <SiBootstrap />,
    }
  },
  "Backend Development": {
    skills: ["Node.js", "Express.js"],
    icons: {
      "Node.js": <FaNodeJs />,
      "Express.js": <SiExpress />,
    }
  },
  "Tools & Platforms": {
    skills: ["VS Code", "Git", "NPM", "Chrome DevTools", "Postman", "Vercel", "GitHub"],
    icons: {
      "VS Code": <VscVscodeInsiders />,
      "Git": <FaGitAlt />,
      "NPM": <FaNpm />,
      "Chrome DevTools": <FaChrome />,
      "Postman": <SiPostman />,
      "Vercel": <SiVercel />,
      "GitHub": <FaGithubSquare />,
    }
  }
};

export function Skills({ className }: SkillsProps) {
  return (
    <section id="skills" className={`min-h-screen py-20 sm:py-32 ${className}`}>
      <div className="flex flex-col items-center md:items-start justify-center h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-[800px] mx-auto md:mx-0 md:ml-[45%]"
        >
          <div className="bg-[#0A0A0A]/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100 text-center">Technical Skills</h2>
            <p className="text-sm md:text-base mb-6 text-gray-200 text-center px-2">
              Here are the technologies and tools I work with:
            </p>
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, { skills, icons }]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-200 border-b border-gray-700/50 pb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="flex items-center text-xs md:text-sm transition-transform transform hover:scale-110 hover:bg-gray-800 shadow-md p-1.5 md:p-2 rounded whitespace-nowrap"
                      >
                        <span className="mr-1 text-base">{icons[skill as keyof typeof icons]}</span>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-gray-700/50 pt-4 text-center">
              <p className="text-xs md:text-sm text-gray-400">
                Continuously learning and adapting to new technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
