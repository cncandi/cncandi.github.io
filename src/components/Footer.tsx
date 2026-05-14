'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Teal top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-teal via-brand-mint to-brand-blue" />
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image src="/images/logos/logo-dtr.png" alt="DTR Reitz" width={160} height={50} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-5 max-w-xs">CAD/CAM & Robotics Software seit 1994</p>
            <div className="flex items-center gap-3">
              {[
                {href:'https://cnc-technik.de/linkedin', label:'LinkedIn', d:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
                {href:'https://cnc-technik.de/youtube', label:'YouTube', d:'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'},
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-brand-muted hover:border-brand-teal hover:text-brand-teal transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-4">ENCY CAM</h4>
            <ul className="space-y-2">
              {[['CAD/CAM Software','/produkte/sprutcam-ency'],['2.5D Fräsbearbeitung','/ency/2-5d-fraesen'],['Simultanfräsen','/ency/simultanfraesen'],['Maschinensimulation','/ency/maschinensimulation'],['Roboterprogrammierung','/robotik/programmierung'],['P3D Slicer','/produkte/p3d-slicer']].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-sm text-brand-muted hover:text-brand-teal transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              {[[t.footer.about,'/ueber-uns'],['Team','/unternehmen/team'],['Forschung','/unternehmen/forschung'],['Service & Schulungen','/service'],[t.footer.contact_page,'/kontakt'],[t.footer.imprint,'/impressum'],[t.footer.privacy,'/datenschutz']].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-sm text-brand-muted hover:text-brand-teal transition-colors">{l}</Link></li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-brand-muted space-y-1">
              <div>Perfstraße 2 · 35216 Breidenstein</div>
              <a href="tel:+4964617593437" className="hover:text-brand-teal transition-colors block">+49 6461 7593437</a>
              <a href="mailto:reitz@cnc-technik.de" className="hover:text-brand-teal transition-colors block">reitz@cnc-technik.de</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">© {year} CAD/CAM Systeme Datentechnik Reitz GmbH & Co. KG. {t.footer.rights}</p>
          <div className="flex items-center gap-6 text-xs text-brand-muted">
            <Link href="/impressum" className="hover:text-brand-teal transition-colors">{t.footer.imprint}</Link>
            <Link href="/datenschutz" className="hover:text-brand-teal transition-colors">{t.footer.privacy}</Link>
            <Link href="/agb" className="hover:text-brand-teal transition-colors">{t.footer.legal}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
