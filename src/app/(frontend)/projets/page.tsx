import { SiteHeader } from '@/components/SiteHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/skillbridge'

export default function ProjectsPage() {
  return (
    <main className="colorful-page min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-violet-500/30 bg-slate-950 text-white">
        <div className="absolute -left-20 -top-36 size-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-36 right-1/4 size-80 rounded-full bg-purple-300/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="eyebrow text-violet-400">Projets collaboratifs</p>
          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h1 className="max-w-3xl text-4xl font-black tracking-[-.045em] text-white sm:text-5xl">
              Rejoignez une idée qui a besoin de vous.
            </h1>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Des équipes pluridisciplinaires se forment autour de défis concrets.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}
