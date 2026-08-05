import { useState, type FormEvent } from 'react'
import { Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { LinkedInIcon } from './LinkedInIcon'
import { LINKEDIN_URL, RESUME_PATH, profile } from '../data/portfolio'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo">Contact</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Let&apos;s talk capability, transformation and talent.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Open to Human Resources, L&D, HR Transformation, Program Management and People Consulting
          conversations.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                <a
                  className="min-w-0 break-all hover:text-indigo"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                <a className="hover:text-indigo" href={`tel:${profile.phone}`}>
                  {profile.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <LinkedInIcon className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                <a
                  className="hover:text-indigo"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                <span>{profile.location}</span>
              </li>
            </ul>
            <a
              href={RESUME_PATH}
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7"
          >
            {submitted ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-indigo">Message received!</p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. This is a frontend-only form — please email directly at{' '}
                  <a href={`mailto:${profile.email}`} className="text-indigo hover:underline">
                    {profile.email}
                  </a>{' '}
                  for a guaranteed response.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium">
                    Name
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Email
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                </div>
                <label className="mt-4 block text-sm font-medium">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role or program…"
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
