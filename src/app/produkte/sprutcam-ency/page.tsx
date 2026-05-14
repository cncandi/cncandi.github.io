import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'ENCY CAM Software | DTR Reitz' }

const features = [
  { img: '/images/encycam/HSM-and-adaptive.png',     title: 'HSM & Adaptive', desc: 'Hochgeschwindigkeitsbearbeitung mit adaptiven Werkzeugwegen.' },
  { img: '/images/encycam/Multiaxis.png',            title: '5-Achs simultan', desc: 'Simultane 5-Achs-Bearbeitung komplexer Freiformflächen.' },
  { img: '/images/encycam/Mill-turn.png',            title: 'Mill-Turn', desc: 'Fräsen und Drehen in einer Aufspannung.' },
  { img: '/images/encycam/G-code-based-simulation.png', title: 'Maschinensimulation', desc: 'Vollständige Kollisionsprüfung mit Maschinenkinematik.' },
  { img: '/images/encycam/NC-code-quick-preview-scaled.jpg', title: 'NC-Code Editor', desc: 'Direktes Bearbeiten und Simulieren von NC-Programmen.' },
  { img: '/images/encycam/EDM.png',                  title: 'Drahterodieren', desc: '2- und 4-Achs-Drahterosion mit voller Konturunterstützung.' },
  { img: '/images/encycam/Lathe.png',                title: 'Drehen', desc: 'Drehen bis 25 Achsen inkl. Gegenspindel, C- und Y-Achse.' },
  { img: '/images/encycam/Rotary.png',               title: 'Rotationsbearbeitung', desc: 'Wrap-Bearbeitung und zylindrische Mehrachsoperationen.' },
]

export default function EncyPage() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/encycam/What-is-ENCY-scaled.jpg" alt="ENCY" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">CAM Software</span>
            </div>
            <div className="mb-6">
              <Image src="/images/logos/logo-encycam.png" alt="ENCY" width={180} height={60} className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">
              Die komplette CAM-Lösung für Fräsen, Drehen und Roboter
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              ENCY vereint alle Fertigungsverfahren in einer Software. Als autorisierter Distributor für den DACH-Raum bieten wir Vertrieb, Schulung und persönlichen Support aus einer Hand.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/demo" className="btn-primary">Demo anfragen</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt aufnehmen</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/encycam/State-of-art-interface.png" alt="ENCY Interface" width={640} height={420} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="section-tag justify-center">Funktionen</span>
            <h2 className="section-heading">Alle Fertigungsverfahren in einer Software</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} data-reveal data-delay={String((i % 4) + 1)} className="group rounded-2xl overflow-hidden border border-gray-100 card-glow shadow-sm">
                <div className="relative h-44 overflow-hidden bg-brand-gray">
                  <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand-navy mb-2">{f.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal="left" className="rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/encycam/State-of-art-interface-robot.png" alt="ENCY Robot" width={640} height={420} className="w-full object-cover" />
          </div>
          <div data-reveal="right">
            <span className="section-tag">Roboter-Bearbeitung</span>
            <h2 className="section-heading mb-6">ENCY Robot — Offline-Programmierung</h2>
            <p className="text-brand-muted leading-relaxed mb-6">Programmieren Sie Industrieroboter genauso wie CNC-Maschinen — mit vollständiger Kollisionsprüfung und Kinematik-Simulation. Unterstützt KUKA, FANUC, ABB, Yaskawa und viele mehr.</p>
            <Link href="/loesungen/roboter" className="btn-primary">Mehr zu Roboter-Bearbeitung</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
