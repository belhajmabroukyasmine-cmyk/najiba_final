import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DashboardShell } from '@/components/DashboardShell'
import { OpportunityCard } from '@/components/OpportunityCard'
import { ProjectCard } from '@/components/ProjectCard'
import { opportunities, projects, talents, type SkillBridgeRole } from '@/data/skillbridge'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ role: 'etudiant' }, { role: 'enseignant' }]
}

function isRole(value: string): value is SkillBridgeRole {
  return value === 'etudiant' || value === 'enseignant'
}

export default async function RoleDashboardPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params
  if (!isRole(role)) notFound()

  const isStudent = role === 'etudiant'
  const stats = isStudent
    ? [
        ['Projets ouverts', projects.length, 'a explorer'],
        ['Opportunites', opportunities.length, 'disponibles'],
        ['Talents', talents.length, 'dans le reseau'],
      ]
    : [
        ['Talents', talents.length, 'profils disponibles'],
        ['Projets actifs', projects.length, 'sur le campus'],
        ['Domaines', 7, 'representes'],
      ]

  return (
    <DashboardShell role={role}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">{isStudent ? 'Espace etudiant' : 'Espace enseignant'}</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-.035em] text-slate-950 sm:text-4xl">
              {isStudent
                ? 'Construisez votre prochaine experience.'
                : 'Activez les talents du campus.'}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              {isStudent
                ? 'Decouvrez les projets, missions et equipes qui correspondent a vos envies.'
                : 'Reperez des competences complementaires et imaginez de nouvelles collaborations.'}
            </p>
          </div>
          <span className="chip w-fit bg-emerald-50 text-emerald-700">
            <span className="size-2 rounded-full bg-emerald-500" />
            Acces libre
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map(([label, value, detail], index) => (
            <div
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,.14)]"
              key={String(label)}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-400">{label}</p>
                <span
                  className={`size-2 rounded-full ${index === 1 ? 'bg-violet-400' : 'bg-violet-600'}`}
                />
              </div>
              <p className="mt-5 text-3xl font-black">{value}</p>
              <p className="mt-1 text-xs text-violet-300">{detail}</p>
            </div>
          ))}
        </div>

        {isStudent ? (
          <>
            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Selection du moment</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">Projets pour vous</h2>
                </div>
                <Link className="text-sm font-bold text-violet-600" href="/projets">
                  Voir tous les projets →
                </Link>
              </div>
              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard key={project.id} project={project} showAction={false} />
                ))}
              </div>
            </section>
            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">A saisir</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">Opportunites ouvertes</h2>
                </div>
                <Link className="text-sm font-bold text-violet-600" href="/opportunites">
                  Tout explorer →
                </Link>
              </div>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {opportunities.slice(0, 2).map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                    showAction={false}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="mt-10 rounded-[32px] bg-[#1e1b4b] p-6 text-white sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow text-violet-300">Competences disponibles</p>
                  <h2 className="mt-2 text-2xl font-black">Talents a decouvrir</h2>
                </div>
                <Link className="text-sm font-bold text-violet-300" href="/talents">
                  Ouvrir l'annuaire →
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {talents.slice(0, 6).map((talent) => (
                  <article
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    key={talent.id}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-violet-500 text-xs font-black text-white">
                        {talent.initials}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold">{talent.name}</h3>
                        <p className="mt-0.5 text-xs text-slate-400">{talent.headline}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {talent.skills.slice(0, 2).map((skill) => (
                        <span className="chip bg-white/10 text-violet-200" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Inspirations</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    Collaborations en lumiere
                  </h2>
                </div>
                <Link className="text-sm font-bold text-violet-600" href="/projets">
                  Voir tous les projets →
                </Link>
              </div>
              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard key={project.id} project={project} showAction={false} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </DashboardShell>
  )
}