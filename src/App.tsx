import { About } from './components/About'
import { Contact } from './components/Contact'
import { EducationSection } from './components/EducationSection'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Initiatives } from './components/Initiatives'
import { Footer, Navbar } from './components/Layout'
import { Recognition } from './components/Recognition'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Initiatives />
      <Skills />
      <Recognition />
      <EducationSection />
      <Contact />
      <Footer />
    </main>
  )
}
