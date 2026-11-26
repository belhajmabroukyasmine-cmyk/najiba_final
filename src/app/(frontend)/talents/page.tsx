import { SiteHeader } from '@/components/SiteHeader'
import { talents } from '@/data/skillbridge'

export default function TalentsPage() {
  return (
    <main className="colorful-page min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-violet-500/30 bg-slate-950 text-white">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-purple-300/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="eyebrow text-violet-400">Annuaire de compétences</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.045em] text-white sm:text-5xl">
            Les bonnes compétences sont plus proches que vous ne le pensez.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
            Découvrez des profils complémentaires, leurs domaines et les compétences qu’ils
            souhaitent mettre au service d’un projet.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {talents.map((talent) => (
          <article
            className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,.14)] transition hover:-translate-y-1 hover:border-violet-400 hover:shadow-[0_24px_55px_rgba(124,58,237,.16)]"
            key={talent.id}
          >
            <div className="flex items-start justify-between">
              <div className="grid size-13 place-items-center rounded-2xl bg-violet-100 text-sm font-black text-violet-700">
                {talent.initials}
              </div>
              <span className="chip bg-emerald-50 text-emerald-700">{talent.availability}</span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-white">{talent.name}</h2>
            <p className="mt-1 text-sm font-medium text-violet-400">{talent.headline}</p>
            <p className="mt-3 text-sm text-slate-400">{talent.institution}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <span className="chip bg-white/10 text-violet-100" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
