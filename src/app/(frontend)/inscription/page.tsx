import Link from 'next/link'
import { Brand } from '@/components/Brand'

export default function InscriptionPage() {
  return (
    <div className="auth-color-background min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Colonne gauche - Formulaire */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16">
          <div className="mb-10">
            <Brand />
          </div>

          <div className="max-w-sm">
            <p className="eyebrow mb-3">Rejoindre SkillBridge</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Créez votre point de départ.
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Un profil, des compétences visibles et des collaborations qui prennent vie.
            </p>

            <form className="mt-8 space-y-5">
              <label className="field-label">
                Nom complet ou organisation
                <input
                  className="field-input"
                  placeholder="Ex. Amira Ben Salem"
                  type="text"
                />
              </label>

              <label className="field-label">
                Type de compte
                <select className="field-input">
                  <option>Étudiant</option>
                  <option>Enseignant</option>
                  <option>Laboratoire</option>
                  <option>Entreprise</option>
                </select>
              </label>

              <label className="field-label">
                Établissement ou organisation
                <input
                  className="field-input"
                  placeholder="Ex. Université de Tunis, ISTMT"
                  type="text"
                />
              </label>

              <label className="field-label">
                Adresse email
                <input
                  className="field-input"
                  placeholder="vous@exemple.tn"
                  type="email"
                />
              </label>

              <label className="field-label">
                Mot de passe
                <input
                  className="field-input"
                  placeholder="8 caractères minimum"
                  type="password"
                />
              </label>

              <button
                className="primary-button w-full justify-center py-3.5 text-base"
                type="submit"
              >
                Créer mon compte →
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Déjà membre ?{' '}
              <Link className="font-bold text-violet-600 hover:underline" href="/connexion">
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        {/* Colonne droite - Cards + Image */}
        <div className="hidden flex-col justify-center gap-4 px-10 py-16 lg:flex">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 01 - Profil violet */}
            <div className="rounded-2xl bg-violet-600 p-6 text-white">
              <span className="text-xs font-mono text-violet-300">01</span>
              <h3 className="mt-2 text-2xl font-black">Profil</h3>
              <p className="mt-1 text-sm text-violet-200">Rendez vos compétences visibles</p>
            </div>

            {/* Card 02 - Équipe bleu clair */}
            <div className="rounded-2xl bg-blue-100 p-6">
              <span className="text-xs font-mono text-blue-400">02</span>
              <h3 className="mt-2 text-2xl font-black text-slate-900">Équipe</h3>
              <p className="mt-1 text-sm text-slate-500">Trouvez des profils complémentaires</p>
            </div>

            {/* Card 03 - Projet sombre */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <span className="text-xs font-mono text-slate-400">03</span>
              <h3 className="mt-2 text-2xl font-black">Projet</h3>
              <p className="mt-1 text-sm text-slate-400">Apprenez par la pratique</p>
            </div>

            {/* Card 04 - Portfolio sombre */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <span className="text-xs font-mono text-slate-400">04</span>
              <h3 className="mt-2 text-2xl font-black">Portfolio</h3>
              <p className="mt-1 text-sm text-slate-400">Valorisez chaque réalisation</p>
            </div>
          </div>

          {/* Image en bas avec texte overlay */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              alt="SkillBridge collaboration"
              className="h-48 w-full object-cover"
              src="/images.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-lg font-black text-white">
                Les talents créent l'avenir ensemble.
              </p>
              <p className="text-xs text-slate-300">SkillBridge · Collaborer autrement</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}