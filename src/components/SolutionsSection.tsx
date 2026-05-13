'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const solutionCards = [
  { keyTitle: 'cnc_title', keyDesc: 'cnc_desc', href: '/loesungen/cnc', icon: <MillIcon />, color: 'text-brand-blue bg-brand-blue/5' },
  { keyTitle: 'robot_title', keyDesc: 'robot_desc', href: '/loesungen/roboter', icon: <RobotIcon />, color: 'text-brand-red bg-red-50' },
  { keyTitle: '5axis_title', keyDesc: '5axis_desc', href: '/loesungen/5-achs', icon: <AxisIcon />, color: 'text-amber-600 bg-amber-50' },
  { keyTitle: 'cad_title', keyDesc: 'cad_desc', href: '/loesungen/cad', icon: <DesignIcon />, color: 'text-purple-600 bg-purple-50' },
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
          {solutionCards.map((card) => (
            <Link
              key={card.keyTitle}
              href={card.href}
              className="group flex gap-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${card.color}`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy text-lg mb-2">
                  {s[card.keyTitle]}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {s[card.keyDesc]}
                </p>
                <span className="text-sm font-semibold text-brand-blue flex items-center gap-2 group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function MillIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
}
function RobotIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
}
function AxisIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
}
function DesignIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
}
