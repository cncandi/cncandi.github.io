import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Über uns | DTR Reitz' }
export default function UeberUnsPage() {
  return (
    <PageLayout>
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div data-reveal="left">
              <span className="section-tag">Über uns</span>
              <h1 className="section-heading mb-6">CAD/CAM-Experten seit 1994</h1>
              <p className="text-brand-muted leading-relaxed mb-4">CAD/CAM Systeme Datentechnik Reitz GmbH & Co. KG steht seit über 30 Jahren für kompetente Beratung und persönlichen Support rund um CAD, CAM und Robotik.</p>
              <p className="text-brand-muted leading-relaxed mb-4">Wir vertreiben ENCY im DACH-Raum, entwickeln P3D Slicer für nicht-planares 3D-Drucken und sind autorisierter Reseller für SolidWorks, DELMIA und CATIA.</p>
              <p className="text-brand-muted leading-relaxed">Unsere Stärke: kein Callcenter, kein Ticket-System — sondern ein direkter Draht zu Experten, die Ihre Fertigungsaufgabe verstehen.</p>
            </div>
            <div data-reveal="right" className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image src="/images/assets/IMG_0453-scaled-3.webp" alt="DTR Reitz" width={700} height={300} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/assets/Andreas.png" alt="Andreas Reitz" width={300} height={300} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/assets/Dieter.png" alt="Team" width={300} height={300} className="w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6" data-reveal>
            {[{v:'1994',l:'Gründungsjahr'},{v:'1.000+',l:'Kunden im DACH-Raum'},{v:'4',l:'Softwareprodukte'}].map(s => (
              <div key={s.l} className="bg-brand-navy rounded-2xl p-8 text-center text-white">
                <div className="font-display text-5xl font-bold mb-2">{s.v}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
