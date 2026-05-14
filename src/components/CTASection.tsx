'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/mockup/homepage_03_1024x1536.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/85" />
      </div>
      <div className="relative z-10 text-center">
        <h2 className="font-display text-4xl text-white mb-8">
          Bereit für die Zukunft der Fertigung?
        </h2>
        <Link href="/kontakt"
          className="inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-4 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
          Jetzt Kontakt aufnehmen
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </Link>
      </div>
    </section>
  )
}
