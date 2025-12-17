export function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
      {label}
    </span>
  )
}
