'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const products = [
  {
    key: 'sprutcam', href: '/produkte/sprutcam-ency', badge: 'Distributor DACH',
    color: 'border-brand-blue', accent: 'bg-brand-blue', accentText: 'text-brand-blue',
    logo: '/images/logos/logo-encycam.png',
    image: '/images/encycam/State-of-art-interface.png',
    features: ['5-Achs-Fräsen & Drehen','Roboter-Bearbeitung','Maschinensimulation'],
  },
  {
    key: 'p3d', href: '/produkte/p3d-slicer', badge: 'Eigenentwicklung',
    color: 'border-brand-red', accent: 'bg-brand-red', accentText: 'text-brand-red',
    logo: '/images/logos/logo-p3d.png',
    image: '/images/assets/P3D-Multi-Achsen-Slicer.png',
    features: ['Nicht-planares 3D-Drucken','5-Achs & Roboter','Visual Components Plugin'],
  },
  {
    key: 'solidworks', href: '/produkte/solidworks', badge: 'Autorisierter Reseller',
    color: 'border-amber-500', accent: 'bg-amber-500', accentText: 'text-amber-600',
    logo: '/images/logos/logo-solidworks.png',
    image: '/images/assets/bild.png',
    features: ['3D-CAD-Marktführer','PDM / Simulation','Schulung & Support'],
  },
  {
    key: 'delmia', href: '/produkte/delmia-catia', badge: 'Dassault Partner',
    color: 'border-purple-600', accent: 'bg-purple-600', accentText: 'text-purple-600',
    logo: null,
    image: '/images/assets/Screenshot-2026-03-31-160905.png',
    features: ['Digitale Fabrik','Robotersimulation','CATIA-Konstruktion'],
  },
]

export default function ProductGrid() {
  const { t } = useI18n()
  const descs: Record<string,string> = {
    sprutcam: t.products.sprutcam_desc, p3d: t.products.p3d_desc,
    solidworks: t.products.solidworks_desc, delmia: t.products.delmia_desc,
  }
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">{t.products.heading}</span>
          <h2 className="section-heading mb-4">{t.products.heading}</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">{t.products.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map(p => (
            <Link key={p.key} href={p.href}
              className={`group flex flex-col bg-white rounded-2xl border-t-4 ${p.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
              {/* Screenshot */}
              <div className="relative h-44 bg-brand-gray overflow-hidden">
                <Image src={p.image} alt={p.key} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-0.5 rounded ${p.accent}`}>{p.badge}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="h-8 mb-3">
                  {p.logo
                    ? <Image src={p.logo} alt={p.key} width={120} height={32} className="h-7 w-auto object-contain" />
                    : <span className="font-bold text-brand-navy">DELMIA / CATIA</span>}
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{descs[p.key]}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-brand-muted">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent}`} />{f}
                    </li>
                  ))}
                </ul>
                <span className={`text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all ${p.accentText}`}>
                  {t.products.learn_more}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
