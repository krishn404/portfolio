interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  return (
    <section className={`max-w-2xl mx-auto p-6 ${className}`}>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I'm Krishna Kant, a passionate and creative web developer with a keen interest in building innovative and user-friendly applications. My journey in the world of coding began with a curiosity to understand how things work on the internet, and it has since evolved into a full-fledged career pursuit.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I specialize in front-end development, with a strong focus on React and Next.js. I'm always eager to learn new technologies and stay up-to-date with the latest trends in web development. My goal is to create seamless, performant, and accessible web experiences that make a positive impact on users' lives.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials. I believe in the power of community and continuous learning in the ever-evolving field of web development.
      </p>
    </section>
  )
}

