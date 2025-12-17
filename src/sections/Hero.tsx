import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

import { socials } from '../data/socials'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_30%)] opacity-70 dark:opacity-75" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sky-700 dark:border-white/15 dark:bg-white/10 dark:text-sky-50">
              VITOR BORGES · FRONTEND
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              Crio experiências digitais elegantes, performáticas e prontas para escalar produtos.
            </h1>
            <p className="max-w-3xl text-lg text-slate-700 dark:text-slate-200">
              Especialista em React e TypeScript, foco em design systems, acessibilidade e conversão. Lidero entregas com
              animações que contam histórias, UX orientada a métricas e código fácil de evoluir.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-950 font-semibold shadow-[0_10px_40px_-18px_rgba(255,255,255,0.8)] transition hover:translate-y-[1px]"
              >
                Ver projetos <ArrowDownRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-slate-900 transition hover:border-black/30 hover:bg-black/5 dark:border-white/25 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
              >
                Vamos conversar <Mail size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-slate-900 transition hover:border-black/30 hover:bg-black/5 dark:border-white/25 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
              >
                Download CV <Download size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-200">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 transition hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:hover:border-white/40 dark:hover:bg-white/5"
                >
                  {social.label === 'GitHub' ? <Github size={14} /> : null}
                  {social.label === 'LinkedIn' ? <Linkedin size={14} /> : null}
                  {social.label === 'E-mail' ? <Mail size={14} /> : null}
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative w-full max-w-sm self-start rounded-3xl border border-black/5 bg-white/90 p-6 text-slate-900 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] dark:border-white/12 dark:bg-slate-900/75 dark:text-white dark:shadow-[0_20px_80px_-40px_rgba(0,0,0,0.65)]"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_40%)] dark:hidden" />
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">Disponível</p>
            <h3 className="pt-2 text-2xl font-semibold">Engenheiro Frontend</h3>
            <p className="pt-3 text-slate-700 dark:text-slate-200">
              Combino visão de produto com código enxuto. Adoro explorar animações sutis, onboarding guiado e métricas para
              iterar rápido.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-800 dark:text-slate-100">
              <CardStat label="Tempo médio de entrega" value="< 2 semanas" />
              <CardStat label="Lighthouse" value="100 / 100" />
              <CardStat label="Stack principal" value="React + TS" />
              <CardStat label="Fuso" value="GMT-3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CardStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 dark:border-white/12 dark:bg-slate-900/70">
      <p className="text-xs text-slate-600 dark:text-slate-200">{label}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
    </div>
  )
}
