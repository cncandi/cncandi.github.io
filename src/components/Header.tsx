'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const nav = [
  { key: 'ency', label: 'ENCY CAM', items: [
    { label: 'CAD/CAM Software',        href: '/produkte/sprutcam-ency' },
    { label: '2.5D Fräsbearbeitung',    href: '/ency/2-5d-fraesen' },
    { label: '3D Fräsbearbeitung',      href: '/ency/3d-fraesen' },
    { label: 'Simultanfräsen',          href: '/ency/simultanfraesen' },
    { label: 'Drehen',                  href: '/ency/drehen' },
    { label: 'Erodieren',               href: '/ency/erodieren' },
    { label: 'Maschinensimulation',     href: '/ency/maschinensimulation' },
    { label: 'Funktionsmatrix',         href: '/ency/funktionsmatrix' },
  ]},
  { key: 'robotik', label: 'Robotik', items: [
    { label: 'Roboterprogrammierung',   href: '/robotik/programmierung' },
    { label: 'Robot Planung',           href: '/robotik/planung' },
    { label: 'P3D Slicer',             href: '/produkte/p3d-slicer' },
  ]},
  { key: 'produkte', label: 'Weitere Produkte', items: [
    { label: 'SolidWorks',             href: '/produkte/solidworks' },
    { label: 'DELMIA / CATIA',         href: '/produkte/delmia-catia' },
  ]},
  { key: 'service', label: 'Service', items: [
    { label: 'Support & Schulungen',   href: '/service' },
    { label: 'Resellerprogramm',       href: '/unternehmen/reseller' },
    { label: 'Sonderentwicklung',      href: '/unternehmen/sonderentwicklung' },
  ]},
  { key: 'unternehmen', label: 'Unternehmen', items: [
    { label: 'Über uns',               href: '/ueber-uns' },
    { label: 'Team',                   href: '/unternehmen/team' },
    { label: 'Forschung',              href: '/unternehmen/forschung' },
    { label: 'Freie Stellen',          href: '/unternehmen/jobs' },
  ]},
  { key: 'news', label: 'News', href: '/news' },
]

export default function Header() {
  const { lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const open = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveDropdown(key) }
  const close = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 220) }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/96 backdrop-blur-sm py-3'}`}>
      {/* Teal top bar */}
      <div className="h-1 bg-gradient-to-r from-brand-teal via-brand-mint to-brand-blue absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mt-1">
        <Link href="/">
          <Image src="/images/logos/logo-dtr.png" alt="DTR Reitz" width={160} height={50} className="h-10 w-auto object-contain" priority />
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {nav.map(item => (
            <div key={item.key} className="relative"
              onMouseEnter={() => item.items && open(item.key)}
              onMouseLeave={() => item.items && close()}>
              {item.href
                ? <Link href={item.href} className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-teal transition-colors rounded-lg hover:bg-brand-teal-light">{item.label}</Link>
                : <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeDropdown === item.key ? 'text-brand-teal bg-brand-teal-light' : 'text-brand-navy hover:text-brand-teal hover:bg-brand-teal-light'}`}>
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
              }
              {item.items && activeDropdown === item.key && (
                <div className="absolute top-full left-0 pt-1 z-50"
                  onMouseEnter={() => open(item.key)} onMouseLeave={close}>
                  <div className="w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 animate-fade-in">
                    {item.items.map(sub => (
                      <Link key={sub.href} href={sub.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-brand-navy hover:bg-brand-teal-light hover:text-brand-teal transition-colors"
                        onClick={() => setActiveDropdown(null)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <div className="flex items-center gap-0.5 text-xs font-bold border border-gray-200 rounded-lg overflow-hidden">
            <button onClick={() => setLang('de')} className={`px-2.5 py-1.5 transition-colors ${lang === 'de' ? 'bg-brand-teal text-white' : 'text-brand-muted hover:bg-gray-50'}`}>DE</button>
            <button onClick={() => setLang('en')} className={`px-2.5 py-1.5 transition-colors ${lang === 'en' ? 'bg-brand-teal text-white' : 'text-brand-muted hover:bg-gray-50'}`}>EN</button>
          </div>
          <Link href="/kontakt" className="btn-primary text-xs px-4 py-2">Kontakt</Link>
          <Link href="/demo" className="btn-secondary text-xs px-4 py-2">Demo anfragen</Link>
        </div>

        <button className="xl:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t bg-white max-h-screen overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {nav.map(item => (
              <div key={item.key}>
                {item.href
                  ? <Link href={item.href} className="block py-2.5 text-sm font-medium text-brand-navy" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  : <><div className="py-2 text-xs font-bold text-brand-teal uppercase tracking-wide">{item.label}</div>
                    {item.items?.map(sub => <Link key={sub.href} href={sub.href} className="block py-2 pl-4 text-sm text-brand-muted" onClick={() => setMobileOpen(false)}>{sub.label}</Link>)}</>
                }
              </div>
            ))}
            <div className="pt-4 flex gap-2">
              <Link href="/kontakt" className="btn-primary text-xs flex-1 justify-center" onClick={() => setMobileOpen(false)}>Kontakt</Link>
              <Link href="/demo" className="btn-secondary text-xs flex-1 justify-center" onClick={() => setMobileOpen(false)}>Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
