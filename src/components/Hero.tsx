'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-robot.jpg"
          alt="Industrieroboter in der Fertigung"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
              {t.hero.tag}
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
            {t.hero.headline}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/produkte" className="btn-primary text-base px-8 py-4">
              {t.hero.cta_primary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/demo" className="btn-outline-white text-base px-8 py-4">
              {t.hero.cta_secondary}
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {['Dassault Partner','SprutCAM ENCY Distributor','DACH seit 1994'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-300 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-8 bottom-16 hidden xl:flex flex-col gap-4">
          {[{v:'1.000+',l:'Kunden DACH',a:false},{v:'30+',l:'Jahre Erfahrung',a:true}].map(({v,l,a}) => (
            <div key={l} className={`rounded-xl px-5 py-4 backdrop-blur-sm border ${a ? 'bg-brand-blue/80 border-brand-blue' : 'bg-white/10 border-white/20'}`}>
              <div className="text-2xl font-display font-bold text-white">{v}</div>
              <div className="text-xs text-gray-300 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
