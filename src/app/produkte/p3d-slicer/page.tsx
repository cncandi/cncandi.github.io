import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'P3D Slicer | DTR Reitz' }

export default function P3DPage() {
  return (
    <PageLayout>
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/assets/druck1-1.webp" alt="P3D" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">Eigenentwicklung</span>
            </div>
            <div className="mb-6">
              <Image src="/images/logos/logo-p3d.png" alt="P3D" width={120} height={50} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">
              Nicht-planares 3D-Drucken mit Robotern und 5-Achs-CNC
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              P3D Slicer ist unsere Eigenentwicklung für das Slicing von Bauteilen mit Robotern und 5-Achs-CNC-Maschinen. Nicht-planare Druckbahnen für höhere Festigkeit und glattere Oberflächen.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/demo" className="btn-primary">Demo anfragen</Link>
              <a href="https://www.p3d-slicer.com" target="_blank" rel="noopener noreferrer" className="btn-outline-white">p3d-slicer.com</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/assets/P3D-Multi-Achsen-Slicer.png" alt="P3D Slicer" width={640} height={420} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal="left">
              <span className="section-tag">Features</span>
              <h2 className="section-heading mb-6">Was P3D Slicer einzigartig macht</h2>
              <ul className="space-y-4">
                {['Nicht-planare Werkzeugbahnen für höhere Festigkeit','Unterstützt KUKA, FANUC, ABB und alle gängigen Roboter','Visual Components Plugin für vollständige Offline-Simulation','Direkter G-Code Export für 5-Achs-CNC-Maschinen','Automatische Kollisionsprüfung und Achslimitüberwachung','Parametrische Bahnplanung mit frei definierbaren Schichten'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-brand-muted text-sm">
                    <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="right" className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image src="/images/assets/druck1-1.webp" alt="Roboter 3D Druck" width={640} height={300} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/assets/robot-1.webp" alt="Roboter" width={300} height={200} className="w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-brand-navy flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <div className="font-display text-4xl font-bold mb-1">5-Achs</div>
                  <div className="text-gray-400 text-sm">& Roboter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
