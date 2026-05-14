'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const news = [
  {
    date: '2026-04-10', tag: 'News',
    image: '/images/assets/image-4.png',
    titleDe: 'MachineMAKER: Layout-Software für Roboter-Integratoren',
    titleEn: 'MachineMAKER: Layout software for robot integrators',
    excerptDe: 'Effiziente Planung von Roboterzellen mit der neuen Layout-Software. Jetzt als Partner verfügbar.',
    excerptEn: 'Efficient robot cell planning with the new layout software. Now available as a partner.',
    href: '/news/machinemakerde',
  },
  {
    date: '2026-03-31', tag: 'P3D Slicer',
    image: '/images/assets/Screenshot-2026-03-31-160905.png',
    titleDe: 'P3D Slicer & IIQWorks: Neue Integration verfügbar',
    titleEn: 'P3D Slicer & IIQWorks: New integration available',
    excerptDe: 'Die Verbindung von P3D Slicer mit IIQWorks eröffnet neue Möglichkeiten in der Roboter-Programmierung.',
    excerptEn: 'Connecting P3D Slicer with IIQWorks opens up new possibilities in robot programming.',
    href: '/news/p3d-iiqworks',
  },
  {
    date: '2026-03-13', tag: 'ENCY',
    image: '/images/encycam/What-is-ENCY-scaled.jpg',
    titleDe: 'Strukturgruppen in ENCY CAM — effizientere Programmierung',
    titleEn: 'Structure groups in ENCY CAM — more efficient programming',
    excerptDe: 'Strukturgruppen ermöglichen eine übersichtlichere Organisation von Bearbeitungsoperationen in komplexen Projekten.',
    excerptEn: 'Structure groups allow better organisation of machining operations in complex projects.',
    href: '/news/strukturgruppen-encycam',
  },
]

export default function NewsSection() {
  const { t, lang } = useI18n()
  const fmt = (iso: string) => new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(item => (
            <Link key={item.href} href={item.href}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="relative h-48 overflow-hidden bg-brand-gray">
                <Image src={item.image} alt={item.titleDe} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-blue bg-brand-blue-light px-2 py-0.5 rounded">{item.tag}</span>
                  <time className="text-xs text-brand-muted">{fmt(item.date)}</time>
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
      </div>
    </section>
  )
}
