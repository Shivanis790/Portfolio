import { BadgeCheck, GraduationCap } from 'lucide-react'
import { certifications, education, projectHighlight } from '../data/portfolio'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">
          Education & certifications
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Academic grounding, continuously re-certified.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="card-lift h-full rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo/15 to-violet/15 text-indigo">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-indigo/12 px-3 py-1 text-indigo">{item.score}</span>
                <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="card-lift group h-full rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <BadgeCheck className="h-5 w-5 shrink-0 text-violet" />
              <h3 className="mt-4 text-base font-bold">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
                {cert.date}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl glass p-6 sm:p-7">
          <h3 className="text-lg font-bold">{projectHighlight.title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
            {projectHighlight.org}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {projectHighlight.description}
          </p>
        </div>
      </div>
    </section>
  )
}
