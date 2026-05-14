'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function P3DSection() {
  const { lang } = useI18n()
  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/assets/P3D-Multi-Achsen-Slicer.png" alt="P3D Slicer" width={640} height={420} className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl overflow-hidden shadow-xl border-2 border-brand-red w-48 h-32">
              <Image src="/images/assets/druck1-1.webp" alt="3D Druck Roboter" fill className="object-cover" />
            </div>
          </div>
          {/* Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">P3D Slicer</span>
            </div>
            <div className="mb-4">
              <Image src="/images/logos/logo-p3d.png" alt="P3D" width={100} height={40} className="h-8 w-auto object-contain brightness-0 invert" />
            </div>
            <h2 className="font-display text-4xl leading-tight mb-6">
              {lang === 'de' ? 'Nicht-planares 3D-Drucken mit Robotern & 5-Achs-CNC' : 'Non-planar 3D printing with robots & 5-axis CNC'}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {lang === 'de'
                ? 'P3D Slicer ist unsere Eigenentwicklung für das Slicing von Bauteilen mit Robotern und 5-Achs-CNC-Maschinen. Ermöglicht nicht-planare Druckbahnen für höhere Festigkeit und glattere Oberflächen.'
                : 'P3D Slicer is our in-house development for slicing parts with robots and 5-axis CNC machines. Enables non-planar toolpaths for higher strength and smoother surfaces.'}
            </p>
            <ul className="space-y-3 mb-8">
              {(lang === 'de'
                ? ['KUKA, FANUC, ABB — alle gängigen Roboter','Visual Components Integration','Automatische Kollisionsprüfung','Direkter G-Code Export']
                : ['KUKA, FANUC, ABB — all common robots','Visual Components integration','Automatic collision checking','Direct G-Code export']
              ).map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/produkte/p3d-slicer" className="btn-primary">
                {lang === 'de' ? 'P3D Slicer entdecken' : 'Discover P3D Slicer'}
              </Link>
              <a href="https://www.p3d-slicer.com" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                p3d-slicer.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
