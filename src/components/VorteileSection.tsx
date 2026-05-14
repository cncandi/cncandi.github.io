'use client'
import Image from 'next/image'
import Link from 'next/link'

const checkmarks = [
  'Über 30 Jahre Erfahrung',
  'Über 1.000 zufriedene Kunden',
  'Innovative Lösungen aus einer Hand',
  'Individuelle Beratung & Support',
]

export default function VorteileSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Same stone texture bg */}
      <div className="absolute inset-0">
        <Image src="/images/mockup/homepage_03_1024x1536.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-display text-white mb-10">Ihre Vorteile mit Datentechnik Reitz</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Checkmarks */}
          <div className="space-y-4">
            {checkmarks.map(c => (
              <div key={c} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                <span className="text-white/80 text-sm">{c}</span>
              </div>
            ))}
          </div>

          {/* Customer logos */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-6 mb-4">
              <Image
                src="/images/mockup/Homepage_00_512x768.png"
                alt="BMW"
                width={80}
                height={80}
                className="h-12 w-auto object-contain filter brightness-0 invert opacity-80"
              />
              <Image
                src="/images/mockup/Homepage_01_1024x1536.png"
                alt="ROHMANN AUTOMATION"
                width={180}
                height={60}
                className="h-10 w-auto object-contain filter brightness-0 invert opacity-80"
              />
            </div>
            <Link href="/reseller" className="flex items-center gap-2 text-brand-teal text-sm font-semibold hover:gap-3 transition-all">
              Referenzen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
