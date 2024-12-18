import { Header } from "@/components/header"
import { Intro } from "@/components/intro"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"

export default function Home() {
  return (
    <div className="relative">
      <section id="home" className="min-h-screen flex items-center">
        <Header className="animate" />
      </section>
      
      <section id="about" className="min-h-screen flex items-center">
        <About className="animate" />
      </section>
      
      <section id="skills" className="min-h-screen flex items-center">
        <Skills className="animate" />
      </section>
      
      <section id="projects" className="min-h-screen">
        <Projects className="animate" />
      </section>
    </div>
  )
}

