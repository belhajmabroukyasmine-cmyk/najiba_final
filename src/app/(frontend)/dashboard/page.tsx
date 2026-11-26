import Link from 'next/link'
import { Brand } from '@/components/Brand'

const entries = [
  {
    href: '/dashboard/etudiant',
    eyebrow: 'Je suis étudiant',
    title: 'Découvrir des projets et développer mes compétences',
    description:
      'Explorez les équipes ouvertes, les opportunités et les profils qui peuvent compléter le vôtre.',
    accent: 'bg-violet-600',
    badge: 'ET',
  },
  {
    href: '/dashboard/enseignant',
    eyebrow: 'Je suis enseignant',
    title: 'Trouver des talents et lancer une collaboration',
    description:
      'Identifiez rapidement les compétences disponibles et découvrez les projets actifs du campus.',
    accent: 'bg-blue-200',
    badge: 'EN',
  },
]

export default function DashboardEntryPage() {
  return (
    <main className="hero-color-wash min-h-screen px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Brand />
        <div className="mx-auto max-w-3xl py-16 text-center sm:py-24">
          <p className="eyebrow">Accès direct</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-.05em] text-slate-950 sm:text-6xl">
            Entrez dans SkillBridge
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            
          </p>
        </div>
        <div className="grid gap-5 pb-16 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              className="group rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,.09)] transition hover:-translate-y-1 hover:border-violet-300 sm:p-9"
              href={entry.href}
              key={entry.href}
            >
              <span
                className={`grid size-14 place-items-center rounded-2xl ${entry.accent} text-sm font-black text-slate-950`}
              >
                {entry.badge}
              </span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[.15em] text-violet-600">
                {entry.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                {entry.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{entry.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                Entrer maintenant
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
