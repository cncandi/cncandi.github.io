'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(key)
  }

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 220)
  }

  const navItems = [
    {
      key: 'products', label: t.nav.products,
      items: [
        { label: 'ENCY CAM',                 href: '/produkte/sprutcam-ency' },
        { label: t.nav.products_items.p3d,   href: '/produkte/p3d-slicer' },
        { label: t.nav.products_items.solidworks, href: '/produkte/solidworks' },
        { label: t.nav.products_items.delmia, href: '/produkte/delmia-catia' },
      ],
    },
    {
      key: 'solutions', label: t.nav.solutions,
      items: [
        { label: t.nav.solutions_items.cnc,    href: '/loesungen/cnc' },
        { label: t.nav.solutions_items.robot,  href: '/loesungen/roboter' },
        { label: t.nav.solutions_items['5axis'], href: '/loesungen/5-achs' },
        { label: t.nav.solutions_items.cad,    href: '/loesungen/cad' },
      ],
    },
    { key: 'service', label: t.nav.service,  href: '/service' },
    { key: 'news',    label: t.nav.news,     href: '/news' },
    { key: 'about',   label: t.nav.about,    href: '/ueber-uns' },
    { key: 'contact', label: t.nav.contact,  href: '/kontakt' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logos/logo-dtr.png" alt="DTR Reitz" width={160} height={50} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.items && openDropdown(item.key)}
              onMouseLeave={() => item.items && closeDropdown()}
            >
              {item.href ? (
                <Link href={item.href} className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors rounded-lg hover:bg-brand-gray">
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors rounded-lg hover:bg-brand-gray">
                  {item.label}
                  <svg className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
              )}

              {/* Dropdown */}
              {item.items && activeDropdown === item.key && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => openDropdown(item.key)}
                  onMouseLeave={closeDropdown}
                >
                  <div className="w-60 bg-white border border-gray-100 shadow-xl rounded-xl py-2 animate-fade-in">
                    {item.items.map(sub => (
                      <Link key={sub.href} href={sub.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-brand-navy hover:bg-brand-gray hover:text-brand-blue transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-bold">
            <button onClick={() => setLang('de')} className={`px-2 py-1 rounded transition-colors ${lang === 'de' ? 'bg-brand-blue text-white' : 'text-brand-muted hover:text-brand-navy'}`}>DE</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLang('en')} className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-brand-blue text-white' : 'text-brand-muted hover:text-brand-navy'}`}>EN</button>
          </div>
          <Link href="/demo" className="btn-primary">{t.nav.demo}</Link>
        </div>

        {/* Mobile */}
        <button className="lg:hidden p-2 text-brand-navy" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navItems.map(item => (
              <div key={item.key}>
                {item.href
                  ? <Link href={item.href} className="block py-2.5 text-sm font-medium text-brand-navy" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  : <>
                      <div className="py-2 text-xs font-bold text-brand-blue uppercase tracking-wide">{item.label}</div>
                      {item.items?.map(sub => (
                        <Link key={sub.href} href={sub.href} className="block py-2 pl-4 text-sm text-brand-muted hover:text-brand-blue" onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                      ))}
                    </>
                }
              </div>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs font-semibold">
                <button onClick={() => setLang('de')} className={`px-2 py-1 rounded ${lang === 'de' ? 'bg-brand-blue text-white' : 'text-brand-muted'}`}>DE</button>
                <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-brand-blue text-white' : 'text-brand-muted'}`}>EN</button>
              </div>
              <Link href="/demo" className="btn-primary text-xs" onClick={() => setMobileOpen(false)}>{t.nav.demo}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
