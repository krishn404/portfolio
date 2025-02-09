"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github,  } from 'lucide-react'
import { gsap } from "gsap";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaStar } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from "react-icons/si";


interface Project {
  title: string
  description: string
  badge?: string
  emoji?: string
  archived?: boolean
  users?: string
  liveLink?: string;
  repoLink?: string;
  techStack?: string[];
}

const skillIcons = {
  "JavaScript": <FaJs />,
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express": <FaNodeJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Tailwind CSS": <FaCss3Alt />,
  "Git": <FaGit />,
  "GitHub": <FaGithub />,
  "TypeScript": <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  "Gemini": <FaStar />,
};

const projects: Project[] = [
  {
    title: "Genxie",
    description: "A document editor and generator tool which uses Gemini AI for enhanced content creation.",
    emoji: "📝",
    liveLink: "https://genxie.vercel.app/",
    repoLink: "https://github.com/krishn404/genxie",
    techStack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "LinkedIn Carousel Maker",
    description: "An application that creates engaging slides for content creators on LinkedIn.",
    emoji: "ℹ️",
    liveLink: "https://linkslide.vercel.app/",
    repoLink: "https://github.com/krishn404/Linkedin-slides",
    techStack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Balloon Burst Game",
    description: "An interactive game built with HTML, CSS, and JavaScript where players pop balloons.",
    emoji: "🎈",
    users: "10k+ players",
    liveLink: "https://target-balloon.vercel.app/",
    repoLink: "https://github.com/krishn404/target-balloon",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Virtual Gallery",
    description: "An immersive virtual art gallery experience created using GSAP for smooth animations.",
    emoji: "🖼️",
    users: "5k+ visitors",
    liveLink: "https://virtual-showcase.vercel.app",
    techStack: ["HTML", "CSS", "JavaScript"],
  }
]

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
      );
    }
  }, []);

  return (
    <section className={`max-w-2xl mx-auto p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-6">
        Projects <span role="img" aria-label="folder">📁</span>
      </h2>
      <div className="grid grid-cols-2 gap-y-12 gap-x-[40%] ml-[-25%]" ref={cardsRef}>
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900/50 border-gray-800 w-[500px] h-[300px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-">
                {project.title}
                {project.emoji && <span role="img">{project.emoji}</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <Badge variant="secondary" className="bg-zinc-600 text-white">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:none"
                      >
                        Live Preview
                      </a>
                    </Badge>
                  )}
                  {project.archived && (
                    <Badge variant="secondary" className="bg-gray-800">
                      archived
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.techStack && project.techStack.map((tech) => (
                    <span key={tech} className="flex items-center text-gray-400">
                      {skillIcons[tech as keyof typeof skillIcons]}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}