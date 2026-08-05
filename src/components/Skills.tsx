import { useEffect, useRef, useState } from 'react'
import { skillCategories, tools } from '../data/portfolio'

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level])

  return (
    <li ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo to-violet transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </li>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">Skills</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Consulting toolkit across people, programs and data.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-lift h-full rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-indigo">
                {category.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl glass p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Tools & platforms
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
