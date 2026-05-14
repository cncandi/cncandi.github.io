import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
export default function ServicePage() {
  return (
    <PageLayout title="Support & Schulungen" subtitle="Individuelle Trainings und persönlicher Support">
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="font-display text-2xl text-white mb-4">Schulungen</h2>
            <div className="space-y-4">
              {[
                { img: '/images/mockup/Schulungen_01_766x573.png', title: 'Grundlagenschulung ENCY', desc: 'Einführung in die CAM-Programmierung mit ENCY — für Einsteiger und Umsteiger.' },
                { img: '/images/mockup/Schulungen_02_820x1229.png', title: 'Aufbauschulung 5-Achs', desc: 'Simultane 5-Achs-Bearbeitung und komplexe Strategien.' },
                { img: '/images/mockup/Schulungen_03_820x1229.png', title: 'Roboterprogrammierung', desc: 'Offline-Programmierung für KUKA, FANUC, ABB und andere.' },
              ].map(s => (
                <div key={s.title} data-reveal className="flex gap-4 border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5">
                  <div className="relative w-28 flex-shrink-0">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1 text-sm">{s.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white mb-4">Support</h2>
            <div className="space-y-4">
              {[
                { title: 'Persönlicher Ansprechpartner', desc: 'Direkter Kontakt zu unseren Experten — kein Callcenter, keine langen Wartezeiten.' },
                { title: 'Remote-Support', desc: 'Schnelle Hilfe per Fernzugriff — wir lösen Ihr Problem direkt an Ihrem Arbeitsplatz.' },
                { title: 'Vor-Ort-Service', desc: 'Bei komplexen Problemen kommen wir zu Ihnen — deutschlandweit.' },
              ].map(s => (
                <div key={s.title} className="border border-brand-teal/20 rounded-xl p-5 bg-white/5" data-reveal>
                  <h3 className="text-brand-teal font-semibold mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
              <Link href="/kontakt" className="block text-center bg-brand-teal text-white py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
                Support anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
