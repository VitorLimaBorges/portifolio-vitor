import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp, Github, LinkedinIcon, Mail } from 'lucide-react'

import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { socials } from './data/socials'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Vitor Borges · Desenvolvedor Fullstack | React, Node & Python</title>
        <meta
          name="description"
          content="Desenvolvedor Fullstack especializado em React, TypeScript, Node.js e Python. Entrego UIs polidas, APIs bem estruturadas e observabilidade para produtos rápidos e escaláveis."
        />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://portfolio.exemplo.com" />
        
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://portfolio.exemplo.com" />
              <meta property="og:title" content="Vitor Borges · Desenvolvedor Fullstack | React, Node & Python" />
              <meta
                property="og:description"
                content="Portfólio profissional de Vitor Borges. Especialista em experiências web modernas, APIs em Node/Python e arquitetura escalável."
              />
              <meta property="og:image" content="https://portfolio.exemplo.com/og-image.jpg" />
              <meta property="og:locale" content="pt_BR" />
        
              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:url" content="https://portfolio.exemplo.com" />
              <meta name="twitter:title" content="Vitor Borges · Desenvolvedor Fullstack" />
              <meta
                name="twitter:description"
                content="Desenvolvedor Fullstack especializado em React, TypeScript, Node e Python. Crio experiências digitais performáticas e escaláveis, do front à API."
              />
              <meta name="twitter:image" content="https://portfolio.exemplo.com/og-image.jpg" />
        
              {/* Additional SEO */}
              <meta name="format-detection" content="telephone=no" />
              <link rel="alternate" hrefLang="pt-BR" href="https://portfolio.exemplo.com" />
        
              {/* JSON-LD Structured Data */}
              <script type="application/ld+json">
                {JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  name: 'Vitor Borges',
                  url: 'https://portfolio.exemplo.com',
                  jobTitle: 'Desenvolvedor Fullstack',
                  description: 'Fullstack especializado em React, TypeScript, Node e Python, criando UIs e APIs escaláveis',
                  knowsAbout: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Python', 'APIs'],
                  sameAs: [
                    'https://github.com/VitorLimaBorges',
                    'https://linkedin.com/in/seu-perfil',
                  ],
                })}
              </script>
      </Helmet>

      {/* Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Progresso de rolagem da página"
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        Pular para o conteúdo principal
      </a>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.08),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_32%)]" />

      <div className="relative">
        <Header />
        <ScrollToTop />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="relative overflow-hidden border-t border-sky-500/10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]" />
          
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <h3 className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent dark:from-sky-400 dark:to-blue-400">
                  VITOR BORGES
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Engenheiro Frontend especializado em criar experiências digitais que unem design, performance e escala.
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-700 transition-colors hover:border-sky-500/50 hover:bg-sky-500/20 dark:text-sky-400"
                      aria-label={social.label}
                    >
                      {social.label === 'GitHub' ? <Github size={18} /> : null}
                      {social.label === 'LinkedIn' ? <LinkedinIcon size={18} /> : null}
                      {social.label === 'E-mail' ? <Mail size={18} /> : null}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white">Navegação</h4>
                <nav className="flex flex-col gap-2 text-sm">
                  {['Sobre', 'Skills', 'Projetos', 'Experiência', 'Contato'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 4 }}
                      className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Next.js'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-full border border-sky-500/30 bg-gradient-to-br from-sky-50 to-blue-50 px-3 py-1 font-medium text-sky-700 dark:border-sky-400/30 dark:from-sky-900/30 dark:to-blue-900/30 dark:text-sky-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sky-500/10 pt-8 text-sm text-slate-600 sm:flex-row dark:text-slate-400"
            >
              <p>© {new Date().getFullYear()} Vitor Borges. Todos os direitos reservados.</p>
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 font-medium text-sky-700 transition-colors hover:border-sky-500/50 hover:bg-sky-500/20 dark:text-sky-400"
              >
                <ArrowUp size={16} /> Voltar ao topo
              </motion.a>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
