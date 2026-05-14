import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'News | ENCY' }

const featured = [
  { img: '/images/mockup/News_05_1076x717.png', title: 'Bauteil kopieren in ENCY – Teilekopie für Varianten und Mehrteil-Projekte', desc: 'Varianten gehören in der CNC-Fertigung zum Alltag. Kaum ein Bauteil bleibt unverändert – Bohren werden angepasst, Konturen modifiziert oder Aufspannungen', href: '/news/bauteil-kopieren' },
  { img: '/images/mockup/News_06_1076x717.png', title: 'Bauteilgruppen in ENCY – wie Mehrteil-Projekte übersichtlich bleiben', desc: 'Sobald CNC-Projekte mehr als ein einzelnes Bauteil umfassen, ändert sich die Herausforderung grundlegend. Es geht nicht mehr nur darum, Werkzeugwege', href: '/news/bauteilgruppen' },
  { img: '/images/mockup/News_07_1076x717.png', title: '„Von der Simulation zur Realität – Präzisionsfräsen mit FANUC und ENCY."', desc: 'Erfolgreiche Installation eines FANUC Fräsroboters in der Nähe von Münster: Mit anwendungsspezifischer Software von Datentechnik Reitz und ENCY Simulation wurde die', href: '/news/fanuc-praezisionsfraesen' },
]

const more = [
  '/images/mockup/News_02_438x389.png',
  '/images/assets/P3D-Multi-Achsen-Slicer.png',
  '/images/mockup/homepage_08_1536x1024.png',
  '/images/mockup/homepage_09_1024x1536.png',
]

export default function NewsPage() {
  return (
    <PageLayout title="News" subtitle="Aktuelle Nachrichten und Ergebnisse">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <p className="text-white/60 text-sm mb-10">
          Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Projekten und Tipps von Datentechnik Reitz.
        </p>

        {/* Featured articles */}
        <div className="space-y-6 mb-12">
          {featured.map(a => (
            <div key={a.title} data-reveal className="grid md:grid-cols-3 gap-6 border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5">
              <div className="relative h-48 md:h-auto">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>
              <div className="md:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{a.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{a.desc}</p>
                </div>
                <Link href={a.href} className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-brand-teal/30 text-brand-teal text-sm rounded hover:bg-brand-teal/10 transition-colors w-fit">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  mehr Erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Weitere News */}
        <h2 className="font-display text-xl text-white mb-6">Weitere News</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {more.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-brand-teal/20 group cursor-pointer">
              <Image src={img} alt={`News ${i+1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-brand-navy/60 flex items-end p-3">
                <span className="text-brand-teal text-xs font-semibold border border-brand-teal/40 px-2 py-1 rounded hover:bg-brand-teal/20 transition-colors">mehr Erfahren</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-brand-teal text-white px-8 py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
            alle News
          </button>
        </div>
      </section>
    </PageLayout>
  )
}
