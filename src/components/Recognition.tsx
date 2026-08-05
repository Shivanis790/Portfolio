import { Award, BadgeCheck, Star, Trophy } from 'lucide-react'
import { recognitions } from '../data/portfolio'

const icons = [Award, BadgeCheck, Trophy, Star]

export function Recognition() {
  return (
    <section id="achievements" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">Recognition</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Awards that came from outcomes, not tenure.
        </h2>

        <div className="relative mt-12 border-l border-border pl-8">
          {recognitions.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.title} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-indigo shadow-sm">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.date}
                </p>
                <h3 className="mt-1.5 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
