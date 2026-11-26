import Link from 'next/link'
import type { Project } from '@/data/skillbridge'

export function ProjectCard({
  project,
  showAction = true,
}: {
  project: Project
  showAction?: boolean
}) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,.14)] transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_24px_60px_rgba(249,115,22,.18)]">
      <div className="flex items-center justify-between gap-3">
        <span className="chip bg-orange-500/15 text-orange-300">{project.domain}</span>
        <span className="text-xs font-semibold text-yellow-300">Recrutement ouvert</span>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{project.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.slice(0, 4).map((skill) => (
          <span className="chip bg-white/10 text-amber-100" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
        <div>
          <p className="text-xs text-slate-500">Proposé par</p>
          <p className="mt-1 text-sm font-semibold text-white">{project.owner}</p>
        </div>
        {showAction && (
          <Link
            className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-300 hover:text-slate-950"
            href="/dashboard/etudiant"
          >
            Voir le projet
          </Link>
        )}
      </div>
    </article>
  )
}
