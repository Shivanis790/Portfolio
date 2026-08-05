import {
  CalendarCheck,
  ChartColumn,
  GraduationCap,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'
import { aboutPillars, profile } from '../data/portfolio'

const icons = [GraduationCap, Sparkles, Workflow, Users, CalendarCheck, ChartColumn]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">About</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Enterprise capability, built like a consulting engagement.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Strategic HR professional driving Learning & Development and AI transformation at a global
          technology services organization — mobilizing 800+ engineers and CXO stakeholders around
          measurable capability outcomes, and converting learning data into board-ready decisions.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPillars.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <article
                key={pillar.title}
                className="card-lift h-full rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo/15 to-violet/15 text-indigo">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            MBA in Human Resources & Marketing, based in {profile.location}. I partner across HR,
            business, marketing and technology to translate strategy into execution — and I am the{' '}
            <span className="font-semibold text-foreground">
              first intern in R Systems history awarded the Spot Award
            </span>{' '}
            for enterprise impact.
          </p>
        </div>
      </div>
    </section>
  )
}
