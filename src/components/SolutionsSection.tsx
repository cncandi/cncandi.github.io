'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const solutions = [
  {
    keyTitle: 'cnc_title', keyDesc: 'cnc_desc', href: '/loesungen/cnc',
    image: '/images/encycam/Milling.png',
    color: 'text-brand-blue', bg: 'bg-brand-blue/5',
  },
  {
    keyTitle: 'robot_title', keyDesc: 'robot_desc', href: '/loesungen/roboter',
    image: '/images/encycam/Full-robotic-cell-simulation.png',
    color: 'text-brand-red', bg: 'bg-red-50',
  },
  {
    keyTitle: '5axis_title', keyDesc: '5axis_desc', href: '/loesungen/5-achs',
    image: '/images/encycam/Multiaxis.png',
    color: 'text-amber-600', bg: 'bg-amber-50',
  },
  {
    keyTitle: 'cad_title', keyDesc: 'cad_desc', href: '/loesungen/cad',
    image: '/images/encycam/Parametric-CAD.jpg',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
] as const

export default function SolutionsSection() {
  const { t } = useI18n()
  const s = t.solutions
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="section-tag">{s.heading}</span>
          <h2 className="section-heading mb-4">{s.heading}</h2>
          <p className="text-brand-muted">{s.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map(card => (
            <Link key={card.keyTitle} href={card.href}
              className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="relative w-44 flex-shrink-0">
                <Image src={card.image} alt={s[card.keyTitle]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{s[card.keyTitle]}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{s[card.keyDesc]}</p>
                <span className={`text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all ${card.color}`}>
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
