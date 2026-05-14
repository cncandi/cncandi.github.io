import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Unser Team | Datentechnik Reitz' }

const services = [
  { icon: '🎯', title: 'Beratung & Projektplanung', desc: 'Von der Anforderung bis zur erfolgreichen Umsetzung' },
  { icon: '⚙️', title: 'CAD/CAM & Postprozessoren', desc: 'Optimierte Programmierleistungen' },
  { icon: '🤖', title: 'CNC & Robotik', desc: 'Automatisierung & Robotik' },
  { icon: '🎓', title: 'Schulung & Support', desc: 'Training & Unterstützung' },
]

const members = [
  { img: '/images/mockup/team_04_820x1229.png', name: 'Andreas Reitz',          role: 'Geschäftsführer' },
  { img: '/images/mockup/team_05_820x1229.png', name: 'Kira Herrmann',          role: 'Buchhaltung, Marketing' },
  { img: '/images/mockup/team_06_922x1383.png', name: 'Dieter Weder',           role: 'Buchhaltung, Forschung' },
  { img: '/images/mockup/team_08_820x1229.png', name: 'Dirk Achenbach',         role: 'Technischer Vertriebsleiter' },
  { img: '/images/mockup/team_07_820x1229.png', name: 'Christian Huber',        role: 'Support, Schulung, Anwendungstechniker' },
  { img: '/images/mockup/team_09_820x1229.png', name: 'Christian Gramann',      role: 'Support, Schulung, Anwendungstechniker' },
  { img: '/images/mockup/team_10_820x1229.png', name: 'Dr. Kakhaber Jandieri',  role: 'Softwareentwicklung' },
  { img: '/images/mockup/team_11_820x1229.png', name: 'John Huber',             role: 'Support, Fachinformatiker Anwendungsentwicklung' },
  { img: '/images/mockup/team_12_922x1383.png', name: 'Janis Pürner',           role: 'Azubi Fachinformatiker Digitale Vernetzung' },
  { img: '/images/mockup/team_13_820x1229.png', name: 'Victor Shlenkin',        role: 'Praktikant Programmierung' },
]

export default function TeamPage() {
  return (
    <PageLayout>
      {/* Hero: Text links, Foto rechts */}
      <section className="pt-20 min-h-[320px] flex items-stretch">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-4">
              Unser Team–<br />Kompetenz, die Projekte voranbringt
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
              Hinter Datentechnik Reitz steht ein Team aus Spezialisten, für CAD/CAM, CNC, Robotik und Softwareentwicklung. Wir arbeiten praxisnah, lösungsorientiert und mit klarem Fokus auf messbare Ergebnisse in der Fertigung.
            </p>
            <div className="flex gap-4">
              <Link href="/kontakt" className="px-6 py-3 text-sm font-semibold bg-brand-teal text-white rounded hover:bg-brand-teal-dark transition-colors">
                Beratung anfragen
              </Link>
              <Link href="/service" className="px-6 py-3 text-sm font-semibold border-2 border-white/30 text-white rounded hover:border-white transition-colors">
                Download
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-72 rounded-xl overflow-hidden">
            <Image src="/images/mockup/freie_stellen_01_1536x1024.png" alt="Team Meeting" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
        {/* Wir glauben an Lösungen */}
        <div className="grid lg:grid-cols-2 gap-8 items-start border-t border-white/10 pt-10">
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">Wir glauben an Lösungen, die in der Praxis funktionieren.</h2>
            <p className="text-white/50 text-sm">Von der ersten Präsentation bis zur stabilen Inbetriebnahme.</p>
          </div>
          <div className="space-y-3">
            {['Über 30 Jahre Erfahrung','Über 1.000 betreute Kunden','CAD/CAM, CNC & Robotik','Persönliche Ansprechpartner','Effiziente Umsetzung'].map(v => (
              <div key={v} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                <span className="text-white/80 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Service-Karten */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(s => (
            <div key={s.title} className="border border-white/10 rounded-xl p-5 bg-white/5 text-center">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-brand-teal font-semibold text-sm mb-2">{s.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Team-Grid */}
        <div>
          <h2 className="font-display text-2xl text-white mb-8">Unser Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {members.map(m => (
              <div key={m.name} className="text-center">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10 mb-3">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" />
                </div>
                <h3 className="text-white font-semibold text-sm">{m.name}</h3>
                <p className="text-white/50 text-xs mt-1 leading-snug">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
