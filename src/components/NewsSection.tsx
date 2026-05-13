'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

// Placeholder news items — replace with CMS/API data later
const news = [
  {
    date: '2026-04-15',
    tag: 'SprutCAM ENCY',
    titleDe: 'SprutCAM ENCY 17 mit erweiterter Roboter-Postprozessor-Bibliothek',
    titleEn: 'SprutCAM ENCY 17 with expanded robot postprocessor library',
    excerptDe: 'Die neue Version bringt über 200 aktualisierte Postprozessoren für gängige Roboter- und CNC-Plattformen sowie verbesserte Kollisionserkennung.',
    excerptEn: 'The new version includes over 200 updated postprocessors for common robot and CNC platforms plus improved collision detection.',
    href: '/news/sprutcam-ency-17',
  },
  {
    date: '2026-03-08',
    tag: 'P3D Slicer',
    titleDe: 'P3D Slicer 2.0: Visual Components Integration jetzt verfügbar',
    titleEn: 'P3D Slicer 2.0: Visual Components integration now available',
    excerptDe: 'Das neue Plugin verbindet P3D Slicer direkt mit Visual Components und ermöglicht vollständige Offline-Simulation des Druckprozesses.',
    excerptEn: 'The new plugin connects P3D Slicer directly with Visual Components, enabling full offline simulation of the printing process.',
    href: '/news/p3d-slicer-2-visual-components',
  },
  {
    date: '2026-02-20',
    tag: 'Event',
    titleDe: 'DTR auf der AMB 2026 – Besuchen Sie uns in Halle 5',
    titleEn: 'DTR at AMB 2026 – Visit us in Hall 5',
    excerptDe: 'Erleben Sie SprutCAM ENCY und P3D Slicer live an unseren Demonstrationsmaschinen. Live-Vorführungen täglich um 11 und 14 Uhr.',
    excerptEn: 'Experience SprutCAM ENCY and P3D Slicer live on our demo machines. Live demonstrations daily at 11 am and 2 pm.',
    href: '/news/amb-2026',
  },
]

export default function NewsSection() {
  const { t, lang } = useI18n()

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag">{t.news.heading}</span>
            <h2 className="section-heading">{t.news.heading}</h2>
          </div>
          <Link href="/news" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all">
            {t.news.all}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Thumbnail placeholder */}
              <div className="h-44 bg-brand-gray relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-brand-muted/40 text-xs">Bild {item.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-blue/30" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-blue bg-brand-blue-light px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <time className="text-xs text-brand-muted">{formatDate(item.date)}</time>
                </div>
                <h3 className="font-semibold text-brand-navy leading-snug mb-2 group-hover:text-brand-blue transition-colors">
                  {lang === 'de' ? item.titleDe : item.titleEn}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">
                  {lang === 'de' ? item.excerptDe : item.excerptEn}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/news" className="btn-outline">{t.news.all}</Link>
        </div>
      </div>
    </section>
  )
}
