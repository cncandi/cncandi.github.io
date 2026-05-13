'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function CTASection() {
  const { t } = useI18n()
  const c = t.cta

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-blue/10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-brand-red/10 -translate-x-1/2 translate-y-1/2" />
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-0.5 bg-brand-red" />
          <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
            CAD/CAM Systeme Datentechnik Reitz
          </span>
          <div className="w-8 h-0.5 bg-brand-red" />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-white mb-6 leading-tight">
          {c.heading}
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          {c.sub}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/demo" className="btn-primary text-base px-8 py-4">
            {c.btn_demo}
          </Link>
          <Link href="/kontakt" className="btn-outline-white text-base px-8 py-4">
            {c.btn_contact}
          </Link>
        </div>

        {/* Contact info strip */}
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <a href="tel:+4964617593437" className="hover:text-white transition-colors flex items-center gap-2">
            <PhoneIcon />
            +49 6461 7593437
          </a>
          <a href="mailto:reitz@cnc-technik.de" className="hover:text-white transition-colors flex items-center gap-2">
            <MailIcon />
            reitz@cnc-technik.de
          </a>
          <span className="flex items-center gap-2">
            <LocationIcon />
            Breidenstein · Marburg
          </span>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
function MailIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
}
function LocationIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
}
