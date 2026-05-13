'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const products = [
  {
    key: 'sprutcam',
    href: '/produkte/sprutcam-ency',
    badge: 'Distributor DACH',
    color: 'border-brand-blue',
    accent: 'bg-brand-blue',
    logo: '/images/logos/logo-encycam.png',
    features: ['Fräsen / Drehen / Drahterodieren', 'Roboter-Bearbeitung', 'Postprozessor-Bibliothek'],
  },
  {
    key: 'p3d',
    href: '/produkte/p3d-slicer',
    badge: 'Eigenentwicklung',
    color: 'border-brand-red',
    accent: 'bg-brand-red',
    logo: '/images/logos/logo-p3d.png',
    features: ['Nicht-planares 3D-Drucken', '5-Achs & Roboter', 'Visual Components Plugin'],
  },
  {
    key: 'solidworks',
    href: '/produkte/solidworks',
    badge: 'Autorisierter Reseller',
    color: 'border-amber-500',
    accent: 'bg-amber-500',
    logo: '/images/logos/logo-solidworks.png',
    features: ['3D-CAD-Marktführer', 'PDM / Simulation', 'Schulung & Support'],
  },
  {
    key: 'delmia',
    href: '/produkte/delmia-catia',
    badge: 'Dassault Partner',
    color: 'border-purple-600',
    accent: 'bg-purple-600',
    logo: null,
    features: ['Digitale Fabrik', 'Robotersimulation', 'CATIA-Konstruktion'],
  },
]

export default function ProductGrid() {
  const { t } = useI18n()
  const pd = t.products

  const descriptions: Record<string, string> = {
    sprutcam: pd.sprutcam_desc,
    p3d:      pd.p3d_desc,
    solidworks: pd.solidworks_desc,
    delmia:   pd.delmia_desc,
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">{pd.heading}</span>
          <h2 className="section-heading mb-4">{pd.heading}</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">{pd.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className={`group relative flex flex-col bg-white rounded-2xl border-t-4 ${p.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Badge */}
              <div className="px-6 pt-6">
                <span className={`inline-block text-white text-xs font-semibold px-2 py-0.5 rounded ${p.accent} mb-4`}>
                  {p.badge}
                </span>
              </div>

              {/* Logo */}
              <div className="px-6 pb-4">
                <div className="h-12 flex items-center">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={t.nav.products_items[p.key as keyof typeof t.nav.products_items]}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-bold text-lg text-brand-navy">DELMIA / CATIA</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-1">
                {/* Product name from translation key */}
                <h3 className="font-semibold text-brand-navy text-lg mb-2">
                  {t.nav.products_items[p.key as keyof typeof t.nav.products_items]}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">
                  {descriptions[p.key]}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-brand-muted">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="text-sm font-semibold text-brand-blue group-hover:gap-3 flex items-center gap-2 transition-all">
                  {pd.learn_more}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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


