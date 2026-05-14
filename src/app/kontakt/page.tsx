import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Kontakt | DTR Reitz' }
export default function KontaktPage() {
  return (
    <PageLayout cta={false}>
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="section-tag justify-center">Kontakt</span>
            <h1 className="section-heading mb-4">Sprechen Sie uns an</h1>
            <p className="text-brand-muted max-w-xl mx-auto">Persönliche Beratung, kein Callcenter. Wir antworten in der Regel innerhalb eines Werktags.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div data-reveal="left" className="space-y-6">
              {[
                {icon:'📍', label:'Adresse', val:'Perfstraße 2, 35216 Breidenstein'},
                {icon:'📞', label:'Telefon', val:'+49 6461 7593437'},
                {icon:'📠', label:'Fax', val:'+49 6461 7593438'},
                {icon:'✉️', label:'E-Mail', val:'reitz@cnc-technik.de'},
                {icon:'🌐', label:'Web', val:'www.cnc-technik.de'},
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                  <div><div className="text-xs font-bold text-brand-muted uppercase tracking-wide mb-1">{c.label}</div><div className="text-brand-navy font-medium">{c.val}</div></div>
                </div>
              ))}
              <div className="pt-4">
                <Image src="/images/assets/Andreas.png" alt="Andreas Reitz" width={200} height={200} className="rounded-2xl shadow-lg" />
                <div className="mt-3"><div className="font-semibold text-brand-navy">Andreas Reitz</div><div className="text-brand-muted text-sm">Geschäftsführer</div></div>
              </div>
            </div>
            <div data-reveal="right" className="bg-brand-gray rounded-2xl p-8">
              <h2 className="font-semibold text-brand-navy text-xl mb-6">Nachricht senden</h2>
              <div className="space-y-4">
                {[{l:'Name',t:'text',p:'Ihr Name'},{l:'E-Mail',t:'email',p:'ihre@email.de'},{l:'Telefon',t:'tel',p:'+49 ...'}].map(f => (
                  <div key={f.l}><label className="block text-sm font-medium text-brand-navy mb-2">{f.l}</label><input type={f.t} placeholder={f.p} className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" /></div>
                ))}
                <div><label className="block text-sm font-medium text-brand-navy mb-2">Nachricht</label><textarea rows={5} placeholder="Wie können wir Ihnen helfen?" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" /></div>
                <button className="btn-primary w-full justify-center">Nachricht senden</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
