'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/assets/AdobeStock_88942900.jpeg" alt="Industrielle Fertigung" fill className="object-cover" priority quality={85} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/75 to-brand-navy/40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-transparent z-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">{t.hero.tag}</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-white leading-[1.05] mb-6">{t.hero.headline}</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/produkte" className="btn-primary text-base px-8 py-4">
              {t.hero.cta_primary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/demo" className="btn-outline-white text-base px-8 py-4">{t.hero.cta_secondary}</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {['Dassault Partner','SprutCAM ENCY Distributor','DACH seit 1994'].map(l => (
              <div key={l} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-xs text-gray-300 font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image card */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/assets/IMG_0453-scaled-3.webp" alt="CNC Bearbeitung" width={600} height={420} className="object-cover w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-3">
              {[{v:'1.000+',l:'Kunden'},{v:'30+',l:'Jahre'},{v:'4',l:'Produkte'}].map(({v,l}) => (
                <div key={l} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 flex-1 text-center">
                  <div className="text-white font-bold text-lg font-display">{v}</div>
                  <div className="text-gray-300 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
