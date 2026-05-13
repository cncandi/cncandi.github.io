'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const products = [
  {
    key: 'sprutcam',
    href: '/produkte/sprutcam-ency',
    badge: 'Distributor DACH',
    color: 'border-brand-blue',
    accent: 'bg-brand-blue',
    icon: <CamIcon />,
    features: ['Fräsen / Drehen / Drahterodieren', 'Roboter-Bearbeitung', 'Postprozessor-Bibliothek'],
  },
  {
    key: 'p3d',
    href: '/produkte/p3d-slicer',
    badge: 'Eigenentwicklung',
    color: 'border-brand-red',
    accent: 'bg-brand-red',
    icon: <SlicerIcon />,
    features: ['Nicht-planares 3D-Drucken', '5-Achs & Roboter', 'Visual Components Plugin'],
  },
  {
    key: 'solidworks',
    href: '/produkte/solidworks',
    badge: 'Autorisierter Reseller',
    color: 'border-amber-500',
    accent: 'bg-amber-500',
    icon: <CadIcon />,
    features: ['3D-CAD-Marktführer', 'PDM / Simulation', 'Schulung & Support'],
  },
  {
    key: 'delmia',
    href: '/produkte/delmia-catia',
    badge: 'Dassault Partner',
    color: 'border-purple-600',
    accent: 'bg-purple-600',
    icon: <SimIcon />,
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

              {/* Icon */}
              <div className="px-6 pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-gray-100 transition-colors`}>
                  {p.icon}
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

function CamIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  )
}
function SlicerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-9 5.25-9-5.25v-2.25l9-5.25 9 5.25z" />
    </svg>
  )
}
function CadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  )
}
function SimIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  )
}
