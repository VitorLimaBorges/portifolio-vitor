import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'

import { Section } from '../components/Section'

const schema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().min(1, 'E-mail é obrigatório').email({ message: 'E-mail inválido' }),
  message: z.string().min(10, 'Conteúdo muito curto'),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await fetch('https://formsubmit.co/ajax/vitorlima_borges@hotmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
  }

  return (
    <Section
      id="contact"
      kicker="Contato"
      title="Vamos construir algo incrível juntos."
      description="Envie uma mensagem e eu retorno em poucas horas. Também posso adaptar o portfólio para seu stack ou projeto específico."
    >
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit(onSubmit)}
        className="group relative grid gap-4 overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-lg shadow-sky-500/10 sm:grid-cols-2 dark:border-white/10 dark:from-white/5 dark:to-slate-900/20 dark:shadow-sky-400/20"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">Nome</label>
          <motion.input
            whileFocus={{ scale: 1.01, borderColor: 'rgba(14, 165, 233, 0.4)' }}
            id="name"
            {...register('name')}
            className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 transition-all focus:border-sky-500 focus:shadow-lg focus:shadow-sky-500/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-sky-400 dark:focus:shadow-sky-400/30"
            placeholder="Como posso te chamar?"
          />
          {errors.name ? <p className="pt-1 text-xs text-rose-600 dark:text-rose-400">{errors.name.message}</p> : null}
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">E-mail</label>
          <motion.input
            whileFocus={{ scale: 1.01, borderColor: 'rgba(14, 165, 233, 0.4)' }}
            id="email"
            {...register('email')}
            className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 transition-all focus:border-sky-500 focus:shadow-lg focus:shadow-sky-500/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-sky-400 dark:focus:shadow-sky-400/30"
            placeholder="email@dominio.com"
          />
          {errors.email ? <p className="pt-1 text-xs text-rose-600 dark:text-rose-400">{errors.email.message}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">Mensagem</label>
          <motion.textarea
            whileFocus={{ scale: 1.01, borderColor: 'rgba(14, 165, 233, 0.4)' }}
            id="message"
            rows={4}
            {...register('message')}
            className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 transition-all focus:border-sky-500 focus:shadow-lg focus:shadow-sky-500/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-sky-400 dark:focus:shadow-sky-400/30"
            placeholder="Conte detalhes sobre o projeto ou a vaga"
          />
          {errors.message ? <p className="pt-1 text-xs text-rose-600 dark:text-rose-400">{errors.message.message}</p> : null}
        </div>
        <div className="relative z-10 flex items-center justify-between gap-3 pt-2 sm:col-span-2">
          <p className="text-sm text-slate-700 dark:text-slate-300/90">Resposta típica em poucas horas. Podemos marcar uma call curta.</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/50 disabled:opacity-60 dark:from-sky-500 dark:to-blue-500 dark:shadow-sky-400/30"
          >
            Enviar <Send size={16} />
          </motion.button>
        </div>
      </motion.form>
    </Section>
  )
}
