import Link from 'next/link'

export function Brand({
  compact = false,
  inverse = false,
}: {
  compact?: boolean
  inverse?: boolean
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 font-semibold tracking-tight ${inverse ? 'text-white' : 'text-slate-950'}`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-violet-600 text-sm font-black text-white shadow-[0_8px_24px_rgba(124,58,237,.28)]">
        S
      </span>
      {!compact && <span className="text-lg">SkillBridge</span>}
    </Link>
  )
}
