'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const features = [
  { img: '/images/encycam/HSM-and-adaptive.png',      label: 'HSM & Adaptive' },
  { img: '/images/encycam/Multiaxis.png',             label: '5-Achs simultan' },
  { img: '/images/encycam/G-code-based-simulation.png', label: 'G-Code Simulation' },
  { img: '/images/encycam/NC-code-quick-preview-scaled.jpg', label: 'NC-Code Preview' },
  { img: '/images/encycam/Mill-turn.png',             label: 'Mill-Turn' },
  { img: '/images/encycam/Lathe.png',                 label: 'Drehen' },
]

export default function EncyShowcase() {
  const { lang } = useI18n()
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split: text left, big image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-bold tracking-widest uppercase">SprutCAM ENCY</span>
            </div>
            <h2 className="font-display text-4xl text-brand-navy leading-tight mb-6">
              {lang === 'de' ? 'Die komplette CAM-Lösung für Fräsen, Drehen & Roboter' : 'Complete CAM for Milling, Turning & Robots'}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              {lang === 'de'
                ? 'SprutCAM ENCY vereint alle Fertigungsverfahren in einer Software — von der einfachen 2,5D-Kontur bis zur simultanem 5-Achs-Bearbeitung und Roboterprogrammierung.'
                : 'SprutCAM ENCY combines all manufacturing processes in one software — from simple 2.5D contours to simultaneous 5-axis machining and robot programming.'}
            </p>
            <ul className="space-y-3 mb-8">
              {(lang === 'de'
                ? ['Über 200 Postprozessoren für CNC & Roboter','Maschinensimulation mit Kollisionsprüfung','CAD-Import: STEP, IGES, Parasolid, DXF','Drehen bis 25-Achs, Fräsen 2,5D–5-Achs']
                : ['200+ postprocessors for CNC & robots','Machine simulation with collision detection','CAD import: STEP, IGES, Parasolid, DXF','Turning up to 25-axis, milling 2.5D–5-axis']
              ).map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-brand-muted">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/produkte/sprutcam-ency" className="btn-primary">
              {lang === 'de' ? 'SprutCAM ENCY entdecken' : 'Discover SprutCAM ENCY'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/encycam/State-of-art-interface.png" alt="SprutCAM ENCY Interface" width={700} height={480} className="w-full object-cover" />
            </div>
            {/* Floating feature badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">200+ Postprozessoren</div>
                  <div className="text-xs text-brand-muted">CNC & Roboter</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map(f => (
            <div key={f.label} className="group relative rounded-xl overflow-hidden aspect-square bg-brand-gray">
              <Image src={f.img} alt={f.label} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
