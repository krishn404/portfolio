"use client";

import { useEffect, useRef } from "react";
import {  } from "@/components/ui/badge"
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
    title: "Retrova - Polaroid maker",
    description: "A web app that transforms your photos into nostalgic Polaroid-style images!.",
    emoji: "🖼️",
    liveLink: "https://retrova.vercel.app/",
    repoLink: "https://github.com/krishn404/polaroid",
    techStack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Virtual Gallery",
    description: "An immersive virtual art gallery experience created using GSAP for smooth animations.",
    emoji: "🖼️",
    // users: "5k+ visitors",
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
    <section className={`max-w-2xl mx-auto py-16 md:py-24 px-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-6">
        Projects <span role="img" aria-label="folder">📁</span>
      </h2>
      <div className="grid grid-cols-1 gap-6" ref={cardsRef}>
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900/50 border-gray-800 w-full">
            <CardHeader className="space-y-2">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                {project.emoji && <span role="img" aria-label="project icon">{project.emoji}</span>}
                {project.title}
              </CardTitle>
              <p className="text-sm md:text-base text-gray-400">{project.description}</p>
              {project.users && <p className="text-xs text-gray-500">{project.users}</p>}
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <div key={tech} className="flex items-center gap-1 text-xs bg-gray-800/50 px-2 py-1 rounded">
                    {skillIcons[tech as keyof typeof skillIcons]}
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105 border border-blue-600/30"
                  >
                    <span className="relative">Live Preview</span>
                  </a>
                )}
                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/40 text-gray-300 hover:bg-gray-700/40 rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105 border border-gray-700/50"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}