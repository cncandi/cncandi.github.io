'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const features = [
  {img:'/images/encycam/HSM-and-adaptive.png',     label:'HSM & Adaptive'},
  {img:'/images/encycam/Multiaxis.png',            label:'5-Achs simultan'},
  {img:'/images/encycam/G-code-based-simulation.png', label:'G-Code Simulation'},
  {img:'/images/encycam/NC-code-quick-preview-scaled.jpg', label:'NC-Code Preview'},
  {img:'/images/encycam/Mill-turn.png',            label:'Mill-Turn'},
  {img:'/images/encycam/EDM.png',                  label:'Drahterodieren'},
]

export default function EncyShowcase() {
  const { lang } = useI18n()
  return (
    <section className="py-28 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Image side */}
          <div data-reveal="left" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <Image src="/images/encycam/State-of-art-interface.png" alt="SprutCAM ENCY" width={700} height={480} className="w-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                </div>
                <div>
                  <div className="font-bold text-brand-navy text-sm">200+ Postprozessoren</div>
                  <div className="text-brand-muted text-xs">CNC & Roboter ready</div>
                </div>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-brand-blue/15 -z-10" />
          </div>

          {/* Text side */}
          <div data-reveal="right">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="text-brand-blue text-xs font-bold tracking-widest uppercase">SprutCAM ENCY</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-brand-navy leading-tight mb-6 red-line">
              {lang==='de' ? 'Die komplette CAM-Lösung für Fräsen, Drehen & Roboter' : 'Complete CAM for Milling, Turning & Robots'}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              {lang==='de'
                ? 'SprutCAM ENCY vereint alle Fertigungsverfahren in einer Software — von einfacher 2,5D-Kontur bis simultaner 5-Achs-Bearbeitung und Roboterprogrammierung. Wir sind autorisierter Distributor für den DACH-Raum.'
                : 'SprutCAM ENCY combines all manufacturing processes in one software — from simple 2.5D contours to simultaneous 5-axis and robot programming. We are the authorised distributor for the DACH region.'}
            </p>
            <ul className="space-y-3 mb-8">
              {(lang==='de'
                ? ['200+ Postprozessoren für CNC & Roboter','Vollständige Maschinensimulation mit Kollisionsprüfung','CAD-Import: STEP, IGES, Parasolid, SolidWorks, CATIA','Drehen bis 25-Achs · Fräsen 2,5D bis 5-Achs simultan']
                : ['200+ postprocessors for CNC & robots','Full machine simulation with collision detection','CAD import: STEP, IGES, Parasolid, SolidWorks, CATIA','Turning to 25-axis · Milling 2.5D to simultaneous 5-axis']
              ).map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-brand-muted">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/produkte/sprutcam-ency" className="btn-primary">
              {lang==='de' ? 'SprutCAM ENCY entdecken' : 'Discover SprutCAM ENCY'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>

        {/* Feature image grid */}
        <div data-reveal className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {features.map((f,i) => (
            <div key={f.label} data-reveal data-delay={String(i+1)} className="group relative rounded-xl overflow-hidden aspect-square img-zoom cursor-default">
              <Image src={f.img} alt={f.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs font-semibold text-center leading-tight">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
