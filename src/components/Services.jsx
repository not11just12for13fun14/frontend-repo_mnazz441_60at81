import { Car, Pill, Printer } from 'lucide-react'

const services = [
  {
    name: 'Cab360',
    icon: Car,
    description: 'Book campus cabs with live tracking, ETAs, and transparent fares.',
    href: '#',
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    name: 'Medi360',
    icon: Pill,
    description: 'Order medicines with prescription uploads, approvals, and delivery.',
    href: '#',
    color: 'from-sky-500/20 to-sky-600/10',
  },
  {
    name: 'Print360',
    icon: Printer,
    description: 'Upload files, configure options, get instant quotes and delivery.',
    href: '#',
    color: 'from-violet-500/20 to-violet-600/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative -mt-24 z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ name, icon: Icon, description, href, color }) => (
          <a key={name} href={href} className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10`}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/30 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white/90" />
              </span>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
            </div>
            <p className="mt-3 text-sm text-sky-100/90">{description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-sky-300 group-hover:underline">Learn more →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
