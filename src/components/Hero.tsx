'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy">
      <video autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        poster="/images/assets/AdobeStock_88942900.jpeg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/80 to-brand-navy-mid/60" />
      {/* Teal glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-brand-teal via-brand-mint to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-teal/8 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-8 border border-brand-teal/30 rounded-full px-4 py-2 bg-brand-teal/10">
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
            <span className="text-brand-teal text-xs font-semibold tracking-widest uppercase">{t.hero.tag}</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.02] mb-6 teal-line">
            {t.hero.headline}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/produkte/sprutcam-ency" className="btn-primary text-base px-8 py-4">
              {t.hero.cta_primary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/demo" className="btn-outline-white text-base px-8 py-4">{t.hero.cta_secondary}</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            {['Dassault Partner', 'ENCY Distributor DACH', 'Seit 1994'].map(l => (
              <div key={l} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-xs text-gray-400 font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(10,154,185,0.4)] border border-brand-teal/20">
            <Image src="/images/assets/IMG_0453-scaled-3.webp" alt="CNC" width={640} height={440} className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {[{v:'1.000+',l:'Kunden'},{v:'30+',l:'Jahre'},{v:'4',l:'Produkte'}].map(({v,l}) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-lg p-2 border border-brand-teal/20 text-center">
                  <div className="text-brand-teal font-bold text-xl font-display">{v}</div>
                  <div className="text-gray-300 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-teal/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
