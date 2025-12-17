import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'

import { Section } from '../components/Section'

const schema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
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
    await fetch('https://formsubmit.co/ajax/contato@exemplo.com', {
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
        className="grid gap-4 rounded-2xl border border-black/5 bg-white p-6 sm:grid-cols-2 dark:border-white/10 dark:bg-white/5"
      >
        <div className="sm:col-span-1">
          <label className="text-sm text-slate-700 dark:text-slate-200">Nome</label>
          <input
            {...register('name')}
            className="mt-1 w-full rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-black/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-white/40"
            placeholder="Como posso te chamar?"
          />
          {errors.name ? <p className="pt-1 text-xs text-rose-200">{errors.name.message}</p> : null}
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-slate-700 dark:text-slate-200">E-mail</label>
          <input
            {...register('email')}
            className="mt-1 w-full rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-black/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-white/40"
            placeholder="email@dominio.com"
          />
          {errors.email ? <p className="pt-1 text-xs text-rose-200">{errors.email.message}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-slate-700 dark:text-slate-200">Mensagem</label>
          <textarea
            rows={4}
            {...register('message')}
            className="mt-1 w-full rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-black/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-white/40"
            placeholder="Conte detalhes sobre o projeto ou a vaga"
          />
          {errors.message ? <p className="pt-1 text-xs text-rose-200">{errors.message.message}</p> : null}
        </div>
        <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-2">
          <p className="text-sm text-slate-700 dark:text-slate-300/90">Resposta típica em poucas horas. Podemos marcar uma call curta.</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white font-semibold transition hover:translate-y-[1px] disabled:opacity-60 dark:bg-white dark:text-slate-950"
          >
            Enviar <Send size={16} />
          </button>
        </div>
      </motion.form>
    </Section>
  )
}
