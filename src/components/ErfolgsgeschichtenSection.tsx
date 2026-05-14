'use client'
import Image from 'next/image'
import Link from 'next/link'

const stories = [
  {
    img: '/images/mockup/homepage_08_1536x1024.png',
    title: 'Effiziente CNC - Programmierung',
    desc: 'Dank ENCY konnte unser Kunde die Rüstzeit einsparen',
    company: 'Heinrich Wagner Sinto Maschinenfabrik GmbH',
    href: '/news',
  },
  {
    img: '/images/mockup/homepage_09_1024x1536.png',
    title: 'Prozesse erfolgreich umgesetzt',
    desc: 'Automatisierungslösung für komplexe Fertigungsprozesse',
    company: 'Modell- und Formenbau Christian Schmidt',
    href: '/news',
  },
]

export default function ErfolgsgeschichtenSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/mockup/homepage_03_1024x1536.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-display text-white text-center mb-10">
          Praxisberichte &amp; Erfolgsgeschichten
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {stories.map(s => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-teal/50 transition-colors group">
              <div className="relative h-52 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm mb-4">{s.desc}</p>
                <Link href={s.href}
                  className="flex items-center gap-2 text-brand-teal text-sm font-semibold border border-brand-teal/30 rounded px-3 py-2 hover:bg-brand-teal/10 transition-colors w-fit">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  {s.company}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news"
            className="inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
            Alle Erfolgsgeschichten ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
