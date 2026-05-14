import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'DELMIA / CATIA | DTR Reitz' }
export default function DelmiaPage() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6"><div className="w-6 h-0.5 bg-purple-500" /><span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Dassault Systèmes Partner</span></div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">DELMIA & CATIA — Digitale Fabrik und Robotersimulation</h1>
            <p className="text-gray-300 leading-relaxed mb-8">DELMIA für Roboterprogrammierung, Anlagensimulation und digitale Fabrikplanung. CATIA für anspruchsvolle Konstruktion in Luft- und Raumfahrt, Automotive und Maschinenbau.</p>
            <div className="flex gap-4 flex-wrap"><Link href="/demo" className="btn-primary">Beratung anfragen</Link><Link href="/kontakt" className="btn-outline-white">Kontakt</Link></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/assets/Screenshot-2026-03-31-160905.png" alt="DELMIA" width={640} height={420} className="w-full object-cover" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
