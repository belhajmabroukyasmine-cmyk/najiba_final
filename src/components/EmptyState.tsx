import Link from 'next/link'

export function EmptyState({
  title,
  description,
  href,
  action,
}: {
  title: string
  description: string
  href?: string
  action?: string
}) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-14 text-center">
      <div className="mx-auto mb-5 grid size-12 place-items-center rounded-2xl bg-amber-100 font-black text-orange-600">
        S
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
      {href && action && (
        <Link className="primary-button mt-6" href={href}>
          {action}
        </Link>
      )}
    </div>
  )
}
