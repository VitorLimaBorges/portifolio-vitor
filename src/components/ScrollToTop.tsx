import { motion, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 400)
    })
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-white/90 text-sky-700 shadow-lg shadow-sky-500/20 backdrop-blur-sm transition-all hover:scale-110 hover:border-sky-500/50 hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-500/30 dark:border-sky-400/30 dark:bg-slate-900/90 dark:text-sky-400 dark:hover:bg-slate-800"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </motion.button>
  )
}
