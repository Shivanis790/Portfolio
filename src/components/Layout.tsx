import { useEffect, useState } from 'react'
import { Mail, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { LinkedInIcon } from './LinkedInIcon'
import { LINKEDIN_URL, navLinks, profile } from '../data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
        <a href="#home" className="min-w-0 font-display text-base font-extrabold tracking-tight">
          Shivani<span className="text-indigo">.</span>
        </a>
        <div className="flex shrink-0 items-center gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:text-indigo"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold">{profile.name}</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · {profile.currentRole} — {profile.currentCompany}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:-translate-y-0.5 hover:border-indigo/45 hover:text-indigo"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:-translate-y-0.5 hover:border-indigo/45 hover:text-indigo"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`tel:${profile.phone}`}
            aria-label="Phone"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:-translate-y-0.5 hover:border-indigo/45 hover:text-indigo"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
