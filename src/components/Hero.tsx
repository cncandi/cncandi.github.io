'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Large blue shape right */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-gray clip-hero" />
        {/* Blue accent bar */}
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-transparent" />
        {/* Grid pattern overlay */}
        <svg className="absolute right-0 top-0 w-1/2 h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0057B8" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Large decorative circle */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-brand-blue/10" />
        <div className="absolute right-24 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-brand-red/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
              {t.hero.tag}
            </span>
          </div>

          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-brand-navy leading-[1.1] mb-6">
            {t.hero.headline}
          </h1>

          <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-lg">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/produkte" className="btn-primary text-base px-8 py-4">
              {t.hero.cta_primary}
              <ArrowIcon />
            </Link>
            <Link href="/demo" className="btn-outline text-base px-8 py-4">
              {t.hero.cta_secondary}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <TrustBadge label="Dassault Partner" />
            <TrustBadge label="SprutCAM ENCY Distributor" />
            <TrustBadge label="DACH seit 1994" />
          </div>
        </div>

        {/* Visual side — placeholder for hero image/animation */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-lg">
            {/* Placeholder for hero visual / 3D render / screenshot */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-brand-blue/5 rounded-2xl flex items-center justify-center">
                  <CncIcon />
                </div>
                <p className="text-brand-muted text-sm">Hero-Bild / Screenshot</p>
                <p className="text-brand-muted/60 text-xs mt-1">z.B. SprutCAM UI oder CNC-Maschine</p>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-2xl font-display font-bold text-brand-blue">1.000+</div>
              <div className="text-xs text-brand-muted mt-0.5">Kunden im DACH-Raum</div>
            </div>
            {/* Floating year card */}
            <div className="absolute -top-4 -right-4 bg-brand-blue rounded-xl shadow-xl p-4 text-white">
              <div className="text-2xl font-display font-bold">30+</div>
              <div className="text-xs opacity-80 mt-0.5">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-xs text-brand-muted font-medium">{label}</span>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function CncIcon() {
  return (
    <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
}
