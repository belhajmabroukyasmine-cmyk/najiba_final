import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'

const roles = [
  {
    number: '01',
    title: 'Étudiants',
    text: 'Présentez vos compétences, rejoignez des projets et transformez chaque collaboration en expérience visible.',
    color: 'bg-violet-100',
    href: '/dashboard/etudiant',
    action: 'Entrer comme étudiant',
  },
  {
    number: '02',
    title: 'Enseignants & laboratoires',
    text: 'Identifiez des profils motivés et lancez des projets pédagogiques ou de recherche appliquée.',
    color: 'bg-purple-100',
    href: '/dashboard/enseignant',
    action: 'Entrer comme enseignant',
  },
]

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-color-wash relative overflow-hidden border-b border-slate-200/70">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[.12em] text-violet-700">
              <span className="size-2 rounded-full bg-violet-500" />
              Le réseau des talents universitaires
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[78px]">
              Vos compétences méritent des{' '}
              <span className="relative text-violet-600">
                projets réels.
                <span className="absolute -bottom-2 left-1 h-2 w-[92%] -rotate-1 rounded-full bg-[#c4b5fd]/70" />
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              SkillBridge connecte étudiants, clubs, laboratoires et entreprises pour former des
              équipes complémentaires et créer des expériences qui comptent.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="primary-button justify-center px-6 py-3.5" href="#acces">
                Entrer dans la plateforme
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="secondary-button justify-center px-6 py-3.5" href="/projets">
                Explorer les projets
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <span>
                <strong className="text-slate-900">2</strong> espaces personnalisés
              </span>
              <span>
                <strong className="text-slate-900">100%</strong> orienté compétences
              </span>
              <span>
                <strong className="text-slate-900">1</strong> portfolio vivant
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-10 top-16 size-40 rounded-full bg-[#ddd6fe] blur-3xl" />
            <div className="absolute -right-12 bottom-6 size-48 rounded-full bg-violet-300 blur-3xl" />
            <div className="relative rotate-1 rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_30px_100px_rgba(48,49,80,.13)]">
              <div className="rounded-[26px] bg-[#1e1b4b] p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[.14em] text-slate-400">
                    Projet à la une
                  </span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Équipe ouverte
                  </span>
                </div>
                <h2 className="mt-8 text-3xl font-bold tracking-tight">Campus Energy Lab</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                  Une application intelligente pour mesurer et réduire la consommation énergétique
                  du campus.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Électronique', 'Communication'].map((skill) => (
                    <span
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex -space-x-2">
                    {['A', 'Y', 'M'].map((letter) => (
                      <span
                        className="grid size-9 place-items-center rounded-full border-2 border-[#1e1b4b] bg-violet-400 text-xs font-bold"
                        key={letter}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold">3 profils recherchés</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="rounded-2xl bg-violet-100 p-4">
                  <p className="text-xs font-semibold text-violet-700">Compatibilité équipe</p>
                  <p className="mt-1 text-2xl font-black text-slate-950">92%</p>
                </div>
                <div className="rounded-2xl bg-[#ede9fe] p-4">
                  <p className="text-xs font-semibold text-violet-700">Durée estimée</p>
                  <p className="mt-1 text-2xl font-black text-violet-950">8 sem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-background py-24" id="acces">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Accès immédiat, sans compte</p>
            <h2 className="section-title">Choisissez votre espace et commencez à explorer.</h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
              Aucun e-mail ni mot de passe n'est demandé. Votre choix adapte simplement le tableau
              de bord à vos objectifs.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <article
                className={`${role.color} group rounded-[28px] p-7 transition duration-300 hover:-translate-y-1`}
                key={role.number}
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm font-bold text-slate-500">{role.number}</span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                      {role.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">{role.text}</p>
                    <Link
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900"
                      href={role.href}
                    >
                      {role.action} <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-color-background py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-violet-300">Comment ça marche</p>
              <h2 className="section-title text-white">
                De la compétence à l'expérience, simplement.
              </h2>
            </div>
            <div className="divide-y divide-white/10">
              {[
                [
                  '01',
                  'Créez un profil qui vous ressemble',
                  'Formation, compétences, langues, disponibilités et objectifs : rendez votre potentiel visible.',
                ],
                [
                  '02',
                  'Trouvez la bonne collaboration',
                  'Explorez les profils, projets et opportunités grâce à des critères réellement utiles.',
                ],
                [
                  '03',
                  'Construisez et valorisez',
                  'Rejoignez une équipe, menez le projet à terme et ajoutez le résultat à votre portfolio.',
                ],
              ].map(([number, title, text]) => (
                <div className="grid gap-4 py-8 first:pt-0 sm:grid-cols-[60px_1fr]" key={number}>
                  <span className="font-mono text-sm text-violet-300">{number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-slate-500">
            Votre prochain projet commence ici
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] text-slate-950 sm:text-5xl">
            Faites de votre savoir-faire une opportunité concrète.
          </h2>
          <Link
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
            href="#acces"
          >
            Choisir mon espace <span>→</span>
          </Link>
        </div>
      </section>

      <footer className="bg-[#f5f3ff] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>
            <strong className="text-slate-900">SkillBridge</strong> — Relier les talents aux
            projets.
          </p>
          <div className="flex gap-6">
            <Link href="/projets">Projets</Link>
            <Link href="/opportunites">Opportunités</Link>
            <Link href="#acces">Entrer</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
