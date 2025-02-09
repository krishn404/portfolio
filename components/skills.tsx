"use client"
import { Badge } from "@/components/ui/badge"
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaGithub } from "react-icons/fa";
import { Card } from "@/components/card";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills: Array<keyof typeof skillIcons> = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
  "HTML", "CSS", "Tailwind CSS", "Git", "GitHub"
]

interface SkillsProps {
  className?: string;
}

const skillIcons = {
  "JavaScript": <FaJs />,
  "TypeScript": <SiTypescript />,
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  "Express": <FaNodeJs />, // You can replace with an Express icon if available
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Tailwind CSS": <FaCss3Alt />, // You can replace with a Tailwind icon if available
  "Git": <FaGit />,
  "GitHub": <FaGithub />,
};

export function Skills({ className }: SkillsProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className={`${className} relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-7xl ml-[45%] p-6`}>
        <h2 className="text-5xl font-bold mb-4 text-gray-100 text-center">Skills</h2>
        <p className="text-lg mb-6 text-gray-200 text-center">
          Here are some of the technologies and tools I am working with:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="flex items-center text-sm transition-transform transform hover:scale-110 hover:bg-gray-800 shadow-md p-2 rounded"
            >
              <span className="mr-1">{skillIcons[skill as keyof typeof skillIcons]}</span>
              {skill}
            </Badge>
          ))}
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Continuously learning and adapting to new technologies.
          </p>
        </div>
      </Card>
    </div>
  )
}
