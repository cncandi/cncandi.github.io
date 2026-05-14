'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function P3DSection() {
  const { lang } = useI18n()
  return (
    <section className="py-28 bg-brand-navy overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#0a9ab9"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/></svg>
      </div>
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-teal/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal="left" className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-brand-teal/20">
            <Image src="/images/assets/P3D-Multi-Achsen-Slicer.png" alt="P3D Slicer" width={640} height={420} className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl overflow-hidden shadow-xl border-2 border-brand-teal/30 w-44 h-32 img-zoom">
            <Image src="/images/assets/druck1-1.webp" alt="3D Druck" fill className="object-cover" />
          </div>
        </div>
        <div data-reveal="right" className="text-white">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-brand-teal" />
            <span className="text-brand-teal text-xs font-bold tracking-widest uppercase">P3D Slicer</span>
          </div>
          <div className="mb-5">
            <Image src="/images/logos/logo-p3d.png" alt="P3D" width={100} height={40} className="h-8 w-auto object-contain brightness-0 invert" />
          </div>
          <h2 className="font-display text-4xl leading-tight mb-6">
            {lang==='de' ? 'Nicht-planares 3D-Drucken mit Robotern & 5-Achs-CNC' : 'Non-planar 3D printing with robots & 5-axis CNC'}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {lang==='de'
              ? 'P3D Slicer ist unsere Eigenentwicklung für das Slicing mit Robotern und 5-Achs-CNC. Nicht-planare Druckbahnen für höhere Festigkeit und glattere Oberflächen.'
              : 'P3D Slicer is our proprietary slicing software for robots and 5-axis CNC. Non-planar toolpaths for higher strength and smoother surfaces.'}
          </p>
          <ul className="space-y-3 mb-8">
            {(lang==='de'
              ? ['KUKA, FANUC, ABB — alle gängigen Roboter','Visual Components Integration','Automatische Kollisionsprüfung','Direkter G-Code Export']
              : ['KUKA, FANUC, ABB — all common robots','Visual Components integration','Automatic collision checking','Direct G-Code export']
            ).map(f => (
              <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0" />{f}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 flex-wrap">
            <Link href="/produkte/p3d-slicer" className="btn-primary">
              {lang==='de' ? 'P3D Slicer entdecken' : 'Discover P3D Slicer'}
            </Link>
            <a href="https://www.p3d-slicer.com" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              p3d-slicer.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
