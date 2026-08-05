import { useState } from 'react'
import { Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { experiences } from '../data/portfolio'

function ExperienceCard({
  exp,
  defaultOpen = false,
}: {
  exp: (typeof experiences)[0]
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="relative sm:pl-14">
      <span
        aria-hidden="true"
        className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-indigo shadow-sm sm:flex"
      >
        <Briefcase className="h-4 w-4" />
      </span>
      <article className="card-lift rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-lg font-bold sm:text-xl">{exp.title}</h3>
            <p className="mt-1 text-sm font-medium text-indigo">{exp.company}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {exp.location}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
              exp.current ? 'bg-indigo/12 text-indigo' : 'bg-muted text-muted-foreground'
            }`}
          >
            {exp.period}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo transition hover:opacity-80"
        >
          {open ? 'Hide achievements' : 'View achievements'}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="mt-4 space-y-3 border-t border-border pt-4">
            {exp.achievements.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">Experience</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Three roles. One throughline: capability that compounds.
        </h2>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[15px] top-2 hidden w-px bg-gradient-to-b from-indigo/60 via-violet/40 to-transparent sm:block"
          />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
