'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden clip-diagonal-bottom bg-brand-navy">

      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          poster="/images/assets/AdobeStock_88942900.jpeg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-brand-blue/50" />
        {/* Vignette bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs><pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>
      </div>

      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-brand-red via-brand-blue to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">{t.hero.tag}</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.02] mb-6 red-line">
            {t.hero.headline}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/produkte/sprutcam-ency" className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-blue/30">
              {t.hero.cta_primary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/demo" className="btn-outline-white text-base px-8 py-4">
              {t.hero.cta_secondary}
            </Link>
          </div>

          <div className="flex flex-wrap gap-5">
            {['Dassault Partner', 'ENCY Distributor DACH', 'Seit 1994'].map(l => (
              <div key={l} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-xs text-gray-400 font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stat card */}
        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] border border-white/10">
            <Image src="/images/assets/IMG_0453-scaled-3.webp" alt="CNC Bearbeitung" width={640} height={440} className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {[{v:'1.000+',l:'Kunden'},{v:'30+',l:'Jahre'},{v:'4',l:'Produkte'}].map(({v,l}) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-lg p-2 border border-white/15 text-center">
                  <div className="text-white font-bold text-xl font-display">{v}</div>
                  <div className="text-gray-300 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
