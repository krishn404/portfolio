interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  return (
    <div className={className}>
      <section className="max-w-2xl mx-auto p-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey! <span className="wave">👋</span> I&apos;m Krishna kant, a budding developer on a journey of exploration and creation.
          My coding adventure began a few months ago, and I&apos;ve been hooked ever since.
        </p>
      </section>
    </div>
  )
}

