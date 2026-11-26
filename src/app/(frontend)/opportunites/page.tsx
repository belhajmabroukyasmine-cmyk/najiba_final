import { SiteHeader } from '@/components/SiteHeader'
import { OpportunityCard } from '@/components/OpportunityCard'
import { opportunities } from '@/data/skillbridge'

export default function OpportunitiesPage() {
  return (
    <main className="colorful-page min-h-screen">
      <SiteHeader />
      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8">
          <p className="eyebrow text-amber-300">Missions, défis et événements</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
            Des opportunités pour apprendre en faisant.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
            Concours, hackathons, bénévolat et missions proposés par des organisations vérifiées.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </section>
    </main>
  )
}
