import { ArrowDownRight, Download, Github, LinkedinIcon, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

import { socials } from '../data/socials'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_30%)] opacity-70 dark:opacity-75" 
        style={{ backgroundSize: '200% 200%' }}
        aria-hidden="true"
        />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sky-700 shadow-lg shadow-sky-500/10 dark:border-white/15 dark:bg-white/10 dark:text-sky-50 dark:shadow-sky-500/20"
            >
              VITOR BORGES · FULLSTACK
            </motion.span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              Fullstack que entrega produto: front impecável, APIs sólidas e arquitetura pronta para crescer.
            </h1>
            <p className="max-w-3xl text-lg text-slate-700 dark:text-slate-200">
              React + TypeScript no front, Node/Python no back. Construo design systems, APIs bem versionadas, automações e
              observabilidade para que o produto seja rápido de usar e fácil de operar.
            </p>
            <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                      aria-label="Ver seção de projetos"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.7)] transition-all hover:shadow-[0_15px_50px_-10px_rgba(56,189,248,0.9)] dark:from-sky-500 dark:to-blue-500"
                  >
                    Ver projetos <ArrowDownRight size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                      aria-label="Ir para formulário de contato"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-sky-600/30 bg-sky-600/10 px-6 py-3 font-semibold text-slate-900 backdrop-blur-sm transition-all hover:border-sky-600/50 hover:bg-sky-600/20 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-white dark:hover:border-sky-400/50 dark:hover:bg-sky-400/20"
                  >
                    Vamos conversar <Mail size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="/Curriculo.pdf"
                    download
                      aria-label="Baixar currículo em PDF"
                      className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/50 px-6 py-3 font-semibold text-slate-900 backdrop-blur-sm transition-all hover:border-black/30 hover:bg-white/80 dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/20"
                  >
                    Download CV <Download size={16} />
                  </motion.a>
            </div>
              <nav aria-label="Links de redes sociais" className="flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-200">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                    aria-label={`Visitar ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 transition hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:hover:border-white/40 dark:hover:bg-white/5"
                >
                  {social.label === 'GitHub' ? <Github size={14} /> : null}
                  {social.label === 'LinkedIn' ? <LinkedinIcon size={14} /> : null}
                  {social.label === 'E-mail' ? <Mail size={14} /> : null}
                  {social.label}
                </a>
              ))}
              </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="group relative w-full max-w-sm self-start overflow-hidden rounded-3xl border border-sky-500/20 bg-white/90 p-6 text-slate-900 shadow-[0_20px_80px_-30px_rgba(56,189,248,0.5)] backdrop-blur-xl transition-all hover:border-sky-500/40 hover:shadow-[0_30px_100px_-30px_rgba(56,189,248,0.7)] dark:border-sky-400/20 dark:bg-slate-900/75 dark:text-white dark:shadow-[0_20px_80px_-30px_rgba(56,189,248,0.3)] dark:hover:border-sky-400/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/30 to-blue-500/30 opacity-50 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_40%)] dark:hidden" />
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">Disponível</p>
            </div>
            <h3 className="pt-2 text-2xl font-semibold">Desenvolvedor Fullstack</h3>
            <p className="pt-3 text-slate-700 dark:text-slate-200">
              Combino visão de produto com código enxuto: UI polida, APIs REST/GraphQL seguras, automações e métricas para
              iterar rápido.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-800 dark:text-slate-100">
              <CardStat label="Tempo médio de entrega" value="< 4 semanas" />
              <CardStat label="APIs" value="REST / GraphQL" />
              <CardStat label="Stack principal" value="React · Node · Python" />
              <CardStat label="Fuso" value="GMT-3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CardStat({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.01 }}
      className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 dark:border-white/12 dark:bg-slate-900/70"
    >
      <p className="text-xs text-slate-600 dark:text-slate-200">{label}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
    </motion.div>
  )
}
