import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'SolidWorks | DTR Reitz' }
export default function SolidWorksPage() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6"><div className="w-6 h-0.5 bg-amber-500" /><span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Autorisierter Reseller</span></div>
            <div className="mb-6"><Image src="/images/logos/logo-solidworks.png" alt="SolidWorks" width={200} height={60} className="h-12 w-auto object-contain brightness-0 invert" /></div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">3D-CAD für Konstruktion und Produktentwicklung</h1>
            <p className="text-gray-300 leading-relaxed mb-8">Als autorisierter SolidWorks Reseller bieten wir Lizenzen, Schulungen und Support für den weltweiten CAD-Marktführer — direkt und persönlich aus Breidenstein.</p>
            <div className="flex gap-4 flex-wrap"><Link href="/demo" className="btn-primary">Beratung anfragen</Link><Link href="/kontakt" className="btn-outline-white">Kontakt</Link></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/assets/bild.png" alt="SolidWorks" width={640} height={420} className="w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center" data-reveal>
          <span className="section-tag justify-center">Leistungen</span>
          <h2 className="section-heading mb-8">Was wir als Reseller bieten</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:'Lizenzen',d:'Kauf, Miete und Subscription — wir finden das richtige Modell für Ihr Unternehmen.'},
              {t:'Schulungen',d:'Grundlagen bis Experte — Präsenz oder online, an Ihren Maschinen oder bei uns.'},
              {t:'Support',d:'Direkter Ansprechpartner, kein Callcenter. Persönlich, schnell, kompetent.'}].map(i => (
              <div key={i.t} className="bg-brand-gray rounded-2xl p-8 text-left">
                <h3 className="font-semibold text-brand-navy text-lg mb-3">{i.t}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
