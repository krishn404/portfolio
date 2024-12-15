import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github,  } from 'lucide-react'
import { gsap } from "gsap";

interface Project {
  title: string
  description: string
  badge?: string
  emoji?: string
  archived?: boolean
  users?: string
  liveLink?: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    title: "Genxie",
    description: "A document editor and generator tool which uses Gemini AI for enhanced content creation.",
    emoji: "📝",
    liveLink: "https://genxie.vercel.app/",
    repoLink: "https://github.com/krishn404/genxie"
  },
  {
    title: "LinkedIn Carousel Maker",
    description: "An application that creates engaging slides for content creators on LinkedIn.",
    emoji: "ℹ️",
    liveLink: "https://github.com/krishn404/Linkedin-slides",
    repoLink: "https://linkslide.vercel.app/"
  },
  {
    title: "Balloon Burst Game",
    description: "An interactive game built with HTML, CSS, and JavaScript where players pop balloons.",
    emoji: "🎈",
    users: "10k+ players",
    liveLink: "https://target-balloon.vercel.app/",
    repoLink: "https://github.com/krishn404/target-balloon"
  },
  {
    title: "Virtual Gallery",
    description: "An immersive virtual art gallery experience created using GSAP for smooth animations.",
    emoji: "🖼️",
    users: "5k+ visitors",
    liveLink: "https://virtual-showcase.vercel.app",
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
      <div className="space-y-4" ref={cardsRef}>
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
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
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent transition-all duration-300 hover:font-bold"
                    >
                    </a>
                  )}
                  
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
