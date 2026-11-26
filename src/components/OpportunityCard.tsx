import Link from 'next/link'
import type { Opportunity } from '@/data/skillbridge'

export function OpportunityCard({
  opportunity,
  showAction = true,
}: {
  opportunity: Opportunity
  showAction?: boolean
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(81,58,21,.08)]">
      <div className="flex items-center justify-between gap-3">
        <span className="chip bg-orange-50 text-orange-700">{opportunity.type}</span>
        {opportunity.location && (
          <span className="text-xs font-medium text-slate-400">{opportunity.location}</span>
        )}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{opportunity.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
        {opportunity.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.skills.slice(0, 4).map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <p className="text-sm font-semibold text-slate-700">{opportunity.owner}</p>
        {showAction && (
          <Link
            className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            href="/dashboard/etudiant"
          >
            Découvrir
          </Link>
        )}
      </div>
    </article>
  )
}
