import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Kontakt | ENCY' }

export default function KontaktPage() {
  return (
    <PageLayout title="Kontakt" subtitle="Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Ihre Anfrage!" cta={false}>
      <section className="py-12 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="border border-brand-teal/20 rounded-xl p-6 bg-white/5">
            <h2 className="text-white font-semibold text-lg mb-5">Kontaktformular</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm mb-1.5">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-teal" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1.5">E-Mail</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-teal" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1.5">Nachricht</label>
                <textarea rows={5} className="w-full bg-white/10 border border-white/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-teal resize-none" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="robot" className="w-4 h-4" />
                <label htmlFor="robot" className="text-white/60 text-sm">Ich bin kein Roboter</label>
              </div>
              <button className="w-full bg-brand-teal text-white py-3 rounded font-semibold hover:bg-brand-teal-dark transition-colors">
                Nachricht senden
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: '📞', label: 'Telefon', val: '+49 (6461) 759 343 7' },
              { icon: '✉️', label: 'E-Mail', val: 'info@cnc-technik.de' },
              { icon: '📍', label: 'Adresse', val: 'Perfstrasse 2, 35216 Breidenstein' },
              { icon: '🕐', label: 'Öffnungszeiten', val: 'Mo. - Fr. 8:00 - 17:00 Uhr' },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4 border border-brand-teal/20 rounded-xl p-4 bg-white/5">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <div className="text-brand-teal font-semibold text-sm mb-1">{c.label}</div>
                  <div className="text-white/80 text-sm">{c.val}</div>
                </div>
              </div>
            ))}
            <div className="border border-brand-teal/20 rounded-xl p-4 bg-white/5">
              <div className="text-brand-teal font-semibold text-sm mb-3">Social Media</div>
              <div className="flex gap-3">
                {[
                  { href: 'https://cnc-technik.de/instagram', label: 'Instagram', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                  { href: 'https://cnc-technik.de/facebook', label: 'Facebook', svg: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { href: 'https://cnc-technik.de/linkedin', label: 'LinkedIn', svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { href: 'https://cnc-technik.de/youtube', label: 'YouTube', svg: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white/50 hover:text-brand-teal hover:border-brand-teal transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.svg}/></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
