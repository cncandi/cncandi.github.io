import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'CAD/CAM Lösungen | ENCY' }

const features3 = [
  { img: '/images/encycam/State-of-art-interface.png', title: 'Leistungsstarke Software', desc: 'Intuitive CAD/CAM-Lösungen für Konstruktion und Fertigung' },
  { img: '/images/encycam/G-code-based-simulation.png', title: 'Simulation & Optimierung', desc: 'Virtuelle Maschinensimulation für maximale Sicherheit' },
  { img: '/images/mockup/25D_Fraesbearbeitung_03_1383x922.png', title: 'Präzise Fertigung', desc: 'Hochpräziser Fräs- und Drehmaschineneinsatz' },
]

const products = [
  { label: '2.5D Fräsbearbeitung', href: '/ency/2-5d-fraesen' },
  { label: '3D Fräsbearbeitung', href: '/ency/3d-fraesen' },
  { label: 'Simultanfräsen', href: '/ency/simultanfraesen' },
  { label: 'Drehen mit Gegenspindel', href: '/ency/drehen' },
  { label: 'Fastmill HPC', href: '/ency/fastmill' },
  { label: 'Erodieren', href: '/ency/erodieren' },
  { label: 'Schachteln, Schneiden', href: '/ency/schachteln' },
  { label: 'CNC Editor', href: '/ency/cnc-editor' },
  { label: 'Maschinensimulation', href: '/ency/maschinensimulation' },
  { label: 'Toolmanager', href: '/ency/toolmanager' },
  { label: 'Schnittstellen', href: '/ency/schnittstellen' },
  { label: 'Funktionsmatrix ENCY', href: '/ency/funktionsmatrix' },
]

const vorteile = [
  { icon: '⚡', title: 'Effiziente Programmierung', desc: 'Schnelle und einfache Erstellung von NC-Programmen' },
  { icon: '🎯', title: 'Realistische Simulation', desc: 'Umfangreiche Maschinensimulation für kollisionsfreie Verwendung' },
  { icon: '🤖', title: 'Automatisierte Prozesse', desc: 'Optimierte Arbeitsabläufe und verbesserte Effizienz' },
  { icon: '✓', title: 'Perfekte Ergebnisse', desc: 'Hochpräzise Präsentation der Fräsung komplexer Teile' },
]

export default function EncyPage() {
  return (
    <PageLayout title="CAD/CAM Lösungen" subtitle="Präzision und Effizienz durch modernste Technologien">
      {/* 3 feature cards */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features3.map(f => (
            <div key={f.title} data-reveal className="border border-brand-teal/20 rounded-xl overflow-hidden bg-white/5">
              <div className="relative h-40">
                <Image src={f.img} alt={f.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products grid */}
        <h2 className="font-display text-2xl text-white mb-6">Produkte</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {products.map(p => (
            <Link key={p.href} href={p.href}
              className="border border-brand-teal/20 rounded-lg p-4 text-white/70 text-sm hover:border-brand-teal hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group">
              {p.label}
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          ))}
        </div>

        {/* Vorteile */}
        <h2 className="font-display text-2xl text-white mb-6">Vorteile mit ENCYCAM</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {vorteile.map(v => (
            <div key={v.title} data-reveal className="border border-brand-teal/20 rounded-xl p-5 bg-white/5 text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-brand-teal font-semibold mb-2">{v.title}</h3>
              <ul className="text-white/60 text-xs leading-relaxed">
                {v.desc.split('•').map((d, i) => d.trim() && <li key={i}>• {d.trim()}</li>)}
              </ul>
              <p className="text-white/60 text-xs mt-2">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* System requirements */}
        <div className="border border-brand-teal/20 rounded-xl p-6 bg-white/5">
          <h2 className="font-display text-xl text-white mb-4">Hardwarevoraussetzungen ENCY und SolidWorks</h2>
          <h3 className="text-brand-teal font-semibold mb-3">ENCY Systemanforderungen:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60">
            <div><strong className="text-white/80">Prozessor:</strong><br/>Minimum: Intel oder AMD 64-bit, 3.7 GHz<br/>Empfohlen: Intel i7 oder AMD Ryzen 7, 3.8 GHz</div>
            <div><strong className="text-white/80">Betriebssystem:</strong><br/>Windows 11 — 32 oder 64 Bit Professional</div>
            <div><strong className="text-white/80">Arbeitsspeicher:</strong><br/>Minimum: 16 GB · Empfohlen: 32 GB</div>
            <div><strong className="text-white/80">Video:</strong><br/>Minimum: NVIDIA OpenCL 1.5 mit 3GB<br/>Empfohlen: NVIDIA mit mind. 8GB Speicher</div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
