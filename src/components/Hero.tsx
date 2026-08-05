import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { LinkedInIcon } from './LinkedInIcon'
import { LINKEDIN_URL, RESUME_PATH, profile, stats } from '../data/portfolio'

export function Hero() {
  return (
    <header id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-indigo/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-[22rem] w-[22rem] rounded-full bg-violet/20 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-indigo" />
              {profile.availability}
            </span>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">{profile.name}</h1>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <p className="mt-4 text-xl font-semibold sm:text-2xl">
              <span className="text-gradient">{profile.tagline}</span>
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.headline}
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-indigo/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo/30"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-indigo/45 hover:text-indigo"
              >
                <Mail className="h-4 w-4" />
                Contact me
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-indigo/45 hover:text-indigo"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="animate-fade-up justify-self-center" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo/30 via-violet/20 to-transparent blur-2xl"
            />
            <img
              src="/assets/shivani.png"
              alt="Shivani Sharma, HR Learning and Development professional"
              width={420}
              height={520}
              className="relative h-[26rem] w-[20rem] rounded-[2rem] border border-border object-cover object-top shadow-2xl shadow-navy/20 sm:h-[30rem] sm:w-[23rem]"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl glass px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">{profile.currentRole}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass p-6 sm:p-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
        <a
          href="#about"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition hover:text-indigo"
        >
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </header>
  )
}
