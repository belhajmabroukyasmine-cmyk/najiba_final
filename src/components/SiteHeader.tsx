import Link from 'next/link'
import { Brand } from '@/components/Brand'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <Link className="transition hover:text-slate-950" href="/talents">
            Talents
          </Link>
          <Link className="transition hover:text-slate-950" href="/projets">
            Projets
          </Link>
          <Link className="transition hover:text-slate-950" href="/opportunites">
            Opportunités
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 sm:block"
            href="/connexion"
          >
            Se connecter
          </Link>
          <Link className="primary-button" href="/inscription">
            Créer un compte
          </Link>
        </div>
      </div>
    </header>
  )
}
