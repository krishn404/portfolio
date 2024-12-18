import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
  "HTML", "CSS", "Tailwind CSS", "Git", "GitHub", "MongoDB", "SQL", 
  "RESTful APIs", "GraphQL", "Jest", "Cypress"
]

interface SkillsProps {
  className?: string;
}

export function Skills({ className }: SkillsProps) {
  return (
    <section className={`max-w-2xl mx-auto p-6 ${className}`}>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

