import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'P3D Slicer | ENCY' }

const vorteile = [
  { img: '/images/mockup/P3D_Slicer_02_768x512.png', title: 'Multi-Planar Slicing', desc: 'Komplexe 3D-Strukturen auf bis zu 8 Achsen drucken — ohne Stützstrukturen und mit optimaler Oberflächenqualität.' },
  { img: '/images/mockup/P3D_Slicer_03_768x512.png', title: 'Non-Planar Printing', desc: 'Echtes nicht-planares Drucken für höhere Festigkeit und glattere Oberflächen gegenüber klassischem FDM.' },
  { img: '/images/mockup/P3D_Slicer_04_768x512.png', title: 'Support-Free Printing', desc: 'Intelligente Bahnplanung eliminiert Stützstrukturen und reduziert Materialverbrauch und Nacharbeit.' },
  { img: '/images/mockup/P3D_Slicer_05_768x512.png', title: 'Quality Checks', desc: 'Automatische Kollisionsprüfung und Qualitätssicherung vor jedem Druck.' },
]

const applications = [
  { img: '/images/mockup/P3D_Slicer_10_768x512.png', title: 'Bauteilgrösse', desc: 'Drucken Sie Bauteile in beliebigen Größen — von Klein bis Großserien.' },
  { img: '/images/mockup/P3D_Slicer_11_768x512.png', title: 'Alle Freiheiten', desc: 'Maximale geometrische Freiheit durch 5-Achs- und Roboter-Kinematik.' },
  { img: '/images/mockup/P3D_Slicer_12_768x512.png', title: 'Drucken auf Oberflächen', desc: 'Direkt auf bestehende Bauteile drucken — Funktionalisierung und Reparatur.' },
  { img: '/images/mockup/P3D_Slicer_13_768x512.png', title: 'Ansteuern 4. und 5. Achse', desc: 'Native Unterstützung für 4- und 5-Achs-CNC-Maschinen.' },
]

const anwendung = [
  'Prototypenbau', 'Formenbau/Modellbau', 'Medizintechnik', 'Werbetechnik',
  'Wissenschaftliche Modelle', 'Architektur', 'Kulissenbau/Kunst', 'Landschaftsbau',
  'Messebau', 'Restauration',
]

export default function P3DPage() {
  return (
    <PageLayout title="P3D Slicer" subtitle="Drucken mit bis zu 8 Achsen">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex gap-4 mb-6">
          <Link href="/demo" className="px-5 py-2.5 text-sm font-semibold border-2 border-brand-teal text-brand-teal rounded hover:bg-brand-teal hover:text-white transition-colors">Download</Link>
          <Link href="/kontakt" className="px-5 py-2.5 text-sm font-semibold border-2 border-white/30 text-white rounded hover:border-white transition-colors">Mehr erfahren</Link>
        </div>
        <p className="text-brand-teal text-sm mb-12">
          aktuelle Roboter unserer Roboterpartner · Kosten Industrieroboter
        </p>

        {/* Vorteile */}
        <h2 className="font-display text-2xl text-white mb-6">Vorteile</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {vorteile.map(v => (
            <div key={v.title} data-reveal className="flex gap-4 border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5">
              <div className="relative w-32 flex-shrink-0">
                <Image src={v.img} alt={v.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Applications with images */}
        <h2 className="font-display text-2xl text-white mb-6">Anwendungsfälle</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {applications.map(a => (
            <div key={a.title} data-reveal className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-teal/30">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{a.title}</h3>
                <p className="text-white/60 text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application tags */}
        <div className="flex flex-wrap gap-3">
          {anwendung.map(a => (
            <span key={a} className="border border-brand-teal/30 rounded-full px-4 py-1.5 text-sm text-white/70 hover:border-brand-teal hover:text-white transition-colors cursor-default">{a}</span>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
