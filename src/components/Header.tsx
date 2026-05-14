'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const nav = [
  { key: 'about', label: 'Über uns', items: [
    { label: 'Unternehmen',     href: '/ueber-uns' },
    { label: 'Team',            href: '/unternehmen/team' },
    { label: 'Freie Stellen',   href: '/unternehmen/jobs' },
  ]},
  { key: 'leistungen', label: 'sonstige Leistungen', items: [
    { label: 'Sonderentwicklung',     href: '/unternehmen/sonderentwicklung' },
    { label: '3D Messdienstleistung', href: '/unternehmen/3d-messen' },
    { label: 'Schulungen',            href: '/service' },
    { label: 'Support',               href: '/service' },
  ]},
  { key: 'forschung', label: 'Forschung', href: '/unternehmen/forschung' },
  { key: 'reseller',  label: 'Resellerprogramm', href: '/unternehmen/reseller' },
  { key: 'news',      label: 'News', href: '/news' },
  { key: 'shop',      label: 'Shop', href: '/shop' },
  { key: 'machines',  label: 'Maschinelibrary', href: '/maschinen' },
]

export default function Header() {
  const { lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const open  = (k: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveDropdown(k) }
  const close = ()           => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 220) }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/images/logos/logo-encycam.png" alt="ENCY" width={80} height={32} className="h-8 w-auto object-contain" />
          <div className="text-white/60 text-[10px] leading-tight font-light hidden sm:block">
            sold by<br/>Datentechnik Reitz
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0">
          {nav.map(item => (
            <div key={item.key} className="relative"
              onMouseEnter={() => item.items && open(item.key)}
              onMouseLeave={() => item.items && close()}>
              {item.href
                ? <Link href={item.href} className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors">{item.label}</Link>
                : <button className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors ${activeDropdown === item.key ? 'text-brand-teal' : 'text-white/80 hover:text-white'}`}>
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
              }
              {item.items && activeDropdown === item.key && (
                <div className="absolute top-full left-0 pt-1 z-50"
                  onMouseEnter={() => open(item.key)} onMouseLeave={close}>
                  <div className="w-52 bg-brand-navy border border-white/10 shadow-2xl rounded-lg py-2 animate-fade-in">
                    {item.items.map(sub => (
                      <Link key={sub.href} href={sub.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}>
                        <span className="w-1 h-1 rounded-full bg-brand-teal flex-shrink-0" />
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
          <div className="flex items-center text-xs font-semibold border border-white/20 rounded overflow-hidden">
            <button onClick={() => setLang('de')} className={`px-2 py-1 transition-colors ${lang === 'de' ? 'bg-brand-teal text-white' : 'text-white/60 hover:text-white'}`}>DE</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-brand-teal text-white' : 'text-white/60 hover:text-white'}`}>EN</button>
          </div>
          <Link href="/kontakt" className="px-5 py-2 text-sm font-semibold text-brand-navy bg-brand-teal rounded hover:bg-brand-teal-dark transition-colors">
            Kontakt
          </Link>
        </div>

        <button className="xl:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-brand-navy/95 border-t border-white/10 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {nav.map(item => (
              <div key={item.key}>
                {item.href
                  ? <Link href={item.href} className="block py-2.5 text-sm text-white/80" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  : <><div className="py-2 text-xs font-bold text-brand-teal uppercase tracking-wide">{item.label}</div>
                    {item.items?.map(sub => <Link key={sub.href} href={sub.href} className="block py-2 pl-4 text-sm text-white/60" onClick={() => setMobileOpen(false)}>{sub.label}</Link>)}</>
                }
              </div>
            ))}
            <div className="pt-4">
              <Link href="/kontakt" className="block text-center px-5 py-2.5 text-sm font-semibold text-brand-navy bg-brand-teal rounded" onClick={() => setMobileOpen(false)}>Kontakt</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
