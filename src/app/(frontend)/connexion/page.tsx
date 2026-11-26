import Link from 'next/link'
import { Brand } from '@/components/Brand'
import Image from 'next/image'

export default function ConnexionPage() {
  return (
    <div className="auth-color-background min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Colonne gauche - Formulaire */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16">
          <div className="mb-12">
            <Brand />
          </div>

          <div className="max-w-sm">
            <p className="eyebrow mb-3">Heureux de vous revoir</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Connectez-vous à votre espace.
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Retrouvez vos projets, candidatures et nouvelles opportunités.
            </p>

            <form className="mt-10 space-y-5">
              <label className="field-label">
                Adresse email
                <input
                  className="field-input"
                  placeholder="adam@gmail.com"
                  type="email"
                />
              </label>

              <label className="field-label">
                Mot de passe
                <input
                  className="field-input"
                  placeholder="••••••••"
                  type="password"
                />
              </label>

              <Link className="primary-button w-full justify-center py-3.5 text-base" href="/dashboard">
                Accéder à mon espace
              </Link>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Pas encore membre ?{' '}
              <Link className="font-bold text-violet-600 hover:underline" href="/inscription">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>

        {/* Colonne droite - Image + Citation */}
        <div className="hidden flex-col justify-center px-12 py-16 lg:flex">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              alt="Collaboration SkillBridge"
              className="h-72 w-full object-cover"
              src="/images.jpg"
            />
          </div>
          <blockquote className="mt-10">
            <p className="text-3xl font-black leading-tight tracking-tight text-slate-900">
              « Les meilleures équipes ne se ressemblent pas. Elles se complètent. »
            </p>
            <footer className="mt-4 text-sm font-semibold text-violet-600">
              SkillBridge, la collaboration universitaire par les compétences.
            </footer>
          </blockquote>
        </div>

      </div>
    </div>
  )
}