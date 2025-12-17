import { Helmet } from 'react-helmet-async'

import { Header } from './components/Header'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        <title>Vitor Borges · Frontend Engineer</title>
        <meta
          name="description"
          content="Portfólio moderno em React + TypeScript. Design systems, animações e performance para produtos digitais."
        />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://portfolio.exemplo.com" />
      </Helmet>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.08),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_32%)]" />

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-white/5 bg-slate-950/60 py-8 text-center text-sm text-slate-300">
          <p>Construído em React, TypeScript, Vite, Tailwind e Framer Motion.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
