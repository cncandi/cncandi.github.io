import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'SOLIDWORKS | DTR Reitz' }

const features = [
  { img: '/images/solidworks/productivity.jpg',    title: 'Professionelles 3D-CAD',          desc: 'Teile, Baugruppen, Zeichnungen und produktionsreife Dokumentation — intuitiv und leistungsstark.' },
  { img: '/images/solidworks/hassle-free.jpg',     title: 'Problemlose Konstruktion',        desc: 'CAD-fähiger Cloud-Speicher, vollständige Versionskontrolle und KI-gestützte Workflows.' },
  { img: '/images/solidworks/powered-by-cloud.jpg', title: 'Cloud-Zusammenarbeit',           desc: 'Echtzeit-Freigabe, 3D-Markup und sichere Dateiverwaltung ohne zusätzliche Software.' },
  { img: '/images/solidworks/community.jpg',       title: 'Intuitive Benutzeroberfläche',    desc: 'Entwickelt von Ingenieuren für Ingenieure — anpassbar an Ihre Branche und Unternehmensgröße.' },
]

export default function SolidWorksPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/solidworks/hero.webp" alt="SOLIDWORKS" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-navy/60" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-amber-500" />
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Autorisierter Reseller</span>
            </div>
            <div className="mb-6">
              <Image src="/images/logos/logo-solidworks.png" alt="SOLIDWORKS" width={220} height={60} className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">
              Die branchenführende 3D-CAD-Lösung für Konstruktion und Produktentwicklung
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              Als autorisierter SOLIDWORKS Reseller bieten wir Lizenzen, Schulungen und persönlichen Support. Kein Callcenter — direkter Draht zu Experten, die Ihre Fertigungsaufgabe verstehen.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/demo" className="btn-primary">Beratung anfragen</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt aufnehmen</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/solidworks/cover.webp" alt="SOLIDWORKS Design" width={640} height={420} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="section-tag justify-center">Funktionen</span>
            <h2 className="section-heading">Alles von der Konstruktion bis zur Fertigung</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} data-reveal data-delay={String(i + 1)} className="group rounded-2xl overflow-hidden border border-gray-100 card-glow shadow-sm">
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

      {/* Reseller section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12" data-reveal>
            <span className="section-tag justify-center">Unser Angebot</span>
            <h2 className="section-heading">Was wir als Reseller bieten</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Lizenzen', desc: 'Kauf, Miete und Subscription — wir finden das richtige Lizenzmodell für Ihr Unternehmen und Ihr Budget.' },
              { icon: '📚', title: 'Schulungen', desc: 'Grundlagen bis Experte — Präsenz- oder Online-Schulungen, an Ihren Maschinen oder bei uns in Breidenstein.' },
              { icon: '🛠', title: 'Support', desc: 'Persönlicher Ansprechpartner, kein Ticket-System. Schnell, direkt und kompetent — auf Deutsch.' },
            ].map((item, i) => (
              <div key={item.title} data-reveal data-delay={String(i + 1)} className="bg-white rounded-2xl p-8 shadow-sm card-glow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-brand-navy text-lg mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/demo" className="btn-primary">Unverbindliche Beratung anfragen</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
