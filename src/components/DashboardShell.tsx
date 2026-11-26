import Link from 'next/link'
import { Brand } from '@/components/Brand'
import type { SkillBridgeRole } from '@/data/skillbridge'

const nav = [
  ['Vue d’ensemble', '/dashboard'],
  ['Talents', '/talents'],
  ['Projets', '/projets'],
  ['Opportunités', '/opportunites'],
]

export function DashboardShell({
  role,
  children,
}: {
  role: SkillBridgeRole
  children: React.ReactNode
}) {
  const isStudent = role === 'etudiant'
  return (
    <div className="dashboard-background min-h-screen lg:grid lg:grid-cols-[250px_1fr]">
      <aside className="hidden border-r border-white/10 bg-slate-950 px-5 py-7 lg:flex lg:flex-col">
        <Brand inverse />
        <nav className="mt-12 space-y-1">
          {nav.map(([label, href], index) => (
            <Link
              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                index === 0
                  ? 'bg-orange-500 text-white shadow-[0_10px_30px_rgba(249,115,22,.25)]'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl border border-yellow-300/30 bg-yellow-300 p-4 text-slate-950">
          <p className="text-xs font-semibold uppercase tracking-[.12em] text-orange-800">
            Accès libre
          </p>
          <p className="mt-2 text-sm leading-5">
            Explorez toute la plateforme sans compte, e-mail ni mot de passe.
          </p>
        </div>
      </aside>
      <div>
        <header className="flex h-20 items-center justify-between border-b border-white/10 bg-slate-950 px-5 text-white shadow-[0_12px_40px_rgba(15,23,42,.16)] sm:px-8">
          <div className="lg:hidden">
            <Brand compact inverse />
          </div>
          <p className="hidden text-sm text-slate-400 sm:block">
            Plateforme universitaire collaborative
          </p>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-violet-100 text-sm font-bold text-orange-800">
              {isStudent ? 'ET' : 'EN'}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white">Mode découverte</p>
              <p className="text-xs text-orange-300">{isStudent ? 'Étudiant' : 'Enseignant'}</p>
            </div>
            <Link
              className="ml-2 rounded-xl border border-white/20 px-3 py-2 text-xs font-semibold text-white hover:border-orange-400 hover:bg-orange-500"
              href="/#acces"
            >
              Changer de rôle
            </Link>
          </div>
        </header>
        <main className="p-5 sm:p-8 lg:p-10">{children}</main>
      </div>
    </div>
  )
}
