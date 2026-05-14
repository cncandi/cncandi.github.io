import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function RoboterPage() {
  const sections = [
    { title: 'Bahnplanung', desc: 'Roboterfräsen, Roboterdrucken, Roboterkleben, Roboterschweißen, Roboterschneiden, usw.', img: '/images/mockup/Roboterprogrammierung_03_1383x922.png', href: '/robotik/planung' },
    { title: 'Roboter 5- Achsen drucken', desc: 'Druck bis zu 5-Achsen, eigener Slicer, Bahnoptimierung, eigenes Extrusionssystem. Anwendbar auf jedem Roboter, usw.', img: '/images/mockup/Roboterprogrammierung_04_1383x922.png', href: '/produkte/p3d-slicer' },
    { title: 'Roboterplanung', desc: 'Aufbau kompletter Roboterzellen, Pick and Place, Simulation, API Programmierschnittstellen, 3D Einbinden in, Firmenstruktur, usw.', img: '/images/mockup/Robot_Planung_02_1076x717.png', href: '/robotik/planung' },
  ]
  return (
    <PageLayout title="Roboterprogrammierung - Automatisierung auf den Punkt gebracht"
      subtitle="Programmieren Sie Ihren Roboter in Minuten.">
      <section className="py-12 max-w-7xl mx-auto px-6">
        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🤖', title: 'Effiziente Automation', desc: 'Maximale Produktivität durch optimierte Prozesse' },
            { icon: '💻', title: 'Programmierkenntnisse', desc: 'Über 30 Jahre Erfahrung mit führenden Robotersystemen' },
            { icon: '🔄', title: 'Rundum-Service', desc: 'Maximale Produktivität durch optimierte Prozesse' },
          ].map(b => (
            <div key={b.title} className="border border-brand-teal/20 rounded-xl p-5 bg-white/5 text-center" data-reveal>
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="text-brand-teal font-semibold mb-2">{b.title}</h3>
              <p className="text-white/60 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={s.title} data-reveal className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="font-display text-2xl text-white mb-3">{s.title}</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="inline-flex items-center gap-2 px-4 py-2 border border-brand-teal/30 text-brand-teal text-sm rounded hover:bg-brand-teal/10 transition-colors">
                  weitere Informationen
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
              <div className={`rounded-xl overflow-hidden border border-brand-teal/20 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image src={s.img} alt={s.title} width={600} height={400} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* DRV Logo */}
        <div className="mt-12 border border-brand-teal/20 rounded-xl p-6 bg-white/5 text-center">
          <p className="text-white/60 text-sm mb-4">Mitglied im deutschen Robotik Verband...</p>
          <div className="inline-flex items-center gap-3 bg-white rounded-lg px-6 py-3">
            <Image src="/images/assets/drv-logo.png" alt="Deutscher Robotik Verband" width={160} height={50} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
