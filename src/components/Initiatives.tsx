import { ListChecks, Target, TrendingUp, UserCheck } from 'lucide-react'
import { initiatives } from '../data/portfolio'

export function Initiatives() {
  return (
    <section id="initiatives" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">
          Featured initiatives
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Enterprise programs, from mandate to measurable impact.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Each initiative below was scoped, governed and reported end to end — with the business
          outcome, not the activity, as the unit of success.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <h3 className="min-w-0 text-xl font-bold">{item.title}</h3>
                <span className="shrink-0 rounded-full bg-gradient-to-r from-indigo/12 to-violet/12 px-3 py-1 text-xs font-semibold text-indigo">
                  {item.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                  <div>
                    <dt className="font-semibold">My role</dt>
                    <dd className="text-muted-foreground">{item.role}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                  <div>
                    <dt className="font-semibold">Key contributions</dt>
                    <dd>
                      <ul className="mt-1 space-y-1 text-muted-foreground">
                        {item.contributions.map((c) => (
                          <li key={c} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                  <div>
                    <dt className="font-semibold">Business impact</dt>
                    <dd className="text-muted-foreground">{item.impact}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                <Target className="h-4 w-4 shrink-0 text-muted-foreground" />
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
